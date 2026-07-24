"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { TechItem } from "@/data/portfolioData";

interface TechStackSectionProps {
  techStack: TechItem[];
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({ techStack }) => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border">
      <div className="space-y-16">
        {/* Title */}
        <div className="space-y-4 max-w-xl">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 03 / ENGINE ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-sm">
            Highly specialized in modern web technologies with an emphasis on performance, type safety, and rich animation.
          </p>
        </div>

        {/* Floating Tech Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech.id}
              className="p-6 rounded-xl border border-border bg-card hover:bg-background hover:border-muted-foreground/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <Icon
                  icon={tech.icon}
                  className={`text-3xl transition-all ${
                    tech.icon.includes("nextjs") || tech.icon.includes("aws") || tech.icon.includes("framer")
                      ? "invert grayscale group-hover:grayscale-0"
                      : tech.icon.startsWith("lucide")
                      ? "text-primary"
                      : "grayscale group-hover:grayscale-0"
                  }`}
                />
                <span className="text-[10px] font-mono text-muted-foreground">
                  {tech.id}
                </span>
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm text-foreground">
                  {tech.name}
                </h4>
                <span className="text-[10px] text-muted-foreground font-mono">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
