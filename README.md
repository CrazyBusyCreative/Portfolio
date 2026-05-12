# tballad.me

Personal portfolio and resume site for T. Ballad — AI Engineer and Technical Program Manager.

## Stack

Static HTML + CSS custom properties + vanilla JS. No framework, no build step, no CMS.

```
tballad.me/
├── index.html          Home / hero
├── projects.html       Project portfolio
├── about.html          Story, timeline, tech stack
├── contact.html        Contact and availability
├── css/
│   └── styles.css      All styles (tokens, layout, components)
├── js/
│   ├── nav.js              Mobile menu + active nav state
│   └── contact-form.js     Contact page: builds mailto draft on submit
├── design-system/      Authoritative token + UI kit bundle (see below)
├── assets/
│   ├── Ballad_TPM.docx     Resume (Word) linked site-wide
│   ├── icons/              e.g. bar-chart-3.svg (design system)
│   └── …                   Project screenshots and book covers
└── README.md
```

## Assets to add manually

Before deploying, ensure these files exist under `assets/`:

| File | Notes |
|------|--------|
| `Ballad_TPM.docx` | Primary resume file linked from the site (replace when you export a new version) |

Screenshots for SignalForge and SignalCast live in `assets/` and are referenced from `index.html` and `projects.html`.

---

## Deployment — Cloudflare Pages

This is a static site deployed via Cloudflare Pages. No build step, no framework, no server config required.

### One-time setup

1. Push this repo to GitHub under the HexCodeStudio org (suggested name: `tballad-me`)
2. In the Cloudflare dashboard → **Pages** → **Create a project** → **Connect to Git** → select the repo
3. Build settings: leave blank — no build command, no build output directory (Cloudflare serves the root)
4. Click **Deploy** — first deploy runs automatically
5. In the Pages project settings → **Custom Domains** → add `tballad.me`
6. Update DNS: point `tballad.me` to the Cloudflare Pages project (if the domain is already on Cloudflare DNS, this is one click)

### Ongoing deploys

```bash
git add .
git commit -m "your message"
git push
```

Push to `main` → live in under 60 seconds, automatically. No SFTP, no manual file transfers, no server access needed.

### Clean URLs (optional)

Links use `.html` extensions throughout — no rewrite rules needed as-is. To use clean URLs (`/projects/` instead of `/projects.html`) later, add a `_redirects` file to the project root:

```
/projects    /projects.html    200
/about       /about.html       200
/contact     /contact.html     200
```

### Analytics

Enable **Cloudflare Web Analytics** in the Pages project settings — free, privacy-preserving, no cookie banner required. Add the provided `<script>` snippet to the `<head>` of all four pages.

---

## Local development

No build step needed. Open any `.html` file directly in a browser, or serve with any static file server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000`.

### Copy guard (optional)

```bash
npm test
```

Runs a small check that HTML and README avoid deprecated branding strings.

## Fonts

Loaded from Google Fonts in each page `<head>`:

- **Source Serif 4** — headings, nav wordmark, footer copyright, quotes, and other display moments (per [design-system](design-system/) tokens)
- **Barlow** — body, nav links, tags, buttons, form fields

## Contact form

On [contact.html](contact.html), **Send a Message** has no server backend. Submitting the form opens the visitor’s mail client with a pre-filled `mailto:tballad@me.com` draft (subject + body). If nothing opens, use the Email card or footer link.

## Design system bundle

The folder [design-system/](design-system/) contains the exported **T. Ballad Design System** (README, `colors_and_type.css`, preview specimens, React UI kit reference, icons). The live site stays a single stylesheet: [css/styles.css](css/styles.css).

## Links

- LinkedIn: https://linkedin.com/in/tballad
