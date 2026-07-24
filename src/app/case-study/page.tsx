import { portfolioData } from "@/data/portfolioData";
import { CaseStudyView } from "@/components/CaseStudyView";

export default function DefaultCaseStudyPage() {
  const defaultProject = portfolioData.projects[0];
  return <CaseStudyView project={defaultProject} personal={portfolioData.personal} />;
}
