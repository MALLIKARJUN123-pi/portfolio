import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-slate-900 html-light:border-slate-200 bg-[#060a13] html-light:bg-slate-50 py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        {/* Center: Tech tags */}
        <div className="text-center">
          <p className="text-xs font-mono text-slate-500">
            Built with <span className="text-brand-primary">React</span>, <span className="text-brand-secondary">Tailwind CSS</span> &amp; <span className="text-brand-primary">Vite</span>.
          </p>
        </div>

        {/* Right Side: Back to top button */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 border border-slate-800 hover:border-brand-primary/50 text-slate-400 hover:text-brand-primary rounded-lg transition-all shadow-md group html-light:bg-white html-light:border-slate-200 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
