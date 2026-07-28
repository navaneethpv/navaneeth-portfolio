"use client";

import React from "react";
import { TechItem } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface TechStackSectionProps {
  techStack: TechItem[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = () => {
  const categories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Docker", "Figma", "Framer Motion"],
    },
  ];

  return (
    <section id="skills" className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto border-t border-border">
      <div className="space-y-24">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 03 / ENGINE ]
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
              Core Technologies
            </h2>
          </div>
          <p className="text-secondary text-sm max-w-sm leading-relaxed font-sans font-light">
            Highly specialized in modern web technologies with an emphasis on clean architecture and type safety.
          </p>
        </div>

        {/* Minimalist Tech Lists */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {categories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xs uppercase tracking-widest text-primary font-mono border-b border-border pb-4">
                {category.title}
              </h3>
              <ul className="space-y-6 text-xl md:text-2xl font-heading font-light text-primary">
                {category.skills.map((skill, sIdx) => (
                  <motion.li 
                    key={sIdx} 
                    className="hover:text-accent transition-colors cursor-default"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
