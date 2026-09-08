import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDIO_INFO } from '../data/msTattooData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CLASSES', path: '/classes' },
    { name: 'COURSES', path: '/courses' },
    { name: 'ABOUT', path: '/about' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleBookNow = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
    setTimeout(() => {
      const el = document.getElementById('booking');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md border-b border-[#22222a] py-4 shadow-2xl shadow-black/60'
            : 'bg-transparent border-b border-white/5 py-6'
        }`}
      >
        <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="group flex flex-col"
          >
            <span className="font-cinzel text-lg sm:text-xl lg:text-2xl tracking-[0.18em] text-[#F7F6F2] group-hover:text-[#c5a880] transition-colors uppercase font-medium">
              {STUDIO_INFO.brand}
            </span>
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech mt-0.5">
              FINE ART & ACADEMY
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive =
                link.path === '/'
                  ? location.pathname === '/'
                  : location.pathname.startsWith(link.path);

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm lg:text-[15px] tracking-[0.2em] transition-all duration-300 relative py-1 font-mono-tech ${
                    isActive
                      ? 'text-[#c5a880] font-semibold'
                      : 'text-[#a3a299] hover:text-[#F7F6F2]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#c5a880]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Booking CTA Button */}
          <div className="hidden sm:flex items-center">
            <button
              type="button"
              onClick={handleBookNow}
              className="inline-flex items-center justify-center px-6 py-3 text-xs lg:text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-300 font-mono-tech shadow-md shadow-[#c5a880]/10 cursor-pointer"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none text-[#F7F6F2] cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span
              className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2 text-[#c5a880]' : ''
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-opacity duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-current transition-transform duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2 text-[#c5a880]' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#09090b]/98 backdrop-blur-xl flex flex-col pt-28 px-8 pb-12 justify-between md:hidden border-b border-[#22222a]"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech">
                {STUDIO_INFO.brand}
              </span>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => {
                  const isActive =
                    link.path === '/'
                      ? location.pathname === '/'
                      : location.pathname.startsWith(link.path);

                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-cinzel text-2xl tracking-[0.18em] py-2 border-b border-white/5 flex items-center justify-between ${
                        isActive ? 'text-[#c5a880]' : 'text-[#F7F6F2]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <span className="text-sm text-[#888780] font-mono-tech">0{idx + 1}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 flex flex-col space-y-3 font-mono-tech">
              <button
                type="button"
                onClick={handleBookNow}
                className="w-full text-center py-4 text-sm tracking-[0.22em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors cursor-pointer"
              >
                BOOK NOW
              </button>
              <p className="text-xs tracking-widest text-[#888780] text-center uppercase">
                {STUDIO_INFO.schedule} • {STUDIO_INFO.workingDays}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
