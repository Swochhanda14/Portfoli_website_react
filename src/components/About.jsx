import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Download } from 'lucide-react';
import { portfolioData } from '../data';

const About = () => {
  const { about, personalInfo } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 font-medium tracking-wide uppercase mb-2"
          >
            {about.title}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            {about.subtitle}
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image or Visual */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative"
            >
                <div className="aspect-4/3 rounded-2xl overflow-hidden glass group relative">
                    <img 
                      src={about.image} 
                      alt="About Me" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* Float Card 1 */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-xl">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-slate-400 text-xs">Clients</p>
                            <p className="text-white font-bold">50+ Happy</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
            >
                <p className="text-slate-400 leading-relaxed">
                    {personalInfo.bio}
                </p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-4 py-4">
                    {about.stats.map((stat, index) => (
                      <div key={index} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors">
                          <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
                          <p className="text-slate-500 text-sm">{stat.label}</p>
                      </div>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a href={personalInfo.cvUrl} className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all">
                        <Download size={18} />
                        Download CV
                    </a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
