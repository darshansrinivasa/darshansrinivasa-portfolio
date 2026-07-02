export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "checkout-extensions-shopify-functions",
    title: "Checkout Extensions & Shopify Functions Suite",
    excerpt:
      "Built Checkout UI Extensions and Shopify Functions for custom discount logic, upsells, and pincode-based delivery restrictions across Shopify Plus brands.",
    tags: ["Shopify Functions", "Checkout UI Extensions", "Liquid"],
    featured: true,
  },
  {
    slug: "critical-cart-checkout-revamp",
    title: "Critical Cart & Checkout Revamp",
    excerpt:
      "Diagnosed and redesigned cart validation and checkout logic under time pressure, preventing an estimated ₹4L revenue loss within 48 hours.",
    tags: ["Liquid", "JavaScript", "Shopify Plus"],
    featured: true,
  },
  {
    slug: "modular-section-repository",
    title: "Modular Section Repository",
    excerpt:
      "Built a Tailwind-driven component library with 300+ reusable widgets and 35 templates, increasing delivery velocity from 2–3 to 7–10 pages per week.",
    tags: ["TailwindCSS", "Liquid", "Online Store 2.0"],
    featured: true,
  },
  {
    slug: "shopify-plus-storefront-builds",
    title: "Shopify Plus Storefront Builds",
    excerpt:
      "Delivered 8+ Shopify Plus storefronts from scratch, converting Figma designs into responsive, mobile-first templates with app integrations.",
    tags: ["Shopify Plus", "Liquid", "Figma-to-Shopify"],
    featured: false,
  },
  {
    slug: "app-integration-personalization",
    title: "App Integration & Personalization Suite",
    excerpt:
      "Integrated Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, and Orderify to enable search, personalization, and subscription commerce.",
    tags: ["Algolia", "Recharge", "Shopify APIs"],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
