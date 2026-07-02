import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { ProjectTag } from "@/components/ui/ProjectTag";

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block cursor-pointer"
    >
      <div className="relative mb-stack-sm aspect-video overflow-hidden rounded-lg bg-surface-container md:aspect-[4/5]">
        <ProjectImagePlaceholder
          alt={`${project.title} project screenshot placeholder`}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="space-y-base">
        <h3 className="font-headline-md text-[24px] leading-tight transition-colors group-hover:text-primary md:text-headline-md">
          {project.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {project.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag, index) => (
            <ProjectTag key={tag} label={tag} index={index} />
          ))}
        </div>
      </div>
    </Link>
  );
}
