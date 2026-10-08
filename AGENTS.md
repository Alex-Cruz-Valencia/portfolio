# Portfolio Project Guide

## What This Is

Alex Cruz-Valencia's PM portfolio site. Astro 7, deployed on Vercel. Targets APM internship recruiters. See README.md for full project docs.

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

Editorial "field notes": warm paper background, ink text, one deep green accent (`#0f5c45`). Fraunces (serif) for headings and voice, Geist for body, Geist Mono for metadata labels. Tokens live in `src/layouts/Layout.astro` (`<style is:global>`), with a dark-mode set.

- `.eyebrow` / `.mono` for small mono labels
- `.btn` / `.btn-outline` for CTAs (pill-shaped)
- `.tag` for outlined mono chips; `.status-pill` for the green "open to" badge
- `.section-label` for section headings with a rule and a mono aside
- `.content-width` (720px) for reading, `.container` (1120px) for wide layouts

Case study frontmatter also supports `org`, `role`, `team`, `methods`, `outcome`, `tldr`, `featured` — these drive the home cards and the "At a glance" box.

Optional assets render only when present (see `src/lib/site.ts`): `public/resume.pdf` (nav, hero, footer, contact) and `public/alex.jpg` (hero + About). Testimonials live in `src/data/testimonials.ts`; the section hides while empty.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero + case study list. Hero CTA scrolls to `#work`. |
| `/about` | `src/pages/about.astro` | Story, quick facts, toolkit, campus roles. |
| `/contact` | `src/pages/contact.astro` | Real email/LinkedIn/GitHub wired up. Resume link needs `public/resume.pdf`. |
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
