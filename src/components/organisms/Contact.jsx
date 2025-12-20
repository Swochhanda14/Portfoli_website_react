import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../../data';
import SectionTitle from '../atoms/SectionTitle';
import SectionHeading from '../atoms/SectionHeading';
import Button from '../atoms/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null);
  const { personalInfo } = portfolioData;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <SectionTitle>Get In Touch</SectionTitle>
          <SectionHeading>Let's Work Together</SectionHeading>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
            <p className="text-slate-400 mb-8">
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/30 transition-colors group">
                <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Email Me</h5>
                  <p className="text-slate-400">{personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-colors group">
                <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Call Me</h5>
                  <p className="text-slate-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-pink-500/30 transition-colors group">
                <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-white font-medium mb-1">Location</h5>
                  <p className="text-slate-400">{personalInfo.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 text-white placeholder-slate-600 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-lg gap-2 disabled:opacity-70"
              >
                {status === 'sending' ? (
                  'Sending...'
                ) : status === 'success' ? (
                  'Message Sent!'
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
