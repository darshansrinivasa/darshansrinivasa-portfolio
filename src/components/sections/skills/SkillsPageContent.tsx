import { SkillCard } from "@/components/cards/SkillCard";
import { Container } from "@/components/layout/Container";
import { skillCategories, skillsPage } from "@/content/skills";

export function SkillsPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 pb-stack-lg md:pt-0">
      <header className="mb-section-gap">
        <Container className="md:pt-stack-lg">
          <span className="mb-stack-sm block font-label-md text-[12px] uppercase tracking-widest text-primary md:text-label-md">
            {skillsPage.eyebrow}
          </span>
          <h1 className="mb-stack-md font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-none">
            {skillsPage.title}
          </h1>
          <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant md:max-w-3xl md:font-body-lg md:text-body-lg">
            {skillsPage.description}
          </p>
        </Container>
      </header>

      <section className="mb-section-gap">
        <Container>
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:items-stretch md:gap-grid-gutter">
            {skillCategories.map((category) => (
              <SkillCard key={category.id} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-col items-start justify-between gap-stack-md border-y border-outline-variant/20 py-stack-md md:flex-row md:items-center md:py-stack-lg">
            <div className="max-w-2xl">
              <h2 className="font-headline-md text-[24px] leading-tight text-primary italic md:text-headline-md">
                &ldquo;{skillsPage.philosophy.quote}&rdquo;
              </h2>
            </div>
            <div className="md:text-right">
              <p className="font-label-md text-[12px] uppercase tracking-widest text-on-surface-variant md:text-label-md">
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
