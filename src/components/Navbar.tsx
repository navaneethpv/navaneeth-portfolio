"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { PersonalInfo } from "@/data/portfolioData";

interface NavbarProps {
  personal: PersonalInfo;
  isCaseStudy?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ personal, isCaseStudy = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col relative z-50">
        {/* Infinite Marquee Ticker Tape Carousel */}
        <div className="w-full bg-primary text-primary-foreground overflow-hidden py-2 border-b border-border flex whitespace-nowrap select-none">
          <motion.div
            className="flex items-center text-[10px] font-mono uppercase tracking-[0.2em] font-bold shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            <div className="flex items-center shrink-0">
              <span className="mx-4">OPEN FOR NEW OPPORTUNITIES</span> &bull; 
              <span className="mx-4">AVAILABLE FOR FREELANCE</span> &bull; 
              <span className="mx-4 text-accent">FRONTEND DEVELOPER</span> &bull; 
              <span className="mx-4">REACT &amp; NEXT.JS SPECIALIST</span> &bull; 
              <span className="mx-4">OPEN FOR NEW OPPORTUNITIES</span> &bull; 
              <span className="mx-4">AVAILABLE FOR FREELANCE</span> &bull; 
              <span className="mx-4 text-accent">FRONTEND DEVELOPER</span> &bull; 
              <span className="mx-4">REACT &amp; NEXT.JS SPECIALIST</span> &bull;&nbsp;
            </div>
            <div className="flex items-center shrink-0">
              <span className="mx-4">OPEN FOR NEW OPPORTUNITIES</span> &bull; 
              <span className="mx-4">AVAILABLE FOR FREELANCE</span> &bull; 
              <span className="mx-4 text-accent">FRONTEND DEVELOPER</span> &bull; 
              <span className="mx-4">REACT &amp; NEXT.JS SPECIALIST</span> &bull; 
              <span className="mx-4">OPEN FOR NEW OPPORTUNITIES</span> &bull; 
              <span className="mx-4">AVAILABLE FOR FREELANCE</span> &bull; 
              <span className="mx-4 text-accent">FRONTEND DEVELOPER</span> &bull; 
              <span className="mx-4">REACT &amp; NEXT.JS SPECIALIST</span> &bull;&nbsp;
            </div>
          </motion.div>
        </div>

        {/* Main Nav */}
        <nav className="p-6 md:p-8 flex items-center justify-between border-b-4 border-border bg-card">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-10 h-10 bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-xl hover:bg-accent transition-colors">
              {personal.logoLetter}
            </Link>
            <span className="hidden sm:block text-xs font-mono uppercase tracking-widest text-primary font-bold">
              {personal.name}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-primary font-bold">
            <Link href={isCaseStudy ? "/" : "#hero"} className="hover:text-accent transition-colors relative group">
              Home
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
            </Link>
            {!isCaseStudy && (
              <>
                <a href="#about" className="hover:text-accent transition-colors relative group">
                  About
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
                </a>
                <a href="#projects" className="hover:text-accent transition-colors relative group">
                  Work
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
                </a>
                <a href="#contact" className="hover:text-accent transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all"></span>
                </a>
              </>
            )}
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-primary hover:text-accent transition-colors p-2 border border-border"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Icon icon="lucide:menu" className="text-xl" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {!isCaseStudy && mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col justify-center p-8 space-y-8 animate-in fade-in duration-200">
          <button
            type="button"
            className="absolute top-8 right-8 text-primary border border-border p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon icon="lucide:x" className="text-2xl" />
          </button>
          
          <div className="flex flex-col space-y-8 text-center border-y border-border py-12">
            {["home", "about", "projects", "skills", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={item === "home" ? "#hero" : `#${item}`}
                className="font-heading text-5xl uppercase font-bold text-primary hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">
              {personal.name} © {personal.copyrightYear}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
