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
    slug: "shopify-plus-storefront-builds",
    title: "Shopify Plus Storefront Builds",
    excerpt:
      "Delivered 8+ Shopify Plus storefronts from scratch, converting Figma designs into responsive, mobile-first templates with app integrations.",
    listExcerpt:
      "Delivered 8+ Shopify Plus storefronts from scratch, converting Figma designs into responsive templates with cross-browser compatibility and integrations including Recharge, Orderify, and StoreLocator.",
    tags: ["Shopify Plus", "Liquid", "Figma-to-Shopify"],
    featured: true,
    gridSize: "large",
  },
  {
    slug: "campaign-templates-limespot",
    title: "Campaign Templates & Personalization",
    excerpt:
      "Built reusable Shopify campaign templates for retail brands, integrating product recommendation blocks into seasonal and promotional landing pages.",
    listExcerpt:
      "Built reusable campaign templates in Shopify themes for retail brands, integrating recommendation blocks to support seasonal launches, promotions, and personalized product discovery.",
    tags: ["Shopify Theme", "Personalization", "Campaign Templates"],
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
    featured: false,
    gridSize: "small",
  },
  {
    slug: "app-integration-personalization",
    title: "App Integration & Personalization Suite",
    excerpt:
      "Integrated Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, Loop, and Orderify for search, personalization, subscriptions, and returns.",
    listExcerpt:
      "Integrated and configured Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, Loop, and Orderify — enabling search, personalization, subscriptions, order edits, and returns across live storefronts.",
    tags: ["Algolia", "Recharge", "Shopify APIs"],
    featured: false,
    gridSize: "large",
  },
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
      "Diagnosed and redesigned cart validation and checkout logic under time pressure, preventing an estimated ₹4L revenue loss within 6 hours.",
    listExcerpt:
      "Diagnosed and redesigned cart validation and checkout logic under time pressure, preventing an estimated ₹4L revenue loss within 6 hours.",
    tags: ["Liquid", "JavaScript", "Shopify Plus"],
    featured: false,
    gridSize: "small",
  },
  // {
  //   slug: "solara-storefront",
  //   title: "Solara — D2C Kitchen & Home Storefront",
  //   excerpt:
  //     "Homepage revamp that lifted performance from 36 to 92 and a PDP preorder template build for a D2C kitchen and home brand.",
  //   listExcerpt:
  //     "Homepage revamp lifting performance from 36 to 92, plus a PDP preorder template build for solara.in — a D2C kitchen, cookware, and home appliances brand.",
  //   tags: ["Shopify", "Liquid", "Performance"],
  //   featured: false,
  //   gridSize: "small",
  // },
];

const featuredProjectOrder = [
  "shopify-plus-storefront-builds",
  "campaign-templates-limespot",
  "checkout-extensions-shopify-functions",
] as const;

export function getFeaturedProjects(): Project[] {
  return featuredProjectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is Project => project !== undefined);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
