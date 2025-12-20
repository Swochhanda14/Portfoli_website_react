import React from 'react';
import Navbar from './components/organisms/Navbar';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import Skills from './components/organisms/Skills';
import Projects from './components/organisms/Projects';
import Services from './components/organisms/Services';
import Experience from './components/organisms/Experience';
import Education from './components/organisms/Education';
import GitHubStats from './components/organisms/GitHubStats';
import Testimonials from './components/organisms/Testimonials';
import Contact from './components/organisms/Contact';
import Footer from './components/organisms/Footer';
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
