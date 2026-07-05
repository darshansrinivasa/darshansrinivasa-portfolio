"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackOutboundLink, type OutboundLinkType } from "@/lib/analytics";

type TrackedLinkProps = ComponentPropsWithoutRef<"a"> & {
  linkType: OutboundLinkType;
  location: string;
  children: ReactNode;
};

export function TrackedLink({
  linkType,
  location,
  href,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        if (href) {
          trackOutboundLink(linkType, href, location);
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
