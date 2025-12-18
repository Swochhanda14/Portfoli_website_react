import React from 'react';
import { Heart } from 'lucide-react';
import { portfolioData } from '../data';

const Footer = () => {
  const { personalInfo, socialLinks, navLinks } = portfolioData;

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 space-y-4">
             <a href="#" className="text-2xl font-bold font-display tracking-tight text-white block">
              {personalInfo.logoText}<span className="text-cyan-400">{personalInfo.logoAccent}</span>
            </a>
            <p className="text-slate-400 max-w-xs">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.filter(s => s.show !== false).map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-400 hover:text-cyan-400 transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Consulting</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} DevPortfolio. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> by SwocXanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
