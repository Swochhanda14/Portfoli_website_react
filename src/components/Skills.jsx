import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-medium tracking-wide uppercase mb-2">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Technical Expertise</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: groupIndex * 0.1 }}
              className="glass p-8 rounded-2xl hover:bg-slate-800/50 transition-colors"
            >
              <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-700/50 pb-2">{group.category}</h4>
              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
