import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlay, FiX, FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import { studioReels } from '../../data/videoReels';
import BackButton from '../common/BackButton';

export default function StudioMotionReels({ onBookSession }) {
  const [activeReel, setActiveReel] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-[#F7F6F2] border-b border-[#D8D6D0] overflow-hidden text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#777777] font-mono">
                STUDIO ARCHIVE IN MOTION
              </span>
            </div>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl text-[#111111] font-normal tracking-tight">
              Process, Reveals & Craft
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-light max-w-lg mt-2 leading-relaxed">
              Witness authentic behind-the-scenes moments: glitter reveal canvases, fine graphite detailing, and precision ink in motion.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#D8D6D0] hover:border-[#111111] bg-[#EFEDE7] hover:bg-[#111111] hover:text-[#F7F6F2] transition-colors flex items-center justify-center cursor-pointer text-[#111111]"
              aria-label="Previous Reels"
            >
              <FiChevronLeft className="text-sm" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#D8D6D0] hover:border-[#111111] bg-[#EFEDE7] hover:bg-[#111111] hover:text-[#F7F6F2] transition-colors flex items-center justify-center cursor-pointer text-[#111111]"
              aria-label="Next Reels"
            >
              <FiChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Horizontal Reels Carousel */}
        <div
          ref={scrollRef}
          className="flex items-center gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {studioReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setActiveReel(reel)}
              className="group relative w-56 sm:w-64 shrink-0 aspect-[9/16] bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] overflow-hidden cursor-pointer snap-start transition-all duration-300"
            >
              {/* Poster Image */}
              <img
                src={reel.poster}
                alt={reel.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 transition-colors" />

              {/* Top Category Badge & Time */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <span className="px-2 py-0.5 bg-white/85 backdrop-blur-xs border border-white/30 text-[8.5px] uppercase tracking-widest text-[#111111] font-mono font-semibold">
                  {reel.category}
                </span>
                <span className="px-1.5 py-0.5 bg-black/60 backdrop-blur-xs text-[8.5px] font-mono text-white/90">
                  {reel.duration}
                </span>
              </div>

              {/* Center Play Icon with Subtle Ring */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-white/85 group-hover:bg-white text-[#111111] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 pl-0.5">
                  <FiPlay className="text-base fill-[#111111]" />
                </div>
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-4 left-4 right-4 z-10 text-left">
                <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-white block truncate drop-shadow-xs">
                  {reel.title}
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-white/70 block mt-1">
                  TAP TO WATCH REEL →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LUXURY CINEMA MODAL — PERFECT VERTICAL RESPONSIVENESS & CLEAN BORDERS */}
      <AnimatePresence>
        {activeReel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/95 backdrop-blur-xl p-4 sm:p-6"
          >
            {/* Top Control Bar */}
            <div className="w-full max-w-5xl h-14 sm:h-16 px-4 flex items-center justify-between z-30 border-b border-white/15 bg-black/40">
              {/* Left Back Button */}
              <BackButton
                onClick={() => setActiveReel(null)}
                label="Back to Studio"
                className="text-white hover:text-white/80"
              />

              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-white/70 tracking-widest hidden sm:inline uppercase">
                  {activeReel.category} • {activeReel.duration}
                </span>
                <button
                  onClick={() => setActiveReel(null)}
                  className="w-9 h-9 flex items-center justify-center text-white/70 hover:text-white border border-white/20 hover:border-white transition-colors cursor-pointer"
                  title="Close Reel"
                >
                  <FiX className="text-base" />
                </button>
              </div>
            </div>

            {/* Video Player Box - Proportional Height Constrained */}
            <div className="my-auto flex flex-col items-center justify-center max-h-[calc(100vh-140px)] w-full py-2">
              <div className="relative h-[62vh] sm:h-[68vh] aspect-[9/16] max-w-[92vw] bg-black border border-white/20 shadow-2xl overflow-hidden flex items-center justify-center">
                <video
                  key={activeReel.id}
                  poster={activeReel.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain bg-black"
                >
                  <source src={activeReel.videoSrc} type="video/mp4" />
                  Your browser does not support HTML5 video playback.
                </video>
              </div>

              {/* Commission CTA button directly visible and cleanly bordered */}
              <div className="w-full max-w-[92vw] sm:max-w-[calc(68vh*9/16)] pt-3 pointer-events-auto">
                <button
                  onClick={() => {
                    setActiveReel(null);
                    if (onBookSession) onBookSession();
                  }}
                  className="w-full py-2.5 px-4 bg-white hover:bg-neutral-200 text-[#111111] text-[10.5px] uppercase tracking-[0.2em] font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-lg border border-white"
                >
                  <span>COMMISSION THIS ART FORM</span>
                  <FiArrowRight className="text-xs" />
                </button>
              </div>
            </div>

            {/* Bottom spacer / indicator */}
            <div className="text-[9px] uppercase tracking-widest font-mono text-white/40 pb-1">
              MS Tattoo & Art Studio • Authentic Atelier Footage
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
