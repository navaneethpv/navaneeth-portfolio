"use client";

import React from "react";
import { ExperienceItem } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto border-t border-border">
      <div className="space-y-24">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 04 / JOURNEY ]
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
              Experience
            </h2>
          </div>
        </div>

        {/* Minimal Vertical List */}
        <div className="max-w-4xl space-y-24">
          {experience.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start border-b border-border/50 pb-16 last:border-0"
            >
              {/* Period side */}
              <div className="md:col-span-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary">
                  {item.period}
                </span>
              </div>

              {/* Title & Description */}
              <div className="md:col-span-9 space-y-4">
                <h3 className="text-2xl font-heading font-light text-primary">
                  {item.role}
                </h3>
                <p className="text-xs text-primary font-mono uppercase tracking-widest mb-6 block">
                  {item.company}
                </p>
                <div className="text-sm text-secondary leading-relaxed font-sans font-light max-w-2xl whitespace-pre-line">
                  {item.description.replace(/\n\n/g, "\n").replace(/\n/g, "\n\n")}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
