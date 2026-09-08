import React, { useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';

export default function ArtFormsStrip({ onNavigate, onSelectArtForm }) {
  const scrollContainerRef = useRef(null);

  const artForms = [
    {
      id: 'pencil-art',
      title: 'PENCIL ART',
      subtitle: 'Black & Grey / Colour',
      image: '/artworks/pencil-01.jpg'
    },
    {
      id: 'paintings',
      title: 'PAINTINGS',
      subtitle: 'Acrylic / Oil / Watercolour',
      image: '/artworks/acrylic-01.jpg'
    },
    {
      id: 'crystal-stone',
      title: 'CRYSTAL STONE ART',
      subtitle: 'Handcrafted Brilliance',
      image: '/artworks/crystal-01.jpg'
    },
    {
      id: 'glitter-art',
      title: 'GLITTER SURPRISE ART',
      subtitle: 'Unique. Personalised.',
      image: '/artworks/glitter-01.jpg'
    },
    {
      id: 'wood-burning',
      title: 'WOOD BURNING ART',
      subtitle: 'Burned with Precision',
      image: '/artworks/specialty-01.jpg'
    },
    {
      id: 'resin-art',
      title: 'RESIN ART',
      subtitle: 'Layers of Imagination',
      image: '/artworks/specialty-03.jpg'
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-14 bg-[#F7F6F2] border-b border-[#D8D6D0] overflow-hidden text-left">
      <div className="w-full px-6 sm:px-10 lg:px-14">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* Header Block on Left */}
          <div className="lg:w-48 shrink-0 flex flex-col justify-between self-stretch">
            <div>
              <h3 className="font-cinzel text-xl sm:text-2xl text-[#111111] leading-tight font-normal">
                OUR
              </h3>
              <h4 className="font-cinzel text-xl sm:text-2xl text-[#111111] leading-tight font-normal mb-6">
                ART FORMS
              </h4>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => onNavigate('gallery')}
                className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.25em] font-semibold text-[#111111] hover:opacity-70 transition-opacity border-b border-[#111111] pb-1 cursor-pointer"
              >
                <span>VIEW ALL</span>
                <FiArrowRight className="text-xs" />
              </button>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => scroll('left')}
                  className="w-8 h-8 rounded-full border border-[#D8D6D0] flex items-center justify-center text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F7F6F2] transition-colors cursor-pointer"
                  aria-label="Scroll left"
                >
                  <FiChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  className="w-8 h-8 rounded-full border border-[#D8D6D0] flex items-center justify-center text-[#111111] hover:border-[#111111] hover:bg-[#111111] hover:text-[#F7F6F2] transition-colors cursor-pointer"
                  aria-label="Scroll right"
                >
                  <FiChevronRight className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Gallery Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-x-auto flex gap-5 pb-4 scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {artForms.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectArtForm && onSelectArtForm(item.id)}
                className="w-48 sm:w-56 shrink-0 group cursor-pointer"
              >
                {/* Square image slot / thumbnail */}
                <div className="aspect-square bg-[#EFEDE7] border border-[#D8D6D0] overflow-hidden relative mb-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>

                {/* Typography metadata */}
                <div>
                  <h5 className="font-sans text-[11px] uppercase tracking-[0.2em] font-semibold text-[#111111] group-hover:underline truncate">
                    {item.title}
                  </h5>
                  <span className="font-sans text-[9.5px] text-[#777777] tracking-wider block mt-0.5 truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
