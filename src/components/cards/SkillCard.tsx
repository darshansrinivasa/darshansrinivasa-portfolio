import type { SkillCategory } from "@/content/skills";
import { SkillTag, type SkillTagVariant } from "@/components/ui/SkillTag";
import { cn } from "@/lib/cn";

const desktopCardStyles: Record<
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

const mobileCardStyles: Record<
  SkillCategory["mobileVariant"],
  { card: string; chip: SkillTagVariant }
> = {
  secondary: {
    card: "bg-secondary-container/30",
    chip: "mobile-secondary",
  },
  surface: {
    card: "bg-surface-container-low",
    chip: "mobile-surface",
  },
  primary: {
    card: "bg-primary-fixed/20",
    chip: "mobile-primary",
  },
  tertiary: {
    card: "bg-tertiary-fixed/30",
    chip: "mobile-tertiary",
  },
  analytics: {
    card: "bg-surface-container-low",
    chip: "mobile-surface",
  },
  practices: {
    card: "bg-on-secondary-fixed/5",
    chip: "mobile-surface",
  },
};

const desktopColSpanClasses: Record<SkillCategory["desktopColSpan"], string> = {
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
};

type SkillCardDesktopProps = {
  category: SkillCategory;
};

type SkillCardMobileProps = {
  category: SkillCategory;
};

export function SkillCardDesktop({ category }: SkillCardDesktopProps) {
  const styles = desktopCardStyles[category.desktopVariant];

  return (
    <div
      className={cn(
        "skill-card flex flex-col rounded-xl p-stack-md",
        styles.card,
        category.id === "shopify" ? "justify-between" : "",
        desktopColSpanClasses[category.desktopColSpan],
      )}
    >
      <div className={category.id === "apps" ? "mb-stack-md" : undefined}>
        <div
          className={cn(
            "mb-stack-sm flex items-center gap-2",
            styles.heading,
          )}
        >
          <span className="material-symbols-outlined">{category.icon}</span>
          <h3 className="font-headline-md text-headline-md">{category.title}</h3>
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
          <SkillTag key={skill} label={skill} variant="desktop" />
        ))}
      </div>
    </div>
  );
}

export function SkillCardMobile({ category }: SkillCardMobileProps) {
  const styles = mobileCardStyles[category.mobileVariant];

  return (
    <div
      className={cn(
        "editorial-shadow rounded-lg p-6",
        styles.card,
      )}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="material-symbols-outlined text-2xl text-primary">
          {category.icon}
        </span>
        <h2 className="font-headline-md text-2xl text-on-surface">
          {category.title}
        </h2>
      </div>
      {category.description ? (
        <p className="mb-4 font-body-md text-on-surface-variant">
          {category.description}
        </p>
      ) : null}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <SkillTag key={skill} label={skill} variant={styles.chip} />
        ))}
      </div>
    </div>
  );
}
