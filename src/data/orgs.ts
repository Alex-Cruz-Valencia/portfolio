import { existsSync } from 'node:fs';

// Places Alex has worked, shown in the "Where I've built" strip.
// Drop a logo at public/logos/<slug>.png (or .svg/.webp) and it's used
// automatically, rendered as a one-color silhouette so mismatched brand
// colors (white, green, black) read as one set. `ratio` is width / height.
// `mark: true` = an icon that needs the name beside it.
interface Org {
  slug: string;
  name: string;
  href: string | null;
  ratio?: number;
  mark?: boolean;
  /** Optical size tweak for logos with thin or small lettering. */
  scale?: number;
}

const raw: Org[] = [
  { slug: 'evergreen', name: 'Evergreen', href: 'https://evergreen.dartmouth.edu/', ratio: 144 / 160, mark: true },
  { slug: 'dali', name: 'DALI Lab', href: 'https://dali.dartmouth.edu/' },
  { slug: 'echostar', name: 'EchoStar', href: 'https://www.echostar.com/', ratio: 687 / 160 },
  { slug: 'youphoria', name: 'Youphoria', href: 'https://youphoriaapp.com/' },
  { slug: 'design-corps', name: 'Design Corps', href: 'https://diad.notion.site/', ratio: 1, mark: true, scale: 1.15 },
  { slug: 'digital-nest', name: 'Digital NEST', href: 'https://digitalnest.org/', ratio: 575 / 160, scale: 1.25 },
];

export const orgs = raw.map(o => {
  const file = ['svg', 'png', 'webp']
    .map(ext => `logos/${o.slug}.${ext}`)
    .find(f => existsSync(`public/${f}`));
  return { ...o, logo: file ? `/${file}` : null };
});
