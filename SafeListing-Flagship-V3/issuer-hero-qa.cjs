const { chromium } = require('C:/Users/IRTIZA/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core');
const fs=require('node:fs'),assert=require('node:assert/strict');
const base=process.argv[2]||'http://localhost:4179',baseline='https://safelisting-flagship-v3-3s69lrgv6-irtiza-aziz-s-projects.vercel.app';
const out=process.env.SL_EVIDENCE_DIR||'issuer-hero-evidence';fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});const results=[];try{
for(const width of [320,390,768,1024,1280,1440]){
const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto(baseline+'/issuer');await page.frameLocator('#application').locator('#ledger button').first().waitFor();await page.screenshot({path:`${out}/before-${width}.png`});
await page.goto(base+'/issuer');const app=()=>page.frameLocator('#application');await app().locator('#ledger button').first().waitFor();await page.screenshot({path:`${out}/after-${width}.png`});
assert(await app().locator('html').evaluate(e=>e.scrollWidth<=e.clientWidth+1));assert.equal(await app().locator('canvas').count(),0);assert.equal(await app().getByText('Illustrative workspace',{exact:true}).count(),1);
assert.match(await app().locator('#issuer-spine-content').innerText(),/October 2026/);assert.equal(await app().locator('.issuer-spine li').count(),3);
await app().locator('#view-ledger').focus();await page.keyboard.press('Enter');assert.equal(await app().locator('#issuer-ledger-heading').evaluate(e=>document.activeElement===e),true);
await app().locator('#new-listing').click();await app().locator('#create').waitFor({state:'visible'});assert.equal(await app().locator('.issuer-hero').isVisible(),false);
const nav=async name=>{if(await app().locator('#issuer-view').isVisible())await app().locator('#issuer-view').selectOption(name);else await app().locator(`[data-view="${name}"]`).click();await page.waitForFunction(name=>new URL(location.href).searchParams.get("view")===name,name);};
await nav('overview');assert(await app().locator('#issuer-hero-title').evaluate(e=>document.activeElement===e));
for(const [id,count] of [['september',3],['november',2],['october',3]]){await app().locator(`[data-record="${id}"]`).click();if(width<=900)await nav('overview');assert.match((await app().locator('#issuer-spine-content').innerText()).toLowerCase(),new RegExp(id));assert.equal(await app().locator('.issuer-spine li').count(),count);}
await app().locator('#search').fill('no such property');assert.equal(await app().locator('#ledger button').count(),0);await app().locator('#search').fill('');
for(const view of ['authority','details','manage','create','overview'])await nav(view);
await page.emulateMedia({reducedMotion:'no-preference'});await page.reload();await app().locator('#issuer-spine-content').waitFor();await page.waitForTimeout(750);assert.equal(await app().locator('.issuer-spine').evaluate(e=>e.getAnimations({subtree:true}).filter(a=>a.playState==='running').length),0);
await page.screenshot({path:`${out}/animated-${width}.png`});await page.emulateMedia({reducedMotion:'reduce'});
if(width===390){await app().locator('html').evaluate(e=>e.style.fontSize='200%');assert(await app().locator('html').evaluate(e=>e.scrollWidth<=e.clientWidth+1));}
assert.deepEqual(errors,[]);results.push({width,overflow:false,actions:true,selection:true,reducedMotion:true,errors});await page.close();}
const performance=[];
for(const [label,url] of [['baseline',baseline],['enhanced',base]])for(const width of [1440,390])for(let run=0;run<3;run++){
const page=await browser.newPage({viewport:{width,height:900}});await page.addInitScript(()=>{window.heroPerf={longTasks:[],shifts:0,frames:[]};try{new PerformanceObserver(l=>l.getEntries().forEach(e=>heroPerf.longTasks.push(e.duration))).observe({type:'longtask',buffered:true});new PerformanceObserver(l=>l.getEntries().forEach(e=>{if(!e.hadRecentInput)heroPerf.shifts+=e.value})).observe({type:'layout-shift',buffered:true});}catch{}let last;function tick(t){if(last)heroPerf.frames.push(t-last);last=t;if(heroPerf.frames.length<90)requestAnimationFrame(tick)}requestAnimationFrame(tick);});await page.goto(url+'/issuer');await page.frameLocator('#application').locator('#ledger button').first().waitFor();await page.waitForTimeout(1600);const frame=page.frames()[1];const data=await frame.evaluate(()=>({...heroPerf,heap:performance.memory?.usedJSHeapSize,resources:performance.getEntriesByType('resource').reduce((n,r)=>n+r.transferSize,0)}));const start=Date.now();await page.frameLocator('#application').locator('#search').fill('October');const inputMs=Date.now()-start;performance.push({label,width,run,inputRoundTripMs:inputMs,...data});await page.close();}
fs.writeFileSync(`${out}/results.json`,JSON.stringify({checks:results,performance},null,2));
try{const c=await browser.newContext({viewport:{width:1440,height:900},recordVideo:{dir:`${out}/video`,size:{width:1440,height:900}}});const p=await c.newPage();await p.goto(base+'/issuer');await p.frameLocator('#application').locator('#ledger button').first().waitFor();await p.waitForTimeout(800);await p.frameLocator('#application').locator('#view-ledger').click();await p.waitForTimeout(500);await p.frameLocator('#application').locator('[data-record="september"]').click();await p.frames()[1].evaluate(()=>scrollTo(0,0));await p.waitForTimeout(700);await p.frameLocator('#application').locator('#new-listing').click();await p.waitForTimeout(500);await c.close();}catch(e){console.log('Video unavailable:',e.message)}
console.log('PASS six-width hero interactions, selection, static/motion states and overflow; baseline/performance recorded');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1});

