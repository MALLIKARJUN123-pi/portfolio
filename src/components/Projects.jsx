import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects, personalInfo } = portfolioData;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
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
    <section id="projects" className="py-20 relative bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Featured Projects
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;Projects /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel rounded-xl overflow-hidden border border-slate-800 html-light:border-slate-200 hover:border-brand-primary/30 dark:hover:border-brand-primary/30 flex flex-col justify-between hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300 group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-brand-primary p-2 bg-brand-primary/10 rounded-lg">
                    <FolderGit2 size={22} />
                  </div>
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 bg-slate-800 dark:bg-slate-800 text-slate-300 border border-slate-700/50 rounded-full html-light:bg-slate-100 html-light:border-slate-200 html-light:text-slate-600">
                    {project.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 html-light:text-slate-800 mb-3 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 dark:text-slate-400 html-light:text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Stack and Action Links */}
              <div className="p-6 pt-0 mt-auto border-t border-slate-800 html-light:border-slate-100">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4">
                  {project.techTags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-slate-900/60 dark:bg-slate-900/60 text-slate-400 hover:text-slate-300 border border-slate-800/80 rounded font-mono text-[11px] font-medium html-light:bg-slate-50 html-light:border-slate-200 html-light:text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Code link */}
                <div className="flex flex-wrap items-center gap-4">
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-cyan-400 transition-colors group/link cursor-pointer"
                    >
                      <GithubIcon size={16} />
                      View Code
                      <ExternalLink size={14} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.frontendLink && (
                    <a
                      href={project.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-cyan-400 transition-colors group/link cursor-pointer"
                    >
                      <GithubIcon size={16} />
                      Frontend
                      <ExternalLink size={14} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {project.backendLink && (
                    <a
                      href={project.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-brand-primary hover:text-cyan-400 transition-colors group/link cursor-pointer"
                    >
                      <GithubIcon size={16} />
                      Backend
                      <ExternalLink size={14} className="opacity-70 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                  {/* {!project.codeLink && !project.frontendLink && !project.backendLink && (
                    <span className="text-xs text-slate-500 font-mono italic">
                      NO Reoository
                    </span>
                  )} */}
                </div>
              </div>
            </motion.div>
          ))}

          {/* More on GitHub Card */}
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            className="border-2 border-dashed border-slate-800 html-light:border-slate-300 rounded-xl p-8 flex flex-col justify-center items-center text-center hover:border-brand-primary/60 dark:hover:border-brand-primary/60 hover:bg-brand-primary/5 transition-all duration-300 group cursor-pointer"
          >
            <div className="p-4 bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-full text-slate-400 group-hover:text-brand-primary group-hover:border-brand-primary/50 group-hover:scale-110 transition-all duration-300 html-light:bg-white html-light:border-slate-200 shadow-md">
              <GithubIcon size={36} />
            </div>
            <h3 className="text-lg font-bold text-slate-300 dark:text-slate-300 html-light:text-slate-700 mt-4 mb-2">
              More on GitHub
            </h3>
            <p className="text-sm text-slate-400 dark:text-slate-400 html-light:text-slate-500 max-w-[200px] leading-relaxed">
              Check out my other open source repositories and contributions
            </p>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
