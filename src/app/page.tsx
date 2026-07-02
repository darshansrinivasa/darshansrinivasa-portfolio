/**
 * Temporary Phase 0 token preview — replaced in Phase 2 (Home page).
 */
export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col gap-stack-lg px-grid-margin py-section-gap">
      <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
        Phase 0 — Editorial Craft foundation
      </p>

      <h1 className="max-w-4xl font-display-lg text-display-lg text-on-surface">
        Shopify Frontend Developer building fast,{" "}
        <span className="text-primary italic">conversion-focused</span>{" "}
        storefronts
      </h1>

      <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
        Design tokens, typography, and global styles are wired. Layout shell and
        pages come in later phases.
      </p>

      <div className="flex flex-wrap gap-stack-sm">
        <span className="rounded-full bg-primary px-6 py-2 font-label-md text-label-md text-on-primary">
          Primary
        </span>
        <span className="rounded-full bg-secondary-container px-6 py-2 font-label-md text-label-md text-on-secondary-container">
          Secondary
        </span>
        <span className="rounded-full bg-primary-fixed px-6 py-2 font-label-md text-label-md text-on-primary-fixed">
          Primary Fixed
        </span>
      </div>

      <a
        href="#"
        className="font-label-md text-label-md text-on-surface editorial-underline w-fit hover:text-primary transition-colors duration-300"
      >
        Editorial underline link
      </a>
    </main>
  );
}
