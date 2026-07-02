export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  description?: string;
  engagementType?: "full-time" | "freelance";
  isCurrent?: boolean;
  liveUrl?: string;
};

export type EducationEntry = {
  degree: string;
  year: string;
  detail: string;
};

export const aboutPage = {
  title: "Building high-performance Shopify storefronts with care.",
  bio: "I'm a Shopify frontend developer with 2.5+ years building high-performance storefronts for D2C and Shopify Plus brands across fashion, skincare, and wellness. I specialize in Shopify Functions, Checkout Extensions, and scalable section-based theme architecture — turning Figma designs into fast, conversion-focused, mobile-first experiences. I've led component library builds that tripled delivery speed and fixed a critical checkout bug that saved a live brand ~₹4L in 48 hours. I care about clean code, pixel-perfect execution, and shipping fast without cutting corners on quality.",
  timelineTitle: "The Journey",
  timelineSubtitle:
    "Full-time agency roles alongside selective freelance Shopify frontend work for D2C brands.",
  educationTitle: "Academic Foundation",
  educationDegreeLabel: "Degree",
  cta: {
    prompt: "Interested in collaborating on a project?",
    linkLabel: "Let's start a conversation",
    href: "/contact",
  },
} as const;

export const experienceTimeline: ExperienceEntry[] = [
  {
    id: "ecom-experts",
    company: "Ecom Experts",
    role: "Shopify Fullstack Developer",
    period: "Sep 2024 – Present",
    description:
      "Shopify Functions, checkout UI extensions, and scalable section-based theme architecture for D2C and Shopify Plus brands.",
    engagementType: "full-time",
    isCurrent: true,
  },
  {
    id: "solara",
    company: "Solara",
    role: "Shopify Fullstack Developer (Freelance)",
    period: "Feb 2026 – May 2026",
    description:
      "Freelance Shopify frontend development for solara.in, a D2C kitchen and home brand.",
    engagementType: "freelance",
    liveUrl: "https://www.solara.in/",
  },
  {
    id: "wordsworth-ai",
    company: "WordsWorth AI",
    role: "Shopify Frontend Developer (Freelance)",
    period: "Aug 2025 – Jan 2026",
    description:
      "Built a Tailwind-driven section repository with 35+ templates and 300+ reusable sections, increasing delivery velocity from 2–3 to 7–10 pages per week.",
    engagementType: "freelance",
  },
  {
    id: "marmeto",
    company: "Marmeto",
    role: "Senior Associate Frontend Developer",
    period: "Jul 2023 – Aug 2024",
    description:
      "Led a modular section repository and delivered Shopify Plus storefronts from Figma designs across fashion, skincare, and wellness brands.",
    engagementType: "full-time",
  },
];

export const education: EducationEntry = {
  degree: "B.E.",
  year: "2022",
  detail: "8.51 CGPA",
};
