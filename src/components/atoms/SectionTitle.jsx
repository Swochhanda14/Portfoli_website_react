import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, className = '', animate = false }) => {
  const Component = animate ? motion.h2 : 'h2';
  const props = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  } : {};

  return (
    <Component 
      className={`text-cyan-400 font-medium tracking-wide uppercase mb-2 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SectionTitle;
