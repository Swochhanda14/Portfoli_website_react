import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, className = '', animate = false, delay = 0 }) => {
  const Component = animate ? motion.h3 : 'h3';
  const props = animate ? {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay }
  } : {};

  return (
    <Component 
      className={`text-3xl md:text-4xl font-bold text-white ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default SectionHeading;
