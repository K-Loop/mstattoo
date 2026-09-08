import React from 'react';
import { FiClock, FiMapPin, FiPhone, FiMail, FiInstagram, FiArrowUp } from 'react-icons/fi';
import { RiWhatsappLine } from 'react-icons/ri';
import Logo from './Logo';

export default function Footer({ onNavigate, onOpenBooking, onOpenClassRegister }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F6F2] border-t border-[#D8D6D0] relative pt-14 pb-10 overflow-hidden text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        {/* Top Artist Philosophy Banner */}
        <div className="pb-10 mb-10 border-b border-[#D8D6D0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#777777] block mb-2 font-mono font-semibold">
              Artist Statement
            </span>
            <p className="font-serif-editorial italic text-xl sm:text-2xl text-[#111111] max-w-2xl font-normal leading-relaxed">
              “Every line holds a story. From detailed portrait sketches and fine tattoos to handcrafted artworks and creative education.”
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#777777] hover:text-[#111111] transition-colors self-end md:self-center cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full border border-[#D8D6D0] flex items-center justify-center group-hover:border-[#111111] transition-colors">
              <FiArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform text-[#111111]" />
            </div>
          </button>
        </div>

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10">
          {/* Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <p className="text-xs text-[#555555] leading-relaxed max-w-sm font-light">
              A private creative sanctuary dedicated to bespoke fine art portraiture, hospital-grade tattoo craft, custom statement artworks, and structured academy mentorship.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-[#D8D6D0] flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors"
                title="Instagram"
              >
                <FiInstagram className="text-xs" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 border border-[#D8D6D0] flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors"
                title="WhatsApp Consultation"
              >
                <RiWhatsappLine className="text-sm" />
              </a>
              <a
                href="mailto:contact@mstattoostudio.com"
                className="w-8 h-8 border border-[#D8D6D0] flex items-center justify-center text-[#555555] hover:text-[#111111] hover:border-[#111111] transition-colors"
                title="Email Studio"
              >
                <FiMail className="text-xs" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#111111] font-semibold">
              Studio Index
            </h4>
            <ul className="space-y-2 text-xs text-[#555555]">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#111111] transition-colors cursor-pointer">Studio Home</button>
              </li>
              <li>
                <button onClick={() => onNavigate('tattoos')} className="hover:text-[#111111] transition-colors cursor-pointer">Tattoos</button>
              </li>
              <li>
                <button onClick={() => onNavigate('artworks')} className="hover:text-[#111111] transition-colors cursor-pointer">Artworks</button>
              </li>
              <li>
                <button onClick={() => onNavigate('classes')} className="hover:text-[#111111] transition-colors cursor-pointer">Academy</button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-[#111111] transition-colors cursor-pointer">Gallery</button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-[#111111] transition-colors cursor-pointer">Tariff</button>
              </li>
            </ul>
          </div>

          {/* Creative Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#111111] font-semibold">
              13 Disciplines
            </h4>
            <ul className="space-y-1.5 text-xs text-[#555555] font-light">
              <li>Pencil & Charcoal Art</li>
              <li>Colour Pencil Hyper-Realism</li>
              <li>Acrylic & Wall Murals</li>
              <li>Crystal Stone Dimensional Art</li>
              <li>Glitter Surprise Reveal Canvas</li>
              <li>Fine Line & Blackwork Tattoos</li>
              <li>Wood Burning & Ocean Resin</li>
            </ul>
          </div>

          {/* Studio Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#111111] font-semibold">
              Studio Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#555555]">
              <div className="flex items-start gap-2.5 text-[#111111]">
                <FiClock className="text-[#111111] mt-0.5 shrink-0 text-xs" />
                <div>
                  <span className="font-mono block text-[#111111] font-semibold text-xs">
                    10:30 AM – 5:00 PM
                  </span>
                  <span className="text-[10.5px] text-[#777777]">Monday through Saturday</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <FiMapPin className="text-[#111111] mt-0.5 shrink-0 text-xs" />
                <span className="font-light">
                  MS Tattoo & Art Studio<br />
                  Private Consultations & Academy
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <FiPhone className="text-[#111111] shrink-0 text-xs" />
                <span className="font-mono text-[10.5px]">+91 98000 00000 / Consultations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-6 border-t border-[#D8D6D0] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#777777] font-mono">
          <p>© {new Date().getFullYear()} MS TATTOO & ART STUDIO. All Rights Reserved.</p>
          <p className="tracking-wider">
            MS TATTOO & ART STUDIO • ART. INK. STORIES.
          </p>
        </div>
      </div>
    </footer>
  );
}
