const { chromium } = require('C:/Users/IRTIZA/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const assert = require('node:assert/strict');
const evidence = process.env.SL_EVIDENCE_DIR || 'deployment-evidence';

(async () => {
  const server = http.createServer((req, res) => {
    const pathname = new URL(req.url, 'http://localhost').pathname;
    const file = pathname === '/export' ? 'safelisting-application.html' :
      ['/', '/issuer', '/verify'].includes(pathname) || pathname.startsWith('/verify/') ? 'dist/index.html' : 'dist' + pathname;
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.woff2') ? 'font/woff2' : 'text/html');
    res.end(fs.readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.argv[2] || `http://127.0.0.1:${server.address().port}`;
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const context = await browser.newContext({ permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage();
  const errors = [], failures = [], results = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400 && !r.url().endsWith('favicon.ico')) failures.push(`${r.status()} ${r.url()}`); });
  const app = () => page.frameLocator('#application');
  const open = async route => {
    await page.goto(base + route);
    await app().locator('body[data-page]').waitFor();
    await page.frames()[1].evaluate(() => document.fonts.ready);
  };
  const overflow = async width => {
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width);
    assert.equal(await app().locator('html').evaluate(e => e.scrollWidth), width);
  };
  fs.mkdirSync(evidence, { recursive: true });
  try {
    for (const width of [1440, 1280, 1024, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await open('/');
      await overflow(width);
      await page.screenshot({ path: `${evidence}/home-${width}.png`, fullPage: true });
      if (!process.argv[2]) {
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.waitForTimeout(100);
        const deployed = await page.screenshot({ animations: 'disabled' });
        await open('/export');
        fs.writeFileSync(evidence+'/parity-built.png',deployed);
        const exported=await page.screenshot({animations:'disabled'});fs.writeFileSync(evidence+'/parity-export.png',exported);
        assert(exported.equals(deployed), `Approved homepage pixels at ${width}`);
        await page.emulateMedia({ reducedMotion: 'no-preference' });
        await open('/');
      }
      if (width <= 768) {
        await app().locator('.sl-toggle').click();
        assert(await app().locator('#sl-mobile-menu').evaluate(e => e.open));
        await page.keyboard.press('Escape');
        assert(!await app().locator('#sl-mobile-menu').evaluate(e => e.open));
        assert(await app().locator('.sl-toggle').evaluate(e => e === document.activeElement));
        await app().locator('.sl-toggle').click();
        await app().locator('.sl-close').click();
        await app().locator('.sl-toggle').click();
        await app().locator('#sl-mobile-menu a[href$="/issuer"]').click();
        await page.waitForURL(base + '/issuer');
        await open('/');
      }
      await app().locator('#check-submit').click();
      assert.equal(await app().locator('#listing-reference').getAttribute('aria-invalid'), 'true');
      await app().locator('#listing-reference').fill('SL-2026-PJ-1208');
      await app().locator('#check-submit').click();
      await page.waitForURL(base + '/verify/SL-2026-PJ-1208');
      await app().locator('#workspace').waitFor({ state: 'visible' });
      assert.equal(await app().locator('#reference-code').innerText(), 'SL-2026-PJ-1208');
      await overflow(width);
      await app().locator('#sample').click();
      await app().locator('#compare').click();
      assert.match(await app().locator('#result-summary').innerText(), /Two details contradict/);
      await app().locator('#copy').click();
      await page.waitForFunction(async () => (await navigator.clipboard.readText()).length > 0);
      await page.screenshot({ path: `${evidence}/verify-${width}.png`, fullPage: true });
      await app().locator('#edit-claims').click();
      await app().locator('#rent').fill('1850');
      await app().locator('#contact').fill('Nadia Rahman');
      await app().locator('#compare').click();
      assert.match(await app().locator('#result-summary').innerText(), /No contradictions.*NOT VERIFIED/);
      await page.reload();
      await app().locator('#workspace').waitFor({ state: 'visible' });
      await open('/verify/NOT-A-KNOWN-REFERENCE');
      await app().locator('#lookup-feedback').filter({ hasText: 'Live verification is unavailable' }).waitFor();
      assert(!await app().locator('#workspace').isVisible());
      await open('/verify/SL-2026-PJ-1208-SEP');
      await app().locator('#lookup-feedback').filter({ hasText: 'EXPIRED' }).waitFor();
      await open('/issuer');
      const card = app().locator('.sample-entry');
      assert(await card.evaluate(e => parseFloat(getComputedStyle(e).paddingLeft) >= 24));
      await overflow(width);
      await page.screenshot({ path: `${evidence}/issuer-entry-${width}.png`, fullPage: true });
      if (width < 640) {
        const sampleAction = await card.locator('a.btn').boundingBox();
        const signIn = await card.locator('#access-action').boundingBox();
        assert(signIn.y >= sampleAction.y + sampleAction.height, 'Mobile issuer actions must stack');
      }
      await app().locator('#access-action').click();
      assert.match(await app().locator('#access-feedback').innerText(), /not connected/);
      await app().locator('[data-od-id="open-sample-workspace"]').click();
      await app().locator('#workspace').waitFor({ state: 'visible' });
      await overflow(width);
      await page.screenshot({ path: `${evidence}/issuer-${width}.png`, fullPage: true });
      for (const view of ['details', 'create', 'authority', 'manage', 'overview']) {
        const selector = app().locator('#issuer-view');
        if (await selector.isVisible()) await selector.selectOption(view);
        else await app().locator(`[data-view="${view}"]`).click();
        await app().locator('#' + view).waitFor({ state: 'visible' });
        await overflow(width);
      }
      await page.reload();
      await app().locator('#workspace').waitFor({ state: 'visible' });
      results.push({ width, navigation: true, referenceHandoff: true, comparison: true, copy: true, unknown: true, expired: true, issuer: true, overflow: false });
    }
    await page.setViewportSize({ width: 1440, height: 900 });
    await open('/');
    assert.equal(await app().locator('.demo-progress').count(), 1);
    const scale = () => app().locator('#demo-progress-fill').evaluate(e => new DOMMatrix(getComputedStyle(e).transform).a);
    await app().locator('#replay-story').click();
    assert.equal(await scale(), 0);
    await app().locator('#play-story').click();
    await page.waitForTimeout(500);
    const first = await scale();
    await page.waitForTimeout(300);
    assert(await scale() > first);
    await app().locator('#play-story').click();
    const paused = await scale();
    await page.waitForTimeout(300);
    assert.equal(await scale(), paused);
    await app().locator('#play-story').click();
    await page.waitForTimeout(300);
    assert(await scale() > paused);
    await app().locator('#play-story').filter({ hasText: 'Replay walkthrough' }).waitFor({ timeout: 18000 });
    assert.equal(await scale(), 1);
    await app().locator('#replay-story').click();
    assert.equal(await scale(), 0);
    await app().locator('[data-step="3"]').click();
    await app().locator('[data-claim="payment"]').click();
    assert.match(await app().locator('#evidence-finding').innerText(), /not.*verified/i);
    await open('/verify/%3Cscript%3E');
    await app().locator('#lookup-feedback').filter({ hasText: 'Live verification is unavailable' }).waitFor();
    assert.deepEqual(errors, []);
    assert.deepEqual(failures, []);
    fs.writeFileSync(evidence + '/' + (process.argv[2] ? 'remote-results.json' : 'local-results.json'), JSON.stringify({ base, results, walkthrough: 'real-time play/pause/resume/completion/replay; single indicator', errors, failures }, null, 2));
    console.log('PASS', base, results.length, 'viewport journeys; walkthrough; clean deep links and refresh; no JS or asset errors');
  } catch (e) { console.error({ errors, failures, url: page.url(), feedback: await app().locator('body').innerText().catch(() => '') }); throw e;
  } finally { await browser.close(); server.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
