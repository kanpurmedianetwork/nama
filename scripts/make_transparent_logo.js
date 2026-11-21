const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function makeTransparent() {
  const logoPng = path.resolve(__dirname, '..', 'public', 'logo.png');
  const { data, info } = await sharp(logoPng).raw().toBuffer({ resolveWithObject: true });

  const transparentData = Buffer.alloc(data.length);

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    if (a === 0) {
      // Already transparent
      transparentData[i] = 0;
      transparentData[i + 1] = 0;
      transparentData[i + 2] = 0;
      transparentData[i + 3] = 0;
      continue;
    }

    // Invert luminance so black becomes opaque black, white becomes fully transparent!
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    
    if (luminance >= 245) {
      // Pure white background -> fully transparent
      transparentData[i] = 0;
      transparentData[i + 1] = 0;
      transparentData[i + 2] = 0;
      transparentData[i + 3] = 0;
    } else {
      // Black / dark emblem -> preserve black color with alpha = 255 - luminance
      const alpha = Math.min(255, Math.max(0, Math.round(255 - luminance)));
      transparentData[i] = 0;     // black R
      transparentData[i + 1] = 0; // black G
      transparentData[i + 2] = 0; // black B
      transparentData[i + 3] = alpha;
    }
  }

  const outPath = path.resolve(__dirname, '..', 'public', 'logo-transparent.png');
  
  // Trim the transparent image to bounding box of emblem
  const trimmedBuffer = await sharp(transparentData, {
    raw: {
      width: info.width,
      height: info.height,
      channels: 4,
    },
  }).trim().png().toBuffer();

  // Resize to 512x512 fit inside with transparent background
  await sharp(trimmedBuffer)
    .resize(512, 512, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(outPath);

  // Also convert to base64 embedded transparent SVG for public/logo.svg
  const base64Png = (await fs.promises.readFile(outPath)).toString('base64');
  const transparentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,${base64Png}" width="512" height="512" />
</svg>`;
  await fs.promises.writeFile(path.resolve(__dirname, '..', 'public', 'logo.svg'), transparentSvg);

  console.log('Successfully generated public/logo-transparent.png and transparent public/logo.svg');
}

makeTransparent().catch(console.error);
