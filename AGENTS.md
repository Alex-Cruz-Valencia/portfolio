# Portfolio Project Guide

## What This Is

Alex Cruz-Valencia's PM portfolio site. Astro 7, deployed on Vercel at https://alexcruzvalencia.com. Targets APM internship recruiters. See README.md for full project docs.

## Dev Workflow

```bash
npm run dev      # dev server at http://localhost:4321
npm run build    # always verify this passes before committing
git push origin main  # Vercel auto-deploys on push
```

Always run `npm run build` and confirm it passes before committing. All commits go to `main` and deploy automatically.

## Astro Version Notes

This project uses **Astro 7**. Key API differences from older Astro:
- Content config: `src/content.config.ts` (not `src/content/config.ts`)
- Content loader: uses `glob` from `astro/loaders`
- Entry ID: `entry.id` (not `entry.slug`)
- Render: `import { render } from 'astro:content'` then `await render(entry)`
- View transitions: `ClientRouter` from `astro:transitions` (not `ViewTransitions`)

## Content Collections

Case studies live in `src/content/case-studies/*.md`. The schema is in `src/content.config.ts`:

```ts
schema: z.object({
  title: z.string(),
  date: z.string(),
  excerpt: z.string(),
  tags: z.array(z.string()).optional(),
  readTime: z.string().optional(),
})
```

Adding a `.md` file with valid frontmatter is all that's needed — routing and home page listing update automatically.

## Design System

**Live theme: Minimal** — white, ink, one cobalt accent (`#2448ff`), Inter Tight for everything, Geist Mono for small metadata labels. Case studies render as a numbered list of rows on the home page.

How it's built: base tokens and components live in `src/layouts/Layout.astro` (`<style is:global>`) and page-scoped styles. The active look is a theme layer in `src/styles/theme.css`, imported by the layout. Its selectors use a `:root:root:root:root` prefix so they beat Astro's scoped `[data-astro-cid]` selectors; keep that prefix when adding rules.

Backup designs (full sites, switchable by merging the branch):
- `design/dark` — near-black "dark product" theme with glow + glass cards
- `design/editorial-original` — previous warm-paper editorial look (Fraunces serif, green accent)

Motion layer (`src/scripts/motion.ts`, styles at the bottom of `theme.css`): Lenis smooth scroll, scroll reveals (JS adds `.will-reveal`/`.is-in`, so no-JS shows everything), stat count-up via `data-count-*` on the home proof row, off-screen video pausing, nav hairline on scroll, and view-transition title morphs (`transition:name="title-<id>"` on home cards and case study h1). All of it is disabled under `prefers-reduced-motion`.

Case study visuals (frontmatter): `gallery` (up to 3 phone screens above "At a glance"; `kind: image|video`, `frame: framed|screen`; video `src` has no extension and needs `.webm` + `.mp4`), `mascot` (small animated mark by the kicker), `cardImage`/`cardImageAlt` (phone peeking out of the featured home card). Assets live in `public/work/<slug>/`. Inline figures in the body use `<figure class="case-figure case-figure-wide">`.

Shared helpers: `.eyebrow` / `.mono` labels, `.btn` / `.btn-outline`, `.tag`, `.status-pill`, `.section-label`, `.content-width` (reading), `.container` (wide).

Case study frontmatter also supports `org`, `role`, `team`, `methods`, `outcome`, `tldr`, `featured` — these drive the home cards and the "At a glance" box.

Optional assets render only when present (see `src/lib/site.ts`): `public/Alex_Cruz-Valencia_Resume.pdf` (nav, hero, footer, contact; `/resume.pdf` redirects via `vercel.json`) and `public/alex.jpg` (hero + About). Testimonials live in `src/data/testimonials.ts`; the section hides while empty.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero + case study list. Hero CTA scrolls to `#work`. |
| `/about` | `src/pages/about.astro` | Story, linked quick facts, How I work, toolkit, campus roles. |
| `/contact` | `src/pages/contact.astro` | Real email/LinkedIn/GitHub wired up. Résumé link uses `public/Alex_Cruz-Valencia_Resume.pdf`. |
| `/case-studies/[slug]` | `src/pages/case-studies/[slug].astro` | Reads from content collection. Has reading progress bar + end-of-article nav. |
| `/404` | `src/pages/404.astro` | Custom branded 404. |

## Still Placeholder (needs Alex to fill in)

- `public/alex.jpg` (portrait)
- `public/logos/<slug>.svg|png` for the "Where I've built" strip (slugs in `src/data/orgs.ts`); text wordmarks show until added

## Accessibility & SEO

- Lighthouse scores: Accessibility 100, Best Practices 100, SEO 91
- All interactive elements have visible focus styles (`:focus-visible` with indigo outline)
- Skip-to-content link present
- `aria-current="page"` on active nav links
- Open Graph + canonical URL meta tags on every page
- Never add an `aria-label` that conflicts with visible text

## Git Conventions

- Commit directly to `main` for content updates and small fixes
- Use feature branches (`feat/`, `fix/`) for larger changes
- Always include a `Co-Authored-By:` Claude line in AI-assisted commits
- Push after every commit — Vercel deploys automatically
