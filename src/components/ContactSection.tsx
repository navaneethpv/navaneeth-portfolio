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
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Big call to action */}
        <div className="lg:col-span-6 space-y-8">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 07 / COLLABORATE ]
          </div>
          <h2 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-foreground leading-none">
            {personal.contactTitle}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            {personal.contactSubtitle}
          </p>

          {/* Social links */}
          <div className="space-y-4">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Connect elsewhere
            </p>
            <div className="flex gap-4">
              {personal.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-card hover:text-primary transition-all"
                  aria-label={social.name}
                >
                  <Icon icon={social.icon} className="text-xl" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Simple premium form */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-xl border border-border bg-card/40 space-y-6"
          >
            {submitted && (
              <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                ✓ Message sent successfully! I will get back to you soon.
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-muted-foreground/60 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-muted-foreground/60 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Inquiry"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full h-11 px-4 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-muted-foreground/60 transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-muted-foreground/60 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full h-12 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
