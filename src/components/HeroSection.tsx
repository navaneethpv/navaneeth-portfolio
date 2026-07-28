"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative w-full px-6 pt-16 pb-24 md:pt-24 md:pb-36 flex flex-col justify-between"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side: Headline & CTAs */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">
              {personal.tagline}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tighter leading-none text-foreground">
            {personal.titleLines[0]}
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground via-muted-foreground to-foreground/40">
              {personal.titleLines[1]}
            </span>
            <br />
            {personal.titleLines[2]}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed font-sans">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-4">
            <a
              href="#projects"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-xs uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-lg shadow-white/5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="h-12 px-8 inline-flex items-center justify-center rounded-full border border-border text-xs uppercase tracking-widest font-medium hover:bg-card hover:border-muted-foreground transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side: Portrait Image Container */}
        <div className="lg:col-span-5 relative flex justify-center">
          {/* Background decorative elements */}
          <div className="absolute -inset-4 bg-linear-to-tr from-primary/10 to-transparent rounded-4xl blur-2xl opacity-30 pointer-events-none"></div>


          <div className="relative w-full max-w-md aspect-4/5 rounded-2xl bento-card overflow-hidden group transition-all duration-500 hover:scale-[1.02]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personal.portraitImage}
              alt={personal.name}
              className="w-full h-full object-cover grayscale contrast-125 brightness-90 group-hover:scale-105 transition-transform duration-700"
            />

            {/* Editorial Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-mono">
                  Based in
                </p>
                <p className="text-sm font-heading font-bold text-foreground">
                  {personal.location}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full border border-border bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground">
                <Icon
                  icon="lucide:globe"
                  className="text-base animate-spin-[spin_8s_linear_infinite]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center gap-4 pt-16 md:pt-24 border-b border-border pb-8">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Scroll to explore
          </span>
          <Icon
            icon="lucide:arrow-down"
            className="text-muted-foreground text-sm animate-bounce"
          />
        </div>
        <div className="w-8 h-px bg-border"></div>
        <div className="flex gap-6 text-xs font-mono text-muted-foreground">
          <span>[ {personal.versionTag} ]</span>
          <span>[ {personal.accoladeTag} ]</span>
        </div>
      </div>
    </section>
  );
};
