# Joshua Kim — Portfolio

Hand-written HTML, CSS, and JavaScript. No framework, no build step, no
dependencies. Deployed on Vercel.

---

## Adding a project

**You only edit one file: `js/projects.js`.**

Copy an existing block in the `PROJECTS` array, change the values, save.
The homepage grid, the filter buttons, the detail page, and the
previous/next navigation all update on their own.

```js
{
  slug: "my-new-project",        // becomes the URL: /work/my-new-project
  title: "My New Project",
  year: "2026",
  accent: "olive",               // clay | olive | mustard | ink | plum | sky
  cover: "assets/covers/my-new-project.png",
  tags: ["Web", "React"],        // these create the filter buttons
  role: "Design + Engineering",
  summary: "One sentence for the card.",
  overview: "Two or three sentences for the top of the detail page.",
  stack: ["React", "Postgres"],
  links: [{ label: "Live site", url: "https://..." }],
  sections: [
    { heading: "The problem", body: "..." },
    { heading: "What I built", body: "...", image: "assets/projects/shot.png", caption: "..." }
  ]
}
```

Order in the array = order on the page. Newest first is a good default.

### Notes on the fields

- **`slug`** must be unique and URL-safe (lowercase, hyphens, no spaces).
- **`tags`** are collected automatically into filter buttons. Reuse the same
  tag names across projects so the filter list stays short.
- **`sections`** can be any length. `image` and `caption` are optional.
- **`links`** can be empty (`[]`). The first one renders as the solid button.

---

## Images

Drop files in:

- `assets/covers/` — grid card images (aim for 4:3, ~1200×900)
- `assets/projects/` — images inside case studies (any width, 1200px+ is good)

PNG, JPG, WebP, and SVG all work. The current files are generated
placeholders — replace them with real screenshots as you go.

Also worth replacing:

- `assets/portrait.svg` → a real photo (referenced in `about.html`)
- `assets/resume.pdf` → add your résumé; it's linked in the footer

---

## Previewing locally

```bash
node serve.js
```

Then open <http://localhost:3000>.

This mirrors how Vercel serves the site, including clean URLs and the
`/work/<slug>` routing. Opening the HTML files directly with `file://`
**will not work** — the site uses root-absolute paths (`/css/style.css`),
so it needs to be served from a root.

---

## Deploying

First time:

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create an empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git branch -M main
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, and
deploy. Vercel will detect it as a static site — leave every build setting
blank. `vercel.json` handles the clean URLs and the `/work/:slug` rewrite.

After that, every `git push` redeploys automatically.

---

## If you change the domain

The site is `https://joshuasiyoonkim.vercel.app`. That address is hard-coded
in four places for the canonical and social-preview tags:

- `index.html` — `<link rel="canonical">` and the `og:` tags
- `about.html` — same
- `project.html` — same (the static fallback values)
- `js/project.js` — the `SITE` constant near the top

Update all four if you move to a custom domain, and regenerate
`assets/og.png` since the URL is printed on it.

### A limitation worth knowing

Project pages set their title and preview tags with JavaScript. Browsers and
Google run JS, so those work there — but most social link scrapers
(iMessage, Slack, LinkedIn, Facebook) do **not**. Pasting a link to a
specific project will show the generic site preview, not that project's.
The homepage and about page previews are fully static, so those are correct
everywhere.

Fixing it properly means generating a real HTML file per project, which
needs a build step. Not worth it unless you start sharing deep links often.

---

## Things to personalize

The site works as-is, but these still say placeholder things:

- [ ] Hero headline and intro in `index.html`
- [ ] Bio paragraphs in `about.html`
- [ ] Skills and education lists in `about.html`
- [ ] GitHub and LinkedIn URLs (currently `https://github.com/` — in all
      three HTML files' footers)
- [ ] The three example projects in `js/projects.js`
- [ ] `assets/portrait.svg` and `assets/resume.pdf`

---

## File map

```
index.html        Homepage — hero + filterable work grid
about.html        Bio, skills, links
project.html      Template that renders any single project
serve.js          Local preview server (Vercel ignores this)
vercel.json       Clean URLs + /work/:slug rewrite
css/style.css     All styles, organized in numbered sections
js/projects.js    ← your content lives here
js/main.js        Builds the homepage grid + filters
js/project.js     Builds the project detail pages
assets/           Images
```

Colors, type, and spacing are all CSS variables at the top of
`css/style.css` under `1. Tokens` — change them there and the whole site
follows. Dark mode is handled automatically from the same tokens.
