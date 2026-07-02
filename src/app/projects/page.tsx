import type { Metadata } from "next";
import { ProjectsPageContent } from "@/components/sections/projects/ProjectsPageContent";
import { projectsPage } from "@/content/projects-page";

export const metadata: Metadata = {
  title: "Projects",
  description: projectsPage.description,
};

export default function ProjectsPage() {
  return <ProjectsPageContent />;
}
