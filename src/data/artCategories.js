/**
 * MS Tattoo & Art Studio Authentic Disciplines & Categories
 * Streamlined to strictly reflect the studio's real portfolio.
 */

export const officialCategories = [
  { id: "all", name: "All Works", slug: "all", count: 49 },
  { id: "tattoos", name: "Tattoos", slug: "tattoos", count: 4 },
  { id: "graphite-pencil", name: "Pencil & Graphite Art", slug: "graphite-pencil", count: 13 },
  { id: "acrylic-wall", name: "Paintings & Murals", slug: "acrylic-wall", count: 10 },
  { id: "crystal-stone", name: "Crystal Stone Art", slug: "crystal-stone", count: 5 },
  { id: "glitter-art", name: "Glitter Surprise Art", slug: "glitter-art", count: 7 },
  { id: "specialty-art", name: "Wood Burning & Resin", slug: "specialty-art", count: 10 }
];

export const artDisciplines = [
  {
    id: "tattoos",
    title: "Tattoo Mastery & Custom Ink",
    subtitle: "Permanent narratives etched with precision, clinical asepsis, and bespoke vision",
    disciplines: ["Fine Line", "Black & Grey Realism", "Micro-Portrait", "Geometric Flow"],
    description: "Tattooing treated as fine art on living canvas. Hospital-grade sterile environment, single-use cartridges, and bespoke custom design consultations.",
    highlight: "Custom Composition & Anatomy Flow",
    tag: "Living Canvas",
    badge: "Bespoke Tattoo",
    image: "/images/hero_editorial_tattoo.jpg"
  },
  {
    id: "graphite-pencil",
    title: "Pencil & Graphite Art",
    subtitle: "Monochrome depth, micro-textures, and hyper-realistic human portraits",
    disciplines: ["Graphite Portraiture", "Charcoal Form", "Anatomical Study", "Polychromos"],
    description: "Every stroke is an anatomical study. Utilizing high-grade European graphite to capture lifelike depth, soul, and light reflections.",
    highlight: "Single & Couple Portraits in A4, A3, A2",
    tag: "Fine Art",
    badge: "Archival Pencil",
    image: "/artworks/pencil-01.jpg"
  },
  {
    id: "acrylic-wall",
    title: "Paintings & Murals",
    subtitle: "Expansive wall installations and textured heavy-body acrylic canvases",
    disciplines: ["Textured Acrylic", "Interior Murals", "Linen Canvases", "Gold Leaf"],
    description: "Architectural wall murals and gallery canvases tailored to luxury residences and creative commercial spaces.",
    highlight: "Bespoke Scale & Architecture",
    tag: "Canvases & Murals",
    badge: "Contemporary Canvas",
    image: "/artworks/acrylic-01.jpg"
  },
  {
    id: "crystal-stone",
    title: "Crystal Stone Art",
    subtitle: "Light-reflective gemstones & rhinestones on treated architectural board",
    disciplines: ["Single Subject A2", "Couples 20×30 inch", "Celebratory Statement"],
    description: "Thousands of precision crystal facets meticulously placed on treated board to dynamically reflect ambient room lighting.",
    highlight: "Dimensional Luxury Centerpiece",
    tag: "Dimensional Art",
    badge: "Crystal Stone",
    image: "/artworks/crystal-01.jpg"
  },
  {
    id: "glitter-art",
    title: "Glitter Surprise Art",
    subtitle: "Theatrical reveal artworks crafted for celebrations and grand unveiling events",
    disciplines: ["Stage Unveiling", "2×3 ft Single", "4×3 ft Couples Statement"],
    description: "A show-stopping reveal painting that shimmers under event spotlights, revealing the portrait in glittering splendor.",
    highlight: "Stage-Scale Unveiling",
    tag: "Event Reveal",
    badge: "Glitter Reveal",
    image: "/artworks/glitter-01.jpg"
  },
  {
    id: "specialty-art",
    title: "Wood Burning & Resin Art",
    subtitle: "Pyrography on live-edge timber and high-gloss multi-layer resin discs",
    disciplines: ["Cedar Pyrography", "Ocean Tide Resin", "Carved Hardwood", "Teak Wood"],
    description: "Handcrafted dimensional crafts fusing scorched organic timber with translucent tinted epoxy layers.",
    highlight: "Natural Timber & Marine Flow",
    tag: "Specialty Craft",
    badge: "Wood & Resin",
    image: "/artworks/specialty-01.jpg"
  }
];

export const allArtCategories = officialCategories;
