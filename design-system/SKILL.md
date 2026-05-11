---
name: tballad-design
description: Use this skill to generate well-branded interfaces and assets for T. Ballad (tballad.me), the personal portfolio brand of an AI Engineer + Technical Program Manager. Suitable for production or throwaway prototypes/mocks (resume PDFs, cover letter templates, case studies, slide decks, one-pagers). Contains essential design guidelines, colors, type, fonts, icons, and a UI kit recreating the live site.
user-invocable: true
---

# T. Ballad Design System — Skill

Read the `README.md` file within this skill first, then explore the other available files. The README is the source of truth for voice, palette, type, iconography, spacing, and component anatomy.

## Files at a glance

- `README.md` — Brand essence, content fundamentals (voice/tone/punctuation/forbidden words), visual foundations (color, type, spacing, radii, shadows, animation, interaction states), iconography rules
- `colors_and_type.css` — Token layer: CSS custom properties for color + type + spacing, plus semantic type styles
- `assets/` — Real visual assets: project screenshots (SignalForge, SignalCast), book covers (AccessControl, SecuringPHP, DummiesBook)
- `assets/icons/` — Lucide-style SVG icon set in the brand stroke style (mail, github, linkedin, calendar, book-open, atom, leaf, star, diamond, check-circle, package, graduation-cap, bar-chart-3, arrow-right, arrow-down, menu, quote)
- `preview/` — Per-token preview cards (type, colors, components) — useful as visual reference
- `ui_kits/portfolio/` — Pixel-faithful React recreation of tballad.me (`index.html` + JSX components + `styles.css`). Use it as the canonical reference for what a finished surface should look like.

## Usage

If creating **visual artifacts** (slides, mocks, throwaway prototypes, resume layouts, cover letter templates, project case-study one-pagers):

1. Copy the assets you need out of this skill folder (`assets/`, `assets/icons/`, the fonts referenced in `colors_and_type.css`).
2. Link `colors_and_type.css` (or inline its tokens) and load **Source Serif 4** + **Barlow** from Google Fonts (`https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600;8..60,700&family=Barlow:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`).
3. Build the artifact as static HTML using the component recipes documented in the README (cards = white + 1px hairline border + 10px radius + no shadow; primary CTA = orange; secondary = navy ghost; section banding = alternating white / `#f8f7f4`).

If working on **production code** for the live site, copy assets and read `README.md` to become an expert in designing with this brand. Match the existing static-HTML / no-build conventions of `CrazyBusyCreative/Portfolio`.

## Non-negotiables

- **No emoji.** The codebase has zero. Substitute Lucide-style SVG from `assets/icons/`.
- **No gradients, no glassmorphism, no bluish-purple, no left-border-accent cards** (except the one documented Convergence-card variant).
- **No "pivot" — say "convergence."** Lead with what was built; let the principle emerge. No hype words.
- **One primary orange action per viewport.** Secondary actions use the navy ghost button.
- **Display font is for headings and brand-voice moments only.** Body sans (Barlow) does all structural work.
- **No handwriting fonts.** Display is **Source Serif 4** at weight 600 with tight tracking. Don't reintroduce Caveat, Kalam, or any cursive/handwriting display face without an explicit instruction.

## When invoked without further guidance

Ask the user what they want to build or design, ask 3–5 focused questions (audience, surface type, length, whether they want variations and on which axes), then act as an expert designer producing HTML artifacts or production code per the answers.
