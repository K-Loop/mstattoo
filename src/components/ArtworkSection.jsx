import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ARTWORK_CATEGORIES_DATA,
  ARTWORK_PRICING_TABLE,
} from '../data/msTattooData';

export default function ArtworkSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Configurator state
  const [medium, setMedium] = useState('graphite');
  const [type, setType] = useState('single');
  const [size, setSize] = useState('a4');

  // Artwork reference file
  const [artworkFile, setArtworkFile] = useState(null);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [inquireModal, setInquireModal] = useState(null);

  // Dynamic Price calculation based on real MS Tattoo matrix
  const calculatePrice = () => {
    if (medium === 'graphite') {
      if (type === 'single' && size === 'a4') return '₹1,800';
      if (type === 'single' && size === 'a3') return '₹3,500';
      if (type === 'couple' && size === 'a3') return '₹7,000';
      if (type === 'couple' && size === 'a2') return '₹15,000';
      if (type === 'single' && size === 'a2') return '₹5,500';
    }
    if (medium === 'colour') {
      if (type === 'single' && size === 'a4') return '₹3,500';
      if (type === 'single' && size === 'a3') return '₹6,000';
      if (type === 'single' && size === 'a2') return '₹10,000';
      if (type === 'couple' && size === 'a3') return '₹8,500';
      if (type === 'couple' && size === 'a2') return '₹16,500';
    }
    if (medium === 'crystal') {
      if (type === 'single') return '₹6,500 (A2)';
      if (type === 'couple') return '₹17,000 (20×30 in)';
    }
    if (medium === 'glitter') {
      if (type === 'single') return '₹10,000 (2×3 ft)';
      if (type === 'couple') return '₹15,000 (4×3 ft)';
    }
    return 'PRICE ON REQUEST';
  };

  const calculatedPrice = calculatePrice();

  const filteredPricingTables =
    selectedCategory === 'all'
      ? ARTWORK_PRICING_TABLE
      : ARTWORK_PRICING_TABLE.filter((p) => p.id === selectedCategory);

  return (
    <section id="artwork" className="py-24 md:py-32 bg-[#09090b] border-b border-[#22222a] relative">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]">
              ARTWORK
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Original drawings, paintings & custom art.
            </p>
          </motion.div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center overflow-x-auto pb-4 mb-14 border-b border-[#22222a] scrollbar-none gap-4 sm:gap-8">
          {ARTWORK_CATEGORIES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap text-sm sm:text-base tracking-[0.18em] uppercase py-2 transition-all duration-300 relative font-mono-tech ${
                selectedCategory === cat.id
                  ? 'text-[#c5a880] font-semibold'
                  : 'text-[#888780] hover:text-[#F7F6F2]'
              }`}
            >
              {cat.name}
              {selectedCategory === cat.id && (
                <motion.div
                  layoutId="activeArtCat"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c5a880]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Real Artwork Pricing Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredPricingTables.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl"
            >
              <div>
                {/* Artwork Thumbnail Image */}
                {item.image && (
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0c0c0f]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs tracking-[0.2em] text-[#c5a880] uppercase bg-[#09090b]/90 px-3 py-1.5 border border-[#c5a880]/20 font-mono-tech">
                        {item.badge}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 sm:p-10 space-y-3">
                  <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal group-hover:text-[#c5a880] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                    {item.subtitle}
                  </p>

                  {/* Clean Price Summary */}
                  <div className="space-y-2 border-t border-[#22222a] pt-4 mt-4">
                    {item.options.map((opt, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-sm py-1.5 border-b border-[#22222a]/40 last:border-none font-mono-tech"
                      >
                        <div>
                          <span className="text-[#F7F6F2] font-medium">{opt.type}</span>
                          <span className="text-[#888780] text-xs ml-2">
                            ({opt.size})
                          </span>
                        </div>
                        <span className="text-[#c5a880] font-semibold">
                          {opt.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0 sm:p-10 sm:pt-0">
                <button
                  type="button"
                  onClick={() => setInquireModal(item)}
                  className="w-full py-4 text-center text-sm tracking-[0.2em] uppercase text-[#c5a880] border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-[#09090b] transition-all font-semibold font-mono-tech"
                >
                  COMMISSION THIS ARTWORK
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Artwork Pricing Configurator */}
        <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a]">
          <div className="mb-10 space-y-2">
            <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2] tracking-wide font-normal">
              PORTRAIT & ARTWORK CALCULATOR
            </h3>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Select art style, subjects, and paper size to see pricing instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Configurator Controls */}
            <div className="lg:col-span-8 flex flex-col space-y-7">
              {/* 1. Medium */}
              <div>
                <label className="block text-xs sm:text-sm tracking-[0.2em] text-[#a3a299] uppercase mb-3 font-mono-tech font-semibold">
                  1 . SELECT ART STYLE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'graphite', label: 'GRAPHITE PENCIL' },
                    { id: 'colour', label: 'COLOUR PENCIL' },
                    { id: 'crystal', label: 'CRYSTAL STONE' },
                    { id: 'glitter', label: 'GLITTER SURPRISE' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setMedium(opt.id)}
                      className={`py-3.5 px-3 text-xs sm:text-sm tracking-[0.15em] uppercase font-mono-tech border transition-all text-center font-medium ${
                        medium === opt.id
                          ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                          : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Composition / Subject */}
              <div>
                <label className="block text-xs sm:text-sm tracking-[0.2em] text-[#a3a299] uppercase mb-3 font-mono-tech font-semibold">
                  2 . SUBJECTS
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'single', label: 'SINGLE PORTRAIT' },
                    { id: 'couple', label: 'COUPLE (2 FACES)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setType(opt.id)}
                      className={`py-3.5 px-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-mono-tech border transition-all text-center font-medium ${
                        type === opt.id
                          ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                          : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Substrate Dimension */}
              <div>
                <label className="block text-xs sm:text-sm tracking-[0.2em] text-[#a3a299] uppercase mb-3 font-mono-tech font-semibold">
                  3 . SIZE
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'a4', label: 'A4 (DESKTOP SIZE)' },
                    { id: 'a3', label: 'A3 (WALL SIZE)' },
                    { id: 'a2', label: 'A2 (LARGE DISPLAY)' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSize(opt.id)}
                      className={`py-3.5 px-3 text-xs sm:text-sm tracking-[0.15em] uppercase font-mono-tech border transition-all text-center font-medium ${
                        size === opt.id
                          ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                          : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Reference Image Dropzone */}
              <div>
                <label className="block text-xs sm:text-sm tracking-[0.2em] text-[#a3a299] uppercase mb-3 font-mono-tech font-semibold">
                  4 . ATTACH YOUR PHOTO (OPTIONAL)
                </label>
                <div className="p-6 border-2 border-dashed border-[#22222a] bg-[#0e0e12] text-center space-y-2">
                  <p className="text-sm text-[#F7F6F2] font-mono-tech">
                    Upload your portrait photo for reference
                  </p>
                  <label className="inline-block cursor-pointer px-6 py-2 text-xs tracking-[0.2em] uppercase text-[#c5a880] border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-[#09090b] transition-all font-mono-tech font-semibold mt-2">
                    <span>CHOOSE PHOTO</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setArtworkFile(e.target.files[0].name);
                      }}
                      className="hidden"
                    />
                  </label>
                  {artworkFile && (
                    <p className="text-xs text-[#c5a880] font-mono-tech pt-2">
                      Attached: {artworkFile}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Valuation Box */}
            <div className="lg:col-span-4 p-8 bg-[#0a0a0d] border border-[#c5a880]/50 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs tracking-[0.25em] text-[#888780] uppercase block font-mono-tech">
                  ESTIMATED PRICE
                </span>
                <div className="font-cinzel text-5xl sm:text-6xl text-[#c5a880] font-normal my-4">
                  {calculatedPrice}
                </div>
                <p className="text-sm text-[#d4d3cc] font-light leading-relaxed mb-6">
                  Includes archival paper/board and museum-grade protective packaging.
                </p>

                {/* Matrix Reference */}
                <div className="p-4 bg-[#111115] border border-[#22222a] text-xs space-y-1.5 text-[#888780] font-mono-tech">
                  <span className="text-[#c5a880] uppercase block mb-1 font-semibold">PRICE OVERVIEW:</span>
                  <div>Graphite A4: ₹1,800 • A3: ₹3,500</div>
                  <div>Couples Graphite: ₹7,000 – ₹15,000</div>
                  <div>Colour Pencil: ₹3,500 – ₹10,000</div>
                  <div>Crystal Stone: ₹6,500 – ₹17,000</div>
                  <div>Glitter Surprise: ₹10,000 – ₹15,000</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setOrderModalOpen(true)}
                className="w-full py-4 text-center text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors shadow-lg font-mono-tech"
              >
                ORDER CUSTOM ARTWORK
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Custom Artwork Modal */}
      <AnimatePresence>
        {orderModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-md w-full p-8 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setOrderModalOpen(false)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-xl font-bold"
              >
                ✕
              </button>
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech">
                COMMISSION INTAKE
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                ORDER COMMISSION
              </h3>
              <p className="text-sm text-[#d4d3cc]">
                Selected: {medium.toUpperCase()} • {type.toUpperCase()} • {size.toUpperCase()}
              </p>
              <div className="font-cinzel text-4xl text-[#c5a880]">
                {calculatedPrice}
              </div>
              <p className="text-sm text-[#a3a299] leading-relaxed">
                Your commission has been registered. We will review your photo and contact you directly via WhatsApp or phone to confirm details.
              </p>
              <button
                onClick={() => setOrderModalOpen(false)}
                className="w-full py-4 text-sm tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech"
              >
                CONFIRM COMMISSION INTAKE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Direct Inquire Modal */}
      <AnimatePresence>
        {inquireModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-md w-full p-8 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setInquireModal(null)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-xl font-bold"
              >
                ✕
              </button>
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech">
                {inquireModal.badge}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                {inquireModal.title}
              </h3>
              <p className="text-sm text-[#d4d3cc] leading-relaxed">
                {inquireModal.description}
              </p>
              <div className="space-y-2 text-sm p-4 bg-[#0a0a0d] border border-[#22222a] font-mono-tech text-[#888780]">
                {inquireModal.options.map((opt, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="text-[#F7F6F2]">{opt.type} ({opt.size}):</span>
                    <span className="text-[#c5a880] font-semibold">{opt.price}</span>
                  </div>
                ))}
              </div>
              <a
                href="#booking"
                onClick={() => setInquireModal(null)}
                className="block w-full py-4 text-center text-sm tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech"
              >
                BOOK THIS ARTWORK
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
