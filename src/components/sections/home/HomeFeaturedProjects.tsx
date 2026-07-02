import Link from "next/link";
import { homeFeatured } from "@/content/home";
import { getFeaturedProjects } from "@/content/projects";
import { FeaturedProjectCard } from "@/components/cards/FeaturedProjectCard";
import { Container } from "@/components/layout/Container";

export function HomeFeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Desktop */}
      <section
        id="projects"
        className="hidden py-section-gap md:block"
      >
        <Container>
          <div className="mb-stack-lg flex items-end justify-between">
            <div className="space-y-2">
              <span className="font-label-md text-label-md uppercase tracking-widest text-primary">
                {homeFeatured.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg">
                {homeFeatured.title}
              </h2>
            </div>
            <Link
              href={homeFeatured.archiveHref}
              className="mb-2 font-label-md text-label-md editorial-underline"
            >
              {homeFeatured.archiveLabel}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-3">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard
                key={project.slug}
                project={project}
                layout="portrait"
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Mobile */}
      <section className="px-grid-margin pb-section-gap md:hidden">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface">
            Featured
            <br />
            Works
          </h2>
          <Link
            href={homeFeatured.archiveHref}
            className="flex items-center gap-2 font-label-md text-label-md text-primary"
          >
            {homeFeatured.mobileViewAllLabel}
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </div>

        <div className="flex flex-col gap-stack-lg">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project.slug}
              project={project}
              layout="square"
            />
          ))}
        </div>
      </section>
    </>
  );
}
