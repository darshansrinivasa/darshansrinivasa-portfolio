export type NavItem = {
  label: string;
  href: string;
  icon: string;
  shortLabel: string;
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/", icon: "home", shortLabel: "Home" },
  { label: "Projects", href: "/projects", icon: "work", shortLabel: "Projects" },
  { label: "Skills", href: "/skills", icon: "star", shortLabel: "Skills" },
  { label: "About", href: "/about", icon: "person", shortLabel: "About" },
  { label: "Contact", href: "/contact", icon: "mail", shortLabel: "Contact" },
];

export function isNavActive(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
