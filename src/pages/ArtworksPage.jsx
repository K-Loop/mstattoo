import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTag } from 'react-icons/fi';
import SectionHeader from '../components/common/SectionHeader';
import ArtworkCard from '../components/common/ArtworkCard';
import Button from '../components/common/Button';
import { CustomTabs } from '../components/common/CustomControls';
import { EmptyState } from '../components/common/StateViews';
import { artworkCollection } from '../data/artworks';

export default function ArtworksPage({ onNavigate, onArtworkClick, onOpenBooking }) {
  const [activeMedium, setActiveMedium] = useState('all');

  const fineArtOnly = artworkCollection.filter((a) => a.category !== 'tattoos');

  const mediumTabs = [
    { id: 'all', label: 'All Fine Art' },
    { id: 'graphite-pencil', label: 'Pencil & Graphite' },
    { id: 'acrylic-wall', label: 'Paintings & Murals' },
    { id: 'crystal-stone', label: 'Crystal Stone Art' },
    { id: 'glitter-art', label: 'Glitter Surprise' },
    { id: 'specialty-art', label: 'Wood & Resin Art' }
  ];

  const filteredList = fineArtOnly.filter((item) => {
    if (activeMedium === 'all') return true;
    return item.category === activeMedium;
  });

  return (
    <div className="pt-8 pb-20 bg-[#F7F6F2] min-h-screen text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <SectionHeader
          tag="Fine Art & Bespoke Canvases"
          title="CUSTOM ARTWORKS & PORTRAITURE"
          subtitle="From delicate graphite portraiture on archival paper to architectural murals and light-reactive crystal stone pieces."
        />

        {/* Custom Editorial Tabs */}
        <div className="flex justify-center mb-10">
          <CustomTabs
            tabs={mediumTabs}
            activeTab={activeMedium}
            onChange={(val) => setActiveMedium(val)}
          />
        </div>

        {/* Artworks Grid */}
        {filteredList.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredList.map((artwork, idx) => (
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
            title="No Artworks In This Discipline"
            subtitle="There are currently no items under this specific fine art medium filter."
            actionLabel="View All Works"
            onAction={() => setActiveMedium('all')}
          />
        )}

        {/* Commission CTA Banner */}
        <div className="mt-16 p-8 sm:p-10 bg-[#EFEDE7] border border-[#111111] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#777777] font-mono block mb-1 font-bold">
              Bespoke Studio Commissions
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#111111]">
              LOOKING TO COMMISSION A PERSONAL PORTRAIT?
            </h3>
            <p className="text-xs sm:text-sm text-[#555555] max-w-xl font-light mt-1">
              Graphite single portraits start at ₹1,800. Couple portraits, anniversary glitter surprises, and custom crystal stone art available.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="outline"
              size="md"
              icon={FiTag}
              onClick={() => onNavigate('pricing')}
            >
              View Tariff
            </Button>
            <Button
              variant="primary"
              size="md"
              icon={FiArrowRight}
              onClick={onOpenBooking}
            >
              Request Artwork
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
