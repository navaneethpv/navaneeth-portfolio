import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { PlaygroundSection } from "@/components/PlaygroundSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { personal, projects, techStack, experience, testimonials } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden selection:bg-primary selection:text-primary-foreground">
      {/* Minimalist Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#202020_1px,transparent_1px),linear-gradient(to_bottom,#202020_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Floating Navbar */}
      <Navbar personal={personal} />

      {/* Hero Section */}
      <HeroSection personal={personal} />

      {/* Featured Projects */}
      <ProjectsSection projects={projects} />

      {/* About Section */}
      <AboutSection personal={personal} />

      {/* Tech Stack */}
      <TechStackSection techStack={techStack} />

      {/* Experience Timeline */}
      <ExperienceSection experience={experience} />

      {/* Playground Section */}
      <PlaygroundSection />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Contact Section */}
      <ContactSection personal={personal} />

      {/* Footer */}
      <Footer personal={personal} />
    </div>
  );
}
