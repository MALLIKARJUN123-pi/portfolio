import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Code, 
  Network, 
  Lock, 
  Layers, 
  Database, 
  Lightbulb, 
  FileCode, 
  Users, 
  GitBranch, 
  Zap, 
  MessageSquare 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Mapping competency names to icons
const competencyIcons = {
  "Backend Development": <Server size={18} />,
  "REST API Design": <Code size={18} />,
  "Microservices Architecture": <Network size={18} />,
  "JWT and RBAC Security": <Lock size={18} />,
  "Docker and Containerization": <Layers size={18} />,
  "Database Design": <Database size={18} />,
  "Problem Solving": <Lightbulb size={18} />,
  "Clean Code Practices": <FileCode size={18} />,
  "Team Collaboration": <Users size={18} />,
  "Version Control (Git)": <GitBranch size={18} />,
  "Quick Learner": <Zap size={18} />,
  "Effective Communication": <MessageSquare size={18} />
};

export default function CoreCompetencies() {
  const { coreCompetencies } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub Header */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Core Competencies
          </h3>
          <div className="h-0.5 w-12 bg-brand-primary/60 mx-auto mt-2 rounded-full" />
        </div>

        {/* Competencies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {coreCompetencies.map((comp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-4 bg-slate-900/40 border border-slate-800 html-light:bg-slate-100 html-light:border-slate-200 rounded-xl flex items-center gap-3 hover:border-brand-primary/30 dark:hover:border-brand-primary/30 hover:bg-slate-900/70 transition-all duration-300 shadow-sm cursor-default"
            >
              <div className="p-2 bg-brand-primary/10 text-brand-primary rounded-lg flex-shrink-0">
                {competencyIcons[comp] || <Zap size={18} />}
              </div>
              <span className="text-sm font-medium text-slate-300 dark:text-slate-300 html-light:text-slate-700 leading-tight">
                {comp}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
