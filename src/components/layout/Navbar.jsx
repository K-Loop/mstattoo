import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiLock, FiCalendar, FiArrowRight, FiPhone } from 'react-icons/fi';
import Button from '../common/Button';
import Logo from './Logo';

export default function Navbar({
  activeTab,
  setActiveTab,
  onOpenBooking,
  onOpenClassRegister,
  isAdmin,
  onToggleAdmin
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const hoverTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    setHoveredCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnter = (categoryKey) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setHoveredCategory(categoryKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  // Previews for hover navigation system
  const navPreviewData = {
    tattoos: {
      image: '/images/nav_tattoo.jpg',
      title: 'Tattoo Mastery',
      meta: 'Fine-line & Blackwork',
      desc: 'Bespoke body art etched with hospital-grade asepsis.'
    },
    artworks: {
      image: '/images/hero_pencil_sketch.jpg',
      title: 'Fine Art Commissions',
      meta: 'Graphite, Color & Crystal',
      desc: 'Archival museum-grade portraiture and mixed media.'
    },
    classes: {
      image: '/images/nav_workshop.jpg',
      title: 'Art Academy',
      meta: 'Workshops & Apprenticeship',
      desc: 'Structured 3-day bootcamps to 3-month tattoo programs.'
    },
    gallery: {
      image: '/images/hero_crystal_art.jpg',
      title: 'Master Gallery',
      meta: '13 Disciplines',
      desc: 'Explore the complete 50+ studio archival collection.'
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#e4e4e7] py-3 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-[#e4e4e7]/60 py-4.5'
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
          {/* SECTION 1 — BRAND LOGO (LEFT) */}
          <div className="flex items-center">
            <Logo
              size="md"
              onClick={() => handleNavClick('home')}
            />
          </div>

          {/* SECTION 2 — MAIN NAVIGATION WITH IMAGE PREVIEWS (CENTER) */}
          <nav className="hidden lg:flex items-center gap-8 relative" onMouseLeave={handleMouseLeave}>
            {/* Studio Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors py-2 relative ${
                activeTab === 'home' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
              }`}
            >
              Studio
              {activeTab === 'home' && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                />
              )}
            </button>

            {/* Tattoos with Hover Image Preview */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('tattoos')}
            >
              <button
                onClick={() => handleNavClick('tattoos')}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors relative ${
                  activeTab === 'tattoos' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
                }`}
              >
                Tattoos
                {activeTab === 'tattoos' && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                  />
                )}
              </button>
            </div>

            {/* Artworks with Hover Image Preview */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('artworks')}
            >
              <button
                onClick={() => handleNavClick('artworks')}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors relative ${
                  activeTab === 'artworks' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
                }`}
              >
                Artworks
                {activeTab === 'artworks' && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                  />
                )}
              </button>
            </div>

            {/* Classes with Hover Image Preview */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('classes')}
            >
              <button
                onClick={() => handleNavClick('classes')}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors relative ${
                  activeTab === 'classes' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
                }`}
              >
                Academy
                {activeTab === 'classes' && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                  />
                )}
              </button>
            </div>

            {/* Gallery with Hover Image Preview */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('gallery')}
            >
              <button
                onClick={() => handleNavClick('gallery')}
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors relative ${
                  activeTab === 'gallery' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
                }`}
              >
                Gallery
                {activeTab === 'gallery' && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                  />
                )}
              </button>
            </div>

            {/* Tariff / Pricing */}
            <button
              onClick={() => handleNavClick('pricing')}
              className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors py-2 relative ${
                activeTab === 'pricing' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
              }`}
            >
              Tariff
              {activeTab === 'pricing' && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                />
              )}
            </button>

            {/* About */}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors py-2 relative ${
                activeTab === 'about' ? 'text-[#0a0a0a] font-semibold' : 'text-[#71717a] hover:text-[#0a0a0a]'
              }`}
            >
              About
              {activeTab === 'about' && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#0a0a0a]"
                />
              )}
            </button>

            {/* FLOATING EDITORIAL IMAGE PREVIEW SYSTEM */}
            <AnimatePresence>
              {hoveredCategory && navPreviewData[hoveredCategory] && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white border border-[#e4e4e7] p-3.5 shadow-2xl z-50 pointer-events-none"
                >
                  <div className="flex gap-3 items-center">
                    <div className="w-20 h-20 overflow-hidden bg-[#f4f4f5] shrink-0 border border-[#e4e4e7]">
                      <img
                        src={navPreviewData[hoveredCategory].image}
                        alt={navPreviewData[hoveredCategory].title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#71717a] font-mono block mb-0.5">
                        {navPreviewData[hoveredCategory].meta}
                      </span>
                      <h5 className="font-cinzel text-xs font-semibold text-[#0a0a0a] uppercase tracking-wider truncate mb-1">
                        {navPreviewData[hoveredCategory].title}
                      </h5>
                      <p className="text-[11px] text-[#52525b] font-light leading-snug line-clamp-2">
                        {navPreviewData[hoveredCategory].desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* SECTION 3 — ACTION / CONTACT (RIGHT) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-3.5 py-2 text-xs uppercase tracking-[0.2em] font-medium text-[#0a0a0a] hover:text-[#52525b] transition-colors"
            >
              Contact
            </button>

            <Button
              variant="primary"
              size="sm"
              icon={FiCalendar}
              onClick={onOpenBooking}
            >
              Book Session
            </Button>

            {/* Admin Lock Button */}
            <button
              onClick={onToggleAdmin}
              className={`p-2 border transition-colors ${
                isAdmin
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'border-[#e4e4e7] text-[#71717a] hover:text-[#0a0a0a] hover:border-[#0a0a0a]'
              }`}
              title="Studio Management Portal"
            >
              <FiLock className="text-xs" />
            </button>
          </div>

          {/* MOBILE MENU CONTROLS */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleAdmin}
              className={`p-2 text-xs border ${
                isAdmin
                  ? 'bg-[#0a0a0a] text-white border-[#0a0a0a]'
                  : 'border-[#e4e4e7] text-[#71717a]'
              }`}
            >
              <FiLock className="text-xs" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0a0a0a] border border-[#e4e4e7] hover:border-[#0a0a0a] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <FiX className="text-lg" /> : <FiMenu className="text-lg" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE EDITORIAL DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 pt-20 pb-8 px-6 bg-white/98 backdrop-blur-xl lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-4 pt-4">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#71717a] block mb-2 font-mono">
                Studio Directory
              </span>

              <div className="divide-y divide-[#e4e4e7]">
                {[
                  { id: 'home', label: 'Studio Home' },
                  { id: 'tattoos', label: 'Tattoos & Body Art' },
                  { id: 'artworks', label: 'Artworks & Portraits' },
                  { id: 'classes', label: 'Academy & Courses' },
                  { id: 'gallery', label: 'Complete Gallery' },
                  { id: 'pricing', label: 'Tariff & Commissions' },
                  { id: 'about', label: 'About the Artist' },
                  { id: 'contact', label: 'Contact Studio' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-3.5 font-cinzel text-lg tracking-wide transition-colors flex items-center justify-between ${
                      activeTab === item.id
                        ? 'text-[#0a0a0a] font-bold'
                        : 'text-[#52525b] hover:text-[#0a0a0a]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <FiArrowRight className="text-sm opacity-40" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#e4e4e7] space-y-3">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                icon={FiCalendar}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
              >
                Book Appointment / Commission
              </Button>
              <Button
                variant="outline"
                size="md"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenClassRegister();
                }}
              >
                Enroll in Academy
              </Button>

              <div className="text-center pt-2 text-xs text-[#71717a] font-mono tracking-widest">
                Studio Timing: 10:30 AM – 5:00 PM
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
