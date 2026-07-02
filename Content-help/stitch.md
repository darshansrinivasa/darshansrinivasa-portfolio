I pulled all **13 screens** from **Darshan S. Portfolio Design** via Stitch MCP and read the full HTML for each. Below is my understanding of the design and a complete implementation plan for your existing **Next.js 16.2 + Tailwind CSS v4** starter (currently the default create-next-app scaffold).

---

## Design understanding

### Brand intent: "Editorial Craft"

This is a **senior Shopify frontend developer portfolio** aimed at boutique e-commerce and Shopify Plus clients. The aesthetic is deliberately anti-startup: warm cream backgrounds, muted sage accents, serif headlines, generous whitespace, and content-forward layouts. The goal is to feel like a **curated editorial publication**, not a generic dev portfolio.

### Information architecture (5 routes + 1 dynamic route)

| Route | Desktop screen | Mobile screen | Purpose |
|-------|---------------|---------------|---------|
| `/` | Home - Desktop | Home - Mobile | Hero, stats, featured work, services bento |
| `/projects` | Projects - Desktop | Projects - Mobile | Full portfolio grid |
| `/projects/[slug]` | Project Case Study Detail | Case Study Detail - Mobile | Long-form case study |
| `/skills` | Skills Page | Skills - Mobile | Bento-grid skill categories |
| `/about` | About Page | About - Mobile | Bio, timeline, education |
| `/contact` | Contact Page | Contact - Mobile App Version | Contact info + form |

Plus a dedicated **Mobile Nav - Open State** screen that defines the full-screen overlay menu pattern.

### Layout system

**Container:** `max-w-7xl` (1280px) centered, with `px-grid-margin` (40px) horizontal padding.

**Grid:** Primarily a **12-column grid** on desktop (`md:grid-cols-12`), collapsing to single column on mobile. Common spans:
- Hero text: `md:col-span-8`
- Sidebar/aside: `md:col-span-4` or `lg:col-span-4`
- Skills bento: `8+4`, `6+6`, `5+7` asymmetric spans
- Projects grid: alternating `8+4` large/small cards, plus one `col-span-12` full-width card

**Vertical rhythm:**
- `section-gap`: 120px between major sections
- `stack-lg`: 48px between section header and content
- `stack-md`: 32px between related groups
- `stack-sm`: 16px between tightly related items
- `base`: 8px micro-spacing

**Section patterns:**
- Full-bleed tinted bands (`bg-secondary-container/50`, `bg-surface-container-low`)
- Border separators (`border-y border-outline-variant/30`)
- Sticky sidebars on case study and about timeline (`lg:sticky lg:top-32`)

### Typography

| Token | Font | Size | Weight | Use |
|-------|------|------|--------|-----|
| `display-lg` | EB Garamond | 72px / 1.1 | 500 | Page heroes (desktop) |
| `headline-lg` | EB Garamond | 48px / 1.2 | 500 | Section titles |
| `headline-lg-mobile` | EB Garamond | 36px / 1.2 | 500 | Section titles (mobile) |
| `headline-md` | EB Garamond | 32px / 1.3 | 500 | Card titles, nav brand |
| `body-lg` | Hanken Grotesk | 20px / 1.6 | 400 | Lead paragraphs |
| `body-md` | Hanken Grotesk | 16px / 1.6 | 400 | Body copy |
| `label-md` | Hanken Grotesk | 14px / 1.2 | 600, 0.05em tracking | Nav, tags, metadata |

**Rules from DESIGN.md:**
- Headlines use negative letter-spacing at large sizes
- Labels are uppercase with wide tracking for metadata (`tracking-widest`)
- Italic serif used for emphasis words in headlines ("conversion-focused", "exceptional")
- Selection color: `primary-fixed` background

### Color system (Material Design 3–style tokens)

The Stitch export uses a full semantic token palette, not raw hex in components:

| Role | Token | Hex | Usage |
|------|-------|-----|-------|
| Canvas | `background` / `surface` | `#fcf9f8` | Page background (warm cream) |
| Text | `on-surface` | `#1b1c1c` | Primary text (charcoal, not black) |
| Muted text | `on-surface-variant` | `#434843` | Body secondary |
| Primary | `primary` | `#506053` | CTAs, accents, active nav |
| Primary accent | `customColor` | `#829384` | Muted sage (brand) |
| Secondary band | `secondary-container` | `#ebe1d0` | Stats bar, footer, skill cards |
| Surface layers | `surface-container-low` | `#f6f3f2` | Cards, form backgrounds |
| Borders | `outline-variant` | `#c3c8c1` | Dividers, card borders |
| Fixed tints | `primary-fixed`, `tertiary-fixed` | Pastel fills | Tags, phase badges |

