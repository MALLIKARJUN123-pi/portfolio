import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Layers, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Map categories to specific icons
const categoryIcons = {
  "Languages": <Code2 size={24} className="text-brand-primary" />,
  "Backend": <Server size={24} className="text-brand-primary" />,
  "Database & Messaging": <Database size={24} className="text-brand-primary" />,
  "Frontend": <Layers size={24} className="text-brand-primary" />,
  "Tools & Platforms": <Wrench size={24} className="text-brand-primary" />
};

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Technical Skills
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;Skills /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel p-6 rounded-xl border border-slate-800 html-light:border-slate-200 hover:border-brand-primary/30 dark:hover:border-brand-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-brand-primary/5 group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                  {categoryIcons[skillGroup.category] || <Code2 size={24} />}
                </div>
                <h3 className="text-lg font-semibold text-slate-100 dark:text-slate-100 html-light:text-slate-800">
                  {skillGroup.category}
                </h3>
              </div>

              {/* Skills Badges List */}
              <div className="flex flex-wrap gap-2.5">
                {skillGroup.items.map((skill, sIdx) => (
                  <motion.span
                    key={sIdx}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3.5 py-1.5 bg-slate-900/80 hover:bg-gradient-to-r hover:from-brand-primary/20 hover:to-brand-secondary/20 border border-slate-800 hover:border-brand-primary/50 rounded-lg text-sm text-slate-300 hover:text-white font-medium transition-all duration-200 html-light:bg-slate-100 html-light:border-slate-200 html-light:text-slate-700 html-light:hover:bg-slate-200/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
