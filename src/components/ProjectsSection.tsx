"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Project } from "@/data/portfolioData";

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section id="projects" className="w-full border-b border-border bg-background">
      {/* Section Title - Scroll Slide-In */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 border-b border-border"
      >
        <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-3.5 py-1.5 bg-card rounded-full mb-3 inline-block font-bold">
          Featured Work &bull; Case Studies
        </span>
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl 2xl:text-[10rem] font-heading font-extrabold uppercase tracking-tighter text-primary">
          Projects
        </h2>
      </motion.div>

      {/* Projects List */}
      <div className="divide-y divide-border">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-border overflow-hidden"
            >
              {/* Info Column - Progressive Scroll Slide-In */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className={`px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 flex flex-col justify-between space-y-8 ${
                  isEven
                    ? "order-2 lg:order-1 lg:border-r border-border"
                    : "order-2 lg:order-2"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest">
                      {project.number} &bull; {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-primary border border-border px-2.5 py-0.5 bg-card rounded">
                      2024
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl 2xl:text-7xl font-heading font-bold uppercase tracking-tighter text-primary mb-6">
                    {project.title}
                  </h3>

                  <p className="text-secondary text-sm md:text-base leading-relaxed font-sans mb-8 max-w-xl">
                    {project.summary}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-card border border-border text-xs font-mono font-bold text-primary rounded shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border">
                  {project.caseStudy ? (
                    <Link
                      href={`/case-study/${project.id}`}
                      className="px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-primary flex items-center gap-2 group shadow-sm"
                    >
                      <span>Read Case Study</span>
                      <Icon
                        icon="lucide:arrow-right"
                        className="text-sm group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  ) : null}

                  {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-background text-primary font-mono text-xs uppercase tracking-wider font-bold hover:bg-secondary/10 transition-colors border border-border flex items-center gap-2"
                    >
                      <Icon icon="lucide:external-link" className="text-sm" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 bg-background text-primary font-mono text-xs uppercase tracking-wider font-bold hover:bg-secondary/10 transition-colors border border-border flex items-center gap-2"
                    >
                      <Icon icon="lucide:github" className="text-base" />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* Image Column - Progressive Scroll Slide-In with Scale */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 50 : -50, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className={`relative px-5 sm:px-10 md:px-16 lg:px-24 py-8 md:py-12 flex items-center justify-center min-h-[280px] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[520px] ${
                  isEven
                    ? "order-1 lg:order-2 lg:border-r-0"
                    : "order-1 lg:order-1 lg:border-r border-border"
                }`}
              >
                <div className="relative z-10 w-full aspect-video p-2 bg-card border border-border shadow-2xl overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
