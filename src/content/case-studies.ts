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

export type CaseStudyBrand = {
  name: string;
  url?: string;
};

export type CaseStudy = {
  slug: string;
  summary: string;
  eyebrow: string;
  brands: CaseStudyBrand[];
  techStack: string[];
  phases: CaseStudyPhase[];
  metrics?: CaseStudyMetric[];
  resultBody?: string;
  liveUrl?: string;
  processCaption?: string;
  heroImage?: {
    src: string;
    alt: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "checkout-extensions-shopify-functions",
    summary:
      "Checkout UI Extensions and Shopify Functions for custom discount logic, upsells, pincode-based delivery restrictions, Script Editor migration, and subscription processing fees across Shopify Plus brands.",
    eyebrow: "Shopify Plus Checkout",
    heroImage: {
      src: "/images/ce-case-study.png",
      alt: "Checkout extensions and Shopify Functions case study screenshot",
    },
    brands: [
      { name: "JD Sports", url: "https://www.jdsports.ca/" },
      { name: "Livestock", url: "https:www.deadstock.ca/" },
      { name: "Size", url: "https://www.size.ca/" },
      { name: "True Height", url: "https://www.truheightvitamins.com/" },
    ],
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
        body: "Shopify Plus brands needed custom discount logic, upsell offers, and pincode-based delivery restrictions that standard checkout could not support. Several brands also relied on legacy Script Editor scripts for checkout customization — logic that needed to be migrated to Shopify Functions before deprecation. Subscription storefronts required an additional layer of complexity: applying a processing fee on subscription products dynamically based on cart value, which native checkout could not handle.",
      },
      {
        label: "Action",
        title: "Building extensible checkout logic",
        body: "Built a suite of Checkout UI Extensions and Shopify Functions handling cart validation rules, custom discount logic, and shipment restrictions by pincode. Migrated existing Script Editor scripts to Shopify Functions, preserving business logic while aligning with Shopify's modern checkout extensibility model. Implemented custom processing fee logic for subscription products that calculates and applies fees based on cart value at checkout.",
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
          {
            icon: "sync_alt",
            title: "Script Editor migration",
            description:
              "Migrated legacy checkout scripts from Script Editor to Shopify Functions, preserving existing discount and validation rules without disrupting live storefronts.",
          },
          {
            icon: "payments",
            title: "Subscription processing fees",
            description:
              "Built custom logic to apply a processing fee on subscription products at checkout, calculated dynamically based on cart value.",
          },
        ],
      },
      {
        label: "Result",
        title: "More reliable checkout flows",
        body: "Smoother checkout flows and reduced order errors deployed across multiple Plus brands. Script Editor migrations completed ahead of deprecation, and subscription processing fees now apply accurately based on cart value — without manual intervention or checkout workarounds.",
      },
    ],
  },
  {
    slug: "critical-cart-checkout-revamp",
    summary:
      "Emergency cart and checkout redesign that addressed a live revenue-impacting issue under tight time pressure.",
    eyebrow: "Cart & Checkout",
    heroImage: {
      src: "/images/cart-case-study.png",
      alt: "Cart and checkout redesign case study screenshot",
    },
    brands: [
      { name: "Love Beauty Planet", url: "https://lovebeautyandplanet.in/" }
    ],
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
        title: "Revenue loss prevented within 6 hours",
        body: "Prevented an estimated ₹4L revenue loss within 6 hours.",
      },
    ],
    metrics: [
      { value: "₹4L", label: "Revenue loss prevented" },
      { value: "6 hrs", label: "Resolution window" },
    ],
  },
  {
    slug: "modular-section-repository",
    summary:
      "Large-scale component library and template system that accelerated Shopify theme delivery across multiple storefronts.",
    eyebrow: "Theme Architecture",
    heroImage: {
      src: "/images/modules-case-study.png",
      alt: "Modular section repository case study screenshot",
    },
    brands: [
      { name: "Drmtlgy", url: "https://www.drmtlgy.com/" },
      { name: "Dr Idriss", url: "https://dridriss.com/" }
    ],
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
      "End-to-end Shopify Plus storefront development from Figma designs across apparel, pet wellness, and lifestyle retail.",
    eyebrow: "Storefront Development",
    heroImage: {
      src: "/images/storefront-case-study.jpeg",
      alt: "Shopify Plus storefront builds case study screenshot",
    },
    brands: [
      { name: "Raymond", url: "https://myraymond.com/" },
      { name: "Park Avenue", url: "https://pa.myraymond.com/" },
      { name: "Ethnix", url: "https://ethnixbyraymond.in/" },
      { name: "ColorPlus", url: "https://cp.myraymond.com/" },
      { name: "Pet Planet", url: "https://petplanet.ca/" },
      { name: "Printfresh", url: "https://printfresh.com/" },
    ],
    techStack: ["Liquid", "JavaScript", "Figma-to-Shopify", "App integrations"],
    phases: [
      {
        label: "Problem",
        title: "Pixel-perfect storefronts needed at speed",
        body: "High-growth brands across apparel, pet wellness, and lifestyle retail needed pixel-perfect, mobile-first storefronts built from Figma designs, fast.",
      },
      {
        label: "Action",
        title: "Delivering Shopify Plus storefronts from scratch",
        body: "Delivered 50+ Shopify Plus storefronts from scratch; converted complex Figma designs into responsive templates with cross-browser compatibility; built interactive UX features like personalized gift messages and image customization modules.",
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
        body: "Polished, conversion-focused storefronts live across apparel, pet wellness, and lifestyle brands also integrated Recharge, Orderify, and StoreLocator apps.",
      },
    ],
    metrics: [{ value: "50+", label: "Shopify Plus storefronts" }],
  },
  {
    slug: "app-integration-personalization",
    summary:
      "Third-party and custom app integrations for search, personalization, translation, subscriptions, order management, and returns — deployed across meal delivery, sportswear, and D2C Shopify storefronts.",
    eyebrow: "Integrations",
    heroImage: {
      src: "/images/app-case-study.png",
      alt: "Shopify app integrations case study screenshot",
    },
    brands: [
      { name: "Macros", url: "https://macros.com.au/" },
      { name: "Soulara", url: "https://soulara.com.au/" },
      { name: "JD Sports", url: "https://www.jdsports.ca/" },
      { name: "Livestock", url: "https://www.deadstock.ca/" },
      { name: "True Height", url: "https://www.truheightvitamins.com/" },
    ],
    techStack: [
      "Algolia",
      "Dynamic Yield",
      "Langify",
      "LimeSpot",
      "Recharge",
      "Loop",
      "Orderify",
      "Shopify custom apps",
    ],
    phases: [
      {
        label: "Problem",
        title: "Capabilities beyond native Shopify",
        body: "Brands needed advanced search, personalization, translation, subscription commerce, post-purchase order edits, and returns management — capabilities that native Shopify does not provide out of the box.",
      },
      {
        label: "Action",
        title: "Integrating third-party and custom apps",
        body: "Integrated and configured a stack of Shopify apps across live storefronts — wiring each into theme templates, checkout flows, and customer-facing UI without breaking existing merchandising or performance.",
        highlights: [
          {
            icon: "search",
            title: "Algolia",
            description:
              "Instant, typo-tolerant site search with autocomplete, filtering, and merchandising rules for faster product discovery.",
          },
          {
            icon: "tune",
            title: "Dynamic Yield",
            description:
              "Personalization and A/B testing to serve tailored content, offers, and product recommendations based on shopper behavior.",
          },
          {
            icon: "translate",
            title: "Langify",
            description:
              "Multi-language storefront support — translating product content, navigation, and checkout for international markets.",
          },
          {
            icon: "recommend",
            title: "LimeSpot",
            description:
              "AI-driven product recommendations and upsell blocks placed across PDPs, cart, and collection pages.",
          },
          {
            icon: "autorenew",
            title: "Recharge",
            description:
              "Subscription billing and recurring order flows for D2C brands selling repeat-purchase products.",
          },
          {
            icon: "loop",
            title: "Loop",
            description:
              "Returns and exchanges portal — self-service return requests, exchange flows, and reverse logistics for post-purchase customers.",
          },
          {
            icon: "edit_note",
            title: "Orderify",
            description:
              "Post-purchase order editing so customers can modify orders after checkout without support tickets.",
          },
          {
            icon: "extension",
            title: "Shopify custom apps",
            description:
              "Custom-built Shopify apps for brand-specific integration needs that off-the-shelf apps could not cover.",
          },
        ],
      },
      {
        label: "Result",
        title: "Expanded commerce capabilities",
        body: "Enabled personalized recommendations, multi-language support, advanced search, subscription commerce, flexible order edits, and streamlined returns — giving each brand a fuller post-purchase experience without rebuilding their theme from scratch.",
      },
    ],
  },
  {
    slug: "campaign-templates-limespot",
    summary:
      "Reusable Shopify campaign templates built to support promotional launches with flexible sections and personalized product recommendations.",
    eyebrow: "Campaign Templates",
    heroImage: {
      src: "/images/campaign-case-study.png",
      alt: "Campaign templates case study screenshot",
    },
    brands: [
      { name: "Levi's", url: "https://levi.in/" },
      { name: "Voluspa", url: "https://voluspa.com/pages/wicked-the-collection" },
      { name: "drmtlgy", url: "https://www.drmtlgy.com/" },
      { name: "Dr Idriss", url: "https:dridriss.com/" },
    ],
    techStack: ["Shopify Theme", "Liquid", "Personalization"],
    phases: [
      {
        label: "Problem",
        title: "Campaign pages needed to launch faster",
        body: "Retail brands needed campaign landing pages that could support seasonal promotions, product storytelling, and curated product discovery without rebuilding one-off layouts for every launch.",
      },
      {
        label: "Action",
        title: "Building reusable campaign templates",
        body: "Built Shopify theme templates and reusable sections for campaign pages, giving content teams flexible layouts for banners, editorial content, product blocks, and promotional storytelling. Integrated product recommendation blocks so campaigns could surface relevant products and personalized suggestions inside the landing page experience.",
        highlights: [
          {
            icon: "campaign",
            title: "Campaign templates",
            description:
              "Created reusable Shopify theme templates for seasonal launches, promotional landing pages, and brand-led campaign storytelling.",
          },
          {
            icon: "recommend",
            title: "Product recommendations",
            description:
              "Integrated recommendation blocks to support personalized product discovery within campaign pages.",
          },
        ],
      },
      {
        label: "Result",
        title: "Faster campaign launches",
        body: "Campaign pages became easier to assemble, reuse, and maintain across launches, while product recommendations helped connect campaign traffic with relevant products without requiring custom product logic for every page.",
      },
    ],
  },
  // {
  //   slug: "solara-storefront",
  //   summary:
  //     "Homepage revamp and PDP preorder template build for Solara, a D2C kitchen and home brand — lifting storefront performance from 36 to 92.",
  //   eyebrow: "Freelance · D2C",
  //   brands: [{ name: "Solara", url: "https://www.solara.in/" }],
  //   techStack: ["Liquid", "JavaScript", "TailwindCSS", "Shopify Online Store 2.0"],
  //   liveUrl: "https://www.solara.in/",
  //   phases: [
  //     {
  //       label: "Problem",
  //       title: "Slow homepage and missing preorder flow",
  //       body: "Solara's live storefront had a slow, underperforming homepage and no dedicated product page template for preorder launches.",
  //     },
  //     {
  //       label: "Action",
  //       title: "Homepage revamp and preorder PDP build",
  //       body: "Revamped the homepage for speed and conversion, and built a custom PDP preorder template to support upcoming product launches.",
  //       highlights: [
  //         {
  //           icon: "speed",
  //           title: "Homepage revamp",
  //           description:
  //             "Redesigned and optimized the homepage — refining Liquid templates, assets, and script loading to lift performance from 36 to 92.",
  //         },
  //         {
  //           icon: "shopping_bag",
  //           title: "PDP preorder template",
  //           description:
  //             "Built a dedicated product page template for preorder flows, tailored to Solara's kitchen and home product launches.",
  //         },
  //       ],
  //     },
  //     {
  //       label: "Result",
  //       title: "Faster storefront with preorder-ready PDPs",
  //       body: "Delivered a significantly faster homepage and a live preorder product page template, improving the shopping experience for kitchen, cookware, and home appliance customers across India.",
  //     },
  //   ],
  //   metrics: [{ value: "36→92", label: "Homepage performance score" }],
  // },
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
