// src/components/ui/TechButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const TechButton = ({
  children,
  variant = 'primary',
  size = 'default',
  icon: Icon = ArrowRight,
  href,
  onClick,
  className = '',
  ...props
}) => {

  const baseClasses = `
    group relative inline-flex items-center justify-center font-semibold uppercase tracking-wide
    rounded-full cursor-pointer overflow-hidden transition-all duration-300
  `;

  const variants = {
    primary: `
      text-white 
      
    `,
    secondary: `
      text-purple-400 
      hover:text-black
    `
  };

  const sizes = {
    default: "px-7 py-3 text-sm",
    small: "px-5 py-2 text-xs",
    large: "px-10 py-4 text-base"
  };

  const buttonClasses = `
    ${baseClasses} ${variants[variant]} ${sizes[size]} ${className}
  `;

  const ButtonInner = (
    <>
      {/* Text */}
      <span className="relative z-10 flex items-center gap-3 px-8 py-4 rounded-full 
       overflow-hidden group 
       bg-gradient-to-r from-[#39ff14] to-[#00f2fe]
       text-white font-semibold tracking-wide
       shadow-[0_0_18px_rgba(0,255,200,0.35)]
       transition-transform duration-300 hover:scale-[1.03]">

        <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
           VIEW OUR BRAND STORY
        </span>

        {/* Icon */}
        <ArrowRight className="relative z-10 ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />

        {/* Overlay Hover Gradient (same as original) */}
        <span
          className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left
          bg-white/25 transition-transform duration-500 ease-out"
        ></span>
      </span>
    </>

  );
  const MotionTag = href ? motion.a : motion.button;
  return (
    <MotionTag
      href={href}
      onClick={onClick}
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {ButtonInner}
    </MotionTag>
  );
};
