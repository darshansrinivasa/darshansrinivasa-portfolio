import { TrackedCtaLink } from "@/components/analytics/TrackedCtaLink";
import { homeFeatured } from "@/content/home";
import { getFeaturedProjects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/cards/FeaturedProjectCard";
import { Container } from "@/components/layout/Container";

export function HomeFeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-section-gap">
      <Container>
        <div className="mb-stack-lg flex items-end justify-between">
          <div className="space-y-2">
            <span className="font-label-md text-[12px] uppercase tracking-widest text-primary md:text-label-md">
              {homeFeatured.eyebrow}
            </span>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight md:font-headline-lg md:text-headline-lg">
              {homeFeatured.title}
            </h2>
          </div>
          <TrackedCtaLink
            href={homeFeatured.archiveHref}
            buttonText={homeFeatured.archiveLabel}
            className="mb-2 shrink-0 font-label-md text-[12px] editorial-underline md:text-label-md"
          >
            {homeFeatured.archiveLabel}
          </TrackedCtaLink>
        </div>

        <div className="grid grid-cols-1 gap-stack-lg md:grid-cols-3 md:gap-grid-gutter">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
