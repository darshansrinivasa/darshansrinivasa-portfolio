import { cn } from "@/lib/cn";

const tagVariants = [
  "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  "bg-primary-fixed text-on-primary-fixed-variant",
  "bg-secondary-fixed-dim text-on-secondary-fixed-variant",
] as const;

type ProjectTagProps = {
  label: string;
  index: number;
};

export function ProjectTag({ label, index }: ProjectTagProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 font-label-md text-[12px] md:text-label-md",
        tagVariants[index % tagVariants.length],
      )}
    >
      {label}
    </span>
  );
}
