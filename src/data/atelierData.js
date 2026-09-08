/**
 * The Art Atelier - Master Dataset
 * Extracted verbatim from A&T.pdf
 */

export const HERO_DATA = {
  brand: "The Art Atelier",
  est: "TATTOO & ART STUDIO • EST. 2014",
  headline: ["INK. ART.", "EXPRESSION."],
  description:
    "A private studio for custom tattoos and bespoke fine art. Thoughtfully designed and handcrafted with precision, detail, and care.",
  metadata: [
    { label: "AESTHETIC", value: "ULTRA-DISCIPLINED" },
    { label: "LOCATION", value: "CHETPET / CHENNAI" },
    { label: "CURATOR", value: "MASTER JARK" },
    { label: "ACCESS", value: "BY REGISTRATION ONLY" },
  ],
  heroImage: "/images/hero_editorial_tattoo.jpg",
  secondaryImage: "/images/hero_rose_tattoo.jpg",
};

export const PILLARS_DATA = [
  {
    pillarTag: "PILLAR I // DERMAL DISCIPLINE",
    title: "TATTOO HOUSE",
    description:
      "Permanent needlecraft & dermatological curations. Bespoke anatomy-aligned ink constructed through single-needle micro-pigmentation, surgical sterility, and geometric spatial balance.",
    cta: "EXPLORE TATTOO DISCIPLINES",
    href: "#tattoo-discipline",
    image: "/images/nav_tattoo.jpg",
  },
  {
    pillarTag: "PILLAR II // CORPOREAL CANVASES",
    title: "FINE ARTWORKS & COMMISSIONS",
    description:
      "Handcrafted physical works in graphite, oil, crystal stone, and hand-layered paper cut. Museum-calibre artifacts commissioned for international private collections, galleries, and estates.",
    cta: "EXPLORE ARTWORKS",
    href: "#fine-artworks",
    image: "/images/nav_workshop.jpg",
  },
];

export const CREED_DATA = {
  subtitle: "OUR CURATORIAL CREED",
  quote: "“Every line has intention. Every artwork has a story.”",
  stats: [
    { value: 12, suffix: "+", label: "YEARS MASTERY" },
    { value: 100, suffix: "%", label: "HOSPITAL GRADE", sub: "AUTOCLAVING" },
    { value: 400, suffix: "+", label: "COMMISSIONS CATALOGUED" },
  ],
};

export const TATTOO_DISCIPLINE_HEADER = {
  tag: "01 // DERMATOLOGICAL CURATIONS",
  title: "TATTOO DISCIPLINE",
  description:
    "Your idea. Our craft. Every needle stroke is executed with strict body alignment, sub-millimeter precision, and hospital-grade sterility.",
};

export const TECHNICAL_SPECS = [
  {
    title: "NEEDLE TOLERANCE",
    value: "0.15mm Single Mag",
    desc: "Tightest gauge for microscopic fidelity",
  },
  {
    title: "PIGMENT PROTOCOL",
    value: "EU REACH Archival",
    desc: "Non-toxic carbon, zero heavy metals",
  },
  {
    title: "STERILE ENVIRONMENT",
    value: "Class 10k Cleanroom",
    desc: "Negative pressure HEPA filtration",
  },
  {
    title: "CURATORIAL MODEL",
    value: "Private Dossier Only",
    desc: "One collector per artist per day",
  },
];

