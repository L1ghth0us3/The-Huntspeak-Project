import fs from 'node:fs';
import path from 'node:path';

/** Walk up from cwd until we find the repo (docs/ + lexicon/). */
function findRepoRoot(): string {
  let dir = process.cwd();
  for (let i = 0; i < 6; i++) {
    if (fs.existsSync(path.join(dir, 'lexicon')) && fs.existsSync(path.join(dir, 'docs'))) {
      return dir;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return path.resolve(process.cwd(), '..');
}

/** Repository root (parent of site/). */
export const repoRoot = findRepoRoot();

export const docsRoot = path.join(repoRoot, 'docs');
export const lexiconRoot = path.join(repoRoot, 'lexicon');
export const textsRoot = path.join(repoRoot, 'texts');

/** Prefix asset/page URLs for GitHub Pages project base. */
export function withBase(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (!pathname.startsWith('/')) return `${base}/${pathname}`;
  return `${base}${pathname}`;
}
