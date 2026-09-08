import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { imageAssets } from '../data/imageAssets';

export default function AboutPage() {
  const PILLARS = [
    {
      title: "1. CUSTOM TATTOOS",
      desc: "Single-needle fine line, chiaroscuro realism portraits, and custom anatomical flow with surgical-grade sterilization.",
      image: imageAssets.pillars.tattoo,
    },
    {
      title: "2. FINE ART COMMISSIONS",
      desc: "Museum-grade graphite pencil portraits, polychromos colored pencils, crystal stone art, and architectural wall murals.",
      image: imageAssets.pillars.artwork,
    },
    {
      title: "3. PROFESSIONAL EDUCATION",
      desc: "3-month tattoo apprenticeships, 2-month portrait drawing courses, and intensive 3-day art workshops.",
      image: imageAssets.pillars.academy,
    },
  ];

  return (
    <div className="bg-[#09090b] text-[#E5E3DC] min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="mb-20 border-b border-[#22222a] pb-12">
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
              STUDIO STORY & PHILOSOPHY
            </span>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F6F2] font-normal tracking-[0.02em] leading-none">
              ABOUT MS TATTOO
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Where fine art drawing discipline meets surgical-grade tattoo craftsmanship.
            </p>
          </div>
        </div>

        {/* Narrative Section with Real Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#F7F6F2] font-normal leading-snug">
              AN ART & TATTOO SANCTUARY
            </h2>

            <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
              At MS Tattoo & Art Studio, we believe that an artist’s discipline does not stop when the needle stops vibrating. Our foundation began with classical graphite portraiture and anatomical studies, translating years of fine drawing expertise onto living skin.
            </p>

            <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
              Every appointment is treated as an individual artistic collaboration. Whether drafting an intricate single-needle spine alignment, executing a memorial portrait tattoo, or crafting a commissioned crystal stone painting, our process is anchored in anatomical harmony and archival permanence.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 font-mono-tech">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all shadow-lg"
              >
                BOOK A SESSION →
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-medium uppercase text-[#F7F6F2] border border-[#33333f] hover:border-[#c5a880] hover:text-[#c5a880] transition-all"
              >
                VIEW PORTFOLIO
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-[420px] sm:h-[520px] overflow-hidden border border-[#22222a] bg-[#111115] shadow-2xl">
              <img
                src={imageAssets.hero.main}
                alt="MS Tattoo Studio Craftsmanship"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
            </div>
          </div>
        </div>

        {/* 3 Core Pillars */}
        <div className="mb-24">
          <div className="mb-12 space-y-2">
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
              CORE DISCIPLINES
            </h2>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Built on craftsmanship, creativity, and sterile clinical standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {PILLARS.map((p) => (
              <div
                key={p.title}
                className="bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl flex flex-col justify-between"
              >
                <div className="relative h-64 overflow-hidden bg-[#0a0a0c]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-85" />
                </div>
                <div className="p-8 space-y-3">
                  <h3 className="font-cinzel text-2xl text-[#F7F6F2]">
                    {p.title}
                  </h3>
                  <p className="text-base text-[#d4d3cc] font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical Hygiene Pledge */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#111115] border border-[#22222a] space-y-6">
          <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
            HYGIENE & SAFETY PLEDGE
          </span>
          <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
            100% STERILE & CLINICAL PROTOCOLS
          </h3>
          <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed max-w-3xl">
            Every tattoo procedure is conducted with factory-sealed, single-use EO gas membrane cartridges opened directly in front of the client. All workstations, power units, and machines are wrapped in medical barrier protection, and non-disposable tools undergo autoclave sterilization.
          </p>
        </div>

      </div>
    </div>
  );
}
