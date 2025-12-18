import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';

const Services = () => {
  const { services } = portfolioData;

  return (
    <section id="services" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-cyan-400 font-medium tracking-wide uppercase mb-2">What I Do</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">Services & Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.filter(s => s.show !== false).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.colSpan} p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all duration-300 group`}
            >
              <div className={`mb-6 p-4 rounded-xl bg-slate-950 inline-block group-hover:scale-110 transition-transform ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
