# T. Ballad Design System

Design system for **tballad.me** — the personal portfolio and resume site for T. Ballad, AI Engineer & Technical Program Manager.

This system codifies the visual language of the live site so it can be reused for resume PDFs, cover letter templates, slide decks, one-pagers, and any future companion artifacts (case studies, project write-ups, etc.).

---

## Source materials

- **Codebase:** [`CrazyBusyCreative/Portfolio`](https://github.com/CrazyBusyCreative/Portfolio) — static HTML/CSS/JS site, deployed via Cloudflare Pages to **tballad.me**
- **Stack:** Static HTML + CSS custom properties + vanilla JS. No framework, no build step
- **Pages:** `index.html` (home/hero), `projects.html`, `about.html`, `contact.html`
- **Single source of truth for tokens:** `css/styles.css` `:root` block

All visual decisions in this design system are derived from that codebase, expanded into a more complete token/component library here.

---

## Brand essence

**T. Ballad** is a 20+ year technical professional who alternated between hands-on engineering and program leadership and has now converged the two — building production AI systems *and* running the programs around them. The site sells that convergence to two audiences in parallel:

- **Track A — AI Engineer:** Python, FastAPI, LLM integration, RAG, agentic systems, SwiftUI
- **Track B — Technical Program Manager:** Cross-functional execution, governance, release readiness

The tagline that anchors the whole site:

> *"Not a career pivot. A convergence."*

Two companies sit behind the persona — **DisEntangled Tech, LLC** (consulting/fractional CTO) and **HexCode Studio** (AI systems and iOS apps) — but the portfolio brand is just **T. Ballad**, neutral and direct.

---

## Content fundamentals

**Voice:** Concise, direct, confident, measured. The site sells credibility through *evidence*, not enthusiasm. No flattery, no generic energy, no exclamation points. If a sentence sounds aspirational, it gets cut.

**Person:**
- First person singular in long-form prose (the About page essay, the closing note on Contact)
- Third person / no-person in headlines and metadata ("T. Ballad is an AI Engineer…", "20+ years shipping software")
- Second person ("you") is essentially absent — this is a portfolio, not a marketing landing page

**Casing:**
- Page titles and section headings: **Title Case** ("Two Ways to Work Together", "Featured Projects", "The Convergence")
- Track labels / badges: **ALL CAPS** with letter-spacing (`TRACK A`, `PRODUCTION`, `IN PROGRESS`)
- Body copy: sentence case
- Brand mark: `T. Ballad` (period + space; never "T Ballad" or "Tricia Ballad" on the site)

**Punctuation conventions:**
- `&middot;` (·) for inline separators between credentials/roles: `AI Engineer · Technical Program Manager`
- `&rarr;` (→) on CTAs and "View Project" links: `Let's Talk →`, `Read My Story →`
- `&amp;` written out as `&` in copy where natural
- Em-dashes used sparingly for emphasis: "Not because I ran out of PM opportunities — but because AI tools made it possible to combine both halves again."

**Tone examples (lift verbatim if you need them):**

> *"20+ years shipping software. Now building production AI systems and driving the programs around them."*

> *"That wasn't a retreat from engineering; it was a different vantage point."*

> *"I work best with teams building something that actually matters. If that's you, I'd love to talk about what you're trying to do before we talk about titles and comp."*

> *"Production Python/FastAPI application that monitors a portfolio of startups and surfaces fractional CTO opportunities through LLM analysis."*

**What to avoid:**
- Hype words: *passionate, journey, rockstar, ninja, cutting-edge, world-class, game-changing*
- Emoji in any UI surface (the codebase uses **zero** emoji — one near-exception, a `📊` chart emoji in the SignalForge TRS score callout, is the exception that proves the rule and can be omitted)
- Generic enthusiasm: *I'm excited to…, I love working on…*
- "Pivot" language — this is the **forbidden word**. Always "convergence."

**Self-description discipline:** Lead with what was built; let the principle emerge. Don't lecture. Frame Bricata as a credential (technical writing depth), not a gap. Frame the CTA PMO Coordinator role at full scope (0→1 PMO build, multi-department coordination, $135M+ portfolio).

---

## Visual foundations

### Palette

The site is built on a **warm-paper neutral** ground with two restrained accents:

| Token | Hex | Use |
|---|---|---|
| `--color-bg` | `#ffffff` | Default page background |
| `--color-surface` | `#f8f7f4` | Alternating section bands ("warm paper") |
| `--color-text` | `#1a1a18` | Body copy |
| `--color-text-muted` | `#5f5e5a` | Secondary copy, captions, dates, descriptions |
| `--color-border` | `rgba(0,0,0,0.08)` | All card borders, dividers, footer rule |
| `--color-navy` | `#1b3a5c` | Primary brand — headings, body links, nav, badges (Production) |
| `--color-orange` | `#c85a1a` | Accent — primary CTAs, project links, timeline, badges (In Progress) |
| `--color-orange-light` | `#fdf0e8` | Reserved tint for orange-accented containers |
| `--color-blue-light` | `#e6f1fb` | Ghost button hover fill |

**Vibe:** Warm, dry, editorial — closer to a print resume than a SaaS landing page. Navy is the workhorse for hierarchy; orange is doled out for things that should pull the eye (one primary CTA per surface, project links, the timeline rail). The neutrals lean very slightly warm (`#f8f7f4`, not pure gray) which reads as paper, not screen.

**Rules:**
- One primary orange action per viewport. Secondary actions use the **navy ghost** button.
- Headings are always navy. Body is near-black (`#1a1a18`), not pure black.
- No gradients. No glassmorphism. No bluish-purple. The aesthetic refuses 2020s SaaS tropes on purpose.

### Type

- **Display:** *Source Serif 4* (editorial serif, weights 400 / 500 / 600 / 700) — **substituted from the codebase's Caveat per user request: no handwriting fonts.** Used at 600 weight with `letter-spacing: -0.01em` for h1–h4, the nav brand mark, the "T. Ballad · © 2026" footer copyright, the convergence quote, the closing-note quote mark, the "Remote preferred…" availability band, and contact-card titles.
- **Body:** *Barlow* (sans, weights 400 / 500 / 600 / 700, plus 400 italic) — everything else: body, nav links, tags, badges, metadata, captions, buttons.

The display font is **not** for paragraphs. Reserve it for headlines, brand voice moments (quotes, the convergence tagline), and the brand mark. Body sans does all the structural work.

**Scale (responsive `clamp`):**
- `h1`: `clamp(2.5rem, 5vw, 4rem)` — hero only
- `h2`: `clamp(1.6rem, 3vw, 2.2rem)` — section headers, project titles
- `h3`: `clamp(1.2rem, 2vw, 1.6rem)` — card headings, stack labels
- Body: 1rem / 1.6 line-height
- Small / muted: 0.875rem
- Eyebrow / track labels / badges: 0.7rem, uppercase, letter-spacing 0.06–0.1em

### Spacing & layout

- `--max-width: 1000px` — narrow content column. The site is intentionally not wide; copy density and readability win over filling viewport width.
- Container padding: `1.5rem` mobile, `3rem` ≥ 768px.
- Sections: `padding: 5rem 0` (vertical rhythm).
- Card padding: `2rem`.
- Grids: 2-up for tracks/projects/convergence, 3-up for stats/stack/contact, single-column on mobile.

### Backgrounds

- **No imagery in chrome.** The site has no hero photograph, no decorative illustrations, no background patterns, no full-bleed images, no textures, no grain. The only imagery is content (project screenshots, book covers).
- Section banding is achieved purely with `var(--color-surface)` (`#f8f7f4`) — alternating white / warm-paper bands give visual rhythm without any imagery.

### Radii

- `--radius: 10px` — cards, project cards, stack cards, contact cards
- `--radius-sm: 6px` — buttons, badges, screenshots, book covers, score callouts
- `100px` — tag pills (full-rounded capsule)
- `50%` — headshot, timeline dots, stat icons inside avatar slots

### Shadows & elevation

- **Almost no shadows.** The only shadow in the codebase is the mobile nav menu drawer: `box-shadow: 0 4px 12px rgba(0,0,0,0.06)`.
- Elevation comes from **borders**, not shadows. Cards use `border: 1px solid rgba(0,0,0,0.08)` over surface fills.

### Borders

- All cards/inputs use the same hairline border: `1px solid rgba(0,0,0,0.08)`.
- Special variant: `card--accent-left` adds a 4px orange left border (used on the Convergence cards only — the *one* exception to the "no left-border-accent cards" anti-pattern).
- Timeline uses a 3px solid orange vertical rail with `border-radius: 2px`.
- Score callouts: 1px solid navy.
- Buttons: 2px transparent / colored border (so primary and ghost share geometry).

### Animation

- **Minimal.** The codebase declares exactly two transitions:
  - `transition: opacity 0.15s ease, background-color 0.15s ease` on `.btn`
  - `transition: color 0.15s ease` on `.nav-link` and `.footer__link`
- `scroll-behavior: smooth` on `html` for in-page anchor links.
- **No bounces, no fades, no scroll-driven reveals, no parallax.**

### Interaction states

- **Hover:**
  - Buttons: `opacity: 0.88` (everything except ghost, which fills `--color-blue-light`)
  - Nav brand: `opacity: 0.8`
  - Nav links / footer links: color shifts to `--color-navy`
  - Body links: underline appears
  - Project card link: underline appears
- **Press:** No defined press state in the codebase — inherits browser defaults.
- **Focus:** Inherits browser defaults (no custom focus ring defined; **flagged as a gap to address** for accessibility).
- **Active nav:** `.nav-link.active` is navy + underlined with `text-underline-offset: 3px`.

### Transparency & blur

- Only used in `--color-border: rgba(0,0,0,0.08)`. No backdrop filters, no blurs, no glassy surfaces anywhere on the site.

### Card anatomy

Every card on the site follows the same recipe:

```
background: white
border: 1px solid rgba(0,0,0,0.08)
border-radius: 10px
padding: 2rem (or 1.25rem 1.5rem for compact stack cards)
no shadow
```

The two variants are `card--accent-left` (4px orange left border, used on Convergence cards) and `project-card` (same recipe, used as section wrappers on the Projects page).

### Layout rules

- Sticky nav at top (`position: sticky; top: 0; z-index: 100`), 64px tall.
- Footer is a single bordered band — copyright above, link row below.
- No fixed elements other than the sticky nav.
- Hero sections are centered; section bodies center within a max-680px subcontainer for prose readability.

---

## Iconography

The codebase has **no icon font, no SVG sprite, no Lucide/Heroicons import** — every icon is a **hand-authored inline SVG** drawn at the point of use. There are roughly a dozen unique icons across the four pages:

- **Hamburger** (nav toggle, mobile)
- **Calendar** (20+ years stat)
- **Cube/box** (production AI apps stat)
- **Books** (published books stat)
- **Mortarboard / academic cap** (CS Degree stat)
- **Three-orbit atom** (convergence band)
- **Leaf** (myApothecary)
- **Star** (myTarot)
- **Diamond** (Creative Pantry)
- **Check-in-circle** + dashed variant (credentials)
- **Mail envelope** (contact, footer)
- **LinkedIn rect** (footer, contact)
- **GitHub octocat path** (footer, contact)

**Style consistency:**
- All 24×24 or larger viewBox
- Stroked outline icons (`stroke="currentColor"`)
- Stroke widths between 1.5 and 2
- `stroke-linecap="round"` / `stroke-linejoin="round"` where curves matter
- Color always inherits via `currentColor` (typically `--color-navy`)
- `aria-hidden="true"` on every decorative icon

**Substitution policy:** When extending the system, **prefer Lucide icons at stroke-width 1.5–2** — they match the existing aesthetic almost exactly. All current bespoke icons have direct Lucide equivalents:

| Site icon | Lucide equivalent |
|---|---|
| Hamburger | `menu` |
| Calendar | `calendar` |
| Cube/box | `package` or `box` |
| Books | `book-open` |
| Mortarboard | `graduation-cap` |
| Atom | `atom` |
| Leaf | `leaf` |
| Star | `star` |
| Diamond | `diamond` |
| Check-in-circle | `check-circle` |
| Mail | `mail` |
| LinkedIn | `linkedin` |
| GitHub | `github` |

For new icons, **use Lucide CDN** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) at stroke-width 1.8. See `assets/icons/` for copies of the most common ones in the system.

