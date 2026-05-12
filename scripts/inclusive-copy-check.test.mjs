import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';
import assert from 'node:assert/strict';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const FORBIDDEN = [
  { name: 'legacy display name', re: /\bTricia\s+Ballad\b/i },
  { name: 'legacy hostname', re: /triciaballad\.com/i },
  { name: 'legacy GitHub path segment', re: /triciaballad-com/i },
  { name: 'legacy LinkedIn handle', re: /linkedin\.com\/in\/triciaballad/i },
  { name: 'legacy resume basename', re: /Tricia_Ballad_AI_Resume/i },
  { name: 'legacy headshot filename', re: /TriciaBallad\.jpg/i },
  { name: 'deprecated Architects Daughter font', re: /Architects\+Daughter|Architects Daughter/i },
  { name: 'deprecated Caveat display font', re: /\bCaveat\b/i },
  { name: 'TRS chart emoji', re: /\u{1F4CA}|&#x1[Ff]4[Cc][Aa];/u },
];

function scanFiles() {
  const html = readdirSync(root)
    .filter((f) => f.endsWith('.html'))
    .map((f) => ({ path: f, text: readFileSync(join(root, f), 'utf8') }));
  const readme = readFileSync(join(root, 'README.md'), 'utf8');
  return [...html, { path: 'README.md', text: readme }];
}

test('site copy avoids deprecated branding strings', () => {
  const files = scanFiles();
  const hits = [];
  for (const { path, text } of files) {
    for (const { name, re } of FORBIDDEN) {
      if (re.test(text)) {
        hits.push(`${path}: matched ${name} (${re})`);
      }
    }
  }
  assert.deepEqual(hits, [], `Inclusive copy check failed:\n${hits.join('\n')}`);
});
