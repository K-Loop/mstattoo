import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ONLINE_COURSES = [
  {
    id: 'course-01',
    title: 'Master Single-Needle Linework & Micro-Fidelity',
    category: 'Tattoo Mastery',
    duration: '45 mins',
    level: 'Intermediate',
    description: 'Learn needle depth calibration, voltage regulation, and precise calligraphic linework for fine line botanical tattoos.',
    poster: '/artworks/reel-01-poster.jpg',
    videoSrc: '/videos/reel-01.mp4',
    youtubeUrl: '', // Ready for replacement with YouTube URL
    instructor: 'Master Artist • MS Tattoo',
  },
  {
    id: 'course-02',
    title: 'Pencil Realism & Anatomical Facial Mapping',
    category: 'Fine Art Drawing',
    duration: '60 mins',
    level: 'Beginner to Advanced',
    description: 'Comprehensive study of facial planes, graphite grading, and smooth tonal blending on archival Bristol board.',
    poster: '/artworks/reel-02-poster.jpg',
    videoSrc: '/videos/reel-02.mp4',
    youtubeUrl: '',
    instructor: 'Master Artist • MS Tattoo',
  },
  {
    id: 'course-03',
    title: 'Glitter Surprise Art & Theatrical Reveal Secrets',
    category: 'Theatrical Art',
    duration: '35 mins',
    level: 'All Levels',
    description: 'Step-by-step masterclass on adhesive dynamics, silhouette preparation, and dramatic stage unveiling execution.',
    poster: '/artworks/reel-03-poster.jpg',
    videoSrc: '/videos/reel-03.mp4',
    youtubeUrl: '',
    instructor: 'Master Artist • MS Tattoo',
  },
  {
    id: 'course-04',
    title: 'Gemstone Alignment & Crystal Stone Crafting',
    category: 'Specialty Craft',
    duration: '40 mins',
    level: 'All Levels',
    description: 'Precision gemstone placement, refractive light mapping, and adhesive chemistry for dimensional crystal portraits.',
    poster: '/artworks/reel-04-poster.jpg',
    videoSrc: '/videos/reel-04.mp4',
    youtubeUrl: '',
    instructor: 'Master Artist • MS Tattoo',
  },
  {
    id: 'course-05',
    title: 'Large-Scale Acrylic Murals & Wall Preparation',
    category: 'Murals & Paintings',
    duration: '50 mins',
    level: 'Intermediate',
    description: 'Scaling designs onto architectural wall surfaces, grid mapping, acrylic glazing, and protective clear coating.',
    poster: '/artworks/reel-05-poster.jpg',
    videoSrc: '/videos/reel-05.mp4',
    youtubeUrl: '',
    instructor: 'Master Artist • MS Tattoo',
  },
  {
    id: 'course-06',
    title: 'Rotary Machine Setup, Stencil Alignment & Hygiene',
    category: 'Tattoo Foundations',
    duration: '55 mins',
    level: 'Beginner Apprentices',
    description: 'Complete sterile setup, single-use barrier film wrapping, autoclave protocols, and anatomy curvature tracking.',
    poster: '/artworks/reel-07-poster.jpg',
    videoSrc: '/videos/reel-07.mp4',
    youtubeUrl: '',
    instructor: 'Master Artist • MS Tattoo',
  },
];

