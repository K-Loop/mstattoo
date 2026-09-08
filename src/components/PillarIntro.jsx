import React from 'react';
import { motion } from 'framer-motion';
import { imageAssets } from '../data/imageAssets';

const SERVICES = [
  {
    title: "TATTOOS",
    description: "Custom tattoos made for you.",
    cta: "VIEW TATTOOS",
    href: "#tattoo",
    image: imageAssets.pillars.tattoo,
  },
  {
    title: "ART",
    description: "Portraits, paintings and custom artwork.",
    cta: "VIEW ART",
    href: "#artwork",
    image: imageAssets.pillars.artwork,
  },
  {
    title: "CLASSES",
    description: "Learn drawing, painting and tattooing.",
    cta: "VIEW CLASSES",
    href: "#academy",
    image: imageAssets.pillars.academy,
  },
];

export default function PillarIntro() {
  return (
    <section className="py-24 md:py-32 border-b border-[#22222a] bg-[#09090b] relative">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Big Section Header */}
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
              Custom tattoos, fine art and professional training.
            </p>
          </motion.div>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl"
            >
              {/* Large Image Showcase */}
              <div className="relative h-[280px] sm:h-[340px] md:h-[380px] overflow-hidden bg-[#0a0a0c]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111115] via-transparent to-transparent opacity-90" />
              </div>

              {/* Text & Content Block with Large Typography */}
              <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow space-y-6">
                <div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#F7F6F2] font-normal tracking-[0.03em] mb-3 group-hover:text-[#c5a880] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-[#d4d3cc] font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#22222a]">
                  <a
                    href={service.href}
                    className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#c5a880] font-semibold uppercase group-hover:text-[#F7F6F2] transition-colors font-mono-tech"
                  >
                    <span>{service.cta}</span>
                    <span className="ml-3 transform group-hover:translate-x-2 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Hover Gold Accent Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5a880] group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
