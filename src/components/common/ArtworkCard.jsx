import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMaximize2, FiFeather, FiLayers } from 'react-icons/fi';
import { RiCompass3Line, RiPaletteLine } from 'react-icons/ri';

export default function ArtworkCard({
  artwork,
  onClick,
  index = 0
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(!artwork.image);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05 }}
      onClick={() => onClick && onClick(artwork)}
      className="group relative cursor-pointer bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] transition-all duration-300 overflow-hidden flex flex-col justify-between"
    >
      {/* Visual Canvas Area */}
      <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#EFEDE7] flex items-center justify-center">
        
        {/* If image exists and hasn't errored */}
        {!imageError && artwork.image ? (
          <>
            <img
              src={artwork.image}
              alt={artwork.title}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className={`w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200" />
          </>
        ) : null}

        {/* Minimalist Editorial Fallback Frame */}
        {(imageError || !artwork.image) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 bg-[#EFEDE7] group-hover:bg-[#E8E6DF] transition-colors">
            <div className="w-11 h-11 rounded-full border border-[#D8D6D0] bg-[#F7F6F2] flex items-center justify-center mb-3 group-hover:border-[#111111] transition-colors">
              {artwork.category === 'tattoos' ? (
                <RiCompass3Line className="text-[#111111] text-lg" />
              ) : artwork.category?.includes('pencil') ? (
                <FiFeather className="text-[#111111] text-lg" />
              ) : artwork.category?.includes('glitter') || artwork.category?.includes('crystal') ? (
                <FiLayers className="text-[#111111] text-lg" />
              ) : (
                <RiPaletteLine className="text-[#111111] text-lg" />
              )}
            </div>

            <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#777777] font-mono mb-1">
              {artwork.categoryName || artwork.category}
            </span>
            <h4 className="font-cinzel text-xs sm:text-sm text-[#111111] tracking-wide mb-1.5 line-clamp-1 font-semibold">
              {artwork.title}
            </h4>
            <p className="text-[10.5px] text-[#555555] font-light max-w-[180px] line-clamp-2 mb-2">
              {artwork.medium}
            </p>

            <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#F7F6F2] border border-[#D8D6D0] text-[9.5px] tracking-wider text-[#777777] uppercase font-mono">
              <span>{artwork.dimension}</span>
              <span>•</span>
              <span>{artwork.year}</span>
            </div>
          </div>
        )}

        {/* Floating Quick Action Overlay */}
        <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="w-7 h-7 bg-[#F7F6F2] border border-[#D8D6D0] flex items-center justify-center text-[#111111] shadow-xs">
            <FiMaximize2 className="text-[11px]" />
          </div>
        </div>

        {/* Pricing Tag if available */}
        {artwork.price && (
          <div className="absolute bottom-3 left-3 z-20">
            <span className="px-2 py-0.5 bg-[#F7F6F2] border border-[#D8D6D0] text-[9.5px] font-mono text-[#111111] font-semibold">
              {artwork.price}
            </span>
          </div>
        )}
      </div>

      {/* Minimalist Artwork Label */}
      <div className="py-2.5 px-3.5 bg-[#F7F6F2] border-t border-[#D8D6D0] flex items-center justify-between">
        <span className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111] truncate">
          {artwork.title}
        </span>
      </div>
    </motion.div>
  );
}
