import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data';
import SectionTitle from '../atoms/SectionTitle';
import SectionHeading from '../atoms/SectionHeading';

const Experience = () => {
  const { experience } = portfolioData;
  const visibleExperience = experience.filter(item => item.show !== false);

  return (
    <section id="experience" className="py-20 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>My Journey</SectionTitle>
          <SectionHeading>Experience & Education</SectionHeading>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent" />

          <div className="space-y-12">
            {visibleExperience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot on line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 hidden md:block" />
                
                {/* Visual indicator for mobile */}
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 z-10 md:hidden" />

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-cyan-400/30 transition-colors group">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        {item.type === 'Work' ? <Briefcase size={20} /> : <GraduationCap size={20} />}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-cyan-400/80">{item.period}</span>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      </div>
                    </div>
                    <p className="text-slate-300 font-medium mb-2">{item.company}</p>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
