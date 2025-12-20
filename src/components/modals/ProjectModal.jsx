import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel navigation
  const nextImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => 
        prev === project.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (project && project.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? project.images.length - 1 : prev - 1
      );
    }
  };

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-5xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-10"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {/* Project Header */}
          <div className="mb-6">
            <span className="text-cyan-400 text-sm font-bold uppercase tracking-wider">
              {project.category}
            </span>
            <h4 className="text-3xl font-bold text-white mt-2 mb-2">
              {project.title}
            </h4>
            <p className="text-slate-400 text-lg">
              {project.description}
            </p>
          </div>

          {/* Image Carousel */}
          {project.images && project.images.length > 0 && (
            <div className="relative mb-8 rounded-xl overflow-hidden bg-slate-800 border border-white/5">
              <div className="relative aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Carousel Navigation */}
                {project.images.length > 1 && (
                  <>
                    {/* Previous Button */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/80 text-white hover:bg-cyan-500 transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-slate-900/80 text-white text-sm font-medium">
                      {currentImageIndex + 1} / {project.images.length}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div className="mb-6">
            <h5 className="text-white font-bold text-lg mb-3">Technologies Used</h5>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span 
                  key={t} 
                  className="px-4 py-2 text-sm rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-8">
              <h5 className="text-white font-bold text-lg mb-3">Key Features</h5>
              <ul className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-2 text-slate-300"
                  >
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 justify-end pt-4 border-t border-white/5">
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-all flex items-center gap-2"
              >
                <Github size={18} />
                View Code
              </a>
            )}
            {project.demoLink && project.demoLink !== "#" && (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all flex items-center gap-2"
              >
                View Demo <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
