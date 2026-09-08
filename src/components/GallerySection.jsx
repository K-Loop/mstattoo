import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_WORKS } from '../data/msTattooData';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedPiece, setSelectedPiece] = useState(null);

  const galleryFilters = [
    { id: 'all', label: 'ALL WORK' },
    { id: 'tattoos', label: 'TATTOOS' },
    { id: 'graphite-pencil', label: 'PENCIL & GRAPHITE' },
    { id: 'acrylic-wall', label: 'PAINTINGS' },
    { id: 'crystal-stone', label: 'CRYSTAL & GLITTER' },
  ];

  const filteredWorks =
    activeFilter === 'all'
      ? GALLERY_WORKS
      : activeFilter === 'crystal-stone'
      ? GALLERY_WORKS.filter((item) => item.category === 'crystal-stone' || item.category === 'glitter-art')
      : GALLERY_WORKS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#09090b] border-b border-[#22222a] relative">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]"
            >
              OUR WORK
            </motion.h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Tattoos & artwork by MS Tattoo.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center flex-wrap gap-3">
            {galleryFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 text-xs sm:text-sm tracking-[0.18em] uppercase font-mono-tech border transition-all font-medium ${
                  activeFilter === filter.id
                    ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                    : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredWorks.map((work, idx) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              onClick={() => setSelectedPiece(work)}
              className="group cursor-pointer bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden bg-[#0a0a0c]">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-115 group-hover:scale-105 group-hover:filter group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              <div className="p-6 space-y-2">
                <h4 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] font-normal tracking-wide group-hover:text-[#c5a880] transition-colors">
                  {work.title}
                </h4>
                <p className="text-sm text-[#a3a299] font-light">
                  {work.medium}
                </p>
                <div className="pt-2">
                  <span className="text-xs tracking-[0.2em] text-[#c5a880] uppercase font-mono-tech font-semibold inline-flex items-center gap-1.5">
                    VIEW PHOTO →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Commission Prompt */}
        <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div className="space-y-2">
            <h4 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
              Have a Custom Project in Mind?
            </h4>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              We create custom tattoos, memorial portraits, wall murals and personalized art.
            </p>
          </div>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg"
          >
            START YOUR DESIGN
          </a>
        </div>
      </div>

      {/* Artwork Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-3xl w-full overflow-hidden relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedPiece(null)}
                className="absolute top-4 right-4 z-20 text-[#888780] hover:text-white text-2xl font-bold bg-[#09090b]/80 w-10 h-10 flex items-center justify-center border border-[#22222a]"
              >
                ✕
              </button>

              <div className="h-96 sm:h-[480px] bg-[#09090b] relative flex items-center justify-center p-4">
                <img
                  src={selectedPiece.image}
                  alt={selectedPiece.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <div className="p-8 space-y-3">
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                  {selectedPiece.title}
                </h3>
                <p className="text-base text-[#c5a880] font-mono-tech font-medium">
                  {selectedPiece.medium}
                </p>
                <div className="pt-4 border-t border-[#22222a] flex justify-end">
                  <a
                    href="#booking"
                    onClick={() => setSelectedPiece(null)}
                    className="inline-flex items-center px-8 py-3.5 text-xs sm:text-sm tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech shadow-md"
                  >
                    INQUIRE SIMILAR ARTWORK
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
