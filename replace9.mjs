import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, extname } from 'path';

function findFiles(dir, exts = ['.tsx', '.ts', '.css', '.js']) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findFiles(full, exts));
    } else if (exts.includes(extname(entry.name)) && !entry.name.endsWith('.bak')) {
      results.push(full);
    }
  }
  return results;
}

// Dłuższe / bardziej szczegółowe wzorce PRZED krótszymi
const replacements = [
  // ── amber Tailwind ─────────────────────────────────────────────
  ['hover:bg-amber-600',           'hover:bg-[#5DCAA5]'],
  ['bg-amber-50',                  'bg-[#EAF3DE]'],
  ['bg-amber-500',                 'bg-[#1D9E75]'],
  ['bg-amber-900',                 'bg-[#27500A]'],

  ['hover:text-amber-700',         'hover:text-[#639922]'],
  ['hover:text-amber-400',         'hover:text-[#97C459]'],
  ['text-amber-400',               'text-[#97C459]'],
  ['text-amber-500',               'text-[#639922]'],
  ['text-amber-700',               'text-[#639922]'],
  ['text-amber-800',               'text-[#27500A]'],

  ['border-amber-200',             'border-[#EAF3DE]'],
  ['border-amber-500',             'border-[#639922]'],

  ['accent-amber-500',             'accent-[#1D9E75]'],

  // ── yellow Tailwind (na wszelki wypadek) ──────────────────────
  ['hover:bg-yellow-600',          'hover:bg-[#5DCAA5]'],
  ['hover:text-yellow-700',        'hover:text-[#639922]'],
  ['hover:text-yellow-400',        'hover:text-[#97C459]'],
  ['bg-yellow-50',                 'bg-[#EAF3DE]'],
  ['bg-yellow-100',                'bg-[#EAF3DE]'],
  ['bg-yellow-400',                'bg-[#1D9E75]'],
  ['bg-yellow-500',                'bg-[#1D9E75]'],
  ['bg-yellow-600',                'bg-[#1D9E75]'],
  ['text-yellow-400',              'text-[#97C459]'],
  ['text-yellow-500',              'text-[#639922]'],
  ['text-yellow-600',              'text-[#639922]'],
  ['text-yellow-700',              'text-[#639922]'],
  ['text-yellow-800',              'text-[#27500A]'],
  ['border-yellow-400',            'border-[#97C459]'],
  ['border-yellow-500',            'border-[#639922]'],

  // ── hex #f6c15a (jaśniejszy złoty) ───────────────────────────
  ['hover:bg-[#f6c15a]',           'hover:bg-[#5DCAA5]'],
  ['hover:text-[#f6c15a]',         'hover:text-[#97C459]'],
  ['text-[#f6c15a]',               'text-[#97C459]'],

  // ── hex #f59e0b — prefixowane najpierw ───────────────────────
  ['prose-a:text-[#f59e0b]',       'prose-a:text-[#639922]'],
  ['focus-visible:ring-[#f59e0b]', 'focus-visible:ring-[#639922]'],
  ['focus:border-[#f59e0b]',       'focus:border-[#639922]'],
  ['hover:border-[#f59e0b]',       'hover:border-[#639922]'],
  ['hover:text-[#f59e0b]',         'hover:text-[#639922]'],
  ['hover:bg-[#f59e0b]',           'hover:bg-[#5DCAA5]'],
  ['border-l-[#f59e0b]',           'border-l-[#639922]'],
  ['accent-[#f59e0b]',             'accent-[#1D9E75]'],
  ['text-[#f59e0b]',               'text-[#639922]'],
  ['bg-[#f59e0b]',                 'bg-[#1D9E75]'],
  ['border-[#f59e0b]',             'border-[#639922]'],
  // bare hex (np. w CSS inline lub JSON)
  ['#f59e0b',                      '#639922'],
];

const files = findFiles('src');
let changed = 0;

for (const filePath of files) {
  let content;
  try { content = readFileSync(filePath, 'utf-8'); }
  catch { console.log(`  [BRAK] ${filePath}`); continue; }
  const original = content;
  for (const [from, to] of replacements) {
    content = content.split(from).join(to);
  }
  if (content !== original) {
    writeFileSync(filePath, content, 'utf-8');
    console.log(`✓ ${filePath}`);
    changed++;
  }
}

console.log(`\nGotowe. Zmieniono ${changed} plików.`);
