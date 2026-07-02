import { homeStats } from "@/content/home";
import { Container } from "@/components/layout/Container";

export function HomeStats() {
  return (
    <section className="bg-secondary-container py-stack-lg md:border-y md:border-outline-variant/30 md:bg-secondary-container/50">
      <Container>
        <div className="hidden grid-cols-1 gap-stack-md md:grid md:grid-cols-4">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-base border-l border-primary/20 pl-6"
            >
              <span className="font-headline-md text-headline-md text-primary">
                {stat.value}
              </span>
              <span className="font-label-md text-label-md uppercase tracking-widest text-on-secondary-container">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-stack-md md:hidden">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="border-l-2 border-primary pl-6"
            >
              <div className="font-headline-lg-mobile text-headline-lg-mobile text-on-secondary-container">
                {stat.value}
              </div>
              <div className="font-label-md text-label-md uppercase tracking-wider text-on-secondary-fixed-variant">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
