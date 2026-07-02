import { Container } from "@/components/layout/Container";

type PagePlaceholderProps = {
  title: string;
  phase: string;
};

export function PagePlaceholder({ title, phase }: PagePlaceholderProps) {
  return (
    <main className="flex-1">
      <Container className="flex flex-col gap-stack-md py-section-gap">
        <p className="font-label-md text-label-md uppercase tracking-widest text-primary">
          {phase}
        </p>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">
          {title}
        </h1>
        <p className="max-w-2xl font-body-md text-body-md text-on-surface-variant">
          This page will be built in a later phase. Navigation and layout shell
          are active for testing.
        </p>
      </Container>
    </main>
  );
}
