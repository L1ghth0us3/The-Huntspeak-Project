import path from 'node:path';
import { docsRoot } from './paths';

export type LearnPage = {
  slug: string;
  title: string;
  file: string;
  group: 'start' | 'grammar' | 'reference';
};

export const learnPages: LearnPage[] = [
  {
    slug: 'introduction',
    title: 'What Huntspeak is',
    file: path.join(docsRoot, 'introduction.md'),
    group: 'start',
  },
  {
    slug: 'pronunciation',
    title: 'Sounds and spelling',
    file: path.join(docsRoot, 'pronunciation.md'),
    group: 'start',
  },
  {
    slug: 'grammar/01-sentences',
    title: '1. Sentences',
    file: path.join(docsRoot, 'grammar/01-sentences.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/02-pronouns',
    title: '2. Pronouns',
    file: path.join(docsRoot, 'grammar/02-pronouns.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/03-verbs',
    title: '3. Verbs',
    file: path.join(docsRoot, 'grammar/03-verbs.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/04-prefix-verbs',
    title: '4. Prefix verbs',
    file: path.join(docsRoot, 'grammar/04-prefix-verbs.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/05-nouns',
    title: '5. Nouns',
    file: path.join(docsRoot, 'grammar/05-nouns.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/06-adjectives',
    title: '6. Adjectives',
    file: path.join(docsRoot, 'grammar/06-adjectives.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/07-questions',
    title: '7. Questions',
    file: path.join(docsRoot, 'grammar/07-questions.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/08-space-and-time',
    title: '8. Space and time',
    file: path.join(docsRoot, 'grammar/08-space-and-time.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/09-word-formation',
    title: '9. Word formation',
    file: path.join(docsRoot, 'grammar/09-word-formation.md'),
    group: 'grammar',
  },
  {
    slug: 'grammar/10-clause-linking',
    title: '10. Linking clauses',
    file: path.join(docsRoot, 'grammar/10-clause-linking.md'),
    group: 'grammar',
  },
  {
    slug: 'reference/tables',
    title: 'Quick tables',
    file: path.join(docsRoot, 'reference/tables.md'),
    group: 'reference',
  },
];

export function getLearnPage(slug: string): LearnPage | undefined {
  return learnPages.find((p) => p.slug === slug);
}
