import rawGalleryIndex from './gallery-index.json';
import { galleryOverrides } from './galleryOverrides';

/**
 * Normalized Gallery Media Catalog
 * Applies manual overrides over automatic indexing.
 */
export const GALLERY_MEDIA = rawGalleryIndex.map((item) => {
  const override = galleryOverrides[item.id] || {};
  return {
    ...item,
    ...override,
    // Ensure categoryName and category match
    category: override.category || item.category,
    categoryName: override.categoryName || item.categoryName,
    title: override.title || item.title,
    description: override.description || item.description,
    fee: override.fee !== undefined ? override.fee : item.fee,
  };
});

/**
 * Filter Categories for the Gallery
 */
export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'ALL WORK' },
  { id: 'tattoos', label: 'TATTOOS' },
  { id: 'graphite-pencil', label: 'PENCIL & GRAPHITE' },
  { id: 'acrylic-wall', label: 'PAINTINGS & MURALS' },
  { id: 'crystal-stone', label: 'CRYSTAL STONE' },
  { id: 'glitter-art', label: 'GLITTER SURPRISE' },
  { id: 'specialty-art', label: 'SPECIALTY & CRAFT' },
  { id: 'videos', label: 'VIDEO REELS' },
];

export const getGalleryItemById = (id) => GALLERY_MEDIA.find((item) => item.id === id);
