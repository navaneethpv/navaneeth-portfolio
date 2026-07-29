import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { personal, projects, techStack, experience, testimonials } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-accent selection:text-accent-foreground">

      {/* Main container framing the portfolio */}
      <div className="w-full max-w-[2200px] mx-auto bg-card relative shadow-2xl border-x border-border">
        <Navbar personal={personal} />

        {/* Hero Section */}
        <HeroSection personal={personal} />

        {/* About Section */}
        <AboutSection personal={personal} />

        {/* Featured Projects */}
        <ProjectsSection projects={projects} />

        {/* Tech Stack */}
        <TechStackSection techStack={techStack} />

        {/* Experience Timeline */}
        <ExperienceSection experience={experience} />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Contact Section */}
        <ContactSection personal={personal} />

        {/* Footer */}
        <Footer personal={personal} />
      </div>
    </div>
  );
}
