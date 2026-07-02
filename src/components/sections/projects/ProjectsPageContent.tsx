import Link from "next/link";
import { projects } from "@/content/projects";
import { projectsPage } from "@/content/projects-page";
import {
  ProjectListCardDesktop,
  ProjectListCardMobile,
} from "@/components/cards/ProjectListCard";
import { Container } from "@/components/layout/Container";

export function ProjectsPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 md:pt-0">
      {/* Header */}
      <header className="mb-stack-lg md:mb-stack-lg">
        <Container className="max-w-3xl">
          <h1 className="mb-4 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:mb-base md:font-display-lg md:text-display-lg md:text-primary">
            {projectsPage.title}
          </h1>
          <p className="max-w-sm font-body-md text-on-surface-variant md:max-w-3xl md:font-body-lg md:text-body-lg md:italic">
            <span className="md:hidden">{projectsPage.mobileDescription}</span>
            <span className="hidden md:inline">{projectsPage.description}</span>
          </p>
        </Container>
      </header>

      {/* Desktop grid */}
      <section className="hidden md:block">
        <Container>
          <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-12">
            {projects.map((project) => (
              <ProjectListCardDesktop key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      {/* Mobile list */}
      <section className="flex flex-col gap-16 px-grid-margin md:hidden">
        {projects.map((project) => (
          <ProjectListCardMobile key={project.slug} project={project} />
        ))}
      </section>

      {/* Mobile CTA */}
      <section className="mt-section-gap px-grid-margin text-center md:hidden">
        <h3 className="mb-6 font-headline-md text-headline-md">
          {projectsPage.cta.title}
        </h3>
        <Link
          href={projectsPage.cta.href}
          className="inline-block bg-primary px-8 py-4 font-label-md text-label-md uppercase tracking-widest text-on-primary transition-all hover:opacity-90 active:scale-95"
        >
          {projectsPage.cta.buttonLabel}
        </Link>
      </section>
    </main>
  );
}
