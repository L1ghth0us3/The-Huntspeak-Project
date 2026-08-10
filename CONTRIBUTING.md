# Contributing to The Huntspeak Project

Glad you’re here. Vocabulary ideas, clearer examples, translations, bug reports — all welcome.

Proposing something and it becoming settled Huntspeak are **two different steps**. The project lead decides what becomes part of the language; details are in [GOVERNANCE.md](GOVERNANCE.md) if you need them.

## Ways to help

- Spot a contradiction, missing gloss, or broken example → open an issue (quote the forms and where they appear).
- Suggest a word or grammar tweak → pull request or note under `development/proposals/`.
- Translate more of a text → leave gaps marked rather than inventing silently.

Concrete reports beat vague ones: “`X` means A in the lexicon but B in the tale” is easy to act on.

## Suggesting a word

1. Search [`lexicon/`](lexicon/) (and `variants:`) so we don’t double-coin.
2. Prefer a **compound or extension** of something we already have (`shilaqar` = near + group) over a brand-new root.
3. Stay inside the sound system ([pronunciation](docs/pronunciation.md)): inventory sounds only, ⟨q⟩ for /k/, stress on the first syllable.
4. Avoid collisions with grammar bits (`nai-` questions, `sha-` “be”, `am-`/`akh-` possessives…).
5. Add a YAML entry with `status: proposal` (see [lexicon/SCHEMA.md](lexicon/SCHEMA.md)), a short derivation note, and one example sentence.

Two English glosses can share a Huntspeak word — or two Huntspeak words can share an English gloss — if you explain the real difference. Don’t invent a fake contrast just to keep a duplicate.

## Suggesting grammar

Show it working with a few glossed examples, and say how it plays with tense vowels, prefix verbs, and word order. Ground it in what we already have when you can.

## Editing examples and texts

- Don’t change `canon/Huntspeak-Official-Canon` or `texts/*/original.md`.
- If you correct a curated example, say which rule justifies it.
- Lexicon `source:` tags are internal provenance (often private notes). The public record is the lexicon entry itself.

## Writing style

Learner docs speak to **you** the reader — see [docs/VOICE.md](docs/VOICE.md). Keep each fact in one place and link to it instead of copying paradigms everywhere.

## Git

Small commits with clear intent help a lot:

```
lexicon: propose qänalu "wolf" with derivation notes
docs: clarify pause rule with another example
examples: flag sentence that breaks the prefix-verb rule
```

Don’t disguise a language judgment as a typo fix.
