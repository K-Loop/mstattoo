import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { STUDIO_INFO } from '../data/msTattooData';

export default function BookingWizard() {
  const [serviceCategory, setServiceCategory] = useState('TATTOO CONSULTATION');
  const [tattooStyle, setTattooStyle] = useState('Fine Line & Minimal');
  const [placement, setPlacement] = useState('Forearm Inner Contour');
  const [preferredDay, setPreferredDay] = useState('Monday');
  const [preferredSlot, setPreferredSlot] = useState('Morning (11:00 AM)');

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');

  // File Upload State
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Confirmation Modal
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleFileUpload = (files) => {
    if (!files || files.length === 0) return;
    setIsUploading(true);
    setUploadProgress(40);

    const newFiles = Array.from(files).map((f) => ({
      name: f.name,
      size: (f.size / (1024 * 1024)).toFixed(2) + ' MB',
    }));

    setTimeout(() => {
      setUploadProgress(100);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
      setIsUploading(false);
    }, 400);
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill in your name and phone number.');
      return;
    }
    setShowConfirmation(true);
  };

  return (
    <section id="booking" className="py-24 md:py-32 bg-[#0c0c0f] border-b border-[#22222a] relative">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="font-cinzel text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#F7F6F2] tracking-[0.02em]">
              BOOK A SESSION
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Choose your service, date and time to reserve your appointment.
            </p>
          </motion.div>
        </div>

        {/* Two-Column Grid: Form Steps on Left, Sticky Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Multi-Step Controls */}
          <div className="lg:col-span-7 flex flex-col space-y-10">
            
            {/* STEP 1: SERVICE DISCIPLINE */}
            <div className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] space-y-6">
              <div className="border-b border-[#22222a] pb-4">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  STEP 01
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] mt-1">
                  SELECT SERVICE
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  'TATTOO CONSULTATION',
                  'FINE ART COMMISSION',
                  'ACADEMY ENROLLMENT',
                ].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setServiceCategory(type)}
                    className={`py-4 px-4 text-xs sm:text-sm tracking-[0.15em] uppercase font-mono-tech border transition-all text-center font-semibold ${
                      serviceCategory === type
                        ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                        : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 2: PARAMETERS & SPECIFICATIONS */}
            <div className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] space-y-6">
              <div className="border-b border-[#22222a] pb-4">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  STEP 02
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] mt-1">
                  {serviceCategory === 'TATTOO CONSULTATION'
                    ? 'STYLE & PLACEMENT'
                    : 'MEDIUM & SIZE'}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    {serviceCategory === 'TATTOO CONSULTATION' ? 'TATTOO STYLE' : 'DISCIPLINE / MEDIUM'}
                  </label>
                  <select
                    value={tattooStyle}
                    onChange={(e) => setTattooStyle(e.target.value)}
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none font-mono-tech"
                  >
                    {serviceCategory === 'TATTOO CONSULTATION' ? (
                      <>
                        <option value="Fine Line & Minimal">Fine Line & Minimal</option>
                        <option value="Black & Grey Realism">Black & Grey Realism</option>
                        <option value="Portrait & Memorial">Portrait & Memorial</option>
                        <option value="Geometric & Dotwork">Geometric & Dotwork</option>
                        <option value="Custom Illustrative">Custom Illustrative</option>
                        <option value="Touch-Up & Cover-Up">Touch-Up & Cover-Up</option>
                      </>
                    ) : serviceCategory === 'FINE ART COMMISSION' ? (
                      <>
                        <option value="Graphite / Pencil Art">Graphite / Pencil Art</option>
                        <option value="Colour Pencil Art">Colour Pencil Art</option>
                        <option value="Crystal Stone Art">Crystal Stone Art</option>
                        <option value="Glitter Surprise Art">Glitter Surprise Art</option>
                        <option value="Paintings & Murals">Paintings & Murals</option>
                        <option value="Wood Burning & Resin">Wood Burning & Resin</option>
                      </>
                    ) : (
                      <>
                        <option value="3-Day Art Workshop (₹25k)">3-Day Art Workshop (₹25k)</option>
                        <option value="Live Portrait & Pencil (₹15k)">Live Portrait & Pencil (₹15k)</option>
                        <option value="Tattoo Apprenticeship (₹60k)">Tattoo Apprenticeship (₹60k)</option>
                        <option value="Advanced Masterclass (₹90k)">Advanced Masterclass (₹90k)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    {serviceCategory === 'TATTOO CONSULTATION' ? 'PLACEMENT' : 'SIZE'}
                  </label>
                  <select
                    value={placement}
                    onChange={(e) => setPlacement(e.target.value)}
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none font-mono-tech"
                  >
                    {serviceCategory === 'TATTOO CONSULTATION' ? (
                      <>
                        <option value="Forearm / Arm">Forearm / Arm</option>
                        <option value="Spine / Back">Spine / Back</option>
                        <option value="Chest / Ribs">Chest / Ribs</option>
                        <option value="Shoulder / Collarbone">Shoulder / Collarbone</option>
                        <option value="Leg / Ankle">Leg / Ankle</option>
                        <option value="Custom Location">Custom Location</option>
                      </>
                    ) : (
                      <>
                        <option value="A4 (Desktop Display)">A4 (Desktop Display)</option>
                        <option value="A3 (Wall Portrait)">A3 (Wall Portrait)</option>
                        <option value="A2 (Grand Wall Size)">A2 (Grand Wall Size)</option>
                        <option value="Stage Reveal (2×3 ft / 4×3 ft)">Stage Reveal (2×3 ft / 4×3 ft)</option>
                        <option value="Custom Wall Mural">Custom Wall Mural</option>
                      </>
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 3: STUDIO TIMING PREFERENCE */}
            <div className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] space-y-6">
              <div className="flex items-center justify-between border-b border-[#22222a] pb-4">
                <div>
                  <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                    STEP 03
                  </span>
                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] mt-1">
                    CHOOSE DATE & TIME
                  </h3>
                </div>
                <span className="text-xs tracking-[0.2em] text-[#888780] uppercase font-mono-tech">
                  {STUDIO_INFO.schedule}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    PREFERRED DAY
                  </label>
                  <select
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none font-mono-tech"
                  >
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    TIME WINDOW
                  </label>
                  <select
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none font-mono-tech"
                  >
                    <option value="Morning (11:00 AM)">Morning (11:00 AM)</option>
                    <option value="Afternoon (02:00 PM)">Afternoon (02:00 PM)</option>
                    <option value="Late Afternoon (04:00 PM)">Late Afternoon (04:00 PM)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* STEP 4: CONTACT & DETAILS */}
            <div className="p-8 sm:p-10 bg-[#111115] border border-[#22222a] space-y-6">
              <div className="border-b border-[#22222a] pb-4">
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  STEP 04
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] mt-1">
                  YOUR DETAILS
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    placeholder="Your Name"
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="text"
                    value={phone}
                    placeholder="+91 98000 00000"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    value={email}
                    placeholder="email@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
              </div>

              {/* Reference Upload */}
              <div className="pt-2">
                <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                  ATTACH REFERENCE IMAGES (OPTIONAL)
                </label>
                <div className="p-6 border-2 border-dashed border-[#22222a] bg-[#0e0e12] text-center space-y-2">
                  <p className="text-sm text-[#F7F6F2] font-mono-tech">
                    Upload photos, sketches, or ideas
                  </p>
                  <label className="inline-block cursor-pointer px-6 py-2 text-xs tracking-[0.2em] uppercase text-[#c5a880] border border-[#c5a880]/40 hover:bg-[#c5a880] hover:text-[#09090b] transition-all font-mono-tech font-semibold mt-2">
                    <span>CHOOSE FILES</span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,.pdf"
                      onChange={(e) => handleFileUpload(e.target.files)}
                      className="hidden"
                    />
                  </label>

                  {uploadedFiles.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2 justify-center">
                      {uploadedFiles.map((file, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center space-x-2 px-3 py-1 bg-[#181820] border border-[#22222a] text-xs text-[#F7F6F2] font-mono-tech"
                        >
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => handleRemoveFile(idx)}
                            className="text-[#c5a880] hover:text-white ml-1 font-bold"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Idea Details */}
              <div>
                <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                  PROJECT NOTES
                </label>
                <textarea
                  rows="3"
                  value={idea}
                  placeholder="Tell us any specific ideas or requirements."
                  onChange={(e) => setIdea(e.target.value)}
                  className="w-full bg-[#0e0e12] border border-[#22222a] p-4 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none resize-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Live Booking Summary */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="p-8 bg-[#111115] border border-[#c5a880]/50 shadow-2xl relative space-y-6">
              <div className="flex items-center justify-between border-b border-[#22222a] pb-4">
                <div>
                  <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                    YOUR SUMMARY
                  </span>
                  <h3 className="font-cinzel text-2xl text-[#F7F6F2] mt-1">
                    BOOKING DETAILS
                  </h3>
                </div>
                <span className="w-3 h-3 bg-[#c5a880] rounded-full animate-pulse" />
              </div>

              {/* Chosen Service */}
              <div className="p-5 bg-[#0e0e12] border border-[#22222a] space-y-1">
                <span className="text-xs tracking-[0.2em] text-[#888780] uppercase block font-mono-tech">
                  SELECTED SERVICE
                </span>
                <div className="font-cinzel text-xl text-[#F7F6F2]">
                  {serviceCategory}
                </div>
                <div className="text-sm text-[#c5a880] font-mono-tech font-medium">
                  {tattooStyle} • {placement}
                </div>
              </div>

              {/* Parameters Breakdown */}
              <div className="space-y-4 text-sm font-mono-tech">
                <div className="flex justify-between border-b border-[#22222a] pb-2">
                  <span className="text-[#888780] uppercase text-xs">STUDIO</span>
                  <span className="text-[#F7F6F2] font-semibold">{STUDIO_INFO.brand}</span>
                </div>
                <div className="flex justify-between border-b border-[#22222a] pb-2">
                  <span className="text-[#888780] uppercase text-xs">SCHEDULE</span>
                  <span className="text-[#c5a880] font-semibold">
                    {preferredDay} • {preferredSlot}
                  </span>
                </div>
                <div className="flex justify-between border-b border-[#22222a] pb-2">
                  <span className="text-[#888780] uppercase text-xs">NAME</span>
                  <span className="text-[#F7F6F2] font-semibold">{fullName || '—'}</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleConfirm}
                className="w-full py-4 text-center text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors shadow-lg font-mono-tech"
              >
                CONFIRM BOOKING
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog Modal */}
      <AnimatePresence>
        {showConfirmation && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-lg w-full p-8 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setShowConfirmation(false)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-2xl font-bold"
              >
                ✕
              </button>

              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech">
                BOOKING CONFIRMED
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                REQUEST RECEIVED
              </h3>
              <p className="text-base text-[#d4d3cc] leading-relaxed">
                Thank you, {fullName}! Your request for <strong className="text-[#F7F6F2]">{serviceCategory}</strong> has been logged for <strong className="text-[#c5a880]">{preferredDay} • {preferredSlot}</strong>.
              </p>

              <p className="text-sm text-[#a3a299]">
                We will message you on {phone} to confirm your appointment.
              </p>

              <button
                onClick={() => setShowConfirmation(false)}
                className="w-full py-4 text-center text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors font-mono-tech mt-2"
              >
                RETURN TO STUDIO
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
