// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Used for canonical + Open Graph URLs. Override with the SITE_URL env var
  // (e.g. once a custom domain is live) without touching this file.
  site: process.env.SITE_URL || 'https://alexcruz-valenciaportfolio.vercel.app',
  integrations: [
    mdx(),
    sitemap({
      // Keep the unlisted /building/personal-dashboard stub (draft: true,
      // see that page) out of the sitemap until Alex fills it in.
      filter: page => !page.includes('/building/personal-dashboard'),
    }),
  ],
});
