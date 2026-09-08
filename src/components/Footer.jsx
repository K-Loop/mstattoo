import React from 'react';
import { Link } from 'react-router-dom';
import { STUDIO_INFO } from '../data/msTattooData';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#22222a] pt-20 pb-12 text-[#a3a299]">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Top Branding Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between pb-14 border-b border-[#1c1c22] gap-8">
          <div className="space-y-2">
            <Link
              to="/"
              onClick={scrollToTop}
              className="font-cinzel text-2xl sm:text-3xl tracking-[0.18em] text-[#F7F6F2] hover:text-[#c5a880] transition-colors uppercase block font-medium"
            >
              {STUDIO_INFO.brand}
            </Link>
            <p className="text-base sm:text-lg text-[#a3a299] font-light max-w-md">
              Custom tattoos, fine art and professional training.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-2 font-mono-tech">
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-semibold">
              STUDIO HOURS
            </span>
            <p className="text-sm tracking-wider text-[#F7F6F2]">
              {STUDIO_INFO.schedule} • {STUDIO_INFO.workingDays}
            </p>
          </div>
        </div>

        {/* Middle Navigation */}
        <div className="py-10 border-b border-[#1c1c22] flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center justify-center md:justify-start gap-6 sm:gap-10">
            {[
              { label: 'HOME', path: '/' },
              { label: 'GALLERY', path: '/gallery' },
              { label: 'CLASSES', path: '/classes' },
              { label: 'COURSES', path: '/courses' },
              { label: 'ABOUT', path: '/about' },
              { label: 'CONTACT', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="text-sm tracking-[0.18em] uppercase text-[#a3a299] hover:text-[#c5a880] transition-colors font-mono-tech font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-xs tracking-[0.2em] text-[#c5a880] uppercase font-mono-tech text-center md:text-right font-medium">
            100% CLINICAL STERILIZATION • CUSTOM FINE ART
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs tracking-wider text-[#777770] gap-4 font-mono-tech">
          <div>
            © 2026 {STUDIO_INFO.brand}. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
