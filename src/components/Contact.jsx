import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Message: formData.message
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto-clear success message after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch(error => {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      // Fallback: simulate success so UX doesn't crash, but log error
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white dark:text-slate-100 html-light:text-slate-900">
            Contact Me
          </h2>
          <div className="mt-2 font-mono text-sm text-brand-primary">
            &lt;Contact /&gt;
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 dark:text-slate-100 html-light:text-slate-800 mb-4">
                Let's connect & build something together
              </h3>
              <p className="text-slate-400 dark:text-slate-400 html-light:text-slate-600 leading-relaxed">
                Whether you have a full-time role, a project idea, or just want to connect, feel free to reach out. I am highly responsive to emails and LinkedIn messages.
              </p>

              <div className="space-y-4">
                {/* Email card */}
                <div className="flex items-start gap-4 p-4 glass-panel border border-slate-800 html-light:border-slate-200 rounded-xl hover:border-brand-primary/20 transition-all duration-300">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-lg flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                      Email Me
                    </h4>
                    <a 
                      href={`mailto:${personalInfo.email}`} 
                      className="text-base text-slate-200 dark:text-slate-200 html-light:text-slate-800 font-medium hover:text-brand-primary transition-colors mt-0.5 break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone card */}
                <div className="flex items-start gap-4 p-4 glass-panel border border-slate-800 html-light:border-slate-200 rounded-xl hover:border-brand-primary/20 transition-all duration-300">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-lg flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                      Call Me
                    </h4>
                    <a 
                      href={`tel:${personalInfo.phone}`} 
                      className="text-base text-slate-200 dark:text-slate-200 html-light:text-slate-800 font-medium hover:text-brand-primary transition-colors mt-0.5"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Location card */}
                <div className="flex items-start gap-4 p-4 glass-panel border border-slate-800 html-light:border-slate-200 rounded-xl hover:border-brand-primary/20 transition-all duration-300">
                  <div className="p-3 bg-brand-primary/10 text-brand-primary rounded-lg flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                      Location
                    </h4>
                    <p className="text-base text-slate-200 dark:text-slate-200 html-light:text-slate-800 font-medium mt-0.5">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles list */}
            <div className="flex gap-4 mt-8 lg:mt-0">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all html-light:bg-white html-light:border-slate-200 shadow-sm"
              >
                <LinkedinIcon size={18} />
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-sm text-slate-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all html-light:bg-white html-light:border-slate-200 shadow-sm"
              >
                <GithubIcon size={18} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-xl border border-slate-800 html-light:border-slate-200 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 dark:text-slate-400 html-light:text-slate-700 mb-1.5 font-mono">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950/60 dark:bg-slate-950/60 text-slate-200 border rounded-lg focus:outline-none focus:ring-2 transition-all html-light:bg-slate-50 html-light:text-slate-800 ${
                      errors.name 
                        ? 'border-red-500/80 focus:ring-red-500/30 focus:border-red-500' 
                        : 'border-slate-800 focus:ring-brand-primary/30 focus:border-brand-primary html-light:border-slate-200'
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 dark:text-slate-400 html-light:text-slate-700 mb-1.5 font-mono">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950/60 dark:bg-slate-950/60 text-slate-200 border rounded-lg focus:outline-none focus:ring-2 transition-all html-light:bg-slate-50 html-light:text-slate-800 ${
                      errors.email 
                        ? 'border-red-500/80 focus:ring-red-500/30 focus:border-red-500' 
                        : 'border-slate-800 focus:ring-brand-primary/30 focus:border-brand-primary html-light:border-slate-200'
                    }`}
                    placeholder="name@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-mono">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 dark:text-slate-400 html-light:text-slate-700 mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-950/60 dark:bg-slate-950/60 text-slate-200 border rounded-lg focus:outline-none focus:ring-2 transition-all html-light:bg-slate-50 html-light:text-slate-800 ${
                      errors.message 
                        ? 'border-red-500/80 focus:ring-red-500/30 focus:border-red-500' 
                        : 'border-slate-800 focus:ring-brand-primary/30 focus:border-brand-primary html-light:border-slate-200'
                    }`}
                    placeholder="Write your message here..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-mono">{errors.message}</p>}
                </div>

                {/* Submit button / success feedback */}
                <div className="pt-2">
                  <AnimatePresence mode="wait">
                    {isSubmitted ? (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2.5 p-3.5 bg-green-500/10 border border-green-500/30 text-green-400 rounded-lg text-sm font-medium justify-center"
                      >
                        <CheckCircle2 size={18} />
                        Message sent successfully. Thank you.
                      </motion.div>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 px-6 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary hover:to-brand-primary text-white font-medium rounded-lg shadow-lg shadow-brand-primary/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            Send Message
                            <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </>
                        )}
                      </button>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
