import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
import { getProjectBySlug } from "@/content/projects";
import { PhaseBadge } from "@/components/ui/PhaseBadge";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { ProjectTag } from "@/components/ui/ProjectTag";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

type CaseStudyDetailProps = {
  study: CaseStudy;
  previous: CaseStudy | null;
  next: CaseStudy | null;
};

function MetaGrid({ study }: { study: CaseStudy }) {
  const items = [
    { label: "CLIENT", value: study.meta.client },
    { label: "ROLE", value: study.meta.role },
    { label: "TIMELINE", value: study.meta.timeline },
    { label: "SERVICES", value: study.meta.services },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-grid-gutter gap-y-stack-md border-b border-outline-variant/30 py-stack-md md:grid-cols-4 md:gap-stack-md md:border-y">
      {items.map((item) => (
        <div key={item.label}>
          <span className="mb-1 block font-label-md text-label-md text-primary md:mb-2">
            {item.label}
          </span>
          <span className="font-body-md text-body-md font-medium text-on-surface md:font-normal">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function TechStackSidebar({ techStack }: { techStack: string[] }) {
  return (
    <aside className="hidden lg:col-span-4 lg:block">
      <div className="sticky top-32 h-fit rounded-xl bg-secondary-container/30 p-stack-md">
        <h3 className="mb-stack-sm font-headline-md text-headline-md text-on-secondary-container">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tag, index) => (
            <ProjectTag key={tag} label={tag} index={index} />
          ))}
        </div>
      </div>
    </aside>
  );
}

function PhaseSection({
  study,
  phase,
  showImageAfter,
}: {
  study: CaseStudy;
  phase: CaseStudy["phases"][number];
  showImageAfter?: boolean;
}) {
  return (
    <>
      <section>
        <div className="mb-stack-sm hidden md:block">
          <PhaseBadge label={phase.label} />
        </div>
        <div className="mb-stack-sm flex items-center gap-3 md:hidden">
          <span className="h-px w-8 bg-primary" />
          <h2 className="font-headline-md text-headline-md italic">
            {phase.label === "Problem"
              ? "The Problem"
              : phase.label === "Action"
                ? "The Action"
                : "The Result"}
          </h2>
        </div>
        <h2 className="mb-stack-sm hidden font-headline-lg text-headline-lg text-on-surface md:block">
          {phase.title}
        </h2>
        <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant md:leading-normal">
          {phase.body}
        </p>
        {phase.highlights?.length ? (
          <div className="mt-stack-md grid grid-cols-1 gap-stack-md md:grid-cols-2">
            {phase.highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-lg bg-surface-container-low p-stack-md"
              >
                <span className="material-symbols-outlined mb-2 text-primary">
                  {highlight.icon}
                </span>
                <h4 className="mb-2 font-label-md text-label-md">
                  {highlight.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}
        {phase.label === "Action" ? (
          <div className="mt-stack-lg flex flex-wrap gap-2 lg:hidden">
            {study.techStack.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </section>
      {showImageAfter ? (
        <div className="md:px-0">
          <div className="mb-stack-sm aspect-video w-full overflow-hidden rounded-sm bg-surface-container-high md:rounded-xl">
            <ProjectImagePlaceholder
              alt={`${study.slug} process image placeholder`}
              className="h-full w-full object-cover"
            />
          </div>
          {study.processCaption ? (
            <p className="font-label-md text-label-md italic text-on-surface-variant">
              {study.processCaption}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

function MetricsBlock({ study }: { study: CaseStudy }) {
  if (!study.metrics?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "gap-4",
        study.metrics.length === 1
          ? "grid grid-cols-1"
          : "grid grid-cols-1 sm:grid-cols-3",
      )}
    >
      {study.metrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-lg border border-primary/10 bg-secondary-container/40 p-6 transition-transform hover:-translate-y-1 md:border-0 md:bg-transparent md:p-0 md:text-left md:hover:translate-y-0"
        >
          <span className="mb-2 block font-headline-lg leading-none text-primary md:font-display-lg md:text-headline-lg">
            {metric.value}
          </span>
          <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary-container md:text-on-surface-variant">
            {metric.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function CaseStudyDetail({
  study,
  previous,
  next,
}: CaseStudyDetailProps) {
  const project = getProjectBySlug(study.slug);
  const problem = study.phases.find((phase) => phase.label === "Problem");
  const action = study.phases.find((phase) => phase.label === "Action");
  const result = study.phases.find((phase) => phase.label === "Result");

  return (
    <main className="flex-1 pb-section-gap">
      <div className="px-grid-margin py-2 md:hidden">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-label-md text-label-md uppercase tracking-widest text-on-surface-variant transition-colors hover:text-primary"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Back
        </Link>
      </div>

      <Container className="mt-stack-lg">
        <Link
          href="/projects"
          className="group mb-stack-md hidden items-center gap-2 font-label-md text-label-md text-on-surface-variant transition-colors duration-300 hover:text-primary md:inline-flex"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 items-end gap-grid-gutter md:grid-cols-12">
          <div className="md:col-span-8">
            <span className="mb-2 block font-label-md text-label-md uppercase tracking-[0.2em] text-primary md:hidden">
              {study.eyebrow}
            </span>
            <h1 className="mb-stack-sm font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-none">
              {project?.title ?? study.slug}
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {study.summary}
            </p>
          </div>
          {study.liveUrl ? (
            <div className="flex gap-stack-sm md:col-span-4 md:justify-end">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-label-md text-label-md text-on-primary transition-all hover:opacity-90 active:scale-95"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Live site
              </a>
            </div>
          ) : null}
        </div>
      </Container>

      <Container className="mt-stack-lg">
        <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-surface-container-high md:aspect-auto md:h-[500px] md:rounded-xl">
          <ProjectImagePlaceholder
            alt={`${project?.title ?? study.slug} case study image placeholder`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-primary/5" />
        </div>
      </Container>

      <Container className="mt-stack-md">
        <MetaGrid study={study} />
      </Container>

      <Container className="mt-section-gap">
        <div className="grid grid-cols-1 gap-section-gap lg:grid-cols-12">
          <TechStackSidebar techStack={study.techStack} />

          <div className="space-y-section-gap lg:col-span-8">
            {problem ? <PhaseSection study={study} phase={problem} /> : null}
            {action ? (
              <PhaseSection
                study={study}
                phase={action}
                showImageAfter={Boolean(study.processCaption)}
              />
            ) : null}
            {!study.processCaption ? (
              <div className="hidden h-96 w-full overflow-hidden rounded-xl bg-surface-container-high md:block">
                <ProjectImagePlaceholder
                  alt={`${study.slug} supporting image placeholder`}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            {result ? (
              <section>
                <div className="mb-stack-sm hidden md:block">
                  <PhaseBadge label="Result" />
                </div>
                <div className="mb-stack-sm flex items-center gap-3 md:hidden">
                  <span className="h-px w-8 bg-primary" />
                  <h2 className="font-headline-md text-headline-md italic">
                    The Result
                  </h2>
                </div>
                <h2 className="mb-stack-sm hidden font-headline-lg text-headline-lg text-on-surface md:block">
                  {result.title}
                </h2>
                <div className="mb-stack-md">
                  <MetricsBlock study={study} />
                </div>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {result.body}
                </p>
              </section>
            ) : null}
          </div>
        </div>
      </Container>

      <Container className="mt-section-gap flex flex-col items-center justify-between gap-stack-md border-t border-outline-variant/30 py-stack-lg md:flex-row">
        <div className="flex items-center gap-4">
          {next ? (
            <>
              <span className="font-label-md text-label-md text-on-surface-variant">
                Next Project:
              </span>
              <Link
                href={`/projects/${next.slug}`}
                className="font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
              >
                {getProjectBySlug(next.slug)?.title ?? next.slug}
              </Link>
            </>
          ) : (
            <span className="font-label-md text-label-md text-on-surface-variant">
              Final project in the gallery
            </span>
          )}
        </div>
        <div className="flex flex-col items-center gap-3 md:items-end">
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="font-label-md text-label-md text-on-surface-variant transition-colors hover:text-primary"
            >
              ← {getProjectBySlug(previous.slug)?.title ?? previous.slug}
            </Link>
          ) : null}
          <Link
            href="/projects"
            className="editorial-underline pb-1 font-label-md text-label-md text-on-surface transition-all"
          >
            Back to Project Gallery
          </Link>
        </div>
      </Container>
    </main>
  );
}
