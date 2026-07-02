import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/sections/projects/CaseStudyDetail";
import {
  caseStudies,
  getAdjacentCaseStudies,
  getCaseStudyBySlug,
} from "@/content/case-studies";
import { getProjectBySlug } from "@/content/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const study = getCaseStudyBySlug(slug);

  if (!project || !study) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: study.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  const project = getProjectBySlug(slug);

  if (!study || !project) {
    notFound();
  }

  const { previous, next } = getAdjacentCaseStudies(slug);

  return <CaseStudyDetail study={study} previous={previous} next={next} />;
}
