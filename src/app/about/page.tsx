import type { Metadata } from "next";
import { AboutPageContent } from "@/components/sections/about/AboutPageContent";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: "About",
  description: aboutPage.bio,
};

export default function AboutPage() {
  return <AboutPageContent />;
}
