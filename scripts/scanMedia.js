import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

// Read artworks_meta.json if exists
const artworksMetaPath = path.join(publicDir, 'artworks_meta.json');
let artworksMeta = [];
if (fs.existsSync(artworksMetaPath)) {
  try {
    artworksMeta = JSON.parse(fs.readFileSync(artworksMetaPath, 'utf8'));
  } catch (err) {
    console.error('Error reading artworks_meta.json:', err);
  }
}

// Category pricing lookups
const PRICING_MAP = {
  'graphite-pencil': 'From ₹1,800',
  'colour-pencil': 'From ₹3,500',
  'crystal-stone': 'From ₹6,500',
  'glitter-art': 'From ₹10,000',
  'acrylic-wall': 'Price on Request',
  'specialty-art': 'Handcrafted / Custom',
  'tattoos': 'Starting at ₹2,500',
};

const items = [];

// 1. Process Artworks Meta
artworksMeta.forEach((art, idx) => {
  items.push({
    id: art.id || `art-${idx + 1}`,
    src: art.image,
    type: 'image',
    category: art.category,
    categoryName: art.categoryName,
    title: art.title,
    description: art.description || `Original ${art.categoryName} handcrafted at MS Tattoo & Art Studio.`,
    medium: art.medium,
    dimensions: art.dimension || 'Custom Studio Size',
    year: art.year || '2025',
    fee: PRICING_MAP[art.category] || 'Enquire for Price',
    confidence: 0.96,
    manualCategory: null,
  });
});

// 2. Process Video Reels (reel-01 to reel-08)
for (let i = 1; i <= 8; i++) {
  const num = String(i).padStart(2, '0');
  const videoFile = `/videos/reel-${num}.mp4`;
  const posterFile = `/artworks/reel-${num}-poster.jpg`;
  
  items.push({
    id: `reel-${num}`,
    src: videoFile,
    poster: posterFile,
    type: 'video',
    category: 'videos',
    categoryName: 'Video Reels',
    title: `Studio Reel #${i}`,
    description: `High-definition process demonstration and live craftsmanship at MS Tattoo & Art Studio.`,
    medium: 'Live Studio Video',
    dimensions: '1080 × 1920 (9:16 Vertical)',
    year: '2025',
    fee: null,
    confidence: 0.99,
    manualCategory: null,
  });
}

// 3. Process Real Tattoo Craftsmanship & Studio Photos from public/tattoos/
const tattooImages = [
  {
    id: 'tattoo-01',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.05 PM.jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Custom Anatomical Forearm Tattoo',
    description: 'Bespoke custom linework and shading engineered along natural muscle flow.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Forearm Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-02',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.06 PM.jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Fine Line Botanical & Script Tattoo',
    description: 'Precision single-needle linework with delicate floral contours and crisp script.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-03',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.06 PM (1).jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Black & Grey Realism Studio Tattoo',
    description: 'Velvety carbon wash shading and chiaroscuro gradient highlights on living skin.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-04',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.06 PM (2).jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Geometric Pattern & Minimalist Ink',
    description: 'Clean geometry and tight needle tension calibration for long-lasting fidelity.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-05',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.07 PM.jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Fine Line Precision Arm Tattoo',
    description: 'Sub-millimeter needle calibration and subtle photographic skin transitions.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-06',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.07 PM (1).jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Custom Illustrative Body Ink',
    description: 'Bespoke drafted allegorical artwork aligned to muscular lines of tension.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-07',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.07 PM (2).jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Portrait & Realism Skin Composition',
    description: 'Meticulous facial bone mapping and smooth tonal contrast translation.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
  {
    id: 'tattoo-08',
    src: '/tattoos/WhatsApp Image 2026-09-24 at 3.38.08 PM.jpeg',
    type: 'image',
    category: 'tattoos',
    categoryName: 'Tattoos',
    title: 'Minimalist Fine Line Art Tattoo',
    description: 'Delicate single-needle contours executed with clinical sterile precision.',
    medium: 'Custom Tattoo Craftsmanship',
    dimensions: 'Custom Anatomy Fit',
    year: '2025',
    fee: 'Starting at ₹2,500',
    confidence: 0.98,
  },
];

tattooImages.forEach((img) => items.push(img));

// Save gallery-index.json
const outputPath = path.join(rootDir, 'src', 'data', 'gallery-index.json');
fs.writeFileSync(outputPath, JSON.stringify(items, null, 2), 'utf8');

console.log(`Successfully indexed ${items.length} media items to ${outputPath}`);
