import React, { useState } from 'react';

/**
 * Official MS Tattoo & Art Studio Logo Component.
 * Displays the official shop logo (/logo.png) preserving exact proportions,
 * and provides a clean typographic fallback if image is missing.
 */
export default function Logo({
  className = '',
  size = 'md', // 'sm' | 'md' | 'sidebar' | 'lg' | 'hero'
  showTagline = true,
  onClick
}) {
  const [imageError, setImageError] = useState(false);

  // Responsive height scale for image logo
  const heightClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-12 sm:h-14',
    sidebar: 'w-full max-w-[192px] h-auto max-h-28 object-contain',
    lg: 'h-16 sm:h-20',
    hero: 'h-20 sm:h-28'
  };

  return (
    <div
      onClick={onClick}
      className={`${size === 'sidebar' ? 'w-full flex' : 'inline-flex'} items-center select-none group ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {!imageError ? (
        <img
          src="/logo.png"
          alt="MS Tattoo Studio & Art Academy"
          onError={() => setImageError(true)}
          className={`${heightClasses[size] || 'h-12'} ${size === 'sidebar' ? 'w-full max-w-[195px] h-auto' : ''} object-contain object-left transition-transform duration-300 group-hover:scale-102`}
        />
      ) : (
        /* Artistic Typographic Fallback */
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#111111]">
              MS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#111111] font-semibold">
              TATTOO STUDIO
            </span>
          </div>
          {showTagline && (
            <span className="text-[8.5px] uppercase tracking-[0.3em] text-[#555555] font-sans font-medium">
              ART ACADEMY
            </span>
          )}
        </div>
      )}
    </div>
  );
}
