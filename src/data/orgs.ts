import { existsSync } from 'node:fs';

// Places Alex has worked. Drop a logo at public/logos/<slug>.svg (or .png)
// and the strip uses it; until then it shows a text wordmark.
const raw = [
  { slug: 'evergreen', name: 'Evergreen', href: 'https://evergreen.dartmouth.edu/' },
  { slug: 'dali', name: 'DALI Lab', href: 'https://dali.dartmouth.edu/' },
  { slug: 'echostar', name: 'EchoStar', href: 'https://www.echostar.com/' },
  { slug: 'youphoria', name: 'Youphoria', href: 'https://youphoriaapp.com/' },
  { slug: 'design-corps', name: 'Design Corps', href: null },
  { slug: 'digital-nest', name: 'Digital NEST', href: 'https://digitalnest.org/' },
];

export const orgs = raw.map(o => {
  const file = ['svg', 'png', 'webp'].map(ext => `logos/${o.slug}.${ext}`).find(f => existsSync(`public/${f}`));
  return { ...o, logo: file ? `/${file}` : null };
});
