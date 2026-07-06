import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ setActiveSection }) {
  const { personalInfo, hero } = portfolioData;
  const [titleIndex, setTitleIndex] = useState(0);
  const [subText, setSubText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = hero.typingTitles[titleIndex];
    let timer;
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setSubText(prev => prev.slice(0, -1));
      }, 50); // Deleting speed
    } else {
      timer = setTimeout(() => {
        setSubText(fullText.slice(0, subText.length + 1));
      }, 100); // Typing speed
    }

    if (!isDeleting && subText === fullText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subText === '') {
      setIsDeleting(false);
      setTitleIndex(prev => (prev + 1) % hero.typingTitles.length);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, titleIndex, hero.typingTitles]);

  const handleScrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic background accents */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[30vw] h-[30vw] bg-brand-primary/10 rounded-full blur-[120px] dark:bg-brand-primary/5 animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] bg-brand-secondary/10 rounded-full blur-[120px] dark:bg-brand-secondary/5 animate-pulse delay-700" />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6 font-mono text-sm tracking-wider text-brand-primary bg-brand-primary/10 px-3 py-1 rounded-full border border-brand-primary/20"
        >
          &lt;Welcome /&gt;
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900 mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        {/* Animated Typing Title */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-12 sm:h-16 flex items-center justify-center mb-6"
        >
          <span className="text-xl sm:text-3xl font-bold font-mono text-slate-300 dark:text-slate-400 html-light:text-slate-600 typing-cursor">
            {subText}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg sm:text-xl text-slate-400 dark:text-slate-400 html-light:text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {hero.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <button
            onClick={() => handleScrollTo('projects')}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary hover:to-brand-primary text-white font-medium rounded-lg shadow-lg shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
          >
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href={personalInfo.resumeUrl}
            download="Kadagond_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 html-light:bg-white html-light:border-slate-200 html-light:text-slate-700 html-light:hover:bg-slate-50 html-light:hover:text-slate-900 cursor-pointer"
          >
            <FileText size={18} />
            Download Resume
          </a>

          <button
            onClick={() => handleScrollTo('contact')}
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-brand-primary/40 hover:border-brand-primary text-brand-primary font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 hover:bg-brand-primary/5 cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 bg-slate-900 border border-slate-800/80 rounded-full text-slate-400 hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all html-light:bg-white html-light:border-slate-200 shadow-md"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 border border-slate-800/80 rounded-full text-slate-400 hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all html-light:bg-white html-light:border-slate-200 shadow-md"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-900 border border-slate-800/80 rounded-full text-slate-400 hover:text-brand-primary hover:border-brand-primary hover:-translate-y-1 transition-all html-light:bg-white html-light:border-slate-200 shadow-md"
            aria-label="GitHub"
          >
            <GithubIcon size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
