import { imageAssets } from './imageAssets';

export const STUDIO_INFO = {
  brand: "MS TATTOO & ART STUDIO",
  academyBrand: "MS TATTOO & ART ACADEMY",
  est: "TATTOO & FINE ART SANCTUARY",
  tagline: "ART. INK. STORIES.",
  subtitle: "Bespoke Tattoo Mastery, Hyper-Realistic Fine Art & Professional Art Academy",
  description:
    "A multidisciplinary creative sanctuary dedicated to classical pencil realism, bespoke custom tattoo craftsmanship, theatrical reveal artworks, and rigorous professional art education.",
  schedule: "10:30 AM – 5:00 PM",
  workingDays: "Monday through Saturday (Sunday by appointment)",
  locationName: "MS Tattoo & Art Studio",
  address: "Main Studio & Art Academy • Private Consultation by Appointment",
  phone: "+91 98000 00000",
  whatsapp: "+91 98000 00000",
  email: "contact@mstattoostudio.com",
};

export const HERO_DATA = {
  brand: STUDIO_INFO.brand,
  academyBrand: STUDIO_INFO.academyBrand,
  tagline: "ART. INK. STORIES.",
  headline: ["ART. INK.", "STORIES."],
  description:
    "A multidisciplinary atelier where fine art drawing meets surgical-grade tattoo craftsmanship. Handcrafted pencil portraits, theatrical artworks, custom tattoos, and certified professional mentorship.",
  metadata: [
    { label: "STUDIO", value: "MS TATTOO & ART" },
    { label: "HOURS", value: "10:30 AM – 5:00 PM" },
    { label: "SCHEDULE", value: "MON – SAT" },
    { label: "INTAKE", value: "BY APPOINTMENT" },
  ],
  heroImage: imageAssets.hero.main,
  secondaryImage: imageAssets.hero.secondary,
};

export const PILLARS_DATA = [
  {
    pillarTag: "PILLAR I // LIVING CANVAS",
    title: "BESPOKE TATTOO MASTERY",
    description:
      "Tattooing treated as fine art on human anatomy. Hospital-grade sterile environment, single-use EO gas membrane cartridges, and custom design consultations.",
    cta: "EXPLORE TATTOO STYLES",
    href: "#tattoo",
    image: imageAssets.pillars.tattoo,
  },
  {
    pillarTag: "PILLAR II // PHYSICAL ARTIFACTS",
    title: "FINE ART COMMISSIONS",
    description:
      "Museum-grade graphite portraiture, polychromos colored pencil, architectural wall murals, crystal stone art, and theatrical glitter surprise artworks.",
    cta: "EXPLORE ARTWORKS",
    href: "#artwork",
    image: imageAssets.pillars.artwork,
  },
  {
    pillarTag: "PILLAR III // MENTORSHIP & ACADEMY",
    title: "TATTOO & ART ACADEMY",
    description:
      "Disciplined apprenticeships and hands-on studio courses combining live portrait sketching, digital Procreate drafting, machine physics, and aseptic client tattooing.",
    cta: "EXPLORE COURSES",
    href: "#academy",
    image: imageAssets.pillars.academy,
  },
];

export const CREED_DATA = {
  subtitle: "STUDIO ETHOS & STANDARDS",
  quote: "“Every stroke is an anatomical study. Every tattoo is a permanent narrative.”",
  stats: [
    { value: 100, suffix: "%", label: "CLINICAL ASEPSIS", sub: "SINGLE-USE EO CARTRIDGES" },
    { value: 4, suffix: "+", label: "CORE DISCIPLINES", sub: "TATTOO, PENCIL, MURALS, ACADEMY" },
    { value: 500, suffix: "+", label: "COMMISSIONS & TATTOOS", sub: "CATALOGUED PORTFOLIO" },
  ],
};

