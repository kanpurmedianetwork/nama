const fs = require('fs');
const path = require('path');

const repoDir = 'C:\\Users\\PC2\\.gemini\\antigravity\\scratch\\nexudyam';
const patterns = [
  /\bKanpur\b/i,
  /\bUttar\s+Pradesh\b/i,
  /\bLucknow\b/i,
  /\bNoida\b/i,
  /\bPrayagraj\b/i,
  /\bVaranasi\b/i,
  /\bStatewide\b/i,
];

const results = {};

function scan(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else if (entry.isFile()) {
      const rel = path.relative(repoDir, full);
      try {
        const text = fs.readFileSync(full, 'utf8');
        const lines = text.split('\n');
        lines.forEach((line, idx) => {
          for (const pat of patterns) {
            if (pat.test(line)) {
              if (!results[rel]) results[rel] = [];
              results[rel].push({ line: idx + 1, text: line.trim() });
              break;
            }
          }
        });
      } catch (e) {}
    }
  }
}

scan(repoDir);

console.log('Files with matches:');
for (const [file, matches] of Object.entries(results)) {
  console.log(`\n=== ${file} (${matches.length} matches) ===`);
  matches.slice(0, 5).forEach(m => console.log(`  L${m.line}: ${m.text.substring(0, 100)}`));
  if (matches.length > 5) console.log(`  ... and ${matches.length - 5} more`);
}
