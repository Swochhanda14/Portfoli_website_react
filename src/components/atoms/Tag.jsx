import React from 'react';

const Tag = ({ children, className = '' }) => {
  return (
    <span className={`px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700 ${className}`}>
      {children}
    </span>
  );
};

export default Tag;
