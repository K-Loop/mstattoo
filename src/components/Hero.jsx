import React, { useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HERO_DATA, STUDIO_INFO } from '../data/msTattooData';
import CornerGlowContainer from './common/CornerGlowContainer';

export default function Hero() {
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const heroRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  useEffect(() => {
    // Only fine pointer (desktop)
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    const onHeroMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      mousePos.current.x = (e.clientX - cx) / (rect.width / 2);
      mousePos.current.y = (e.clientY - cy) / (rect.height / 2);
    };

    const onHeroMouseLeave = () => {
      mousePos.current.x = 0;
      mousePos.current.y = 0;
    };

    const heroEl = heroRef.current;
    if (heroEl) {
      heroEl.addEventListener('mousemove', onHeroMouseMove, { passive: true });
      heroEl.addEventListener('mouseleave', onHeroMouseLeave);
    }

    // 120 FPS GPU Parallax loop
    const parallaxLoop = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.08;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.08;

      if (imageRef.current) {
        const ix = currentPos.current.x * -8;
        const iy = currentPos.current.y * -6;
        imageRef.current.style.transform = `translate3d(${ix}px, ${iy}px, 0)`;
      }

      if (badgeRef.current) {
        const bx = currentPos.current.x * 4;
        const by = currentPos.current.y * 3;
        badgeRef.current.style.transform = `translate3d(${bx}px, ${by}px, 0)`;
      }

      rafId.current = requestAnimationFrame(parallaxLoop);
    };

    rafId.current = requestAnimationFrame(parallaxLoop);

    return () => {
      if (heroEl) {
        heroEl.removeEventListener('mousemove', onHeroMouseMove);
        heroEl.removeEventListener('mouseleave', onHeroMouseLeave);
      }
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[calc(100vh-5rem)] lg:min-h-[88vh] w-full pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 flex flex-col justify-between overflow-hidden border-b border-[#22222a] bg-[#09090b]"
    >
      {/* 1. Hardware-Accelerated Ambient Blueprint Texture */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-60 pointer-events-none z-0" 
        aria-hidden="true"
      />

      {/* 2. Main Editorial Hero Viewport (92-94vw) */}
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 flex-grow flex flex-col justify-center my-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center"
        >
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-7">
            
            {/* Clean Eyebrow */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-3">
                <span className="w-3.5 h-[1.5px] bg-[#c5a880]" />
                <p className="text-xs sm:text-sm tracking-[0.28em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  {STUDIO_INFO.brand} • FINE ART ATELIER
                </p>
              </div>
            </motion.div>

            {/* Dominant Editorial Serif Headline: ART CAN CHANGE EVERYTHING. */}
            <motion.div variants={itemVariants}>
              <h1 className="font-cormorant font-normal text-[#F7F6F2] tracking-[0.015em] leading-[0.96] text-[clamp(2.6rem,4.4vw,5rem)] select-none">
                <span className="block font-medium tracking-[0.02em] uppercase text-[#F7F6F2]">
                  ART CAN CHANGE
                </span>
                <span className="block italic font-light text-[#c5a880] tracking-[0.01em] mt-1 sm:mt-2 bg-gradient-to-r from-[#ebd3b2] via-[#c5a880] to-[#d4af37] bg-clip-text text-transparent">
                  EVERYTHING.
                </span>
              </h1>
            </motion.div>

            {/* Curatorial Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-[#b5b4ad] font-light leading-relaxed max-w-xl"
            >
              Custom tattoos, fine art commissions and professional academy training.
            </motion.p>

            {/* Prominent Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 sm:pt-3 flex flex-wrap items-center gap-4 sm:gap-6 font-mono-tech"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-300 shadow-xl shadow-[#c5a880]/15 group cursor-pointer"
              >
                <span>BOOK NOW</span>
                <span className="ml-2.5 transform group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>

              <Link
                to="/gallery"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs sm:text-sm tracking-[0.2em] font-medium uppercase text-[#F7F6F2] border border-[#33333f] hover:border-[#c5a880] hover:text-[#c5a880] bg-[#111115]/80 transition-all duration-300 cursor-pointer"
              >
                VIEW WORK
              </Link>

              <Link
                to="/classes"
                className="inline-flex items-center text-xs sm:text-sm tracking-[0.2em] text-[#a3a299] hover:text-[#c5a880] uppercase transition-colors py-2 font-medium cursor-pointer"
              >
                JOIN A CLASS →
              </Link>
            </motion.div>

          </div>

          {/* Right Column: Full-Height Cinematic Image Plate with Parallax & 4-Corner Golden Glow */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 xl:col-span-6 w-full flex justify-end"
          >
            <div
              ref={imageRef}
              className="w-full will-change-transform"
            >
              <CornerGlowContainer
                onClick={() => navigate('/gallery')}
                dataCursor="view"
                className="w-full h-[340px] sm:h-[420px] md:h-[480px] lg:h-[500px] xl:h-[560px] max-h-[60vh] border border-[#22222a] bg-[#111115] shadow-2xl"
              >
                <img
                  src={HERO_DATA.heroImage}
                  alt="MS Tattoo & Fine Art Atelier"
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Seamless Dark Edge Fades */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent opacity-80 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/40 via-transparent to-[#09090b]/40 pointer-events-none" />

                {/* Parallax Decorative Atelier Badge */}
                <div
                  ref={badgeRef}
                  className="absolute bottom-5 left-5 z-20 will-change-transform pointer-events-none"
                >
                  <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase bg-[#09090b]/90 backdrop-blur-sm px-4 py-2 border border-[#c5a880]/30 font-mono-tech flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880] animate-pulse" />
                    MASTER CRAFTSMANSHIP & ATELIER
                  </span>
                </div>
              </CornerGlowContainer>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 3. Hero Bottom Metadata Strip */}
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 mt-8 sm:mt-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
