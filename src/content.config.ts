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
    // "At a glance" box — what a recruiter skimming for 30 seconds needs.
    role: z.string().optional(),
    team: z.string().optional(),
    org: z.string().optional(),
    methods: z.array(z.string()).optional(),
    outcome: z.string().optional(),
    tldr: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
    // Plain keyword line under the title, for skimmers.
    subtitle: z.string().optional(),
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
