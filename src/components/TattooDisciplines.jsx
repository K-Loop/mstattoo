import React from 'react';
import { motion } from 'framer-motion';
import { imageAssets } from '../data/imageAssets';

const STYLES = [
  {
    id: "fine-line",
    title: "Fine Line & Minimal",
    description: "Delicate single-needle lines, minimalist art and clean geometry.",
    image: imageAssets.tattooStyles.fineLine,
  },
  {
    id: "black-grey-realism",
    title: "Black & Grey Realism",
    description: "Lifelike depth, soft shading and photographic realistic detail.",
    image: imageAssets.tattooStyles.blackGrey,
  },
  {
    id: "portrait-tattoo",
    title: "Portrait & Memorial",
    description: "Capturing faces, loved ones and iconic figures with precision.",
    image: imageAssets.tattooStyles.portrait,
  },
  {
    id: "geometric-flow",
    title: "Geometric & Dotwork",
    description: "Mandalas, sacred geometry and stipple shading aligned to your anatomy.",
    image: imageAssets.tattooStyles.geometric,
  },
  {
    id: "custom-ink",
    title: "Custom Illustrative",
    description: "Original illustrative concepts and mythological art created for you.",
    image: imageAssets.tattooStyles.custom,
  },
  {
    id: "coverup-restore",
    title: "Cover-Up & Restore",
    description: "Transforming or refreshing old tattoos into brand new custom artwork.",
    image: imageAssets.tattooStyles.coverup,
  },
];

const SAFETY_POINTS = [
  "100% Single-Use Sterile Needles",
  "Medical-Grade Sterilization",
  "Clean Sealed Workstations",
  "Premium Non-Toxic Pigments",
];

export default function TattooDisciplines() {
  return (
    <section id="tattoo" className="py-24 md:py-32 bg-[#09090b] border-b border-[#22222a] relative">
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
              TATTOO STYLES
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Custom tattoo designs made for you.
            </p>
          </motion.div>
        </div>

        {/* 6 Real Tattoo Styles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20 md:mb-24">
          {STYLES.map((style, idx) => (
            <motion.div
              key={style.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: (idx % 3) * 0.12 }}
              className="group flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div>
                {/* Style Image */}
                <div className="relative h-64 sm:h-76 md:h-80 overflow-hidden bg-[#0a0a0c]">
                  <img
                    src={style.image}
                    alt={style.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-85" />
                </div>

                {/* Card Content with Large Typography */}
                <div className="p-8 sm:p-10 space-y-3">
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal tracking-[0.03em] group-hover:text-[#c5a880] transition-colors">
                    {style.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                    {style.description}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-8 sm:px-10 pb-8 pt-4 border-t border-[#22222a]/60">
                <a
                  href="#booking"
                  className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase group-hover:text-[#F7F6F2] transition-colors font-mono-tech"
                >
                  <span>BOOK THIS STYLE</span>
                  <span className="ml-2.5 transform group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Safety & Hygiene Protocol Callout */}
        <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
              100% Sterile & Clinical Hygiene
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-2">
              {SAFETY_POINTS.map((pt) => (
                <div key={pt} className="flex items-center gap-2 text-sm sm:text-base text-[#d4d3cc] font-mono-tech">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] shrink-0" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg shadow-[#c5a880]/15"
          >
            BOOK CONSULTATION
          </a>
        </div>

      </div>
    </section>
  );
}
