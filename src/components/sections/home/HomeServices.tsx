import {
  homeServicesDesktop,
  homeServicesIntro,
  type HomeService,
} from "@/content/home";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

function ServiceCard({
  icon,
  title,
  description,
  variant = "default",
}: HomeService) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl p-6 md:p-8",
        variant === "default" &&
          "border border-surface-variant/50 bg-surface-container-low",
        variant === "primary" && "bg-primary-fixed/30",
        variant === "tertiary" && "bg-tertiary-fixed/30",
      )}
    >
      <span className="material-symbols-outlined text-3xl text-primary md:text-4xl">
        {icon}
      </span>
      <h3 className="font-headline-md text-[24px] leading-tight text-on-surface md:text-headline-md">
        {title}
      </h3>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

const cardVariants: HomeService["variant"][] = [
  "default",
  "primary",
  "tertiary",
  "default",
];

export function HomeServices() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <Container>
        <div className="grid grid-cols-1 gap-stack-md md:grid-cols-12 md:gap-grid-gutter">
          <div className="flex flex-col justify-center space-y-stack-sm md:col-span-4">
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight md:font-headline-lg md:text-headline-lg">
              {homeServicesIntro.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant md:font-body-lg md:text-body-lg">
              {homeServicesIntro.description}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-stack-sm md:col-span-8 md:grid-cols-2">
            {homeServicesDesktop.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                variant={cardVariants[index % cardVariants.length]}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
