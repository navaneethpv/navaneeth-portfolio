"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
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
    <section id="contact" className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left: Big call to action */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 05 / COLLABORATE ]
            </div>
            <h2 className="text-5xl md:text-7xl font-heading font-light tracking-tight text-primary leading-none">
              {personal.contactTitle}
            </h2>
            <p className="text-secondary text-base md:text-lg max-w-md leading-relaxed font-sans font-light">
              {personal.contactSubtitle}
            </p>
          </div>

          {/* Social links */}
          <div className="space-y-6 pt-12 border-t border-border/50">
            <p className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              Connect elsewhere
            </p>
            <div className="flex gap-6">
              {personal.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Simple premium form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 bg-card border border-border shadow-sm space-y-8"
          >
            {submitted && (
              <div className="p-4 bg-[#3E5C47]/10 border border-[#3E5C47]/20 text-[#3E5C47] text-xs font-mono">
                ✓ Message sent successfully.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-primary uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 bg-background border border-border text-sm text-primary focus:outline-none focus:border-primary transition-colors rounded-none shadow-none"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono text-primary uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-4 bg-background border border-border text-sm text-primary focus:outline-none focus:border-primary transition-colors rounded-none shadow-none"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-mono text-primary uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-12 px-4 bg-background border border-border text-sm text-primary focus:outline-none focus:border-primary transition-colors rounded-none shadow-none"
              />
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-mono text-primary uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-background border border-border text-sm text-primary focus:outline-none focus:border-primary transition-colors resize-none rounded-none shadow-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-14 inline-flex items-center justify-center bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
