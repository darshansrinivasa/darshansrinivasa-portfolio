/**
 * Google Tag Manager analytics utilities.
 *
 * All custom events are pushed to `window.dataLayer` for GTM to forward to GA4
 * (or any other tag). No gtag.js or GA hardcoding — GTM only.
 */

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

/** Scroll depth milestones — each fires at most once per page. */
export const SCROLL_DEPTH_THRESHOLDS = [25, 50, 75, 90] as const;

export type ScrollDepthPercentage = (typeof SCROLL_DEPTH_THRESHOLDS)[number];

/** Typed event map — extend here when adding new analytics events. */
export type AnalyticsEventMap = {
  resume_download: {
    file_name: string;
    source_page: string;
    button_text: string;
  };
  contact_form_start: Record<string, never>;
  contact_form_submit: {
    source_page: string;
  };
  project_click: {
    project_name: string;
    category: string;
  };
  github_click: Record<string, never>;
  linkedin_click: Record<string, never>;
  email_click: Record<string, never>;
  phone_click: Record<string, never>;
  cta_click: {
    button_text: string;
    page: string;
  };
  scroll_depth: {
    percentage: ScrollDepthPercentage;
  };
  outbound_link_click: {
    url: string;
  };
};

export type AnalyticsEventName = keyof AnalyticsEventMap;

type DataLayerEntry = {
  event: string;
  [key: string]: string | number | boolean | undefined;
};

declare global {
  interface Window {
    dataLayer?: DataLayerEntry[];
  }
}

/** Session-scoped keys for events that must not fire more than once. */
const firedOnceKeys = new Set<string>();

export function isAnalyticsEnabled(): boolean {
  return Boolean(GTM_ID);
}

/** Current pathname — safe to call from click handlers on the client. */
export function getCurrentPagePath(): string {
  if (typeof window === "undefined") {
    return "";
  }

  return window.location.pathname;
}

/**
 * Low-level push to GTM dataLayer.
 * Prefer the typed helper functions below for application code.
 */
export function pushToDataLayer<T extends AnalyticsEventName>(
  event: T,
  params: AnalyticsEventMap[T],
): void {
  if (typeof window === "undefined" || !isAnalyticsEnabled()) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    ...params,
  });
}

/** Push an event only once per deduplication key (e.g. scroll depth, form start). */
function pushOnce<T extends AnalyticsEventName>(
  dedupKey: string,
  event: T,
  params: AnalyticsEventMap[T],
): void {
  if (firedOnceKeys.has(dedupKey)) {
    return;
  }

  firedOnceKeys.add(dedupKey);
  pushToDataLayer(event, params);
}

// ——— Event helpers ———

export function trackResumeDownload({
  file_name,
  source_page,
  button_text,
}: {
  file_name: string;
  source_page?: string;
  button_text: string;
}): void {
  pushToDataLayer("resume_download", {
    file_name,
    source_page: source_page ?? getCurrentPagePath(),
    button_text,
  });
}

/** Fires once per session when the user first interacts with the contact form. */
export function trackContactFormStart(): void {
  pushOnce("contact_form_start", "contact_form_start", {});
}

export function trackContactFormSubmit(source_page?: string): void {
  pushToDataLayer("contact_form_submit", {
    source_page: source_page ?? getCurrentPagePath(),
  });
}

export function trackProjectClick(project_name: string, category: string): void {
  pushToDataLayer("project_click", { project_name, category });
}

export function trackGithubClick(): void {
  pushToDataLayer("github_click", {});
}

export function trackLinkedInClick(): void {
  pushToDataLayer("linkedin_click", {});
}

export function trackEmailClick(): void {
  pushToDataLayer("email_click", {});
}

export function trackPhoneClick(): void {
  pushToDataLayer("phone_click", {});
}

export function trackCtaClick(button_text: string, page?: string): void {
  pushToDataLayer("cta_click", {
    button_text,
    page: page ?? getCurrentPagePath(),
  });
}

/** Fires once per page for each scroll milestone (25 / 50 / 75 / 90). */
export function trackScrollDepth(
  percentage: ScrollDepthPercentage,
  pagePath: string,
): void {
  pushOnce(`scroll_depth:${pagePath}:${percentage}`, "scroll_depth", {
    percentage,
  });
}

/** Generic external link — use dedicated social helpers when applicable. */
export function trackOutboundLinkClick(url: string): void {
  pushToDataLayer("outbound_link_click", { url });
}

export type SocialLinkType = "github" | "linkedin" | "email" | "phone";

/** Routes social / contact links to their dedicated GTM events. */
export function trackSocialLinkClick(linkType: SocialLinkType): void {
  switch (linkType) {
    case "github":
      trackGithubClick();
      break;
    case "linkedin":
      trackLinkedInClick();
      break;
    case "email":
      trackEmailClick();
      break;
    case "phone":
      trackPhoneClick();
      break;
  }
}
