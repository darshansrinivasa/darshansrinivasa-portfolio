import { ResumeDownloadLink } from "@/components/analytics/ResumeDownloadLink";
import { TrackedCtaLink } from "@/components/analytics/TrackedCtaLink";
import { homeHero } from "@/content/home";
import { Container } from "@/components/layout/Container";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pt-stack-lg pb-section-gap md:py-section-gap">
      <Container className="flex flex-col items-start gap-stack-md">
        <div className="max-w-4xl space-y-stack-sm">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight tracking-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-[1.1]">
            {homeHero.headlineBefore}{" "}
            <span className="text-primary italic">{homeHero.headlineEmphasis}</span>{" "}
            {homeHero.headlineAfter}
          </h1>
          <p className="max-w-2xl font-body-md text-body-md leading-relaxed text-on-surface-variant md:font-body-lg md:text-body-lg">
            {homeHero.subheadline}
          </p>
        </div>

        <div className="flex flex-row flex-nowrap items-center gap-stack-sm pt-4 md:gap-stack-md">
          <TrackedCtaLink
            href="/projects"
            buttonText="View Projects"
            className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-fixed px-6 py-4 font-label-md text-label-md text-on-primary-fixed transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 active:scale-95 md:px-8"
          >
            View Projects
            <span className="material-symbols-outlined">arrow_forward</span>
          </TrackedCtaLink>
          <ResumeDownloadLink
            className="shrink-0 whitespace-nowrap px-6 py-4 text-center font-label-md text-label-md text-on-surface editorial-underline transition-all duration-300 hover:text-primary md:px-8"
          />
        </div>
      </Container>
    </section>
  );
}
