import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const CertificateModal = ({ certificate, onClose }) => {
  if (!certificate) return null;

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
        className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
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
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-white mb-1">{certificate.name}</h4>
            <p className="text-cyan-400 font-medium">{certificate.issuer} • {certificate.date}</p>
          </div>
          
          <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-800 border border-white/5">
            <img
              src={certificate.image}
              alt={certificate.name}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-6 flex justify-end">
            <a
              href={certificate.link}
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
  );
};

export default CertificateModal;
