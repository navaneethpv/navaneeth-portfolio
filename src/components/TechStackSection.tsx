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
    <section id="skills" className="w-full border-b border-border">
      {/* Title */}
      <div className="p-8 md:p-12 border-b border-border">
        <h2 className="text-6xl md:text-9xl font-heading font-bold uppercase tracking-tighter text-primary">
          Capabilities
        </h2>
      </div>

      {/* Minimalist Tech Lists */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {categories.map((category, idx) => (
          <div key={idx} className="p-8 md:p-12 space-y-12">
            <h3 className="text-2xl md:text-4xl uppercase tracking-tighter text-primary font-heading font-bold">
              {category.title}
            </h3>
            <ul className="space-y-4 text-sm font-sans text-secondary">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="hover:text-accent transition-colors cursor-default pb-4 border-b border-border/30 last:border-0">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
