"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Project } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-32 border-b border-border pb-12">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
            Selected Works
          </h2>
        </div>
        <p className="text-secondary max-w-sm text-sm leading-relaxed font-sans font-light">
          A curated selection of digital products, design systems, and frontend architectures built with modern stacks.
        </p>
      </div>

      {/* Project List */}
      <div className="space-y-48">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center group"
            >
              {/* Content Column */}
              <div
                className={`lg:col-span-5 space-y-8 ${
                  isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-secondary">
                    {project.number}
                  </span>
                  <div className="flex-1 h-px bg-border max-w-8 hidden sm:block"></div>
                  <span className="text-[10px] uppercase tracking-widest text-secondary font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-heading font-light text-primary tracking-tight transition-colors">
                  {project.title}
                </h3>

                <p className="text-secondary text-sm md:text-base leading-relaxed font-light">
                  {project.summary}
                </p>

                {/* Tech List (Editorial style) */}
                <div className="pt-2">
                  <p className="text-[10px] font-mono text-secondary uppercase tracking-widest leading-relaxed">
                    <span className="mr-2 text-primary">Tech:</span>
                    {project.techStack.join(" • ")}
                  </p>
                </div>

                <div className="flex items-center gap-8 pt-8 border-t border-border/50">
                  <Link
                    href={`/case-study/${project.id}`}
                    className="group flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-primary hover:text-accent transition-colors"
                  >
                    View Case Study
                    <Icon icon="lucide:arrow-right" className="text-sm transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-secondary hover:text-primary transition-colors"
                  >
                    Live Site
                    <Icon icon="lucide:external-link" className="text-sm" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-primary transition-colors ml-auto"
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
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative p-2 bg-card border border-border shadow-sm overflow-hidden"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-4/3 object-cover grayscale-15 transition-all duration-700"
                  />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
