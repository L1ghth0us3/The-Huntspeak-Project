# Decision Record — Initial Consolidation (2026-08-09)

Rulings by the project lead resolving the questions raised in the initial audit (`development/AUDIT.md`, §8 and Addendum A). Full evidence for each is in the audit.

**Standing ruling:** `Huntspeak-Official-Canon` (archived verbatim in `development/archive/`) always holds true; all other material is expansion of it.

| # | Question | Ruling | Applied where |
| --- | --- | --- | --- |
| D1 | rav'i: thirst or cold? | **Thirst.** The legend's three "cold" uses were errors. | lexicon `rav'i`, `sheq`; `texts/.../revised.md` |
| D2 | Food: evum or qäru? | **qäru** ("evum sounds too Latin"). | lexicon `qäru` (+ deprecated `evum`); examples |
| D3 | Spelling of /k/ | **⟨q⟩ everywhere**; bare ⟨k⟩ only in ⟨kh⟩. | qin, qik'et, iqe, q-d-s, qyul'sha, qit; stems qäsh/qar; pronunciation doc |
| D4 | nayal | **"which" only**; legend use as "tribe" was an error. | lexicon `nayal`; revised legend |
| D5 | Clause Linking chapter | **Canon**; iqe relabeled irrealis particle. | grammar ch. 10; lexicon naru/narudi/qesha/tarem/iqe |
| D6 | Cheatsheet expansions | **Provisional**, except `sha` "damn" and `khât` "shit/fuck" — accepted. | lexicon `expansions-provisional.yaml`, `phrases.yaml` |
| D7 | Strong: yir or tir? | **yir**; legend token corrected. | lexicon `yir`; revised legend |
| D8 | Causative vowel: da-/du- | **da-** — prefix verbs never carry subject vowels. | grammar ch. 4; examples |
| D9 | To feel: b-v-r or b-v-sh? | **b-v-r**; greeting is `Naish su buvar?`. | lexicon `b-v-r`; phrasebook |
| D10 | Presumed-typo list | **All confirmed as errors; fixed.** Tense text "Future→Past recent/long"; `Tu`→`î`; vîdab-passive pair marked erroneous; n-r-f→n-r-v; yething→yethin; singular tu/amtu→su/amsu. | grammar docs; lexicon; examples |

Additional fix under D10's authority: the question example `libe` ("Naina tu kharae libe?") carried the vowel of an î-subject with a 2nd-person subject; corrected to `lube` per the canonical subject-vowel rule (see `examples/examples.md`).

## Open questions

### D11. Plural present tense: -a- or -e-? *(open)*

Official canon's pronoun paradigm writes `Tɪ vɪdeb / Tu vudeb / Te vedeb`, glossed as present, for exactly the three plural pronouns — contradicting its own rule (a = present) and making "we write" identical to "I wrote". Since the canon file always holds true, this needs an explicit ruling: systematic typo (recommended — the repo currently follows a = present for all persons), or a real plural marker. Related: canon's fixed phrase `î veqash su` also carries e where a is expected.

### D12. Spelling of the strong curse: khât or khät? *(open, minor)*

The cheatsheet proposal spelled it `khät`; the D6 ruling wrote `khât` (twice), which was adopted. One-word confirmation requested; the lexicon entry carries the other form as a variant either way.

### Not yet ruled on (carried as provisional)

- ENH compounds `nilaqar`, `Khiädyasa`, `Shilyasa`.
- The legend's implicit grammar: article-like `kharau`, `shu-` progressive, `shu-ba-` construction, juxtaposed relative clauses, adverbial `-si`, `sevu'qe` "told", root-verb imperative formation, `tîkhur`'s subject vowel.
- The passive-voice mechanism implied by the notes (`tu vîsat î` "you are seen by me").
- Status of /o/ and of `y` as a vowel (`q'rysh`, `sylth`); the root `q-h-p` containing /p/.
