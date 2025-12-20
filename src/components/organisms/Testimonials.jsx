import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioData } from '../../data';
import SectionTitle from '../atoms/SectionTitle';
import SectionHeading from '../atoms/SectionHeading';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { testimonials } = portfolioData;
  const visibleTestimonials = testimonials.filter(t => t.show !== false);

  const nextTestimonial = React.useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % visibleTestimonials.length);
  }, [visibleTestimonials.length]);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + visibleTestimonials.length) % visibleTestimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-20 bg-slate-950 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -z-10 transform -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Testimonials</SectionTitle>
          <SectionHeading>Client Reviews</SectionHeading>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="glass p-8 md:p-12 rounded-3xl relative"
            >
              <Quote className="absolute top-8 left-8 text-cyan-500/20" size={64} />
              
              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                  <div className="w-full h-full rounded-full p-1 bg-gradient-to-r from-cyan-500 to-purple-500">
                    <img 
                      src={visibleTestimonials[currentIndex].image} 
                      alt={visibleTestimonials[currentIndex].name} 
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4 text-yellow-400">
                    {[...Array(visibleTestimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-lg md:text-xl italic mb-6 leading-relaxed">
                    "{visibleTestimonials[currentIndex].content}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-white">{visibleTestimonials[currentIndex].name}</h4>
                    <p className="text-cyan-400">{visibleTestimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
