// Generates public/og.png (1200x630) from an inline SVG using the site's
// design tokens. Plain typography only — no illustration, no fake product
// screenshots. Run with `npm run generate:og`.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { writeFileSync } from 'node:fs';

const root = path.dirname(fileURLToPath(new URL('.', import.meta.url)));
const outPath = path.join(root, 'public', 'og.png');

const WIDTH = 1200;
const HEIGHT = 630;

const COLOR_BG = '#ffffff';
const COLOR_TEXT = '#1c1c1c';
const COLOR_ACCENT = '#5b5bd6';
const COLOR_BORDER = '#e5e7eb';

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${COLOR_BG}" />
  <rect x="0" y="0" width="10" height="${HEIGHT}" fill="${COLOR_ACCENT}" />
  <rect x="80" y="${HEIGHT - 96}" width="${WIDTH - 160}" height="1" fill="${COLOR_BORDER}" />

  <text x="80" y="120" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif"
        font-size="20" font-weight="600" letter-spacing="3" fill="${COLOR_ACCENT}">
    PRODUCT MANAGEMENT &#183; DARTMOUTH
  </text>

  <text x="76" y="270" font-family="'Playfair Display', Georgia, 'Times New Roman', serif"
        font-size="88" font-weight="700" letter-spacing="-2" fill="${COLOR_TEXT}">
    Alex Cruz-Valencia
  </text>

  <text x="80" y="340" font-family="Inter, -apple-system, Helvetica, Arial, sans-serif"
        font-size="30" font-weight="400" fill="#6b7280">
    Product Management &#183; CS + Human-Centered Design &#183; Dartmouth
  </text>
</svg>
`;

const buffer = await sharp(Buffer.from(svg)).png().toBuffer();
writeFileSync(outPath, buffer);
console.log(`Wrote ${outPath} (${buffer.length} bytes)`);
