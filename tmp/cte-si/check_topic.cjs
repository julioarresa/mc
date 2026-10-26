const { chromium } = require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('fs');
const assert = require('node:assert/strict');
const path = require('path');

(async()=>{
  let browser;
  try { browser = await chromium.launch({headless:true}); }
  catch {
    const exe = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Google/Chrome/Application/chrome.exe'].find(fs.existsSync);
    if (!exe) throw new Error('No browser available for preview');
    browser = await chromium.launch({headless:true,executablePath:exe});
  }
  const context = await browser.newContext({viewport:{width:1440,height:1000}});
  const page = await context.newPage();
  const errors=[];
  const failed=[];
  page.on('pageerror',e=>errors.push(e.message));
  page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
  const base='http://127.0.0.1:8874';
  assert.equal((await page.goto(base+'/index-cte.html')).status(),200);
  await page.waitForFunction(()=>document.querySelectorAll('#index a').length===20);
  assert.equal(await page.locator('#study section').count(),20);
  assert.equal(await page.locator('#quizlist article').count(),60);
  assert.equal(await page.locator('#stories .story').count(),5);
  assert.equal(await page.locator('#peglist .peg').count(),101);
  await page.screenshot({path:path.join(__dirname,'desktop.png'),fullPage:false});
  await page.locator('#marco .done input').check();
  assert.match(await page.locator('#progresslabel').innerText(),/^1 de 20/);
  await page.reload();
  await page.waitForFunction(()=>document.querySelector('#progresslabel').textContent.startsWith('1 de 20'));
  assert.equal(await page.locator('#marco .done input').isChecked(),true);
  await page.locator('#search').fill('aproximacion');
  assert.equal(await page.locator('#aproximacion').isVisible(),true);
  await page.locator('#search').fill('zzzinexistente');
  assert.equal(await page.locator('#noresults').isVisible(),true);
  await page.locator('#search').fill('');
  await page.locator('#essentials').check();
  assert.equal(await page.locator('#marco .extra').first().isVisible(),false);
  await page.locator('#essentials').uncheck();
  await page.locator('#tab-quick').click();
  assert.equal(await page.locator('#quickgrid .quickcard').count(),20);
  await page.locator('#quickgrid a').first().click();
  assert.equal(await page.locator('#study').isVisible(),true);
  await page.locator('#tab-flash').click();
  assert.match(await page.locator('#flashcount').innerText(),/de 60/);
  await page.locator('#reveal').click();
  assert.equal(await page.locator('#flasha').isVisible(),true);
  assert.match(await page.locator('#flasha a[target="_blank"]').getAttribute('href'),/CTE-DBSI.pdf#page=3$/);
  await page.locator('#again').click();
  await page.locator('#deck').selectOption('repeat');
  assert.match(await page.locator('#flashcount').innerText(),/de 1/);
  await page.locator('#reveal').click();
  await page.locator('#remember').click();
  assert.match(await page.locator('#flashcount').innerText(),/Mazo vacío/);
  await page.locator('#deck').selectOption('all');
  await page.locator('#cardtopic').selectOption('aproximacion');
  assert.match(await page.locator('#flashcount').innerText(),/de 3/);
  await page.locator('#tab-quiz').click();
  await page.locator('#quiztopic').selectOption('aproximacion');
  assert.equal(await page.locator('#quizlist article').count(),3);
  await page.locator('#quizlist [data-answer]').first().click();
  assert.equal(await page.locator('#quizlist .feedback').first().isVisible(),true);
  await page.locator('#quizlist .feedback a[href="#aproximacion"]').click();
  assert.equal(await page.locator('#study').isVisible(),true);
  await page.locator('#tab-quiz').click();
  await page.locator('#quiztopic').selectOption('all');
  // Complete all questions through the UI, using the independent content manifest.
  const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'content.json'),'utf8'));
  await page.locator('#resetquiz').click();
  for(let i=0;i<manifest.quiz.length;i++) {
    await page.locator(`[data-question="${i}"] [data-answer="${manifest.quiz[i].correct}"]`).click();
  }
  assert.match(await page.locator('#score').innerText(),/60 aciertos · 60\/60/);
  assert.equal(await page.locator('#quizlist .feedback a[target="_blank"]').count(),60);
  await page.locator('#tab-memory').click();
  await page.locator('#memory details').click();
  await page.locator('#pegsearch').fill('Nilo');
  assert.equal(await page.locator('#peglist .peg').count(),1);
  await page.locator('#tab-images').click();
  assert.equal(await page.locator('.documentgrid .card').count(),14);
  assert.equal((await context.request.get(base+'/cte-si-assets/CTE-DBSI.pdf')).status(),200);
  await page.locator('#tab-study').click();
  await page.goto(base+'/index-cte.html#maniobra');
  await page.waitForFunction(()=>document.querySelector('#study').hidden===false);
  await page.screenshot({path:path.join(__dirname,'maniobra.png'),fullPage:false});
  // Print must include all blocks, even with filters or another tab selected.
  await page.locator('#search').fill('columna');
  await page.locator('#tab-flash').click();
  await page.emulateMedia({media:'print'});
  assert.equal(await page.locator('#study section:visible').count(),20);
  await page.emulateMedia({media:'screen'});
  await page.goto(base+'/index.html');
  assert.equal(await page.locator('.topic').count(),7);
  await page.locator('a[href="index-cte.html"]').click();
  assert.match(await page.title(),/CTE-SI/);
  const mobileContext=await browser.newContext({viewport:{width:390,height:844}});
  const mobile=await mobileContext.newPage();
  await mobile.goto(base+'/index-cte.html');
  await mobile.waitForFunction(()=>document.querySelectorAll('#index a').length===20);
  assert.equal(await mobile.locator('.mobileindex').isVisible(),true);
  assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await mobile.screenshot({path:path.join(__dirname,'mobile.png'),fullPage:false});
  await mobile.locator('#tab-quiz').click();
  await mobile.locator('#quiztopic').selectOption('fachada-forestal');
  await mobile.screenshot({path:path.join(__dirname,'mobile-quiz.png'),fullPage:false});
  assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  assert.deepEqual(errors,[]);
  assert.deepEqual(failed,[]);
  // Restore pristine study state in the temporary QA profile.
  await page.evaluate(()=>{for(const k of Object.keys(localStorage)){if(k.startsWith('cte-si-'))localStorage.removeItem(k)}});
  console.log(JSON.stringify({blocks:20,cards:60,questions:60,documentSections:14,desktopAndMobile:'passed',scriptErrors:errors,failedRequests:failed}));
  await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