Tag/chip colors rotate through `primary-fixed`, `secondary-fixed-dim`, `tertiary-fixed` for visual variety.

### Components inventory

**Global shell:**
1. **TopNavBar** — fixed, `bg-surface/80 backdrop-blur-md`, shrinks on scroll
2. **Footer** — `bg-secondary-container`, social links, copyright
3. **MobileMenuOverlay** — full-screen `z-[60]`, staggered nav link animation, resume CTA at bottom

**Content components:**
4. **HeroSection** — display headline + body + dual CTAs (filled pill + ghost underline)
5. **StatsBar** — 4-column grid with left-border accent (`border-l border-primary/20`)
6. **ProjectCard** — `aspect-[4/5]` image, hover scale + sage overlay, title, description, tech tags
7. **ProjectCardLarge** — `aspect-[16/9]` or horizontal layout for projects page
8. **ServiceCard** — icon + title + body in bordered `rounded-lg` box (bento cell)
9. **SkillCard** — colored bento tile (`secondary-container`, `tertiary-fixed`, etc.) with pill tags
10. **Tag/Chip** — `rounded-full px-3/4 py-1` with semantic background colors
11. **TimelineItem** — vertical line + dot marker + role/company/date
12. **CaseStudyMeta** — 4-column metadata grid (Client, Role, Timeline, Services)
13. **PhaseBadge** — Problem/Action/Result pills with semantic colors
14. **MetricBlock** — large number + label (case study results)
15. **ContactForm** — underline-style inputs (`border-bottom: 2px`), label above field
16. **EditorialLink** — charcoal underline that thickens on hover (`.editorial-underline`)
17. **SectionEyebrow** — uppercase `label-md` in `text-primary` above headings

**Icons:** Google Material Symbols Outlined (bolt, extension, arrow_forward, menu, close, etc.)

### Responsive behavior

| Breakpoint | Behavior |
|------------|----------|
| `< md` (mobile) | Single column, hamburger menu, `headline-lg-mobile` instead of `display-lg`, stacked stats, full-width CTAs |
| `md+` | Horizontal nav links, multi-column grids, side-by-side layouts |
| `lg+` | Sticky sidebars on case study |

**Mobile-specific patterns:**
- Fixed header with menu toggle (`md:hidden`)
- Full-screen nav overlay with `slideUp` staggered animation (0.1s delays per item)
- Bottom nav on Skills Mobile (icon-based: home, work, star, person, mail) — *note: this differs from other mobile screens*
- Hero portrait image `aspect-[4/5]` above fold on mobile home
- Contact form stacks below info block

**Desktop-specific patterns:**
- Inline nav with active page indicator (`border-b-2 border-primary`)
- "Download Resume" button always visible in nav
- 3-column featured projects grid
- 12-column asymmetric project masonry

### Navigation & interactions

**Navigation:**
- 5 primary links: Home, Projects, Skills, About, Contact
- Active state: bold + `border-b-2 border-primary`
- Inactive: `text-on-surface-variant` → `hover:text-primary`
- Mobile overlay: large serif links with animated underline grow (`group-hover:w-full`)

**Micro-interactions (from Stitch HTML):**
1. **Nav scroll shrink** — `py-4` → `py-2` + stronger shadow after 20px scroll
2. **Card hover** — image `scale-105`, sage overlay fade-in, title color shift to primary
3. **Button press** — `active:scale-95` or `active:scale-[0.98]`
4. **Scroll reveal** — IntersectionObserver adds `animate-fade-in-up` to cards
5. **Editorial underline** — 1px → 2px on hover
6. **Arrow links** — `group-hover:translate-x-1` on arrow icon
7. **Form focus** — bottom border changes to `primary` color
8. **Mobile menu close** — slide up + fade out (400ms)
9. **Tag hover** — subtle color shift (`.tag-hover` class referenced in skills)

### Content inconsistencies to resolve before build

The Stitch screens use **placeholder copy that diverges** between desktop and mobile. You'll need real content decisions:

| Area | Desktop | Mobile | Recommendation |
|------|---------|--------|----------------|
| Home hero | "Shopify Frontend Developer building fast, conversion-focused storefronts" | "Crafting Editorial Experiences for Global E-commerce" | Pick one canonical headline |
| Home stats | 8+ storefronts, 300+ components, ₹4L saved, 7-10 pages/week | 50+ stores, 99 Lighthouse, 8+ years | Use your real metrics |
| Featured projects | Elysian Label, Derma Rituals, Velocity Gear | L'Avenir Skincare (partial) | Single `projects.json` data source |
| Projects list | 5 technical Shopify case studies | Maison de Lin, Veloce Collective, Atelier Curated | Unify under one dataset |
| Case study | Checkout Extensions & Shopify Functions | Maison Bloom Transformation | One case study per slug |
| About timeline | Luxe Commerce Studio, Aura Digital Agency | Senior Shopify Developer roles | Use your real CV |
| Skills mobile nav | Bottom icon tab bar | Not present on other pages | Decide: bottom nav or hamburger everywhere |

