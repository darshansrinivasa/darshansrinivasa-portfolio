import type { Project } from "@/content/projects";

/** Primary tag used as the GTM `category` parameter for project_click. */
export function getProjectCategory(project: Project): string {
  return project.tags[0] ?? "General";
}
