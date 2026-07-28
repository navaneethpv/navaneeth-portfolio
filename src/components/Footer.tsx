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
    <footer className="py-12 px-6 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground font-heading font-medium text-sm">
            {personal.logoLetter}
          </div>
          <span className="text-[10px] font-mono text-secondary tracking-widest uppercase">
            {personal.name} © {personal.copyrightYear}
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-mono text-secondary uppercase tracking-widest">
          {isCaseStudy ? (
            <>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="/#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </>
          ) : (
            <>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
            </>
          )}
        </div>

        <a
          href="#hero"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-[10px] font-mono text-secondary uppercase tracking-widest hover:text-primary transition-colors group"
        >
          Back to Top
          <Icon
            icon="lucide:arrow-up"
            className="text-sm group-hover:-translate-y-1 transition-transform"
          />
        </a>
      </div>
    </footer>
  );
};
