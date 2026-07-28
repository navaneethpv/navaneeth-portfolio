"use client";

import React from "react";
import { PersonalInfo } from "@/data/portfolioData";

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  return (
    <section id="about" className="w-full border-b border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-border">
        {/* Left side: Bio & Info */}
        <div className="p-8 md:p-12 space-y-12 relative overflow-hidden">
          <h2 className="text-6xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-primary relative z-10">
            {personal.bioTitle}
          </h2>

          <div className="space-y-6 text-sm md:text-base text-secondary leading-relaxed font-sans max-w-2xl relative z-10">
            {personal.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
          
          <ul className="space-y-4 text-xs uppercase tracking-widest text-primary font-mono pt-8 border-t border-border">
            {personal.competencies.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="w-1 h-1 bg-accent rounded-full shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side: Image & Quick Details */}
        <div className="p-8 md:p-12 relative flex items-center justify-center min-h-[500px]">
          {/* Decorative Red Circle */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-48 md:h-48 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-0 mix-blend-multiply"></div>
          
          <div className="relative z-10 w-full max-w-lg aspect-3/4 border border-border p-2 bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personal.bioImage}
              alt="Workspace"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          <div className="absolute bottom-8 right-8 text-right z-20">
            <span className="font-script text-6xl md:text-8xl text-accent -rotate-12 inline-block">
              About
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
