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
    siteName: "Navaneeth PV Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies & Production Projects | Navaneeth PV",
    description:
      "Explore detailed case studies and technical breakdowns of frontend web applications.",
  },
};

const breadcrumbLdSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": siteUrl,
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Case Studies",
      "item": `${siteUrl}/case-study`,
    },
  ],
};

export default function CaseStudiesDirectoryPage() {
  const { personal, projects } = portfolioData;

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans relative overflow-x-hidden">
      <script
        id="case-study-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLdSchema) }}
      />
      <div className="w-full max-w-[2200px] mx-auto bg-card relative shadow-2xl border-x border-border">
        <Navbar personal={personal} isCaseStudy={true} />
        <ProjectsSection projects={projects} />
        <Footer personal={personal} isCaseStudy={true} />
      </div>
    </div>
  );
}
