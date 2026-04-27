# triciaballad.com

Personal portfolio and resume site for Tricia Ballad — AI Engineer and Technical Program Manager.

## Stack

Static HTML + CSS custom properties + vanilla JS. No framework, no build step, no CMS.

```
triciaballad.com/
├── index.html          Home / hero
├── projects.html       Project portfolio
├── about.html          Story, timeline, tech stack
├── contact.html        Contact and availability
├── css/
│   └── styles.css      All styles (tokens, layout, components)
├── js/
│   └── nav.js          Mobile menu + active nav state
├── assets/
│   ├── headshot.jpg    Profile photo (add manually)
│   ├── resume.pdf      Resume PDF (add manually)
│   └── resume.docx     Resume DOCX (add manually)
└── README.md
```

## Assets to add manually

Before deploying, drop these files into `assets/`:

| File | Source |
|------|--------|
| `headshot.jpg` | Ballad_Tricia_487-_597.jpg — rename on copy |
| `resume.pdf` | Export from your resume tool |
| `resume.docx` | Export from your resume tool |

Screenshots for SignalForge and SignalCast can replace the gray placeholder `<div>` elements in `index.html` and `projects.html` once available.

---

## Deployment — Cloudflare Pages

This is a static site deployed via Cloudflare Pages. No build step, no framework, no server config required.

### One-time setup

1. Push this repo to GitHub under the HexCodeStudio org (suggested name: `triciaballad-com`)
2. In the Cloudflare dashboard → **Pages** → **Create a project** → **Connect to Git** → select the repo
3. Build settings: leave blank — no build command, no build output directory (Cloudflare serves the root)
4. Click **Deploy** — first deploy runs automatically
5. In the Pages project settings → **Custom Domains** → add `triciaballad.com`
6. Update DNS: point `triciaballad.com` to the Cloudflare Pages project (if the domain is already on Cloudflare DNS, this is one click)

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

## Fonts

Loaded from Google Fonts in each page `<head>`:

- **Architects Daughter** — headings and display text
- **Barlow** — body, nav, tags, metadata
