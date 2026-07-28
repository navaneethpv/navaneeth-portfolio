"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  const [copied, setCopied] = useState(false);
  const [inputCommand, setInputCommand] = useState("");
  const [history, setHistory] = useState<
    Array<{ type: "cmd" | "output" | "code" | "error"; content: React.ReactNode }>
  >([
    {
      type: "cmd",
      content: "npx navaneeth-portfolio welcome",
    },
    {
      type: "code",
      content: null,
    },
  ]);

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

  const handleRunCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputCommand("");
      return;
    }

    const newHistory = [...history, { type: "cmd" as const, content: cmdStr }];

    if (trimmed === "npx navaneeth-portfolio welcome" || trimmed === "welcome") {
      newHistory.push({ type: "code" as const, content: null });
    } else if (trimmed === "whoami") {
      newHistory.push({
        type: "output" as const,
        content: `${personal.name} - ${personal.tagline} based in ${personal.location}`,
      });
    } else if (trimmed === "skills" || trimmed === "stack") {
      newHistory.push({
        type: "output" as const,
        content: "Core Stack: Next.js • React • TypeScript • Tailwind CSS • Node.js • GraphQL",
      });
    } else if (trimmed === "help") {
      newHistory.push({
        type: "output" as const,
        content: "Available commands: welcome, whoami, skills, clear, help",
      });
    } else {
      newHistory.push({
        type: "error" as const,
        content: `command not found: ${cmdStr}. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInputCommand("");
  };

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    handleRunCommand(inputCommand);
  };

  return (
    <section id="hero" className="relative w-full border-b border-border overflow-hidden bg-background">
      <div className="relative w-full flex flex-col items-center justify-center pt-12 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        
        {/* Top Header Title & Script */}
        <div className="relative z-10 text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-primary border border-border px-3 py-1 bg-card inline-block mb-4">
            Developer Portfolio &bull; React &amp; Next.js
          </span>
          <h1 className="text-[11vw] md:text-[8rem] font-heading font-bold text-primary leading-none tracking-tighter uppercase">
            PORTFOLIO
            <span className="text-2xl md:text-3xl align-top">&reg;</span>
          </h1>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-6 w-full flex justify-center z-20 pointer-events-none">
            <span className="font-script text-6xl md:text-8xl text-accent drop-shadow-lg">
              {personal.name.split(" ")[0]}
            </span>
          </div>
        </div>

        {/* CLI Terminal Container */}
        <div className="w-full max-w-4xl border-2 border-primary bg-card shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] overflow-hidden transition-all">
          
          {/* Terminal Title Bar */}
          <div className="bg-primary text-primary-foreground px-4 py-2.5 flex items-center justify-between font-mono text-xs border-b border-primary select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block border border-black/20"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block border border-black/20"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block border border-black/20"></span>
              <span className="ml-2 font-bold opacity-90 hidden sm:inline-block">navaneeth@portfolio:~ (zsh)</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] bg-background/20 hover:bg-background/30 text-primary-foreground rounded transition-colors"
                title="Copy React Code Snippet"
              >
                <Icon icon={copied ? "lucide:check" : "lucide:copy"} className="text-sm" />
                <span>{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 md:p-6 font-mono text-xs md:text-sm bg-background text-foreground space-y-4 max-h-[550px] overflow-y-auto">
            
            {history.map((item, idx) => (
              <div key={idx} className="space-y-3">
                {item.type === "cmd" && (
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <span className="text-accent font-bold">&gt;</span>
                    <span className="text-secondary opacity-70">navaneeth@portfolio:~$</span>
                    <span>{item.content}</span>
                  </div>
                )}

                {item.type === "output" && (
                  <div className="pl-5 text-muted-foreground border-l-2 border-accent/40 py-1">
                    {item.content}
                  </div>
                )}

                {item.type === "error" && (
                  <div className="pl-5 text-red-500 font-mono py-1">
                    {item.content}
                  </div>
                )}

                {item.type === "code" && (
                  <div className="pl-2 md:pl-5 space-y-4 my-2">
                    {/* Code Snippet Card */}
                    <div className="border border-border bg-card p-4 rounded-md relative overflow-x-auto">
                      <div className="flex justify-between items-center pb-2 mb-3 border-b border-border text-xs text-muted-foreground">
                        <span className="flex items-center gap-2 font-bold text-accent">
                          <Icon icon="vscode-icons:file-type-typescriptofficial" className="text-base" />
                          WelcomeComponent.tsx
                        </span>
                        <span className="text-[10px] uppercase tracking-wider bg-accent/10 text-accent px-2 py-0.5 rounded">
                          React Client Component
                        </span>
                      </div>

                      <pre className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre overflow-x-auto text-foreground">
                        <code>
                          <span className="text-purple-500 font-semibold">'use client'</span>;{"\n\n"}
                          <span className="text-purple-500 font-semibold">import</span> * <span className="text-purple-500 font-semibold">as</span> React <span className="text-purple-500 font-semibold">from</span> <span className="text-emerald-500">'react'</span>;{"\n\n"}
                          <span className="text-purple-500 font-semibold">type</span> <span className="text-yellow-500 font-semibold">MyComponentProps</span> = {"{\n"}
                          {"  "}myProps: <span className="text-cyan-500 font-semibold">string</span>;{"\n"}
                          {"}"} &amp; React.ComponentProps&lt;<span className="text-emerald-500">'div'</span>&gt;;{"\n\n"}
                          <span className="text-purple-500 font-semibold">function</span> <span className="text-blue-500 font-bold">MyComponent</span>(props: <span className="text-yellow-500">MyComponentProps</span>) {"{\n"}
                          {"  "}<span className="text-purple-500 font-semibold">return</span> ({"\n"}
                          {"    "}&lt;<span className="text-accent font-semibold">div</span> {"{...props}"}&gt;{"\n"}
                          {"      "}&lt;<span className="text-accent font-semibold">p</span>&gt;<span className="text-emerald-500 font-medium">Welcome to {personal.name}'s Portfolio</span>&lt;/<span className="text-accent font-semibold">p</span>&gt;{"\n"}
                          {"    "}&lt;/<span className="text-accent font-semibold">div</span>&gt;{"\n"}
                          {"  "});{"\n"}
                          {"}"}{"\n\n"}
                          <span className="text-purple-500 font-semibold">export</span> {"{ "}MyComponent, <span className="text-purple-500 font-semibold">type</span> MyComponentProps{" }"};
                        </code>
                      </pre>
                    </div>

                    {/* Live Rendered Welcome Box */}
                    <div className="border-2 border-accent bg-accent/5 p-4 rounded-md flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span className="text-xs font-mono font-bold text-accent uppercase tracking-wider">
                            Live Component Output
                          </span>
                        </div>
                        <h3 className="text-base md:text-lg font-heading font-bold text-primary">
                          {personal.tagline}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 max-w-xl">
                          {personal.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href="#projects"
                          className="px-4 py-2 bg-primary text-primary-foreground text-xs font-mono font-bold uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-colors border border-primary"
                        >
                          View Work
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Interactive Terminal Form Input */}
            <form onSubmit={onSubmitForm} className="flex items-center gap-2 pt-2 border-t border-border/50">
              <span className="text-accent font-bold">&gt;</span>
              <span className="text-secondary opacity-70">navaneeth@portfolio:~$</span>
              <input
                type="text"
                value={inputCommand}
                onChange={(e) => setInputCommand(e.target.value)}
                placeholder="Type 'help', 'whoami', 'skills', or 'clear'..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-xs md:text-sm text-foreground placeholder:text-muted-foreground/50"
              />
              <button
                type="submit"
                className="px-2.5 py-1 text-xs font-mono bg-primary/10 hover:bg-primary/20 text-primary border border-border transition-colors rounded"
              >
                Run
              </button>
            </form>

            {/* Quick Command Suggestion Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-muted-foreground font-mono">Try commands:</span>
              {["welcome", "whoami", "skills", "clear"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleRunCommand(cmd)}
                  className="px-2 py-0.5 text-[11px] font-mono bg-secondary/10 hover:bg-accent hover:text-accent-foreground text-secondary border border-border rounded transition-all"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar inside Hero */}
      <div className="flex justify-between items-end px-6 py-4 border-t border-border bg-card/50">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 h-8">
            {[2, 1, 1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1].map((w, i) => (
              <div key={i} className={`bg-primary ${w === 2 ? "w-2" : "w-1"} h-full`}></div>
            ))}
          </div>
          <p className="text-[9px] font-mono uppercase text-secondary max-w-[200px]">
            {personal.tagline} &bull; {personal.location}
          </p>
        </div>

        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
        </div>
      </div>
    </section>
  );
};

