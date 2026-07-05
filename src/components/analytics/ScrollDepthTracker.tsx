"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  SCROLL_DEPTH_THRESHOLDS,
  trackScrollDepth,
} from "@/lib/analytics";

/**
 * Tracks scroll depth milestones (25 / 50 / 75 / 90 %) once per page view.
 * Resets automatically when the route changes.
 */
export function ScrollDepthTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) {
        return;
      }

      const scrollPercent = Math.round(
        (window.scrollY / scrollableHeight) * 100,
      );

      for (const threshold of SCROLL_DEPTH_THRESHOLDS) {
        if (scrollPercent >= threshold) {
          trackScrollDepth(threshold, pathname);
        }
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
