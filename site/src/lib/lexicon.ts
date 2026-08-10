import fs from 'node:fs';
import path from 'node:path';
import { load as loadYaml } from 'js-yaml';
import { lexiconRoot } from './paths';

export type LexiconEntry = {
  lemma: string;
  ipa?: string;
  pos: string;
  gloss: string;
  definition?: string;
  root?: string;
  parts?: string[];
  status: 'canon' | 'provisional' | 'proposal' | 'deprecated' | string;
  variants?: string[];
  source?: string[];
  notes?: string;
};

const LEXICON_FILES = [
  'core.yaml',
  'nouns.yaml',
  'adjectives.yaml',
  'verbs.yaml',
  'space-time.yaml',
  'compounds.yaml',
  'phrases.yaml',
  'expansions-provisional.yaml',
];

function normalizeEntries(data: unknown): LexiconEntry[] {
  if (!Array.isArray(data)) return [];
  return data.filter((row): row is LexiconEntry => {
    return (
      row !== null &&
      typeof row === 'object' &&
      typeof (row as LexiconEntry).lemma === 'string' &&
      typeof (row as LexiconEntry).gloss === 'string' &&
      typeof (row as LexiconEntry).status === 'string'
    );
  });
}

export function loadLexicon(): LexiconEntry[] {
  const entries: LexiconEntry[] = [];
  for (const file of LEXICON_FILES) {
    const full = path.join(lexiconRoot, file);
    if (!fs.existsSync(full)) continue;
    const raw = fs.readFileSync(full, 'utf8');
    const data = loadYaml(raw);
    entries.push(...normalizeEntries(data));
  }
  return entries;
}

/** Learner-facing dictionary: canon + provisional, no deprecated/proposal. */
export function loadDictionaryEntries(): LexiconEntry[] {
  return loadLexicon()
    .filter((e) => e.status === 'canon' || e.status === 'provisional')
    .sort((a, b) => a.lemma.localeCompare(b.lemma, 'en', { sensitivity: 'base' }));
}

export function initialLetter(lemma: string): string {
  const ch = lemma.replace(/^[^\p{L}]+/u, '').charAt(0);
  return (ch || '#').toLocaleUpperCase('en');
}
