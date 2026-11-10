const {chromium}=require('C:/Users/User/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'content.json'),'utf8'));
(async()=>{
 let browser;
 try{browser=await chromium.launch({headless:true})}catch{browser=await chromium.launch({headless:true,executablePath:'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'})}
 const context=await browser.newContext({viewport:{width:1440,height:1000}}),page=await context.newPage();
 const errors=[],failures=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failures.push(r.url())});
 const base='http://127.0.0.1:8876';
 // Capture the existing page and the extension in the same desktop/mobile pass.
 await page.goto(base+'/index-cte.html');await page.screenshot({path:path.join(__dirname,'incumbent-desktop.png')});
 await page.goto(base+'/index-prl.html');
 assert.equal(await page.locator('#study section').count(),28);assert.equal(await page.locator('#index a').count(),28);
 assert.equal(await page.locator('#quizlist article').count(),84);assert.equal(await page.locator('#stories .story').count(),9);
 await page.screenshot({path:path.join(__dirname,'desktop.png')});
 await page.locator('#ambito .done input').check();await page.reload();
 assert.match(await page.locator('#progresslabel').innerText(),/^1 de 28/);assert.equal(await page.locator('#ambito .done input').isChecked(),true);
 await page.locator('#search').fill('especialmente sensibles');assert(await page.locator('#evaluacion').isVisible());
 await page.locator('#search').fill('zzzzinexistente');assert(await page.locator('#noresults').isVisible());await page.locator('#search').fill('');
 await page.locator('#essentials').check();assert.equal(await page.locator('#marco .extra').isVisible(),false);await page.locator('#essentials').uncheck();
 await page.locator('#tab-quick').click();assert.equal(await page.locator('#quickgrid .quickcard').count(),28);
 await page.locator('#quickgrid a').first().click();assert(await page.locator('#study').isVisible());
 await page.locator('#tab-flash').click();assert.match(await page.locator('#flashcount').innerText(),/de 84/);
 await page.locator('#reveal').click();assert(await page.locator('#flasha').isVisible());
 assert.match(await page.locator('#flasha a[target="_blank"]').getAttribute('href'),/BOE-A-1995-24292#a2$/);
 await page.locator('#again').click();await page.locator('#deck').selectOption('repeat');assert.match(await page.locator('#flashcount').innerText(),/de 1/);
 await page.locator('#reveal').click();await page.locator('#remember').click();assert.match(await page.locator('#flashcount').innerText(),/Mazo vacío/);
 await page.locator('#deck').selectOption('all');await page.locator('#cardtopic').selectOption('comite');assert.match(await page.locator('#flashcount').innerText(),/de 3/);
 await page.locator('#tab-quiz').click();await page.locator('#quiztopic').selectOption('comite');assert.equal(await page.locator('#quizlist article').count(),3);
 await page.locator('#quizlist [data-answer]').first().click();assert(await page.locator('#quizlist .feedback').first().isVisible());
 await page.locator('#quizlist .feedback a[href="#comite"]').click();assert(await page.locator('#study').isVisible());
 await page.locator('#tab-quiz').click();await page.locator('#quiztopic').selectOption('all');await page.locator('#resetquiz').click();
 // Exercise all corrections and their source links, not only the first question.
 for(let i=0;i<manifest.quiz.length;i++){
  const q=manifest.quiz[i],row=page.locator(`[data-question="${i}"]`);
  await row.locator(`[data-answer="${q.correct}"]`).click();
  assert.match(await row.locator('.feedback').innerText(),/^Correcto/);
  const href=await row.locator('.feedback a[target="_blank"]').getAttribute('href');assert(href.endsWith('#'+q.page.split(':')[1]));
 }
 assert.match(await page.locator('#score').innerText(),/84 aciertos.*84\/84/);
 await page.locator('#resetquiz').click();const wrong=(manifest.quiz[0].correct+1)%4;await page.locator('[data-question="0"]').locator(`[data-answer="${wrong}"]`).click();
 assert(await page.locator('[data-question="0"] .feedback.error').isVisible());
 await page.locator('#tab-images').click();assert.equal(await page.locator('#images .documentgrid a').count(),2);
 await page.locator('#tab-memory').click();await page.locator('#memory > .panel > details summary').click();
 assert.equal(await page.locator('#peglist .peg').count(),101);await page.locator('#pegsearch').fill('Meru');assert.equal(await page.locator('#peglist .peg').count(),1);
 // Print from a filtered view must include every study block and its detail.
 await page.locator('#tab-study').click();await page.locator('#search').fill('comite');
 await page.evaluate(()=>window.dispatchEvent(new Event('beforeprint')));await page.emulateMedia({media:'print'});
 assert.equal(await page.locator('#study section:visible').count(),28);
 await page.emulateMedia({media:'screen'});await page.evaluate(()=>window.dispatchEvent(new Event('afterprint')));
 await page.locator('#search').fill('');
 const mobile=await context.newPage({viewport:{width:390,height:844}});await mobile.setViewportSize({width:390,height:844});
 mobile.on('pageerror',e=>errors.push(e.message));await mobile.goto(base+'/index-prl.html');await mobile.screenshot({path:path.join(__dirname,'mobile.png')});
 for(const id of ['study','quick','flash','quiz','images','memory']){
  await mobile.locator('#tab-'+id).click();
  assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`mobile overflow: ${id}`);
 }
 await mobile.locator('#tab-quiz').click();await mobile.locator('#quiztopic').selectOption('propio');
 await mobile.screenshot({path:path.join(__dirname,'mobile-quiz.png')});
 await mobile.setViewportSize({width:320,height:800});
 for(const id of ['study','flash','quiz','images']){await mobile.locator('#tab-'+id).click();assert.equal(await mobile.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,`320px overflow: ${id}`)}
 await page.goto(base+'/index.html');assert.equal(await page.locator('.topic').count(),8);await page.locator('a[href="index-prl.html"]').click();assert.match(await page.title(),/Prevención/);
 assert.deepEqual(errors,[]);assert.deepEqual(failures,[]);
 fs.writeFileSync(path.join(__dirname,'verification.json'),JSON.stringify({blocks:28,cards:84,questions:84,screenshots:['desktop.png','mobile.png','mobile-quiz.png'],checks:'progress persistence, search, essential view, quick review, spaced cards, all quiz corrections, failure correction, BOE links, casillero, print, 390px/320px overflow, index navigation',errors,failures},null,2));
 console.log('PASS: 28 blocks, 84 cards, 84 corrections; desktop/mobile, persistence, print, links and navigation.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
