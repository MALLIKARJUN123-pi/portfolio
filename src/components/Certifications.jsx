import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="py-12 relative bg-slate-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub Header */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900 flex items-center justify-center gap-2">
            <Award className="text-brand-secondary" /> Certifications
          </h3>
          <div className="h-0.5 w-12 bg-brand-secondary/60 mx-auto mt-2 rounded-full" />
        </div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              whileHover={{ y: -3, scale: 1.03 }}
              className="glass-panel px-6 py-4 rounded-xl border border-slate-800 html-light:border-slate-200 hover:border-brand-secondary/30 dark:hover:border-brand-secondary/30 flex items-center gap-3.5 shadow-md transition-all duration-300 cursor-default"
            >
              <div className="p-2 bg-brand-secondary/10 rounded-lg text-brand-secondary">
                <ShieldCheck size={20} />
              </div>
              <span className="font-semibold text-slate-200 dark:text-slate-200 html-light:text-slate-700 text-sm sm:text-base">
                {cert}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
