import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { cn } from "@/lib/cn";

type FeaturedProjectCardProps = {
  project: Project;
  layout?: "portrait" | "square";
};

export function FeaturedProjectCard({
  project,
  layout = "portrait",
}: FeaturedProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block cursor-pointer"
    >
      <div
        className={cn(
          "relative mb-stack-sm overflow-hidden rounded-lg bg-surface-container",
          layout === "portrait" ? "aspect-[4/5]" : "aspect-square mb-6",
        )}
      >
        <ProjectImagePlaceholder
          alt={`${project.title} project screenshot placeholder`}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {layout === "square" && project.tags[0] ? (
          <div className="absolute top-4 right-4 rounded-full bg-surface/90 px-4 py-1 font-label-md text-[10px] uppercase tracking-widest text-primary backdrop-blur-md">
            {project.tags[0]}
          </div>
        ) : null}
      </div>

      <div className="space-y-base">
        <h3 className="font-headline-md text-headline-md transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="font-body-md text-on-surface-variant">{project.excerpt}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-surface-variant px-2 py-1 font-label-md text-[10px] uppercase tracking-tighter"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
