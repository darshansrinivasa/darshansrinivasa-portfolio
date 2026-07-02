import Link from "next/link";
import {
  aboutPage,
  education,
  experienceTimeline,
} from "@/content/about";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { cn } from "@/lib/cn";

function PortraitImage({ variant }: { variant: "desktop" | "mobile" }) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden bg-surface-container-high shadow-lg shadow-primary/5",
        variant === "desktop"
          ? "aspect-[3/4] w-full rounded-xl"
          : "aspect-square w-full",
      )}
    >
      <ProjectImagePlaceholder
        alt="Portrait placeholder"
        label="Portrait placeholder"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {variant === "desktop" ? (
        <div className="pointer-events-none absolute inset-0 bg-primary/10 opacity-20 mix-blend-multiply" />
      ) : null}
    </div>
  );
}

function ExperienceTimelineDesktop() {
  return (
    <section className="mb-section-gap hidden md:block">
      <Container>
        <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-12">
          <div className="md:col-span-3">
            <h2 className="sticky top-32 font-headline-lg text-headline-lg text-on-secondary-fixed-variant">
              {aboutPage.timelineTitle}
            </h2>
            <p className="mt-stack-sm font-body-md text-body-md text-outline">
              {aboutPage.timelineSubtitle}
            </p>
          </div>

          <div className="relative pl-8 md:col-span-9 md:pl-16">
            <div className="absolute top-4 bottom-4 left-[3px] w-[2px] bg-outline-variant md:left-[35px]" />

            {experienceTimeline.map((entry) => (
              <div
                key={entry.id}
                className="relative mb-stack-lg last:mb-0"
              >
                <div className="absolute top-2 left-[-32px] z-10 h-4 w-4 rounded-full border-4 border-background bg-primary md:left-[-45px]" />
                <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-headline-md text-headline-md text-on-surface">
                      {entry.company}
                    </h3>
                    {entry.engagementType === "freelance" ? (
                      <span className="rounded-full bg-tertiary-fixed px-2.5 py-0.5 font-label-md text-[12px] uppercase tracking-wider text-on-tertiary-fixed-variant">
                        Freelance
                      </span>
                    ) : null}
                  </div>
                  <span
                    className={cn(
                      "w-fit rounded-full px-3 py-1 font-label-md text-label-md",
                      entry.isCurrent
                        ? "bg-primary-fixed text-primary"
                        : "bg-secondary-container text-on-secondary-fixed-variant",
                    )}
                  >
                    {entry.period}
                  </span>
                </div>
                <p className="mb-1 font-body-lg text-body-lg font-medium text-on-surface-variant">
                  {entry.role}
                </p>
                {entry.description ? (
                  <p className="font-body-md text-body-md text-outline italic">
                    {entry.description}
                  </p>
                ) : null}
                {entry.liveUrl ? (
                  <a
                    href={entry.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 font-label-md text-label-md text-primary transition-colors hover:opacity-80"
                  >
                    Visit live site
                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function ExperienceTimelineMobile() {
  return (
    <section className="mb-stack-lg px-grid-margin md:hidden">
      <h2 className="mb-stack-md font-label-md text-label-md uppercase tracking-[0.2em] text-outline">
        {aboutPage.timelineEyebrow}
      </h2>
      <div className="flex flex-col gap-10">
        {experienceTimeline.map((entry, index) => (
          <div key={entry.id} className="relative flex gap-6">
            <div className="flex flex-col items-center">
              <div className="relative z-10 h-4 w-4 rounded-full border-4 border-background bg-primary" />
              {index < experienceTimeline.length - 1 ? (
                <div className="w-[2px] flex-1 bg-outline-variant" />
              ) : null}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-label-md text-label-md text-primary">
                  {entry.period.toUpperCase()}
                </span>
                {entry.engagementType === "freelance" ? (
                  <span className="rounded-full bg-tertiary-fixed px-2 py-0.5 font-label-md text-[10px] uppercase tracking-wider text-on-tertiary-fixed-variant">
                    Freelance
                  </span>
                ) : null}
              </div>
              <h3 className="mt-1 font-headline-md text-headline-md leading-tight text-on-surface">
                {entry.role}
              </h3>
              <p className="mb-2 font-label-md text-label-md text-on-secondary-container">
                {entry.company}
              </p>
              {entry.description ? (
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {entry.description}
                </p>
              ) : null}
              {entry.liveUrl ? (
                <a
                  href={entry.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-label-md text-label-md text-primary"
                >
                  Visit live site
                  <span className="material-symbols-outlined text-[16px]">
                    open_in_new
                  </span>
                </a>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <>
      <section className="mb-section-gap hidden md:block">
        <Container>
          <div className="rounded-xl border border-surface-variant/50 bg-surface-container-low py-stack-lg">
            <div className="mx-auto max-w-4xl text-center">
              <span className="material-symbols-outlined mb-4 text-4xl text-primary">
                school
              </span>
              <h2 className="mb-stack-md font-headline-lg text-headline-lg text-on-surface">
                {aboutPage.educationTitle}
              </h2>
              <div className="flex flex-col items-center justify-center gap-stack-md md:flex-row md:gap-32">
                <div className="text-center md:text-left">
                  <p className="mb-2 font-label-md text-label-md uppercase tracking-widest text-primary">
                    {aboutPage.educationDegreeLabel}
                  </p>
                  <h4 className="font-headline-md text-headline-md">
                    {education.degree}
                  </h4>
                  <p className="font-body-md text-outline">
                    {education.year} · {education.detail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-outline-variant px-grid-margin pt-stack-lg md:hidden">
        <h2 className="mb-stack-md font-label-md text-label-md uppercase tracking-[0.2em] text-outline">
          {aboutPage.educationTitle}
        </h2>
        <div className="bg-secondary-container/30 p-base">
          <span className="font-label-md text-label-md text-on-secondary-container">
            {aboutPage.educationDegreeLabel.toUpperCase()}
          </span>
          <h4 className="mt-1 font-headline-md text-[24px] leading-snug text-on-surface">
            {education.degree}
          </h4>
          <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
            {education.year} · {education.detail}
          </p>
        </div>
      </section>
    </>
  );
}

export function AboutPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 md:pt-0">
      <section className="mb-section-gap">
        <Container>
          <div className="grid grid-cols-1 items-start gap-grid-gutter md:grid-cols-12">
            <div className="order-2 md:order-1 md:col-span-8">
              <h1 className="mb-stack-md font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-display-lg md:text-display-lg md:text-primary">
                <span className="md:hidden">{aboutPage.mobileTitle}</span>
                <span className="hidden md:inline">{aboutPage.title}</span>
              </h1>
              <p className="mb-stack-sm hidden font-headline-md text-headline-md leading-relaxed text-on-surface-variant md:block md:max-w-4xl">
                {aboutPage.bio}
              </p>
              <div className="flex flex-col gap-4 md:hidden">
                <p className="font-headline-md text-headline-md italic leading-tight text-primary">
                  {aboutPage.mobileLead}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {aboutPage.bio}
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 md:col-span-4 md:flex md:justify-end">
              <div className="hidden w-full md:block">
                <PortraitImage variant="desktop" />
              </div>
              <div className="w-full md:hidden">
                <PortraitImage variant="mobile" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ExperienceTimelineDesktop />
      <ExperienceTimelineMobile />
      <EducationSection />

      <section className="mb-section-gap hidden text-center md:block">
        <Container>
          <p className="mb-stack-sm font-body-lg text-body-lg italic text-on-surface-variant">
            {aboutPage.cta.prompt}
          </p>
          <Link
            href={aboutPage.cta.href}
            className="editorial-underline font-headline-lg text-headline-lg text-primary"
          >
            {aboutPage.cta.linkLabel}
          </Link>
        </Container>
      </section>

      <section className="mx-grid-margin mt-stack-lg bg-primary-container px-grid-margin py-stack-lg text-on-primary-container md:hidden">
        <h2 className="mb-stack-sm font-headline-md text-headline-md">
          {aboutPage.mobileCta.title}
        </h2>
        <p className="mb-stack-sm font-body-md text-body-md opacity-90">
          {aboutPage.mobileCta.description}
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={site.resume.href}
            download
            className="rounded-full bg-surface px-8 py-4 text-center font-label-md text-label-md text-primary transition-all active:scale-95"
          >
            {aboutPage.mobileCta.resumeLabel}
          </a>
          <Link
            href={aboutPage.mobileCta.contactHref}
            className="rounded-full border border-on-primary-container/30 px-8 py-4 text-center font-label-md text-label-md transition-all active:scale-95"
          >
            {aboutPage.mobileCta.contactLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
