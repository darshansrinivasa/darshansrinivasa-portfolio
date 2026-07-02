import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="w-full bg-secondary-container py-stack-lg pb-28 md:pb-stack-lg">
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
          <a
            href={site.linkedIn.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
          >
            {site.linkedIn.label}
          </a>
          {site.github.href ? (
            <a
              href={site.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
            >
              {site.github.label}
            </a>
          ) : (
            <span
              className="font-label-md text-label-md text-on-secondary-container opacity-60"
              title="GitHub URL — add to src/content/site.ts"
            >
              {site.github.label}
            </span>
          )}
          <a
            href={`mailto:${site.email}`}
            className="font-label-md text-label-md text-on-secondary-container transition-all duration-300 hover:text-primary hover:underline"
          >
            Email
          </a>
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
