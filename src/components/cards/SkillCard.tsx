import type { SkillCategory } from "@/content/skills";
import { SkillTag } from "@/components/ui/SkillTag";
import { cn } from "@/lib/cn";

const cardStyles: Record<
  SkillCategory["desktopVariant"],
  { card: string; heading: string; body?: string }
> = {
  secondary: {
    card: "bg-secondary-container",
    heading: "text-on-secondary-container",
    body: "text-on-secondary-container/80",
  },
  tertiary: {
    card: "bg-tertiary-fixed",
    heading: "text-on-tertiary-fixed",
    body: "text-on-tertiary-fixed-variant",
  },
  primary: {
    card: "bg-primary-fixed",
    heading: "text-on-primary-fixed",
    body: "text-on-primary-fixed-variant",
  },
  surface: {
    card: "border border-outline-variant/30 bg-surface-container-low",
    heading: "text-on-surface",
    body: "text-on-surface-variant",
  },
  muted: {
    card: "bg-surface-variant/40",
    heading: "text-on-surface",
  },
  subtle: {
    card: "bg-on-secondary-fixed/5",
    heading: "text-on-surface",
  },
};

const colSpanClasses: Record<SkillCategory["desktopColSpan"], string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
};

type SkillCardProps = {
  category: SkillCategory;
};

export function SkillCard({ category }: SkillCardProps) {
  const styles = cardStyles[category.desktopVariant];

  return (
    <div
      className={cn(
        "skill-card flex flex-col rounded-xl p-5 md:p-stack-md",
        styles.card,
        category.id === "shopify" ? "justify-between" : "",
        colSpanClasses[category.desktopColSpan],
      )}
    >
      <div className={category.id === "apps" ? "mb-stack-md" : undefined}>
        <div
          className={cn(
            "mb-stack-sm flex items-center gap-2",
            styles.heading,
          )}
        >
          <span className="material-symbols-outlined text-[20px] md:text-[24px]">
            {category.icon}
          </span>
          <h3 className="font-headline-md text-[24px] leading-tight md:text-headline-md">
            {category.title}
          </h3>
        </div>
        {category.description ? (
          <p
            className={cn(
              "mb-stack-md font-body-md text-body-md",
              styles.body,
              category.id === "shopify" ? "max-w-xl" : undefined,
            )}
          >
            {category.description}
          </p>
        ) : null}
      </div>
      <div
        className={cn(
          "flex flex-wrap gap-2",
          category.id === "apps" ? "mt-auto" : undefined,
        )}
      >
        {category.skills.map((skill) => (
          <SkillTag key={skill} label={skill} />
        ))}
      </div>
    </div>
  );
}
