import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CuratorialCreed from '../components/CuratorialCreed';
import { imageAssets } from '../data/imageAssets';
import { GALLERY_MEDIA } from '../data/galleryData';

export default function HomePage() {
  const navigate = useNavigate();

  // Curate 4 standout real artworks/tattoos for the Selected Work preview
  const selectedPreviewWorks = GALLERY_MEDIA.filter((item) =>
    ['acrylic-01', 'crystal-01', 'glitter-01', 'pencil-01', 'tattoo-01', 'tattoo-02'].includes(item.id) ||
    item.id.includes('pencil-01') || item.id.includes('crystal-01') || item.id.includes('acrylic-01')
  ).slice(0, 4);

  return (
    <div className="bg-[#09090b] text-[#E5E3DC]">
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. WHAT WE DO INTRO */}
      <section className="py-24 md:py-32 border-b border-[#22222a] bg-[#09090b]">
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]">
                WHAT WE DO
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
                Custom tattoos, fine art commissions and professional academy training.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {/* 1. Tattoos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0c]">
                <img
                  src={imageAssets.pillars.tattoo}
                  alt="Tattoos"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 sm:p-10 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal mb-2 group-hover:text-[#c5a880] transition-colors">
                    TATTOOS
                  </h3>
                  <p className="text-base sm:text-lg text-[#d4d3cc] font-light">
                    Custom tattoo designs made for you with clinical sterile precision.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#22222a]">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase group-hover:text-[#F7F6F2] transition-colors font-mono-tech"
                  >
                    <span>EXPLORE TATTOOS</span>
                    <span className="ml-2.5">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 2. Art */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="group flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0c]">
                <img
                  src={imageAssets.pillars.artwork}
                  alt="Fine Art"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 sm:p-10 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal mb-2 group-hover:text-[#c5a880] transition-colors">
                    FINE ART
                  </h3>
                  <p className="text-base sm:text-lg text-[#d4d3cc] font-light">
                    Graphite portraits, colour pencils, crystal stone art and wall murals.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#22222a]">
                  <Link
                    to="/gallery"
                    className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase group-hover:text-[#F7F6F2] transition-colors font-mono-tech"
                  >
                    <span>VIEW ARTWORKS</span>
                    <span className="ml-2.5">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* 3. Classes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.24 }}
              className="group flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0c]">
                <img
                  src={imageAssets.pillars.academy}
                  alt="Academy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-8 sm:p-10 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal mb-2 group-hover:text-[#c5a880] transition-colors">
                    CLASSES & ACADEMY
                  </h3>
                  <p className="text-base sm:text-lg text-[#d4d3cc] font-light">
                    Learn drawing, painting and tattooing from master artists.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#22222a]">
                  <Link
                    to="/classes"
                    className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase group-hover:text-[#F7F6F2] transition-colors font-mono-tech"
                  >
                    <span>VIEW CLASSES</span>
                    <span className="ml-2.5">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. STUDIO ETHOS & HYGIENE CREED */}
      <CuratorialCreed />

      {/* 4. SELECTED WORK PREVIEW */}
      <section className="py-24 md:py-32 border-b border-[#22222a] bg-[#09090b]">
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]">
                SELECTED WORK
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light">
                A preview from our bespoke tattoo and artwork portfolio.
              </p>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg"
            >
              VIEW FULL GALLERY →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {selectedPreviewWorks.map((work) => (
              <Link
                key={work.id}
                to="/gallery"
                className="group flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0c]">
                  <img
                    src={work.src}
                    alt={work.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h4 className="font-cinzel text-xl text-[#F7F6F2] font-normal group-hover:text-[#c5a880] transition-colors">
                    {work.title}
                  </h4>
                  <p className="text-sm text-[#a3a299]">
                    {work.medium}
                  </p>
                  <span className="text-xs text-[#c5a880] font-mono-tech font-semibold block pt-1">
                    {work.fee || 'EXPLORE →'}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SMALL CLASSES CTA BLOCK */}
      <section className="py-20 md:py-24 border-b border-[#22222a] bg-[#0c0c0f]">
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="p-8 sm:p-12 md:p-16 bg-[#111115] border border-[#22222a] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                MS TATTOO & ART ACADEMY
              </span>
              <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
                LEARN WITH US
              </h3>
              <p className="text-base sm:text-lg text-[#a3a299] font-light max-w-xl">
                Drawing, painting, and professional tattoo apprenticeship programs taught in an active studio environment.
              </p>
            </div>
            <Link
              to="/classes"
              className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg"
            >
              VIEW CLASSES →
            </Link>
          </div>
        </div>
      </section>

      {/* 6. ABOUT & CONTACT PREVIEWS */}
      <section className="py-24 md:py-28 border-b border-[#22222a] bg-[#09090b]">
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* About Preview */}
            <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  ABOUT THE ATELIER
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
                  WHERE FINE ART MEETS TATTOO CRAFT
                </h3>
                <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                  Our discipline began with classical graphite portraiture and anatomical studies, translating years of fine drawing expertise onto living skin.
                </p>
              </div>
              <div>
                <Link
                  to="/about"
                  className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase hover:text-[#F7F6F2] transition-colors font-mono-tech"
                >
                  <span>READ ABOUT US</span>
                  <span className="ml-2.5">→</span>
                </Link>
              </div>
            </div>

            {/* Contact Preview */}
            <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  CONSULTATIONS & BOOKING
                </span>
                <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
                  HAVE AN IDEA? LET'S TALK
                </h3>
                <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                  Reach out directly via WhatsApp or phone to discuss your custom tattoo placement, portrait commission, or academy seat.
                </p>
              </div>
              <div>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase hover:text-[#F7F6F2] transition-colors font-mono-tech"
                >
                  <span>GET IN TOUCH</span>
                  <span className="ml-2.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL HIGH-IMPACT CINEMATIC CTA */}
      <section className="py-28 md:py-36 bg-[#0c0c0f] relative overflow-hidden border-b border-[#22222a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,168,128,0.08),transparent_70%)] pointer-events-none" />
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <h2 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F6F2] font-normal tracking-[0.02em] leading-none">
              READY TO CREATE?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#d4d3cc] font-light">
              Tattoos, art and learning — all in one place.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 font-mono-tech pt-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all shadow-xl shadow-[#c5a880]/20"
            >
              BOOK NOW →
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg tracking-[0.2em] font-medium uppercase text-[#F7F6F2] border border-[#33333f] hover:border-[#c5a880] hover:text-[#c5a880] bg-[#111115] transition-all"
            >
              VIEW GALLERY
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
