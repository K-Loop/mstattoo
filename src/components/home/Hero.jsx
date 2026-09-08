import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Logo from '../layout/Logo';

export default function Hero({ onExploreArt, onBookSession, onNavigate }) {
  const quickLinks = [
    { label: 'ABOUT', target: 'about' },
    { label: 'TATTOOS', target: 'tattoos' },
    { label: 'ARTWORKS', target: 'artworks' },
    { label: 'ACADEMY', target: 'classes' }
  ];

  return (
    <section className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 bg-[#F7F6F2] border-b border-[#D8D6D0] overflow-hidden text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        {/* TOP ROW: Brand (Left) | Quick Nav Column (Center) | Dominant Portrait (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left + Center Area (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between self-stretch">
            
            {/* Top Bar inside Hero */}
            <div className="flex items-start justify-between gap-6 pb-4">
              {/* Brand Text (Matching Reference Template like CAPTURR*) */}
              <div>
                <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#111111] block leading-none">
                  MS TATTOO*
                </span>
                <span className="font-sans text-[8.5px] uppercase tracking-[0.3em] text-[#777777] block mt-1">
                  STUDIO & ACADEMY
                </span>
              </div>

              {/* Center Vertical Quick Links (Matching Template Column) */}
              <div className="flex flex-col space-y-1.5 text-right sm:text-left pr-4">
                {quickLinks.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => onNavigate && onNavigate(item.target)}
                    className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#444444] hover:text-[#111111] font-medium transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* MAIN TYPOGRAPHY HEADLINE (Normalized to cohesive editorial serif matching reference) */}
            <div className="pt-6 sm:pt-8 pb-8 lg:pb-12 select-none">
              <h1 className="font-serif-editorial text-[#111111] leading-[1.04] tracking-tight">
                {/* Line 1: we Tell */}
                <div className="flex items-baseline">
                  <span className="italic font-normal text-3xl sm:text-5xl lg:text-6xl mr-3 sm:mr-4.5">
                    we
                  </span>
                  <span className="italic font-normal text-6xl sm:text-7xl lg:text-[6.5rem]">
                    Tell
                  </span>
                </div>

                {/* Line 2: Stories */}
                <div className="mt-0.5 sm:mt-1.5">
                  <span className="italic font-normal text-6xl sm:text-7xl lg:text-[6.5rem]">
                    Stories
                  </span>
                </div>

                {/* Line 3: through Ink & Art */}
                <div className="flex items-baseline mt-0.5 sm:mt-1.5">
                  <span className="not-italic font-normal text-3xl sm:text-5xl lg:text-6xl mr-3 sm:mr-4.5 text-[#111111]">
                    through
                  </span>
                  <span className="italic font-normal text-6xl sm:text-7xl lg:text-[6.5rem]">
                    Ink & Art
                  </span>
                </div>
              </h1>
            </div>

          </div>

          {/* Right Area (lg:col-span-5): Large Portrait Artwork Canvas */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] bg-[#EFEDE7] border border-[#D8D6D0] overflow-hidden group">
              <img
                src="/images/hero_rose_tattoo.jpg"
                alt="MS Tattoo & Art Masterpiece"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              
              {/* Discrete Corner Badge */}
              <div className="absolute top-4 right-4 px-2 py-1 bg-[#F7F6F2]/90 backdrop-blur-xs border border-[#D8D6D0] text-[8.5px] uppercase tracking-widest font-mono text-[#111111]">
                Master Atelier
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: 3 Portrait Artwork Thumbnails (Left) + Editorial Justified Copy & CTA (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end pt-10 mt-6 border-t border-[#D8D6D0]">
          
          {/* Bottom Left (lg:col-span-6): 3 Side-by-Side Artwork Thumbnails (Matching Template) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              
              {/* Thumbnail 1: Tattoo */}
              <div
                onClick={() => onNavigate && onNavigate('tattoos')}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[3/4] bg-[#EFEDE7] border border-[#D8D6D0] overflow-hidden mb-2">
                  <img
                    src="/images/nav_tattoo.jpg"
                    alt="Living Canvas Tattoo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#777777] font-semibold block truncate group-hover:text-[#111111]">
                  01 / TATTOO INK
                </span>
              </div>

              {/* Thumbnail 2: Pencil Portrait */}
              <div
                onClick={() => onNavigate && onNavigate('artworks')}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[3/4] bg-[#EFEDE7] border border-[#D8D6D0] overflow-hidden mb-2">
                  <img
                    src="/images/thumb_eye_sketch.jpg"
                    alt="Graphite Portrait Sketch"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#777777] font-semibold block truncate group-hover:text-[#111111]">
                  02 / FINE GRAPHITE
                </span>
              </div>

              {/* Thumbnail 3: Crystal / Canvas Art */}
              <div
                onClick={() => onNavigate && onNavigate('gallery')}
                className="group cursor-pointer text-left"
              >
                <div className="aspect-[3/4] bg-[#EFEDE7] border border-[#D8D6D0] overflow-hidden mb-2">
                  <img
                    src="/images/hero_crystal_art.jpg"
                    alt="Crystal Stone Canvas"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#777777] font-semibold block truncate group-hover:text-[#111111]">
                  03 / CRYSTAL ART
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Right (lg:col-span-6): Refined Editorial Narrative & Underlined Action Link */}
          <div className="lg:col-span-6 space-y-6 lg:pl-8">
            <p className="text-[10.5px] sm:text-[11.5px] text-[#555555] uppercase font-sans tracking-[0.16em] leading-relaxed max-w-xl text-left">
              FROM PERSONAL BESPOKE TATTOOS TO TIMELESS GRAPHITE PORTRAITURE, WE BLEND ACADEMIC ANATOMICAL PRECISION WITH RAW CREATIVE EXPRESSION. EVERY STROKE IS GUIDED BY STORY, SHAPED BY SHADOW, AND CRAFTED WITH HOSPITAL-GRADE CLINICAL ASEPSIS. THIS IS ARTISTRY MADE TO LAST, CREATED WITH PURPOSE, AND MEANT TO BE TRULY FELT ACROSS TIME AND SPACE.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={onBookSession}
                className="inline-block font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#111111] border-b-2 border-[#111111] pb-1 hover:opacity-70 transition-opacity cursor-pointer"
              >
                BOOK YOUR SESSION
              </button>

              <button
                onClick={onExploreArt}
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.25em] text-[#777777] hover:text-[#111111] transition-colors cursor-pointer"
              >
                <span>EXPLORE ARCHIVE</span>
                <FiArrowRight className="text-xs" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
