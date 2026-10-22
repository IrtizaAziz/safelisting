const fs=require('fs'),assert=require('node:assert/strict');
const source=fs.readFileSync('safelisting-application.html','utf8');
const pages=JSON.parse(source.match(/<script id="application-pages" type="application\/json">([\s\S]*?)<\/script>/)[1]);
assert(pages.verify.includes('source-excerpt'),'Selected findings must expose source context');
assert(pages.home.includes('signature-motion'),'Homepage motion must be present');
assert(pages.issuer.includes('life-trace'),'Lifecycle selection must expose a trace');
console.log('PASS motion source contract');
