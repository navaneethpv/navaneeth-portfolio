"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { PersonalInfo } from "@/data/portfolioData";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  const [copied, setCopied] = useState(false);
  const [inputCommand, setInputCommand] = useState("npx navaneeth-portfolio welcome");
  const [isRunning, setIsRunning] = useState(false);
  const [hasExecuted, setHasExecuted] = useState(true);
  const [executionCount, setExecutionCount] = useState(1);
  const [lastCommand, setLastCommand] = useState("welcome");

  const rawCodeSnippet = `'use client';

import * as React from 'react';

type MyComponentProps = {
  myProps: string;
} & React.ComponentProps<'div'>;

function MyComponent(props: MyComponentProps) {
  return (
    <div {...props}>
      <p>My Component</p>
    </div>
  );
}

export { MyComponent, type MyComponentProps };`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawCodeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setIsRunning(true);
    setLastCommand(trimmed);

    setTimeout(() => {
      setIsRunning(false);
      setHasExecuted(true);
      setExecutionCount((prev) => prev + 1);
    }, 350);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputCommand);
  };

  return (
    <section id="hero" className="relative w-full border-b border-border overflow-hidden bg-background">
      <div className="relative w-full max-w-7xl mx-auto pt-12 pb-20 px-8 sm:px-14 md:px-20 lg:px-24 space-y-12">
        
        {/* Top Centered Header & Script Overlay */}
        <div className="flex flex-col items-center text-center w-full relative z-10">
          <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-4 py-1.5 bg-card rounded-full mb-6 inline-flex items-center gap-2 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Developer Portfolio
          </span>

          {/* Layered Title & Script Name Below */}
          <div className="relative flex flex-col items-center">
            <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] xl:text-[11rem] 2xl:text-[12rem] font-heading font-extrabold text-primary leading-none tracking-tighter uppercase select-none">
              PORTFOLIO<span className="text-xl sm:text-2xl md:text-4xl text-accent align-top">&reg;</span>
            </h1>
            <span className="font-script text-4xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl text-accent -mt-2 sm:-mt-6 md:-mt-8 lg:-mt-10 z-20 pointer-events-none -rotate-3 leading-none drop-shadow-sm">
              {personal.name}
            </span>
          </div>
        </div>

        {/* 2-Column Grid: Left Terminal (6 cols), Right Output Card (6 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: CLI Code Editor Window (6 cols) */}
          <div className="lg:col-span-6 w-full border-2 border-primary bg-card shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] rounded-md overflow-hidden flex flex-col justify-between">
            
            <div>
              {/* Terminal Title Bar */}
              <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between font-mono text-xs border-b border-primary select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black/20"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block border border-black/20"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black/20"></span>
                  <span className="ml-2 font-bold opacity-90 flex items-center gap-1.5 text-xs">
                    <Icon icon="vscode-icons:file-type-typescriptofficial" className="text-base" />
                    WelcomeComponent.tsx
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 px-2.5 py-1 text-[11px] bg-background/20 hover:bg-background/30 text-primary-foreground rounded transition-colors font-mono"
                    title="Copy Code Snippet"
                  >
                    <Icon icon={copied ? "lucide:check" : "lucide:copy"} className="text-sm" />
                    <span className="hidden sm:inline">{copied ? "Copied!" : "Copy"}</span>
                  </button>

                  <button
                    onClick={() => executeCommand(inputCommand)}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-3 py-1 text-[11px] bg-accent text-accent-foreground font-bold rounded hover:opacity-90 transition-opacity font-mono shadow-xs"
                  >
                    <Icon icon={isRunning ? "lucide:loader-2" : "lucide:play"} className={`text-sm ${isRunning ? "animate-spin" : ""}`} />
                    <span>{isRunning ? "Running..." : "Run"}</span>
                  </button>
                </div>
              </div>

              {/* Code Snippet Editor Content */}
              <div className="p-4 md:p-5 font-mono text-xs md:text-sm bg-background text-foreground overflow-x-auto border-b border-border">
                <pre className="leading-relaxed whitespace-pre overflow-x-auto text-foreground">
                  <code>
                    <span className="text-purple-500 font-semibold">&apos;use client&apos;</span>;{"\n\n"}
                    <span className="text-purple-500 font-semibold">import</span> * <span className="text-purple-500 font-semibold">as</span> React <span className="text-purple-500 font-semibold">from</span> <span className="text-emerald-500">&apos;react&apos;</span>;{"\n\n"}
                    <span className="text-purple-500 font-semibold">type</span> <span className="text-yellow-500 font-semibold">MyComponentProps</span> = {"{\n"}
                    {"  "}myProps: <span className="text-cyan-500 font-semibold">string</span>;{"\n"}
                    {"}"} &amp; React.ComponentProps&lt;<span className="text-emerald-500">&apos;div&apos;</span>&gt;;{"\n\n"}
                    <span className="text-purple-500 font-semibold">function</span> <span className="text-blue-500 font-bold">MyComponent</span>(props: <span className="text-yellow-500">MyComponentProps</span>) {"{\n"}
                    {"  "}<span className="text-purple-500 font-semibold">return</span> ({"\n"}
                    {"    "}&lt;<span className="text-accent font-semibold">div</span> {"{...props}"}&gt;{"\n"}
                    {"      "}&lt;<span className="text-accent font-semibold">p</span>&gt;<span className="text-emerald-500 font-medium">Welcome to {personal.name}&apos;s Portfolio</span>&lt;/<span className="text-accent font-semibold">p</span>&gt;{"\n"}
                    {"    "}&lt;/<span className="text-accent font-semibold">div</span>&gt;{"\n"}
                    {"  "});{"\n"}
                    {"}"}{"\n\n"}
                    <span className="text-purple-500 font-semibold">export</span> {"{ "}MyComponent, <span className="text-purple-500 font-semibold">type</span> MyComponentProps{" }"};
                  </code>
                </pre>
              </div>
            </div>

            {/* Interactive Command Form inside Terminal */}
            <div className="bg-card p-3 md:p-4 font-mono text-xs md:text-sm">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <span className="text-accent font-bold text-sm">&gt;</span>
                <span className="text-secondary opacity-70 font-semibold hidden sm:inline">
                  navaneeth@portfolio:~$
                </span>
                <input
                  type="text"
                  value={inputCommand}
                  onChange={(e) => setInputCommand(e.target.value)}
                  placeholder="Type command and press Enter..."
                  className="flex-1 min-w-0 bg-transparent outline-none font-mono text-base sm:text-xs text-foreground placeholder:text-muted-foreground/60 px-1 py-1"
                />
                <button
                  type="submit"
                  disabled={isRunning}
                  className="px-3 py-1.5 text-xs font-mono font-bold bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground border border-primary transition-colors rounded-sm flex items-center gap-1.5 shrink-0"
                >
                  {isRunning ? (
                    <Icon icon="lucide:loader-2" className="animate-spin text-xs" />
                  ) : (
                    <Icon icon="lucide:corner-down-left" className="text-xs" />
                  )}
                  <span>Enter &crarr;</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Animated Rendered Component Output Card (6 cols) */}
          <div className="lg:col-span-6 w-full flex flex-col">
            <AnimatePresence mode="wait">
              {hasExecuted && (
                <motion.div
                  key={executionCount}
                  initial={{ opacity: 0, x: 30, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -20, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full"
                >
                  <div className="w-full h-full border-2 border-primary bg-card p-6 md:p-7 rounded-md shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.15)] flex flex-col justify-between gap-6 relative overflow-hidden">
                    
                    {/* Header Output Status Bar */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-border">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                          Component Rendered (200 OK)
                        </span>
                      </div>

                      <span className="text-[10px] font-mono text-muted-foreground bg-background border border-border px-2.5 py-0.5 rounded">
                        Command: <code className="text-primary font-bold">{lastCommand}</code>
                      </span>
                    </div>

                    {/* Main Rendered Output Content */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        <Icon icon="lucide:code-2" className="text-sm" />
                        <span>{personal.name}&apos;s Space</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-primary leading-snug">
                        {personal.tagline}
                      </h2>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                        {personal.description}
                      </p>

                      {/* Tech Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Node.js"].map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-background border border-border text-[11px] font-mono font-semibold text-secondary rounded shadow-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <a
                        href="#projects"
                        className="px-5 py-3 bg-primary text-primary-foreground font-mono text-xs uppercase tracking-wider font-bold hover:bg-accent hover:text-accent-foreground transition-all duration-300 border border-primary flex items-center justify-between group shadow-sm text-center"
                      >
                        <span>Explore Work</span>
                        <Icon icon="lucide:arrow-right" className="text-sm group-hover:translate-x-1 transition-transform" />
                      </a>

                      <a
                        href="#contact"
                        className="px-5 py-3 bg-background text-primary font-mono text-xs uppercase tracking-wider font-bold hover:bg-secondary/10 transition-colors border border-border text-center"
                      >
                        Get In Touch
                      </a>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};





