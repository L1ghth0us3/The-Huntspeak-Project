# Lexicon Schema

This is how we store words so the site dictionary, the docs, and the repo stay in sync. You don’t need this file to *learn* Huntspeak — open the [phrasebook](../docs/usage/phrasebook.md) or the site dictionary for that. Come here when you’re adding or editing an entry.

The YAML files are the vocabulary source of truth. Docs quote them; they don’t invent competing glosses. Files are split by category for convenience; the entry shape is the same everywhere:

| File | Contents |
| --- | --- |
| `core.yaml` | Pronouns, demonstratives, particles, conjunctions, interrogatives, numbers, affixes, prefix verbs |
| `nouns.yaml` | Nouns (simple stems) |
| `adjectives.yaml` | Adjectives and quantifiers |
| `verbs.yaml` | Verb roots |
| `space-time.yaml` | Positionals and temporals |
| `compounds.yaml` | Compound and derived words |
| `phrases.yaml` | Greetings, fixed phrases, interjections |
| `expansions-provisional.yaml` | Still-settling RP expansions (insults, swears, nicknames) |

## Entry format

```yaml
- lemma: qäin            # citation form, current spelling
  ipa: kæin              # pronunciation (project key; see note below)
  pos: noun              # noun | verb-root | prefix-verb | adjective | adverb | pronoun |
                         #   particle | conjunction | preposition | interrogative |
                         #   numeral | affix | interjection | phrase
  gloss: mother          # short translation
  definition: ""         # fuller meaning when needed
  root: v-d-b            # verb roots only
  parts: [shila, haqar]  # pieces, for compounds
  status: canon          # canon | provisional | proposal | deprecated
  variants: [käin]       # older spellings — we keep them
  source: [base-dict]    # provenance (see keys below)
  notes: ""              # scope, register, collisions, open questions
```

Only non-empty fields are written. `lemma`, `pos`, `gloss`, `status`, and `source` are always present.

## Source keys

`source` records where an entry came from. Many keys name private working notes that are **not** in this repo. The lexicon entry itself is what the public sees.

| Key | Meaning | Where to look (public repo) |
| --- | --- | --- |
| `official-canon` | Official in-game material | [`canon/Huntspeak-Official-Canon`](../canon/Huntspeak-Official-Canon) |
| `base-dict` | Dictionary tables from private working notes | Tagged lexicon entries |
| `base-grammar` | Grammar sections from those notes | `docs/grammar/` + tagged entries |
| `base-notes` | “Just Notes” section of those notes | Tagged lexicon / examples |
| `legend` | *The Tale of Our Ancestors* | [`texts/tale-of-our-ancestors/`](../texts/tale-of-our-ancestors/) |
| `enhanced` | Later private enhanced draft | Tagged entries (esp. clause linking) |
| `cheatsheet` | Private RP cheatsheet draft | Phrasebook + `expansions-provisional.yaml` |
| `decision:Dn` | Project-lead decision n | [`development/decisions/`](../development/decisions/) |

Maintainers keep private working files locally under `development/archive/` (gitignored). See [`development/archive/README.md`](../development/archive/README.md).

## Status

- Official material and core dictionary/grammar: **canon**.
- Notes vocabulary also used in the tale, examples, or official phrases: **canon**.
- Notes vocabulary found nowhere else: **provisional** (usable; promote via governance).
- Cheatsheet expansions: **provisional** (with `sha` and `khât` accepted).
- Old spellings stay as `variants` or `deprecated` — never silent deletes.

## Pronunciation transcriptions

Transcriptions follow the project key in `docs/pronunciation.md` (official source uses ⟨ɪ⟩ for the *meat* vowel written î — opposite of standard IPA labels). Trust the English example words in the pronunciation doc.

## Editing rules

1. Changing a `lemma`, `gloss`, or `definition` is a language change — old form goes in `variants`.
2. New entries start as `status: proposal` (contributors) or `provisional` (project lead), with `parts` for anything derived.
3. One lemma, one entry: put distinct senses in `definition` / `notes`, don’t duplicate rows.
4. Before adding a word, search all lexicon files **and** `variants`, including near-homophones and grammar collisions (`nai-`, `sha-`, `am-`, `akh-`, `naaq-`).
