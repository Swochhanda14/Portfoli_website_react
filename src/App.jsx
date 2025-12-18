import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Education from './components/Education';
import GitHubStats from './components/GitHubStats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data';

function App() {
  const { visibility } = portfolioData;

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Navbar />
      {visibility.hero && <Hero />}
      {visibility.about && <About />}
      {visibility.experience && <Experience />}
      {visibility.education && <Education />}
      {visibility.skills && <Skills />}
      {visibility.projects && <Projects />}
      {visibility.github && <GitHubStats />}
      {visibility.services && <Services />}
      {visibility.testimonials && <Testimonials />}
      {visibility.contact && <Contact />}
      <Footer />
    </div>
  );
}

export default App;
