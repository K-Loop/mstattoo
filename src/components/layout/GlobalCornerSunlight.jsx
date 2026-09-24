import React from 'react';

/**
 * GlobalCornerSunlight
 *
 * Very subtle warm ambient shadow from behind — like heat or light
 * barely seeping through the edges of a dark room. Almost invisible
 * but gives the page a sense of depth and warmth.
 */
export default function GlobalCornerSunlight() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[30] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* TOP EDGE — barely there warm bleed */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background:
            'linear-gradient(to bottom, rgba(220, 175, 90, 0.12) 0%, rgba(210, 165, 80, 0.05) 45%, transparent 100%)',
        }}
      />

      {/* BOTTOM EDGE */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '100px',
          background:
            'linear-gradient(to top, rgba(220, 175, 90, 0.12) 0%, rgba(210, 165, 80, 0.05) 45%, transparent 100%)',
        }}
      />

      {/* LEFT EDGE */}
      <div
        className="absolute top-0 bottom-0 left-0 pointer-events-none"
        style={{
          width: '110px',
          background:
            'linear-gradient(to right, rgba(220, 175, 90, 0.11) 0%, rgba(210, 165, 80, 0.04) 45%, transparent 100%)',
        }}
      />

      {/* RIGHT EDGE */}
      <div
        className="absolute top-0 bottom-0 right-0 pointer-events-none"
        style={{
          width: '110px',
          background:
            'linear-gradient(to left, rgba(220, 175, 90, 0.11) 0%, rgba(210, 165, 80, 0.04) 45%, transparent 100%)',
        }}
      />

      {/* TOP-LEFT CORNER — soft warm bleed */}
      <div
        className="absolute top-0 left-0 pointer-events-none"
        style={{
          width: '260px',
          height: '260px',
          background:
            'radial-gradient(circle at 0% 0%, rgba(240, 200, 110, 0.14) 0%, rgba(220, 175, 90, 0.05) 45%, transparent 80%)',
        }}
      />

      {/* TOP-RIGHT CORNER */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '260px',
          height: '260px',
          background:
            'radial-gradient(circle at 100% 0%, rgba(240, 200, 110, 0.14) 0%, rgba(220, 175, 90, 0.05) 45%, transparent 80%)',
        }}
      />

      {/* BOTTOM-LEFT CORNER */}
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: '260px',
          height: '260px',
          background:
            'radial-gradient(circle at 0% 100%, rgba(240, 200, 110, 0.14) 0%, rgba(220, 175, 90, 0.05) 45%, transparent 80%)',
        }}
      />

      {/* BOTTOM-RIGHT CORNER */}
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: '260px',
          height: '260px',
          background:
            'radial-gradient(circle at 100% 100%, rgba(240, 200, 110, 0.14) 0%, rgba(220, 175, 90, 0.05) 45%, transparent 80%)',
        }}
      />

      {/* DEEP PERIMETER INSET — the "from behind" shadow depth feel */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          boxShadow:
            'inset 0 0 80px rgba(220, 175, 90, 0.06), inset 0 0 25px rgba(240, 200, 110, 0.07)',
        }}
      />
    </div>
  );
}
