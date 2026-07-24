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
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 md:py-32 space-y-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 01 / SELECTED WORKS ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            Featured Projects
          </h2>
        </div>
        <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
          A curated selection of digital products, design systems, and frontend architectures built with modern stacks.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-32 pt-12">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center group"
            >
              {/* Content Column */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground">
                    [ {project.number} ]
                  </span>
                  <div className="h-[1px] w-12 bg-border"></div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full border border-border bg-card text-[10px] font-mono text-muted-foreground uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href={`/case-study/${project.id}`}
                    className="h-11 px-6 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity"
                  >
                    View Case Study
                  </Link>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="h-11 px-4 inline-flex items-center justify-center rounded-full border border-border text-xs uppercase tracking-widest font-semibold hover:bg-card transition-colors"
                  >
                    <Icon icon="lucide:external-link" className="text-base mr-2" /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-border hover:bg-card transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Icon icon="lucide:github" className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Image Column */}
              <div
                className={`lg:col-span-7 ${
                  isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                }`}
              >
                <div className="relative rounded-xl border border-border bg-card overflow-hidden group-hover:border-muted-foreground/40 transition-colors duration-500 shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
