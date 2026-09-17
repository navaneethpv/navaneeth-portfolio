import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navaneethpv.me";

export const metadata: Metadata = {
  title: "Projects & Production Case Studies",
  description:
    "Explore the complete portfolio of web applications, architecture decisions, and production metrics built by Navaneeth PV.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Projects & Production Case Studies | Navaneeth PV",
    description:
      "Explore detailed case studies and technical breakdowns of frontend web applications.",
    url: `${siteUrl}/projects`,
    siteName: "Navaneeth PV Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Production Case Studies | Navaneeth PV",
    description:
      "Explore detailed case studies and technical breakdowns of frontend web applications.",
  },
};

export default function ProjectsDirectoryPage() {
  const { personal, projects } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden">
      <div className="w-full max-w-[2200px] mx-auto bg-card relative shadow-2xl border-x border-border">
        <Navbar personal={personal} isCaseStudy={true} />
        <ProjectsSection projects={projects} />
        <Footer personal={personal} isCaseStudy={true} />
      </div>
    </div>
  );
}
