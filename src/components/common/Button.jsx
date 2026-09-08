import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  icon: Icon,
  disabled = false,
  className = '',
  type = 'button'
}) {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-[0.22em] uppercase font-semibold transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-[9.5px] px-3.5 py-2 gap-2',
    md: 'text-[11px] px-5 py-2.5 gap-2.5',
    lg: 'text-xs px-7 py-3.5 gap-3'
  };

  const variantStyles = {
    primary: 'bg-[#111111] text-[#F7F6F2] hover:bg-[#2a2a2a] border border-[#111111]',
    outline: 'bg-transparent text-[#111111] hover:bg-[#111111] hover:text-[#F7F6F2] border border-[#111111]',
    secondary: 'bg-[#EFEDE7] text-[#111111] hover:bg-[#111111] hover:text-[#F7F6F2] border border-[#D8D6D0]',
    ghost: 'bg-transparent text-[#555555] hover:text-[#111111]'
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {Icon && <Icon className="text-sm shrink-0" />}
      <span>{children}</span>
    </motion.button>
  );
}
