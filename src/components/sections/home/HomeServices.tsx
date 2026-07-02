import {
  homeServicesDesktop,
  homeServicesIntro,
  homeServicesMobile,
  type HomeService,
} from "@/content/home";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";

function ServiceCardDesktop({
  icon,
  title,
  description,
}: Pick<HomeService, "icon" | "title" | "description">) {
  return (
    <div className="rounded-lg border border-outline-variant/20 bg-surface p-stack-md transition-shadow duration-300 hover:shadow-md">
      <span className="material-symbols-outlined mb-4 text-3xl text-primary">
        {icon}
      </span>
      <h4 className="mb-2 font-label-md text-label-md text-on-surface">
        {title}
      </h4>
      <p className="font-body-md text-on-surface-variant">{description}</p>
    </div>
  );
}

function ServiceCardMobile({
  icon,
  title,
  description,
  tags,
  variant = "default",
}: HomeService) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl p-8",
        variant === "default" &&
          "border border-surface-variant/50 bg-surface-container-low",
        variant === "primary" && "bg-primary-fixed/30",
        variant === "tertiary" && "bg-tertiary-fixed/30",
      )}
    >
      <span className="material-symbols-outlined text-4xl text-primary">
        {icon}
      </span>
      <h3 className="font-headline-md text-headline-md text-on-surface">
        {title}
      </h3>
      <p className="font-body-md text-on-surface-variant">{description}</p>
      {tags?.length ? (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary-container px-3 py-1 font-label-md text-[12px] uppercase text-on-secondary-container"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function HomeServices() {
  return (
    <>
      {/* Desktop */}
      <section className="hidden bg-surface-container-low py-section-gap md:block">
        <Container>
          <div className="grid grid-cols-1 gap-grid-gutter md:grid-cols-12">
            <div className="flex flex-col justify-center space-y-stack-sm md:col-span-4">
              <h2 className="font-headline-lg text-headline-lg">
                {homeServicesIntro.title}
              </h2>
              <p className="font-body-md text-on-surface-variant">
                {homeServicesIntro.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-stack-sm md:col-span-8 md:grid-cols-2">
              {homeServicesDesktop.map((service) => (
                <ServiceCardDesktop key={service.title} {...service} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile */}
      <section className="px-grid-margin py-section-gap md:hidden">
        <div className="mb-stack-md flex flex-col gap-stack-sm text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface">
            Digital Craftsmanship
          </h2>
          <p className="text-on-surface-variant">
            Core capabilities across Shopify frontend engineering.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {homeServicesMobile.map((service) => (
            <ServiceCardMobile key={service.title} {...service} />
          ))}
        </div>
      </section>
    </>
  );
}
