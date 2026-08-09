# Lexicon Schema

The lexicon is the **authoritative vocabulary source** for Huntspeak. Documentation quotes it; it never quotes documentation. It is split into YAML files by broad category purely for human convenience, the entry format is identical everywhere:

| File | Contents |
| --- | --- |
| `core.yaml` | Pronouns, demonstratives, particles, conjunctions, interrogatives, numbers, affixes, prefix verbs |
| `nouns.yaml` | Nouns (simple stems) |
| `adjectives.yaml` | Adjectives and quantifiers |
| `verbs.yaml` | Verb roots |
| `space-time.yaml` | Positionals and temporals |
| `compounds.yaml` | Compound and derived words |
| `phrases.yaml` | Greetings, fixed phrases, interjections |
| `expansions-provisional.yaml` | The provisional roleplay expansion set (insults, swears, nicknames) |

## Entry format

```yaml
- lemma: qäin            # citation form, current canonical spelling
  ipa: kæin              # pronunciation (project transcription; see note below)
  pos: noun              # noun | verb-root | prefix-verb | adjective | adverb | pronoun |
                         #   particle | conjunction | preposition | interrogative |
                         #   numeral | affix | interjection | phrase
  gloss: mother          # short translation
  definition: ""         # fuller meaning/usage, when the sources give one
  root: v-d-b            # verb roots only
  parts: [shila, haqar]  # component morphemes, for compounds/derivations
  status: canon          # canon | provisional | proposal | deprecated
  variants: [käin]       # superseded/attested alternative spellings, never deleted
  source: [base-dict]    # where the word is attested (see keys below)
  notes: ""              # semantic scope, register, collisions, open questions
```

Only non-empty fields are written. `lemma`, `pos`, `gloss`, `status`, and `source` are always present.

## Source keys

`source` is **provenance metadata**: it records where an entry came from during the initial import. Most keys name private working documents that are **not published** with this repository. The lexicon entry itself is the public attestation.

| Key | Meaning | Where to look (public repo) |
| --- | --- | --- |
| `official-canon` | Official in-game material, highest authority | [`canon/Huntspeak-Official-Canon`](../canon/Huntspeak-Official-Canon) |
| `base-dict` | Dictionary tables from the private working notes | Lexicon entries tagged with this key |
| `base-grammar` | Grammar sections/examples from those notes | Docs under `docs/grammar/` + tagged lexicon/examples |
| `base-notes` | The "Just Notes" section of those notes | Tagged lexicon entries and examples |
| `legend` | *The Tale of Our Ancestors* | [`texts/tale-of-our-ancestors/`](../texts/tale-of-our-ancestors/) |
| `enhanced` | Material added in a later private enhanced draft | Tagged lexicon entries (esp. clause linking) |
| `cheatsheet` | Private RP cheatsheet / quick-reference draft | Phrasebook + `expansions-provisional.yaml` |
| `decision:Dn` | Project-lead decision n | [`development/decisions/`](../development/decisions/) |

Maintainers who hold the private working files keep them locally under `development/archive/` (gitignored). See [`development/archive/README.md`](../development/archive/README.md).

## Status policy for the initial import

- Official-canon material and the base dictionary/grammar: **canon**.
- "Just Notes" vocabulary that is *also attested* in the legend, in grammar examples, in official canon, or in the cheatsheet's canon table: **canon**.
- "Just Notes" vocabulary attested nowhere else: **provisional** (usable, awaiting confirmation, promote via `GOVERNANCE.md`).
- Cheatsheet expansion coinages: **provisional** per decision D6 (with `sha` and `khât` accepted).
- Superseded spellings/words (decisions D1–D10) are kept as `variants` or `status: deprecated` entries; they are never silently erased.

## Pronunciation transcriptions

Transcriptions follow the project's key (see `docs/pronunciation.md`), inherited from the official source, which uses ⟨ɪ⟩ for the *meat* vowel (written î) and ⟨i⟩ for the *pit* vowel (written i), the reverse of standard IPA usage. Legacy transcriptions have been normalized only at the letter level (⟨sh⟩→ʃ, ⟨q⟩→k inside transcriptions); vowel symbols are untouched.

## Editing rules

1. Changing a `lemma` spelling, `gloss`, or `definition` is a **linguistic change** - it needs a decision record or clear evidence, and the old form goes into `variants`.
2. New entries start as `status: proposal` (contributors) or `provisional` (project lead), with `parts`/etymology for anything derived.
3. One meaning, one entry: if a word gains a genuinely distinct second sense, document both senses in one entry (`definition`/`notes`) rather than duplicating the lemma.
4. Before adding a word, search all lexicon files **and** `variants` fields, including for near-homophones and collisions with grammatical morphemes (`nai-`, `sha-`, `am-`, `akh-`, `naaq-`).
