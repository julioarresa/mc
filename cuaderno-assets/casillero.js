"use strict";

const memoryPegs = [
  "Aro",
  "Tea",
  "Noé",
  "Humo",
  "Oca",
  "Ola",
  "Oso",
  "Ufo",
  "Hacha",
  "Ave",
  "Toro",
  "Teta, dado, tata",
  "Tina, duna, tuna",
  "Átomo",
  "Taco",
  "Tela",
  "Tos, taza",
  "Tufo, taifa",
  "Techo, teja, toga, daga",
  "Tubo, tapa, tuba",
  "Noria",
  "Nata, nido",
  "Niño",
  "Nemo (el pececito)",
  "Nuca, anca",
  "Nilo (entre las pirámides)",
  "Anís (anisetes de colores)",
  "Nife (centro de la Tierra y lava volcánica)",
  "Nicho",
  "Nube, nabo",
  "Meru (tu perra blanca y negra)",
  "Moto, mata, meta",
  "Mina, mono (King Kong)",
  "Momia, memo, mamá",
  "Hamaca, moco",
  "Mula, miel",
  "Mesa, maza",
  "Mafia (gánster con traje a rayas)",
  "Mecha, macho, mago",
  "Mopa, ameba",
  "Coro, car (mini car)",
  "Cohete, coto",
  "Cuna, cuña, cono",
  "Cama",
  "Coco, coque (carbón)",
  "Culo, cola, celo (cinta adhesiva)",
  "Casa, queso",
  "Café, cofia",
  "Coche, caja",
  "Cubo, cepo, capa",
  "Loro, lira",
  "Lata",
  "Luna, lana, lino",
  "Lima, loma, alma",
  "Loco, laca",
  "Lulú (perrito blanco), lelo, lila",
  "Losa, lazo",
  "Alfa (tenazas)",
  "Lucha, lago",
  "Lobo, lupa, lapa",
  "Sor (monja)",
  "Seta",
  "Sena (bajo la torre Eiffel), sien",
  "Sima (gruta)",
  "Saco",
  "Sol, sal",
  "Seso (cerebro)",
  "Sofá",
  "Sacho (rastrillo), soga, soja",
  "Sebo, sepia",
  "Faro de mar",
  "Foto (máquina de fotos), feto",
  "Faena del hogar",
  "Fama (alguien famoso)",
  "Foca",
  "Falo, fila",
  "Foso (con cocodrilos)",
  "Fofó (payaso), fofo",
  "Ficha, faja",
  "Efebo (ángel), fobia",
  "Hachero, grúa",
  "Chita (mona de Tarzán), gato",
  "China (muralla)",
  "Chama (mercadillo), goma",
  "Chico(a), jaca",
  "Chal, chulo, gol",
  "Chas (látigo), Chis (silencio), gas",
  "Chufa (horchata), jefe",
  "Chucho (tu perrita)",
  "Chivo, chapa",
  "Bar, vara",
  "Bota de vestir, bata",
  "Vino, viña, pana",
  "BUM (explosión)",
  "Vaca",
  "Vela, bola",
  "Vaso",
  "Bofia (policía en argot mafioso)",
  "Bache, bajo, vago",
  "Bebé, papá, pavo",
  "Torre, tarro, torero"
];

const pegSearch = document.querySelector("#pegsearch");
const pegList = document.querySelector("#peglist");
function showPegs() {
  const query = normalize(pegSearch.value.trim());
  const matches = memoryPegs.map((label, number) => ({ number, label }))
    .filter(peg => normalize(peg.number + " " + peg.label).includes(query));
  if (!matches.length) {
    const message = document.createElement("p");
    message.className = "note";
    message.textContent = "No hay casillas con ese término.";
    pegList.replaceChildren(message);
    return;
  }
  pegList.replaceChildren(...matches.map(({ number, label }) => {
    const peg = document.createElement("div");
    const index = document.createElement("b");
    peg.className = "peg";
    index.textContent = number;
    peg.append(index, label);
    return peg;
  }));
}
pegSearch.addEventListener("input", showPegs);
showPegs();
