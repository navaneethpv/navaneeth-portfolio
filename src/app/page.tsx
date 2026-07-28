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
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-accent selection:text-accent-foreground p-4 md:p-8">

      {/* Main bordered container framing the portfolio */}
      <div className="max-w-[1600px] mx-auto border border-border bg-card shadow-2xl relative">
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
