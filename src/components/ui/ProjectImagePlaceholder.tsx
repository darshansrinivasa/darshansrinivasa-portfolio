import { cn } from "@/lib/cn";

type ProjectImagePlaceholderProps = {
  alt: string;
  className?: string;
  label?: string;
};

export function ProjectImagePlaceholder({
  alt,
  className,
  label = "Image placeholder",
}: ProjectImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "flex h-full w-full items-center justify-center bg-surface-container text-on-surface-variant",
        className,
      )}
    >
      <span className="px-4 text-center font-label-md text-[10px] uppercase tracking-widest opacity-60">
        {label}
      </span>
    </div>
  );
}
