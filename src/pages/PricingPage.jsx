import React from 'react';
import { FiArrowRight, FiInfo, FiCalendar, FiShield } from 'react-icons/fi';
import SectionHeader from '../components/common/SectionHeader';
import Button from '../components/common/Button';
import { artworkPricing, tattooPricingInfo } from '../data/pricing';

export default function PricingPage({ onOpenBooking }) {
  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Studio Commission Tariff"
          title="BESPOKE ARTWORK COMMISSION RATES"
          subtitle="Transparent, archival pricing for handmade fine art portraiture and dimensional showpieces. Museum-grade materials engineered for lifetime permanence."
        />

        {/* EDITORIAL TARIFF BOOKLET GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {artworkPricing.map((service, sIdx) => (
            <div
              key={service.id}
              className="bg-[#EFEDE7] border border-[#D8D6D0] hover:border-[#111111] transition-all duration-300 p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#D8D6D0]">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#111111] font-mono font-bold">
                    {service.badge}
                  </span>
                  <span className="text-[9.5px] text-[#777777] uppercase font-mono">
                    Archival Standard
                  </span>
                </div>

                <h3 className="font-cinzel text-xl sm:text-2xl text-[#111111] tracking-wide mb-2 font-semibold">
                  {service.title}
                </h3>
                <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub Options Table */}
                <div className="space-y-4 mb-6">
                  {service.options.map((optionGroup, oIdx) => (
                    <div key={oIdx} className="bg-[#F7F6F2] border border-[#D8D6D0] p-4">
                      <div className="flex items-center gap-2 pb-2 mb-2.5 border-b border-[#D8D6D0]">
                        <span className="w-1.5 h-1.5 bg-[#111111]" />
                        <span className="text-[11px] font-semibold text-[#111111] uppercase tracking-wider font-mono">
                          {optionGroup.type}
                        </span>
                      </div>

                      <div className="space-y-2">
                        {optionGroup.sizes.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-baseline justify-between text-xs py-1 border-b border-[#D8D6D0]/50 last:border-none"
                          >
                            <div className="flex flex-col">
                              <span className="font-mono font-semibold text-[#111111]">{item.size}</span>
                              <span className="text-[10px] text-[#777777] font-light">{item.note}</span>
                            </div>
                            <span className="font-cinzel text-base text-[#111111] font-bold tracking-tight">
                              {item.formattedPrice}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer CTA */}
              <div className="pt-5 border-t border-[#D8D6D0] flex items-center justify-between">
                <span className="text-[10.5px] text-[#777777] font-mono">
                  Custom framing on request
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  icon={FiArrowRight}
                  onClick={() => onOpenBooking(service)}
                >
                  Commission This Style
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* BESPOKE TATTOO TARIFF CARD */}
        <div className="p-8 sm:p-10 bg-[#EFEDE7] border border-[#111111] mb-14 relative">
          <div className="max-w-3xl space-y-4 text-left">
            <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#111111] font-mono font-bold">
              <FiShield className="text-sm" />
              <span>Living Canvas Tariff</span>
            </div>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111]">
              {tattooPricingInfo.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed">
              {tattooPricingInfo.description} Every needle depth is calibrated with fine art anatomical reference and single-use sterilization protocols.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0]">
                <span className="text-[#777777] block text-[10px] uppercase">Base Sterile Setup</span>
                <span className="text-[#111111] text-base font-bold">{tattooPricingInfo.minSession}</span>
                <span className="text-[10px] text-[#777777] block mt-1">Single-use EO gas sterilized cartridge guarantee</span>
              </div>
              <div className="p-4 bg-[#F7F6F2] border border-[#D8D6D0]">
                <span className="text-[#777777] block text-[10px] uppercase">Bespoke Flash & Custom Design</span>
                <span className="text-[#111111] text-base font-bold">{tattooPricingInfo.hourlyRate}</span>
                <span className="text-[10px] text-[#777777] block mt-1">Direct artist consultation to draft stencil</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                icon={FiCalendar}
                onClick={() => onOpenBooking({ category: 'tattoos', title: 'Tattoo Consultation' })}
              >
                Book Tattoo Consultation
              </Button>
            </div>
          </div>
        </div>

        {/* GLOBAL COMMISSION GUIDANCE NOTICE */}
        <div className="p-5 bg-[#EFEDE7] border border-[#D8D6D0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#555555]">
          <div className="flex items-center gap-3">
            <FiInfo className="text-[#111111] text-base shrink-0" />
            <span>50% advance token required to begin custom sketching and stencil drafts. Secure worldwide packaging available.</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onOpenBooking()}
            icon={FiArrowRight}
          >
            Custom Inquiry
          </Button>
        </div>

      </div>
    </div>
  );
}