export const TATTOO_DISCIPLINES = [
  {
    id: "01",
    label: "DISCIPLINE 01",
    title: "Minimal & Fine Line",
    description:
      "Sub-millimeter single-needle geometry calibrated for microscopic fidelity. Precise calligraphic strokes and continuous architectural line contours that age gracefully with cellular renewal.",
    specs: [
      { label: "Gauge", value: "0.15mm 0.20mm" },
      { label: "Session", value: "2-4 Hours" },
    ],
    image: "/images/hero_rose_tattoo.jpg",
  },
  {
    id: "02",
    label: "DISCIPLINE 02",
    title: "Micro Realism",
    description:
      "Museum reproductions and hyper-detailed portraiture executed on a miniature dermal scale. Soft photographic transitions using specialized mag configurations and proprietary gray tones.",
    specs: [
      { label: "Magnification", value: "3.5x Surgical" },
      { label: "Session", value: "Full Day" },
    ],
    image: "/images/thumb_eye_sketch.jpg",
  },
  {
    id: "03",
    label: "DISCIPLINE 03",
    title: "Black & Grey Archival",
    description:
      "Timeless multi-tone carbon washes derived from classical chiaroscuro oil painting techniques. Engineered depth with velvety black voids and bone-toned negative skin highlights.",
    specs: [
      { label: "Pigment", value: "5-Tone Carbon Blend" },
      { label: "Session", value: "Multi-Day Sleeves" },
    ],
    image: "/artworks/pencil-04.jpg",
  },
  {
    id: "04",
    label: "DISCIPLINE 04",
    title: "Custom Mythological",
    description:
      "Esoteric allegories, folkloric bestiaries, and archetypal motifs rendered through rigorous architectural anatomy. Every motif is drafted individually without repetitive flash templates.",
    specs: [
      { label: "Bespoke Drafting", value: "14 Days" },
      { label: "Session", value: "6-12 Hours" },
    ],
    image: "/artworks/specialty-07.jpg",
  },
  {
    id: "05",
    label: "DISCIPLINE 05",
    title: "Couple Concepts",
    description:
      "Paired commemorations, interlocking topological coordinates, and harmonic diptychs. Designed to establish visual dialogue across two bodies through subtle geometric affinity.",
    specs: [
      { label: "Alignment", value: "Dual Canvas" },
      { label: "Session", value: "Joint Day" },
    ],
    image: "/artworks/pencil-02.jpg",
  },
  {
    id: "06",
    label: "DISCIPLINE 06",
    title: "Geometric & Dotwork",
    description:
      "Algorithmic mandalas, Platonic solids, and stipple gradients mapped strictly to muscular lines of tension. Hundreds of thousands of individual points yielding smooth perceptual tonal transitions.",
    specs: [
      { label: "Technique", value: "Hand-Stippling" },
      { label: "Session", value: "4-8 Hours" },
    ],
    image: "/images/hero_editorial_tattoo.jpg",
  },
];

export const PROTOCOL_CERTIFICATIONS = [
  {
    title: "Autoclave Sterilization",
    description:
      "ISO 13485 medical-grade steam autoclaving monitored with spore tests every cycle.",
  },
  {
    title: "Surgical Steel Needles",
    description:
      "100% single-use 316L surgical stainless steel, disposed in biohazard containers.",
  },
  {
    title: "Vegan Archival Pigments",
    description:
      "Pure EU REACH compliant organic carbons, free of acrylic binders and animal glycerin.",
  },
  {
    title: "Laminar Airflow Filtration",
    description:
      "HEPA H14 filtration ensuring negative air pressure within all procedure suites.",
  },
];

export const BOOKING_ARTISTS = [
  {
    id: "tim-cooks",
    badge: "GUILD MASTER",
    name: "TIM COOKS",
    specialization:
      "Somatic Geometry, Platonic Lines & Dotwork",
    experience: "14 Yrs",
    nextAvailable: "Mon / Wed",
  },
  {
    id: "larry-page",
    badge: "TATTOO ARTIST",
    name: "LARRY PAGE",
    specialization:
      "Multi-Tone Carbon Washes & Renaissance Chiaroscuro",
    experience: "11 Yrs",
    nextAvailable: "Friday",
  },
  {
    id: "steve-jobs",
    badge: "SENIOR ARTIST",
    name: "STEVE JOBS",
    specialization: "0.15mm Micro Fine Line & Organic Flora",
    experience: "9 Yrs",
    nextAvailable: "Thursday",
  },
  {
    id: "first-available",
    badge: "ARTIST RECOMMENDATION",
    name: "First Available Master",
    specialization:
      "Our team reviews your tattoo concept and recommends the most suitable artist.",
    experience: "Fastest Allocation",
    nextAvailable: "Priority Review",
    isRecommended: true,
  },
];

