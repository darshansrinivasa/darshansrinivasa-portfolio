import { cn } from "@/lib/cn";

export type SkillTagVariant =
  | "desktop"
  | "mobile-secondary"
  | "mobile-surface"
  | "mobile-primary"
  | "mobile-tertiary";

type SkillTagProps = {
  label: string;
  variant?: SkillTagVariant;
};

const mobileChipStyles: Record<Exclude<SkillTagVariant, "desktop">, string> = {
  "mobile-secondary":
    "bg-secondary-container text-on-secondary-container",
  "mobile-surface": "bg-surface-variant text-on-surface-variant",
  "mobile-primary": "bg-primary-fixed text-on-primary-fixed-variant",
  "mobile-tertiary": "bg-tertiary-fixed text-on-tertiary-fixed-variant",
};

export function SkillTag({ label, variant = "desktop" }: SkillTagProps) {
  if (variant === "desktop") {
    return (
      <span className="tag-hover cursor-default rounded-full bg-surface-container-lowest px-4 py-1.5 font-label-md text-label-md text-on-surface transition-colors duration-300">
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "chip-hover rounded-full px-4 py-2 font-label-md text-label-md transition-all duration-300",
        mobileChipStyles[variant],
      )}
    >
      {label}
    </span>
  );
}
