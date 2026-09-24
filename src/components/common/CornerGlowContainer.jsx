import React, { useRef, useEffect } from 'react';

/**
 * CornerGlowContainer
 * 
 * Elegant Four-Corner Golden Glow Interactive Wrapper for MS Tattoo & Art Studio.
 * - 4 corner lighting points (Top-Left, Top-Right, Bottom-Left, Bottom-Right).
 * - Restrained warm gold/champagne ambient palette (#c5a880 / #d4af37).
 * - High-performance cursor proximity tracking via direct GPU CSS variable manipulation.
 * - Dynamic corner responsiveness: closer to a corner = that corner's glow intensifies smoothly.
 * - Graceful touch/mobile degradation with subtle static gallery illumination.
 */
export default function CornerGlowContainer({
  children,
  className = '',
  onClick,
  dataCursor = 'view',
  interactive = true,
  as: Component = 'div',
  ...props
}) {
  const containerRef = useRef(null);
  const isPointerSupported = useRef(false);

  useEffect(() => {
    isPointerSupported.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const el = containerRef.current;
    if (!el || !interactive || !isPointerSupported.current) return;

    let rafId = null;

    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        // Normalized relative cursor coordinates (0.0 to 1.0)
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

        // Corner weights based on proximity (0.0 to 1.0)
        // Closer to a corner increases that corner's opacity factor
        const weightTL = (1 - x) * (1 - y);
        const weightTR = x * (1 - y);
        const weightBL = (1 - x) * y;
        const weightBR = x * y;

        // Base subtle ambient: 0.12, dynamic active peak: up to 0.75
        const glowTL = (0.12 + Math.pow(weightTL, 1.2) * 0.65).toFixed(3);
        const glowTR = (0.12 + Math.pow(weightTR, 1.2) * 0.65).toFixed(3);
        const glowBL = (0.12 + Math.pow(weightBL, 1.2) * 0.65).toFixed(3);
        const glowBR = (0.12 + Math.pow(weightBR, 1.2) * 0.65).toFixed(3);

        el.style.setProperty('--glow-tl', glowTL);
        el.style.setProperty('--glow-tr', glowTR);
        el.style.setProperty('--glow-bl', glowBL);
        el.style.setProperty('--glow-br', glowBR);
        el.style.setProperty('--card-border-glow', '0.45');
      });
    };

    const handleMouseLeave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (!el) return;
      // Smoothly reset back to subtle ambient gallery default
      el.style.setProperty('--glow-tl', '0.08');
      el.style.setProperty('--glow-tr', '0.08');
      el.style.setProperty('--glow-bl', '0.08');
      el.style.setProperty('--glow-br', '0.08');
      el.style.setProperty('--card-border-glow', '0.18');
    };

    // Initialize defaults
    handleMouseLeave();

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);

  return (
    <Component
      ref={containerRef}
      onClick={onClick}
      data-cursor={interactive ? dataCursor : undefined}
      data-interactive={interactive ? 'true' : undefined}
      className={`relative group overflow-hidden ${interactive ? 'cursor-pointer' : ''} ${className}`}
      style={{
        '--glow-tl': '0.08',
        '--glow-tr': '0.08',
        '--glow-bl': '0.08',
        '--glow-br': '0.08',
        '--card-border-glow': '0.18',
        ...props.style,
      }}
      {...props}
    >
      {/* 4-Corner Golden Glow Overlays (Hardware-Accelerated Radial Gradients) */}
      
      {/* 1. TOP-LEFT CORNER GLOW */}
      <div
        className="absolute top-0 left-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-10 transition-opacity duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(218, 180, 100, 0.45) 0%, rgba(197, 168, 128, 0.22) 35%, rgba(138, 114, 73, 0.05) 60%, transparent 80%)',
          opacity: 'var(--glow-tl)',
        }}
        aria-hidden="true"
      />

      {/* 2. TOP-RIGHT CORNER GLOW */}
      <div
        className="absolute top-0 right-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-10 transition-opacity duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 100% 0%, rgba(218, 180, 100, 0.45) 0%, rgba(197, 168, 128, 0.22) 35%, rgba(138, 114, 73, 0.05) 60%, transparent 80%)',
          opacity: 'var(--glow-tr)',
        }}
        aria-hidden="true"
      />

      {/* 3. BOTTOM-LEFT CORNER GLOW */}
      <div
        className="absolute bottom-0 left-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-10 transition-opacity duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 0% 100%, rgba(218, 180, 100, 0.45) 0%, rgba(197, 168, 128, 0.22) 35%, rgba(138, 114, 73, 0.05) 60%, transparent 80%)',
          opacity: 'var(--glow-bl)',
        }}
        aria-hidden="true"
      />

      {/* 4. BOTTOM-RIGHT CORNER GLOW */}
      <div
        className="absolute bottom-0 right-0 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none z-10 transition-opacity duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle at 100% 100%, rgba(218, 180, 100, 0.45) 0%, rgba(197, 168, 128, 0.22) 35%, rgba(138, 114, 73, 0.05) 60%, transparent 80%)',
          opacity: 'var(--glow-br)',
        }}
        aria-hidden="true"
      />

      {/* Subtle Corner Bracket Accents (Editorial Architectural Touch) */}
      <div className="absolute top-0 left-0 w-3.5 h-[1.5px] bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-[1.5px] h-3.5 bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />

      <div className="absolute top-0 right-0 w-3.5 h-[1.5px] bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />
      <div className="absolute top-0 right-0 w-[1.5px] h-3.5 bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />

      <div className="absolute bottom-0 left-0 w-3.5 h-[1.5px] bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[1.5px] h-3.5 bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />

      <div className="absolute bottom-0 right-0 w-3.5 h-[1.5px] bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />
      <div className="absolute bottom-0 right-0 w-[1.5px] h-3.5 bg-[#c5a880] opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none z-10" />

      {/* Main Content */}
      <div className="relative z-0 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </Component>
  );
}
