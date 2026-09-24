import React, { useEffect, useRef, useState } from 'react';

export default function CursorOrb() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'link' | 'button' | 'image'
  const [cursorText, setCursorText] = useState('');

  // DOM Refs for direct GPU transform manipulation (bypasses React render cycle)
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const trail1Ref = useRef(null);
  const trail2Ref = useRef(null);

  // High performance coordinates
  const mouse = useRef({ x: -200, y: -200 });
  const dotPos = useRef({ x: -200, y: -200 });
  const glowPos = useRef({ x: -200, y: -200 });
  const trail1Pos = useRef({ x: -200, y: -200 });
  const trail2Pos = useRef({ x: -200, y: -200 });
  const isVisible = useRef(false);
  const rafId = useRef(null);

  useEffect(() => {
    // Only desktop fine-pointer devices
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    setIsDesktop(true);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!isVisible.current) {
        isVisible.current = true;
        dotPos.current.x = e.clientX;
        dotPos.current.y = e.clientY;
        glowPos.current.x = e.clientX;
        glowPos.current.y = e.clientY;
        trail1Pos.current.x = e.clientX;
        trail1Pos.current.y = e.clientY;
        trail2Pos.current.x = e.clientX;
        trail2Pos.current.y = e.clientY;
      }

      // Fast event delegation for hover states
      const target = e.target;
      if (!target) return;

      // Check if target is inside an explicitly interactive view container or card
      const viewContainer = target.closest('[data-cursor="view"]') || target.closest('[data-interactive="true"]');
      const interactiveCard = target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.onclick;

      const isInteractiveMedia =
        (viewContainer && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || viewContainer.querySelector('img, video'))) ||
        (interactiveCard && (target.tagName === 'IMG' || target.tagName === 'VIDEO' || interactiveCard.querySelector('img, video')));

      const isBtn =
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        (target.tagName === 'A' && (target.classList.contains('bg-[#c5a880]') || target.classList.contains('border')));

      const isLnk = target.tagName === 'A' || target.closest('a') || target.getAttribute('role') === 'button';

      // Avoid fake VIEW cursor inside header logo or static banners
      if (isInteractiveMedia && !target.closest('header') && !target.closest('footer')) {
        setCursorState('image');
        setCursorText('VIEW');
      } else if (isBtn) {
        setCursorState('button');
        setCursorText('');
      } else if (isLnk) {
        setCursorState('link');
        setCursorText('');
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (glowRef.current) glowRef.current.style.opacity = '0';
      if (trail1Ref.current) trail1Ref.current.style.opacity = '0';
      if (trail2Ref.current) trail2Ref.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (glowRef.current) glowRef.current.style.opacity = '1';
      if (trail1Ref.current) trail1Ref.current.style.opacity = '1';
      if (trail2Ref.current) trail2Ref.current.style.opacity = '1';
    };

    // 120 FPS GPU Animation Loop
    const loop = () => {
      if (isVisible.current) {
        // Fast responsive cursor dot (0.45 lerp for crisp, immediate response with zero lag)
        dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.45;
        dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.45;

        // Smooth trailing light particles
        trail1Pos.current.x += (mouse.current.x - trail1Pos.current.x) * 0.28;
        trail1Pos.current.y += (mouse.current.y - trail1Pos.current.y) * 0.28;

        trail2Pos.current.x += (mouse.current.x - trail2Pos.current.x) * 0.16;
        trail2Pos.current.y += (mouse.current.y - trail2Pos.current.y) * 0.16;

        // Soft ambient background glow follows smoothly
        glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.22;
        glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.22;

        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0) translate(-50%, -50%)`;
        }

        if (trail1Ref.current) {
          trail1Ref.current.style.transform = `translate3d(${trail1Pos.current.x}px, ${trail1Pos.current.y}px, 0) translate(-50%, -50%)`;
        }

        if (trail2Ref.current) {
          trail2Ref.current.style.transform = `translate3d(${trail2Pos.current.x}px, ${trail2Pos.current.y}px, 0) translate(-50%, -50%)`;
        }

        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      rafId.current = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden" aria-hidden="true">
      {/* 1. Hardware-Accelerated Ambient Gold Background Glow (Zero Runtime Blur, Pure GPU Gradient) */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[420px] h-[420px] rounded-full mix-blend-screen pointer-events-none will-change-transform opacity-60 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle, rgba(218, 180, 100, 0.16) 0%, rgba(197, 168, 128, 0.07) 35%, rgba(138, 114, 73, 0.02) 58%, transparent 75%)',
        }}
      />

      {/* 2. Tiny Fading Light Trail Particles */}
      {cursorState === 'default' && (
        <>
          <div
            ref={trail2Ref}
            className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#c5a880]/30 will-change-transform"
          />
          <div
            ref={trail1Ref}
            className="absolute top-0 left-0 w-2 h-2 rounded-full bg-[#c5a880]/50 will-change-transform"
          />
        </>
      )}

      {/* 3. Main Cursor Orb / Ring / Badge (Instant, Responsive, Zero Lag) */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full flex items-center justify-center select-none will-change-transform transition-[width,height,background-color,border-color] duration-200 ease-out ${
          cursorState === 'image'
            ? 'w-[72px] h-[72px] bg-[#c5a880]/95 border border-white/40 shadow-[0_0_25px_rgba(197,168,128,0.55)] backdrop-blur-[2px]'
            : cursorState === 'button'
            ? 'w-11 h-11 bg-[#c5a880]/10 border-[1.5px] border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.35)]'
            : cursorState === 'link'
            ? 'w-4 h-4 bg-[#d4af37] shadow-[0_0_14px_rgba(212,175,55,0.5)]'
            : 'w-2.5 h-2.5 bg-[#d4af37] shadow-[0_0_10px_rgba(212,175,55,0.6)]'
        }`}
      >
        {cursorState === 'image' && (
          <span className="font-mono-tech text-[10px] tracking-[0.2em] font-bold text-[#09090b] uppercase">
            {cursorText || 'VIEW'}
          </span>
        )}

        {cursorState === 'button' && (
          <div className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
        )}
      </div>
    </div>
  );
}
