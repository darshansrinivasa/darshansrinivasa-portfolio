import Image from "next/image";
import { getCaseStudyBySlug } from "@/content/case-studies";
import { ProjectImagePlaceholder } from "@/components/ui/ProjectImagePlaceholder";
import { cn } from "@/lib/cn";

type ProjectThumbnailProps = {
  slug: string;
  title: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

export function ProjectThumbnail({
  slug,
  title,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: ProjectThumbnailProps) {
  const heroImage = getCaseStudyBySlug(slug)?.heroImage;

  if (heroImage) {
    return (
      <div className={cn("relative h-full w-full", className)}>
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          sizes={sizes}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <ProjectImagePlaceholder
      alt={`${title} project screenshot placeholder`}
      className={imageClassName}
    />
  );
}
