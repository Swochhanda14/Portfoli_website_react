import React from 'react';
import { portfolioData } from '../../data';

const SocialLinks = ({ className = '' }) => {
  const { socialLinks } = portfolioData;

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.filter(s => s.show !== false).map((social) => (
        <a 
          key={social.platform}
          target="_blank"
          href={social.url}
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
        >
          <social.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
