import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ExternalLink, X } from 'lucide-react';
import { portfolioData } from '../data';

const Education = () => {
  const { education, certifications } = portfolioData;
  const visibleEducation = education.filter(item => item.show !== false);
  const visibleCertifications = certifications.filter(item => item.show !== false);

  const [selectedCert, setSelectedCert] = useState(null);

  const openCertModal = (e, cert) => {
    e.preventDefault();
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="education" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-cyan-400 font-medium tracking-wide uppercase mb-2">Education</h2>
              <h3 className="text-3xl font-bold text-white">Academic Background</h3>
            </div>

            <div className="space-y-8">
              {visibleEducation.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-slate-900 border border-white/5 hover:border-cyan-400/30 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-slate-800 text-cyan-400">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-cyan-400/80">{item.period}</span>
                      <h4 className="text-xl font-bold text-white mt-1">{item.degree}</h4>
                      <p className="text-slate-300 font-medium mb-3">{item.school}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-purple-400 font-medium tracking-wide uppercase mb-2">Certifications</h2>
              <h3 className="text-3xl font-bold text-white">Licenses & Certs</h3>
            </div>

            <div className="space-y-6">
              {visibleCertifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-5 rounded-xl bg-slate-900/50 border border-white/5 hover:bg-slate-900 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-slate-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <Award size={20} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{cert.name}</h4>
                      <p className="text-slate-500 text-sm">{cert.issuer} • {cert.date}</p>
                    </div>
                  </div>
                  <a 
                    href={cert.link} 
                    className="text-slate-500 hover:text-cyan-400 transition-colors"
                    onClick={(e) => openCertModal(e, cert)}
                  >
                    <ExternalLink size={18} />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            onClick={closeCertModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCertModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors z-10"
              >
                <X size={24} />
              </button>

              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-white mb-1">{selectedCert.name}</h4>
                  <p className="text-cyan-400 font-medium">{selectedCert.issuer} • {selectedCert.date}</p>
                </div>
                
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-white/5">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="mt-6 flex justify-end">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold transition-all flex items-center gap-2"
                  >
                    View Original <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
