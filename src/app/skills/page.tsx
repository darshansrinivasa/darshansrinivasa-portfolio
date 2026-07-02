import type { Metadata } from "next";
import { SkillsPageContent } from "@/components/sections/skills/SkillsPageContent";
import { skillsPage } from "@/content/skills";

export const metadata: Metadata = {
  title: "Skills",
  description: skillsPage.description,
};

export default function SkillsPage() {
  return <SkillsPageContent />;
}
