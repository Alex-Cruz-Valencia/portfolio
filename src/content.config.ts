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
    // Recruiter-skim summary block (see src/components/CaseSummary.astro)
    role: z.string().optional(),
    team: z.string().optional(),
    timeline: z.string().optional(),
    outcome: z.string().optional(),
    keyDecisions: z.array(z.string()).optional(),
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
  }),
});

const building = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/building' }),
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
    repo: z.string().optional(),
    stack: z.array(z.string()).optional(),
    // Path to a demo video (e.g. /demo/x.mp4). When set, the homepage
    // renders a muted/looping/controlled <video>; a same-basename .vtt
    // (captions) and .jpg (poster) alongside it are picked up by convention.
    demo: z.string().optional(),
  }),
});

export const collections = { caseStudies, projects, building };
