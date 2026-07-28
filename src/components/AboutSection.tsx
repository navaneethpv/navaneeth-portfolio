"use client";

import React from "react";
import { PersonalInfo } from "@/data/portfolioData";
import { motion } from "framer-motion";

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  return (
    <section id="about" className="w-full px-6 py-32 md:py-48 border-t border-border max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left side: Bio & Info */}
        <div className="lg:col-span-7 space-y-12">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              [ 02 / BIOGRAPHY ]
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-light tracking-tight text-primary">
            {personal.bioTitle}
          </h2>

          <div className="space-y-6 text-base md:text-lg text-secondary leading-relaxed font-sans font-light">
            {personal.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Statistics text-list */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-12 border-t border-border/50">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <span className="block text-4xl font-heading font-light text-primary">
                  {stat.value}
                </span>
                <span className="block text-[10px] uppercase tracking-widest text-secondary font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Image & Quick Details */}
        <div className="lg:col-span-5 space-y-12">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full aspect-4/3 p-2 bg-card border border-border shadow-sm overflow-hidden"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={personal.bioImage}
              alt="Workspace"
              className="w-full h-full object-cover grayscale-15 object-center transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <div className="pt-8 border-t border-border/50">
            <h4 className="text-xs uppercase tracking-widest text-primary font-mono mb-6">
              Core Competencies
            </h4>
            <ul className="space-y-4 text-sm text-secondary font-sans font-light">
              {personal.competencies.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1 h-1 bg-primary rounded-full shrink-0"></span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
