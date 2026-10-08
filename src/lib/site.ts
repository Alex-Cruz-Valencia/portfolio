import { existsSync } from 'node:fs';

// Files Alex drops into /public. Anything that links to them only renders
// once the file exists, so the live site never ships a broken link.
export const resumeHref = existsSync('public/Alex_Cruz-Valencia_Resume.pdf') ? '/Alex_Cruz-Valencia_Resume.pdf' : null;
export const portraitSrc = existsSync('public/alex.jpg') ? '/alex.jpg' : null;

export const links = {
  email: 'alexcruzvn@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alex-cruz-valencia',
  github: 'https://github.com/Alex-Cruz-Valencia',
};

// Kept as a hook for card text; dashes now match the case study pages.
export const plain = (text: string) => text;
