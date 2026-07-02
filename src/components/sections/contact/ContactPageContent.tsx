import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";

type ContactLinkConfig = (typeof contactPage.links)[number];

function getLinkHref(link: ContactLinkConfig): string | undefined {
  if (link.id === "email") {
    return link.getHref(site.email);
  }

  if ("hrefKey" in link && link.hrefKey) {
    const value = site[link.hrefKey];
    return typeof value === "object" && value && "href" in value
      ? value.href
      : undefined;
  }

  return undefined;
}

function getLinkDisplay(link: ContactLinkConfig): string {
  if (link.id === "email") {
    return site.email;
  }

  if (link.id === "linkedin") {
    return "linkedin.com/in/darshan-srinivasa";
  }

  if (link.id === "resume") {
    return site.resume.label;
  }

  if (link.id === "github" && site.github.href) {
    return site.github.href.replace(/^https?:\/\//, "");
  }

  return link.label;
}

function ContactLinkRow({ link }: { link: ContactLinkConfig }) {
  const href = getLinkHref(link);
  const display = getLinkDisplay(link);

  const content = (
    <>
      <span className="material-symbols-outlined text-primary">{link.icon}</span>
      <div className="flex-1">
        <p className="font-label-md text-label-md text-on-surface">{link.label}</p>
        <p className="font-body-md text-body-md text-on-surface-variant">
          {display}
        </p>
        <p className="mt-1 font-body-md text-body-md text-on-surface-variant/80">
          {link.description}
        </p>
      </div>
      <span className="material-symbols-outlined text-on-surface-variant transition-transform group-hover:translate-x-1">
        arrow_forward
      </span>
    </>
  );

  const className =
    "group flex items-center gap-stack-sm border-b border-outline-variant/30 py-stack-sm transition-colors last:border-b-0 hover:text-primary";

  if (!href) {
    return (
      <div className={className} title="Add URL in src/content/site.ts">
        <span className="material-symbols-outlined text-primary opacity-60">
          {link.icon}
        </span>
        <div className="flex-1 opacity-60">
          <p className="font-label-md text-label-md">{link.label}</p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            [Add {link.label} URL]
          </p>
        </div>
      </div>
    );
  }

  if (link.external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  if ("download" in link && link.download) {
    return (
      <a href={href} download className={className}>
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {content}
    </a>
  );
}

export function ContactPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 md:pt-0">
      <Container className="md:pt-stack-lg">
        <div className="grid grid-cols-1 items-start gap-grid-gutter md:grid-cols-12">
          <div className="space-y-stack-lg md:col-span-5">
            <header className="space-y-stack-sm text-center md:text-left">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface md:font-display-lg md:text-display-lg">
                {contactPage.titleBefore}
                <span className="italic font-normal text-primary">
                  {contactPage.titleEmphasis}
                </span>
              </h1>
              <p className="mx-auto max-w-md font-body-lg text-body-lg text-on-surface-variant md:mx-0">
                {contactPage.description}
              </p>
            </header>

            <div className="hidden space-y-stack-md md:block">
              <div>
                <p className="mb-1 font-label-md text-label-md uppercase tracking-widest text-outline">
                  {contactPage.emailLabel}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-headline-md text-headline-md text-on-surface transition-colors duration-300 hover:text-primary"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="mb-1 font-label-md text-label-md uppercase tracking-widest text-outline">
                  {contactPage.linkedInLabel}
                </p>
                <a
                  href={site.linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline-md text-headline-md text-on-surface transition-colors duration-300 hover:text-primary"
                >
                  LinkedIn / in/darshan-srinivasa
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container-low p-stack-md shadow-sm shadow-primary/5 md:col-span-6 md:col-start-7 md:p-stack-lg">
            <div className="mb-stack-md">
              <h2 className="font-headline-md text-headline-md text-on-surface">
                {contactPage.connectTitle}
              </h2>
              <p className="mt-2 font-body-md text-body-md text-on-surface-variant">
                {contactPage.connectDescription}
              </p>
            </div>
            <div className="flex flex-col">
              {contactPage.links.map((link) => (
                <ContactLinkRow key={link.id} link={link} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-section-gap">
          <div className="group relative h-[300px] overflow-hidden rounded-xl md:h-[400px]">
            <ProjectImagePlaceholder
              alt="Contact page atmospheric image placeholder"
              className="h-full w-full object-cover grayscale-[20%] transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 z-10 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            <div className="absolute bottom-stack-md left-stack-md z-20 max-w-sm px-grid-margin md:px-0">
              <p className="font-headline-md text-[24px] italic text-on-surface drop-shadow-sm md:text-headline-md md:text-white md:drop-shadow-md">
                &ldquo;{contactPage.imageCaption}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>

      <section className="mt-stack-lg px-grid-margin md:hidden">
        <div className="space-y-stack-md text-center">
          <div>
            <p className="mb-1 font-label-md text-label-md uppercase tracking-widest text-outline">
              {contactPage.emailLabel}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="mb-1 font-label-md text-label-md uppercase tracking-widest text-outline">
              {contactPage.linkedInLabel}
            </p>
            <a
              href={site.linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-headline-md text-headline-md text-on-surface transition-colors hover:text-primary"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
