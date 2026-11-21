const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function inspect() {
  const logoPng = path.resolve(__dirname, '..', 'public', 'logo.png');
  const { data, info } = await sharp(logoPng).raw().toBuffer({ resolveWithObject: true });
  console.log('logo.png info:', info);
  console.log('Top-left pixel RGBA:', data[0], data[1], data[2], data[3]);
  console.log('Corner 10,10 RGBA:', data[(10 * 512 + 10) * 4], data[(10 * 512 + 10) * 4 + 1], data[(10 * 512 + 10) * 4 + 2], data[(10 * 512 + 10) * 4 + 3]);

  // Find colors in logo.png
  const colors = {};
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i+1], b = data[i+2], a = data[i+3];
    if (a > 20 && !(r > 240 && g > 240 && b > 240)) {
      const key = `${Math.round(r/20)*20},${Math.round(g/20)*20},${Math.round(b/20)*20}`;
      colors[key] = (colors[key] || 0) + 1;
    }
  }
  console.log('Emblem colors in logo.png:', Object.entries(colors).sort((a,b) => b[1] - a[1]).slice(0, 10));
}

inspect().catch(console.error);
