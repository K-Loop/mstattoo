import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ACADEMY_COURSES, STUDIO_INFO } from '../data/msTattooData';
import CornerGlowContainer from '../components/common/CornerGlowContainer';

export default function ClassesPage() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [applyModalCourse, setApplyModalCourse] = useState(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantBackground, setApplicantBackground] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const artClasses = ACADEMY_COURSES.filter((c) =>
    ['3-day-workshop', 'live-portrait-course'].includes(c.id)
  );

  const tattooTraining = ACADEMY_COURSES.filter((c) =>
    ['tattoo-course', 'advanced-course'].includes(c.id)
  );

  return (
    <div className="bg-[#09090b] text-[#E5E3DC] min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="mb-20 border-b border-[#22222a] pb-12">
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
              MS TATTOO & ART ACADEMY
            </span>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F6F2] font-normal tracking-[0.02em] leading-none">
              LEARN WITH US
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Professional art and tattoo classes taught in an active studio environment.
            </p>
          </div>
        </div>

        {/* 1. ART CLASSES SECTION */}
        <div className="mb-24">
          <div className="mb-10 space-y-2">
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
              ART CLASSES
            </h2>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Master drawing, pencil portrait realism, and theatrical painting techniques.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {artClasses.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="h-full"
              >
                <CornerGlowContainer
                  onClick={() => setSelectedCourse(course)}
                  dataCursor="view"
                  className="h-full bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="relative h-64 sm:h-76 overflow-hidden bg-[#0c0c0f]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs tracking-[0.2em] text-[#c5a880] uppercase bg-[#09090b]/90 px-3 py-1.5 border border-[#c5a880]/20 font-mono-tech">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 space-y-4">
                      <div className="flex items-baseline justify-between border-b border-[#22222a] pb-4">
                        <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal tracking-wide group-hover:text-[#c5a880] transition-colors">
                          {course.title}
                        </h3>
                        <span className="font-cinzel text-2xl text-[#c5a880] font-semibold font-mono-tech ml-4">
                          {course.fee}
                        </span>
                      </div>

                      <p className="text-base text-[#c5a880] font-mono-tech font-medium">
                        {course.subtitle}
                      </p>
                      <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                        {course.overview}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-0 sm:p-10 sm:pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}
                      className="py-4 text-center text-sm tracking-[0.18em] uppercase text-[#F7F6F2] bg-[#181820] border border-[#22222a] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors font-mono-tech font-semibold cursor-pointer"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSubmitted(false);
                        setApplyModalCourse(course);
                      }}
                      className="py-4 text-center text-sm tracking-[0.18em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors font-mono-tech shadow-md cursor-pointer"
                    >
                      ENROLL NOW
                    </button>
                  </div>
                </CornerGlowContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. TATTOO TRAINING SECTION */}
        <div className="mb-24">
          <div className="mb-10 space-y-2">
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#F7F6F2]">
              TATTOO TRAINING & APPRENTICESHIPS
            </h2>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Hands-on machine training, hygiene standards, and client studio practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {tattooTraining.map((course, idx) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12 }}
                className="h-full"
              >
                <CornerGlowContainer
                  onClick={() => setSelectedCourse(course)}
                  dataCursor="view"
                  className="h-full bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 flex flex-col justify-between shadow-xl"
                >
                  <div>
                    <div className="relative h-64 sm:h-76 overflow-hidden bg-[#0c0c0f]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-xs tracking-[0.2em] text-[#c5a880] uppercase bg-[#09090b]/90 px-3 py-1.5 border border-[#c5a880]/20 font-mono-tech">
                          {course.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 sm:p-10 space-y-4">
                      <div className="flex items-baseline justify-between border-b border-[#22222a] pb-4">
                        <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] font-normal tracking-wide group-hover:text-[#c5a880] transition-colors">
                          {course.title}
                        </h3>
                        <span className="font-cinzel text-2xl text-[#c5a880] font-semibold font-mono-tech ml-4">
                          {course.fee}
                        </span>
                      </div>

                      <p className="text-base text-[#c5a880] font-mono-tech font-medium">
                        {course.subtitle}
                      </p>
                      <p className="text-base sm:text-lg text-[#d4d3cc] font-light leading-relaxed">
                        {course.overview}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 pt-0 sm:p-10 sm:pt-0 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}
                      className="py-4 text-center text-sm tracking-[0.18em] uppercase text-[#F7F6F2] bg-[#181820] border border-[#22222a] hover:border-[#c5a880] hover:text-[#c5a880] transition-colors font-mono-tech font-semibold cursor-pointer"
                    >
                      VIEW DETAILS
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSubmitted(false);
                        setApplyModalCourse(course);
                      }}
                      className="py-4 text-center text-sm tracking-[0.18em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors font-mono-tech shadow-md cursor-pointer"
                    >
                      ENROLL NOW
                    </button>
                  </div>
                </CornerGlowContainer>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio Schedule Card */}
        <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
              Academy Training Schedule: {STUDIO_INFO.schedule}
            </h3>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              {STUDIO_INFO.workingDays} • Hands-on practice with certified mentorship.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg cursor-pointer"
          >
            VISIT THE STUDIO →
          </Link>
        </div>

      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-lg w-full p-8 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech">
                {selectedCourse.badge} • {selectedCourse.duration}
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                {selectedCourse.title}
              </h3>
              <p className="text-sm sm:text-base text-[#c5a880] font-mono-tech font-semibold">
                Fee: {selectedCourse.fee} • Timings: {selectedCourse.timings}
              </p>
              <p className="text-sm sm:text-base text-[#d4d3cc] leading-relaxed">
                {selectedCourse.overview}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs tracking-widest text-[#a3a299] uppercase block font-mono-tech font-semibold">
                  WHAT YOU WILL LEARN:
                </span>
                {selectedCourse.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start space-x-2 text-sm text-[#F7F6F2]">
                    <span className="text-[#c5a880] font-mono-tech">✓</span>
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const course = selectedCourse;
                  setSelectedCourse(null);
                  setSubmitted(false);
                  setApplyModalCourse(course);
                }}
                className="w-full py-4 text-sm tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech mt-4 cursor-pointer"
              >
                ENROLL IN THIS COURSE
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Course Application Modal */}
      <AnimatePresence>
        {applyModalCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111115] border border-[#c5a880] max-w-lg w-full p-8 relative shadow-2xl space-y-4"
            >
              <button
                onClick={() => setApplyModalCourse(null)}
                className="absolute top-4 right-4 text-[#888780] hover:text-white text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
              <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase block font-mono-tech">
                ACADEMY ADMISSIONS
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
                {applyModalCourse.title}
              </h3>
              <p className="text-sm sm:text-base text-[#c5a880] font-mono-tech">
                Fee: {applyModalCourse.fee} • Schedule: {applyModalCourse.timings}
              </p>

              {!submitted ? (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-1 font-mono-tech">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-1 font-mono-tech">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="rahul@mail.com"
                        className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-1 font-mono-tech">
                        PHONE / WHATSAPP *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98000 00000"
                        className="w-full bg-[#0e0e12] border border-[#22222a] px-4 py-3 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs tracking-[0.2em] text-[#a3a299] uppercase mb-1 font-mono-tech">
                      YOUR GOALS / BACKGROUND
                    </label>
                    <textarea
                      rows="3"
                      value={applicantBackground}
                      onChange={(e) => setApplicantBackground(e.target.value)}
                      placeholder="Tell us what you want to learn."
                      className="w-full bg-[#0e0e12] border border-[#22222a] p-3.5 text-sm text-[#F7F6F2] focus:border-[#c5a880] outline-none resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-sm tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-colors mt-2 font-mono-tech shadow-lg cursor-pointer"
                  >
                    SUBMIT APPLICATION
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-3">
                  <span className="text-4xl text-[#c5a880] block">✓</span>
                  <h4 className="font-cinzel text-xl text-[#F7F6F2]">
                    APPLICATION RECEIVED
                  </h4>
                  <p className="text-sm text-[#a3a299] leading-relaxed">
                    Thank you, {applicantName}. We will contact you at {applicantPhone} with course details and batch dates.
                  </p>
                  <button
                    onClick={() => setApplyModalCourse(null)}
                    className="px-8 py-3 text-xs tracking-widest text-[#09090b] bg-[#c5a880] uppercase font-semibold font-mono-tech mt-2 cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
