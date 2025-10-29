// src/components/ui/TechButton.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
  const baseClasses = "group relative font-orbitron uppercase tracking-wider overflow-hidden transition-all duration-300 flex items-center justify-center";
  
  const variants = {
    primary: "bg-gradient-primary text-dark cyber-border hover:shadow-lg hover:shadow-primary/30",
    secondary: "bg-transparent border border-secondary text-secondary cyber-border hover:bg-secondary hover:text-dark",
    accent: "bg-transparent border border-accent text-accent cyber-border hover:bg-accent hover:text-dark"
  };

  const sizes = {
    default: "px-8 py-4 text-sm",
    small: "px-6 py-3 text-xs",
    large: "px-12 py-6 text-base"
  };

  const buttonContent = (
    <>
      <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
        {children}
      </span>
      <Icon className="relative z-10 ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </>
  );

  const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={buttonClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};