import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

/**
 * Standardized BackButton component.
 * CRITICAL RULE: Always placed on the LEFT.
 */
export default function BackButton({
  onClick,
  label = 'Back',
  className = ''
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ x: -3 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#52525b] transition-colors py-2 group cursor-pointer focus:outline-none ${className}`}
      aria-label={label}
    >
      <span className="w-7 h-7 rounded-full border border-[#111111]/20 flex items-center justify-center text-[#111111] group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-all duration-300">
        <FiArrowLeft className="text-sm transition-transform duration-300 group-hover:-translate-x-0.5" />
      </span>
      <span className="font-sans font-semibold tracking-widest text-[11px]">{label}</span>
    </motion.button>
  );
}
