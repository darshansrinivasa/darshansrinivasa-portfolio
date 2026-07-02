import Link from "next/link";
import type { Project } from "@/content/projects";
import { ProjectThumbnail } from "@/components/ui/ProjectThumbnail";
import { ProjectTag } from "@/components/ui/ProjectTag";
import { cn } from "@/lib/cn";

type ProjectListCardProps = {
  project: Project;
};

function CaseStudyLink({ slug }: { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group/link inline-flex items-center gap-2 border-b border-primary font-label-md text-[12px] text-primary transition-all hover:border-b-2 md:text-label-md"
    >
      View Case Study
      <span className="material-symbols-outlined text-[18px] transition-transform group-hover/link:translate-x-1">
        arrow_forward
      </span>
    </Link>
  );
}

export function ProjectListCard({ project }: ProjectListCardProps) {
  const isFull = project.gridSize === "full";
  const isLarge = project.gridSize === "large";

  if (isFull) {
    return (
      <article className="project-card group flex flex-col items-center gap-stack-md rounded-xl bg-surface-container-low p-5 transition-all duration-500 md:col-span-12 md:flex-row md:p-8">
        <div className="project-image relative aspect-video w-full overflow-hidden rounded-lg md:w-1/2">
          <ProjectThumbnail
            slug={project.slug}
            title={project.title}
            sizes="(max-width: 768px) 100vw, 50vw"
            imageClassName="h-full w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-base flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <ProjectTag key={tag} label={tag} index={index} />
            ))}
          </div>
          <h3 className="mb-4 font-headline-md text-[24px] leading-tight text-on-surface md:text-headline-md">
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
        "project-card group cursor-pointer rounded-xl bg-surface-container-low p-5 transition-all duration-500 md:p-6",
        isLarge ? "md:col-span-8" : "md:col-span-4",
      )}
    >
      <div
        className={cn(
          "project-image relative mb-stack-sm overflow-hidden rounded-lg aspect-video",
          !isLarge && "md:aspect-square",
        )}
      >
        <ProjectThumbnail
          slug={project.slug}
          title={project.title}
          sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          imageClassName="h-full w-full object-cover"
        />
      </div>
      <div className="mb-base flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <ProjectTag key={tag} label={tag} index={index} />
        ))}
      </div>
      <h3 className="mb-2 font-headline-md text-[24px] leading-tight text-on-surface md:text-headline-md">
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
