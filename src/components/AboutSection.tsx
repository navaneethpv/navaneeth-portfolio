"use client";

import React from "react";
import { PersonalInfo } from "@/data/portfolioData";

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  return (
    <section id="about" className="w-full px-6 py-24 md:py-32 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left side: Bio & Info */}
        <div className="lg:col-span-7 space-y-8">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            [ 02 / BIOGRAPHY ]
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-black tracking-tighter text-foreground">
            {personal.bioTitle}
          </h2>

          <div className="space-y-6 text-base text-muted-foreground leading-relaxed font-sans">
            {personal.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {personal.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bento-card"
              >
                <span className="block text-3xl font-heading font-black text-foreground">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Image & Quick Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative w-full aspect-4/3 rounded-2xl bento-card overflow-hidden group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personal.bioImage}
              alt="Workspace"
              className="w-full h-full object-cover grayscale contrast-110 object-center"
            />
          </div>

          <div className="p-6 rounded-xl bento-card space-y-4">
            <h4 className="text-sm font-heading font-bold text-foreground">
              Core Competencies
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-mono">
              {personal.competencies.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
