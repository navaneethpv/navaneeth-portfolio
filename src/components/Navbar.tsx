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
      <div className="w-full border-b border-border bg-card relative z-50">
        <nav className="px-6 py-2 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-primary">
          <div className="flex gap-6">
            <Link href={isCaseStudy ? "/" : "#hero"} className="hover:text-accent transition-colors">
              Home
            </Link>
            {!isCaseStudy && (
              <a href="#about" className="hidden md:block hover:text-accent transition-colors">
                About
              </a>
            )}
          </div>

          <div className="flex gap-6">
            {!isCaseStudy && (
              <>
                <a href="#projects" className="hidden md:block hover:text-accent transition-colors">
                  Work
                </a>
                <a href="#contact" className="hidden md:block hover:text-accent transition-colors">
                  Contact
                </a>
              </>
            )}
            
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Icon icon="lucide:menu" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {!isCaseStudy && mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background flex flex-col justify-center p-8 border-[8px] border-card space-y-8 animate-in fade-in duration-200">
          <button
            type="button"
            className="absolute top-6 right-6 text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon icon="lucide:x" className="text-2xl" />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            {["projects", "about", "skills", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-heading text-4xl uppercase font-bold text-primary hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
