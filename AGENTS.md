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

Editorial serif (Playfair Display) + Monday.com-inspired layout: white background, indigo accent (`#5b5bd6`), pill buttons, generous whitespace. Design tokens are CSS custom properties in `src/layouts/Layout.astro` (`<style is:global>`).

- Use `.eyebrow` for small uppercase labels above headings
- Use `.btn` / `.btn-outline` for calls to action (pill-shaped)
- Use `.tag` for topic tags (indigo pill on light indigo background)
- Use `.content-width` for reading-width containers (760px max)
- Use `.container` for full-width nav/footer containers (1100px max)

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `src/pages/index.astro` | Hero + case study list. Hero CTA scrolls to `#work`. |
| `/about` | `src/pages/about.astro` | Two-column: bio left, sidebar right. Still has placeholder copy. |
| `/contact` | `src/pages/contact.astro` | Real email/LinkedIn/GitHub wired up. Resume link needs `public/resume.pdf`. |
| `/case-studies/[slug]` | `src/pages/case-studies/[slug].astro` | Reads from content collection. Has reading progress bar + end-of-article nav. |
| `/404` | `src/pages/404.astro` | Custom branded 404. |

## Still Placeholder (needs Alex to fill in)

- About page bio copy (`src/pages/about.astro`) — university name, graduation year, personal details, "Interested in" domains
- `public/resume.pdf` — not yet uploaded; contact page Resume link 404s until added
- `astro.config.mjs` `site:` field — set to real Vercel URL once known
- Case study content — `redesigning-onboarding.md` is a placeholder; replace with real work

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
- Always include `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>` in AI-assisted commits
- Push after every commit — Vercel deploys automatically
