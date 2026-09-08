import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { STUDIO_INFO } from '../data/msTattooData';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState('TATTOO');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const contactCards = [
    {
      label: "WHATSAPP",
      value: STUDIO_INFO.whatsapp,
      action: "CHAT WITH US →",
      href: `https://wa.me/${STUDIO_INFO.whatsapp.replace(/[^0-9]/g, '')}`,
    },
    {
      label: "CALL US",
      value: STUDIO_INFO.phone,
      action: "CALL NOW →",
      href: `tel:${STUDIO_INFO.phone.replace(/[^0-9+]/g, '')}`,
    },
    {
      label: "EMAIL US",
      value: STUDIO_INFO.email,
      action: "SEND EMAIL →",
      href: `mailto:${STUDIO_INFO.email}`,
    },
    {
      label: "VISIT STUDIO",
      value: STUDIO_INFO.schedule,
      action: "MON – SAT →",
      href: "#booking",
    },
  ];

  const inquiryTypes = [
    "TATTOO",
    "ARTWORK",
    "CLASSES",
    "GENERAL",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#09090b] border-b border-[#22222a] relative">
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
              LET'S TALK
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Have an idea? Tell us about it.
            </p>
          </motion.div>
        </div>

        {/* 4 Large Clean Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {contactCards.map((card, idx) => (
            <motion.a
              key={card.label}
              href={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
              className="p-8 bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all block group space-y-3 shadow-xl"
            >
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech font-semibold">
                {card.label}
              </span>
              <div className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] group-hover:text-[#c5a880] transition-colors">
                {card.value}
              </div>
              <p className="text-sm tracking-wider text-[#a3a299] font-mono-tech group-hover:text-[#F7F6F2] transition-colors pt-2">
                {card.action}
              </p>
            </motion.a>
          ))}
        </div>

        {/* DIRECT INQUIRY FORM */}
        <div className="p-8 sm:p-12 md:p-16 bg-[#111115] border border-[#22222a] relative shadow-2xl">
          <div className="max-w-3xl mb-10 space-y-2">
            <h3 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
              SEND A MESSAGE
            </h3>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Choose a topic and share your project details:
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Inquiry Type Selector */}
              <div className="flex flex-wrap gap-3">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setInquiryType(type)}
                    className={`px-6 py-3 text-xs sm:text-sm tracking-[0.18em] uppercase font-mono-tech border transition-all font-semibold ${
                      inquiryType === type
                        ? 'bg-[#181820] text-[#c5a880] border-[#c5a880]'
                        : 'bg-[#0e0e12] text-[#888780] border-[#22222a] hover:text-[#F7F6F2]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Form Input Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                    PHONE / WHATSAPP *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3.5 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-2 font-mono-tech">
                  YOUR MESSAGE *
                </label>
                <textarea
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your tattoo idea, artwork, or class questions..."
                  className="w-full bg-[#0e0e12] border border-[#22222a] p-4 text-sm sm:text-base text-[#F7F6F2] focus:border-[#c5a880] outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-[#22222a] gap-4">
                <p className="text-xs tracking-wider text-[#888780] font-mono-tech">
                  Studio Hours: {STUDIO_INFO.schedule} • {STUDIO_INFO.workingDays}
                </p>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors whitespace-nowrap shadow-lg font-mono-tech"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          ) : (
            <div className="py-12 text-center space-y-4">
              <span className="text-4xl text-[#c5a880] block">✓</span>
              <h4 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                MESSAGE SENT
              </h4>
              <p className="text-base text-[#a3a299] max-w-md mx-auto leading-relaxed">
                Thank you, {fullName}. We will reply to your message shortly via WhatsApp or email.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech mt-2"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
