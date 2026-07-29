"use client";

import React from "react";
import { ExperienceItem } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="w-full border-b border-border">
      {/* Title */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 border-b border-border">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-heading font-bold uppercase tracking-tighter text-primary relative">
          Experience
          <span className="font-script text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-accent absolute left-1/3 top-full -translate-y-1/2 -rotate-6 z-20 pointer-events-none">
            History
          </span>
        </h2>
      </div>

      {/* Minimal Vertical List */}
      <div className="flex flex-col divide-y divide-border">
        {experience.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border"
          >
            {/* Period & Company side */}
            <div className="px-5 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 md:col-span-1 flex flex-col justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-primary bg-primary text-primary-foreground px-3 py-1 w-fit mb-4">
                {item.period}
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                {item.company}
              </p>
            </div>

            {/* Title & Description */}
            <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 md:col-span-3 space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-5xl 2xl:text-6xl font-heading font-bold uppercase tracking-tighter text-primary">
                {item.role}
              </h3>
              <div className="text-sm text-secondary leading-relaxed font-sans max-w-2xl whitespace-pre-line border-l-2 border-accent pl-4">
                {item.description.replace(/\n\n/g, "\n").replace(/\n/g, "\n\n")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