---

## Implementation plan (Next.js 16 + Tailwind CSS v4)

### Phase 0: Foundation (design tokens + fonts)

**Goal:** Replace the create-next-app defaults with the Editorial Craft design system.

1. **Fonts** — swap Geist for `EB_Garamond` and `Hanken_Grotesk` via `next/font/google` in `layout.tsx`
2. **Design tokens** — migrate the Stitch `tailwind.config` extend block into Tailwind v4's `@theme inline` in `globals.css`:
   - All semantic colors (`primary`, `on-surface`, `secondary-container`, etc.)
   - Custom spacing (`section-gap`, `stack-*`, `grid-margin`, `grid-gutter`)
   - Typography tokens as `--text-display-lg`, `--font-headline-md`, etc.
   - Border radii (`rounded` = 2px, `lg` = 4px, `xl` = 8px)
3. **Global styles** — add utility classes:
   - `.editorial-underline`
   - `.form-underline`
   - `.material-symbols-outlined` font-variation settings
   - `selection:bg-primary-fixed`
   - `@keyframes fade-in-up` and `slideUp`
4. **Material Symbols** — load via `<link>` in layout or self-host subset of used icons
5. **Remove** dark mode defaults from starter (design is light-only; Stitch has `darkMode: "class"` but screens are all light)

### Phase 1: Layout shell + shared components

**Goal:** Every page shares consistent chrome.

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, shell
│   ├── page.tsx            # home
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── skills/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx       # client: scroll shrink, mobile toggle
│   │   ├── SiteFooter.tsx
│   │   ├── MobileMenu.tsx       # client: overlay + animations
│   │   └── Container.tsx        # max-w-7xl + px-grid-margin
│   ├── ui/
│   │   ├── Button.tsx           # primary filled, ghost underline variants
│   │   ├── Tag.tsx              # skill/tech chips
│   │   ├── SectionHeader.tsx    # eyebrow + title + optional link
│   │   ├── StatBlock.tsx
│   │   ├── EditorialLink.tsx
│   │   └── PhaseBadge.tsx       # Problem/Action/Result
│   └── sections/               # page-specific composed sections
```

**SiteHeader** (client component):
- `usePathname()` for active link styling
- `useEffect` scroll listener for nav shrink
- Hamburger visible `< md`, links visible `md+`
- "Download Resume" button (links to `/resume.pdf` or external)

**MobileMenu** (client component):
- Portal or fixed overlay at `z-[60]`
- Body scroll lock when open
- Staggered `slideUp` animation on nav items
- Close on link click + Escape key
- Resume CTA + social links in footer area

### Phase 2: Content layer

**Goal:** Single source of truth for all copy, decoupled from JSX.

```
src/
├── content/
│   ├── site.ts              # name, title, email, location, social links
│   ├── navigation.ts        # nav items array
│   ├── stats.ts             # homepage metrics
│   ├── projects/
│   │   ├── index.ts         # all projects metadata
│   │   └── checkout-extensions.ts  # full case study content
│   ├── skills.ts            # skill categories + tags
│   ├── experience.ts        # timeline entries
│   └── education.ts
```

Use TypeScript interfaces:
```typescript
interface Project {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  featured?: boolean;
  gridSpan?: "large" | "small" | "full";
}
```

Images: download Stitch AI-generated images to `public/images/` or replace with real project screenshots. Use `next/image` with explicit `width`/`height` or `fill` + `sizes`.

### Phase 3: Page-by-page build

#### 3a. Home (`/`)

Sections in order:
1. Hero — display headline, italic emphasis span, body, View Projects + Download Resume CTAs
2. StatsBar — 4 metrics in `bg-secondary-container/50` band
3. FeaturedProjects — 3-column grid of `ProjectCard` (filter `featured: true`)
4. ServicesBento — 4+2 grid of `ServiceCard` with Material icons
5. Footer

Mobile: reorder to portrait-first hero, stacked stats, single-column projects, stacked bento.

#### 3b. Projects (`/projects`)

1. Page header — "Selected Work" display title + italic subtitle
2. Asymmetric 12-col grid — alternating 8/4 large/small cards per Stitch layout
3. Full-width card at bottom with inline "View Case Study" link
4. Cards link to `/projects/[slug]`

#### 3c. Case Study (`/projects/[slug]`)

1. Back link with arrow animation
2. Hero — title + excerpt + "Live site" button
3. Featured image (500px height, hover scale)
4. Meta grid — Client, Role, Timeline, Services
5. Two-column layout: sticky Tech Stack sidebar + content area
6. Content sections — Problem / Action / Result with `PhaseBadge`
7. Inline metric blocks (+18% conversion, etc.)
8. Prev/Next project navigation footer
9. `generateStaticParams()` from projects data

Mobile: single column, no sticky sidebar (tech stack inline), stacked metrics.

#### 3d. Skills (`/skills`)

1. Hero — "Core Competencies" eyebrow + display title
2. Bento grid — 6 category cards with varying `col-span` and background colors
3. Philosophy quote section at bottom
4. Each card: icon, title, description, pill tags

Mobile: single-column stack. **Decision needed:** include bottom icon nav or use standard hamburger.

#### 3e. About (`/about`)

1. Hero — 8/4 grid with bio text + portrait image
2. Timeline — sticky "The Journey" label + vertical line with dot markers
3. Education section
4. CTA band

Mobile: stacked bio + image, timeline without sticky sidebar.

#### 3f. Contact (`/contact`)

1. 5/7 grid — left info block, right form
2. Underline-style form inputs with labels above
3. Submit button with arrow animation
4. Atmospheric image section below (optional)

Form handling: start with client-side validation + `mailto:` or wire to API route / Formspree / Resend later.

### Phase 4: Animations & polish

1. **Scroll reveal** — lightweight `useInView` hook or CSS `@starting-style` / `IntersectionObserver` wrapper component
2. **Nav transitions** — CSS transitions on padding/shadow (no JS animation library needed initially)
3. **Page transitions** — optional; not in Stitch designs, skip for v1
4. **Focus management** — trap focus in mobile menu, restore on close
5. **Reduced motion** — respect `prefers-reduced-motion` for slideUp/fade-in

Consider **Framer Motion** only if Stitch's staggered animations prove too complex in pure CSS. The designs are achievable with Tailwind + CSS keyframes.

### Phase 5: SEO, metadata & performance

1. Per-page `metadata` exports (title template: `%s | Darshan S.`)
2. Open Graph images per page
3. `next/image` for all photos with proper `sizes` attributes
4. Font subsetting via `next/font` (latin only, needed weights)
5. Static generation for all pages (`generateStaticParams` for case studies)
6. Lighthouse target: match the "99" score claimed in mobile design

### Proposed file structure (final)

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── projects/page.tsx
│   ├── projects/[slug]/page.tsx
│   ├── skills/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/         (Header, Footer, MobileMenu, Container)
│   ├── ui/             (Button, Tag, SectionHeader, StatBlock, ...)
│   ├── cards/          (ProjectCard, SkillCard, ServiceCard)
│   └── sections/       (Hero, StatsBar, FeaturedProjects, Timeline, ContactForm)
├── content/            (all JSON/TS data)
├── lib/
│   ├── cn.ts           (clsx helper if needed)
│   └── hooks/          (useScrollNav, useInView, useMobileMenu)
└── types/
    └── content.ts
```

