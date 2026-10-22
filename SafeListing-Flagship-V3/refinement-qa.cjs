const { chromium } = require('C:/Users/IRTIZA/AppData/Roaming/npm/node_modules/@playwright/cli/node_modules/playwright-core');
const fs = require('node:fs');
const http = require('node:http');
const assert = require('node:assert/strict');

(async () => {
  const server = http.createServer((req, res) => {
    const route = new URL(req.url, 'http://localhost').pathname;
    const file = ['/', '/issuer', '/verify'].includes(route) || route.startsWith('/verify/') ? 'dist/index.html' : 'dist' + route;
    if (!fs.existsSync(file) || !fs.statSync(file).isFile()) return res.writeHead(404).end();
    res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.woff2') ? 'font/woff2' : 'text/html');
    res.end(fs.readFileSync(file));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = process.argv[2] || `http://127.0.0.1:${server.address().port}`;
  const output = process.env.SL_EVIDENCE_DIR || 'refinement-evidence/after';
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  const context = await browser.newContext({ reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] });
  const page = await context.newPage();
  page.setDefaultTimeout(2000);
  const errors = [], failures = [], checks = [], measurements = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('response', r => { if (r.status() >= 400 && !r.url().endsWith('favicon.ico')) errors.push(`${r.status()} ${r.url()}`); });
  const app = () => page.frameLocator('#application');
  const open = async route => {
    await page.goto(base + route);
    await app().locator('body[data-page]').waitFor();
    await page.frames()[1].evaluate(() => document.fonts.ready);
  };
  const check = async (name, fn) => {
    try { await fn(); checks.push(name); }
    catch (error) { failures.push({ name, error: error.message }); }
  };
  const capture = name => page.screenshot({ path: `${output}/${name}.png`, fullPage: true });
  const overflow = async () => assert(await app().locator('html').evaluate(e => e.scrollWidth <= e.clientWidth + 1), 'No page overflow');
  const view = async name => {
    if (await app().locator('#issuer-view').isVisible()) await app().locator('#issuer-view').selectOption(name);
    else await app().locator(`[data-view="${name}"]`).click();
    await app().locator('#' + name).waitFor({ state: 'visible' });
  };
  try {
    for (const width of process.env.SL_RED ? [390] : [320, 390, 768, 1024, 1280, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await open('/');
      await check(`home ${width}`, async () => {
        await overflow(); await capture(`home-${width}`);
        for (const section of ['.hero-proof', '.problem', '#how-it-works', '.mechanisms', '.closing', '.sl-issuer-entry']) {
          await app().locator(section).scrollIntoViewIfNeeded();
          await capture(`home-${section.replace(/[.#]/g, '')}-${width}`);
        }
      });
      await open('/verify/SL-2026-PJ-1208');
      measurements.push({ width, ...await app().locator('body').evaluate(e => {
        const record = e.querySelector('.record').getBoundingClientRect();
        return { recordHeight: record.height, recordY: record.y, messageY: e.querySelector('#message').getBoundingClientRect().y };
      }) });
      await check(`mobile record and task ${width}`, async () => {
        await overflow();
        await capture(`verify-record-${width}`);
        if (width < 640) {
          assert(await app().locator('.record').evaluate(e => e.getBoundingClientRect().height < 760), 'Compact mobile record');
          assert.equal(await app().locator('#record-details').evaluate(e => e.open), false);
          await app().locator('#compare-advertisement').click();
          assert(await app().locator('#message').evaluate(e => e === document.activeElement));
          const box = await app().locator('#message').boundingBox();
          assert(box.y >= 70 && box.y < 700, 'Editor revealed below header');
        }
        await capture(`verify-editor-${width}`);
      });
      await app().locator('#sample').click();
      await app().locator('#compare').click();
      await check(`finding states ${width}`, async () => {
        const buttons = app().locator('#finding-nav button');
        assert.match(await buttons.nth(1).innerText(), /CONTRADICTION/);
        assert.match(await buttons.nth(2).innerText(), /NOT VERIFIED/);
        await capture(`verify-findings-${width}`);
        await buttons.nth(2).click();
        assert.equal(await app().locator('[data-selected="true"] .value small').last().innerText(), 'RECORD COVERAGE');
        await overflow(); await capture(`verify-payment-${width}`);
      });
      await open('/issuer?mode=sample');
      await check(`issuer overview ${width}`, async () => {
        await overflow(); await capture(`issuer-entry-overview-${width}`);
        assert.equal(await app().locator('#issuer-view').isVisible(), width < 640);
      });
      await check(`record selection focus ${width}`, async () => {
        await app().locator('[data-record="september"]').press('Enter');
        if (width <= 900) {
          assert(await app().locator('#details h2').first().evaluate(e => e === document.activeElement));
          assert((await app().locator('#details h2').first().boundingBox()).y >= 70);
        } else assert(await app().locator('[data-record="september"]').evaluate(e => e === document.activeElement));
      });
      for (const name of ['create', 'authority', 'details', 'manage', 'overview']) {
        await view(name);
        await check(`issuer ${name} ${width}`, async () => {
          await overflow();
          assert.equal(await app().locator('#issuer-view').inputValue(), name);
          await capture(`issuer-${name}-${width}`);
        });
      }
    }
    await page.setViewportSize({ width: 390, height: 900 });
    await open('/issuer?mode=sample&view=create');
    await check('associated field errors', async () => {
      await app().locator('#property').fill('');
      await app().locator('#create-form button[type=submit]').click();
      assert.equal(await app().locator('#property').getAttribute('aria-invalid'), 'true');
      const ids = (await app().locator('#property').getAttribute('aria-describedby') || '').split(' ');
      assert(ids.includes('property-error'));
      assert.match(await app().locator('#property-error').innerText(), /Property is required/);
      await capture('issuer-field-errors');
      await app().locator('#property').fill('Bayu Meranti Residences');
      assert.equal(await app().locator('#property-error').innerText(), '');
    });
    await check('issuance unavailable and dialog cancellation', async () => {
      await app().locator('#create-form button[type=submit]').click();
      await app().locator('#operation-dialog').waitFor({ state: 'visible' });
      assert(await app().locator('#dialog-cancel').evaluate(e => e === document.activeElement));
      await app().locator('#dialog-confirm').click();
      assert.match(await app().locator('#dialog-feedback').innerText(), /Signing service unavailable/);
      await page.keyboard.press('Escape');
      assert(!await app().locator('#operation-dialog').isVisible());
    });
    await open('/issuer?mode=sample');
    await view('manage');
    await check('exact-target revocation unavailable', async () => {
      await app().locator('#open-revoke').click();
      assert.match(await app().locator('#dialog-content').innerText(), /SL-2026-PJ-1208/);
      assert.match(await app().locator('#dialog-content').innerText(), /Version 01/);
      await capture('issuer-revocation-dialog');
      await app().locator('#dialog-confirm').click();
      assert.match(await app().locator('#dialog-feedback').innerText(), /Revocation service unavailable/);
      await app().locator('#dialog-cancel').click();
      assert(await app().locator('#open-revoke').evaluate(e => e === document.activeElement));
    });
    await open('/issuer?access=reviewer');
    await check('unavailable authenticated access', async () => {
      assert(!await app().locator('#workspace').isVisible());
      assert(!await app().locator('#issuer-view').isVisible());
      await app().locator('#access-action').click();
      assert.match(await app().locator('#access-feedback').innerText(), /not connected/);
    });
    await open('/issuer?mode=sample&view=create&review=pending');
    await check('authority eligibility restriction', async () => {
      await app().locator('#create-form button[type=submit]').click();
      assert(!await app().locator('#operation-dialog').isVisible());
      assert.match(await app().locator('#create-feedback').innerText(), /Issuance blocked/);
    });
    await open('/verify/SL-2026-PJ-1208');
    await app().locator('#sample').click(); await app().locator('#compare').click();
    await check('copy failure recovery', async () => {
      await page.frames()[1].evaluate(() => { navigator.clipboard.writeText = async () => { throw new Error('Denied'); }; });
      await app().locator('#copy').click();
      await app().locator('#copy-fallback').waitFor({ state: 'visible' });
      assert.match(await app().locator('#copy-feedback').innerText(), /Clipboard unavailable/);
    });
    await check('candidate and source changes invalidate findings', async () => {
      await app().locator('#edit-claims').click();
      await app().locator('#rent').fill('1850'); await app().locator('#contact').fill('Nadia Rahman');
      await app().locator('#compare').click();
      assert.match(await app().locator('#finding-nav button').first().innerText(), /MATCH/);
      assert.match(await app().locator('#finding-nav button').last().innerText(), /NOT VERIFIED/);
      await app().locator('#edit-claims').click();
      await app().locator('#message').fill('A message with no covered facts.');
      assert.equal(await app().locator('#rent').inputValue(), '');
      assert(!await app().locator('#results').isVisible());
    });
    await check('text zoom reflow', async () => {
      await page.frames()[1].evaluate(() => { document.documentElement.style.fontSize = '200%'; });
      await overflow(); await capture('verify-text-zoom');
    });
    assert.deepEqual(errors, []);
    fs.writeFileSync(`${output}/results.json`, JSON.stringify({ base, checks, measurements, failures, errors }, null, 2));
    for (const f of failures) console.error('FAIL', f.name, f.error);
    assert.equal(failures.length, 0, `${failures.length} refinement regressions`);
    console.log(`PASS ${checks.length} refinement checks; ${process.env.SL_RED ? 'one width' : 'six widths'}; keyboard focus, field errors, copy recovery, text zoom`);
  } finally { await browser.close(); server.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
