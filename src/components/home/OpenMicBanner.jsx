import React from 'react';
import { FiMic, FiBell, FiArrowRight } from 'react-icons/fi';

export default function OpenMicBanner({ onInquireEvent }) {
  return (
    <section className="py-16 bg-[#EFEDE7] border-b border-[#D8D6D0] relative overflow-hidden text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <div className="border border-[#111111] bg-[#F7F6F2] p-8 sm:p-14 relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="max-w-2xl space-y-4">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-[#111111] text-[#F7F6F2] text-[9.5px] uppercase font-mono tracking-[0.25em] font-semibold">
              <FiMic className="text-xs" />
              <span>COMING SOON</span>
            </div>

            {/* Large Typography Headline */}
            <h3 className="font-cinzel text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-tight tracking-tight">
              OPEN MIC <span className="font-serif-editorial italic text-[#555555]">— ATELIER NIGHTS</span>
            </h3>

            {/* Event Description */}
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed max-w-xl">
              A new sanctuary for voices, spoken words, acoustic melodies, and raw creative expression. Stay tuned for upcoming dates and artist registration at MS Tattoo & Art Studio.
            </p>
          </div>

          {/* Action / Notification */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <button
              onClick={onInquireEvent}
              className="py-3 px-6 bg-[#111111] hover:bg-[#2c2c2c] text-[#F7F6F2] text-xs uppercase tracking-[0.22em] font-semibold transition-colors flex items-center gap-2.5 cursor-pointer"
            >
              <FiBell className="text-sm" />
              <span>Get Notified</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
