import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const REPLACEMENTS = [
  { from: 'Kielcach', to: 'Krakowie' },
  { from: 'Kielce', to: 'Krakow' },
  { from: 'Kielc', to: 'Krakowa' },
  { from: 'kielce', to: 'krakow' },
  { from: 'świętokrzyskim', to: 'małopolskim' },
  { from: 'wynajem-autobus.pl', to: 'coachhirekrakow.pl' },
  { from: 'wynajemautobus.pl', to: 'coachhirekrakow.pl' },
  { from: 'Muszkieter PRO', to: 'MUSZKIETER Group' },
  { from: 'ul. Kolberga 9, 25-516 Kielce', to: 'ul. Czarnowiejska 43, 30-054 Kraków' },
  { from: 'ul. Kolberga 9, 25-620 Kielce', to: 'ul. Czarnowiejska 43, 30-054 Kraków' },
  { from: '+48 41 345 32 25', to: '' },
  { from: 'biuro@muszkieter.pl', to: 'contact@coachhirekrakow.pl' },
  { from: 'AUTOKAR Kielce', to: 'COACH HIRE Krakow' },
  { from: 'AUTOKARKielce', to: 'COACH HIRE Krakow' },
  { from: '50.8661, 20.6286', to: '50.0647, 19.9450' },
  { from: '50.866100, 20.628600', to: '50.064700, 19.945000' },
];

const DIRS = ['src', 'data', 'public', 'messages'];
const EXTENSIONS = ['.tsx', '.ts', '.json', '.md'];
const IGNORE = ['node_modules', '.next', '.git'];

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (IGNORE.some(ig => fullPath.includes(ig))) continue;
    
    if (stat.isDirectory()) {
      walkDir(fullPath, callback);
    } else if (EXTENSIONS.some(ext => file.endsWith(ext))) {
      callback(fullPath);
    }
  }
}

let changedCount = 0;

for (const dir of DIRS) {
  const fullPath = path.join(__dirname, dir);
  walkDir(fullPath, (filePath) => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const original = content;
      
      for (const r of REPLACEMENTS) {
        content = content.replace(new RegExp(escapeRegex(r.from), 'g'), r.to);
      }
      
      if (content !== original) {
        fs.writeFileSync(filePath, content, { encoding: 'utf8' });
        console.log(`ZMIENIONO: ${path.relative(__dirname, filePath)}`);
        changedCount++;
      }
    } catch (e) {
      console.error(`BŁĄD: ${filePath} - ${e.message}`);
    }
  });
}

console.log(`\n✅ Zmieniono plików: ${changedCount}`);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
