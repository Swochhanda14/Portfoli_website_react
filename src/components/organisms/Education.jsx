import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { portfolioData } from '../../data';
import CertificateModal from '../modals/CertificateModal';
import SectionTitle from '../atoms/SectionTitle';
import SectionHeading from '../atoms/SectionHeading';

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
              <SectionTitle>Education</SectionTitle>
              <SectionHeading className="text-3xl">Academic Background</SectionHeading>
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
              <SectionTitle className="text-purple-400">Certifications</SectionTitle>
              <SectionHeading className="text-3xl">Licenses & Certs</SectionHeading>
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
          <CertificateModal 
            certificate={selectedCert} 
            onClose={closeCertModal} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Education;
