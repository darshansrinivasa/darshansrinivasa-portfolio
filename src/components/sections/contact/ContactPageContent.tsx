import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

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
      <span className="material-symbols-outlined shrink-0 text-[20px] text-primary md:text-[24px]">
        {link.icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-label-md text-label-md text-on-surface">{link.label}</p>
        <p className="mt-0.5 break-all font-body-md text-[14px] leading-snug text-on-surface-variant md:mt-0 md:break-normal md:text-body-md">
          {display}
        </p>
        <p className="mt-1 font-body-md text-[13px] leading-snug text-on-surface-variant/80 md:text-body-md md:leading-normal">
          {link.description}
        </p>
      </div>
      <span className="material-symbols-outlined shrink-0 text-[20px] text-on-surface-variant transition-transform group-hover:translate-x-1 md:text-[24px]">
        arrow_forward
      </span>
    </>
  );

  const className =
    "group flex items-center gap-3 border-b border-outline-variant/30 py-3 transition-colors last:border-b-0 hover:text-primary md:gap-stack-sm md:py-stack-sm";

  if (!href) {
    return (
      <div className={className} title="Add URL in src/content/site.ts">
        <span className="material-symbols-outlined shrink-0 text-[20px] text-primary opacity-60 md:text-[24px]">
          {link.icon}
        </span>
        <div className="min-w-0 flex-1 opacity-60">
          <p className="font-label-md text-label-md">{link.label}</p>
          <p className="mt-0.5 font-body-md text-[14px] leading-snug text-on-surface-variant md:mt-0 md:text-body-md">
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
    <main className="flex-1 pb-section-gap pt-8 md:pt-0 pb-stack-lg">
      <Container className="md:pt-stack-lg">
        <div className="grid grid-cols-1 items-start gap-stack-md md:grid-cols-12 md:gap-grid-gutter">
          <div className="space-y-stack-md md:col-span-5 md:space-y-stack-lg">
            <header className="space-y-3 text-center md:space-y-stack-sm md:text-left">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile leading-tight text-on-surface md:font-display-lg md:text-display-lg md:leading-none">
                {contactPage.titleBefore}
                <span className="italic font-normal text-primary">
                  {contactPage.titleEmphasis}
                </span>
              </h1>
              <p className="mx-auto max-w-xs font-body-md text-body-md text-on-surface-variant md:mx-0 md:max-w-md md:font-body-lg md:text-body-lg md:leading-relaxed">
                {contactPage.description}
              </p>
            </header>

            <div className="space-y-stack-sm md:space-y-stack-md">
              <div>
                <p className="mb-1.5 font-label-md text-[12px] uppercase tracking-widest text-outline md:mb-1 md:text-label-md">
                  {contactPage.emailLabel}
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="break-all font-body-lg text-body-lg font-medium text-on-surface transition-colors duration-300 hover:text-primary md:break-normal md:font-headline-md md:text-headline-md"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="mb-1.5 font-label-md text-[12px] uppercase tracking-widest text-outline md:mb-1 md:text-label-md">
                  {contactPage.linkedInLabel}
                </p>
                <a
                  href={site.linkedIn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-lg text-body-lg font-medium text-on-surface transition-colors duration-300 hover:text-primary md:font-headline-md md:text-headline-md"
                >
                  LinkedIn / in/darshan-srinivasa
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container-low p-5 shadow-sm shadow-primary/5 md:col-span-6 md:col-start-7 md:p-stack-md lg:p-stack-lg">
            <div className="mb-stack-sm md:mb-stack-md">
              <h2 className="font-headline-md text-[24px] leading-snug text-on-surface md:text-headline-md md:leading-normal">
                {contactPage.connectTitle}
              </h2>
              <p className="mt-1.5 font-body-md text-[14px] leading-relaxed text-on-surface-variant md:mt-2 md:text-body-md md:leading-normal">
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

      </Container>
    </main>
  );
}
