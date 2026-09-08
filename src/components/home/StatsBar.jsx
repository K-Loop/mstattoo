import React from 'react';

export default function StatsBar() {
  const stats = [
    { value: '9+', label: 'ART CATEGORIES' },
    { value: '100%', label: 'STERILE & SAFE' },
    { value: '10:30 – 5:00', label: 'DAILY STUDIO HOURS' },
    { value: '1000+', label: 'HAPPY CLIENTS' }
  ];

  return (
    <section className="bg-[#F7F6F2] border-b border-[#D8D6D0] py-8 px-6 sm:px-10 lg:px-14">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#D8D6D0]">
        {stats.map((item, idx) => (
          <div key={idx} className="p-4 sm:p-6 text-center">
            <span className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#111111] font-semibold block leading-tight">
              {item.value}
            </span>
            <span className="font-sans text-[9.5px] sm:text-[10px] uppercase tracking-[0.25em] text-[#777777] font-medium block mt-1.5">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
