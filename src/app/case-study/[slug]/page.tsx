import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { CaseStudyView } from "@/components/CaseStudyView";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navaneethpv.me";

  return {
    title: `${project.title} — ${project.category} Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      project.category,
      "Navaneeth PV",
      "Case Study",
      ...project.techStack,
    ],
    alternates: {
      canonical: `${siteUrl}/case-study/${project.id}`,
    },
    openGraph: {
      title: `${project.title} — Case Study | Navaneeth PV`,
      description: project.summary,
      url: `${siteUrl}/case-study/${project.id}`,
      type: "article",
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function CaseStudySlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.id === slug);

  if (!project) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://navaneethpv.me";

  const caseStudyLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `${siteUrl}/case-study/${project.id}`,
          },
        ],
      },
      {
        "@type": "SoftwareSourceCode",
        "name": project.title,
        "description": project.summary,
        "url": `${siteUrl}/case-study/${project.id}`,
        "image": project.image,
        "programmingLanguage": project.techStack.join(", "),
        "author": {
          "@type": "Person",
          "name": "Navaneeth PV",
          "url": siteUrl,
        },
        "keywords": project.techStack.join(", "),
      },
    ],
  };

  return (
    <>
      <script
        id={`case-study-schema-${project.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudyLdSchema) }}
      />
      <CaseStudyView project={project} personal={portfolioData.personal} />
    </>
  );
}
