import Link from "next/link";
import { homeCta } from "@/content/home";

export function HomeCta() {
  return (
    <section className="relative mx-grid-margin mb-section-gap overflow-hidden rounded-2xl bg-primary p-10 text-center md:hidden">
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-on-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-on-primary/5 blur-2xl" />

      <h2 className="relative z-10 font-headline-lg-mobile text-headline-lg-mobile text-on-primary">
        {homeCta.title}
      </h2>
      <p className="relative z-10 font-body-md text-on-primary/80">
        {homeCta.description}
      </p>
      <Link
        href={homeCta.href}
        className="relative z-10 w-full rounded-lg bg-on-primary py-4 font-label-md text-label-md uppercase tracking-widest text-primary transition-colors hover:bg-secondary-fixed"
      >
        {homeCta.buttonLabel}
      </Link>
    </section>
  );
}
