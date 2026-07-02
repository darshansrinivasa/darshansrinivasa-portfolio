import Link from "next/link";
import { homeHero } from "@/content/home";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";

export function HomeHero() {
  return (
    <>
      {/* Desktop hero */}
      <section className="relative hidden overflow-hidden py-section-gap md:block">
        <Container className="flex flex-col items-start gap-stack-md">
          <div className="max-w-4xl space-y-stack-sm">
            <h1 className="font-display-lg text-display-lg text-on-surface leading-[1.1] tracking-tight">
              {homeHero.headlineBefore}{" "}
              <span className="text-primary italic">{homeHero.headlineEmphasis}</span>{" "}
              {homeHero.headlineAfter}
            </h1>
            <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
              {homeHero.subheadline}
            </p>
          </div>

          <div className="flex items-center gap-stack-md pt-4">
            <Link
              href="/projects"
              className="flex items-center gap-2 rounded-full bg-primary-fixed px-8 py-4 font-label-md text-label-md text-on-primary-fixed transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-95"
            >
              View Projects
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <a
              href={site.resume.href}
              download
              className="px-8 py-4 font-label-md text-label-md text-on-surface editorial-underline transition-all duration-300 hover:text-primary"
            >
              {site.resume.label}
            </a>
          </div>
        </Container>
      </section>

      {/* Mobile hero */}
      <section className="flex flex-col gap-stack-md px-grid-margin py-stack-lg md:hidden">
        <div className="flex flex-col gap-4">
          <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-primary">
            {homeHero.eyebrow}
          </span>
          <h1 className="max-w-sm font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface">
            {homeHero.headlineBefore}{" "}
            <span className="font-headline-md italic text-primary">
              {homeHero.headlineEmphasis}
            </span>{" "}
            {homeHero.headlineAfter}
          </h1>
        </div>

        <div className="editorial-shadow relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          <ProjectImagePlaceholder
            alt="Portrait placeholder"
            label="Portrait placeholder"
          />
        </div>

        <div className="flex flex-col gap-6">
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
            {homeHero.subheadline}
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="flex-1 rounded-lg bg-primary py-4 text-center font-label-md text-label-md text-on-primary transition-all hover:opacity-90 active:scale-95"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="flex-1 border-b-2 border-on-surface py-4 text-center font-label-md text-label-md text-on-surface transition-all hover:border-primary hover:text-primary"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