export const TATTOO_STYLES = [
  {
    id: "fine-line",
    title: "Fine Line & Minimal",
    description:
      "Sub-millimeter single-needle geometry calibrated for clean micro-fidelity. Precise calligraphic contours and subtle anatomical flow that heal gracefully.",
    gauge: "Single-Needle Micro Liner",
    suitableFor: "Delicate Flora, Script, Geometry, Minimalist Concepts",
    image: imageAssets.tattooStyles.fineLine,
  },
  {
    id: "black-grey-realism",
    title: "Black & Grey Realism",
    description:
      "Velvety carbon washes derived from classical chiaroscuro oil techniques. Engineered depth, lifelike textures, and bone-toned negative skin highlights.",
    gauge: "5-Tone Carbon Washes & Soft Mags",
    suitableFor: "Portraits, Sculptural Statues, Wildlife, Dark Art",
    image: imageAssets.tattooStyles.blackGrey,
  },
  {
    id: "portrait-tattoo",
    title: "Portrait & Memorial Tattoos",
    description:
      "Translating human likeness and emotional presence onto skin. Meticulous facial bone mapping and subtle photographic transitions.",
    gauge: "Precision Curved Magnums",
    suitableFor: "Family Portraits, Loved Ones, Iconic Figures",
    image: imageAssets.tattooStyles.portrait,
  },
  {
    id: "geometric-flow",
    title: "Geometric & Dotwork",
    description:
      "Sacred mandalas, Platonic structures, and stipple gradients aligned with muscular lines of tension for harmonic body curvature.",
    gauge: "Tight 3RL & Stipple Machine Setup",
    suitableFor: "Spine Sleeves, Arm Bands, Sacred Symmetry",
    image: imageAssets.tattooStyles.geometric,
  },
  {
    id: "custom-ink",
    title: "Custom Illustrative & Mythological",
    description:
      "Esoteric allegories, architectural motifs, and custom illustrative compositions individually drafted to fit your anatomical contours.",
    gauge: "Custom Liners & Textural Shaders",
    suitableFor: "Sleeves, Backpieces, Bespoke Narratives",
    image: imageAssets.tattooStyles.custom,
  },
  {
    id: "coverup-restore",
    title: "Touch-Up, Restore & Cover-Up",
    description:
      "Strategic camouflage and revitalization of aged or imperfect tattoos through deep carbon saturation and anatomical redirection.",
    gauge: "High-Density Pigment Packing",
    suitableFor: "Reworks, Enhancements, Complete Cover-ups",
    image: imageAssets.tattooStyles.coverup,
  },
];

export const HYGIENE_STANDARDS = [
  {
    title: "100% Single-Use EO Gas Needles",
    description: "Every session uses factory-sealed, single-use membrane cartridge needles opened directly in front of the client.",
  },
  {
    title: "Autoclave & Chemical Sterilization",
    description: "Medical-grade sterilization for stainless equipment, paired with hospital-grade surface disinfectants.",
  },
  {
    title: "Medical Barrier Wrap Protection",
    description: "Machines, clip cords, power units, and workstations are completely sealed in disposable medical barrier film.",
  },
  {
    title: "Vegan & Archival Pigments",
    description: "Premium REACH-compliant non-toxic carbon and organic inks free of heavy metals and animal glycerin.",
  },
];

export const ARTWORK_CATEGORIES_DATA = [
  { id: "all", name: "All Works" },
  { id: "graphite-pencil", name: "Pencil & Graphite Art" },
  { id: "colour-pencil", name: "Colour Pencil Art" },
  { id: "acrylic-wall", name: "Paintings & Murals" },
  { id: "crystal-stone", name: "Crystal Stone Art" },
  { id: "glitter-art", name: "Glitter Surprise Art" },
  { id: "specialty-art", name: "Wood Burning & Resin" },
];