export default function CoursesPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="bg-[#09090b] text-[#E5E3DC] min-h-screen pt-32 sm:pt-40 pb-24">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="mb-20 border-b border-[#22222a] pb-12">
          <div className="space-y-4">
            <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
              ONLINE TUTORIALS & VIDEO MASTERCLASSES
            </span>
            <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#F7F6F2] font-normal tracking-[0.02em] leading-none">
              COURSES & VIDEOS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-[#a3a299] font-light max-w-2xl">
              Recorded studio sessions, technique breakdowns, and video demonstrations by MS Tattoo.
            </p>
          </div>
        </div>

        {/* Courses Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-20">
          {ONLINE_COURSES.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="bg-[#111115] border border-[#22222a] hover:border-[#c5a880]/60 transition-all duration-500 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Video Frame */}
                <div
                  onClick={() => setActiveVideo(course)}
                  className="relative h-64 sm:h-72 overflow-hidden bg-[#0a0a0c] cursor-pointer"
                >
                  <img
                    src={course.poster}
                    alt={course.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                    <div className="w-14 h-14 rounded-full bg-[#c5a880] text-[#09090b] flex items-center justify-center pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                      ▶
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-xs tracking-[0.2em] text-[#c5a880] uppercase bg-[#09090b]/90 px-3 py-1 border border-[#c5a880]/30 font-mono-tech">
                      {course.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#888780] font-mono-tech">
                    <span>{course.duration}</span>
                    <span>{course.level}</span>
                  </div>
                  <h3 className="font-cinzel text-xl sm:text-2xl text-[#F7F6F2] font-normal group-hover:text-[#c5a880] transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#d4d3cc] font-light leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-8 pt-0 flex items-center justify-between border-t border-[#22222a]/60 pt-4">
                <button
                  type="button"
                  onClick={() => setActiveVideo(course)}
                  className="inline-flex items-center text-sm tracking-[0.18em] text-[#c5a880] font-semibold uppercase hover:text-[#F7F6F2] transition-colors font-mono-tech cursor-pointer"
                >
                  <span>WATCH DEMONSTRATION</span>
                  <span className="ml-2">→</span>
                </button>
                {course.youtubeUrl ? (
                  <a
                    href={course.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-wider text-[#a3a299] hover:text-[#c5a880] font-mono-tech"
                  >
                    YOUTUBE ↗
                  </a>
                ) : (
                  <span className="text-xs text-[#888780] font-mono-tech">
                    HD STUDIO REEL
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 bg-[#111115] border border-[#22222a] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2]">
              Want Full In-Person Mentorship?
            </h3>
            <p className="text-base sm:text-lg text-[#a3a299] font-light">
              Join our 3-month tattoo apprenticeship or 2-month portrait drawing studio cohorts.
            </p>
          </div>
          <a
            href="/classes"
            className="inline-flex items-center justify-center px-8 py-4 text-sm sm:text-base tracking-[0.2em] font-semibold uppercase text-[#09090b] bg-[#c5a880] hover:bg-[#d4af37] transition-all whitespace-nowrap font-mono-tech shadow-lg"
          >
            EXPLORE IN-PERSON CLASSES →
          </a>
        </div>

      </div>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#111115] border border-[#c5a880]/60 max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6"
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 text-[#888780] hover:text-[#F7F6F2] text-2xl font-bold bg-[#09090b]/80 w-10 h-10 flex items-center justify-center border border-[#22222a] cursor-pointer"
              >
                ✕
              </button>

              <div>
                <span className="text-xs tracking-[0.25em] text-[#c5a880] uppercase font-mono-tech font-semibold">
                  {activeVideo.category} • {activeVideo.duration}
                </span>
                <h3 className="font-cinzel text-2xl sm:text-3xl text-[#F7F6F2] mt-1">
                  {activeVideo.title}
                </h3>
              </div>

              {/* Video Player Frame */}
              <div className="relative aspect-video bg-black rounded overflow-hidden flex items-center justify-center">
                {activeVideo.videoSrc ? (
                  <video
                    src={activeVideo.videoSrc}
                    poster={activeVideo.poster}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="text-center p-8 space-y-2">
                    <span className="text-3xl text-[#c5a880]">⏳</span>
                    <h4 className="font-cinzel text-xl text-[#F7F6F2]">
                      FULL TUTORIAL COMING SOON
                    </h4>
                    <p className="text-sm text-[#a3a299]">
                      This YouTube masterclass is currently in post-production.
                    </p>
                  </div>
                )}
              </div>

              <p className="text-base text-[#d4d3cc] leading-relaxed">
                {activeVideo.description}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
