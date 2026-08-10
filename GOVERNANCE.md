# Governance

This file is for when people disagree about what “counts” as Huntspeak. Most contributors never need it day to day — start with [CONTRIBUTING.md](CONTRIBUTING.md).

We keep a clear pecking order so the language doesn’t fork into five incompatible versions overnight. The game’s scraps always win; community expansion fills the rest carefully.

## Authority

When sources disagree, the higher level wins:

1. **Official game material** — preserved verbatim in `canon/Huntspeak-Official-Canon`. Always holds.
2. **Project-lead rulings** — recorded in `development/decisions/`.
3. **Settled repo material** — `docs/`, lexicon entries with `status: canon`, and canonical texts.
4. **Provisional material** — usable, may still change.
5. **Proposals** — not part of the language yet.

A contribution is never “canon” just because it was committed, discussed, or used in roleplay.

## How something becomes settled

1. **Proposal** — anyone may suggest vocabulary, grammar, or corrections (`status: proposal`).
2. **Provisional** — project lead may promote it for real use and testing.
3. **Canon** — project lead settles it; noted in `CHANGELOG.md` (and a decision record when it answers a documented question).
4. **Deprecation** — old forms stay as `deprecated` or `variants` so history remains readable.

## Changing settled material

- Don’t rewrite a working word because another option feels prettier. Need a real problem (contradiction, unlearnability, collision) and a lead decision.
- Document conflicts in `development/` first; decide second.
- Spelling, pronunciation, meaning, morphology, and word boundaries are **language changes**. Markdown tidy-ups are not.

## Decision records

Each lead decision lives under `development/decisions/` (question, evidence, options, ruling, what it touched). History is append-only: reversing a ruling means a new record, not an edit.