export const ARTWORK_PRICING_TABLE = [
  {
    id: "graphite-pencil",
    title: "Graphite / Pencil Art",
    subtitle: "Classic monochrome, graphite tonality & hyper-realistic shading",
    description: "Handcrafted using archival 300 GSM cotton board and European graphite pencils for museum-grade preservation.",
    badge: "Popular Classic",
    image: imageAssets.artworkDisciplines.graphite,
    options: [
      { type: "Single Face", size: "A4", price: "₹1,800", note: "Ideal for intimate desktop framing" },
      { type: "Single Face", size: "A3", price: "₹3,500", note: "Standard wall portrait size" },
      { type: "Couples", size: "A3", price: "₹7,000", note: "Double subject balance & composition" },
      { type: "Couples", size: "A2", price: "₹15,000", note: "Grand gallery statement scale" },
    ],
  },
  {
    id: "colour-pencil",
    title: "Colour Pencil Art",
    subtitle: "Vibrant hyper-pigmentation, lifelike skin tones & luminous glow",
    description: "Layered with wax and oil-based professional colored pencils for exceptional skin texture and realistic depth.",
    badge: "High Realism",
    image: imageAssets.artworkDisciplines.colourPencil,
    options: [
      { type: "Single Face", size: "A4", price: "₹3,500", note: "Crisp personal keepsake" },
      { type: "Single Face", size: "A3", price: "₹6,000", note: "Dynamic color framing" },
      { type: "Single Face", size: "A2", price: "₹10,000", note: "Premium large-format portrait" },
    ],
  },
  {
    id: "crystal-stone",
    title: "Crystal Stone Art",
    subtitle: "Hand-applied reflective gemstones & rhinestones on treated board",
    description: "Thousands of precision crystal facets meticulously placed on treated board to dynamically reflect ambient light.",
    badge: "Lustrous & Dimensional",
    image: imageAssets.artworkDisciplines.crystalStone,
    options: [
      { type: "Single Subject", size: "A2", price: "₹6,500", note: "Shimmering focal artwork" },
      { type: "Couples", size: "20 × 30 in", price: "₹17,000", note: "Ultra-luxury anniversary centerpiece" },
    ],
  },
  {
    id: "glitter-surprise",
    title: "Glitter Surprise Art",
    subtitle: "Theatrical reveal artwork crafted for celebrations and grand unveiling events",
    description: "A show-stopping reveal painting that shimmers under event spotlights, revealing the portrait in glittering splendor.",
    badge: "Event & Reveal Favorite",
    image: imageAssets.artworkDisciplines.glitterSurprise,
    options: [
      { type: "Single", size: "2 × 3 ft", price: "₹10,000", note: "Perfect for surprise party unveiling" },
      { type: "Couples", size: "4 × 3 ft", price: "₹15,000", note: "Monumental stage-scale unveiling" },
    ],
  },
  {
    id: "paintings-murals",
    title: "Paintings & Murals",
    subtitle: "Expansive wall installations and textured heavy-body acrylic canvases",
    description: "Architectural wall murals and gallery canvases tailored to luxury residences and creative commercial spaces.",
    badge: "Architectural Scale",
    image: imageAssets.artworkDisciplines.paintingsMurals,
    options: [
      { type: "Textured Acrylic Canvas", size: "Custom", price: "Price on Request", note: "Bespoke linen canvases" },
      { type: "Site-Specific Murals", size: "Wall Scale", price: "Price on Request", note: "Residential & commercial atriums" },
    ],
  },
  {
    id: "wood-resin",
    title: "Wood Burning & Resin Art",
    subtitle: "Pyrography on live-edge timber and high-gloss multi-layer resin",
    description: "Handcrafted dimensional crafts fusing scorched organic timber with translucent tinted epoxy layers.",
    badge: "Specialty Craft",
    image: imageAssets.artworkDisciplines.woodResin,
    options: [
      { type: "Cedar Pyrography", size: "Custom Wood Slabs", price: "Price on Request", note: "Live-edge thermal etching" },
      { type: "Ocean Resin Art", size: "Custom Discs", price: "Price on Request", note: "Multi-layered marine epoxy" },
    ],
  },
];

