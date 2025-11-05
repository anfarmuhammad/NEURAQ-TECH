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
      text-white bg-gradient-to-r from-purple-500 to-indigo-500
      shadow-[0_4px_15px_rgba(110,69,226,0.4)]
    `,
    secondary: `
      text-purple-400 border border-purple-400 bg-transparent
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
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>

      {/* Icon */}
      <Icon className="relative z-10 ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />

      {/* Overlay Hover Gradient */}
      <span className="
        absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
      "></span>
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