export const BOOKING_SERVICE_TYPES = [
  "CUSTOM SESSION",
  "TOUCH-UP / RESTORE",
  "FLASH TATTOO",
];

export const BOOKING_LOCATIONS = [
  "Chetpet, Chennai",
  "Madurai Studio",
  "Soho, New York",
];

export const BOOKING_SCALES = [
  'Medium Intricate (4 7")',
  'Small Micro-Point (1-3")',
  'Large Scale Sleeve / Backpiece (8"+)',
];

export const BOOKING_PLACEMENTS = [
  "Forearm Inner Contour",
  "Spine / Vertebrae Alignment",
  "Ribcage / Thoracic Arc",
  "Shoulder / Deltoid Wrap",
  "Ankle / Achilles Tendon",
  "Custom Anatomical Canvas",
];

export const BOOKING_DATES = [
  { id: "d1", month: "NOV", day: "14", weekday: "Thursday", openSlots: 2, formatted: "Thu, Nov 14, 2024" },
  { id: "d2", month: "NOV", day: "15", weekday: "Friday", openSlots: 3, formatted: "Fri, Nov 15, 2024" },
  { id: "d3", month: "NOV", day: "16", weekday: "Saturday", openSlots: 1, formatted: "Sat, Nov 16, 2024" },
  { id: "d4", month: "NOV", day: "19", weekday: "Tuesday", openSlots: 4, formatted: "Tue, Nov 19, 2024" },
];

export const BOOKING_TIME_SLOTS = [
  { id: "t1", time: "11:00 AM", label: "Morning Intake • 3h" },
  { id: "t2", time: "02:30 PM", label: "Afternoon Immersive • 4h" },
  { id: "t3", time: "06:00 PM", label: "Twilight Intensive • 3h" },
];

export const TATTOO_TRAINING_DATA = {
  tag: "PROFESSIONAL TATTOO TRAINING PROGRAM",
  title: "3 Month Tattoo Apprenticeship",
  description:
    "A comprehensive 3-month training program combining tattoo artistry, skin safety, equipment knowledge, and hands-on practice. Limited to 4 students per term, with direct mentorship from experienced tattoo artists.",
  modules: [
    { num: "MODULE 01", title: "Bloodborne Pathogens & Sanitation" },
    { num: "MODULE 02", title: "Skin Anatomy & Histology" },
    { num: "MODULE 03", title: "Machine Calibration & Mechanics" },
    { num: "MODULE 04", title: "Needle Geometry & Pigments" },
    { num: "MODULE 05", title: "Practical Apprenticeship & Live Skin" },
  ],
  certificate: "CERTIFICATE OF COMPLETION",
  cta: "APPLY FOR TATTOO TRAINING",
};

export const ARTWORK_CATEGORIES = [
  "ALL CATEGORIES",
  "PENCIL & GRAPHITE",
  "PAINTING",
  "CRYSTAL STONE ART",
  "GLITTER SURPRISE",
  "WOOD BURNING",
  "PAPER CUT",
  "RESIST ART",
  "CLAY ART",
];

export const PENCIL_SUBJECTS = [
  {
    id: "single",
    label: "SINGLE SUBJECT",
    title: "Solitary Portrait",
    description:
      "Isolated focus on a single subject or object with masterfully rendered chiaroscuro depths.",
    image: "/artworks/pencil-01.jpg",
  },
  {
    id: "multiple",
    label: "MULTIPLE OBJECTS",
    title: "Still-Life Ensemble",
    description:
      "Intricate multi-layered composition harmonizing various physical textures, glass, and metals.",
    image: "/artworks/pencil-03.jpg",
  },
  {
    id: "couple",
    label: "COUPLE PORTRAIT",
    title: "Dedicated Two Subject",
    description:
      "Capturing emotional interplay and dual balance across unified archival substrate.",
    image: "/artworks/pencil-02.jpg",
  },
];

