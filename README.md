# Alex Cruz-Valencia — PM Portfolio

Personal product management portfolio site. Built with Astro 7, deployed on Vercel. Targets APM internship recruiters at large tech companies for Summer 2027.

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | [Astro 7](https://astro.build) | Static-first, zero JS by default, markdown content built-in |
| Hosting | [Vercel](https://vercel.com) | Auto-deploys on every push to `main` |
| Fonts | Playfair Display + Inter (Google Fonts) | Editorial serif headlines + clean sans body |
| Styling | Scoped Astro `<style>` + CSS custom properties | No framework dependency, easy to override |
| Content | Astro Content Collections (glob loader) | Add a `.md` file → page appears automatically |

## Project Structure

```
src/
  content.config.ts          # Content collection schema (case studies)
  content/
    case-studies/            # One .md file per case study
      redesigning-onboarding.md
  layouts/
    Layout.astro             # Base HTML: fonts, nav, footer, OG tags, transitions
  components/
    Nav.astro                # Sticky nav with active page indicator
    Footer.astro             # Simple footer with name + year
  pages/
    index.astro              # Home: hero + case study list
    about.astro              # About: bio + sidebar + CTAs
    contact.astro            # Contact: email, LinkedIn, GitHub, resume
    404.astro                # Custom 404 page
    case-studies/
      [slug].astro           # Dynamic case study page (reads from content/)
public/
  favicon.svg
  resume.pdf                 # Drop your resume here (linked from contact page)
```

## Commands

```bash
npm run dev        # Start dev server at http://localhost:4321
npm run build      # Build to ./dist/ (run before deploying manually)
npm run preview    # Preview the production build locally
```

## Adding a Case Study

1. Create a new file in `src/content/case-studies/your-slug.md`
2. Add the required frontmatter:

```markdown
---
title: "Your Case Study Title"
date: "Jan 2026"
excerpt: "One or two sentences that appear on the home page and in social previews."
tags: ["UX Research", "Prioritization"]   # optional
readTime: "5 min read"                    # optional
---

## It all started when...

Your narrative here. Follow the structure:
1. Hook — open with the moment the problem became visible
2. The Hypothesis — what you believed was actually wrong
3. The Prioritization Call — what you chose to do and what you didn't, and why
4. What Was Built — brief, specific
5. The Outcome — measured if possible, honest if not
6. What This Revealed — short reflection on your PM thinking
```

3. The home page and routing update automatically. No code changes needed.

## Updating Personal Info

All personal details are in a small number of files:

| What | File | Field |
|---|---|---|
| Name in nav/footer/title | `src/components/Nav.astro`, `src/components/Footer.astro`, `src/layouts/Layout.astro` | Literal text / `fullTitle` |
| Bio copy | `src/pages/about.astro` | `<p>` tags in `.bio` |
| Sidebar facts | `src/pages/about.astro` | `.aside-block` sections |
| Email | `src/pages/contact.astro` | `mailto:` href + display text |
| LinkedIn | `src/pages/contact.astro` + `src/pages/about.astro` | href + display text |
| GitHub | `src/pages/contact.astro` | href + display text |
| Resume | `public/resume.pdf` | Replace the file |
| Site URL (OG/canonical) | `astro.config.mjs` | `site:` field |

## Design System

CSS custom properties defined in `src/layouts/Layout.astro`:

```css
--color-bg: #ffffff
--color-text: #1c1c1c
--color-text-secondary: #6b7280
--color-accent: #5b5bd6        /* indigo — buttons, links, tags, progress bar */
--color-accent-hover: #4949b8
--color-accent-light: #eef0ff  /* tag backgrounds, blockquote backgrounds */
--color-border: #e5e7eb
--color-surface: #f9fafb       /* subtle backgrounds */

--font-display: 'Playfair Display', Georgia, serif   /* headlines */
--font-body: 'Inter', system-ui, sans-serif          /* everything else */

--max-content: 760px   /* reading width for body copy */
--max-wide: 1100px     /* nav and footer container */
--nav-height: 72px
```

## Deployment

The site auto-deploys to Vercel on every push to `main`. No manual steps needed.

Once you have a real deploy URL, update `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://your-real-url.vercel.app',
});
```

This enables correct canonical URLs and Open Graph links.

## What's Not Built Yet (intentional)

Per the original brief, these are deferred until there's content to support them:
- Blog
- Testimonials section
- Metrics dashboard
- Card grid of projects (add once there are 3+ case studies)
