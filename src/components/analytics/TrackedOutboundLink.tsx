"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { trackOutboundLinkClick } from "@/lib/analytics";

type TrackedOutboundLinkProps = ComponentPropsWithoutRef<"a"> & {
  children: ReactNode;
};

/** Tracks outbound_link_click for generic external URLs (not social/contact). */
export function TrackedOutboundLink({
  href,
  onClick,
  children,
  ...props
}: TrackedOutboundLinkProps) {
  return (
    <a
      href={href}
      onClick={(event) => {
        if (href) {
          trackOutboundLinkClick(href);
        }
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
