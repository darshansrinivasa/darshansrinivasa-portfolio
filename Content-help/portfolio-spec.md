# Darshan S — Shopify Developer Portfolio: Content & Build Spec

## Tech Stack Recommendation
- **Next.js (App Router) + Tailwind CSS** — fast to build in Cursor, deploys free on Vercel, great for a dev portfolio (shows you can work outside pure Liquid too).
- Alternative if you want zero build complexity: a single static HTML + Tailwind CDN page. Faster to ship today, but less impressive as a "senior dev" signal.
- **Recommendation: Next.js + Tailwind, deployed on Vercel.** Takes ~1-2 hours longer than static HTML but looks more credible.

---

## Site Structure

1. **Home** — Hero, one-line positioning, highlight metrics, featured project links
2. **Projects / Case Studies** — 4-5 deep dives (this is the most important page — mandatory portfolio requirement lives here)
3. **Skills / Tech Stack** — scannable grid
4. **About** — short bio, experience timeline
5. **Contact** — email, LinkedIn, resume download link

---

## Page 1: Home — Content

**Hero headline:**
> Shopify Frontend Developer building fast, conversion-focused storefronts for D2C & Shopify Plus brands

**Subheadline:**
> 2.5+ years specializing in Shopify Functions, Checkout Extensions, custom sections, and performance optimization — for fashion, skincare, wellness, and lifestyle brands.

