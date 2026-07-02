export type CaseStudyPhaseLabel = "Problem" | "Action" | "Result";

export type CaseStudyHighlight = {
  icon: string;
  title: string;
  description: string;
};

export type CaseStudyPhase = {
  label: CaseStudyPhaseLabel;
  title: string;
  body: string;
  highlights?: CaseStudyHighlight[];
};

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudyMeta = {
  client: string;
  role: string;
  timeline: string;
  services: string;
};

export type CaseStudy = {
  slug: string;
  summary: string;
  eyebrow: string;
  meta: CaseStudyMeta;
  techStack: string[];
  phases: CaseStudyPhase[];
  metrics?: CaseStudyMetric[];
  resultBody?: string;
  liveUrl?: string;
  processCaption?: string;
};

const role = "Shopify Frontend Developer";
const timelinePlaceholder = "[Add timeline]";
const clientPlaceholder = "[Client name — add if NDA allows]";

export const caseStudies: CaseStudy[] = [
  {
    slug: "checkout-extensions-shopify-functions",
    summary:
      "Checkout UI Extensions and Shopify Functions for custom discount logic, upsells, and pincode-based delivery restrictions across Shopify Plus brands.",
    eyebrow: "Shopify Plus Checkout",
    meta: {
      client: "Shopify Plus brands",
      role,
      timeline: timelinePlaceholder,
      services: "Frontend Development",
    },
    techStack: [
      "Shopify Functions",
      "Checkout UI Extensions",
      "Liquid",
      "JavaScript",
    ],
    phases: [
      {
        label: "Problem",
        title: "Checkout limitations on Shopify Plus",
        body: "Shopify Plus brands needed custom discount logic, upsell offers, and pincode-based delivery restrictions that standard checkout could not support.",
      },
      {
        label: "Action",
        title: "Building extensible checkout logic",
        body: "Built a suite of Checkout UI Extensions and Shopify Functions handling cart validation rules, custom discount logic, and shipment restrictions by pincode.",
        highlights: [
          {
            icon: "extension",
            title: "Checkout UI Extensions",
            description:
              "Implemented checkout UI extensions for validations, upsells, and checkout profile customizations.",
          },
          {
            icon: "settings_ethernet",
            title: "Shopify Functions",
            description:
              "Implemented custom discount and shipment restriction logic using Shopify Functions.",
          },
        ],
      },
      {
        label: "Result",
        title: "More reliable checkout flows",
        body: "Smoother checkout flows, reduced order errors, deployed across multiple Plus brands.",
      },
    ],
  },
  {
    slug: "critical-cart-checkout-revamp",
    summary:
      "Emergency cart and checkout redesign that addressed a live revenue-impacting issue under tight time pressure.",
    eyebrow: "Cart & Checkout",
    meta: {
      client: clientPlaceholder,
      role,
      timeline: timelinePlaceholder,
      services: "Frontend Development, Checkout",
    },
    techStack: ["Liquid", "JavaScript", "Shopify checkout customization"],
    phases: [
      {
        label: "Problem",
        title: "Active checkout exploit causing revenue loss",
        body: "A live brand had a checkout exploit actively causing revenue loss.",
      },
      {
        label: "Action",
        title: "Rapid cart and checkout remediation",
        body: "Diagnosed and redesigned cart validation and checkout logic under time pressure.",
      },
      {
        label: "Result",
        title: "Revenue loss prevented within 48 hours",
        body: "Prevented an estimated ₹4L revenue loss within 48 hours.",
      },
    ],
    metrics: [
      { value: "₹4L", label: "Revenue loss prevented" },
      { value: "48 hrs", label: "Resolution window" },
    ],
  },
  {
    slug: "modular-section-repository",
    summary:
      "Large-scale component library and template system that accelerated Shopify theme delivery across multiple storefronts.",
    eyebrow: "Theme Architecture",
    meta: {
      client: "Multiple Shopify storefronts",
      role,
      timeline: timelinePlaceholder,
      services: "Theme Development, Design Systems",
    },
    techStack: ["TailwindCSS", "Liquid", "Shopify Online Store 2.0"],
    phases: [
      {
        label: "Problem",
        title: "Slow and inconsistent delivery velocity",
        body: "Development speed across multiple Shopify storefronts was slow and inconsistent (2–3 pages/week).",
      },
      {
        label: "Action",
        title: "Building a reusable section library",
        body: "Built a large-scale, Tailwind-driven, brand-agnostic component library — 300+ reusable widgets, 35 templates — and led migration from plain CSS to a Tailwind design system.",
        highlights: [
          {
            icon: "design_services",
            title: "Reusable sections",
            description:
              "Created 300+ reusable widgets and 35 templates for rapid page assembly.",
          },
          {
            icon: "palette",
            title: "Tailwind migration",
            description:
              "Led migration from plain CSS to a Tailwind-driven design system across projects.",
          },
        ],
      },
      {
        label: "Result",
        title: "Faster delivery across storefronts",
        body: "Delivery velocity increased to 7–10 pages/week within 3 months; reduced style duplication and improved maintainability across projects.",
      },
    ],
    metrics: [
      { value: "300+", label: "Reusable components" },
      { value: "35", label: "Templates built" },
      { value: "7–10", label: "Pages/week velocity" },
    ],
    processCaption:
      "Component library structure for faster Shopify theme delivery.",
  },
  {
    slug: "shopify-plus-storefront-builds",
    summary:
      "End-to-end Shopify Plus storefront development from Figma designs for fashion, skincare, and wellness brands.",
    eyebrow: "Storefront Development",
    meta: {
      client: "D2C & Shopify Plus brands",
      role,
      timeline: timelinePlaceholder,
      services: "Frontend Development, Integrations",
    },
    techStack: ["Liquid", "JavaScript", "Figma-to-Shopify", "App integrations"],
    phases: [
      {
        label: "Problem",
        title: "Pixel-perfect storefronts needed at speed",
        body: "High-growth brands needed pixel-perfect, mobile-first storefronts built from Figma designs, fast.",
      },
      {
        label: "Action",
        title: "Delivering Shopify Plus storefronts from scratch",
        body: "Delivered 8+ Shopify Plus storefronts from scratch; converted complex Figma designs into responsive templates with cross-browser compatibility; built interactive UX features like personalized gift messages and image customization modules.",
        highlights: [
          {
            icon: "storefront",
            title: "Figma to Shopify",
            description:
              "Converted complex Figma designs into responsive, mobile-first Shopify templates.",
          },
          {
            icon: "hub",
            title: "App integrations",
            description:
              "Integrated Recharge, Orderify, and StoreLocator across storefront builds.",
          },
        ],
      },
      {
        label: "Result",
        title: "Live storefronts across multiple brands",
        body: "Polished, conversion-focused storefronts live for multiple brands; also integrated Recharge, Orderify, and StoreLocator apps.",
      },
    ],
    metrics: [{ value: "8+", label: "Shopify Plus storefronts" }],
  },
  {
    slug: "app-integration-personalization",
    summary:
      "Third-party app integrations enabling search, personalization, translation, and subscription commerce on Shopify storefronts.",
    eyebrow: "Integrations",
    meta: {
      client: "Multiple Shopify brands",
      role,
      timeline: timelinePlaceholder,
      services: "Integrations, Frontend",
    },
    techStack: [
      "Algolia",
      "Dynamic Yield",
      "Langify",
      "LimeSpot",
      "Recharge",
      "Orderify",
      "Shopify APIs",
    ],
    phases: [
      {
        label: "Problem",
        title: "Capabilities beyond native Shopify",
        body: "Brands needed advanced search, personalization, translation, and A/B testing capability beyond native Shopify.",
      },
      {
        label: "Action",
        title: "Integrating personalization and search tools",
        body: "Integrated and configured Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, and Orderify across storefronts.",
      },
      {
        label: "Result",
        title: "Expanded commerce capabilities",
        body: "Enabled personalized recommendations, multi-language support, advanced search, and subscription commerce.",
      },
    ],
  },
  {
    slug: "solara-storefront",
    summary:
      "Freelance Shopify frontend development for Solara, a D2C kitchen and home brand at solara.in.",
    eyebrow: "Freelance · D2C",
    meta: {
      client: "Solara",
      role: "Shopify Frontend Developer (Freelance)",
      timeline: "Feb 2026 – May 2026",
      services: "Frontend Development",
    },
    techStack: ["Liquid", "JavaScript", "TailwindCSS", "Shopify Online Store 2.0"],
    liveUrl: "https://www.solara.in/",
    phases: [
      {
        label: "Problem",
        title: "Frontend support for a growing D2C brand",
        body: "Solara, a D2C kitchen and home brand, needed freelance Shopify frontend development support for their live storefront.",
      },
      {
        label: "Action",
        title: "Freelance storefront development",
        body: "Delivered freelance Shopify frontend development for solara.in during the Feb–May 2026 engagement. [Add specific deliverables — sections, features, or maintenance scope.]",
      },
      {
        label: "Result",
        title: "Live storefront",
        body: "Contributed frontend development work to a live D2C storefront serving kitchen, cookware, and home appliance shoppers across India.",
      },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAdjacentCaseStudies(slug: string) {
  const index = caseStudies.findIndex((study) => study.slug === slug);

  return {
    previous: index > 0 ? caseStudies[index - 1] : null,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : null,
  };
}
