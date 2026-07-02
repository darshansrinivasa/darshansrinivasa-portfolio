import Link from "next/link";
import {
  aboutPage,
  education,
  experienceTimeline,
} from "@/content/about";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

function ExperienceTimeline() {
  return (
    <section className="mb-section-gap">
      <Container>
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:gap-grid-gutter">
          <div className="md:col-span-3">
            <div className="md:sticky md:top-32">
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-on-secondary-fixed-variant md:font-headline-lg md:text-headline-lg">
                {aboutPage.timelineTitle}
              </h2>
              <p className="mt-stack-sm font-body-md text-body-md text-outline md:font-body-md md:text-body-md">
                {aboutPage.timelineSubtitle}
              </p>
            </div>
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
                    <h3 className="font-headline-md text-[24px] leading-tight text-on-surface md:text-headline-md">
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
                      "w-fit rounded-full px-3 py-1 font-label-md text-[12px] md:text-label-md",
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

function EducationSection() {
  return (
    <section className="mb-section-gap-2">
      <Container>
        <div className="rounded-xl border border-surface-variant/50 bg-surface-container-low px-5 py-stack-md md:px-0 md:py-stack-lg">
          <div className="mx-auto max-w-4xl text-center">
            <span className="material-symbols-outlined mb-4 text-3xl text-primary md:text-4xl">
              school
            </span>
            <h2 className="mb-stack-md font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-headline-lg md:text-headline-lg">
              {aboutPage.educationTitle}
            </h2>
            <div className="flex flex-col items-center justify-center gap-stack-md md:flex-row md:gap-32">
              <div className="text-center md:text-left">
                <p className="mb-2 font-label-md text-[12px] uppercase tracking-widest text-primary md:text-label-md">
                  {aboutPage.educationDegreeLabel}
                </p>
                <h4 className="font-headline-md text-[24px] leading-snug text-on-surface md:text-headline-md">
                  {education.degree}
                </h4>
                <p className="font-body-md text-body-md text-outline md:text-body-md">
                  {education.year} · {education.detail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AboutPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 pb-stack-lg md:pt-0">
      <section className="mb-section-gap">
        <Container className="md:pt-stack-lg">
          <h1 className="mb-stack-md font-headline-lg-mobile text-headline-lg-mobile leading-tight text-primary md:font-display-lg md:text-display-lg md:leading-none">
            {aboutPage.title}
          </h1>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant md:max-w-4xl md:font-body-lg md:text-body-lg">
            {aboutPage.bio}
          </p>
        </Container>
      </section>

      <ExperienceTimeline />
      <EducationSection />

      <section className="mb-section-gap text-center">
        <Container>
          <p className="mb-stack-sm font-body-md text-body-md italic text-on-surface-variant md:font-body-lg md:text-body-lg">
            {aboutPage.cta.prompt}
          </p>
          <Link
            href={aboutPage.cta.href}
            className="editorial-underline font-headline-lg-mobile text-headline-lg-mobile text-primary md:font-headline-lg md:text-headline-lg"
          >
            {aboutPage.cta.linkLabel}
          </Link>
        </Container>
      </section>
    </main>
  );
}
