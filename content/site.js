/* =====================================================================
   SUMMER, PACKAGED. — ALL EDITABLE CONTENT LIVES HERE
   ---------------------------------------------------------------------
   TEXT:   edit any string below; the sections read from this file.
   IMAGES: drop files into /public/images using the exact file names
           listed in each `src`. Until a file exists, the site shows an
           elegant labelled placeholder in its place (nothing breaks).
           Full list of expected files: /public/images/README.md
   FACTS vs INTERPRETATION:
           `kind: 'fact'`   = rhode Summer '26 information.
           `kind: 'reading'`= my concept / interpretation.
   ===================================================================== */

export const PROJECT = {
  title: 'Summer, Packaged.',
  event: "rhode Summer Station '26",
  // EDIT: your details for the footer credit line
  author: 'Ishita Shetye',
  course: 'Visual Identity, Deliverable 03',
  school: 'Atlas Skilltech University',
  year: '2026',
};

export const NAV_LINKS = [
  { href: '#concept', label: 'Concept' },
  { href: '#formula', label: 'Formula' },
  { href: '#summer-26', label: "Summer '26" },
  { href: '#station', label: 'Station' },
  { href: '#archive', label: 'Archive' },
];

/* ---------- 01 HERO ---------- */
export const HERO = {
  line: "A visual exploration of rhode Summer Station '26.",
  cta: 'Enter summer',
  // REPLACE IMAGE: one large editorial summer image (glossy skin, light, water, bronze).
  image: { src: '/images/hero.jpg', alt: 'Sun on glossy skin, editorial summer image', label: 'Hero image' },
};

/* ---------- 02 THE IDEA ---------- */
export const IDEA = {
  title: ['What if a season', 'could be packaged?'],
  body:
    'Summer is usually experienced through sensations: heat on skin, light on water, the taste of fruit, the glow of sun-warmed skin. Summer, Packaged explores how rhode translates these sensations into beauty products, colour, texture and experience.',
  question: 'What if a season could be bottled, swatched, tasted, felt and worn?',
  // Each sensation = big word + tiny visual fragment. REPLACE IMAGES in /public/images/idea-*.jpg
  sensations: [
    { word: 'Heat', note: 'warmth on skin', tone: '#C98A55', src: '/images/idea-heat.jpg' },
    { word: 'Glow', note: 'light on water', tone: '#F1E4CF', src: '/images/idea-glow.jpg' },
    { word: 'Colour', note: 'peach, bronze, sand', tone: '#E9A58A', src: '/images/idea-colour.jpg' },
    { word: 'Flavour', note: 'fruit, cream, butter', tone: '#E6A43C', src: '/images/idea-flavour.jpg' },
    { word: 'Texture', note: 'gloss, milk, powder', tone: '#D9BFA2', src: '/images/idea-texture.jpg' },
  ],
};

/* ---------- 03 THE SUMMER FORMULA ---------- */
// product = fact (official Summer '26 routine). line + reads = my interpretation.
// swatch hex values are interpretive tones, NOT official product shades.
export const FORMULAS = [
  {
    n: '01',
    key: 'Glow',
    step: 'Highlight',
    product: 'Highlight Milk',
    line: 'Light becomes glow.',
    reads: 'milk, pearl, wet light',
    swatch: '#EFE2CE',
    src: '/images/product-01.jpg',
    src2: '/images/product-01-b.jpg',
  },
  {
    n: '02',
    key: 'Bronze',
    step: 'Bronze',
    product: 'Pocket Bronze',
    line: 'Heat becomes warmth.',
    reads: 'sand, toast, late sun',
    swatch: '#A86A3D',
    src: '/images/product-02.jpg',
    src2: '/images/product-02-b.jpg',
  },
  {
    n: '03',
    key: 'Flush',
    step: 'Flush',
    product: 'Pocket Blush',
    line: 'Summer becomes colour.',
    reads: 'peach skin, warmed cheeks',
    swatch: '#E49A84',
    src: '/images/product-03.jpg',
    src2: '/images/product-03-b.jpg',
  },
  {
    n: '04',
    key: 'Shape',
    step: 'Shape',
    product: 'Peptide Lip Shape',
    line: 'Form becomes definition.',
    reads: 'outline, edge, contour',
    swatch: '#8A5A43',
    src: '/images/product-04.jpg',
    src2: '/images/product-04-b.jpg',
  },
  {
    n: '05',
    key: 'Tint',
    step: 'Tint',
    product: 'Peptide Lip Tint',
    line: 'Flavour becomes gloss.',
    reads: 'butter, fruit, glaze',
    swatch: '#D7AE84',
    src: '/images/product-05.jpg',
    src2: '/images/product-05-b.jpg',
  },
];

