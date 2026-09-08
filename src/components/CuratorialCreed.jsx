import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function AnimatedCounter({ endValue, suffix = '', duration = 1.6 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * endValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, endValue, duration]);

  return (
    <span ref={ref} className="font-cinzel text-5xl sm:text-6xl md:text-7xl text-[#F7F6F2] font-normal">
      {count}
      {suffix}
    </span>
  );
}

export default function CuratorialCreed() {
  const stats = [
    { value: 100, suffix: "%", label: "CLINICAL ASEPSIS", sub: "100% Single-Use EO Needles" },
    { value: 4, suffix: "+", label: "CORE DISCIPLINES", sub: "Tattoo, Pencil, Murals, Academy" },
    { value: 500, suffix: "+", label: "COMPLETED WORKS", sub: "Tattoos & Art Commissions" },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0c0c0f] border-b border-[#22222a] relative overflow-hidden">
      <div className="w-full max-w-[94vw] xl:max-w-[92vw] 2xl:max-w-[1880px] mx-auto px-4 sm:px-8 lg:px-12 text-center">
        
        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <blockquote className="font-cormorant italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F5] font-light leading-tight tracking-wide">
            “Every stroke is an anatomical study. Every tattoo is a permanent narrative.”
          </blockquote>
        </motion.div>

        {/* 3 Real Studio Credentials with Large Typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-[#22222a]">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 + idx * 0.15 }}
              className="flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-[#22222a] last:border-none space-y-3"
            >
              <div className="text-[#c5a880]">
                <AnimatedCounter endValue={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm sm:text-base tracking-[0.2em] text-[#F7F6F2] uppercase font-semibold font-mono-tech">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-[#a3a299] font-light font-mono-tech">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
