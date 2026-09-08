import React, { useState } from 'react';
import { FiCalendar, FiInstagram, FiPhone, FiMenu, FiX, FiLock } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import Logo from './Logo';

export default function SidebarNav({
  activeTab,
  setActiveTab,
  onOpenBooking,
  isAdmin,
  onToggleAdmin
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation Items matching the reference image
  const navItems = [
    {
      id: 'home',
      label: 'STUDIO',
      image: '/artworks/acrylic-01.jpg',
      alt: 'Studio Artwork'
    },
    {
      id: 'tattoos',
      label: 'TATTOOS',
      image: '/images/nav_tattoo.jpg',
      alt: 'Tattoo Machine'
    },
    {
      id: 'artworks',
      label: 'ARTWORKS',
      image: '/artworks/pencil-01.jpg',
      alt: 'Drawing & Sketches'
    },
    {
      id: 'classes',
      label: 'ACADEMY',
      image: '/artworks/pencil-06.jpg',
      alt: 'Art Academy Workshop'
    },
    {
      id: 'gallery',
      label: 'GALLERY',
      image: '/artworks/crystal-01.jpg',
      alt: 'Exhibition Gallery'
    },
    {
      id: 'pricing',
      label: 'TARIFF',
      image: '/artworks/glitter-01.jpg',
      alt: 'Commission Pricing'
    },
    {
      id: 'about',
      label: 'ABOUT',
      image: '/artworks/specialty-01.jpg',
      alt: 'Artist & Sanctuary'
    }
  ];

  const handleNav = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* DESKTOP LEFT VERTICAL SIDEBAR (Exactly as shown in reference image) */}
      <aside className="hidden xl:flex fixed top-0 left-0 bottom-0 w-[240px] bg-[#F7F6F2] border-r border-[#D8D6D0] flex-col justify-between p-6 z-40 select-none overflow-y-auto">
        
        {/* Top Brand Identity: Official Shop Logo */}
        <div>
          <button
            onClick={() => handleNav('home')}
            className="flex flex-col text-left group cursor-pointer focus:outline-none w-full pb-2"
          >
            <Logo size="sidebar" />
          </button>

          {/* 7 Image-based Navigation Items */}
          <nav className="mt-8 space-y-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`w-full flex items-center gap-3.5 py-1 text-left transition-all duration-200 group cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  {/* Square thumbnail image / slot */}
                  <div className="w-10 h-10 bg-[#EFEDE7] border border-[#D8D6D0] shrink-0 overflow-hidden relative flex items-center justify-center">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          // Graceful fallback to subtle empty slot
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                  </div>

                  {/* Navigation Label */}
                  <div className="min-w-0">
                    <span className={`font-sans text-[11px] uppercase tracking-[0.25em] block transition-colors ${
                      isActive ? 'text-[#111111] font-bold' : 'text-[#555555] group-hover:text-[#111111]'
                    }`}>
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="block h-[1px] w-5 bg-[#111111] mt-0.5" />
                    )}
                  </div>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions & Socials */}
        <div className="pt-6 border-t border-[#D8D6D0] space-y-4">
          {/* Book Session Trigger */}
          <button
            onClick={onOpenBooking}
            className="w-full py-2.5 px-3 bg-[#EFEDE7] hover:bg-[#111111] text-[#111111] hover:text-[#F7F6F2] border border-[#D8D6D0] transition-all duration-300 flex items-center justify-center gap-2 text-[10.5px] uppercase tracking-[0.2em] font-semibold cursor-pointer"
          >
            <FiCalendar className="text-xs" />
            <span>BOOK SESSION</span>
          </button>

          {/* Social Icons & Admin Switch */}
          <div className="flex items-center justify-between px-1 text-[#555555]">
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#111111] transition-colors"
                title="Instagram"
              >
                <FiInstagram className="text-sm" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#111111] transition-colors"
                title="WhatsApp"
              >
                <RiWhatsappLine className="text-sm" />
              </a>
              <a
                href="tel:+919800000000"
                className="hover:text-[#111111] transition-colors"
                title="Phone"
              >
                <FiPhone className="text-sm" />
              </a>
            </div>

            <button
              onClick={onToggleAdmin}
              className={`p-1 text-xs transition-colors ${
                isAdmin ? 'text-[#111111]' : 'text-[#888888] hover:text-[#111111]'
              }`}
              title="Admin Portal"
            >
              <FiLock />
            </button>
          </div>

          {/* Copyright */}
          <div className="text-[9px] uppercase tracking-[0.2em] text-[#888888] font-mono">
            © MS Tattoo & Art Studio
          </div>
        </div>
      </aside>

      {/* MOBILE / TABLET TOP HEADER BAR */}
      <header className="xl:hidden fixed top-0 left-0 right-0 h-16 bg-[#F7F6F2]/95 backdrop-blur-md border-b border-[#D8D6D0] px-5 flex items-center justify-between z-40">
        <button
          onClick={() => handleNav('home')}
          className="flex items-center text-left"
        >
          <Logo size="sm" />
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-[10px] uppercase tracking-widest bg-[#111111] text-[#F7F6F2] font-semibold"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#111111] border border-[#D8D6D0]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <FiX className="text-base" /> : <FiMenu className="text-base" />}
          </button>
        </div>
      </header>

      {/* MOBILE EXPANDABLE DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 z-30 pt-20 pb-8 px-6 bg-[#F7F6F2] flex flex-col justify-between overflow-y-auto">
          <nav className="space-y-4 pt-2">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#555555] font-mono block mb-2">
              Studio Index
            </span>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="w-full flex items-center gap-4 py-2 border-b border-[#D8D6D0]/60 text-left"
              >
                <div className="w-10 h-10 bg-[#EFEDE7] border border-[#D8D6D0] shrink-0 overflow-hidden">
                  {item.image && (
                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover" />
                  )}
                </div>
                <span className={`text-sm uppercase tracking-[0.25em] font-sans ${
                  activeTab === item.id ? 'text-[#111111] font-bold' : 'text-[#555555]'
                }`}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-[#D8D6D0] space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-[#111111] text-white text-xs uppercase tracking-widest font-semibold"
            >
              Book Session
            </button>
            <div className="text-center text-[10px] uppercase tracking-widest text-[#777777] font-mono">
              Timings: 10:30 AM – 5:00 PM Daily
            </div>
          </div>
        </div>
      )}
    </>
  );
}