// Exact Matrix specified in PDF:
// B&G Graphite A4: ₹1,800
// B&G Graphite A3: ₹3,500
// Colour Pencil A4: ₹3,500
// Colour Pencil A3: ₹6,000
// Colour Pencil A2: ₹10,000
// Couples A3: ₹7,000
// Couples A2: ₹15,000
export const ARTWORK_PRICING_MATRIX = {
  "graphite-single-a4": "₹1,800",
  "graphite-single-a3": "₹3,500",
  "graphite-multiple-a4": "₹2,500",
  "graphite-multiple-a3": "₹4,800",
  "graphite-couple-a3": "₹7,000",
  "graphite-couple-a2": "₹15,000",
  "colour-single-a4": "₹3,500",
  "colour-single-a3": "₹6,000",
  "colour-single-a2": "₹10,000",
  "colour-couple-a3": "₹8,500",
  "colour-couple-a2": "₹16,500",
};

export const FEATURED_PAINTINGS = [
  {
    id: "p1",
    tag: "ARCHITECTURAL INSTALLATION",
    subtag: "HEAVY IMPASTO & MINERAL",
    title: "Atmospheric Wall Murals",
    badge: "PRICE ON REQUEST",
    description:
      "Site-specific monumental surfaces designed for luxury residential atriums and public spaces. Hand-blended mineral pigments and lime-wash plaster creating immersive atmospheric contemplation.",
    cta: "REQUEST CUSTOM PAINTING",
    image: "/artworks/acrylic-05.jpg",
  },
  {
    id: "p2",
    tag: "SCULPTURAL TEXTURED ACRYLIC",
    subtag: "",
    title: "Sculptural Textured Acrylic",
    badge: "PRICE ON REQUEST",
    description:
      "High-relief mineral basalt and marble dust compositions on reinforced Belgian linen. Monolithic geological textures that interact dynamically with changing natural sunlight angles.",
    cta: "REQUEST CUSTOM PAINTING",
    image: "/artworks/acrylic-02.jpg",
  },
  {
    id: "p3",
    tag: "DUTCH OLD-MASTER METHOD",
    subtag: "640 GSM ARCHIVAL COTTON",
    title: "Classical Glazed Oil",
    badge: "PRICE ON REQUEST",
    description:
      "Multi-session Flemish oil glazing spanning twelve transparent resin coats. Exceptional depth and luminosity mimicking Renaissance museum treasures, built to endure for generations.",
    cta: "REQUEST CUSTOM PAINTING",
    image: "/artworks/acrylic-08.jpg",
  },
  {
    id: "p4",
    tag: "ETHEREAL WATERCOLOUR",
    subtag: "",
    title: "Ethereal Watercolour",
    badge: "PRICE ON REQUEST",
    description:
      "Wet-on-wet botanical and figurative compositions hand-floated on handmade 640 GSM French cotton rag. Unrepeatable pigment migrations sealed under UV-blocking museum glass.",
    cta: "REQUEST CUSTOM PAINTING",
    image: "/artworks/acrylic-10.jpg",
  },
];

