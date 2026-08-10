import fs from 'node:fs';
import { marked } from 'marked';

marked.setOptions({
  gfm: true,
  breaks: false,
});

/** Strip YAML-ish front matter if present; our docs usually have none. */
function stripFrontmatter(src: string): string {
  if (!src.startsWith('---\n')) return src;
  const end = src.indexOf('\n---\n', 4);
  if (end === -1) return src;
  return src.slice(end + 5);
}

/** Drop the first H1 so page layout can own the title. */
export function dropLeadingH1(src: string): { title: string | null; body: string } {
  const text = stripFrontmatter(src).replace(/^\uFEFF/, '');
  const match = text.match(/^#\s+(.+)\n+/);
  if (!match) return { title: null, body: text };
  return { title: match[1].trim(), body: text.slice(match[0].length) };
}

export function readMarkdownFile(filePath: string): { title: string | null; html: string; bodyMd: string } {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { title, body } = dropLeadingH1(raw);
  const html = marked.parse(body, { async: false }) as string;
  return { title, html, bodyMd: body };
}

export function renderMarkdown(md: string): string {
  return marked.parse(md, { async: false }) as string;
}
