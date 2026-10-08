# Image slots

Drop your research images in this folder using **exactly** these file names.
Until a file exists, the site shows a labelled placeholder in its place.
JPG is expected; to use another format, change the `src` in `content/site.js`.

Recommended: ~2000px on the long edge, compressed (under ~400 KB each).

| File | Section | Suggested content | Shape |
|---|---|---|---|
| `hero.jpg` | 01 Hero | glossy skin / product / sunlight / water. Large editorial image (not Lemontini) | tall, ~4:5 |
| `idea-heat.jpg` `idea-glow.jpg` `idea-colour.jpg` `idea-flavour.jpg` `idea-texture.jpg` | 02 Idea | tiny visual fragments for each sensation | 4:5 |
| `product-01.jpg` … `product-05.jpg` | 03 Formula | Highlight Milk, Pocket Bronze, Pocket Blush, Peptide Lip Shape, Peptide Lip Tint | 4:5 |
| `product-01-b.jpg` … `product-05-b.jpg` | 03 Formula | second image revealed on hover (swatch / texture) | 4:5 |
| `taste-fruit.jpg` `taste-cream.jpg` `taste-gloss.jpg` `taste-drinks.jpg` `taste-skin.jpg` `taste-packaging.jpg` `taste-swatches.jpg` `taste-water.jpg` `taste-sunlight.jpg` `taste-texture.jpg` | 04 Taste summer | flavour → visual language board | mixed |
| `feel-water.jpg` `feel-towel.jpg` `feel-skin.jpg` `feel-gloss.jpg` `feel-cream.jpg` `feel-sunlight.jpg` `feel-sand.jpg` `feel-bronze.jpg` | 04 Feel summer | tactile references | 3:4 |
| `event-rhode-island.jpg` `event-dallas.jpg` `event-vancouver.jpg` `event-copenhagen.jpg` `event-amalfi.jpg` | 05 Station | one image per tour stop | 4:5 |
| `experience-see.jpg` `-arrive` `-explore` `-try` `-shop` `-document` `-share` | 06 Experience | kiosk, queues, hands, phones, merch, spaces | 2:3 |
| `archive-01.jpg` … `archive-16.jpg` | 07 Archive | your Visual Voyage. Categories/sizes set in `content/site.js > ARCHIVE` | mixed |

Images are cropped with `object-fit: cover`, so any size works. Shapes above just crop best.
