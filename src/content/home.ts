import { site } from "./site";

export type HomeStat = {
  value: string;
  label: string;
};

export type HomeService = {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  variant?: "default" | "primary" | "tertiary";
};

export const homeHero = {
  eyebrow: site.title,
  headlineBefore: "Shopify Frontend Developer building fast,",
  headlineEmphasis: "conversion-focused",
  headlineAfter: "storefronts for D2C & Shopify Plus brands",
  subheadline:
    "2.5+ years specializing in Shopify Functions, Checkout Extensions, custom sections, and performance optimization — for fashion, skincare, wellness, and lifestyle brands.",
} as const;

export const homeStats: HomeStat[] = [
  {
    value: "8+",
    label: "Shopify Plus storefronts",
  },
  {
    value: "300+",
    label: "reusable components",
  },
  {
    value: "₹4L",
    label: "revenue saved in 48hrs",
  },
  {
    value: "7–10",
    label: "pages/week velocity",
  },
];

export const homeServicesIntro = {
  title: "Strategic Frontend Engineering",
  description:
    "From custom Liquid templates and Shopify Functions to scalable section-based theme architecture — focused on speed, conversion, and maintainable storefront systems.",
} as const;

export const homeServicesDesktop: HomeService[] = [
  {
    icon: "bolt",
    title: "Performance Optimization",
    description:
      "Site speed optimization across Shopify themes — refining Liquid templates, assets, and script loading for faster storefront experiences.",
  },
  {
    icon: "extension",
    title: "Checkout Extensions",
    description:
      "Building custom checkout UI extensions for validations, upsells, and post-purchase flows using Shopify's extensibility APIs.",
  },
  {
    icon: "settings_ethernet",
    title: "Shopify Functions",
    description:
      "Extending Shopify's core logic with Shopify Functions for custom discounts, cart validation, and shipping rules.",
  },
  {
    icon: "design_services",
    title: "Design System Architecture",
    description:
      "Creating reusable section libraries and Tailwind-driven component systems that speed up delivery across multiple storefronts.",
  },
];

export const homeServicesMobile: HomeService[] = [
  {
    icon: "extension",
    title: "Checkout Extensions",
    description:
      "Custom checkout UI extensions for validations, upsells, and smoother purchase flows on Shopify Plus.",
    tags: ["Liquid", "JavaScript"],
    variant: "default",
  },
  {
    icon: "speed",
    title: "Performance Optimization",
    description:
      "Liquid and frontend optimization focused on site speed, maintainability, and conversion-aligned storefront performance.",
    variant: "primary",
  },
  {
    icon: "design_services",
    title: "Section Architecture",
    description:
      "Scalable Online Store 2.0 sections and reusable component libraries built for faster theme delivery.",
    variant: "tertiary",
  },
];

export const homeFeatured = {
  eyebrow: "Selected Work",
  title: "Featured Projects",
  archiveLabel: "View Portfolio Archive",
  archiveHref: "/projects",
  mobileTitle: "Featured Works",
  mobileViewAllLabel: "View All",
} as const;

export const homeCta = {
  title: "Let's craft something exceptional.",
  description: "Available for Shopify frontend work, consultations, and senior-level partnerships.",
  buttonLabel: "Get in Touch",
  href: "/contact",
} as const;
