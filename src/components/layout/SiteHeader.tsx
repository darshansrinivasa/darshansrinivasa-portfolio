import Link from "next/link";
import { site } from "@/content/site";
import { mainNav, isNavActive } from "@/content/navigation";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SiteHeaderProps = {
  pathname: string;
  isScrolled: boolean;
  isMenuOpen: boolean;
  onMenuOpen: () => void;
};

export function SiteHeader({
  pathname,
  isScrolled,
  isMenuOpen,
  onMenuOpen,
}: SiteHeaderProps) {
  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full bg-surface/80 backdrop-blur-md shadow-sm shadow-primary/5 transition-all duration-300",
        isScrolled && "shadow-md",
      )}
    >
      <Container
        as="div"
        className={cn(
          "flex items-center justify-between transition-all duration-300",
          isScrolled ? "py-2" : "py-4",
        )}
      >
        <Link
          href="/"
          className="font-headline-md text-headline-md text-on-surface tracking-tight"
        >
          {site.name}
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={onMenuOpen}
          className="p-2 text-primary transition-transform duration-150 active:scale-95 focus:outline-none md:hidden"
        >
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>

        <div className="hidden items-center gap-stack-md md:flex">
          <nav aria-label="Main navigation" className="flex items-center gap-stack-md">
            {mainNav.map((item) => {
              const active = isNavActive(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-label-md text-label-md transition-colors duration-300",
                    active
                      ? "border-b-2 border-primary pb-1 font-bold text-primary"
                      : "text-on-surface-variant hover:text-primary",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <a
            href={site.resume.href}
            download
            className="bg-primary px-6 py-2 font-label-md text-label-md text-on-primary rounded-full transition-all duration-200 hover:opacity-80 active:scale-95"
          >
            {site.resume.label}
          </a>
        </div>
      </Container>
    </header>
  );
}
