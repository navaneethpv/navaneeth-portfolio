import type { Metadata } from "next";
import { portfolioData } from "@/data/portfolioData";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navaneethpv.me";

export const metadata: Metadata = {
  title: "Case Studies & Production Engineering Projects",
  description:
    "Explore detailed case studies, architectural decisions, and production metrics for web applications built by Navaneeth PV.",
  alternates: {
    canonical: `${siteUrl}/case-study`,
  },
  openGraph: {
    title: "Case Studies & Production Projects | Navaneeth PV",
    description:
      "Explore detailed case studies and technical breakdowns of frontend web applications.",
    url: `${siteUrl}/case-study`,
    type: "website",
  },
};

export default function CaseStudiesDirectoryPage() {
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
