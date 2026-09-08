import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TATTOO_TRAINING_DATA } from '../data/atelierData';

export default function TattooTraining() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantBackground, setApplicantBackground] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 md:py-32 bg-[#09090b] border-b border-[#22222a] relative">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="p-8 sm:p-12 md:p-16 bg-[#111115] border border-[#22222a] relative overflow-hidden">
          <div className="max-w-4xl mb-12">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] sm:text-xs tracking-[0.35em] text-[#c5a880] uppercase mb-4 font-light"
            >
              {TATTOO_TRAINING_DATA.tag}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-cinzel text-3xl sm:text-4xl md:text-5xl text-[#E5E3DC] font-normal tracking-[0.04em] mb-6"
            >
              {TATTOO_TRAINING_DATA.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xs sm:text-sm md:text-base text-[#9e9d95] font-light leading-relaxed"
            >
              {TATTOO_TRAINING_DATA.description}
            </motion.p>
          </div>

          {/* 5 Modules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {TATTOO_TRAINING_DATA.modules.map((mod, idx) => (
              <motion.div
                key={mod.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-5 sm:p-6 bg-[#0e0e12] border border-[#22222a] hover:border-[#c5a880]/40 transition-colors"
              >
                <span className="text-[10px] tracking-[0.25em] text-[#c5a880] uppercase block mb-2 font-mono-tech">
                  {mod.num}
                </span>
                <h4 className="font-cinzel text-sm sm:text-base text-[#E5E3DC] font-normal tracking-wide">
                  {mod.title}
                </h4>
              </motion.div>
            ))}

            {/* Certificate of Completion Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="p-5 sm:p-6 bg-[#16161d] border border-[#c5a880]/40 flex flex-col justify-center items-center text-center"
            >
              <span className="text-xl text-[#c5a880] mb-1">✦</span>
              <h4 className="font-cinzel text-xs sm:text-sm text-[#c5a880] tracking-[0.2em] uppercase font-medium">
                {TATTOO_TRAINING_DATA.certificate}
              </h4>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <div>
            <button
              onClick={() => {
                setSubmitted(false);
                setShowApplyModal(true);
              }}
              className="inline-flex items-center px-8 py-4 text-xs tracking-[0.28em] font-medium uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-300 shadow-md"
            >
              {TATTOO_TRAINING_DATA.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Apprenticeship Application Modal */}
      <AnimatePresence>
        {showApplyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-lg w-full p-8 relative shadow-2xl"
            >
              <button
                onClick={() => setShowApplyModal(false)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-lg font-bold"
              >
                ✕
              </button>

              <span className="text-[10px] tracking-[0.3em] text-[#c5a880] uppercase block mb-2">
                APPRENTICESHIP ADMISSIONS
              </span>
              <h3 className="font-cinzel text-2xl text-[#E5E3DC] mb-4">
                3 MONTH TATTOO FELLOWSHIP
              </h3>

              {!submitted ? (
                <form onSubmit={handleApply} className="space-y-4">
                  <p className="text-xs text-[#9e9d95] leading-relaxed mb-4">
                    Strictly limited to 4 candidates per cohort. Submit your dossier for master review.
                  </p>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] text-[#888780] uppercase mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Elena Rostova"
                      className="w-full bg-[#0e0e12] border border-[#22222a] px-3.5 py-2.5 text-xs text-[#E5E3DC] focus:border-[#c5a880] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] text-[#888780] uppercase mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="e.g. elena@atelier.art"
                      className="w-full bg-[#0e0e12] border border-[#22222a] px-3.5 py-2.5 text-xs text-[#E5E3DC] focus:border-[#c5a880] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.25em] text-[#888780] uppercase mb-1">
                      ARTISTIC BACKGROUND / PORTFOLIO LINK
                    </label>
                    <textarea
                      rows="3"
                      value={applicantBackground}
                      onChange={(e) => setApplicantBackground(e.target.value)}
                      placeholder="Details on drawing experience, fine arts background, or Instagram/portfolio URL."
                      className="w-full bg-[#0e0e12] border border-[#22222a] p-3 text-xs text-[#E5E3DC] focus:border-[#c5a880] outline-none resize-none leading-relaxed"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs tracking-[0.25em] font-medium uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors mt-2"
                  >
                    SUBMIT FELLOWSHIP APPLICATION
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center">
                  <span className="text-3xl text-[#c5a880] block mb-3">✓</span>
                  <h4 className="font-cinzel text-lg text-[#E5E3DC] mb-2">
                    APPLICATION TRANSMITTED
                  </h4>
                  <p className="text-xs text-[#9e9d95] leading-relaxed mb-6">
                    Your apprenticeship portfolio dossier has been staged for the admissions board. We review submissions within 5 studio business days.
                  </p>
                  <button
                    onClick={() => setShowApplyModal(false)}
                    className="px-6 py-2.5 text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase"
                  >
                    CLOSE
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
