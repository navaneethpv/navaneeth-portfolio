"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface HeroSectionProps {
  personal: PersonalInfo;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal }) => {
  return (
    <section
      id="hero"
      className="relative w-full px-6 pt-32 pb-24 md:pt-48 md:pb-36 flex flex-col justify-between max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
        {/* Left side: Headline & CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-10"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-secondary">
              {personal.tagline}
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-heading font-light tracking-tight leading-[0.9] text-primary">
            {personal.titleLines[0]}
            <br />
            <span className="text-secondary italic">
              {personal.titleLines[1]}
            </span>
            <br />
            {personal.titleLines[2]}
          </h1>

          <p className="text-lg md:text-xl text-secondary max-w-xl leading-relaxed font-sans font-light">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-8 items-center pt-6">
            <a
              href="#projects"
              className="h-14 px-10 inline-flex items-center justify-center bg-primary text-primary-foreground font-sans font-medium text-sm tracking-wide hover:bg-primary/90 transition-colors shadow-sm"
            >
              View Selected Works
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-sans font-medium tracking-wide text-primary hover:text-accent transition-colors"
            >
              Get in Touch
              <Icon icon="lucide:arrow-right" className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        {/* Right side: Portrait Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-sm p-3 bg-card border border-border shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)]">
            <div className="relative aspect-4/5 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personal.portraitImage}
                alt={personal.name}
                className="w-full h-full object-cover grayscale-20 transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 shadow-sm flex items-center gap-3">
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-secondary font-mono mb-1">
                  Operating From
                </p>
                <p className="text-sm font-sans font-medium text-primary">
                  {personal.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center justify-between pt-32 mt-12 border-t border-border">
        <div className="flex items-center gap-3 text-secondary">
          <span className="text-[10px] font-mono uppercase tracking-widest">
            Scroll to explore
          </span>
          <Icon
            icon="lucide:arrow-down"
            className="text-xs animate-bounce"
          />
        </div>
        <div className="flex gap-8 text-[10px] font-mono text-secondary uppercase tracking-widest">
          <span>{personal.versionTag}</span>
          <span>{personal.accoladeTag}</span>
        </div>
      </div>
    </section>
  );
};
