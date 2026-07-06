import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Education
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;Education /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline */}
        <div className="relative border-l border-slate-800 html-light:border-slate-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-10">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Icon Node */}
              <div className="absolute -left-[53px] md:-left-[61px] top-1 bg-[#0b0f19] html-light:bg-slate-50 p-2.5 rounded-full border border-slate-800 html-light:border-slate-200 text-brand-secondary shadow-lg shadow-brand-secondary/10">
                <GraduationCap size={18} />
              </div>

              {/* Education Card */}
              <div className="glass-panel p-6 rounded-xl border border-slate-800 html-light:border-slate-200 hover:border-brand-secondary/20 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-100 dark:text-slate-100 html-light:text-slate-800">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 dark:text-slate-300 html-light:text-slate-600 font-medium mt-1">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm">
                    <span className="flex items-center gap-1.5 text-brand-primary font-mono mb-1">
                      <Calendar size={14} />
                      {edu.duration}
                    </span>
                    <span className="px-2.5 py-1 bg-brand-secondary/10 text-brand-secondary rounded-full text-xs font-semibold mt-1 self-start sm:self-end">
                      {edu.detail}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
