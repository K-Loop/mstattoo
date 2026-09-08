import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiZoomOut, FiArrowRight } from 'react-icons/fi';
import Button from './Button';
import BackButton from './BackButton';

export default function LightboxModal({
  artworks = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onNavigate,
  onCommissionRequest
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const currentArtwork = artworks[currentIndex] || null;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + artworks.length) % artworks.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % artworks.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, artworks.length, onClose, onNavigate]);

  useEffect(() => {
    setIsZoomed(false);
  }, [currentIndex]);

  if (!isOpen || !currentArtwork) return null;

  const hasNext = artworks.length > 1;
  const currentNum = String(currentIndex + 1).padStart(2, '0');
  const totalNum = String(artworks.length).padStart(2, '0');

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#F7F6F2]/98 backdrop-blur-xl p-4 md:p-8 select-none"
      >
        {/* TOP CONTROL BAR: BackButton STRICTLY ON THE LEFT */}
        <div className="absolute top-0 left-0 right-0 h-16 md:h-20 px-6 md:px-12 flex items-center justify-between z-30 border-b border-[#D8D6D0] bg-[#F7F6F2]/90 backdrop-blur-md">
          {/* LEFT: Consistent Back Button */}
          <div className="flex items-center gap-4">
            <BackButton
              onClick={onClose}
              label="Back to Gallery"
            />
            <span className="text-[#D8D6D0] hidden sm:inline">|</span>
            <span className="font-mono text-xs text-[#777777] tracking-widest hidden sm:inline">
              {currentNum} / {totalNum}
            </span>
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="w-9 h-9 flex items-center justify-center text-[#111111] hover:text-[#111111] border border-[#D8D6D0] hover:border-[#111111] bg-[#EFEDE7] transition-colors cursor-pointer"
              title="Toggle Zoom"
            >
              {isZoomed ? <FiZoomOut className="text-sm" /> : <FiZoomIn className="text-sm" />}
            </button>
            <button
              onClick={onClose}
              className="w-9 h-9 flex items-center justify-center text-[#111111] hover:text-[#111111] border border-[#D8D6D0] hover:border-[#111111] bg-[#EFEDE7] transition-colors cursor-pointer"
              title="Close (Esc)"
            >
              <FiX className="text-base" />
            </button>
          </div>
        </div>

        {/* Previous Artwork Arrow */}
        {hasNext && (
          <button
            onClick={() => onNavigate((currentIndex - 1 + artworks.length) % artworks.length)}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] text-[#111111] flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
            aria-label="Previous artwork"
          >
            <FiChevronLeft className="text-lg" />
          </button>
        )}

        {/* Next Artwork Arrow */}
        {hasNext && (
          <button
            onClick={() => onNavigate((currentIndex + 1) % artworks.length)}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] text-[#111111] flex items-center justify-center transition-all shadow-md focus:outline-none cursor-pointer"
            aria-label="Next artwork"
          >
            <FiChevronRight className="text-lg" />
          </button>
        )}

        {/* Main Artwork & Details Presentation */}
        <div className="w-full max-w-6xl mt-16 mb-4 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 z-20 overflow-y-auto max-h-[calc(100vh-90px)] px-4 py-2 overscroll-contain">
          {/* Visual Showcase */}
          <div className="relative max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] flex items-center justify-center shrink-0">
            {currentArtwork.image ? (
              <img
                src={currentArtwork.image}
                alt={currentArtwork.title}
                className={`max-h-[48vh] sm:max-h-[58vh] lg:max-h-[68vh] w-auto max-w-[85vw] lg:max-w-none object-contain border border-[#D8D6D0] shadow-xl transition-transform duration-300 ${
                  isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
            ) : (
              <div className="w-80 h-96 bg-[#fafafa] border border-[#e4e4e7] flex flex-col items-center justify-center p-8 text-center">
                <span className="font-cinzel text-xl text-[#0a0a0a] mb-2">{currentArtwork.title}</span>
                <span className="text-xs text-[#71717a] font-mono">{currentArtwork.medium}</span>
              </div>
            )}
          </div>

          {/* Artwork Clean Studio Info */}
          <div className="max-w-md w-full text-left space-y-6 bg-[#EFEDE7] p-6 sm:p-8 border border-[#D8D6D0]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block mb-1.5">
                {currentArtwork.categoryName || currentArtwork.category}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111] tracking-wide font-normal">
                {currentArtwork.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              Original hand-crafted creation from the MS Tattoo & Art Studio collection.
            </p>

            <div className="pt-4 border-t border-[#D8D6D0]">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={FiArrowRight}
                onClick={() => {
                  onClose();
                  if (onCommissionRequest) onCommissionRequest(currentArtwork);
                }}
              >
                Inquire or Commission
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
