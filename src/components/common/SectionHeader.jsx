import React from 'react';

export default function SectionHeader({
  tag,
  title,
  subtitle,
  center = true,
  className = ''
}) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
      {tag && (
        <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-[#777777] font-semibold block mb-2">
          {tag}
        </span>
      )}
      <h2 className="font-cinzel text-2xl sm:text-4xl text-[#111111] font-normal tracking-tight leading-tight mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-xs sm:text-sm text-[#555555] font-light leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {subtitle}
        </p>
      )}
      <div className={`h-[1px] w-12 bg-[#111111] mt-5 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
