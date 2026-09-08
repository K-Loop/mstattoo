import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ACADEMY_PROGRAMS, ARCHIVE_PIECES } from '../data/atelierData';

export default function AcademyArchive() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [enrollModal, setEnrollModal] = useState(null);
  const [rightsModal, setRightsModal] = useState(false);

  const archiveFilters = ['ALL', 'TATTOO', 'GRAPHITE', 'PAINTINGS', 'STONE ART', 'PAPER CUT'];

  const filteredPieces =
    activeFilter === 'ALL'
      ? ARCHIVE_PIECES
      : ARCHIVE_PIECES.filter((p) => p.category === activeFilter);

  return (
    <section id="academy" className="py-24 md:py-36 bg-[#0c0c0f] border-b border-[#22222a] relative">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] sm:text-xs tracking-[0.35em] text-[#c5a880] uppercase mb-4 font-light"
          >
            03 // PEDAGOGY & CURATORIAL HERITAGE
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-[#E5E3DC] font-normal tracking-[0.06em] lg:col-span-6 leading-tight"
            >
              THE ACADEMY &<br />ARCHIVE
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-[#9e9d95] font-light leading-relaxed lg:col-span-6"
            >
              Academic fine art residencies, classical ateliers, and the permanent curatorial collection of masterworks catalogued across our international sanctuaries.
            </motion.p>
          </div>
        </div>

        {/* 2 Academy Curriculum Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-28">
          {ACADEMY_PROGRAMS.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b border-[#22222a] pb-3">
                  <div className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech">
                    {program.moduleTag} • {program.term}
                  </div>
                  <span className="text-[9px] tracking-wider text-[#888780] uppercase bg-[#09090b] px-2 py-0.5 border border-[#22222a]">
                    {program.badge}
                  </span>
                </div>

                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#E5E3DC] font-normal tracking-wide mb-4">
                  {program.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#9e9d95] font-light leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* Details list */}
                <div className="space-y-3 pt-4 border-t border-[#22222a]/60 text-xs mb-8">
                  {program.details.map((det) => (
                    <div key={det.label} className="flex flex-col sm:flex-row sm:justify-between">
                      <span className="text-[#888780]">{det.label}</span>
                      <span className="text-[#E5E3DC] font-mono-tech mt-0.5 sm:mt-0">
                        {det.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setEnrollModal(program)}
                className="w-full py-3.5 text-center text-xs tracking-[0.25em] font-medium uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors"
              >
                {program.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Permanent Collection Archive Header */}
        <div id="archive" className="pt-16 border-t border-[#22222a]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-2">
                PERMANENT COLLECTION
              </span>
              <h3 className="font-cinzel text-3xl sm:text-4xl text-[#E5E3DC] font-normal tracking-wide">
                ART & TATTOO ARCHIVE
              </h3>
              <p className="text-xs text-[#888780] mt-1">
                A verified collection of commissioned physical artworks and tattoo work.
              </p>
            </div>

            {/* Archive Category Filter Pills */}
            <div className="flex items-center flex-wrap gap-2 mt-6 md:mt-0">
              {archiveFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1.5 text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-mono-tech border transition-all ${
                    activeFilter === filter
                      ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                      : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#E5E3DC]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* 6 Archive Items Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredPieces.map((piece, idx) => (
              <motion.div
                key={piece.code}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                onClick={() => setSelectedPiece(piece)}
                className="group cursor-pointer bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/50 transition-all duration-500 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden bg-[#0a0a0c]">
                  <img
                    src={piece.image}
                    alt={piece.title}
                    className="w-full h-full object-cover object-center filter grayscale contrast-115 group-hover:scale-105 group-hover:filter group-hover:grayscale-0 transition-all duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] tracking-[0.25em] text-[#c5a880] uppercase bg-[#09090b]/80 backdrop-blur-sm px-2.5 py-1 border border-[#c5a880]/20 font-mono-tech">
                      {piece.code}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="font-cinzel text-lg text-[#E5E3DC] font-normal tracking-wide mb-2 group-hover:text-[#c5a880] transition-colors">
                    {piece.title}
                  </h4>
                  <p className="text-xs text-[#9e9d95] font-light leading-relaxed mb-4">
                    {piece.medium} • {piece.year}
                  </p>
                  <span className="text-[9px] tracking-[0.2em] text-[#888780] uppercase font-mono-tech group-hover:text-[#c5a880] transition-colors inline-flex items-center">
                    VIEW ARCHIVAL DOSSIER →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Institutional Inquiries CTA */}
          <div className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-1">
                INSTITUTIONAL INQUIRIES & CURATORS
              </span>
              <p className="text-xs text-[#9e9d95]">
                High-resolution cataloguing & archival loan requests for international galleries and museums.
              </p>
            </div>
            <button
              onClick={() => setRightsModal(true)}
              className="px-6 py-3 text-xs tracking-[0.25em] font-medium uppercase text-[#c5a880] border border-[#c5a880] hover:bg-[#c5a880] hover:text-[#09090b] transition-all whitespace-nowrap"
            >
              REQUEST CREATIVE ARCHIVE & USAGE RIGHTS
            </button>
          </div>
        </div>
      </div>

      {/* Archive Piece Detail Modal */}
      <AnimatePresence>
        {selectedPiece && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-3xl w-full overflow-hidden relative shadow-2xl"
            >
              <button
                onClick={() => setSelectedPiece(null)}
                className="absolute top-4 right-4 z-20 text-[#888780] hover:text-white text-xl font-bold bg-[#09090b]/80 w-8 h-8 flex items-center justify-center border border-[#22222a]"
              >
                ✕
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-72 md:h-full bg-[#09090b] relative">
                  <img
                    src={selectedPiece.image}
                    alt={selectedPiece.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-2 font-mono-tech">
                      {selectedPiece.code} • {selectedPiece.category}
                    </span>
                    <h3 className="font-cinzel text-2xl text-[#E5E3DC] mb-3">
                      {selectedPiece.title}
                    </h3>
                    <p className="text-xs text-[#c5a880] font-mono-tech mb-4">
                      {selectedPiece.medium} • {selectedPiece.year}
                    </p>
                    <p className="text-xs text-[#9e9d95] leading-relaxed mb-6">
                      {selectedPiece.details}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-[#22222a]">
                    <a
                      href="#contact"
                      onClick={() => setSelectedPiece(null)}
                      className="block w-full py-3 text-center text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-medium"
                    >
                      INQUIRE REGARDING ACQUISITION
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Enrollment Modal */}
      <AnimatePresence>
        {enrollModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-md w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setEnrollModal(null)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-lg font-bold"
              >
                ✕
              </button>
              <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-2 font-mono-tech">
                {enrollModal.moduleTag}
              </span>
              <h3 className="font-cinzel text-2xl text-[#E5E3DC] mb-3">
                {enrollModal.title}
              </h3>
              <p className="text-xs text-[#9e9d95] mb-6 leading-relaxed">
                {enrollModal.description}
              </p>
              <div className="space-y-2 text-xs text-[#888780] p-4 bg-[#0a0a0d] border border-[#22222a] mb-6 font-mono-tech">
                {enrollModal.details.map((d) => (
                  <div key={d.label}>
                    <span className="text-[#E5E3DC]">{d.label}</span> {d.value}
                  </div>
                ))}
              </div>
              <button
                onClick={() => setEnrollModal(null)}
                className="w-full py-3 text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-medium"
              >
                CONFIRM RESIDENCY APPLICATION
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Archive Rights Modal */}
      <AnimatePresence>
        {rightsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-md w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setRightsModal(false)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-lg font-bold"
              >
                ✕
              </button>
              <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-2 font-mono-tech">
                CURATORIAL PROTOCOL
              </span>
              <h3 className="font-cinzel text-2xl text-[#E5E3DC] mb-3">
                USAGE RIGHTS DOSSIER
              </h3>
              <p className="text-xs text-[#9e9d95] mb-6 leading-relaxed">
                Museum archival permissions, publication reproduction licenses, and high-fidelity 600 DPI vector scans are managed by the Chief Archivist.
              </p>
              <button
                onClick={() => setRightsModal(false)}
                className="w-full py-3 text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-medium"
              >
                TRANSMIT CURATOR INQUIRY
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
