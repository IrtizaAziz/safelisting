const {chromium}=require('C:/Users/IRTIZA/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core');
const fs=require('node:fs'),http=require('node:http'),assert=require('node:assert/strict');
(async()=>{
 const server=http.createServer((req,res)=>{const p=new URL(req.url,'http://localhost').pathname;const file=p==='/'||p==='/issuer'||p.startsWith('/verify')?'dist/index.html':'dist'+p;if(!fs.existsSync(file)||!fs.statSync(file).isFile())return res.writeHead(404).end();res.setHeader('Content-Type',file.endsWith('.js')?'text/javascript':file.endsWith('.css')?'text/css':file.endsWith('.woff2')?'font/woff2':'text/html');res.end(fs.readFileSync(file));});
 await new Promise(r=>server.listen(0,'127.0.0.1',r));const base=process.argv[2]||'http://127.0.0.1:'+server.address().port;
 const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
 const dir=process.env.SL_EVIDENCE_DIR||'grainient-evidence';fs.mkdirSync(dir,{recursive:true});
 const context=await browser.newContext({recordVideo:{dir:dir+'/video',size:{width:1440,height:900}}});const page=await context.newPage();const errors=[],results=[];page.on('pageerror',e=>errors.push(e.message));
 await page.addInitScript(()=>{window.drawCount=0;const draw=WebGL2RenderingContext.prototype.drawArrays;WebGL2RenderingContext.prototype.drawArrays=function(...args){window.drawCount++;return draw.apply(this,args);};const get=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl2'&&(window.__SLRoute?.search||location.search).includes('noWebgl'))return null;return get.call(this,type,...args);};});
 const open=async(path='')=>{await page.goto(base+'/'+path);await page.frameLocator('#application').locator('#listing-reference').waitFor();};
 await page.addInitScript(()=>{const check=WebGL2RenderingContext.prototype.getShaderParameter;WebGL2RenderingContext.prototype.getShaderParameter=function(shader,param){if((window.__SLRoute?.search||'').includes('shaderFailure')&&param===this.COMPILE_STATUS)return false;return check.call(this,shader,param);};});
 try{
 for(const width of [1440,768,390]){
 await page.setViewportSize({width,height:900});await open();const frame=page.frames()[1];await frame.waitForFunction(()=>document.querySelector('.sl-grainient').dataset.state==='animated');await page.waitForTimeout(500);
 await page.screenshot({path:dir+'/animated-'+width+'.png'});
 await frame.locator('.hero').screenshot({path:dir+'/whole-hero-'+width+'.png'});
 assert(await frame.evaluate(()=>{const hero=document.querySelector('.hero').getBoundingClientRect(),layer=document.querySelector('.sl-grainient').getBoundingClientRect(),next=document.querySelector('.problem').getBoundingClientRect();return hero.width===innerWidth && layer.width===hero.width && Math.abs(layer.height-hero.height)<1 && next.top>=hero.bottom-1;}),'Full-width hero coverage ending before next section');
 results.push(await frame.evaluate(async()=>{const times=[];let last=performance.now();await new Promise(resolve=>{function tick(t){times.push(t-last);last=t;if(times.length<60)requestAnimationFrame(tick);else resolve();}requestAnimationFrame(tick);});const canvas=document.querySelector('.sl-grainient canvas');return {width:innerWidth,canvas:[canvas.width,canvas.height],overflow:document.documentElement.scrollWidth>innerWidth,frameIntervalMedian:times.sort((a,b)=>a-b)[30],renderer:canvas.getContext('webgl2').getParameter(7937)};}));
 await page.mouse.move(width-50,210);await page.mouse.move(width-140,240,{steps:12});
 await open('?background=static');await page.waitForTimeout(200);assert.equal(await page.frameLocator('#application').locator('.sl-grainient canvas').count(),0);await page.screenshot({path:dir+'/fallback-'+width+'.png'});
 }
 await open('?noWebgl');await page.waitForTimeout(1200);assert.equal(await page.frameLocator('#application').locator('canvas').count(),0);
 await open('?shaderFailure');await page.waitForTimeout(1200);assert.equal(await page.frameLocator('#application').locator('canvas').count(),0);
 await open();let active=page.frames()[1];await active.waitForFunction(()=>window.drawCount>2);await active.evaluate(()=>window.scrollTo(0,1500));await page.waitForTimeout(300);let count=await active.evaluate(()=>window.drawCount);await page.waitForTimeout(200);assert.equal(await active.evaluate(()=>window.drawCount),count);
 await active.evaluate(()=>window.scrollTo(0,0));await active.waitForFunction(n=>window.drawCount>n,count);
 await active.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,value:true});document.dispatchEvent(new Event('visibilitychange'));});count=await active.evaluate(()=>window.drawCount);await page.waitForTimeout(200);assert.equal(await active.evaluate(()=>window.drawCount),count);await active.evaluate(()=>{delete document.hidden;document.dispatchEvent(new Event('visibilitychange'));});
 await page.emulateMedia({reducedMotion:'reduce'});await open();await page.waitForTimeout(200);assert.equal(await page.frameLocator('#application').locator('canvas').count(),0);
 await page.emulateMedia({reducedMotion:'no-preference'});await page.frameLocator('#application').locator('canvas').waitFor();
 const frame=page.frames()[1];await frame.evaluate(()=>{window.testGL=document.querySelector('canvas').getContext('webgl2').getExtension('WEBGL_lose_context');window.testGL.loseContext();});await page.waitForTimeout(200);assert.equal(await frame.locator('.sl-grainient').getAttribute('data-state'),'fallback');await frame.evaluate(()=>window.testGL.restoreContext());await frame.waitForFunction(()=>document.querySelector('.sl-grainient').dataset.state==='animated');
 for(let i=0;i<3;i++){await page.goto(base+'/issuer');await open();await page.frameLocator('#application').locator('canvas').waitFor();assert.equal(await page.frameLocator('#application').locator('canvas').count(),1);}
 assert.deepEqual(errors,[]);fs.writeFileSync(dir+'/results.json',JSON.stringify({base,results,errors},null,2));console.log(JSON.stringify({base,results,errors}));
 }finally{await context.close();await browser.close();server.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
