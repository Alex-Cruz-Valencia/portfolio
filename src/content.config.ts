import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).optional(),
    readTime: z.string().optional(),
    order: z.number().optional(),
    // "At a glance" box: what a recruiter skimming for 30 seconds needs.
    role: z.string().optional(),
    team: z.string().optional(),
    org: z.string().optional(),
    methods: z.array(z.string()).optional(),
    outcome: z.string().optional(),
    tldr: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    // Plain keyword line under the title, for skimmers.
    subtitle: z.string().optional(),
    // Optional visuals. Paths are under /public.
    // gallery: up to 3 phone screens shown above the "At a glance" box.
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
      kind: z.enum(['image', 'video']).default('image'),
      // 'framed' = the asset already includes a phone frame; 'screen' = bare screen, framed in CSS.
      frame: z.enum(['framed', 'screen']).default('framed'),
      poster: z.string().optional(),
    })).optional(),
    // Small animated mark next to the case study kicker.
    mascot: z.string().optional(),
    // Image used on the home page card.
    cardImage: z.string().optional(),
    cardImageAlt: z.string().optional(),
    // 'window' adds an app-window bar (dashboards, websites); 'plain' for documents.
    cardFrame: z.enum(['window', 'plain']).default('window'),
    // ── Scannable format (optional; when `story` is set the page uses it) ──
    // Problem → Decision → Result strip, one sentence each.
    story: z.object({
      problem: z.string(),
      decision: z.string(),
      result: z.string(),
    }).optional(),
    // Big-number row.
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    // Decision cards: the hard calls, three short lines each.
    decisions: z.array(z.object({
      title: z.string(),
      problem: z.string(),
      decision: z.string(),
      result: z.string(),
      lesson: z.string().optional(),
    })).optional(),
    // What's happening now (short list).
    now: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
    // One-line takeaway shown as a pull quote.
    lesson: z.string().optional(),
    // Label for the collapsed full story, e.g. "5 min".
    fullStoryTime: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    role: z.string(),
    org: z.string().optional(),
    timeframe: z.string(),
    blurb: z.string(),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
    status: z.string().optional(),
    order: z.number().optional(),
    // One or two lines shown on the home page; the full blurb sits behind "More".
    summary: z.string().optional(),
    // Smaller items go in the compact "Also" list.
    minor: z.boolean().optional(),
  }),
});

export const collections = { caseStudies, projects };
