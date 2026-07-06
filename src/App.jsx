import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CoreCompetencies from './components/CoreCompetencies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true; // Dark mode by default
  });

  // Theme synchronization
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Intersection Observer for highlighting navbar items
  useEffect(() => {
    const sections = ['about', 'skills', 'experience', 'projects', 'education', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Special check for hero section scroll
    const handleHeroScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleHeroScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleHeroScroll);
    };
  }, []);

  return (
    <div className="bg-[#0b0f19] html-light:bg-[#f8fafc] text-slate-300 html-light:text-slate-600 min-h-screen transition-colors duration-300">
      {/* Sticky Navigation */}
      <Navbar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Layout Sections */}
      <main className="relative">
        <Hero setActiveSection={setActiveSection} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative divider for sections */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-slate-800/40 html-light:via-slate-200 to-transparent z-0 pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <About />
            <Skills />
            <Experience />
            <Projects />
            
            {/* Grouped Education & Certifications */}
            <div className="grid grid-cols-1 gap-4">
              <Education />
              <Certifications />
              <CoreCompetencies />
            </div>

            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
