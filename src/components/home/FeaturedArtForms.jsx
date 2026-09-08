import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiFeather, FiLayers } from 'react-icons/fi';
import { RiPaletteLine, RiCompass3Line } from 'react-icons/ri';
import SectionHeader from '../common/SectionHeader';

export default function FeaturedArtForms({ onSelectCategory }) {
  const artSections = [
    {
      id: 'tattoos',
      title: 'Bespoke Tattoo Studio',
      categoryTag: '01 / Living Canvas',
      subDisciplines: ['Fine Line', 'Micro-Realism', 'Black & Grey', 'Portrait Tattoo', 'Custom Body Flow'],
      description: 'Permanent art etched with absolute surgical hygiene, single-use EO sterilized equipment, and fine-artist anatomical design consultations.',
      highlight: 'Hospital-grade sterile protocol',
      layoutType: 'featured-wide',
      icon: RiCompass3Line
    },
    {
      id: 'pencil-art',
      title: 'Pencil & Graphite Art',
      categoryTag: '02 / Fine Art Discipline',
      subDisciplines: ['Black & Grey Pencil Art', 'Colour Pencil Art'],
      description: 'Micro-tonal precision capturing the spirit of life. From single portraits to grand family heirlooms using archival European graphite and polychromos color pencils.',
      highlight: 'A4, A3 & A2 Custom Portrait Commissions',
      layoutType: 'split-card',
      icon: FiFeather
    },
    {
      id: 'acrylic-wall',
      title: 'Fine Paintings & Wall Murals',
      categoryTag: '03 / Expansive Compositions',
      subDisciplines: ['Wall Painting', 'Acrylic Painting', 'Oil Painting', 'Watercolour Painting'],
      description: 'Living colors brought to walls and canvases. Custom commercial and luxury residential murals, textured palette knife florals, and rich oil portraits.',
      highlight: 'Large scale architectural installations',
      layoutType: 'split-card',
      icon: RiPaletteLine
    },
    {
      id: 'crystal-stone',
      title: 'Crystal Stone Art',
      categoryTag: '04 / Light-Catching Medium',
      subDisciplines: ['A2 Single Subject', '20 × 30 inch Couples'],
      description: 'Meticulously placed precision-cut crystals reflecting illumination across every facet. A sculptural centerpiece for curated interior spaces.',
      highlight: 'Reflective gemstone & rhinestone finish',
      layoutType: 'compact-card',
      icon: FiLayers
    },
    {
      id: 'glitter-surprise',
      title: 'Glitter Surprise Reveal Art',
      categoryTag: '05 / Theatrical Art',
      subDisciplines: ['Single Subject (2 × 3 ft)', 'Couples Unveiling (4 × 3 ft)'],
      description: 'An unforgettable theatrical unveiling. Under stage lights or celebration banquets, shimmering diamond dust cascades to reveal the handcrafted likeness.',
      highlight: 'Milestone Anniversaries & Stage Events',
      layoutType: 'compact-card',
      icon: FiLayers
    },
    {
      id: 'specialty-art',
      title: 'Specialty & Rare Crafts',
      categoryTag: '06 / Handcrafted Mastery',
      subDisciplines: ['Wood Burning (Pyrography)', 'Paper Cut Art (3D Shadowbox)', 'Resin Art (Oceanic Waves)'],
      description: 'Thermal wire scorch techniques etched into hardwood, layered precision scalpel paper cuts, and deep glass-like epoxy resin functional pieces.',
      highlight: 'Bespoke gifts & architectural wood pieces',
      layoutType: 'featured-wide',
      icon: RiCompass3Line
    }
  ];

  return (
    <section className="py-24 bg-[#fafafa] border-b border-[#e4e4e7] relative">
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10">
        <SectionHeader
          tag="Studio Disciplines"
          title="MASTERING 13 DIVERSE ART MEDIUMS"
          subtitle="From classical graphite and radiant color pencil portraiture to hospital-grade tattoo art, dimensional crystals, and architectural murals."
        />

        {/* Editorial Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artSections.map((item, idx) => {
            const Icon = item.icon;
            const isWide = item.layoutType === 'featured-wide';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative bg-white border border-[#e4e4e7] hover:border-[#0a0a0a] transition-all duration-400 p-8 sm:p-10 flex flex-col justify-between text-left ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Category Tag Header */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#f4f4f5]">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#71717a] font-mono">
                      {item.categoryTag}
                    </span>
                    <div className="w-9 h-9 border border-[#e4e4e7] flex items-center justify-center text-[#0a0a0a] group-hover:border-[#0a0a0a] transition-colors">
                      <Icon className="text-base" />
                    </div>
                  </div>

                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#0a0a0a] tracking-wide mb-3 group-hover:text-black">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52525b] font-light leading-relaxed mb-6 font-sans">
                    {item.description}
                  </p>

                  {/* Sub-discipline Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {item.subDisciplines.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 bg-[#f4f4f5] border border-[#e4e4e7] text-[10px] text-[#27272a] tracking-wider uppercase font-mono"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-[#e4e4e7] flex items-center justify-between">
                  <span className="text-[11px] text-[#71717a] font-mono tracking-wider">
                    {item.highlight}
                  </span>
                  <button
                    onClick={() => onSelectCategory(item.id)}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0a0a0a] hover:text-[#52525b] transition-colors cursor-pointer"
                  >
                    <span>View Category</span>
                    <FiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
