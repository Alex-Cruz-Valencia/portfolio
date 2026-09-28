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

Four collections, all defined in `src/content.config.ts`:

| Collection | Files | Used by |
|---|---|---|
| `caseStudies` | `src/content/case-studies/*.mdx` | `/case-studies/[slug]`, home page list |
| `projects` | `src/content/projects/*.md` | Home page "More Work" |
| `building` | `src/content/building/*.md` | Home page "Building" |
| `puenteLog` | `src/content/puente-log/*.md` | `/puente` |

Case studies are `.mdx` (not `.md`) so they can import components — `CaseSummary`, `Figure`, `VisualPlaceholder`, `EvergreenSurveyChart` — with an `import` line right after the frontmatter. MDX doesn't parse HTML comments; use `{/* TODO(Alex): ... */}` inside case study bodies, not `<!-- -->`.

`caseStudies` schema also carries an optional recruiter-skim block — `role`, `team`, `timeline`, `outcome`, `keyDecisions` — rendered by `CaseSummary.astro`. `building` extends the `projects` shape with optional `repo`, `stack: string[]`, `demo` (video path; captions/poster are picked up by filename convention, see `index.astro`).

Adding a file with valid frontmatter is all that's needed — routing and home page listings update automatically.

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
| `/` | `src/pages/index.astro` | Hero + Case Studies + Building + More Work (Projects). Hero CTA scrolls to `#work`. |
| `/about` | `src/pages/about.astro` | Two-column: bio left, sidebar right. Real bio copy. |
| `/contact` | `src/pages/contact.astro` | Contact cards + a "Passing this along?" referral box with a copy-to-clipboard button. |
| `/case-studies/[slug]` | `src/pages/case-studies/[slug].astro` | Reads from `caseStudies`. Header → `CaseSummary` → MDX body. Reading progress bar + end-of-article nav, ordered by the `order` field. |
| `/puente` | `src/pages/puente.astro` | The three load-bearing assumptions as status-pill cards, then the `puenteLog` entries newest-first. |
| `/building/personal-dashboard` | `src/pages/building/personal-dashboard.astro` | Unlisted stub (`export const draft = true`) — not linked from the homepage, excluded from the sitemap in `astro.config.mjs`. |
| `/404` | `src/pages/404.astro` | Custom branded 404. |

Nav (`src/components/Nav.astro`): Work / About / Contact / Resume (PDF) / LinkedIn, collapsing to a hamburger menu under 640px. Its toggle script guards against double-init — `astro:page-load` fires on the initial page load too, not just after view transitions, so init logic without that guard runs (and attaches listeners) twice.

## Still Placeholder (needs Alex to fill in)

- `public/resume.pdf` — not yet uploaded; Resume links 404 until added. `npm run build` prints a warning (via the `prebuild` script) when it's missing.
- `SITE_URL` env var — falls back to a placeholder Vercel domain in `astro.config.mjs`; set it once the real production/custom domain is confirmed (also update `public/robots.txt`'s `Sitemap:` line, which is static and can't read env vars).
- Vercel Web Analytics — the `<Analytics />` component is wired up, but tracking stays off until it's enabled once in the Vercel dashboard (project → Analytics tab).
- `src/content/building/personal-dashboard.md` — `demo` is unset; see the `# TODO(Alex)` comment in that file for the video path convention.
- `/building/personal-dashboard` — stub page, `export const draft = true`; fill in the three sections and flip it to link from the homepage when ready.
- About page "Interested in" line — draft domains in place, marked `TODO(Alex): confirm these domains`.
- Various other `TODO(Alex): ...` markers across case studies and the contact page — see the PR description for the full list with file/line references.

## Accessibility & SEO

- Lighthouse (production build, `astro preview`, mobile/throttled default): Performance 92, Accessibility 100, Best Practices 96, SEO 100. See the PR description for what's behind the two non-100 scores (neither is a real issue).
- All interactive elements have visible focus styles (`:focus-visible` with indigo outline)
- Skip-to-content link present
- `aria-current="page"` on active nav links
- Open Graph + canonical URL meta tags on every page, `og:image`/`twitter:image` via `public/og.png` (regenerate with `npm run generate:og`)
- `@astrojs/sitemap` generates `sitemap-index.xml`; `public/robots.txt` references it
- Never add an `aria-label` that conflicts with visible text
- Buttons and the nav hamburger are ≥44px tap targets; inline text links (case study tags, "Read more →" style links) are sized as text, consistent with the existing design system, not as square tap targets

## Git Conventions

- Commit directly to `main` for content updates and small fixes
- Use feature branches (`feat/`, `fix/`) for larger changes
- Always include `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>` in AI-assisted commits
- Push after every commit — Vercel deploys automatically
