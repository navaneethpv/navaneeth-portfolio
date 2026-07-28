"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface FooterProps {
  personal: PersonalInfo;
  isCaseStudy?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ personal, isCaseStudy = false }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Left: Copyright */}
        <div className="p-6 md:p-8 flex items-center justify-center md:justify-start">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
            © {personal.copyrightYear} {personal.name}
          </span>
        </div>

        {/* Middle: Links */}
        <div className="p-6 md:p-8 flex flex-wrap justify-center items-center gap-8 text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
          {isCaseStudy ? (
            <>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/#projects" className="hover:text-accent transition-colors">Work</Link>
              <Link href="/#contact" className="hover:text-accent transition-colors">Contact</Link>
            </>
          ) : (
            <>
              <a href="#projects" className="hover:text-accent transition-colors">Work</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </>
          )}
        </div>

        {/* Right: Back to top */}
        <div className="p-6 md:p-8 flex items-center justify-center md:justify-end">
          <a
            href="#hero"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10px] font-mono text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors group"
          >
            Back to Top
            <Icon icon="lucide:arrow-up" className="text-sm group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </footer>
  );
};
