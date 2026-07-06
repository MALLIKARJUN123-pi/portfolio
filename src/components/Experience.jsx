import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Work Experience
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;Experience /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 html-light:border-slate-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[53px] md:-left-[61px] top-1.5 bg-[#0b0f19] html-light:bg-slate-50 p-2.5 rounded-full border border-slate-800 html-light:border-slate-200 text-brand-primary shadow-lg shadow-brand-primary/10">
                <Briefcase size={18} />
              </div>

              {/* Experience Card */}
              <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 html-light:border-slate-200 hover:border-brand-primary/20 transition-all duration-300">
                {/* Meta details */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-800/60 html-light:border-slate-200/60 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 html-light:text-slate-800">
                      {exp.role}
                    </h3>
                    <p className="text-brand-primary font-medium text-base mt-1">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end text-sm text-slate-400">
                    <span className="flex items-center gap-1.5 mb-1 text-slate-300 dark:text-slate-400 html-light:text-slate-600">
                      <Calendar size={14} className="text-brand-secondary" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5 html-light:text-slate-500">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 text-slate-400 dark:text-slate-400 html-light:text-slate-600 list-disc list-outside ml-4 mb-6">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="leading-relaxed pl-1">
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div>
                  <h4 className="font-mono text-xs font-semibold tracking-wider text-slate-300 dark:text-slate-400 html-light:text-slate-700 uppercase mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techTags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-brand-primary/5 border border-brand-primary/25 rounded-md text-xs font-mono text-brand-primary"
                      >
                        {tag}
                      </span>
                    ))}
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
