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
    <footer className="bento-card py-12 px-6 border-x-0 border-b-0 rounded-none rounded-t-3xl border-t-white/10 mt-12">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-black text-xs tracking-tighter">
            {personal.logoLetter}
          </div>
          <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
            {personal.name} © {personal.copyrightYear}
          </span>
        </div>

        <div className="flex gap-8 text-xs font-mono text-muted-foreground">
          {isCaseStudy ? (
            <>
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/#projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/#about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="/#contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </>
          ) : (
            <>
              <a href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#skills" className="hover:text-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="hover:text-foreground transition-colors">
                Experience
              </a>
            </>
          )}
        </div>

        <a
          href="#hero"
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors group"
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
