"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface NavbarProps {
  personal: PersonalInfo;
  isCaseStudy?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ personal, isCaseStudy = false }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-6 z-50 w-full px-4 md:px-6">
        <nav className="max-w-5xl mx-auto bg-card/60 backdrop-blur-xl border border-border rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
          {/* Logo */}
          <Link href={isCaseStudy ? "/" : "#hero"} className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-black text-sm tracking-tighter group-hover:scale-105 transition-transform">
              {personal.logoLetter}
            </div>
            <span className="font-heading font-bold text-sm tracking-wider uppercase group-hover:text-muted-foreground transition-colors">
              {personal.name}
            </span>
          </Link>

          {!isCaseStudy ? (
            <>
              {/* Nav Links (Desktop) */}
              <div className="hidden md:flex items-center gap-8">
                <a
                  href="#projects"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative py-1 group"
                >
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#about"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative py-1 group"
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#skills"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative py-1 group"
                >
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#experience"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative py-1 group"
                >
                  Experience
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative py-1 group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>

              {/* Resume Button & Mobile Trigger */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  className="hidden sm:inline-flex h-10 px-5 items-center justify-center rounded-full border border-border text-xs uppercase tracking-widest font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  Get in Touch
                </a>
                <button
                  type="button"
                  aria-label="Toggle mobile menu"
                  className="md:hidden w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <Icon icon="lucide:menu" className="text-lg" />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
              >
                <Icon
                  icon="lucide:arrow-left"
                  className="text-sm group-hover:-translate-x-1 transition-transform"
                />
                Back to Portfolio
              </Link>
            </div>
          )}
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      {!isCaseStudy && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex flex-col justify-center p-8 space-y-8 animate-in fade-in duration-200">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute top-8 right-8 w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon icon="lucide:x" className="text-xl" />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            <a
              href="#projects"
              className="font-heading text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              className="font-heading text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="font-heading text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="font-heading text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="font-heading text-3xl font-bold text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  );
};
