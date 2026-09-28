// Warns (doesn't fail the build) if public/resume.pdf is missing, so the
// /resume.pdf 404 never goes unnoticed again. See README "Still Open".
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.dirname(fileURLToPath(new URL('.', import.meta.url)));
const resumePath = path.join(root, 'public', 'resume.pdf');

if (!existsSync(resumePath)) {
  console.warn(
    '\n⚠️  public/resume.pdf is missing — the Resume link on /contact and in the nav will 404.\n' +
      '   Drop the current resume PDF at public/resume.pdf to fix this.\n'
  );
}