/* ---------- 04 TASTE SUMMER / FEEL SUMMER ---------- */
export const FLAVOURS = [
  // Flavour/shade references named in the Summer '26 world. Swatch tones are interpretive.
  { name: 'Colada', tone: '#F2E6CC', note: 'coconut, pineapple, cream' },
  { name: 'Honey Mango', tone: '#E59F3A', note: 'ripe fruit, honey, sun' },
  { name: 'Macadamia Butter', tone: '#D3AE85', note: 'limited-edition Peptide Lip Tint shade' },
];

// Editorial board. span = columns out of 12 (desktop). ratio = image aspect. drop = vertical offset.
// REPLACE IMAGES in /public/images/taste-*.jpg. Fruit/drink images are mood references, not packaging.
export const TASTE_BOARD = [
  { id: 'fruit', label: 'Fruit', src: '/images/taste-fruit.jpg', span: 7, ratio: '4/5', caption: 'Mood reference. Not product packaging.' },
  { id: 'flavours', type: 'flavours', span: 5 },
  { id: 'cream', label: 'Cream', src: '/images/taste-cream.jpg', span: 4, ratio: '1/1' },
  { id: 'gloss', label: 'Gloss', src: '/images/taste-gloss.jpg', span: 5, ratio: '4/5', drop: 1 },
  { id: 'drinks', label: 'Drinks', src: '/images/taste-drinks.jpg', span: 3, ratio: '2/3', drop: 2 },
  { id: 'skin', label: 'Skin', src: '/images/taste-skin.jpg', span: 5, ratio: '3/4' },
  { id: 'packaging', label: 'Packaging', src: '/images/taste-packaging.jpg', span: 3, ratio: '3/4', drop: 2 },
  { id: 'swatches', label: 'Swatches', src: '/images/taste-swatches.jpg', span: 4, ratio: '1/1', drop: 1 },
  { id: 'water', label: 'Water', src: '/images/taste-water.jpg', span: 6, ratio: '16/10' },
  { id: 'sunlight', label: 'Sunlight', src: '/images/taste-sunlight.jpg', span: 3, ratio: '3/4' },
  { id: 'texture', label: 'Texture', src: '/images/taste-texture.jpg', span: 3, ratio: '3/4', drop: 1 },
];

export const FEEL = [
  { word: 'Water', src: '/images/feel-water.jpg' },
  { word: 'Towel', src: '/images/feel-towel.jpg' },
  { word: 'Skin', src: '/images/feel-skin.jpg' },
  { word: 'Gloss', src: '/images/feel-gloss.jpg' },
  { word: 'Cream', src: '/images/feel-cream.jpg' },
  { word: 'Sunlight', src: '/images/feel-sunlight.jpg' },
  { word: 'Sand', src: '/images/feel-sand.jpg' },
  { word: 'Bronze', src: '/images/feel-bronze.jpg' },
];

/* ---------- 05 SUMMER, IRL (official tour stops) ---------- */
export const STATION_INTRO =
  "Summer Station brought rhode's Summer '26 world into physical spaces across five destinations.";

