import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Tag from '../atoms/Tag';

const ProjectCard = ({ project, onOpenModal }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
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
          <button 
            onClick={(e) => onOpenModal(e, project)}
            className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-cyan-500 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
          </button>
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
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
