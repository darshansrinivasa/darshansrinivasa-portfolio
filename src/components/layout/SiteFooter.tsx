import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { site } from "@/content/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="w-full bg-secondary-container py-stack-lg pb-stack-lg">
      <Container className="flex flex-col items-center justify-between gap-base md:flex-row md:items-center">
        <div className="flex flex-col items-center gap-2 md:items-start">
          <span className="font-headline-md text-headline-md text-on-secondary-container">
            {site.name}
          </span>
          <p className="text-center font-body-md text-body-md text-on-secondary-container md:text-left">
            {site.copyright}
          </p>
        </div>

        <div className="mt-6 flex gap-stack-md md:mt-0">
          <TrackedLink
            href={site.linkedIn.href}
            linkType="linkedin"
            location="footer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
          >
            {site.linkedIn.label}
          </TrackedLink>
          {site.github.href ? (
            <TrackedLink
              href={site.github.href}
              linkType="github"
              location="footer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
            >
              {site.github.label}
            </TrackedLink>
          ) : (
            <span
              className="font-label-md text-label-md text-on-secondary-container opacity-60"
              title="GitHub URL — add to src/content/site.ts"
            >
              {site.github.label}
            </span>
          )}
          <TrackedLink
            href={`mailto:${site.email}`}
            linkType="email"
            location="footer"
            className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
          >
            Email
          </TrackedLink>
          <Link
            href="/contact"
            className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
          >
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
