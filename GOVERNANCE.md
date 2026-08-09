# Governance

## Authority

Huntspeak has a hierarchy of authority. When sources disagree, the higher level wins:

1. **Official game material** - the in-game/official description of Huntspeak (preserved verbatim as `canon/Huntspeak-Official-Canon`). This always holds true. Everything else in the project is an expansion of it.
2. **Project-lead rulings** - recorded in `development/decisions/`. The project lead is the final authority on everything the game does not settle.
3. **Canon repository material** - the documented language: `docs/`, `lexicon/` entries with `status: canon`, and canonical texts.
4. **Provisional material** - developed and usable, but subject to change.
5. **Proposals** - not part of the language.

A contribution is **never** canon merely because it has been committed, discussed, or used in roleplay.

## How something becomes canon

1. **Proposal.** Anyone may propose vocabulary, grammar, or corrections (see `CONTRIBUTING.md`). Proposals live in `development/proposals/` or in pull requests, with `status: proposal`.
2. **Provisional adoption.** The project lead may promote a proposal to `status: provisional`. Provisional material appears in learner docs only with a clear marker, and should be tested in actual use.
3. **Canonization.** The project lead promotes provisional material to `status: canon`. This is recorded in `CHANGELOG.md`, and in `development/decisions/` when it resolves a documented question.
4. **Deprecation.** Superseded forms are never silently deleted: they get `status: deprecated` (or a `variants:` record on the winning entry) so historical texts remain readable.

## Rules for changes to canon

- Established words and rules are not rewritten because an alternative would be "more elegant." Changes require evidence of a problem (contradiction, unlearnability, collision) and a project-lead decision.
- Conflicts between sources are documented first (in `development/`, following the format in the audit) and decided second.
- Anything that would alter spelling, pronunciation, meaning, morphology, or word boundaries is a **linguistic change**, not a formatting cleanup, and follows this process. Markdown formatting, typos in English prose, and file organization do not.

## Decision records

Each project-lead decision gets an entry under `development/decisions/`, recording the question, evidence, options, ruling, and affected material. Decision records are append-only history: a reversed decision gets a new record, not an edit.
