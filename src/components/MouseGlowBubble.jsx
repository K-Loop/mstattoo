import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseGlowBubble() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);

  // Smooth fluid spring physics for gold bubble
  const springConfig = { damping: 28, stiffness: 260, mass: 0.45 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Trailing soft ambient halo
  const trailConfig = { damping: 32, stiffness: 150, mass: 0.75 };
  const trailX = useSpring(mouseX, trailConfig);
  const trailY = useSpring(mouseY, trailConfig);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') ||
          target.closest('button') ||
          target.getAttribute('role') === 'button' ||
          window.getComputedStyle(target).cursor === 'pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      mouseX.set(-300);
      mouseY.set(-300);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden" aria-hidden="true">
      {/* Outer Soft Champagne Ambient Halo */}
      <motion.div
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.45 : 0.3,
        }}
        transition={{ duration: 0.3 }}
        className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(218,180,100,0.18)_0%,rgba(197,168,128,0.06)_45%,transparent_75%)] blur-2xl"
      />

      {/* Main Golden Bubble Orb */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: `radial-gradient(circle at 35% 35%, 
            rgba(255, 238, 185, 0.42) 0%, 
            rgba(218, 180, 100, 0.30) 30%, 
            rgba(197, 168, 128, 0.18) 55%, 
            rgba(138, 114, 73, 0.05) 78%, 
            transparent 100%)`,
          boxShadow: '0 0 30px 6px rgba(212, 175, 55, 0.12)',
        }}
        animate={{
          scale: isHovered ? 1.22 : 1,
          opacity: 0.9,
        }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 w-36 h-36 rounded-full blur-[14px] mix-blend-screen"
      />

      {/* Concentrated Radiant Core */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 1.15 : 1,
          opacity: isHovered ? 0.75 : 0.55,
        }}
        transition={{ duration: 0.18 }}
        className="absolute top-0 left-0 w-14 h-14 rounded-full blur-[7px] bg-[radial-gradient(circle,rgba(255,248,225,0.48)_0%,rgba(218,180,100,0.22)_60%,transparent_100%)] mix-blend-screen"
      />
    </div>
  );
}
