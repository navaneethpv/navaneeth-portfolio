"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Project } from "@/data/portfolioData";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="w-full border-b border-border">
      {/* Header */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 border-b border-border flex justify-between items-end relative overflow-hidden">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-heading font-bold uppercase tracking-tighter text-primary relative z-10">
          The Work
        </h2>
        <span className="font-script text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-accent -rotate-6 absolute left-1/4 top-1/3 z-20 pointer-events-none">
          Portfolio
        </span>
        <div className="hidden md:flex flex-col text-right z-10">
          <span className="font-mono text-xs uppercase tracking-widest">Est. 2024</span>
        </div>
      </div>

      {/* Project List */}
      <div className="grid grid-cols-1 divide-y divide-border">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-border"
            >
              {/* Content Column */}
              <div
                className={`px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 flex flex-col justify-between space-y-12 ${
                  isEven
                    ? "order-2 lg:order-1 lg:border-r border-border"
                    : "order-2 lg:order-2 lg:border-r-0"
                }`}
              >
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-xs font-mono text-secondary">
                      {project.number}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-primary font-mono bg-primary text-primary-foreground px-2 py-1">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl font-heading font-bold uppercase tracking-tighter text-primary mb-6">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm md:text-base leading-relaxed max-w-md">
                    {project.summary}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Tech List */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest leading-relaxed text-primary">
                      Tech: {project.techStack.join(" • ")}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Link
                      href={`/case-study/${project.id}`}
                      className="border border-border px-6 py-3 text-xs uppercase tracking-widest font-mono text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-center"
                    >
                      View Case Study
                    </Link>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="border border-border px-6 py-3 text-xs uppercase tracking-widest font-mono text-primary hover:bg-accent hover:text-accent-foreground hover:border-accent transition-colors text-center flex justify-center items-center gap-2"
                    >
                      Live Site <Icon icon="lucide:external-link" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`relative px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 flex items-center justify-center min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] ${
                  isEven
                    ? "order-1 lg:order-2 lg:border-r-0"
                    : "order-1 lg:order-1 lg:border-r border-border"
                }`}
              >
                {/* Decorative Red Circle */}
                {isEven ? (
                  <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-multiply z-0"></div>
                ) : (
                  <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent rounded-full translate-x-1/4 translate-y-1/4 mix-blend-multiply z-0"></div>
                )}
                
                <div className="relative z-10 w-full p-2 bg-card border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
