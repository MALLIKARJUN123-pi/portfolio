import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Briefcase, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personalInfo, about } = portfolioData;

  const codeString = `// Developer Profile
const developer = {
  name: "${personalInfo.name}",
  role: "Java Full Stack Developer",
  skills: [
    "Java", "Spring Boot", "Microservices", 
    "REST APIs", "MySQL", "Redis", "Kafka", 
    "Docker", "React"
  ],
  location: "${personalInfo.location}",
  status: "Open to Full-time Opportunities",
  interests: ["System Architecture", "Performance Tuning"]
};`;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            About Me
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;About /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text/Bio Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-200 dark:text-slate-200 html-light:text-slate-800">
              Passionate about engineering reliable, scalable, and high-performance applications.
            </h3>
            
            <div className="space-y-4 text-slate-400 dark:text-slate-400 html-light:text-slate-600 leading-relaxed">
              {about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Quick Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-300 html-light:text-slate-700">
                <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
                  <MapPin size={18} />
                </div>
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-300 html-light:text-slate-700">
                <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
                  <Mail size={18} />
                </div>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-brand-primary transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-300 html-light:text-slate-700">
                <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
                  <Phone size={18} />
                </div>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-brand-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 dark:text-slate-300 html-light:text-slate-700">
                <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg">
                  <Briefcase size={18} />
                </div>
                <span>Looking for Full-time Roles</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Code Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel rounded-xl overflow-hidden shadow-2xl border border-slate-800 html-light:border-slate-200">
              {/* Terminal Title Bar */}
              <div className="bg-slate-900/80 px-4 py-3 flex items-center justify-between border-b border-slate-800 html-light:bg-slate-100 html-light:border-slate-200">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-xs text-slate-400 flex items-center gap-1.5 html-light:text-slate-600">
                  <Terminal size={12} /> index.js
                </span>
                <div className="w-12" /> {/* spacer */}
              </div>
              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm overflow-x-auto bg-slate-950/80 text-cyan-400 leading-relaxed html-light:bg-slate-50 html-light:text-indigo-600">
                <pre>{codeString}</pre>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
