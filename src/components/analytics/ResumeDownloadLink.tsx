"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { site } from "@/content/site";
import {
  trackResumeDownload,
  type ResumeDownloadLocation,
} from "@/lib/analytics";

type ResumeDownloadLinkProps = ComponentPropsWithoutRef<"a"> & {
  location: ResumeDownloadLocation;
  children?: ReactNode;
};

export function ResumeDownloadLink({
  location,
  onClick,
  children = site.resume.label,
  ...props
}: ResumeDownloadLinkProps) {
  return (
    <a
      href={site.resume.href}
      download={site.resume.fileName}
      onClick={(event) => {
        trackResumeDownload(location);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
