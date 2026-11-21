const fs = require('fs');
const path = require('path');
const rootDir = path.resolve(__dirname, '..', 'src');

const patterns = [
  { name: 'hundreds of', regex: /hundreds of/i },
  { name: '0+', regex: /\b0\+\b/i },
  { name: '10x', regex: /\b10x\b/i },
  { name: '70%', regex: /70%/i },
  { name: 'premier', regex: /premier/i },
  { name: 'superlative top', regex: /\b(top digital|top agency|top website|top branding)\b/i },
  { name: 'superlative best', regex: /\b(best digital|best agency|best website|best branding|best marketing)\b/i },
  { name: 'response time', regex: /(?:24|4|2)[-\s]hour(?:s)?\s*(?:response|turnaround|window)/i }
];

function scan(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) scan(full);
    else if (/\.(tsx|ts|js|jsx)$/.test(f.name)) {
      const txt = fs.readFileSync(full, 'utf8');
      const lines = txt.split('\n');
      lines.forEach((line, idx) => {
        patterns.forEach(({ name, regex }) => {
          if (regex.test(line)) {
            console.log(`${path.relative(rootDir, full)}:${idx + 1} [${name}]: ${line.trim()}`);
          }
        });
      });
    }
  }
}

console.log('Scanning credibility patterns in src:');
scan(rootDir);