**Emoji:** Effectively none. The codebase has exactly one (`📊` on the SignalForge TRS score callout) and the design rule going forward is **no emoji** — substitute a Lucide `bar-chart-3` glyph instead.

**Unicode glyphs as icons:** Only `&rarr;` (→) on CTAs and `&middot;` (·) as a separator. These are intentional micro-typographic choices, not icons.

---

## Index — what's in this folder

| Path | What |
|---|---|
| `README.md` | This file |
| `colors_and_type.css` | Token layer: CSS custom properties + semantic type styles |
| `fonts/` | (Empty — fonts served from Google Fonts; documented in `colors_and_type.css`) |
| `assets/` | Logos (none — wordmark only), project screenshots, book covers, hand-extracted Lucide-style icons |
| `assets/icons/` | SVG icons in the brand style (Lucide subset) |
| `preview/` | Design-system preview cards — type specimens, color swatches, components, etc. (rendered in the Design System tab) |
| `ui_kits/portfolio/` | UI kit for the portfolio site itself — JSX components + interactive index.html |
| `SKILL.md` | Cross-compatible Agent Skill manifest for use in Claude Code |

---

## Quick start

1. Load fonts in `<head>`:
   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
   ```
2. Link the token CSS: `<link rel="stylesheet" href="colors_and_type.css">`
3. Use the semantic classes (`.eyebrow`, `.section__heading`, `.tag`, `.btn`, `.btn--primary`, `.btn--ghost`, etc.) or reach for the custom properties directly.

---

## Caveats & open items

- **Handwriting font removed.** The original site uses **Caveat**; this system replaces it entirely with **Source Serif 4** (no handwriting fonts anywhere per user direction). Source Serif is an editorial serif that pairs cleanly with Barlow and reads gender-neutral.
- **No logo asset exists** — the brand is a wordmark (`T. Ballad`) set in the display font. If a mark is ever needed (favicon, social card), it should be derived from that wordmark.
- **No focus-ring style is defined** in the source CSS — accessibility gap; this design system declares one in `colors_and_type.css`.
- **No headshot is in the codebase** — `.hero__headshot` styles exist but no image is referenced. If a headshot is added later, the styles are ready (160px, circle, 3px navy border).
