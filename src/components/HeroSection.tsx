"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  return (
    <section id="hero" className="relative w-full border-b border-border overflow-hidden">
      {/* Top Bar inside Hero */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-border text-xs font-mono uppercase tracking-widest text-primary">
        <div>{personal.name}</div>
        <div className="border border-border px-3 py-1 rounded-full">{new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</div>
      </div>

      <div className="relative w-full min-h-[70vh] flex flex-col items-center justify-center py-20">
        
        {/* Giant Title */}
        <div className="relative z-10 text-center">
          <h1 className="text-[12vw] md:text-[10rem] font-heading font-bold text-primary leading-none tracking-tighter uppercase">
            PORTFOLIO
            <span className="text-3xl align-top">&reg;</span>
          </h1>
          
          {/* Red Script Overlay */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12 w-full flex justify-center mt-8 z-20 pointer-events-none">
            <span className="font-script text-7xl md:text-9xl text-accent drop-shadow-md">
              {personal.name.split(' ')[0]}
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Bar inside Hero */}
      <div className="flex justify-between items-end px-6 py-4">
        {/* Fake barcode / small text */}
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 h-8">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`bg-primary w-${Math.floor(Math.random() * 2) + 1} h-full`}></div>
            ))}
          </div>
          <p className="text-[9px] font-mono uppercase text-secondary max-w-[200px]">
            {personal.tagline} • {personal.location}
          </p>
        </div>

        {/* 3 Red Dots */}
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <div className="w-2 h-2 rounded-full bg-accent"></div>
        </div>
      </div>
    </section>
  );
};