export const STOPS = [
  { n: '01', code: 'RI', name: 'Rhode Island', dates: 'June 11-14', place: "Bowen's Wharf, Newport", region: 'Rhode Island, USA', caption: 'Wharfside, Newport.', src: '/images/event-rhode-island.jpg' },
  { n: '02', code: 'DAL', name: 'Dallas', dates: 'June 26-29', place: '3212 Knox Street', region: 'Dallas, Texas, USA', caption: 'Knox Street, Dallas.', src: '/images/event-dallas.jpg' },
  { n: '03', code: 'VAN', name: 'Vancouver', dates: 'July 9-12', place: 'Kitsilano Beach', region: 'Vancouver, Canada', caption: 'On the sand at Kitsilano.', src: '/images/event-vancouver.jpg' },
  { n: '04', code: 'CPH', name: 'Copenhagen', dates: 'August 6-9', place: 'Papirøen 59', region: 'Copenhagen, Denmark', caption: 'Papirøen, on the harbour.', src: '/images/event-copenhagen.jpg' },
  { n: '05', code: 'AMF', name: 'Amalfi Coast', dates: 'August 20-23', place: 'Via Roma 42, Minori', region: 'Salerno, Italy', caption: 'Minori, on the Amalfi Coast.', src: '/images/event-amalfi.jpg' },
];

/* ---------- 06 FROM PRODUCT TO EXPERIENCE ---------- */
export const EXPERIENCE = {
  title: ['From product', 'to experience.'],
  body:
    'The event lives twice: once in the physical space, and again on the phones of everyone who photographs, films and shares it. The product becomes a place, and the place becomes content.',
  // REPLACE IMAGES in /public/images/experience-*.jpg (kiosk, queues, hands, phones, merch...)
  steps: [
    { verb: 'See', subject: 'campaign, feed', src: '/images/experience-see.jpg' },
    { verb: 'Arrive', subject: 'kiosk, queue', src: '/images/experience-arrive.jpg' },
    { verb: 'Explore', subject: 'space, people', src: '/images/experience-explore.jpg' },
    { verb: 'Try', subject: 'hands, swatches', src: '/images/experience-try.jpg' },
    { verb: 'Shop', subject: 'product, merch', src: '/images/experience-shop.jpg' },
    { verb: 'Document', subject: 'phones, mirrors', src: '/images/experience-document.jpg' },
    { verb: 'Share', subject: 'posts, stories', src: '/images/experience-share.jpg' },
  ],
};

/* ---------- 07 THE SUMMER ARCHIVE ---------- */
export const ARCHIVE_CATEGORIES = ['Glow', 'Water', 'Skin', 'Fruit', 'Texture', 'Packaging', 'Product', 'People', 'Summer'];

// size: 'xl' | 'tall' | 'wide' | 'sm' controls the tile shape in the archive grid.
// REPLACE IMAGES in /public/images/archive-01.jpg ... archive-16.jpg
export const ARCHIVE = [
  { cat: 'Glow', no: '02', size: 'xl' },
  { cat: 'Water', no: '07', size: 'tall' },
  { cat: 'Texture', no: '04', size: 'sm' },
  { cat: 'Fruit', no: '01', size: 'sm' },
  { cat: 'Skin', no: '03', size: 'wide' },
  { cat: 'Packaging', no: '05', size: 'tall' },
  { cat: 'Product', no: '01', size: 'sm' },
  { cat: 'People', no: '06', size: 'wide' },
  { cat: 'Summer', no: '09', size: 'sm' },
  { cat: 'Water', no: '02', size: 'sm' },
  { cat: 'Glow', no: '05', size: 'tall' },
  { cat: 'Fruit', no: '04', size: 'wide' },
  { cat: 'Texture', no: '08', size: 'sm' },
  { cat: 'People', no: '02', size: 'sm' },
  { cat: 'Product', no: '03', size: 'xl' },
  { cat: 'Summer', no: '01', size: 'wide' },
].map((item, i) => ({ ...item, src: `/images/archive-${String(i + 1).padStart(2, '0')}.jpg` }));

/* ---------- 08 FINAL STATEMENT ---------- */
export const CLOSING = {
  words: ['Heat.', 'Glow.', 'Colour.', 'Flavour.', 'Texture.'],
  line: 'An intangible season, translated into something you can see, feel, wear and carry.',
};
