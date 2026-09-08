import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA, STUDIO_INFO } from '../data/msTattooData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden border-b border-[#22222a] bg-[#09090b]"
    >
      {/* Background Architectural Grid & Ambient Atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(197,168,128,0.07),transparent_70%)] pointer-events-none" />

      {/* Main Wide Editorial Hero Viewport (92-94vw) */}
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-center my-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          {/* Left Column: Big Editorial Typography, Punchy 1-Sentence Description & Prominent Buttons */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
            
            {/* 1. Clean Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2.5">
                <span className="w-3 h-[1.5px] bg-[#c5a880]" />
                <p className="text-xs sm:text-sm tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-medium">
                  {STUDIO_INFO.brand}
                </p>
              </div>
            </motion.div>

            {/* 2. Massive Editorial Headline (80-120px) */}
            <motion.div variants={itemVariants}>
              <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.75rem] font-normal tracking-[0.02em] text-[#F7F6F2] leading-[0.92]">
                <span className="block">ART. INK.</span>
                <span className="block text-[#c5a880] italic font-cormorant font-light mt-1 sm:mt-2">
                  STORIES.
                </span>
              </h1>
            </motion.div>

            {/* 3. Short, Simple, High-Contrast Description (18-20px) */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-[#d4d3cc] font-light leading-relaxed max-w-xl"
            >
              Custom tattoos, fine art and professional training.
            </motion.p>

            {/* 4. Large, Clear, Prominent Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4 sm:gap-6 font-mono-tech"
            >
              <a
                href="#booking"
                className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-300 shadow-lg shadow-[#c5a880]/15 group"
              >
                <span>BOOK NOW</span>
                <span className="ml-2.5 transform group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href="#tattoo"
                className="inline-flex items-center justify-center px-7 py-4 text-sm sm:text-base tracking-[0.2em] font-medium uppercase text-[#F7F6F2] border border-[#33333f] hover:border-[#c5a880] hover:text-[#c5a880] bg-[#111115]/80 transition-all duration-300"
              >
                VIEW WORK
              </a>

              <a
                href="#academy"
                className="inline-flex items-center text-sm sm:text-base tracking-[0.2em] text-[#a3a299] hover:text-[#c5a880] uppercase transition-colors py-2 font-medium"
              >
                JOIN A CLASS →
              </a>
            </motion.div>

          </div>

          {/* Right Column: Full-Height Cinematic Image Plate */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 w-full flex justify-end"
          >
            <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px] xl:h-[640px] overflow-hidden border border-[#22222a] bg-[#111115] shadow-2xl group">
              
              <motion.img
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                src={HERO_DATA.heroImage}
                alt="MS Tattoo & Art Studio"
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Seamless Dark Edge Fades */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 via-transparent to-[#09090b]/40" />

              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase bg-[#09090b]/90 backdrop-blur-sm px-4 py-2 border border-[#c5a880]/30 font-mono-tech flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                  MASTER TATTOO CRAFTSMANSHIP
                </span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Hero Bottom Information Strip */}
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-b border-[#22222a] py-4 bg-[#09090b]/60 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#22222a]">
            {HERO_DATA.metadata.map((item, index) => (
              <div
                key={item.label}
                className={`flex flex-col xl:flex-row xl:items-center space-y-0.5 xl:space-y-0 xl:space-x-3 font-mono-tech ${
                  index > 0 ? 'sm:pl-6' : ''
                }`}
              >
                <span className="text-xs tracking-[0.25em] text-[#888780] uppercase">
                  {item.label}:
                </span>
                <span className="text-xs sm:text-sm tracking-[0.2em] text-[#F7F6F2] uppercase font-semibold">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
