"use client";

import Link from "next/link";
import { useEffect } from "react";
import { site } from "@/content/site";
import { mainNav, isNavActive } from "@/content/navigation";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  isOpen: boolean;
  pathname: string;
  onClose: () => void;
};

export function MobileMenu({ isOpen, pathname, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[100] flex flex-col overflow-hidden bg-surface"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <header className="flex h-20 items-center justify-between px-grid-margin py-stack-sm">
        <span className="font-headline-md text-headline-md text-on-surface tracking-tight">
          {site.name}
        </span>
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="-mr-2 p-2 text-on-surface-variant transition-colors hover:text-primary focus:outline-none"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </header>

      <div className="flex flex-grow flex-col justify-center px-grid-margin">
        <nav aria-label="Mobile main navigation" className="flex flex-col items-start space-y-stack-md">
          {mainNav.map((item, index) => {
            const active = isNavActive(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "nav-item-enter group block",
                  `nav-item-${index + 1}`,
                )}
              >
                <span
                  className={cn(
                    "font-headline-lg-mobile text-headline-lg-mobile transition-colors duration-300",
                    active
                      ? "text-primary"
                      : "text-on-surface group-hover:text-primary",
                  )}
                >
                  {item.label}
                </span>
                <div
                  className={cn(
                    "mt-1 h-0.5 bg-primary transition-all duration-500",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <footer className="flex flex-col gap-stack-md bg-secondary-container/30 px-grid-margin py-stack-lg">
        <div className="nav-item-enter nav-item-6">
          <a
            href={site.resume.href}
            download
            className="flex w-full items-center justify-center gap-2 bg-primary px-8 py-4 font-label-md text-label-md text-on-primary transition-transform duration-150 active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">download</span>
            {site.resume.label}
          </a>
        </div>

        <div className="flex flex-col gap-base text-on-surface-variant opacity-70">
          <p className="font-label-md text-label-md uppercase tracking-widest">
            Connect
          </p>
          <div className="flex gap-stack-sm font-body-md text-body-md">
            <a
              href={site.linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {site.linkedIn.label}
            </a>
            {site.github.href ? (
              <a
                href={site.github.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {site.github.label}
              </a>
            ) : (
              <span
                className="cursor-not-allowed opacity-60"
                title="GitHub URL — add to src/content/site.ts"
              >
                {site.github.label}
              </span>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
