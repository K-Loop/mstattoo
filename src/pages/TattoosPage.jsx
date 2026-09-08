import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import SectionHeader from '../components/common/SectionHeader';
import ArtworkCard from '../components/common/ArtworkCard';
import Button from '../components/common/Button';
import { CustomTabs } from '../components/common/CustomControls';
import { EmptyState } from '../components/common/StateViews';
import { artworkCollection } from '../data/artworks';

export default function TattoosPage({ onOpenBooking, onArtworkClick }) {
  const [activeSubCat, setActiveSubCat] = useState('all');

  const tattooWorks = artworkCollection.filter((item) => item.category === 'tattoos');

  const subCategoryTabs = [
    { id: 'all', label: 'All Tattoos' },
    { id: 'Fine Line', label: 'Fine Line' },
    { id: 'Minimal', label: 'Minimal' },
    { id: 'Blackwork', label: 'Blackwork' },
    { id: 'Portrait Tattoo', label: 'Portrait' },
    { id: 'Custom Tattoo', label: 'Custom Ink' }
  ];

  const filteredTattoos = tattooWorks.filter((item) => {
    if (activeSubCat === 'all') return true;
    return item.subCategory === activeSubCat;
  });

  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Living Canvas Portfolio"
          title="BESPOKE TATTOO MASTERY"
          subtitle="Precision single-needle linework, velvet blackwork gradients, and emotive realism engineered with strict hospital-grade clinical asepsis."
        />

        {/* Custom Editorial Tabs */}
        <div className="flex justify-center mb-10">
          <CustomTabs
            tabs={subCategoryTabs}
            activeTab={activeSubCat}
            onChange={(val) => setActiveSubCat(val)}
          />
        </div>

        {/* Tattoo Grid */}
        {filteredTattoos.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTattoos.map((artwork, idx) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                index={idx}
                onClick={onArtworkClick}
              />
            ))}
          </motion.div>
        ) : (
          <EmptyState
            title="No Tattoos Found"
            subtitle="There are currently no pieces under this specific style filter."
            actionLabel="Reset to All Tattoos"
            onAction={() => setActiveSubCat('all')}
          />
        )}

        {/* Hygiene & Consultation Protocol Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#EFEDE7] border border-[#111111] relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#F7F6F2] text-[9.5px] uppercase font-mono tracking-widest font-semibold">
                <FiShield className="text-xs" />
                <span>Clinical Hygiene Standard</span>
              </div>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111]">
                ZERO COMPROMISE ON CLINICAL HYGIENE
              </h3>
              <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed max-w-2xl">
                We operate under hospital-grade sterilization procedures. Every appointment utilizes 100% single-use EO gas sterilized membrane needle cartridges, medical barrier wrap on all equipment surfaces, and aseptic skin disinfection protocols.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#555555]">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#111111]" />
                  <span>Single-use membrane needle cartridges</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#111111]" />
                  <span>Medical barrier wrap & autoclave standard</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#111111]" />
                  <span>Custom body curvature & anatomical placement</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-[#111111]" />
                  <span>Comprehensive vegan aftercare regime</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <div className="p-6 bg-[#F7F6F2] border border-[#D8D6D0] text-left w-full space-y-3">
                <span className="text-[10px] uppercase tracking-widest text-[#777777] block font-mono">
                  Base Consultation Setup
                </span>
                <span className="font-cinzel text-2xl text-[#111111] font-bold block">
                  Starting at ₹2,500
                </span>
                <p className="text-[11px] text-[#777777] font-light">
                  Final quotation determined post-consultation based on complexity and anatomy placement.
                </p>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  icon={FiCalendar}
                  onClick={onOpenBooking}
                >
                  Book Tattoo Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
