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
  /** Rendered height in px, tuned so every logo's capitals match the text cap height (15px). */
  h?: number;
  /** Vertical nudge in px so the logo's capitals sit on the shared center line. */
  dy?: number;
}

const raw: Org[] = [
  { slug: 'evergreen', name: 'Evergreen', href: 'https://evergreen.dartmouth.edu/', ratio: 144 / 160, mark: true, h: 24, dy: 1.5 },
  { slug: 'foster-nation', name: 'Foster Nation', href: 'https://www.fosternation.org/', ratio: 400 / 377, mark: true, h: 24, dy: 1.75 },
  { slug: 'dali', name: 'DALI Lab', href: 'https://dali.dartmouth.edu/' },
  { slug: 'echostar', name: 'EchoStar', href: 'https://www.echostar.com/', ratio: 687 / 160, h: 18 },
  { slug: 'youphoria', name: 'Youphoria', href: 'https://youphoriaapp.com/' },
  { slug: 'design-corps', name: 'Design Corps', href: 'https://diad.notion.site/', ratio: 1, mark: true, h: 28, dy: 2.5 },
  { slug: 'digital-nest', name: 'Digital NEST', href: 'https://digitalnest.org/', ratio: 575 / 160, h: 36, dy: -2.2 },
];

export const orgs = raw.map(o => {
  const file = ['svg', 'png', 'webp']
    .map(ext => `logos/${o.slug}.${ext}`)
    .find(f => existsSync(`public/${f}`));
  return { ...o, logo: file ? `/${file}` : null };
});
