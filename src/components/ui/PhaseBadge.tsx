import type { CaseStudyPhaseLabel } from "@/content/case-studies";
import { cn } from "@/lib/cn";

const phaseStyles: Record<CaseStudyPhaseLabel, string> = {
  Problem: "bg-error-container text-on-error-container",
  Action: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  Result: "bg-primary-fixed text-on-primary-fixed-variant",
};

type PhaseBadgeProps = {
  label: CaseStudyPhaseLabel;
  className?: string;
};

export function PhaseBadge({ label, className }: PhaseBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-4 py-1 font-label-md text-label-md uppercase tracking-widest",
        phaseStyles[label],
        className,
      )}
    >
      {label}
    </span>
  );
}
