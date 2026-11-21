const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', '.next', 'server', 'app');
const terms = ['Kanpur', 'Uttar Pradesh', 'Lucknow', 'Noida', 'Prayagraj', 'Varanasi'];

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(full);
    } else if (entry.name.endsWith('.html')) {
      const content = fs.readFileSync(full, 'utf8');
      const rel = path.relative(outDir, full);
      const matched = [];
      for (const t of terms) {
        if (content.toLowerCase().includes(t.toLowerCase())) {
          matched.push(t);
        }
      }
      if (matched.length > 0) {
        console.log(`Matched [${matched.join(', ')}] in ${rel}`);
      }
    }
  }
}

console.log('Scanning built HTML in .next/server/app:');
scanDir(outDir);
