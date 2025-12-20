import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data';
import ProjectModal from '../modals/ProjectModal';
import ProjectCard from '../molecules/ProjectCard';
import SectionTitle from '../atoms/SectionTitle';
import SectionHeading from '../atoms/SectionHeading';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const { projects } = portfolioData;
  const visibleProjects = projects.filter(p => p.show !== false);

  // Derive unique categories from projects
  const categories = ["All", ...new Set(visibleProjects.map(p => p.category))];

  const filteredProjects = filter === 'All' 
    ? visibleProjects 
    : visibleProjects.filter(p => p.category === filter);

  // Modal handlers
  const openProjectModal = (e, project) => {
    e.preventDefault();
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <SectionTitle>Portfolio</SectionTitle>
          <SectionHeading className="mb-8">Featured Projects</SectionHeading>
          
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
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenModal={openProjectModal} 
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeProjectModal} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