export const ACADEMY_COURSES = [
  {
    id: "3-day-workshop",
    title: "3-Day Art Workshops",
    subtitle: "Painting & Glitter Surprise Art",
    fee: "₹25,000",
    duration: "3 Days",
    seats: "Max 6 students/cohort",
    timings: "10:30 AM – 5:00 PM",
    badge: "Intensive Workshop",
    image: imageAssets.academy.workshop,
    overview:
      "A rapid-immersion workshop focused on acrylic/oil canvas painting techniques and the theatrical craft of glitter surprise art revelations.",
    includes: [
      "Painting (Acrylic & Canvas Textures)",
      "Glitter Art & Surprise Reveal Techniques",
      "Surface Glazing & Stage Presentation",
      "Studio Materials & Canvas Provided",
    ],
    highlights: [
      "Speed observational sketching & tonal dexterity",
      "Palette knife layering & acrylic glazing",
      "Mastering glitter adhesive dynamics & peel reveals",
      "Hands-on studio critique & direct 1-on-1 mentorship",
      "Complete finished showpiece canvas upon completion",
    ],
  },
  {
    id: "live-portrait-course",
    title: "Live Portrait & Pencil Art Course",
    subtitle: "Portrait Sketch, Pencil Art & Colour Pencil",
    fee: "₹15,000",
    duration: "2 Months",
    seats: "8 students per cohort",
    timings: "10:30 AM – 5:00 PM",
    badge: "Core Fine Art",
    image: imageAssets.academy.portraitClass,
    overview:
      "Comprehensive mastery of translating human likeness and emotional presence onto museum-grade archival paper.",
    includes: [
      "Portrait Sketch & Proportions",
      "Pencil Art (Graphite Tonal Gradations)",
      "Colour Pencil Art (Skin Layering & Realism)",
    ],
    highlights: [
      "Live model sessions with real-time feedback",
      "Facial mapping, bone structure & optical planes",
      "Layering polychromos & luminance colored pencils",
      "Rendering skin undertones, wrinkles & eye reflections",
      "Creating commission-ready portfolio artworks",
    ],
  },
  {
    id: "tattoo-course",
    title: "Tattoo Apprenticeship Course",
    subtitle: "Studio-Ready Professional Tattoo Apprenticeship",
    fee: "₹60,000",
    duration: "3 Months",
    seats: "Max 4 apprentices per batch",
    timings: "10:30 AM – 5:00 PM",
    badge: "Apprenticeship Program",
    image: imageAssets.academy.tattooApprentice,
    overview:
      "A disciplined 3-month mentorship designed to transform passionate illustrators into confident, aseptic, and technically skilled professional tattoo artists.",
    includes: [
      "Basic tattoo techniques & needle physics",
      "Professional tattoo workflow & sterilization",
      "Practice synthetic skin & artwork development",
      "Portfolio development & client management",
    ],
    highlights: [
      "Rotary vs coil machines, needle cartridges (Liner, Shader, Magnums)",
      "Hospital-grade cross-contamination prevention & aseptic protocols",
      "Stencil making, positioning, and anatomy body curvature tracking",
      "Extensive synthetic skin training before supervised client work",
      "Building a cohesive, standout artist portfolio",
    ],
  },
  {
    id: "advanced-course",
    title: "Advanced Masterclass Course",
    subtitle: "High-End Micro-Realism & Digital Stencil Craft",
    fee: "₹90,000",
    duration: "Advanced Track",
    seats: "Exclusive 1-on-1 / small cohort",
    timings: "10:30 AM – 5:00 PM",
    badge: "Masterclass",
    image: imageAssets.academy.masterclass,
    overview:
      "For working artists and tattooers ready to elevate their craft to masterclass standards with digital workflows and complex realism techniques.",
    includes: [
      "Advanced techniques (Micro-realism & Portraiture)",
      "Photoshop editing & photo composites",
      "Procreate editing & iPad design mastery",
      "Basic & advanced digital artwork development",
    ],
    highlights: [
      "Complex photorealistic portraits & texture tattooing",
      "Mastering Apple Pencil, Procreate brushes & symmetry for stencils",
      "Photoshop composites, contrast adjustments & multi-layer designs",
      "Custom branding, studio lighting & photography for tattoo portfolios",
      "Direct artist mentorship on large-scale custom compositions",
    ],
  },
];

export const GALLERY_WORKS = imageAssets.gallery;
