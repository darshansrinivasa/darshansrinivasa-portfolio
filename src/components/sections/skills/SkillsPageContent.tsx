import {
  SkillCardDesktop,
  SkillCardMobile,
} from "@/components/cards/SkillCard";
import { Container } from "@/components/layout/Container";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { skillCategories, skillsPage } from "@/content/skills";

export function SkillsPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 md:pt-0">
      <header className="mb-stack-lg">
        <Container className="max-w-3xl">
          <span className="mb-4 hidden font-label-md text-label-md uppercase tracking-widest text-primary md:block">
            {skillsPage.eyebrow}
          </span>
          <h1 className="mb-4 font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:mb-6 md:font-display-lg md:text-display-lg">
            <span className="md:hidden">{skillsPage.mobileTitle}</span>
            <span className="hidden md:inline">{skillsPage.title}</span>
          </h1>
          <p className="max-w-xs font-body-md text-on-surface-variant md:max-w-3xl md:font-body-lg md:text-body-lg md:leading-relaxed">
            <span className="md:hidden">{skillsPage.mobileDescription}</span>
            <span className="hidden md:inline">{skillsPage.description}</span>
          </p>
        </Container>
      </header>

      <section className="hidden md:block">
        <Container>
          <div className="grid grid-cols-1 items-stretch gap-grid-gutter md:grid-cols-12">
            {skillCategories.map((category) => (
              <SkillCardDesktop key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="space-y-6 px-grid-margin md:hidden">
        {skillCategories.map((category) => (
          <SkillCardMobile key={category.id} category={category} />
        ))}

        <div className="editorial-shadow relative mt-stack-lg h-48 overflow-hidden rounded-lg">
          <ProjectImagePlaceholder
            alt="Skills page decorative image placeholder"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-surface to-transparent" />
          <div className="absolute bottom-4 left-4 z-20">
            <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface">
              {skillsPage.mobileCaption}
            </p>
          </div>
        </div>
      </section>

      <section className="mt-section-gap hidden md:block">
        <Container>
          <div className="relative flex flex-col items-center justify-between gap-stack-md border-y border-outline-variant/20 py-stack-lg md:flex-row">
            <div className="max-w-2xl">
              <h2 className="font-headline-md text-headline-md italic leading-tight text-primary">
                &ldquo;{skillsPage.philosophy.quote}&rdquo;
              </h2>
            </div>
            <div className="text-right">
              <p className="font-label-md text-label-md uppercase tracking-widest text-on-surface-variant">
                {skillsPage.philosophy.approachLabel}
              </p>
              <p className="font-body-md text-body-md text-on-surface">
                {skillsPage.philosophy.approachValue}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
