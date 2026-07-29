"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { PersonalInfo } from "@/data/portfolioData";

interface ContactSectionProps {
  personal: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full border-b border-border bg-background overflow-hidden">
      {/* Title Header - Scroll Slide-In */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 border-b border-border flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-heading font-bold uppercase tracking-tighter text-primary">
          Contact Us
        </h2>
        <div className="text-right hidden md:block">
          <span className="font-script text-3xl sm:text-5xl md:text-6xl text-accent -rotate-6 inline-block pointer-events-none">
            Let&apos;s Talk
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Left: Info - Progressive Scroll Slide-In */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 space-y-12 flex flex-col justify-between"
        >
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold uppercase tracking-tighter text-primary leading-none max-w-md">
              {personal.contactTitle}
            </h3>
            <p className="text-secondary text-sm md:text-base leading-relaxed font-sans max-w-sm">
              {personal.contactSubtitle}
            </p>
          </div>

          <div className="space-y-6 pt-12 border-t border-border">
            <p className="text-xs font-mono text-primary uppercase tracking-widest font-bold">
              Connect Elsewhere
            </p>
            <div className="flex flex-wrap gap-3 md:gap-4">
              {personal.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-primary transition-colors flex items-center gap-2 border border-border p-3 hover:bg-primary hover:text-primary-foreground"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="text-xl" />
                  <span className="text-xs font-mono uppercase tracking-widest">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form - Progressive Scroll Slide-In */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 bg-card"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {submitted && (
              <div className="p-4 bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest text-center border border-primary">
                Message received. We will be in touch.
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 bg-background border-b-2 border-border text-base sm:text-sm text-primary focus:outline-none transition-colors rounded-none shadow-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 bg-background border-b-2 border-border text-base sm:text-sm text-primary focus:outline-none focus:border-accent transition-colors rounded-none shadow-none placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-12 px-4 bg-background border-b-2 border-border text-base sm:text-sm text-primary focus:outline-none focus:border-accent transition-colors rounded-none shadow-none placeholder:text-muted-foreground"
                placeholder="Collaboration Inquiry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-background border-2 border-border text-sm text-primary focus:outline-none focus:border-accent transition-colors resize-none rounded-none shadow-none placeholder:text-muted-foreground mt-2"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-16 inline-flex items-center justify-center bg-primary text-primary-foreground font-heading font-bold uppercase tracking-widest text-lg hover:bg-accent hover:text-accent-foreground transition-colors border border-primary group hover:cursor-pointer"
            >
              Send Message
              <Icon icon="lucide:arrow-right" className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
