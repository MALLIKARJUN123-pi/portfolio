import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection, darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (id) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-panel py-3 shadow-lg' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="p-2 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-lg text-white">
              <Terminal size={20} />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-slate-100 html-light:text-slate-800">
              KMB<span className="text-brand-primary">.dev</span>
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-mono text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-brand-primary'
                      : 'text-slate-400 hover:text-slate-100 html-light:text-slate-600 html-light:hover:text-slate-900'
                  }`}
                >
                  &lt;{item.label} /&gt;
                </button>
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-lg border border-slate-800 html-light:border-slate-200 hover:bg-slate-800/50 html-light:hover:bg-slate-200/50 text-slate-400 hover:text-brand-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg border border-slate-800 html-light:border-slate-200 hover:bg-slate-800/50 text-slate-400 hover:text-brand-primary transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 transition-colors cursor-pointer"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0b0f19] html-light:bg-[#f8fafc] border-t border-slate-800 html-light:border-slate-200 absolute top-full left-0 w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-3 py-2.5 rounded-md font-mono text-sm font-medium transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-brand-primary/10 text-brand-primary html-light:bg-brand-primary/5'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/30 html-light:text-slate-600 html-light:hover:text-slate-900 html-light:hover:bg-slate-100'
                }`}
              >
                &lt;{item.label} /&gt;
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
