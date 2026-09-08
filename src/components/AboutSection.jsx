import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const PILLARS = [
    {
      title: "1. CUSTOM TATTOOS",
      desc: "Fine line, realism portraits, custom concepts, and surgical-grade hygiene.",
    },
    {
      title: "2. FINE ART COMMISSIONS",
      desc: "Graphite pencil portraits, colour pencil art, crystal stone, and canvas paintings.",
    },
    {
      title: "3. PROFESSIONAL EDUCATION",
      desc: "Comprehensive 3-month tattoo apprenticeships and live portrait art courses.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0c0c0f] border-b border-[#22222a] relative">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]">
              ABOUT MS TATTOO
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              An art and tattoo studio focused on creativity, quality and learning.
            </p>
          </motion.div>
        </div>

        {/* Story & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2] font-normal leading-snug">
              WHERE FINE ART MEETS TATTOO CRAFT
            </h3>

            <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
              We bring classical drawing techniques, portrait realism, and sterile medical-grade standards to every custom tattoo and commissioned artwork.
            </p>

            <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
              Whether you want a delicate single-needle tattoo, a lifelike family portrait, or professional training to launch your career, we provide direct 1-on-1 artistic care.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono-tech">
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all shadow-lg"
              >
                BOOK A SESSION
              </a>
              <a
                href="#academy"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-medium uppercase text-[#F7F6F2] border border-[#33333f] hover:border-[#c5a880] hover:text-[#c5a880] transition-all"
              >
                VIEW CLASSES
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#111115] border border-[#22222a] p-8 sm:p-10 space-y-6 shadow-xl">
            <h4 className="font-cinzel text-sm sm:text-base uppercase tracking-[0.25em] text-[#c5a880] font-mono-tech font-semibold">
              CORE PILLARS
            </h4>

            <div className="space-y-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="p-6 bg-[#0e0e12] border border-[#22222a] space-y-2">
                  <h5 className="text-lg sm:text-xl font-cinzel text-[#F7F6F2] font-normal">
                    {p.title}
                  </h5>
                  <p className="text-sm sm:text-base text-[#a3a299] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
