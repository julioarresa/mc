const $ = selector => document.querySelector(selector);
const blocks = [...document.querySelectorAll("#study section")];
const blockTitles = new Map(blocks.map(block => [block.id, block.dataset.title]));
const tabs = [...document.querySelectorAll("[data-view]")];
const panels = [...document.querySelectorAll(".view")];
const search = $("#search");
const essentials = $("#essentials");
const study = $("#study");
const mobileIndex = $(".mobileindex");
const state = {
  get(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem("industriales-" + key)) ?? fallback;
    } catch {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem("industriales-" + key, JSON.stringify(value));
    } catch {
      // The current session still works when storage is unavailable.
    }
  }
};

const done = new Set(state.get("blocks-v1", []));
function renderProgress() {
  const count = blocks.filter(block => done.has(block.id)).length;
  $("#progressbar").style.width = (count / blocks.length * 100) + "%";
  $(".progress").setAttribute("aria-valuemax", blocks.length);
  $(".progress").setAttribute("aria-valuenow", count);
  $("#progresslabel").textContent = `${count} de ${blocks.length} bloques repasados`;
  $("#mobileprogress").textContent = `· ${count}/${blocks.length}`;
}

const indexLinks = blocks.map((block, index) =>
  `<a href="#${block.id}" data-block="${block.id}"><span>${String(index + 1).padStart(2, "0")}</span>${block.dataset.title}</a>`
).join("");
$("#index").innerHTML = indexLinks;
$("#mobilelinks").innerHTML = indexLinks;
blocks.forEach(block => {
  const label = document.createElement("label");
  label.className = "done";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = done.has(block.id);
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) done.add(block.id);
    else done.delete(block.id);
    state.set("blocks-v1", [...done]);
    renderProgress();
  });
  label.append(checkbox, "Puedo explicar este bloque sin mirar");
  block.append(label);
});
renderProgress();

function showView(view) {
  panels.forEach(panel => { panel.hidden = panel.id !== view; });
  tabs.forEach(tab => {
    const active = tab.dataset.view === view;
    tab.setAttribute("aria-selected", active);
    tab.tabIndex = active ? 0 : -1;
  });
  $("#studytools").hidden = view !== "study";
  mobileIndex.hidden = view !== "study";
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
  tab.addEventListener("keydown", event => {
    const destinations = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1
    };
    if (!Object.hasOwn(destinations, event.key)) return;
    event.preventDefault();
    const next = tabs[destinations[event.key]];
    showView(next.dataset.view);
    next.focus();
  });
});

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function searchBlocks() {
  const query = normalize(search.value.trim());
  blocks.forEach(block => { block.hidden = !normalize(block.textContent).includes(query); });
  const count = blocks.filter(block => !block.hidden).length;
  $("#noresults").hidden = count !== 0;
  $("#resultcount").textContent = query ? `${count} ${count === 1 ? "bloque" : "bloques"}` : "";
}

search.addEventListener("input", searchBlocks);
essentials.checked = state.get("essentials", false);
study.classList.toggle("onlyessential", essentials.checked);
essentials.addEventListener("change", () => {
  study.classList.toggle("onlyessential", essentials.checked);
  state.set("essentials", essentials.checked);
});

function openBlock(id) {
  showView("study");
  search.value = "";
  searchBlocks();
  mobileIndex.open = false;
  requestAnimationFrame(() => document.getElementById(id).scrollIntoView());
}

document.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#"]');
  if (!link) return;
  const id = link.hash.slice(1);
  if (blockTitles.has(id) && link.hash === location.hash) openBlock(id);
});

function openHash() {
  const id = location.hash.slice(1);
  if (blockTitles.has(id)) openBlock(id);
  else if (panels.some(panel => panel.id === id)) showView(id);
}
window.addEventListener("hashchange", openHash);
openHash();

const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    for (const link of document.querySelectorAll("#index a")) {
      link.classList.toggle("active", link.dataset.block === entry.target.id);
    }
  }
}, { rootMargin: "-110px 0px -65% 0px" });
blocks.forEach(block => observer.observe(block));

