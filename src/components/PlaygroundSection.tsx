"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

export const PlaygroundSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMoveSandbox = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - 12; // half of dot width (24px / 2)
    const y = e.clientY - rect.top - 12;
    setCursorPos({ x, y });
  };

  const handleMouseLeaveSandbox = () => {
    setCursorPos(null);
  };

  const handleMouseMoveTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    setTilt({ x, y });
  };

  const handleMouseLeaveTilt = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="playground" className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-t border-border">
      <div className="space-y-16">
        {/* Title */}
        <div className="space-y-4 max-w-xl">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 05 / LABORATORY ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            Playground
          </h2>
          <p className="text-muted-foreground text-sm">
            A collection of experiments, UI motion components, shaders, and micro-interactions. Hover to interact.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experiment 1: Interactive Custom Cursor Simulator */}
          <div className="p-6 rounded-xl border border-border bg-card/40 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-muted-foreground/40 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                [ Custom Cursor ]
              </span>
              <h4 className="text-lg font-heading font-bold text-foreground mt-2">
                Elastic Follower
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div
              className="h-32 border border-border/60 rounded-lg bg-background/50 relative flex items-center justify-center overflow-hidden cursor-crosshair"
              onMouseMove={handleMouseMoveSandbox}
              onMouseLeave={handleMouseLeaveSandbox}
            >
              <div
                className="w-6 h-6 rounded-full border absolute pointer-events-none transition-all duration-150 ease-out"
                style={{
                  transform: cursorPos
                    ? `translate(${cursorPos.x}px, ${cursorPos.y}px)`
                    : "translate(0px, 0px)",
                  borderColor: cursorPos ? "var(--foreground)" : "rgba(250, 250, 250, 0.3)",
                  left: cursorPos ? 0 : "auto",
                  top: cursorPos ? 0 : "auto",
                }}
              ></div>
              {!cursorPos && (
                <span className="text-[10px] font-mono text-muted-foreground/60">
                  Hover and move mouse here
                </span>
              )}
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
              <span>GSAP + EventListener</span>
              <Icon icon="lucide:arrow-up-right" className="text-lg" />
            </div>
          </div>

          {/* Experiment 2: Interactive Glass Component */}
          <div className="p-6 rounded-xl border border-border bg-card/40 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-muted-foreground/40 transition-colors">
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                [ Glassmorphism ]
              </span>
              <h4 className="text-lg font-heading font-bold text-foreground mt-2">
                Refractive Cards
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div className="h-32 border border-border/60 rounded-lg bg-background/50 relative flex items-center justify-center overflow-hidden">
              <div className="absolute w-12 h-12 rounded-full bg-indigo-500/30 -top-4 -left-4 animate-pulse"></div>
              <div className="absolute w-16 h-16 rounded-full bg-emerald-500/20 -bottom-6 -right-6 animate-pulse delay-1000"></div>
              <div className="w-3/4 py-4 px-6 rounded-xl border border-border/10 bg-background/5 backdrop-blur-md text-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="text-xs font-mono text-foreground/80">
                  Refractive Glass
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
              <span>CSS Backdrop Filter</span>
              <Icon icon="lucide:arrow-up-right" className="text-lg" />
            </div>
          </div>

          {/* Experiment 3: Interactive 3D Card Simulator */}
          <div
            className="p-6 rounded-xl border border-border bg-card/40 flex flex-col justify-between h-80 relative overflow-hidden group hover:border-muted-foreground/40 transition-colors"
            onMouseMove={handleMouseMoveTilt}
            onMouseLeave={handleMouseLeaveTilt}
          >
            <div>
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                [ Three.js / CSS ]
              </span>
              <h4 className="text-lg font-heading font-bold text-foreground mt-2">
                Perspective Tilt
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div className="h-32 border border-border/60 rounded-lg bg-background/50 relative flex items-center justify-center overflow-hidden [perspective:500px]">
              <div
                className="w-24 h-16 rounded bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-border flex flex-col justify-between p-3 shadow-2xl transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <span className="text-[8px] font-mono text-muted-foreground">
                  Tilt Active
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-muted-foreground font-mono">
              <span>Vanilla JS Perspective</span>
              <Icon icon="lucide:arrow-up-right" className="text-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
