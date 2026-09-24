import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

// Re-encode approved AI concept assets; no regeneration or design changes.
await mkdir('public/assets', { recursive: true });
for (const model of ['01', '02']) {
  await sharp('assets/concepts/concept-' + model + '.png')
    .webp({ quality: 90, alphaQuality: 100, effort: 6 })
    .toFile('public/assets/concept-' + model + '.webp');
}
