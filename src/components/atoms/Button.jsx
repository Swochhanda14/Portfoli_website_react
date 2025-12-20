import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  href, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-300 font-bold rounded-full cursor-pointer";
  
  const variants = {
    primary: "bg-white text-slate-900 hover:bg-cyan-50",
    gradient: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25",
    outline: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    ghost: "bg-transparent text-slate-400 hover:text-white",
    filter: "text-sm font-medium", // Special variant for filter buttons if needed, or handle separately
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
