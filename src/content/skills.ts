export type SkillCategory = {
  id: string;
  title: string;
  icon: string;
  description?: string;
  skills: string[];
  desktopColSpan: 4 | 5 | 6 | 7 | 8;
  desktopVariant:
    | "secondary"
    | "tertiary"
    | "primary"
    | "surface"
    | "muted"
    | "subtle";
};

export const skillsPage = {
  eyebrow: "Core Competencies",
  title: "Expertise honed for high-performance Shopify storefronts.",
  description:
    "A scannable overview of the technical skills and practices behind checkout extensions, modular theme architecture, and conversion-focused storefront delivery for D2C and Shopify Plus brands.",
  philosophy: {
    quote:
      "I care about clean code, pixel-perfect execution, and shipping fast without cutting corners on quality.",
    approachLabel: "Approach",
    approachValue: "Performance & precision",
  },
} as const;

export const skillCategories: SkillCategory[] = [
  {
    id: "shopify",
    title: "Shopify",
    icon: "shopping_bag",
    description:
      "Checkout UI extensions, Shopify Functions, and scalable Online Store 2.0 theme architecture for D2C and Shopify Plus brands.",
    skills: [
      "Liquid",
      "Shopify Functions",
      "Checkout UI Extensions",
      "Online Store 2.0",
      "Metafields",
      "Theme Architecture",
      "ThemeKit",
      "Shopify CLI",
    ],
    desktopColSpan: 8,
    desktopVariant: "secondary",
  },
  {
    id: "apps",
    title: "Apps & Integrations",
    icon: "hub",
    description:
      "Connecting search, personalization, subscriptions, and localization apps into live Shopify storefronts.",
    skills: [
      "Algolia",
      "Dynamic Yield",
      "Recharge",
      "Orderify",
      "Langify",
      "LimeSpot",
      "StoreLocator",
    ],
    desktopColSpan: 4,
    desktopVariant: "tertiary",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "code",
    description:
      "Turning Figma designs into fast, mobile-first storefront experiences with modern HTML, CSS, and JavaScript.",
    skills: [
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "JavaScript (ES6+)",
      "React",
    ],
    desktopColSpan: 6,
    desktopVariant: "primary",
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: "insights",
    description:
      "Conversion tracking and analytics setup for data-informed storefront decisions.",
    skills: ["GA4", "GTM", "Meta Pixel"],
    desktopColSpan: 6,
    desktopVariant: "surface",
  },
  {
    id: "tools",
    title: "Tools",
    icon: "build",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Cursor AI",
      "MCP",
      "Postman",
      "Figma-to-Shopify workflow",
    ],
    desktopColSpan: 5,
    desktopVariant: "muted",
  },
  {
    id: "practices",
    title: "Practices",
    icon: "verified",
    skills: [
      "SEO",
      "Accessibility",
      "Site Speed Optimization",
      "CRO-aligned design",
    ],
    desktopColSpan: 7,
    desktopVariant: "subtle",
  },
];
