# Contributing to Huntspeak

Contributions are welcome — vocabulary, grammar observations, better examples, translations, corrections. Please read `GOVERNANCE.md` first: proposing something and it becoming part of the language are separate steps, and the project lead has the final word on canon.

## Reporting a problem

Found a contradiction, a word used but never defined, an example that breaks the documented grammar, or a duplicate? Open an issue containing:

- **What:** the exact forms/rules involved (quote them)
- **Where:** file and section for each occurrence
- **Why it looks wrong:** the rule or entry it conflicts with

Concrete beats vague: "`X` is glossed A in the lexicon but used as B in [text]" is actionable; "grammar needs cleanup" is not.

## Proposing vocabulary

1. Check the lexicon first — including `variants:` fields and `development/proposals/`. The gap may already be filled or under discussion.
2. Ask whether a new root is actually needed. Huntspeak prefers **derivation, compounding, and semantic extension** over one-to-one English coverage. A compound of existing morphemes (like `shilaqar` "tribe" = near + group) is much easier to accept than a brand-new root.
3. Make sure the word is **phonologically legal** (see `docs/pronunciation.md`): only inventory sounds, ⟨q⟩ for /k/, first-syllable stress.
4. Check for collisions: near-homophones, existing words with the same meaning, and clashes with grammatical morphemes (e.g. anything starting with `nai-` reads as an interrogative; `sha-` reads as the copula prefix).
5. Submit as a lexicon entry (format in `lexicon/SCHEMA.md`) with `status: proposal`, including etymology/derivation and at least one example sentence.

Two words sharing an English translation are not automatically redundant — but if you propose a near-synonym, document the actual distinction (scope, register, connotation, animacy…). Do not invent a distinction just to save a duplicate.

## Proposing grammar

- Ground it in existing material: attested examples, or natural extensions of documented rules.
- Show it works with several worked examples, including morpheme breakdowns.
- Note interactions with existing rules (tense vowels, subject harmony, prefix verbs, word order).

## Improving examples and translations

- Never alter `canon/Huntspeak-Official-Canon` or `texts/*/original.md`.
- Corrections to curated examples must cite the rule or decision that justifies them.
- New translations of longer texts are very welcome — put unresolved word gaps in the translation notes rather than coining silently.
- Lexicon `source:` tags such as `base-dict` or `cheatsheet` are provenance labels for private working notes that are not published in this repository. Treat the lexicon entry (and any linked decision) as the public record — see `lexicon/SCHEMA.md`.

## Style

- English is the documentation language, not the template: don't assume Huntspeak needs an English distinction (tense, pronoun, preposition) until the material shows it does.
- In docs, introduce a linguistic term before relying on it, and pair formal statements with plain-language explanations and examples.
- Keep each fact in one canonical place and link to it; don't duplicate paradigms across files.

## Git conventions

Small, single-purpose commits with intent-explaining messages, e.g.:

```
lexicon: propose qänalu "wolf" with derivation notes
docs: clarify pause rule with additional example
examples: flag sentence inconsistent with prefix-verb rule
```

Never present an unresolved linguistic judgment as a typo fix.
