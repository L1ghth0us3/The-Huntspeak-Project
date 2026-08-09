# The Huntspeak Project

Huntspeak is a community-developed constructed language inspired by the Miqo'te of **Final Fantasy XIV**, in particular the tribes of the Moon. It builds on the small amount of official in-game material and expands it into a full, speakable language for roleplay and storytelling.

> **Disclaimer:** This is a fan project. Except where a source is explicitly marked as official game material (preserved verbatim under [`canon/`](canon/) and cited throughout the docs), nothing here is Square Enix canon. FINAL FANTASY XIV © SQUARE ENIX.

## Start here

If you want to **learn Huntspeak**, read the docs in order:

1. [What Huntspeak is](docs/introduction.md)
2. [Pronunciation and spelling](docs/pronunciation.md)
3. [Grammar](docs/grammar/) - numbered chapters, from basic sentences to clause linking
4. [Phrasebook](docs/usage/phrasebook.md) - greetings and ready-to-use RP phrases
5. [Reference tables](docs/reference/tables.md) - compact paradigms for quick lookup

If you want to **look up a word**, the authoritative vocabulary lives in [`lexicon/`](lexicon/) as structured YAML files (see [`lexicon/SCHEMA.md`](lexicon/SCHEMA.md)).

## Repository map

| Path | Contents |
| --- | --- |
| `canon/` | Official in-game Huntspeak material (highest authority, do not edit) |
| `docs/` | Learner documentation: introduction, pronunciation, grammar chapters, usage guides, reference tables |
| `lexicon/` | The authoritative vocabulary, as structured YAML with per-entry status and source tracking |
| `examples/` | Curated, glossed example sentences |
| `texts/` | Long-form Huntspeak texts (currently: *The Tale of Our Ancestors*) |
| `development/` | Work in progress: the audit, decision records, proposals, and known gaps |
| `CONTRIBUTING.md` | How to report problems and propose vocabulary or grammar |
| `GOVERNANCE.md` | How proposals become accepted Huntspeak |
| `CHANGELOG.md` | Meaningful changes to the language itself |

## Status levels

Every word and rule in this repository carries one of these statuses:

- **canon** - settled Huntspeak (official game material, or accepted by the project lead)
- **provisional** - usable, but not yet confirmed; may change
- **proposal** - suggested, not part of the language yet
- **deprecated** - superseded; kept for the historical record

Learner docs present canon and clearly-marked provisional material only. Everything experimental lives under `development/`.
