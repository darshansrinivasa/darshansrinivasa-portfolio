import Link from "next/link";
import { mainNav, isNavActive } from "@/content/navigation";
import { cn } from "@/lib/cn";

type MobileBottomNavProps = {
  pathname: string;
};

export function MobileBottomNav({ pathname }: MobileBottomNavProps) {
  return (
    <nav
      aria-label="Mobile bottom navigation"
      className="fixed bottom-0 z-50 w-full bg-surface-bright shadow-[0_-2px_10px_rgba(0,0,0,0.03)] md:hidden"
    >
      <div className="flex items-center justify-around px-2 py-4">
        {mainNav.map((item) => {
          const active = isNavActive(pathname, item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 transition-colors duration-300",
                active
                  ? "border-b-2 border-primary pb-1 font-bold text-primary"
                  : "text-on-surface-variant",
              )}
              aria-current={active ? "page" : undefined}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={
                  active
                    ? { fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }
                    : undefined
                }
              >
                {item.icon}
              </span>
              <span className="font-label-md text-[10px] uppercase">
                {item.shortLabel}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
