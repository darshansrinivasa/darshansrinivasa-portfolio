export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: AnalyticsParams[];
  }
}

export function isAnalyticsEnabled(): boolean {
  return Boolean(GTM_ID);
}

export function trackEvent(event: string, params?: AnalyticsParams): void {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...params,
  });
}

export type ResumeDownloadLocation = "hero" | "header" | "mobile_menu";

export function trackResumeDownload(location: ResumeDownloadLocation): void {
  trackEvent("resume_download", {
    event_category: "engagement",
    link_location: location,
    file_name: "Darshan_S_Resume.pdf",
    link_url: "/resume.pdf",
  });
}

export type OutboundLinkType = "linkedin" | "github" | "email";

export function trackOutboundLink(
  linkType: OutboundLinkType,
  url: string,
  location: string,
): void {
  trackEvent("outbound_link_click", {
    event_category: "engagement",
    link_type: linkType,
    link_url: url,
    link_location: location,
  });
}

export function trackContactFormSubmit(projectType: string): void {
  trackEvent("contact_form_submit", {
    event_category: "conversion",
    form_name: "contact",
    project_type: projectType,
  });
}

export function trackPageView(path: string): void {
  trackEvent("page_view", {
    page_path: path,
    page_title: typeof document !== "undefined" ? document.title : "",
  });
}
