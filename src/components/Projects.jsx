import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { projects } = portfolioData;
  const visibleProjects = projects.filter(p => p.show !== false);

  // Derive unique categories from projects
  const categories = ["All", ...new Set(visibleProjects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? visibleProjects 
    : visibleProjects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-cyan-400 font-medium tracking-wide uppercase mb-2">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Featured Projects</h3>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25' 
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative rounded-2xl overflow-hidden glass border-0 bg-slate-900"
              >
                {/* Image Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-white transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-white transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                      <h3 className="text-2xl font-bold text-white mt-1 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
