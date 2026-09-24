import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_MEDIA, GALLERY_CATEGORIES } from '../data/galleryData';
import CornerGlowContainer from '../components/common/CornerGlowContainer';

export default function GalleryPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryParam = searchParams.get('category');
  const idParam = searchParams.get('id');

  const [activeFilter, setActiveFilter] = useState(categoryParam || 'all');
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(24);

  // Sync category param if URL changes
  useEffect(() => {
    if (categoryParam) {
      setActiveFilter(categoryParam);
    }
  }, [categoryParam]);

  // Sync specific item ID if provided in URL
  useEffect(() => {
    if (idParam) {
      const foundIdx = filteredItems.findIndex((item) => item.id === idParam);
      if (foundIdx !== -1) {
        setSelectedItemIndex(foundIdx);
      }
    }
  }, [idParam]);

  // Filter items
  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_MEDIA
      : GALLERY_MEDIA.filter((item) => item.category === activeFilter);

  const displayedItems = filteredItems.slice(0, visibleCount);

  // Reset pagination count when filter changes
  useEffect(() => {
    setVisibleCount(24);
    setSelectedItemIndex(null);
  }, [activeFilter]);

  const currentItem =
    selectedItemIndex !== null ? filteredItems[selectedItemIndex] : null;

  // Keyboard navigation handler
  const handleKeyDown = useCallback(
    (e) => {
      if (selectedItemIndex === null) return;
      if (e.key === 'Escape') {
        setSelectedItemIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedItemIndex((prev) =>
          prev < filteredItems.length - 1 ? prev + 1 : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedItemIndex((prev) =>
          prev > 0 ? prev - 1 : filteredItems.length - 1
        );
      }
    },
    [selectedItemIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) =>
      prev < filteredItems.length - 1 ? prev + 1 : 0
    );
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedItemIndex((prev) =>
      prev > 0 ? prev - 1 : filteredItems.length - 1
    );
  };

  return (
    <div className="bg-[#09090b] text-[#E5E3DC] min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b border-[#22222a] pb-12">
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
              COMPLETE PORTFOLIO ARCHIVE
            </span>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F6F2] font-normal tracking-[0.02em] leading-none">
              OUR WORK
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Tattoos, artwork & creations by MS Tattoo.
            </p>
          </div>

          <div className="text-sm font-mono-tech text-[#888780]">
            SHOWING <span className="text-[#c5a880] font-semibold">{displayedItems.length}</span> OF{' '}
            <span className="text-[#F7F6F2] font-semibold">{filteredItems.length}</span> WORKS
          </div>
        </div>

        {/* Category Navigation Bar with mouse-wheel & drag scroll support */}
        <div 
          onWheel={(e) => {
            if (e.deltaY !== 0) {
              e.currentTarget.scrollLeft += e.deltaY;
            }
          }}
          className="flex items-center overflow-x-auto pb-4 mb-16 border-b border-[#22222a] scrollbar-thin scrollbar-thumb-[#26252b] scrollbar-track-transparent gap-3 sm:gap-4 select-none"
        >
          {GALLERY_CATEGORIES.map((cat) => {
            const count =
              cat.id === 'all'
                ? GALLERY_MEDIA.length
                : GALLERY_MEDIA.filter((m) => m.category === cat.id).length;

            if (count === 0 && cat.id !== 'all') return null;

            const isActive = activeFilter === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  if (cat.id === 'all') {
                    setSearchParams({});
                  } else {
                    setSearchParams({ category: cat.id });
                  }
                }}
                className={`px-5 py-3 text-xs sm:text-sm tracking-[0.18em] uppercase font-mono-tech border transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#181820] text-[#c5a880] border-[#c5a880] font-semibold shadow-lg shadow-[#c5a880]/10'
                    : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                }`}
              >
                <span>{cat.label}</span>
                <span className="text-[10px] opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Media Grid (Original Colors - No Grayscale Filters!) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
        >
          {displayedItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx % 12) * 0.04 }}
              className="h-full"
            >
              <CornerGlowContainer
                onClick={() => setSelectedItemIndex(idx)}
                dataCursor="view"
                className="h-full bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/70 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                {/* Media Container */}
                <div className="relative h-76 sm:h-84 md:h-90 overflow-hidden bg-[#0a0a0c]">
                  {item.type === 'video' ? (
                    <div className="w-full h-full relative">
                      <img
                        src={item.poster}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      {/* Play Badge */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#09090b] flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                          ▶
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  )}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] tracking-[0.2em] text-[#c5a880] uppercase bg-[#09090b]/90 px-3 py-1 border border-[#c5a880]/30 font-mono-tech">
                      {item.categoryName || item.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta Content */}
                <div className="p-6 space-y-2">
                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] font-normal group-hover:text-[#c5a880] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#a3a299] font-light">
                    {item.medium}
                  </p>
                  {item.fee && (
                    <span className="text-xs text-[#c5a880] font-mono-tech font-semibold block pt-1">
                      {item.fee}
                    </span>
                  )}
                </div>
              </CornerGlowContainer>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button if items remain */}
        {visibleCount < filteredItems.length && (
          <div className="flex justify-center pb-12">
            <button
              onClick={() => setVisibleCount((prev) => prev + 24)}
              className="inline-flex items-center justify-center px-10 py-5 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all shadow-xl font-mono-tech cursor-pointer"
            >
              LOAD MORE WORKS ({filteredItems.length - visibleCount} REMAINING) →
            </button>
          </div>
        )}

      </div>

      {/* Fullscreen Interactive Lightbox Modal */}
      <AnimatePresence>
        {currentItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedItemIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111115] border border-[#c5a880]/60 max-w-5xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItemIndex(null)}
                className="absolute top-4 right-4 z-30 text-[#888780] hover:text-[#F7F6F2] text-2xl font-bold bg-[#09090b]/80 w-12 h-12 flex items-center justify-center border border-[#22222a] cursor-pointer"
                aria-label="Close"
              >
                ✕
              </button>

              {/* Prev / Next Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-[#888780] hover:text-[#c5a880] text-3xl bg-[#09090b]/80 w-12 h-12 flex items-center justify-center border border-[#22222a] cursor-pointer"
                aria-label="Previous Work"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-[380px] top-1/2 -translate-y-1/2 z-30 text-[#888780] hover:text-[#c5a880] text-3xl bg-[#09090b]/80 w-12 h-12 flex items-center justify-center border border-[#22222a] cursor-pointer"
                aria-label="Next Work"
              >
                ›
              </button>

              {/* Media Frame (Natural Color, No Filter!) */}
              <div className="flex-grow min-h-[380px] md:min-h-[560px] bg-[#070709] flex items-center justify-center p-4 relative">
                {currentItem.type === 'video' ? (
                  <video
                    src={currentItem.src}
                    controls
                    autoPlay
                    playsInline
                    className="max-h-[75vh] max-w-full rounded shadow-2xl"
                  />
                ) : (
                  <img
                    src={currentItem.src}
                    alt={currentItem.title}
                    className="max-h-[75vh] max-w-full object-contain rounded"
                  />
                )}
              </div>

              {/* Metadata Details Sidebar */}
              <div className="w-full md:w-[360px] p-8 bg-[#111115] border-t md:border-t-0 md:border-l border-[#22222a] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                      {currentItem.categoryName || currentItem.category}
                    </span>
                    <h2 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal mt-1 leading-snug">
                      {currentItem.title}
                    </h2>
                  </div>

                  {currentItem.description && (
                    <p className="text-sm sm:text-base text-[#d4d3cc] font-light leading-relaxed">
                      {currentItem.description}
                    </p>
                  )}

                  {/* Real Specs Grid */}
                  <div className="space-y-2 pt-4 border-t border-[#22222a] text-xs sm:text-sm font-mono-tech">
                    {currentItem.medium && (
                      <div className="flex justify-between py-1 border-b border-[#22222a]/40">
                        <span className="text-[#888780] uppercase">MEDIUM:</span>
                        <span className="text-[#F7F6F2] font-medium">{currentItem.medium}</span>
                      </div>
                    )}
                    {currentItem.dimensions && (
                      <div className="flex justify-between py-1 border-b border-[#22222a]/40">
                        <span className="text-[#888780] uppercase">SIZE / SCALE:</span>
                        <span className="text-[#F7F6F2] font-medium">{currentItem.dimensions}</span>
                      </div>
                    )}
                    {currentItem.fee && (
                      <div className="flex justify-between py-1 border-b border-[#22222a]/40">
                        <span className="text-[#888780] uppercase">PRICE:</span>
                        <span className="text-[#c5a880] font-semibold">{currentItem.fee}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#22222a] space-y-3">
                  <Link
                    to="/contact"
                    className="block w-full py-4 text-center text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all font-mono-tech shadow-lg"
                  >
                    INQUIRE / COMMISSION
                  </Link>
                  <div className="text-center text-[10px] tracking-widest text-[#888780] font-mono-tech uppercase">
                    USE ARROW KEYS ‹ › TO BROWSE
                  </div>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
