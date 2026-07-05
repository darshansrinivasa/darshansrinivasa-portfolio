import type { Metadata } from "next";
import { GoogleTagManager } from "@/components/analytics/GoogleTagManager";
import { SiteShell } from "@/components/layout/SiteShell";
import { site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `Darshan S | ${site.title}`,
    template: "%s | Darshan S",
  },
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-body-md text-on-surface bg-background selection:bg-primary-fixed selection:text-on-primary-fixed">
        <GoogleTagManager />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