$("#print").addEventListener("click", () => window.print());

for (const select of [$("#cardtopic"), $("#quiztopic")]) {
  for (const [id, title] of blockTitles) select.add(new Option(title, id));
}

$("#quickgrid").innerHTML = blocks.map(block => {
  const summary = block.querySelector(".essential").cloneNode(true);
  summary.querySelector(".overline").remove();
  return `<div class="quickcard"><h3>${block.dataset.title}</h3><p>${summary.innerHTML}</p><a href="#${block.id}">Revisar el bloque →</a></div>`;
}).join("");

for (const story of study.querySelectorAll(".story")) {
  const copy = story.cloneNode(true);
  const link = document.createElement("a");
  link.href = "#" + story.closest("section").id;
  link.textContent = "Ver el dato en su contexto →";
  copy.append(link);
  $("#stories").append(copy);
}

const cards = Object.entries(practica).flatMap(([block, topic]) =>
  topic.cards.map(([id, question, answer, source = topic.source]) => ({
    id: block + "-" + id, block, question, answer, source
  }))
);
const cardState = state.get("cards-v1", {});
const dueNow = card => !cardState[card.id]?.due || cardState[card.id].due <= Date.now();
const deckSelect = $("#deck");
const cardTopic = $("#cardtopic");
const answerPanel = $("#flasha");
const reveal = $("#reveal");
const again = $("#again");
const remember = $("#remember");
const previous = $("#prev");
const next = $("#next");
let deck = [];
let position = 0;

function cardPool() {
  const mode = deckSelect.value;
  return cards.filter(card => {
    if (cardTopic.value !== "all" && card.block !== cardTopic.value) return false;
    if (mode === "repeat") return cardState[card.id]?.repeat;
    if (mode === "due") return dueNow(card);
    return true;
  });
}

function renderCard(status = "") {
  const card = deck[position];
  answerPanel.hidden = true;
  reveal.hidden = false;
  again.disabled = remember.disabled = true;
  reveal.disabled = previous.disabled = next.disabled = !card;
  $("#flashstatus").textContent = status;
  const count = card ? `Tarjeta ${position + 1} de ${deck.length}` : "Mazo vacío";
  $("#flashcount").textContent = `${count} · ${cards.filter(dueNow).length} pendientes hoy en total`;
  $("#flashtag").textContent = card ? blockTitles.get(card.block) : "";
  $("#flashq").textContent = card ? card.question : "No hay tarjetas en esta selección.";
}

function rebuildDeck() {
  deck = cardPool();
  position = 0;
  renderCard();
}
deckSelect.addEventListener("change", rebuildDeck);
cardTopic.addEventListener("change", rebuildDeck);
$("#shuffle").addEventListener("click", () => {
  deck = cardPool();
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  position = 0;
  renderCard();
});

function externalLink(url) {
  const label = url.startsWith("industriales-assets/") ? "Consultar temario" : "Consultar BOE";
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
}

function escapeText(value) {
  return value.replace(/[&<>]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[char]));
}

function revealCard() {
  const card = deck[position];
  if (!card) return;
  answerPanel.innerHTML = `<p>${escapeText(card.answer)}</p><a href="#${card.block}">Revisar el bloque →</a> · ${externalLink(card.source)}`;
  answerPanel.hidden = false;
  reveal.hidden = true;
  again.disabled = remember.disabled = false;
  answerPanel.focus();
}

function moveCard(delta) {
  if (!deck.length) return;
  position = (position + delta + deck.length) % deck.length;
  renderCard();
}

