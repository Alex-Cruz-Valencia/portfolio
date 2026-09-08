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

export const collections = { caseStudies, projects };
