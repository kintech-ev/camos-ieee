import fs from 'node:fs';

const sourceFiles = [
  new URL('../src/content.ts', import.meta.url),
  new URL('../src/content-strings.ts', import.meta.url),
];
const source = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const forbidden = [
  '7–11 June 2027',
  '15 March 2027',
  'Dubrovnik',
  'Zadar',
  'Singapore',
];

const kintechRoute = new URL('../src/pages/kintech.astro', import.meta.url);
const kintechFile = fs.existsSync(kintechRoute) ? fs.readFileSync(kintechRoute, 'utf8') : '';

let failed = false;
for (const token of forbidden) {
  if (source.includes(token)) {
    console.error(`Content check failed: stale or forbidden token found: ${token}`);
    failed = true;
  }
}

if (!kintechFile.includes('https://www.kintech-ev.de/')) {
  console.error('Content check failed: /kintech redirect target is missing or incorrect.');
  failed = true;
}

for (const required of ['2–6 August 2027', 'Split', 'Rolling review', 'KINTECH']) {
  if (!source.includes(required)) {
    console.error(`Content check failed: required conference fact missing: ${required}`);
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('Content check passed.');
