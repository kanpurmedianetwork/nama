const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.resolve(__dirname, '..');
const ogDir = path.join(rootDir, 'public', 'og');
if (!fs.existsSync(ogDir)) {
  fs.mkdirSync(ogDir, { recursive: true });
}

const logoPngPath = path.join(rootDir, 'public', 'logo.png');
const logoBase64 = fs.readFileSync(logoPngPath).toString('base64');
const logoUri = `data:image/png;base64,${logoBase64}`;

const svgDefault = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#09090b"/>
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#27272a" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="#27272a" stroke-width="2"/>
  <g transform="translate(600, 240)" text-anchor="middle">
    <image href="${logoUri}" x="-60" y="-110" width="120" height="120"/>
    <text y="50" font-family="sans-serif" font-size="56" font-weight="800" fill="#ffffff" letter-spacing="4">NEXUDYAM</text>
    <text y="110" font-family="sans-serif" font-size="26" font-weight="500" fill="#a1a1aa">Digital Marketing &amp; Branding Agency</text>
    <text y="150" font-family="sans-serif" font-size="20" font-weight="400" fill="#71717a">Kanpur, Uttar Pradesh • nexudyam.in</text>
  </g>
</svg>`;

const svgHome = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#09090b"/>
  <defs>
    <radialGradient id="glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#27272a" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#09090b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="#27272a" stroke-width="2"/>
  <g transform="translate(600, 220)" text-anchor="middle">
    <image href="${logoUri}" x="-55" y="-100" width="110" height="110"/>
    <text y="50" font-family="sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="3">NEXUDYAM</text>
    <text y="110" font-family="sans-serif" font-size="28" font-weight="600" fill="#e4e4e7">Digital Marketing, Website &amp; Branding Services</text>
    <text y="155" font-family="sans-serif" font-size="22" font-weight="400" fill="#a1a1aa">Helping Kanpur MSMEs &amp; Startups Grow Online • nexudyam.in</text>
  </g>
</svg>`;

async function run() {
  await sharp(Buffer.from(svgDefault)).png().toFile(path.join(ogDir, 'default.png'));
  console.log('Created public/og/default.png');
  await sharp(Buffer.from(svgHome)).png().toFile(path.join(ogDir, 'home.png'));
  console.log('Created public/og/home.png');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
