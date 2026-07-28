"use client";

import React from "react";
import { Icon } from "@iconify/react";

interface SkillItem {
  name: string;
  icon: string;
  status?: string;
}

interface SkillCategory {
  title: string;
  badge: string;
  badgeColor: string;
  skills: SkillItem[];
}

export const TechStackSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: "Frontend",
      badge: "Primary Focus",
      badgeColor: "text-primary border-primary bg-primary/5 dark:bg-primary/10",
      skills: [
        { name: "React", icon: "logos:react" },
        { name: "Next.js", icon: "devicon:nextjs" },
        { name: "TypeScript", icon: "logos:typescript-icon" },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      ],
    },
    {
      title: "Backend",
      badge: "Currently Learning",
      badgeColor: "text-primary border-primary bg-primary/5 dark:bg-primary/10",
      skills: [
        { name: "Node.js", icon: "logos:nodejs-icon", status: "Learning" },
        { name: "Express.js", icon: "devicon:express", status: "Learning" },
        { name: "MongoDB", icon: "logos:mongodb-icon", status: "Learning" },
      ],
    },
    {
      title: "Tools & UI",
      badge: "Workflow",
      badgeColor: "text-primary border-primary bg-primary/5 dark:bg-primary/10",
      skills: [
        { name: "Git", icon: "logos:git-icon" },
        { name: "GitHub", icon: "devicon:github" },
        { name: "Figma", icon: "logos:figma" },
        { name: "Framer Motion", icon: "logos:framer" },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full border-b border-border bg-background">
      {/* Section Title */}
      <div className="p-8 md:p-12 border-b border-border">
        <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-3.5 py-1.5 bg-card rounded-full mb-3 inline-block font-bold">
          Tech Stack &bull; Capabilities
        </span>
        <h2 className="text-5xl md:text-8xl font-heading font-extrabold uppercase tracking-tighter text-primary">
          Capabilities
        </h2>
      </div>

      {/* 3-Column Minimalist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {categories.map((category, idx) => (
          <div key={idx} className="p-6 md:p-10 space-y-6 flex flex-col justify-between">
            <div>
              {/* Category Header with High-Contrast Badge */}
              <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-border">
                <h3 className="text-2xl md:text-3xl uppercase tracking-tighter text-primary font-heading font-extrabold">
                  {category.title}
                </h3>
                <span className={`text-[11px] font-mono font-extrabold uppercase tracking-wider border px-3 py-1 rounded-full ${category.badgeColor}`}>
                  {category.badge}
                </span>
              </div>

              {/* Skills List with Icons & High Contrast Text */}
              <ul className="space-y-3.5 font-sans">
                {category.skills.map((skill, sIdx) => (
                  <li
                    key={sIdx}
                    className="flex items-center justify-between p-3.5 rounded-md bg-card border-2 border-border/80 hover:border-primary transition-all group shadow-xs"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded bg-background border border-border flex items-center justify-center p-1.5 shrink-0 group-hover:scale-110 transition-transform">
                        <Icon icon={skill.icon} className="text-xl md:text-2xl" />
                      </div>
                      <span className="font-heading font-bold text-base md:text-lg text-primary">
                        {skill.name}
                      </span>
                    </div>

                    {skill.status && (
                      <span className="text-[11px] font-mono uppercase tracking-wider text-primary bg-primary/10 border border-primary px-2.5 py-0.5 rounded font-extrabold">
                        {skill.status}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