export const SPECIALTY_CRAFTS = [
  {
    id: "craft-a",
    discipline: "DISCIPLINE A",
    title: "Crystal Stone Art",
    description:
      "Natural raw crystal inclusions inlaid into basalt stone canvases with architectural precision.",
    price: "A2 Single: ₹6,500\nCouples: ₹17,000",
    image: "/artworks/crystal-01.jpg",
  },
  {
    id: "craft-b",
    discipline: "DISCIPLINE B",
    title: "Glitter Surprise Art",
    description:
      "Invisible hydrophobic adhesive canvas revealed during ceremonial dust immersion.",
    price: "Single 2 × 3 ft: ₹10,000\nCouples 4 × 3 ft: ₹15,000",
    image: "/artworks/glitter-01.jpg",
  },
  {
    id: "craft-c",
    discipline: "DISCIPLINE C",
    title: "Paper Cut Art",
    description:
      "Surgically hand-scalpeled 7 tier archival paper relief presented in a deep shadowbox.",
    price: "A4/A3: ₹3,500\nShadowbox frame included",
    image: "/artworks/specialty-05.jpg",
  },
  {
    id: "craft-d",
    discipline: "DISCIPLINE D",
    title: "Wood Pyrography",
    description:
      "Controlled thermal carbon etching on live-edge Himalayan cedar and walnut slabs.",
    price: "Price on Request\nBespoke timber selection",
    image: "/images/thumb_wood_burn.jpg",
  },
  {
    id: "craft-e",
    discipline: "DISCIPLINE E",
    title: "Resist & Masking",
    description:
      "Chemical masking fluid paired with corrosive acid and iron rust patina baths.",
    price: "Price on Request\nQuote inquiry required",
    image: "/artworks/specialty-08.jpg",
  },
];

export const ACADEMY_PROGRAMS = [
  {
    id: "foundations",
    moduleTag: "CURRICULUM MODULE I",
    term: "2 MONTHS FULL-TIME",
    title: "Fine Art Foundations",
    badge: "FINE ART ACADEMY",
    description:
      "Rigorous classical drawing curriculum focused on observational precision, human osteology, tonal control, and colored pencil glazing techniques.",
    details: [
      { label: "Duration:", value: "2 Months (Intensive)" },
      { label: "Studio Hours:", value: "10:30 AM 5:00 PM" },
      { label: "Tuition:", value: "₹15,000 (Complete Materials Included)" },
      { label: "Core Pillars:", value: "Live Sketching, Graphite Realism, Light & Shadow" },
    ],
    cta: "ENROLL IN FOUNDATIONS",
  },
  {
    id: "advanced",
    moduleTag: "CURRICULUM MODULE II",
    term: "3 MONTHS MASTER CLASS",
    title: "Advanced Art & Digital Design",
    badge: "FELLOWSHIP",
    description:
      "Bridging physical draftsmanship with modern post-production. Real-world client commissions, 24K gold leaf application, and gallery portfolio preparation.",
    details: [
      { label: "Duration:", value: "3 Months (Advanced Masterclass)" },
      { label: "Fellowship Type:", value: "Direct Master Mentorship" },
      { label: "Tuition:", value: "₹90,000 (Installments Available)" },
      { label: "Core Pillars:", value: "Procreate/Photoshop, Gold Leaf, Portfolio Curation" },
    ],
    cta: "ENROLL IN ADVANCED COURSE",
  },
];

