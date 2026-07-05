"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackSocialLinkClick, type SocialLinkType } from "@/lib/analytics";

type TrackedLinkProps = ComponentPropsWithoutRef<"a"> & {
  linkType: SocialLinkType;
  children: ReactNode;
};

/** Tracks github_click, linkedin_click, email_click, or phone_click. */
export function TrackedLink({
  linkType,
  href,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        trackSocialLinkClick(linkType);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
