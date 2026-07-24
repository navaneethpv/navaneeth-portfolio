import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import { CaseStudyView } from "@/components/CaseStudyView";

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.id,
  }));
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

  return <CaseStudyView project={project} personal={portfolioData.personal} />;
}
