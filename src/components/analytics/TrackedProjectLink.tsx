"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackProjectClick } from "@/lib/analytics";

type TrackedProjectLinkProps = ComponentProps<typeof Link> & {
  projectName: string;
  category: string;
};

/** Tracks project_click when a user opens a project or case study. */
export function TrackedProjectLink({
  projectName,
  category,
  onClick,
  ...props
}: TrackedProjectLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackProjectClick(projectName, category);
        onClick?.(event);
      }}
    />
  );
}
