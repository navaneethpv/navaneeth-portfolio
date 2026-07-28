"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  const [tasks, setTasks] = useState<InteractiveTask[]>(caseStudy.interactiveSandbox);

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="absolute inset-0 bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[linear-gradient(to_right,#E5E7EB_1px,transparent_1px),linear-gradient(to_bottom,#E5E7EB_1px,transparent_1px)] opacity-60 pointer-events-none z-0"></div>

      <div className="mx-[5%] lg:mx-[20%]">
        {/* Navbar */}
        <Navbar personal={personal} isCaseStudy={true} />

        {/* Case Study Header / Hero */}
        <header className="relative w-full px-6 pt-16 pb-12 md:pt-24 md:pb-20 space-y-12">
          {/* Breadcrumb / Meta */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-muted-foreground">[ CASE STUDY ]</span>
            <div className="w-full h-px bg-border my-6"></div>
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
              {caseStudy.breadcrumbCategory}
            </span>
          </div>

          {/* Title and Subtitle */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black tracking-tighter leading-none text-foreground">
                {project.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Quick Metrics */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-6 rounded-xl bento-card space-y-2 w-full max-w-xs">
                <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  Key Metric Achieved
                </span>
                <div className="text-4xl font-heading font-black text-foreground">
                  {caseStudy.keyMetric.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  {caseStudy.keyMetric.label}
                </p>
              </div>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border/60">
            <div>
              <span className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Role
              </span>
              <span className="text-sm font-semibold text-foreground">
                {caseStudy.role}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Timeline
              </span>
              <span className="text-sm font-semibold text-foreground">
                {caseStudy.timeline}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Client / Company
              </span>
              <span className="text-sm font-semibold text-foreground">
                {caseStudy.client}
              </span>
            </div>
            <div>
              <span className="block text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                Deliverables
              </span>
              <span className="text-sm font-semibold text-foreground">
                {caseStudy.deliverables}
              </span>
            </div>
          </div>
        </header>

        {/* Large Immersive Mockup Image */}
        <section className="w-full px-6 pb-20">
          <div className="relative rounded-2xl bento-card overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover grayscale contrast-125 brightness-90 opacity-90 transition-opacity duration-700 hover:opacity-100"
            />
          </div>
        </section>

        {/* Challenge & Solution Section */}
        <section className="w-full px-6 py-20 border-t border-border grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Challenge */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              [ 01 / THE CHALLENGE ]
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              {caseStudy.challenge.title}
            </h2>
            {caseStudy.challenge.paragraphs.map((para, idx) => (
              <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* Solution */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              [ 02 / THE SOLUTION ]
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              {caseStudy.solution.title}
            </h2>
            {caseStudy.solution.paragraphs.map((para, idx) => (
              <p key={idx} className="text-muted-foreground text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* Interactive Code / Design Snippet Showcase */}
        <section className="w-full px-6 py-20 border-t border-border space-y-12">
          <div className="space-y-4 max-w-xl">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              [ 03 / IMPLEMENTATION ]
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              Interactive State Engine
            </h2>
            <p className="text-muted-foreground text-sm">
              Below is a simulated view of our optimistic state engine. Toggle the task state to see how the local cache updates instantly while the backend syncs.
            </p>
          </div>

          {/* Interactive Component Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Interactive Sandbox (Left) */}
            <div className="lg:col-span-6 p-6 rounded-xl bento-card flex flex-col justify-between space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">
                  State Simulation Sandbox
                </span>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    Sync Engine Live
                  </span>
                </div>
              </div>

              {/* Task List Simulator */}
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 rounded-lg border border-border bg-background flex items-center justify-between group hover:border-muted-foreground/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => toggleTask(task.id)}
                        className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                          task.completed
                            ? "bg-primary border-primary"
                            : "border-border hover:bg-muted"
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
                        className={`text-xs font-medium ${
                          task.completed
                            ? "line-through text-muted-foreground"
                            : "text-foreground"
                        }`}
                      >
                        {task.title}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-muted text-[9px] font-mono text-muted-foreground uppercase">
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-muted-foreground font-mono">
                * Click on the checkboxes above to simulate optimistic state mutations.
              </p>
            </div>

            {/* Code Snippet (Right) */}
            <div className="lg:col-span-6 rounded-xl bento-card overflow-hidden flex flex-col">
              <div className="bg-background/80 px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  {caseStudy.codeSnippet.filename}
                </span>
              </div>
              <pre className="p-6 text-xs text-muted-foreground font-mono overflow-x-auto leading-relaxed bg-background/30 flex-1">
                <code>{caseStudy.codeSnippet.code}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="w-full px-6 py-20 border-t border-border space-y-16">
          <div className="space-y-4 max-w-xl">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              [ 04 / KEY FEATURES ]
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-foreground">
              Built for power users.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.keyFeatures.map((feat, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-12 h-12 rounded-lg bento-card flex items-center justify-center text-foreground">
                  <Icon icon={feat.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground">
                  {feat.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Next Case Study Link */}
        <section className="bento-card py-24 px-6 border-x-0 border-b-0 rounded-none rounded-t-3xl border-t-white/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
              [ UP NEXT ]
            </span>
            <Link
              href={`/case-study/${caseStudy.nextCaseStudySlug}`}
              className="block group"
            >
              <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground group-hover:text-muted-foreground transition-colors">
                {caseStudy.nextCaseStudyTitle}
              </h2>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors mt-4">
                Read Next Case Study
                <Icon
                  icon="lucide:arrow-right"
                  className="text-sm group-hover:translate-x-1 transition-transform"
                />
              </div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer personal={personal} isCaseStudy={true} />
      </div>
    </div>
  );
};
