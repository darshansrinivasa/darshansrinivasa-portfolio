export type ProjectGridSize = "large" | "small" | "full";

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  listExcerpt: string;
  tags: string[];
  featured: boolean;
  gridSize: ProjectGridSize;
  showCaseStudyLink?: boolean;
};

export const projects: Project[] = [
  {
    slug: "checkout-extensions-shopify-functions",
    title: "Checkout Extensions & Shopify Functions Suite",
    excerpt:
      "Built Checkout UI Extensions and Shopify Functions for custom discount logic, upsells, and pincode-based delivery restrictions across Shopify Plus brands.",
    listExcerpt:
      "Built a suite of Checkout UI Extensions and Shopify Functions handling cart validation rules, custom discount logic, and shipment restrictions by pincode for Shopify Plus brands.",
    tags: ["Shopify Functions", "Checkout UI Extensions", "Liquid"],
    featured: true,
    gridSize: "large",
  },
  {
    slug: "critical-cart-checkout-revamp",
    title: "Critical Cart & Checkout Revamp",
    excerpt:
      "Diagnosed and redesigned cart validation and checkout logic under time pressure, preventing an estimated ₹4L revenue loss within 48 hours.",
    listExcerpt:
      "Diagnosed and redesigned cart validation and checkout logic under time pressure, preventing an estimated ₹4L revenue loss within 48 hours.",
    tags: ["Liquid", "JavaScript", "Shopify Plus"],
    featured: true,
    gridSize: "small",
  },
  {
    slug: "modular-section-repository",
    title: "Modular Section Repository",
    excerpt:
      "Built a Tailwind-driven component library with 300+ reusable widgets and 35 templates, increasing delivery velocity from 2–3 to 7–10 pages per week.",
    listExcerpt:
      "Built a large-scale, Tailwind-driven component library with 300+ reusable widgets and 35 templates, increasing delivery velocity to 7–10 pages per week within 3 months.",
    tags: ["TailwindCSS", "Liquid", "Online Store 2.0"],
    featured: true,
    gridSize: "small",
  },
  {
    slug: "shopify-plus-storefront-builds",
    title: "Shopify Plus Storefront Builds",
    excerpt:
      "Delivered 8+ Shopify Plus storefronts from scratch, converting Figma designs into responsive, mobile-first templates with app integrations.",
    listExcerpt:
      "Delivered 8+ Shopify Plus storefronts from scratch, converting Figma designs into responsive templates with cross-browser compatibility and integrations including Recharge, Orderify, and StoreLocator.",
    tags: ["Shopify Plus", "Liquid", "Figma-to-Shopify"],
    featured: false,
    gridSize: "large",
  },
  {
    slug: "app-integration-personalization",
    title: "App Integration & Personalization Suite",
    excerpt:
      "Integrated Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, and Orderify to enable search, personalization, and subscription commerce.",
    listExcerpt:
      "Integrated and configured Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, and Orderify to enable personalized recommendations, multi-language support, advanced search, and subscription commerce.",
    tags: ["Algolia", "Recharge", "Shopify APIs"],
    featured: false,
    gridSize: "full",
    showCaseStudyLink: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