function gradeCard(recalled) {
  const card = deck[position];
  if (!card || answerPanel.hidden) return;
  const level = recalled ? Math.min((cardState[card.id]?.level ?? 0) + 1, 4) : 0;
  const days = [0, 1, 3, 7, 14][level];
  cardState[card.id] = { level, due: Date.now() + days * 86400000, repeat: !recalled };
  state.set("cards-v1", cardState);

  const eligible = new Set(cardPool());
  deck = deck.filter(item => eligible.has(item));
  const index = deck.indexOf(card);
  position = index === -1 ? Math.min(position, Math.max(deck.length - 1, 0)) : (index + 1) % deck.length;
  const delay = days === 1 ? "1 día" : `${days} días`;
  renderCard(recalled ? `Próximo repaso en ${delay}.` : "Guardada para repetir hoy.");
  if (deck.length) reveal.focus();
  else deckSelect.focus();
}

reveal.addEventListener("click", revealCard);
previous.addEventListener("click", () => moveCard(-1));
next.addEventListener("click", () => moveCard(1));
again.addEventListener("click", () => gradeCard(false));
remember.addEventListener("click", () => gradeCard(true));
rebuildDeck();

const questions = Object.entries(practica).flatMap(([block, topic]) =>
  topic.quiz.map(([question, options, correct, explanation, source = topic.source]) => ({
    block, question, options, correct, explanation, source
  }))
);
const quizTopic = $("#quiztopic");
const quizList = $("#quizlist");
const quizAnswers = new Map();

function quizPool() {
  return questions.filter(question => quizTopic.value === "all" || question.block === quizTopic.value);
}

function updateScore() {
  const visible = quizPool();
  const answered = visible.filter(question => quizAnswers.has(question));
  const correct = answered.filter(question => quizAnswers.get(question) === question.correct).length;
  $("#score").textContent = `${correct} ${correct === 1 ? "acierto" : "aciertos"} · ${answered.length}/${visible.length} respondidas`;
}

function showAnswer(row, question, answer) {
  const correct = answer === question.correct;
  for (const button of row.querySelectorAll("[data-answer]")) {
    const option = Number(button.dataset.answer);
    button.disabled = true;
    if (option === question.correct) {
      button.classList.add("correct");
      button.setAttribute("aria-label", question.options[option] + " · Respuesta correcta");
    } else if (option === answer) {
      button.classList.add("wrong");
      button.setAttribute("aria-label", question.options[option] + " · Tu respuesta incorrecta");
    }
  }
  const feedback = row.querySelector(".feedback");
  feedback.hidden = false;
  feedback.classList.toggle("error", !correct);
  const result = correct ? "Correcto." : `Respuesta correcta: ${escapeText(question.options[question.correct])}.`;
  feedback.innerHTML = `<p><b>${result}</b> ${escapeText(question.explanation)}</p>
    <div class="quizlinks"><a href="#${question.block}">Revisar el bloque →</a>${externalLink(question.source)}</div>`;
}

function renderQuiz() {
  const visible = quizPool();
  quizList.innerHTML = visible.map((question, index) => `
    <article class="quizitem" data-question="${questions.indexOf(question)}">
      <div class="overline">${index + 1} · ${blockTitles.get(question.block)}</div>
      <h3>${escapeText(question.question)}</h3>
      <div class="options">${question.options.map((option, i) =>
        `<button type="button" data-answer="${i}">${escapeText(option)}</button>`
      ).join("")}</div>
      <div class="feedback" tabindex="-1" role="status" hidden></div>
    </article>`
  ).join("");
  for (const row of quizList.children) {
    const question = questions[Number(row.dataset.question)];
    if (quizAnswers.has(question)) showAnswer(row, question, quizAnswers.get(question));
  }
  updateScore();
}

quizList.addEventListener("click", event => {
  const button = event.target.closest("[data-answer]");
  if (!button) return;
  const row = button.closest("[data-question]");
  const question = questions[Number(row.dataset.question)];
  if (quizAnswers.has(question)) return;
  const answer = Number(button.dataset.answer);
  quizAnswers.set(question, answer);
  showAnswer(row, question, answer);
  row.querySelector(".feedback").focus();
  updateScore();
});
quizTopic.addEventListener("change", renderQuiz);
$("#resetquiz").addEventListener("click", () => {
  for (const question of quizPool()) quizAnswers.delete(question);
  renderQuiz();
});
renderQuiz();
