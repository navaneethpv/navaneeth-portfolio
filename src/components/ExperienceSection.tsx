"use client";

import React from "react";
import { ExperienceItem } from "@/data/portfolioData";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
  return (
    <section id="experience" className="w-full px-6 py-24 md:py-32 border-t border-border">
      <div className="space-y-16">
        {/* Title */}
        <div className="space-y-4 max-w-xl">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 04 / JOURNEY ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            Experience
          </h2>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-border pointer-events-none"></div>

          <div className="space-y-16 relative">
            {experience.map((item, idx) => {
              const isLeft = item.alignment === "left";

              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative"
                >
                  {/* Title / Period side */}
                  <div
                    className={`${
                      isLeft
                        ? "md:order-2 md:pl-12"
                        : "md:text-right md:pr-12"
                    }`}
                  >
                    <span className="text-xs font-mono text-muted-foreground">
                      {item.period}
                    </span>
                    <h3 className="text-lg font-heading font-bold text-foreground">
                      {item.role}
                    </h3>
                    <p className="text-xs text-muted-foreground font-mono">
                      {item.company}
                    </p>
                  </div>

                  {/* Node bullet */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-4 border-background ${
                      idx === 0
                        ? "bg-primary"
                        : idx === 1
                        ? "bg-primary/40"
                        : "bg-primary/20"
                    }`}
                  ></div>

                  {/* Description side */}
                  <div
                    className={`text-sm text-muted-foreground leading-relaxed ${
                      isLeft
                        ? "md:order-1 md:text-right md:pr-12"
                        : "md:pl-12"
                    }`}
                  >
                    {item.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