**Highlight stats bar (use these — they're your strongest numbers):**
- 8+ Shopify Plus storefronts delivered from scratch
- 300+ reusable components / 35 templates built
- ₹4L revenue loss prevented via checkout fix (48 hrs)
- 7–10 pages/week delivery velocity (up from 2–3)

**Featured projects (link to case study sections):** pick your 3 strongest with live links.

---

## Page 2: Projects / Case Studies — Content

Turn each resume bullet into a short **Problem → Action → Result** case study. Draft copy below — edit specifics (brand names if allowed, else "a Shopify Plus fashion brand") and swap in real screenshots/links.

### Case Study 1: Checkout Extensions & Shopify Functions Suite
**Problem:** Shopify Plus brands needed custom discount logic, upsell offers, and pincode-based delivery restrictions that standard checkout couldn't support.
**Action:** Built a suite of Checkout UI Extensions and Shopify Functions handling cart validation rules, custom discount logic, and shipment restrictions by pincode.
**Result:** Smoother checkout flows, reduced order errors, deployed across multiple Plus brands.
**Tech:** Shopify Functions, Checkout UI Extensions, Liquid, JavaScript
**[Add live link or screenshot if available]**

### Case Study 2: Critical Cart & Checkout Revamp
**Problem:** A live brand had a checkout exploit actively causing revenue loss.
**Action:** Diagnosed and redesigned cart validation and checkout logic under time pressure.
**Result:** Prevented an estimated ₹4L revenue loss within 48 hours.
**Tech:** Liquid, JavaScript, Shopify checkout customization
*(Good story for interview — be ready to explain the exploit and fix in plain terms.)*

### Case Study 3: Modular Section Repository (35 Templates, 300+ Components)
**Problem:** Development speed across multiple Shopify storefronts was slow and inconsistent (2–3 pages/week).
**Action:** Built a large-scale, Tailwind-driven, brand-agnostic component library — 300+ reusable widgets, 35 templates — and led migration from plain CSS to a Tailwind design system.
**Result:** Delivery velocity increased to 7–10 pages/week within 3 months; reduced style duplication and improved maintainability across projects.
**Tech:** TailwindCSS, Liquid, Shopify Online Store 2.0 sections/blocks
**[This is a great one to show visually — screenshot the component library or a few sections in use]**

### Case Study 4: Shopify Plus Storefront Builds (Fashion/Skincare/Wellness)
**Problem:** High-growth brands needed pixel-perfect, mobile-first storefronts built from Figma designs, fast.
**Action:** Delivered 8+ Shopify Plus storefronts from scratch; converted complex Figma designs into responsive templates with cross-browser compatibility; built interactive UX features like personalized gift messages and image customization modules.
**Result:** Polished, conversion-focused storefronts live for multiple brands; also integrated Recharge, Orderify, and StoreLocator apps.
**Tech:** Liquid, JavaScript, Figma-to-Shopify, app integrations
**[Add live links here — you said you have some]**

### Case Study 5: App Integration & Personalization Suite
**Problem:** Brands needed advanced search, personalization, translation, and A/B testing capability beyond native Shopify.
**Action:** Integrated and configured Algolia, Dynamic Yield, Langify, LimeSpot, Recharge, and Orderify across storefronts.
**Result:** Enabled personalized recommendations, multi-language support, advanced search, and subscription commerce.
**Tech:** Third-party app integration, Shopify APIs

**Optional 6th:** GA4/GTM/Meta Pixel tracking setup — short case study since JD explicitly lists this as a requirement.

---

## Page 3: Skills — Content (grid/tags format)

**Shopify:** Liquid, Shopify Functions, Checkout UI Extensions, Online Store 2.0, Metafields, Theme Architecture, ThemeKit, Shopify CLI
**Frontend:** HTML5, CSS3, TailwindCSS, JavaScript (ES6+), React (basics)
**Apps/Integrations:** Algolia, Dynamic Yield, Recharge, Orderify, Langify, LimeSpot, StoreLocator
**Analytics:** GA4, GTM, Meta Pixel
**Tools:** Git, GitHub, VS Code, Cursor AI, Postman, Figma-to-Shopify workflow
**Practices:** SEO, Accessibility, Site Speed Optimization, CRO-aligned design

---

## Page 4: About — Content

Short bio (~80 words):
> I'm a Shopify frontend developer with 2.5+ years building high-performance storefronts for D2C and Shopify Plus brands across fashion, skincare, and wellness. I specialize in Shopify Functions, Checkout Extensions, and scalable section-based theme architecture — turning Figma designs into fast, conversion-focused, mobile-first experiences. I've led component library builds that tripled delivery speed and fixed a critical checkout bug that saved a live brand ~₹4L in 48 hours. I care about clean code, pixel-perfect execution, and shipping fast without cutting corners on quality.

**Timeline:**
- Sep 2024 – Present: Shopify Frontend Developer, Ecom Experts
- [Update: WordsWorth AI dates — fix overlap first]
- Jul 2023 – Aug 2024: Senior Associate Frontend Developer, Marmeto
- B.E., 2022 (8.51 CGPA)

---

## Page 5: Contact — Content
- Email: darshansrinivasa034@gmail.com
- LinkedIn: linkedin.com/in/darshan-srinivasa
- Resume download button (link to hosted PDF)
- Optional: simple contact form or just "reach out via email/LinkedIn"

---

## CURSOR BUILD PROMPT (paste this into Cursor to scaffold the site)

```
Build a personal portfolio website for a Shopify Frontend Developer using Next.js 14 (App Router) and Tailwind CSS.

Requirements:
- Clean, modern, premium aesthetic — dark or light theme with strong typography, generous whitespace, subtle animations on scroll (use framer-motion if helpful). This should look like a senior developer's portfolio, not a template.
- Pages: Home, Projects (case studies), Skills, About, Contact — use Next.js routing, or a single-page scrolling layout with anchor navigation if simpler.
- Home page: hero section with headline/subheadline, a stats bar (4 key metrics as animated counters or simple stat cards), and 3 featured project cards linking to case studies.
- Projects page: card grid of 5-6 case studies. Each card expands or links to a detail view showing Problem / Action / Result / Tech stack, with placeholder image slots for screenshots.
- Skills page: categorized tag/pill grid (Shopify, Frontend, Apps/Integrations, Analytics, Tools, Practices).
- About page: bio paragraph + experience timeline (vertical timeline component).
- Contact page/section: email, LinkedIn link, resume download button.
- Fully responsive, mobile-first.
- Use a professional color palette (e.g., deep navy/charcoal + one accent color — avoid generic purple gradient SaaS look).
- Include a fixed/sticky nav bar with smooth scroll or route links.
- Set up for easy deployment to Vercel.

I will provide the actual content (case study text, stats, bio) separately — scaffold the components and layout with placeholder content matching this structure first, then I'll swap in real content.
```

---

## Deployment Steps (after Cursor build)
1. Push the project to a GitHub repo
2. Go to vercel.com → Import Project → connect the GitHub repo
3. Deploy (Vercel auto-detects Next.js, zero config needed)
4. Optional: buy a custom domain (e.g., darshans.dev) and connect it in Vercel settings — otherwise use the free vercel.app subdomain
5. Update your resume and Parman application with the new portfolio link

---

## Before You Ship
- [ ] Fix WordsWorth AI / Ecom Experts date overlap on resume
- [ ] Add real screenshots or live links to each case study
- [ ] Swap placeholder brand references for real names if NDA allows, else keep generic ("a Shopify Plus fashion brand")
- [ ] Add resume PDF download link
- [ ] Test on mobile (this matters extra for you — "mobile-first" is literally in the JD)
- [ ] Proofread all copy