### Build order (recommended)

| Step | Task | Depends on |
|------|------|------------|
| 1 | Design tokens in `globals.css` | — |
| 2 | Fonts + root layout | Step 1 |
| 3 | Container, Button, Tag primitives | Step 1 |
| 4 | SiteHeader + MobileMenu + Footer | Steps 2–3 |
| 5 | Content data files (with your real copy) | — |
| 6 | Home page | Steps 4–5 |
| 7 | Projects list + ProjectCard | Steps 4–5 |
| 8 | Case study template | Steps 5–7 |
| 9 | Skills page | Steps 4–5 |
| 10 | About page | Steps 4–5 |
| 11 | Contact page + form | Steps 4–5 |
| 12 | Animations + a11y polish | All pages |
| 13 | SEO metadata + image optimization | All pages |

### Key technical decisions

1. **Tailwind v4 `@theme`** instead of `tailwind.config.js` — matches your existing setup; port Stitch's CDN config tokens directly
2. **No component library** — the design is custom enough that Radix/shadcn would fight the editorial aesthetic
3. **App Router with static pages** — portfolio is content-heavy, no SSR needed
4. **Client components only where necessary** — header, mobile menu, scroll animations, contact form
5. **Unified responsive components** — one component per section with Tailwind responsive classes, not separate mobile/desktop page components
6. **Content as TypeScript** — not MDX initially; case studies are structured enough for typed data

---

## What I need from you before coding

1. **Canonical copy** — which hero headline, stats, and project names are real?
2. **Resume** — PDF path or external URL for the Download Resume button?
3. **Contact form** — static mailto, or should I plan an API route (Resend/Formspree)?
4. **Images** — use Stitch AI placeholders temporarily, or do you have real project screenshots?
5. **Skills mobile bottom nav** — include it, or standard hamburger on all mobile pages?

Once you confirm those, I can start with Phase 0 (design tokens + layout shell) and work through the build order above.