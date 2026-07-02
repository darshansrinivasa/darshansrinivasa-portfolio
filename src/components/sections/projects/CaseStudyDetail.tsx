import Link from "next/link";
import Image from "next/image";
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

function KeyClientsBar({ brands }: { brands: CaseStudy["brands"] }) {
  const pillClass =
    "inline-flex items-center rounded-full border border-outline-variant/40 bg-surface-container-low px-5 py-2.5 font-body-md text-body-md text-on-surface transition-all duration-300";

  return (
    <div className="border-y border-outline-variant/30 py-stack-md">
      <span className="mb-stack-sm block font-label-md text-[12px] uppercase tracking-widest text-outline md:text-label-md">
        Key Clients
      </span>
      <ul className="flex flex-wrap gap-3">
        {brands.map((brand) => (
          <li key={brand.name}>
            {brand.url ? (
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  pillClass,
                  "hover:border-primary/40 hover:bg-surface-container hover:text-primary hover:shadow-sm",
                )}
              >
                {brand.name}
              </a>
            ) : (
              <span className={pillClass}>{brand.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechStackSidebar({ techStack }: { techStack: string[] }) {
  return (
    <aside className="min-w-0 lg:col-span-4">
      <div className="h-fit rounded-xl bg-secondary-container/30 p-5 lg:sticky lg:top-32 lg:p-stack-md">
        <h3 className="mb-stack-sm font-headline-md text-[24px] leading-tight text-on-secondary-container md:text-headline-md">
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

function PhaseHeading({
  phase,
}: {
  phase: CaseStudy["phases"][number];
}) {
  return (
    <>
      <div className="mb-stack-sm">
        <PhaseBadge label={phase.label} />
      </div>
      <h2 className="mb-stack-sm font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-headline-lg md:text-headline-lg">
        {phase.title}
      </h2>
    </>
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
      <section className="min-w-0">
        <PhaseHeading phase={phase} />
        <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant md:font-body-lg md:text-body-lg md:leading-normal">
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
                <h4 className="mb-2 font-label-md text-[12px] md:text-label-md">
                  {highlight.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </section>
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
        "grid w-full min-w-0 gap-stack-md",
        study.metrics.length === 1
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      )}
    >
      {study.metrics.map((metric) => (
        <div key={metric.label} className="min-w-0">
          <span className="mb-2 block break-words font-headline-md text-[28px] leading-none text-primary md:font-display-lg">
            {metric.value}
          </span>
          <span className="font-label-md text-[12px] uppercase tracking-widest text-on-surface-variant md:text-label-md">
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
    <main className="flex-1 overflow-x-clip pb-section-gap pt-8 pb-stack-lg md:pt-0">
      <Container className="md:pt-stack-lg">
        <Link
          href="/projects"
          className="group mb-stack-md inline-flex items-center gap-2 font-label-md text-[12px] text-on-surface-variant transition-colors duration-300 hover:text-primary md:text-label-md"
        >
          <span className="material-symbols-outlined text-[20px] transition-transform group-hover:-translate-x-1 md:text-[24px]">
            arrow_back
          </span>
          Back to Projects
        </Link>

        <div className="grid min-w-0 grid-cols-1 items-start gap-stack-md md:grid-cols-12 md:items-end md:gap-grid-gutter">
          <div className="min-w-0 md:col-span-8">
            <h1 className="mb-stack-sm font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-none">
              {project?.title ?? study.slug}
            </h1>
            <p className="max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant md:font-body-lg md:text-body-lg">
              {study.summary}
            </p>
          </div>
          {study.liveUrl ? (
            <div className="w-full md:col-span-4 md:flex md:justify-end">
              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-label-md text-label-md text-on-primary transition-all hover:opacity-90 active:scale-95 md:w-auto md:px-8"
              >
                <span className="material-symbols-outlined">open_in_new</span>
                Live site
              </a>
            </div>
          ) : null}
        </div>
      </Container>

      <Container className="mt-stack-lg">
        <div className="group relative aspect-video w-full min-w-0 overflow-hidden rounded-lg bg-surface-container-high md:rounded-xl lg:aspect-[21/9]">
          {study.heroImage ? (
            <Image
              src={study.heroImage.src}
              alt={study.heroImage.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 80rem"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <ProjectImagePlaceholder
              alt={`${project?.title ?? study.slug} case study image placeholder`}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-primary/5" />
        </div>
      </Container>

      <Container className="mt-stack-md">
        <KeyClientsBar brands={study.brands} />
      </Container>

      <Container className="mt-section-gap">
        <div className="grid min-w-0 grid-cols-1 gap-stack-lg lg:grid-cols-12">
          <TechStackSidebar techStack={study.techStack} />

          <div className="min-w-0 space-y-stack-lg md:space-y-section-gap lg:col-span-8">
            {problem ? <PhaseSection study={study} phase={problem} /> : null}
            {action ? (
              <PhaseSection
                study={study}
                phase={action}
                showImageAfter={Boolean(study.processCaption)}
              />
            ) : null}
            {result ? (
              <section className="min-w-0">
                <PhaseHeading phase={result} />
                <div className="mb-stack-md">
                  <MetricsBlock study={study} />
                </div>
                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant md:font-body-lg md:text-body-lg">
                  {result.body}
                </p>
              </section>
            ) : null}
          </div>
        </div>
      </Container>

      <Container className="mt-section-gap border-t border-outline-variant/30 py-stack-lg">
        <div className="flex flex-col gap-stack-md">
          <div className="flex min-w-0 flex-col gap-2 md:flex-row md:flex-wrap md:items-center md:gap-4">
            {next ? (
              <>
                <span className="shrink-0 font-label-md text-[12px] text-on-surface-variant md:text-label-md">
                  Next Project:
                </span>
                <Link
                  href={`/projects/${next.slug}`}
                  className="min-w-0 break-words font-headline-md text-[24px] leading-tight text-on-surface transition-colors hover:text-primary md:text-headline-md"
                >
                  {getProjectBySlug(next.slug)?.title ?? next.slug}
                </Link>
              </>
            ) : (
              <span className="font-label-md text-[12px] text-on-surface-variant md:text-label-md">
                Final project in the gallery
              </span>
            )}
          </div>
          <div
            className={cn(
              "flex flex-col gap-3 md:flex-row md:items-center",
              previous ? "md:justify-between" : "md:justify-end",
            )}
          >
            {previous ? (
              <Link
                href={`/projects/${previous.slug}`}
                className="min-w-0 break-words font-label-md text-[12px] text-on-surface-variant transition-colors hover:text-primary md:text-label-md"
              >
                ← {getProjectBySlug(previous.slug)?.title ?? previous.slug}
              </Link>
            ) : null}
            <Link
              href="/projects"
              className="editorial-underline w-fit pb-1 font-label-md text-[12px] text-on-surface transition-all md:text-label-md"
            >
              Back to Project Gallery
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
