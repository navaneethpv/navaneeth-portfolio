"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PersonalInfo } from "@/data/portfolioData";

interface NavbarProps {
  personal: PersonalInfo;
  isCaseStudy?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ personal, isCaseStudy = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href={isCaseStudy ? "/" : "#hero"} className="flex items-center gap-2 group">
            <span className="font-heading font-semibold text-sm tracking-wide text-primary">
              {personal.name}
            </span>
          </Link>

          {!isCaseStudy ? (
            <>
              {/* Nav Links (Desktop) */}
              <div className="hidden md:flex items-center gap-8">
                {["projects", "about", "skills", "experience", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-xs capitalize tracking-wide text-secondary hover:text-primary transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </a>
                ))}
              </div>

              {/* Mobile Trigger */}
              <button
                type="button"
                aria-label="Toggle mobile menu"
                className="md:hidden flex items-center justify-center text-primary"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Icon icon="lucide:menu" className="text-lg" />
              </button>
            </>
          ) : (
            <Link
              href="/"
              className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-2"
            >
              <Icon icon="lucide:arrow-left" className="text-sm" />
              Back
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {!isCaseStudy && mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col justify-center p-8 space-y-8 animate-in fade-in duration-200">
          <button
            type="button"
            aria-label="Close mobile menu"
            className="absolute top-8 right-8 text-primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icon icon="lucide:x" className="text-2xl" />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            {["projects", "about", "skills", "experience", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-heading text-3xl font-light capitalize text-secondary hover:text-primary transition-colors"
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
