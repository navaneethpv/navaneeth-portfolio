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
    <section id="playground" className="w-full px-6 py-32 md:py-48 max-w-7xl mx-auto border-t border-border">
      <div className="space-y-24">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <div className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 06 / LABORATORY ]
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
              Playground
            </h2>
          </div>
          <p className="text-secondary text-sm max-w-sm leading-relaxed font-sans font-light">
            A collection of experiments and UI motion components. Hover to interact.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Experiment 1 */}
          <div className="p-6 bg-card border border-border flex flex-col justify-between h-80 relative group">
            <div>
              <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
                [ Custom Cursor ]
              </span>
              <h4 className="text-lg font-heading font-medium text-primary mt-4">
                Elastic Follower
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div
              className="h-32 border border-border bg-background relative flex items-center justify-center overflow-hidden cursor-crosshair"
              onMouseMove={handleMouseMoveSandbox}
              onMouseLeave={handleMouseLeaveSandbox}
            >
              <div
                className="w-6 h-6 rounded-full border border-primary absolute pointer-events-none transition-all duration-150 ease-out"
                style={{
                  transform: cursorPos
                    ? `translate(${cursorPos.x}px, ${cursorPos.y}px)`
                    : "translate(0px, 0px)",
                  left: cursorPos ? 0 : "auto",
                  top: cursorPos ? 0 : "auto",
                  opacity: cursorPos ? 1 : 0.3,
                }}
              ></div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-secondary font-mono uppercase tracking-widest pt-4 border-t border-border/50">
              <span>GSAP + JS</span>
              <Icon icon="lucide:arrow-up-right" className="text-sm" />
            </div>
          </div>

          {/* Experiment 2 */}
          <div className="p-6 bg-card border border-border flex flex-col justify-between h-80 relative group">
            <div>
              <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
                [ Micro-interactions ]
              </span>
              <h4 className="text-lg font-heading font-medium text-primary mt-4">
                Refined Hover States
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div className="h-32 border border-border bg-background relative flex items-center justify-center overflow-hidden">
              <button className="px-6 py-3 border border-primary bg-primary text-primary-foreground text-xs font-mono uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300">
                Hover Me
              </button>
            </div>

            <div className="flex justify-between items-center text-[10px] text-secondary font-mono uppercase tracking-widest pt-4 border-t border-border/50">
              <span>CSS Transitions</span>
              <Icon icon="lucide:arrow-up-right" className="text-sm" />
            </div>
          </div>

          {/* Experiment 3: Interactive 3D Card Simulator */}
          <div
            className="p-6 bg-card border border-border flex flex-col justify-between h-80 relative group"
            onMouseMove={handleMouseMoveTilt}
            onMouseLeave={handleMouseLeaveTilt}
          >
            <div>
              <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
                [ 3D Transform ]
              </span>
              <h4 className="text-lg font-heading font-medium text-primary mt-4">
                Perspective Tilt
              </h4>
            </div>

            {/* Interactive Preview Area */}
            <div className="h-32 border border-border bg-background relative flex items-center justify-center overflow-hidden perspective-normal">
              <div
                className="w-24 h-32 bg-primary flex flex-col justify-end p-3 transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                <span className="text-[8px] font-mono text-primary-foreground uppercase tracking-widest">
                  Active
                </span>
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] text-secondary font-mono uppercase tracking-widest pt-4 border-t border-border/50">
              <span>Vanilla JS</span>
              <Icon icon="lucide:arrow-up-right" className="text-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
