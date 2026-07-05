"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { site } from "@/content/site";
import { trackResumeDownload } from "@/lib/analytics";

type ResumeDownloadLinkProps = ComponentPropsWithoutRef<"a"> & {
  children?: ReactNode;
  /** Visible label sent to GTM — defaults to site.resume.label */
  buttonText?: string;
};

export function ResumeDownloadLink({
  onClick,
  children = site.resume.label,
  buttonText = site.resume.label,
  ...props
}: ResumeDownloadLinkProps) {
  return (
    <a
      href={site.resume.href}
      download={site.resume.fileName}
      onClick={(event) => {
        trackResumeDownload({
          file_name: site.resume.fileName,
          button_text: buttonText,
        });
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
