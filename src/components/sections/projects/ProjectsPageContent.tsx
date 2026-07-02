import { projects } from "@/content/projects";
import { projectsPage } from "@/content/projects-page";
import { ProjectListCard } from "@/components/cards/ProjectListCard";
import { Container } from "@/components/layout/Container";

export function ProjectsPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 pb-stack-lg md:pt-0">
      <header className="mb-section-gap">
        <Container className="md:pt-stack-lg">
          <h1 className="mb-stack-md font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-none md:text-primary">
            {projectsPage.title}
          </h1>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant md:max-w-3xl md:font-body-lg md:text-body-lg md:italic">
            {projectsPage.description}
          </p>
        </Container>
      </header>

      <section>
        <Container>
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:gap-grid-gutter">
            {projects.map((project) => (
              <ProjectListCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
