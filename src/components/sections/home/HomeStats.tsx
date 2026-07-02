import { homeStats } from "@/content/home";
import { Container } from "@/components/layout/Container";

export function HomeStats() {
  return (
    <section className="border-y border-outline-variant/30 bg-secondary-container/50 py-stack-lg">
      <Container>
        <div className="grid grid-cols-2 gap-stack-md md:grid-cols-4">
          {homeStats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-base border-l border-primary/20 pl-4 md:pl-6"
            >
              <span className="font-headline-md text-[28px] leading-tight text-primary md:text-headline-md">
                {stat.value}
              </span>
              <span className="font-label-md text-[12px] uppercase tracking-widest text-on-secondary-container md:text-label-md">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
