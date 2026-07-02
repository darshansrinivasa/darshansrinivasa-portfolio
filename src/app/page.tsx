import { Container } from "@/components/layout/Container";

/**
 * Temporary Phase 1 layout preview — replaced in Phase 2 (Home page).
 */
export default function Home() {
  return (
    <main className="flex-1">
      <Container className="flex flex-col gap-stack-lg py-section-gap">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          Phase 1 — Layout shell
        </p>

        <h1 className="max-w-4xl font-display-lg text-display-lg text-on-surface">
          Header, footer, mobile menu, and bottom navigation are wired.
        </h1>

        <p className="max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
          Test navigation across routes. On mobile, open the hamburger menu and
          use the bottom tab bar. Home page content comes in Phase 2.
        </p>
      </Container>
    </main>
  );
}
