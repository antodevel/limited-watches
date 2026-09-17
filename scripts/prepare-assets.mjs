import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

// Deterministic crops and an exterior-only white-background mask.
// Product RGB pixels are never redrawn, recolored, rescaled, or generated.
await mkdir('public/assets', { recursive: true });
const regions = [
  { left: 8, top: 37, width: 173, height: 301 },
  { left: 377, top: 35, width: 173, height: 300 },
];
for (let i = 0; i < regions.length; i++) {
  const { data, info } = await sharp('public/assets/watches-original.png').extract(regions[i]).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height } = info;
  const seen = new Uint8Array(width * height);
  const queue = [];
  const visit = (x, y) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const p = y * width + x;
    if (seen[p]) return;
    const k = p * 4;
    if (Math.min(data[k], data[k + 1], data[k + 2]) < 242) return;
    seen[p] = 1; queue.push(p);
  };
  for (let x = 0; x < width; x++) { visit(x, 0); visit(x, height - 1); }
  for (let y = 0; y < height; y++) { visit(0, y); visit(width - 1, y); }
  for (let q = 0; q < queue.length; q++) {
    const p = queue[q], x = p % width, y = Math.floor(p / width);
    data[p * 4 + 3] = 0;
    visit(x - 1, y); visit(x + 1, y); visit(x, y - 1); visit(x, y + 1);
  }
  await sharp(data, { raw: { width, height, channels: 4 } }).webp({ lossless: true }).toFile(`public/assets/model-0${i + 1}.webp`);
}
