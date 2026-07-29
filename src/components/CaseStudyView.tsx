"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Project, PersonalInfo, InteractiveTask } from "@/data/portfolioData";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

interface CaseStudyViewProps {
  project: Project;
  personal: PersonalInfo;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({ project, personal }) => {
  const { caseStudy } = project;

  // Interactive Task state simulator
  const [tasks, setTasks] = useState<InteractiveTask[]>(caseStudy.interactiveSandbox || []);

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      
      {/* Top Global Navbar */}
      <Navbar personal={personal} isCaseStudy={true} />

      <main className="w-full">
        {/* Case Study Header / Hero */}
        <section className="w-full border-b border-border bg-background pt-12 pb-16 px-5 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto space-y-10">
            
            {/* Top Pill Category Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary border border-border px-4 py-1.5 bg-card rounded-full shadow-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Case Study &bull; {caseStudy.breadcrumbCategory}</span>
              </div>

              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-primary hover:text-accent transition-colors"
              >
                <Icon icon="lucide:arrow-left" className="text-sm" />
                <span>Back to All Work</span>
              </Link>
            </div>

            {/* Main Title & Key Metric 2-Column Lockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-8 space-y-6">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl font-heading font-extrabold tracking-tighter leading-none text-primary uppercase">
                  {project.title}
                </h1>
                <p className="text-base md:text-xl text-secondary max-w-2xl leading-relaxed font-sans">
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-card border border-border text-xs font-mono font-bold text-primary rounded-sm shadow-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Metric Brutalist Card */}
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <div className="p-6 md:p-7 border-2 border-primary bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] rounded-md space-y-3 w-full max-w-sm">
                  <span className="text-[10px] font-mono text-secondary uppercase tracking-widest font-bold block border-b border-border pb-2">
                    Key Metric Achieved
                  </span>
                  <div className="text-4xl md:text-5xl font-heading font-extrabold text-primary">
                    {caseStudy.keyMetric.value}
                  </div>
                  <p className="text-xs text-secondary leading-relaxed font-sans">
                    {caseStudy.keyMetric.label}
                  </p>
                </div>
              </div>
            </div>

            {/* Metadata Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t-2 border-border">
              <div>
                <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest font-bold">
                  Role
                </span>
                <span className="text-base font-heading font-bold text-primary">
                  {caseStudy.role}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest font-bold">
                  Timeline
                </span>
                <span className="text-base font-heading font-bold text-primary">
                  {caseStudy.timeline}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest font-bold">
                  Client / Company
                </span>
                <span className="text-base font-heading font-bold text-primary">
                  {caseStudy.client}
                </span>
              </div>
              <div>
                <span className="block text-[10px] font-mono text-secondary uppercase tracking-widest font-bold">
                  Deliverables
                </span>
                <span className="text-base font-heading font-bold text-primary">
                  {caseStudy.deliverables}
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Large Immersive Mockup Image Section */}
        <section className="w-full border-b border-border bg-card/30 py-12 md:py-16 px-5 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 w-full aspect-video border-2 border-primary bg-card p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.15)] rounded-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                priority
                className="object-cover rounded-sm transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="w-full border-b border-border bg-background">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
            {/* Challenge */}
            <div className="p-6 md:p-12 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-accent border border-accent/30 px-3 py-1 bg-accent/10 rounded-full inline-block">
                01 &bull; The Challenge
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tighter text-primary">
                {caseStudy.challenge.title}
              </h2>
              <div className="space-y-4">
                {caseStudy.challenge.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-secondary text-sm md:text-base leading-relaxed font-sans">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="p-6 md:p-12 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 px-3 py-1 bg-emerald-500/10 rounded-full inline-block">
                02 &bull; The Solution
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold uppercase tracking-tighter text-primary">
                {caseStudy.solution.title}
              </h2>
              <div className="space-y-4">
                {caseStudy.solution.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-secondary text-sm md:text-base leading-relaxed font-sans">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Code & Implementation Section */}
        {caseStudy.codeSnippet && (
          <section className="w-full border-b border-border bg-background py-16 px-5 sm:px-10 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-3.5 py-1.5 bg-card rounded-full inline-block font-bold">
                  03 &bull; Implementation &amp; Architecture
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tighter text-primary">
                  Interactive Implementation
                </h2>
              </div>

              {/* 2-Column Code & Sandbox Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Interactive Sandbox (Left) */}
                {tasks.length > 0 && (
                  <div className="lg:col-span-6 border-2 border-primary bg-card p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] rounded-md flex flex-col justify-between space-y-6">
                    <div className="flex items-center justify-between border-b border-border pb-4">
                      <span className="text-xs font-mono font-bold uppercase text-primary">
                        State Simulation Sandbox
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase">
                          Engine Active
                        </span>
                      </div>
                    </div>

                    {/* Task List Simulator */}
                    <div className="space-y-3">
                      {tasks.map((task) => (
                        <div
                          key={task.id}
                          className="p-4 rounded border-2 border-border bg-background flex items-center justify-between group hover:border-primary transition-all"
                        >
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => toggleTask(task.id)}
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                                task.completed
                                  ? "bg-primary border-primary"
                                  : "border-border hover:bg-card"
                              }`}
                            >
                              {task.completed && (
                                <Icon
                                  icon="lucide:check"
                                  className="text-xs text-primary-foreground"
                                />
                              )}
                            </button>
                            <span
                              className={`text-xs font-mono font-bold ${
                                task.completed
                                  ? "line-through text-muted-foreground"
                                  : "text-primary"
                              }`}
                            >
                              {task.title}
                            </span>
                          </div>
                          <span className="px-2 py-0.5 rounded bg-card border border-border text-[9px] font-mono text-secondary uppercase font-bold">
                            {task.priority}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[10px] text-muted-foreground font-mono">
                      * Click checkboxes above to test optimistic state update mechanics.
                    </p>
                  </div>
                )}

                {/* Code Snippet Box (Right) */}
                <div className={`${tasks.length > 0 ? "lg:col-span-6" : "lg:col-span-12"} border-2 border-primary bg-card shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] rounded-md overflow-hidden flex flex-col justify-between`}>
                  <div className="bg-primary text-primary-foreground px-4 py-3 border-b border-primary flex items-center justify-between font-mono text-xs select-none">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black/20"></span>
                      <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block border border-black/20"></span>
                      <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black/20"></span>
                      <span className="ml-2 font-bold opacity-90">{caseStudy.codeSnippet.filename}</span>
                    </div>
                  </div>
                  <pre className="p-5 text-xs text-foreground font-mono overflow-x-auto leading-relaxed bg-background flex-1">
                    <code>{caseStudy.codeSnippet.code}</code>
                  </pre>
                </div>

              </div>
            </div>
          </section>
        )}

        {/* Key Features Grid Section */}
        {caseStudy.keyFeatures && caseStudy.keyFeatures.length > 0 && (
          <section className="w-full border-b border-border bg-background py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-3.5 py-1.5 bg-card rounded-full inline-block font-bold">
                  04 &bull; Key Features
                </span>
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold uppercase tracking-tighter text-primary">
                  Core Highlights
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {caseStudy.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-6 md:p-8 rounded-md bg-card border-2 border-border/80 hover:border-primary transition-all space-y-4 shadow-xs"
                  >
                    <div className="w-12 h-12 rounded bg-background border border-border flex items-center justify-center text-primary">
                      <Icon icon={feat.icon} className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-primary">
                      {feat.title}
                    </h3>
                    <p className="text-secondary text-xs md:text-sm leading-relaxed font-sans">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Next Case Study Navigation CTA */}
        {caseStudy.nextCaseStudySlug && (
          <section className="w-full bg-card py-20 px-6 border-b border-border text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-4 py-1.5 bg-background rounded-full inline-block font-bold">
                Up Next Case Study
              </span>
              
              <Link
                href={`/case-study/${caseStudy.nextCaseStudySlug}`}
                className="block group space-y-4"
              >
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tighter text-primary group-hover:text-accent transition-colors uppercase">
                  {caseStudy.nextCaseStudyTitle}
                </h2>
                
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 border border-primary">
                  <span>Explore Case Study</span>
                  <Icon
                    icon="lucide:arrow-right"
                    className="text-sm group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <Footer personal={personal} isCaseStudy={true} />

    </div>
  );
};

