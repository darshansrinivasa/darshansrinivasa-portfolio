"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";
import { trackCtaClick } from "@/lib/analytics";

type TrackedCtaLinkProps = ComponentProps<typeof Link> & {
  buttonText: string;
};

/** Tracks cta_click for prominent in-site call-to-action links. */
export function TrackedCtaLink({
  buttonText,
  onClick,
  ...props
}: TrackedCtaLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      onClick={(event) => {
        trackCtaClick(buttonText, pathname);
        onClick?.(event);
      }}
    />
  );
}
