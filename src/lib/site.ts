import { existsSync } from 'node:fs';

// Files Alex drops into /public. Anything that links to them only renders
// once the file exists, so the live site never ships a broken link.
export const resumeHref = existsSync('public/resume.pdf') ? '/resume.pdf' : null;
export const portraitSrc = existsSync('public/alex.jpg') ? '/alex.jpg' : null;

export const links = {
  email: 'alexcruzvn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alex-cruz-valencia',
  github: 'https://github.com/Alex-Cruz-Valencia',
};

// Typographic rule carried over from the previous design: hyphens on cards.
export const plain = (text: string) =>
  text.replaceAll(' — ', ' - ').replaceAll(' – ', ' - ').replaceAll('–', '-');
