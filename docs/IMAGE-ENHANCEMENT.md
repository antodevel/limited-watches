# COSMOS watch enhancement report

Method: built-in image_gen, one edit call per model, no variants or retries.

## Outputs

- Model 01: C:/Users/Anton/.codex/generated_images/01a0af9a-2f10-7860-9f66-2c542c6961a0/exec-6a580356-7a6e-4b56-be0d-48e0de4078d8.png
- Model 02: C:/Users/Anton/.codex/generated_images/01a0af9a-2f10-7860-9f66-2c542c6961a0/exec-18ffa32b-f69c-4244-aae5-3ce944786d6a.png

Both: 948 x 1659 PNG, 32bpp ARGB; corner alpha 0, center alpha 253 (actual transparency exists, though opaque-object alpha was sampled slightly below fully opaque).

## Fidelity observations

Inspected original collage, each input extraction, and each generated output with view_image. Both outputs retain the same broad model compositions, navy strap, silver rounded-square case, right-side crown, and recognizable miniature artwork. The source is too small to validate recovered fine detail as authentic.

Model 01: brand still reads КОСМОС but is larger and clearer relative to the dial; cosmonaut face/suit folds, globe/spacecraft contours and small stars/ticks are reconstructed. The cosmonaut pose and general spacecraft position remain recognizable. Do not present as pixel-exact restoration.

Model 02: brand still reads КОСМОС, but brand and ringed-planet emblem are enlarged relative to the original. Earth, lunar surface and spacecraft remain in the same broad layout, but fine geography/terrain/metal components are reconstructed. Some hand geometry/placement appears shifted. Do not present as an exact archival reproduction.

No invented additional words detected. Neither output can guarantee exact reproduction of low-resolution fine details. Primary agent should choose final integration according to user fidelity requirements.

## Exact prompt — model 01

Use case: background-extraction
Asset type: high-resolution transparent e-commerce cutout of an existing COSMOS watch photo.
Input image 1 is the exact edit target: model-01, the existing watch with a standing silver cosmonaut on the left and the existing silver spacecraft artwork on the right. This is a faithful photographic restoration and upscale of that exact photographed object. Do not redesign the product.
Primary request: clean compression noise and jagged edges, improve photographic sharpness and material clarity gently, and extract onto actual transparent alpha. Keep the original model identity and every visible design feature. Request portrait output about 1024x1792 pixels or similar high resolution.
Composition: straight frontal full watch, entire visible navy leather strap from its existing rounded top to its existing rounded bottom, original silver rounded-square case, original circular dial, original right-side crown, centered with small clear margins. Preserve the source object's exact case-to-strap proportions, silhouette, frontal perspective, strap length, lug shapes, and hand positions. Do not stretch, lengthen, crop, or rotate the watch.
Materials: preserve silver metal finish and original reflections, dark navy crocodile-pattern leather strap and stitching, deep blue starry dial. Preserve the exact miniature raised silver cosmonaut and spacecraft shapes, positions and scale.
Text: Preserve the tiny original Cyrillic brand КОСМОС exactly where it is. Preserve existing dial tick marks and the small circular 1 detail. Do not invent additional legible lettering where the source is too small to resolve. Do not add new markings, numbers, logos, complications, celestial objects or stars.
Background: genuine transparency, clean alpha edges, no checkerboard painted into the image, no white or gray rectangle, no floor, no extra shadow.
Constraints: enhance this exact original photograph, with conservative restoration; all visible dial artwork, hands, crown, case shape and strap proportions must remain identical. No new product design, no creative reinterpretation, no added detail or stylization, no watermarks.

## Exact prompt — model 02

Use case: background-extraction
Asset type: high-resolution transparent e-commerce cutout of an existing COSMOS watch photo.
Input image 1 is the exact edit target: model-02, the existing watch with small blue Earth near upper-left, gray lunar surface and its existing raised silver spacecraft in the center/lower-right. This is a faithful photographic restoration and upscale of that exact photographed object. Do not redesign the product.
Primary request: clean compression noise and jagged edges, improve photographic sharpness and material clarity gently, and extract onto actual transparent alpha. Keep the original model identity and every visible design feature. Request portrait output about 1024x1792 pixels or similar high resolution.
Composition: straight frontal full watch, entire visible navy leather strap from its existing rounded top to its existing rounded bottom, original silver rounded-square case, original circular dial, original right-side crown, centered with small clear margins. Preserve the source object's exact case-to-strap proportions, silhouette, frontal perspective, strap length, lug shapes, and hand positions. Do not stretch, lengthen, crop, or rotate the watch.
Materials: preserve silver metal finish and original reflections, dark navy crocodile-pattern leather strap and stitching, deep blue starry dial, small blue Earth at upper-left and gray lunar terrain. Preserve the exact miniature raised silver spacecraft shapes, positions and scale, including its dish, struts and bulbous lower portion.
Text: Preserve the tiny original Cyrillic brand КОСМОС and its small symbol exactly where they are. Preserve existing dial tick marks and the small circular 2 detail. Do not invent additional legible lettering where the source is too small to resolve. Do not add new markings, numbers, logos, complications, celestial objects or stars.
Background: genuine transparency, clean alpha edges, no checkerboard painted into the image, no white or gray rectangle, no floor, no extra shadow.
Constraints: enhance this exact original photograph, with conservative restoration; all visible dial artwork, hands, crown, case shape and strap proportions must remain identical. No new product design, no creative reinterpretation, no added detail or stylization, no watermarks.

