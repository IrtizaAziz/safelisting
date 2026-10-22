import { readFile, mkdir, writeFile, copyFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

// Keep the approved embedded pages intact; only replace their outer host router.
const source = await readFile(new URL('./safelisting-application.html', import.meta.url), 'utf8');
const payload = source.match(/<script id="application-pages" type="application\/json">([\s\S]*?)<\/script>/);
assert(payload, 'Connected export must contain its three page documents');
const pages = JSON.parse(payload[1]);
assert.deepEqual(Object.keys(pages).sort(), ['home', 'issuer', 'verify']);
for (const page of Object.values(pages)) {
  assert(!/(?:https?:\/\/localhost|file:\/\/)/i.test(page), 'No local-only dependencies');
}
const output = source.replace(/<script>\s*const pages=[\s\S]*?<\/script>\s*<\/body>/,
  '<script src="/router.js"></script></body>');
assert.notEqual(output, source, 'Host router must be replaced');
await mkdir('dist/flagship-v3.2/assets', { recursive: true });
await writeFile('dist/index.html', output);
await copyFile('router.js', 'dist/router.js');
const font = pages.home.match(/data:font\/woff2;base64,([A-Za-z0-9+/=]+)/);
assert(font, 'Export must contain its embedded font');
await writeFile('dist/flagship-v3.2/assets/plus-jakarta-sans-latin-variable.woff2', Buffer.from(font[1], 'base64'));
await copyFile('OFL.txt', 'dist/flagship-v3.2/assets/OFL.txt');
console.log('Built three unchanged embedded pages, clean URL router and licensed local font.');
