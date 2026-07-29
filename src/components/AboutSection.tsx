"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { PersonalInfo } from "@/data/portfolioData";

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const photoRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!photoRef.current) return;
    const rect = photoRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="about" className="w-full border-b border-border bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-border">
        
        {/* Left side: Bio, Stats & Competencies Grid (7 cols) */}
        <div className="lg:col-span-7 px-8 sm:px-14 md:px-20 lg:px-24 py-8 sm:py-12 md:py-16 space-y-10">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary border border-border px-3.5 py-1.5 bg-card rounded-full shadow-xs font-bold"
          >
            <span>01 &bull; Biography &amp; Focus</span>
          </motion.div>

          {/* Heading & Subtitle */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-2"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-extrabold uppercase tracking-tighter text-primary">
              {personal.bioTitle}
            </h2>
            <p className="text-sm font-mono text-accent uppercase tracking-wider font-bold">
              Frontend Developer &bull; Building Pixel-Perfect Digital Experiences
            </p>
          </motion.div>

          {/* Bio Text Paragraphs - Staggered Scroll Slide-In */}
          <div className="space-y-4 text-sm sm:text-base text-secondary leading-relaxed font-sans max-w-2xl">
            {personal.bioParagraphs.map((para, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-l-2 border-primary/20 pl-4 py-0.5"
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Quick Stats Grid - Staggered Scroll Reveal */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border">
            {personal.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="p-3.5 bg-card border border-border rounded-md shadow-xs flex flex-col justify-between"
              >
                <span className="text-2xl sm:text-3xl font-heading font-extrabold text-primary">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono text-secondary uppercase tracking-widest font-bold mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Engineering Principles & Core Strengths - Progressive Scroll Cards */}
          <div className="space-y-4 pt-6 border-t border-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-between"
            >
              <h3 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Core Strengths &amp; Principles
              </h3>
              <span className="text-[10px] font-mono text-muted-foreground">
                6 PRINCIPLES
              </span>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: "Clean Code Architecture", desc: "Modular, typed & maintainable React codebases", icon: "lucide:code-2" },
                { title: "Responsive & Mobile-First", desc: "Fluid layouts for desktop, tablet & mobile devices", icon: "lucide:smartphone" },
                { title: "UI/UX Precision", desc: "Pixel-perfect implementation of Figma designs", icon: "lucide:palette" },
                { title: "API Integration", desc: "Seamless REST backend data fetching & state management", icon: "lucide:arrow-right-left" },
                { title: "Performance Optimization", desc: "Fast load times, asset optimization & zero layout shifts", icon: "lucide:zap" },
                { title: "Continuous Learning", desc: "Expanding full-stack backend skills with Node.js & MongoDB", icon: "lucide:sparkles" },
              ].map((item, idx) => {
                const numStr = String(idx + 1).padStart(2, "0");
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 25, x: -20 }}
                    whileInView={{ opacity: 1, y: 0, x: 0 }}
                    viewport={{ amount: 0.2 }}
                    transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="p-3 bg-card border border-border rounded-md hover:border-primary transition-all flex items-start gap-3 group shadow-xs"
                  >
                    <span className="text-[10px] font-mono text-muted-foreground font-bold mt-0.5">
                      {numStr}
                    </span>
                    <div className="space-y-1 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-primary group-hover:text-accent transition-colors">
                          {item.title}
                        </span>
                        <Icon icon={item.icon} className="text-sm text-primary group-hover:scale-110 transition-transform shrink-0" />
                      </div>
                      <p className="text-[11px] font-sans text-secondary leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right side: High-Impact Profile Frame (5 cols) */}
        <div className="lg:col-span-5 px-8 sm:px-14 md:px-20 lg:px-24 py-8 sm:py-12 md:py-16 relative flex flex-col items-center justify-center bg-card/20 min-h-125 gap-8 overflow-hidden">
          
          {/* Main Photo Card Frame with Hover Floating Tooltip & Progressive Scroll Reveal */}
          <motion.div
            ref={photoRef}
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative w-full max-w-lg aspect-3/4 border-2 border-primary p-2.5 bg-card shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.15)] rounded-md overflow-hidden group cursor-pointer select-none"
          >
            <Image
              src={personal.bioImage}
              alt={personal.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className="object-cover rounded-xs"
            />

            {/* Animated Floating Tooltip following mouse cursor */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: cursorPos.x + 16,
                    y: cursorPos.y + 16,
                  }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25, mass: 0.4 }}
                  className="pointer-events-none absolute top-0 left-0 z-30"
                >
                  <div className="px-3 py-1.5 bg-primary text-primary-foreground font-mono text-[11px] font-bold uppercase tracking-wider rounded-md shadow-2xl border border-background/20 whitespace-nowrap flex items-center gap-2 backdrop-blur-md">
                    <span>Navaneeth PV &bull; Frontend Dev</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Floating Availability Badge - Progressive Scroll Reveal */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-lg p-4 bg-card border border-border rounded-md shadow-xs flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-bold uppercase text-primary">
                  Status: Available
                </span>
                <span className="text-[10px] font-mono text-secondary">
                  Internships &bull; Frontend Developer Roles
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="px-3 py-1.5 bg-primary text-primary-foreground font-mono text-[10px] font-bold uppercase tracking-wider hover:bg-accent transition-colors rounded-xs"
            >
              Hire Me
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