export const ARCHIVE_PIECES = [
  {
    id: "OA-7712",
    code: "OA 7712",
    title: "Vesalius Corpus Metamorphosis",
    medium: "Single-needle anatomical study on lumbar column",
    year: "2024",
    category: "TATTOO",
    image: "/images/hero_editorial_tattoo.jpg",
    details:
      "A 32-hour single-needle micro-pigmentation exploring Renaissance anatomical drawings with sub-millimeter stippling along the dorsal axis.",
  },
  {
    id: "OA-8409",
    code: "OA-8409",
    title: "Drapery of the Martyr",
    medium: "Layered graphite & powdered carbon on Fabriano",
    year: "2023",
    category: "GRAPHITE",
    image: "/artworks/pencil-04.jpg",
    details:
      "Hand-burnished chiaroscuro study executing delicate folds and textural skin highlights on 300 GSM Fabriano cotton rag.",
  },
  {
    id: "OA-9122",
    code: "OA 9122",
    title: "Strata of Golden Silence",
    medium: "Glazed oil with pure 24K Florentine leaf on Belgian linen",
    year: "2024",
    category: "PAINTINGS",
    image: "/artworks/acrylic-08.jpg",
    details:
      "Flemish glazing method layered across twelve optical resin intervals, crowned with authentic 24-karat Florentine gold leafing.",
  },
  {
    id: "OA-3041",
    code: "OA 3041",
    title: "Basalt Stele & Pyrite Inlay",
    medium: "Raw mineral crystal mosaic bonded into honed volcanic slate",
    year: "2023",
    category: "STONE ART",
    image: "/artworks/crystal-02.jpg",
    details:
      "Deep geological relief inlay embedding raw Peruvian pyrite and titanium quartz crystal points directly into hand-chiselled basalt.",
  },
  {
    id: "OA-5204",
    code: "OA 5204",
    title: "Nocturne in Bone & Umber",
    medium: "Surgical scalpel 8-tier archival paper relief",
    year: "2024",
    category: "PAPER CUT",
    image: "/artworks/specialty-05.jpg",
    details:
      "Eight concentric cut-layers engineered with architectural tolerance, float-mounted inside a sealed anti-reflective shadowbox.",
  },
  {
    id: "OA-1099",
    code: "OA 1099",
    title: "Proportions of the Spine",
    medium: "Single-needle stipple mandala & Platonic orbit",
    year: "2024",
    category: "TATTOO",
    image: "/images/hero_rose_tattoo.jpg",
    details:
      "A sacred geometric calculation aligned to vertebrate nerve centers, balancing astronomical geometry and human biomechanics.",
  },
];

export const CONTACT_CARDS = [
  {
    label: "WHATSAPP",
    value: "+91 800 555 0199",
    subtext: "Quick and direct assistance",
    href: "https://wa.me/918005550199",
  },
  {
    label: "EMAIL",
    value: "jark@theartatelier.art",
    subtext: "For general inquiries and commissions",
    href: "mailto:jark@theartatelier.art",
  },
  {
    label: "ARTWORK & TATTOO INQUIRIES",
    value: "press@theartatelier.art",
    subtext:
      "Our team can help with custom tattoo requests, artwork commissions, and project details.",
    href: "mailto:press@theartatelier.art",
  },
  {
    label: "PHONE",
    value: "+91 80 4920 8800",
    subtext: "10:00 19:00 IST (Tuesday Sunday)",
    href: "tel:+918049208800",
  },
];

export const STUDIOS_DATA = [
  {
    id: "chennai",
    category: "MAIN STUDIO",
    name: "THE ART ATELIER",
    address: "Chennai, Tamil Nadu, India",
    notes: "Private Studio • Appointment Only",
    timezone: "Asia/Kolkata",
    tzLabel: "Indian Time (IST)",
  },
  {
    id: "madurai",
    category: "SECONDARY STUDIO",
    name: "THE ART ATELIER",
    address: "Madurai, Tamil Nadu, India",
    notes:
      "Private Studio • Appointment Only European Programs • By Invitation Only Lake Limmat View",
    timezone: "Asia/Kolkata",
    tzLabel: "Indian Time (IST)",
  },
  {
    id: "newyork",
    category: "NEW YORK STUDIO",
    name: "THE ART ATELIER",
    address: "404 Broadway, Soho, New York, NY 10013, USA",
    notes:
      "Private Studio • Appointment Only Annual Autumn Program Creative Archive",
    timezone: "America/New_York",
    tzLabel: "New York Time",
  },
];

export const INQUIRY_TYPES = [
  "CUSTOM TATTOO",
  "FINE ARTWORK COMMISSION",
  "ACADEMY ENROLLMENT",
  "GALLERY VISIT",
  "GENERAL",
  "PRESS",
];
