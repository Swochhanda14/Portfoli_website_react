import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data';

const Hero = () => {
  const { hero, socialLinks } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-cyan-400 font-medium tracking-wide mb-4">{hero.greeting}</h2>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              {hero.headline.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">{hero.headline.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
              {hero.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            <a href="#contact" className="px-8 py-3 rounded-full bg-white text-slate-900 font-bold hover:bg-cyan-50 transition-colors">
              Get in Touch
            </a>
            <div className="flex items-center space-x-4">
              {socialLinks.filter(s => s.show !== false).map((social) => (
                <a 
                  key={social.platform}
                  href={social.url} 
                  className="p-2 rounded-full bg-slate-800/50 hover:bg-slate-800 hover:text-cyan-400 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
             initial={{ opacity: 0, width: 0 }}
             animate={{ opacity: 1, width: "100%" }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="pt-8 border-t border-slate-800 flex gap-12"
          >
            {hero.stats.map((stat, index) => (
              <div key={index}>
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                <p className="text-slate-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Image / Graphic */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6 }}
           className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Animated Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-3xl rotate-6 opacity-30 animate-pulse"></div>
            <div className="absolute inset-0 bg-slate-900 rounded-3xl border border-white/10 z-10 overflow-hidden flex items-center justify-center group">
               <img 
                 src={hero.image} 
                 alt="Hero" 
                 className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
