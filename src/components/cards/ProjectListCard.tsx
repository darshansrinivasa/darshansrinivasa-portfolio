import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { ProjectTag } from "@/components/ui/ProjectTag";
import { cn } from "@/lib/cn";

type ProjectListCardProps = {
  project: Project;
};

function CaseStudyLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group/link inline-flex items-center gap-2 border-b border-primary font-label-md text-label-md text-primary transition-all hover:border-b-2"
    >
      View Case Study
      <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
        arrow_forward
      </span>
    </Link>
  );
}

export function ProjectListCardDesktop({ project }: ProjectListCardProps) {
  const isFull = project.gridSize === "full";
  const isLarge = project.gridSize === "large";

  if (isFull) {
    return (
      <article className="project-card group flex flex-col items-center gap-stack-md rounded-xl bg-surface-container-low p-8 transition-all duration-500 md:col-span-12 md:flex-row">
        <div className="project-image aspect-video w-full overflow-hidden rounded-lg md:w-1/2">
          <ProjectImagePlaceholder
            alt={`${project.title} project screenshot placeholder`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-base flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <ProjectTag key={tag} label={tag} index={index} />
            ))}
          </div>
          <h3 className="mb-4 font-headline-md text-headline-md text-on-surface">
            {project.title}
          </h3>
          <p className="mb-stack-sm font-body-md text-body-md text-on-surface-variant">
            {project.listExcerpt}
          </p>
          <CaseStudyLink slug={project.slug} />
        </div>
      </article>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "project-card group cursor-pointer rounded-xl bg-surface-container-low p-6 transition-all duration-500",
        isLarge ? "md:col-span-8" : "md:col-span-4",
      )}
    >
      <div
        className={cn(
          "project-image mb-stack-sm overflow-hidden rounded-lg",
          isLarge ? "aspect-[16/9]" : "aspect-square",
        )}
      >
        <ProjectImagePlaceholder
          alt={`${project.title} project screenshot placeholder`}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mb-base flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <ProjectTag key={tag} label={tag} index={index} />
        ))}
      </div>
      <h3 className="mb-2 font-headline-md text-headline-md text-on-surface">
        {project.title}
      </h3>
      <p
        className={cn(
          "font-body-md text-body-md text-on-surface-variant",
          isLarge && "max-w-2xl",
        )}
      >
        {project.listExcerpt}
      </p>
    </Link>
  );
}

export function ProjectListCardMobile({ project }: ProjectListCardProps) {
  return (
    <article className="project-card group active:scale-[0.98]">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="mb-6 aspect-[4/5] overflow-hidden bg-surface-container-low">
          <ProjectImagePlaceholder
            alt={`${project.title} project screenshot placeholder`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 group-active:scale-105"
          />
        </div>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <ProjectTag
              key={tag}
              label={tag}
              index={index}
              variant="mobile"
            />
          ))}
        </div>
        <h2 className="mb-2 font-headline-md text-headline-md text-on-surface">
          {project.title}
        </h2>
        <p className="mb-6 font-body-md leading-relaxed text-on-surface-variant">
          {project.listExcerpt}
        </p>
      </Link>
      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center gap-2 font-headline-md text-xl editorial-underline"
      >
        View Case Study
        <span className="material-symbols-outlined text-sm">arrow_forward</span>
      </Link>
    </article>
  );
}
