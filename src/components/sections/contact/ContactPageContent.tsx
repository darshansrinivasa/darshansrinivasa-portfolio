import { TrackedLink } from "@/components/analytics/TrackedLink";
import { contactPage } from "@/content/contact";
import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/contact/ContactForm";

export function ContactPageContent() {
  return (
    <main className="flex-1 pb-section-gap pt-8 pb-stack-lg md:pt-0">
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
                <TrackedLink
                  href={`mailto:${site.email}`}
                  linkType="email"
                  location="contact_page"
                  className="break-all font-body-lg text-body-lg font-medium text-on-surface transition-colors duration-300 hover:text-primary md:break-normal md:font-headline-md md:text-headline-md"
                >
                  {site.email}
                </TrackedLink>
              </div>
              <div>
                <p className="mb-1.5 font-label-md text-[12px] uppercase tracking-widest text-outline md:mb-1 md:text-label-md">
                  {contactPage.linkedInLabel}
                </p>
                <TrackedLink
                  href={site.linkedIn.href}
                  linkType="linkedin"
                  location="contact_page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body-lg text-body-lg font-medium text-on-surface transition-colors duration-300 hover:text-primary md:font-headline-md md:text-headline-md"
                >
                  LinkedIn / in/darshan-srinivasa
                </TrackedLink>
              </div>
              <div className="pt-stack-sm">
                <div className="flex items-center justify-center gap-base text-on-surface-variant md:justify-start">
                  <span
                    className="material-symbols-outlined text-[20px] text-primary md:text-[24px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <span className="font-label-md text-[13px] text-label-md md:text-label-md">
                    {contactPage.locationLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg bg-surface-container-low p-5 shadow-sm shadow-primary/5 md:col-span-6 md:col-start-7 md:p-stack-md lg:p-stack-lg">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
