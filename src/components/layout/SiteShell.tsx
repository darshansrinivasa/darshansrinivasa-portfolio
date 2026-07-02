"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { MobileMenu } from "./MobileMenu";
import { MobileBottomNav } from "./MobileBottomNav";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SiteHeader
        pathname={pathname}
        isScrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        onMenuOpen={() => setIsMenuOpen(true)}
      />

      <MobileMenu
        isOpen={isMenuOpen}
        pathname={pathname}
        onClose={() => setIsMenuOpen(false)}
      />

      <div className="flex min-h-screen flex-col pt-24 pb-28 md:pb-0">
        {children}
        <SiteFooter />
      </div>

      <MobileBottomNav pathname={pathname} />
    </>
  );
}
