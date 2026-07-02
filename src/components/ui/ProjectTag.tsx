import { cn } from "@/lib/cn";

const tagVariants = [
  "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  "bg-primary-fixed text-on-primary-fixed-variant",
  "bg-secondary-fixed-dim text-on-secondary-fixed-variant",
] as const;

type ProjectTagProps = {
  label: string;
  index: number;
  variant?: "desktop" | "mobile";
};

export function ProjectTag({
  label,
  index,
  variant = "desktop",
}: ProjectTagProps) {
  if (variant === "mobile") {
    return (
      <span className="bg-secondary-container px-3 py-1 font-label-md text-label-md text-on-secondary-container uppercase">
        {label}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 font-label-md text-label-md",
        tagVariants[index % tagVariants.length],
      )}
    >
      {label}
    </span>
  );
}
