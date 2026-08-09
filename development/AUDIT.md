# Huntspeak Repository Audit — 2026-08-09

This is the initial repository-wide audit. **No language material has been changed.** All existing files are untouched. This document records what exists, how authoritative each piece appears to be, where sources conflict, what is missing, and how the repository could safely be restructured.

Status labels used throughout:

- **CANON** — settled Huntspeak as established by the source material
- **PROVISIONAL** — developed and usable, but not confirmed as canon
- **WORKING NOTES** — brainstorming, unfinished material, TODOs
- **CONFLICT** — incompatible claims with no clear winner
- **PROPOSAL** — a suggestion made by this audit, not canon

File abbreviations:

- **BASE** = `Huntspeak.md` (last modified 2025-06-26)
- **ENH** = `Huntspeak (LLM enhanced).md` (last modified 2026-08-09)
- **CHEAT** = `Huntspeak_CheatSheet.md`

---

## 1. Repository Inventory

| File | Contents | Assessment |
| --- | --- | --- |
| `README.md` | One-sentence project description. Correctly identifies Huntspeak as a fan-created language inspired by the Moon Miqo'te of FFXIV. | The only file committed to git. |
| `Huntspeak.md` (BASE) | The core language document: consonant/vowel inventory, full dictionary (~170 entries incl. compounds, affixes, verb roots), grammar (syntax, verb morphology, nouns, adjectives), a translated Miqo'te legend, and a "Just Notes" section (~70 additional words, interrogative examples, empty curse/counting lists). Appears exported from Google Docs (escaped hyphens, smart quotes, table artifacts). | **Primary canon source.** Untracked in git. |
| `Huntspeak (LLM enhanced).md` (ENH) | Identical to BASE except: (a) dictionary entry `evum` "food" replaced by `qäru`; (b) the auxiliary example changed accordingly; (c) three new compounds (`nilaqar`, `Khiädyasa`, `Shilyasa`); (d) an entirely new ~360-line **Clause Linking** chapter introducing `naru`, `narudi`, `qesha`, `tarem` and formalizing `wa/ara/ura/iqe/naaq-iqe/wey/eshu/avikh/udil`. | Canon core + **PROVISIONAL** additions. The filename itself signals the owner distinguishes it from the base. Untracked in git. |
| `Huntspeak_CheatSheet.md` (CHEAT) | RP-oriented quick reference. Its own first line states: "Canon items come from your current Huntspeak document; the rest are the proposed additions we just developed." First table = canon vocabulary. Insults, swears, several affection terms, and proverbs are **PROPOSAL** material containing ~15 roots that exist nowhere else. | Mixed CANON summary + PROPOSAL. Untracked in git. |

**Immediate preservation note:** the three Huntspeak documents are untracked. Nothing but the README is protected by version control. Committing them verbatim should be the very first migration step (see §7).

---

## 2. Language-System Summary

A reconstruction of Huntspeak as currently documented. Items marked *(implicit)* are used in the material but never stated as rules.

### Phonology

- **Consonants:** b, t, d, k; v, θ ⟨th⟩, s, ʃ ⟨sh⟩, χ ⟨kh⟩, h; r (trill); ʋ ⟨w⟩; m, n; l, j ⟨y⟩. No affricates. No /p, f, g, z/.
- **Vowels:** i, ɪ ⟨î⟩, e, o, u, ʌ ⟨â⟩, æ ⟨ä⟩, ɑ. Note: /o/ appears in the inventory but in almost no words (only `shiroth`, plus proposed `Doruqän`).
- **Stress:** always on the first syllable (stated once; interaction with prefixes undocumented).
- *(implicit)* Long vowels written by doubling: `naaq`, `nääq`, `qaal`, `eene`.
- *(implicit)* Apostrophe marks a phonological pause / syllable break: `i'saae` [i.saae], `-'qe` [.ke], `rav'i`, `kik'et`, `q'rysh`, `shrala'i`, `sevu'qe`.
- *(implicit)* Orthography: ⟨q⟩ = /k/ (e.g. `qar` /kɑr/); bare ⟨k⟩ appears only in ⟨kh⟩ /χ/ — **but see Conflict C2**; the legend and notes also use bare ⟨k⟩ (`kin`, `kik'et`, `ike`).
- Phonotactics are never described, though the material contains clusters (`shr-` in `shrala'i`, `Cy` in `qyâ/shyâ/dutya`) and many diphthongs (`ai, au, ei, ui, iä, âi, äi, ia, ua, iu, eu`).

### Morphology

- **Pronouns:** `î` (I), `su` (you sg.), `se` (he/she/it), `tî` (we), `tu` (you pl.), `te` (they). No gender distinction in `se`. *(Note: the working notes repeatedly use `tu` for singular "you" — see Conflict C11.)*
- **Possession:** prefixes `am-` (sg. possessor: `amî` my, `amse` her, `amsu` your) and `akh-` (pl. possessor: `akhtî` our).
- **Regular verbs:** bi- or triconsonantal roots (Semitic-style), conjugated as C₁V₁C₂V₂(C₃):
  - **V₁ copies the subject pronoun's vowel** (î → î, su/tu → u, se/te → e).
  - **V₂ marks tense/aspect:** present `-a-`, past recent `-e-`, past long `-u-`, future `-â-`; imperfective doubles the slot (`-aa-`, `-ea-`, `-ua-`, `-âa-`). Perfective = complete event; imperfective = ongoing over a timeframe.
  - Example: `v-d-b` "write" → `î vîdab` (I write), `î vîdeb` (I wrote), `î vîdʌb` (I will write); `r-s-sh` "fight" → `tî rîsuaʃ`-type forms for past-long imperfective (attested `sîluav`, `qîhuap` in the legend).
- **Irregular / prefix verbs:** `v-` have, `sh-` be, `kh-` hunt, `r-` do, `d-` cause, `s-` can, `sh-d-` become. These prefix directly to the object/complement, drop the subject vowel, and keep only the tense vowel: `Tî vajâl` "We have a meeting," `sha-shidyävu` "is a friend," `shu-q'rysh` "were frozen (past long)," `shudu-` "became (past long)."
- **Hypothetical/irrealis:** particle `iqe` (spelled `ike` in some examples) placed directly before the verb, combined with normal tense marking. ENH's Clause Linking chapter reanalyzes it as an irrealis particle rather than a fifth tense (terminology conflict, see C14).
- **Imperative:** suffix `-'qe` [.ke].
- **Auxiliary constructions:** the auxiliary verb takes `-ba`: `Î qîrad-ba lîba evum/qäru` "I want to eat food."
- **Multiple-verb clauses:** embedded causatives use the `d-` prefix on the subordinate verb (`î danenad tye` "I cause the animal to move"); with two objects the structure becomes S V O O V (`î mîvat tu tye danenad`). One token spells the causative `du-` — see C7.
- *(implicit)* **Passive:** in the working notes, swapping which participant's vowel fills V₁ appears to encode passive voice (`î vîsat tu` "I see you" vs. `tu vîsat î` "You are seen by me"). Never documented as a rule; one of the two note pairs uses the wrong root (see C8).
- **Nouns:** no plural form. Plurality via numerals or quantifiers (`däl` many, `qei` few, `yad` all); identical adjacent vowels are separated by a pause (`bi-idwa` [bi.idʋa]).
- **Adjectives:** precede the noun (per SVO note); comparative `-du`, superlative `-vu`, standard of comparison marked with `tiau` "than." Noun→adjective derivation with `-si` (`ikhel-si` "deadly"). The suffix/preposition `valir` "of / related to" also derives adjective-like compounds (`radyävuvalir` "childish") — overlap with `-si` undocumented.
- **Compounds:** modifier + head, often with contraction: `shilaqar` "tribe" (near+group), `shidyävu` "friend" (near+person), `layädi` "today" (on+day), `vayädi` "tomorrow", `heyädi` "yesterday", `kharashiä` "tonight", `yethieq` "clear skies" (nothing+sky). *(implicit)* `tyävu` "person" surfaces as `-dyävu` in compounds (`radyävu`, `shidyävu`).
- **Negation:** `naaq` "no / anti-particle," used privatively on nouns (`naaq-kin` "queen-less") and prefixed to `iqe` for "unless" (ENH). **No documented way to negate an ordinary verb** (see Gap G4).

### Syntax

- Basic order **SVO**; adverb after verb; adjective before object; adjective before the verb-object with irregular (prefix) verbs.
- Coordinators: `wa` and, `ara` but, `ura` or. ENH adds event chaining (juxtaposed predicates), subordinators `naru` because, `narudi` therefore, `qesha` although, `wey` so that, `eshu` while, `avikh` after, `tarem` before, `udil` then.
- **Interrogatives:** `Nai-` series (`Naiqa` what, `Naire` when, `Naido` where, `Naisa` who, `Naina` why, `Naish` how, `Naish däl` how many, `Nayal` which). Stated order "Interrogative, Object, Verb" — but every example actually shows Interrogative + Subject + (Object) + Verb (see C10). `Whom, whose, whether` are explicitly empty slots.
- Numbers: `u, bi, ta, qu, ha` (1–5 only). Ordinal-like `rab` first, `nääq` last. "Counting:" heading is empty.

### Texts

One long text: *The Tale of Our Ancestors* (legend of Zaiya and Menphina), English + Huntspeak side by side. The Huntspeak translation stops at "…inas amsu shilaqar" — the final two English sentences ("This journey would test their limits… Walking for days.") are untranslated. The legend is the richest evidence of real usage and also the source of several conflicts below.

---

## 3. Source / Authority Assessment

| Material | Classification | Rationale |
| --- | --- | --- |
| BASE phonology, dictionary, grammar sections | **CANON** | The founding document; everything else builds on it. |
| BASE "Translated Miqo'te Legend" | **CANON (text), PROVISIONAL (grammar it implies)** | The text itself is established, but it uses many constructions and forms never documented (progressive `shu-`, relative-clause juxtaposition, `-si` adverbs, `kharau` as "the"), plus several word-level conflicts. |
| BASE "Just Notes" (incl. "New words" list) | **WORKING NOTES** | Self-labelled. Vocabulary here is usable but unvetted; contains empty slots and at least two internal errors. |
| ENH Clause Linking chapter | **PROVISIONAL** | LLM-assisted, added later, internally consistent and morphologically well-formed, but introduces four new function words (`naru`, `narudi`, `qesha`, `tarem`) absent from every dictionary, and a nonstandard `š` spelling. Needs owner confirmation before becoming canon. |
| ENH `evum` → `qäru` swap | **CONFLICT** | A silent lexical replacement between versions with no recorded rationale. See C3. |
| ENH new compounds (`nilaqar`, `Khiädyasa`, `Shilyasa`) | **PROVISIONAL** | Compositionally sound, but new and unconfirmed. `Khiädyasa` vs `Shilyasa` implies a two-register naming of the language itself that is nowhere explained. |
| CHEAT first table ("canon items") | **CANON (derived)** | Accurately restates dictionary words; `Erlä` glossed "tracks" vs. dictionary "footprint" is a harmless usage gloss. |
| CHEAT insults, swears, `Shilaqäsh`, `Yirqän`, proverbs | **PROPOSAL** | Self-labelled as proposed. About 15 items rest on roots that exist nowhere else (`melä-`, `doru-`, `vesha`, `shäru`, `kharum`, `tesh`, `shäk`, `kit`, `khur`, `khät`, `naashil`). Proverbs exist only in English. |

---

## 4. Conflict Report

Each entry: evidence, interpretation, recommended action, confidence, and whether project-lead input is required. Ordered by priority.

### Critical

**C1. `rav'i` means "thirst" in the word list but "cold" throughout the legend.**
- Files: BASE/ENH (legend + "New words").
- Evidence: Word list: `Cold - sheq`, `Thirst - rav'i`. Legend sentence 2 matches this: `Te resush kharau sheq, rav'i wa kik'et` = "They fought the cold, thirst and hunger." But then the same text uses `rav'i` for "cold" three times: `shudu-rav'i` "became cold," `Rav'i-du wa rav'i-du` "colder and colder," `ikhel-si rav'i` "the deadly cold."
- Interpretations: (a) the legend translation drifted and should use `sheq`; (b) `rav'i` was later re-assigned to "cold" and the word list is stale; (c) both senses are intended (cold-as-deprivation?) — no evidence supports (c).
- Recommended action: **project-lead decision** (Decision D1). Do not touch the legend until resolved.
- Confidence that this is a genuine error somewhere: high.

**C2. The spelling of /k/ is inconsistent: ⟨q⟩ vs ⟨k⟩.**
- Files: all three.
- Evidence: The dictionary systematically writes /k/ as ⟨q⟩ (`qar`, `qäin`, `qin` "queen," `iqe`). But: the legend and compounds write `kin` (`naaq-kin`, `kinvalir` "royal"), `käinvalir`/`käinaqar` (vs. dictionary `qäin`), `kik'et`, `kyul'sha`; the tense table writes the hypothetical as both `Iqe, ike`; the verb list has `k-d-s` "to like" (every other /k/ root uses q: `q-r-d`, `q-h-p`, `q-m-d`…); CHEAT proposes `Kit!`.
- Interpretation: almost certainly free spelling variation, not a phonemic contrast — the inventory has only one /k/. But because ⟨q⟩/⟨k⟩ choices pervade the lexicon, normalizing is a language-wide orthography decision, not a formatting cleanup.
- Recommended action: **project-lead decision** (D3), then a single dedicated normalization commit with a variant record for every changed form.
- Confidence: high that variation is unintentional; the *direction* of normalization needs the owner.

**C3. "Food" is `evum` in BASE but `qäru` in ENH.**
- Files: BASE line 54/361 vs ENH line 54/364.
- Evidence: The diff shows a clean replacement, including in the auxiliary-verb example. No note explains it. ENH's clause-linking examples all use `qäru`. Possible motivation: `evum` sits close to `evi` "eye"; unknown.
- Recommended action: **project-lead decision** (D2). Options: keep one, or keep both with a semantic split — but only if the owner actually wants that distinction.
- Confidence that these currently conflict: certain.

**C4. `nayal` is glossed "which" in the interrogative list but used as "tribe/clan" in the legend.**
- Files: BASE/ENH (Just Notes interrogatives; legend).
- Evidence: Interrogatives: `Which - Nayal`. Legend: `Se dequb valir amse nayal` = "She feared for her tribe…" — where "tribe" elsewhere is `shilaqar` (used twice in the same text).
- Interpretations: (a) legend error for `shilaqar`; (b) `nayal` is a second word for a kin-group (clan vs. tribe?) and the interrogative gloss is the error; (c) homophony (unlikely to be intended — `Nai-` is clearly the interrogative formative, so a noun `nayal` would collide with it).
- Recommended action: **project-lead decision** (D4).
- Confidence that this is an error: high; which side is wrong: unknown.

### Significant

**C5. The tense description contradicts itself: "Past recent / Past long" vs "Future recent / Future long."**
- Files: BASE/ENH, Tenses section.
- Evidence: "There are 5 tenses… Present, Past recent, Past long, Future and Hypothetical. While Present and Past are self-explanatory, **Future recent** describes things not older than a week. **Future long** describes anything beyond that." The paradigm table has two pasts and one future, and "not older than" is inherently past-referring.
- Interpretation: near-certain typo; the sentence should describe **Past** recent/long.
- Recommended action: fix wording once the owner confirms (listed under "presumed typos," §8). Confidence: very high.

**C6. "Strong" is `yir` in the word list but `tir` in the legend.**
- Evidence: Word list: `Strong - yir` (CHEAT's proposed `Yirqän` "strong-fang" also builds on `yir`). Legend: `ara tî shua-tir shurin` = "but we were strong already."
- Interpretation: one of the two is a typo; `yir` has corroboration from CHEAT.
- Recommended action: project-lead confirmation (D7). Confidence: high that `yir` is intended.

**C7. Causative prefix vowel: `danenad` vs `dunenad`.**
- Evidence: Grammar section: `ɪ mɪvat tu tye danenad` "I trust you cause the animal to move." Just Notes, same sentence: `î mîvat tu tye dunenad`. The irregular-verb rule says prefix verbs drop the subject vowel and keep only the tense vowel — which predicts `da-` (present). `du-` looks like subject-vowel harmony with `tu`.
- Interpretation: either a typo, or an undecided rule about whether embedded prefix verbs harmonize with their own subject.
- Recommended action: **project-lead decision** (D8) — this determines a real piece of grammar. Confidence that they conflict: certain.

**C8. The passive-voice note pair uses the wrong verb root.**
- Evidence: Just Notes: `î vîdab tye` glossed "I see the animal" and `î vedab tye` "I am seen by the animal" — but `v-d-b` is "to write"; "to see" is `v-s-t`. The next pair (`î vîsat tu` / `tu vîsat î`) uses the correct root.
- Additionally, the passive mechanism these pairs imply (V₁ copies the *agent's* vowel, or argument order flips) is never documented anywhere.
- Recommended action: flag pair 1 as erroneous WORKING NOTES; document the passive as PROVISIONAL only after the owner confirms the intended mechanism (folded into D8's discussion of vowel harmony, or its own follow-up). Confidence that pair 1 is an error: very high.

**C9. "To feel" is root `b-v-r` in the dictionary, but the example uses `buvash` (implying `b-v-sh`).**
- Evidence: Dictionary: `b-v-r | To feel`. Just Notes: `Naish tu buvash?` "How are you doing? (How you feel?)". `buvash` conjugates b-v-**sh**, not b-v-**r**.
- Interpretation: root typo in one of the two places; no third attestation.
- Recommended action: project-lead confirmation (D9). Confidence that they conflict: certain.

**C10. The stated interrogative word order does not match any interrogative example.**
- Evidence: Rule: "Sentence structure: Interrogative, Object, Verb." Examples: `Naish tu buvash?` (Int-Subj-V), `Naire tu luba?` (Int-Subj-V), `Naina tu kharae libe?` (Int-Subj-Obj-V). The examples are consistent *with each other* (verb-final, subject after the interrogative) but not with the rule as written.
- Interpretation: the rule text likely means "Interrogative first, verb last" and omits the subject; the examples are the better evidence.
- Recommended action: document the order attested in examples, flag the rule sentence as superseded-by-evidence, owner confirms. Confidence: high.

**C11. Second-person usage is inconsistent: `tu` (plural) used for singular "you," and `amtu` vs `amsu`.**
- Evidence: Dictionary: `su` = you sg., `tu` = you pl. But every question in Just Notes addresses one person with `tu` (`Naish tu buvash?` etc.), except `Naiqa sha-ra-su?` which uses `su`. The legend correctly uses `amsu` "your (sg.)" addressing Zaiya, but Just Notes has `Naish amtu she-mâish?` "How was your sleep?" with `amtu`.
- Interpretations: (a) sloppy notes; (b) an undocumented T-V-style or informal use of `tu` for singular.
- Recommended action: project-lead decision only if (b) is intended; otherwise fold into notes-cleanup (D10 as a confirmation item). Confidence that something is inconsistent: certain.

**C12. One example glosses `Tu` as "I": `Tu dæl ike rɪsʌʃ - If I will fight a lot`.**
- Evidence: Tenses section (both BASE and ENH), two bullet lines. The verb `rɪsʌʃ` carries subject vowel ɪ (= î "I"), so the pronoun `Tu` is almost certainly a typo for `ɪ`.
- Recommended action: presumed typo (§8). Confidence: very high.

**C13. About 15 CHEAT items rest on roots that exist nowhere in the lexicon.**
- Evidence: `Meläyi` (soft-claw — no word "soft"; `m-l-` is "to hide"), `Doruqän` (no `doru` "dull"; also uses the near-unused vowel /o/), `Vesha`, `Shäru`, `Kharum`, `Naashil`, `Tusaya`, `Suläqar` (formation from `sula`+`haqar` unexplained), and the swears `Tesh`, `Shäk`, `Kit!`, `Khur`, `Khät!`, `Shakhat`. Also `Sha…` as a mild curse is homophonous with the `sh-` copula prefix in present tense, and `Davi` "idiot" is one vowel from `dav` "chest."
- Interpretation: these are explicitly proposals per the file's own header; the issue is only that they must not leak into the lexicon as canon.
- Recommended action: move to a proposals area during migration; owner accepts/rejects at leisure (D6). Confidence: high.

**C14. `iqe` is described as a fifth "tense" (BASE) and as "not a tense" but an irrealis particle (ENH clause-linking).**
- Evidence: BASE tense table row "Hypothetical: Iqe, ike (auxiliary)"; ENH: "**Iqe** is an irrealis particle. It is not a tense."
- Interpretation: the ENH analysis is linguistically cleaner and compatible with all examples (`iqe` always co-occurs with normal tense marking), but it is the later, LLM-assisted layer.
- Recommended action: adopt ENH's analysis *as terminology* if the owner confirms the clause-linking chapter (D5); the actual usage does not change either way. Confidence: high that both describe the same behavior.

**C15. The root `n-r-f` "to starve" contains /f/, which is not in the phoneme inventory; the legend conjugates it with /v/ (`neruv`).**
- Evidence: Word list: `To starve - n-r-f`. Legend: `shu-budai-si neruv` "was slowly starving." No /f/ anywhere in the consonant table.
- Interpretation: the root should probably be `n-r-v`, matching the attested form.
- Recommended action: presumed typo, owner confirms (§8). Confidence: high.

**C16. "Nothing" is `yethin` in the word list but `yething` in the legend.**
- Evidence: `Nothing - yethin`; legend: `vu-yething`, `vu-khu-yething`. Note `yethieq` "clear skies" (nothing+sky) supports a stem `yethi-` and decides nothing.
- Also: /g/ (as in `yething`) is **not in the consonant inventory** — which argues for `yethin`, unless ⟨ng⟩ is meant as /n/ or an undocumented ŋ.
- Recommended action: owner confirms (§8); `yethin` is the phonologically legal candidate. Confidence: medium-high.

**C17. Legend verb `tîkhur` "(our ancestors) lived" violates the subject-vowel rule.**
- Evidence: subject is `khash` "ancestors" (3rd person → V₁ = e, cf. `resush` "they fought," which is correct in the very next sentence). `tîkhur` carries î, apparently copied from `akhtî` "our."
- Interpretations: (a) error; (b) an undocumented rule that possessed subjects harmonize with the possessor (no second attestation).
- Recommended action: flag; do not rewrite the legend; ask owner during legend annotation. Confidence that it deviates: high.

### Minor

- **M1.** `veqaash` (in the `v-` dictionary entry) vs `vaqash` (Just Notes) vs `qäsh` (lemma) vs `qaar-vu` (comparative example) vs `qar` (lemma): the stems of "love/heart" and "good" each appear with inconsistent vowel spelling (`qäsh/qash/qaash`, `qar/qaar`). Also `veqaash` carries `e` (past) where "to have love" as a citation form would predict `a`. Needs one spelling per lemma; ties into D3.
- **M2.** `v-q-sh` "to have love" is listed as an independent triconsonantal root, but it is transparently `v-` (have) + `qäsh` (love) — the same derivation the `v-` entry itself illustrates. Redundant entry; recommend recording it as derived, not as a root.
- **M3.** The legend uses `kharau` "this" as a definite article ("`kharau sheq`" = "*the* cold") — undocumented function.
- **M4.** The legend uses `shu-` (be + past-long) plus bare or `-ba`-marked verbs as a progressive construction (`shu-q'rysh` "were frozen," `tye shu-ba-melu` "the animals were hiding," `shu-budai-si neruv` "was slowly starving") — this overlaps with the documented imperfective `-ua-` infix, and `shu-ba-melu` uses `-ba` in a way the auxiliary rule does not describe. Competing mechanisms; needs documentation as PROVISIONAL and eventually a ruling.
- **M5.** `-si` (noun→adjective) is used on an adjective in the legend (`budai-si` "slowly") — i.e. as an adverbializer. Undocumented extension; plausible; document as implicit.
- **M6.** `-si` vs `-valir` both derive adjective-like meanings (`ikhel-si` "deadly" vs `tyevalir` "animalistic"); the division of labor is undocumented.
- **M7.** `sevu'qe` in the legend appears to be imperative `-'qe` on a past-tense verb meaning "told/commanded" — undocumented usage.
- **M8.** `Naire tu lubâe?` "When will you be eating?" — `lubâe` matches neither future perfective (`lubâ`) nor future imperfective (`lubâa`). Undocumented or erroneous form.
- **M9.** `Naiqa sha-ra-su?` "What are you doing?" — the stacking `sha-ra-` (be+do) with a postposed subject is unexplained by any documented rule.
- **M10.** Temporal overlap: `eshu` "while," `ashad` "during," `nanaqa` "at the same time" — three near-synonyms with no documented division of labor. Do not merge; flag for eventual definition.
- **M11.** `qäsh` is defined as both noun "heart/love" and "Adjective, good or morally correct," overlapping adjective `qar` "good." A moral-vs-quality split is *implied* by the definitions; worth making explicit rather than treating as duplication.
- **M12.** POS mislabels in the dictionary: `khâqa` "heat" tagged Adjective; demonstratives (`kharau/kharae`), conjunctions (`wa/ara/ura`), prepositions (`wey/valir`), and adjectives (`wemä`, `yes`) all filed under "Nouns."
- **M13.** IPA irregularities: `Naire` transcribed `naira`; `shiqâ` → "shikʌ" and `shila` → "shila" (orthographic ⟨sh⟩ inside IPA); `qäru` → "qæru" (⟨q⟩ is not an IPA value here); `naaq` → "nɑ:q" (no /q/ in the inventory); `îtâsh` → "îtʌʃ" (⟨î⟩ inside IPA).
- **M14.** `heyädi` "yesterday" implies contraction of `heidu` + `ädi`; `kharashiä` of `kharau` + `shiä`; `shidyävu`/`radyävu` show `tyävu` → `-dyävu`. Compound contraction rules exist only implicitly.
- **M15.** `shiqar` "new" vs `shiqâ` "wind" vs `shilaqar` "tribe" are phonologically crowded; no action needed, but learners will confuse them — worth a usage note.
- **M16.** ENH clause-linking spells "fight" as `rîsaš` (haček š) — a transliteration artifact; every other file uses ⟨sh⟩.
- **M17.** `iwatye` "work (n.)" vs `w-t-` "to work": the derivation (i-…-ye?) is opaque and undocumented.
- **M18.** The vowel table lists "I, ɪ(î)" ambiguously; the dictionary IPA confirms ⟨i⟩ = /i/ and ⟨î⟩ = /ɪ/, but the table should say so explicitly.
- **M19.** Two names for the language itself appear only in ENH: `Khiädyasa` "Huntspeak (hunting)" vs `Shilyasa` "Huntspeak (spoken)" — the intended distinction (a hunting register vs. everyday speech?) is nowhere explained.

### Cosmetic

- Google-Docs export artifacts: escaped `\-`, smart quotes, stray "but" in the `am-` definition, run-together definition text (`decisionAdverb`, `organAdjective`), "Mover over" typo, empty affricate/retroflex columns in the consonant table.
- Dictionary section headers ("Nouns," "Adjectives," …) embedded as fake table rows.
- Inconsistent capitalization of lemmas (interrogatives and some compounds capitalized, everything else lowercase).
- The empty "To lose (a fight)" dictionary row (placeholder — preserve as a gap, not delete).

---

## 5. Gap Report

Gaps are recorded, **not filled**. Several may not need lexical solutions at all (per the no-Anglicization principle) — noted where relevant.

- **G1. Orthography specification.** The letter↔sound mapping (q, kh, sh, th, y, w, î, ä, â, doubled vowels, apostrophe) exists only implicitly. This is the single highest-value document to write, and it can be written almost entirely from existing evidence — but it is blocked on D3 (q/k).
- **G2. Phonotactics.** Syllable structure, permitted clusters (`shr-`, `Cy-`), diphthong inventory, and whether doubled vowels are length or two syllables (this interacts with the imperfective `-aa-` infix, which is currently ambiguous with orthographic length).
- **G3. Numbers above five.** Also zero, ordinals beyond `rab`/`nääq`, and the empty "Counting:" section. Note: the base-5 set may be deliberate (a five-fingered counting culture could compound upward) — a design question, not necessarily 6+ new roots.
- **G4. Verbal negation.** There is no documented way to say "I do not eat." `naaq` covers "no," privatives, and (ENH) "unless," but plain clause negation is absent. This is the most serious grammatical gap.
- **G5. Yes/no questions.** No documented mechanism (intonation? particle? `qî`-tag?).
- **G6. Relative clauses.** The legend does it by juxtaposition (`amse nayal shu-budai-si neruv…` "her tribe that was slowly starving") — implicit only.
- **G7. Imperative examples.** `-'qe` has one indirect attestation (`sevu'qe`, itself irregular — M7). No plain imperative example exists.
- **G8. Empty lexical slots the source itself flags:** whom, whose, whether; to smell, to taste, to hear; to lose (a fight); several curse slots left blank (CHEAT's swear proposals partially address curses but are unaccepted — C13/D6). Some slots may be better served by derivation (e.g. "to hear" from `idwa` "ear" + a verb strategy) than by new roots — flag for design discussion, do not coin.
- **G9. Adverbs.** No documented adverb class; `-si` on adjectives (M5) and post-verbal `däl` are the only evidence.
- **G10. Register and politeness.** Nothing documented (interacts with C11's `tu`-as-singular question and M19's two language names).
- **G11. Stress details.** First-syllable stress vs. prefixed verbs (`danenad`), compounds, and the possessive prefixes.
- **G12. Proverbs exist only in English** (CHEAT). They need Huntspeak renderings *eventually*, by the owner or through the proposal process — not by this audit.
- **G13. The legend's final two English sentences are untranslated.** Preserve as unfinished.
- **G14. Naming conventions** (personal names like Zaiya; deity names like Menphina are FFXIV canon and presumably stay untranslated) — undocumented.

---

## 6. Proposed Repository Architecture

Design goals: one canonical home per fact; learner path separated from development material; lexicon as structured data that can later power a website, search, and bots; everything plain-text and human-maintainable.

```
README.md                  — project intro, fan-project disclaimer, map of the repo
CONTRIBUTING.md            — how to report issues, propose words/grammar
GOVERNANCE.md              — how proposals become canon (owner = final authority)
CHANGELOG.md               — meaningful changes to the language itself

docs/
  introduction.md          — what Huntspeak is, cultural framing, the two names issue
  pronunciation.md         — phoneme inventory, orthography, stress, phonotactics
  grammar/
    01-sentences.md        — SVO, adjective/adverb placement
    02-pronouns.md         — pronouns, possessive prefixes
    03-verbs.md            — roots, subject-vowel harmony, tense/aspect table
    04-prefix-verbs.md     — irregular verbs, copula, causatives, auxiliaries, iqe
    05-nouns.md            — plurality, quantifiers, pause rule
    06-adjectives.md       — comparison, -si, -valir
    07-questions.md        — Nai- series, question word order
    08-space-and-time.md   — positionals, temporals, calendar compounds
    09-word-formation.md   — compounds, contractions, naaq- privatives
    10-clause-linking.md   — coordination/subordination (status banner per D5)
  usage/
    phrasebook.md          — curated RP phrases (canon portion of the cheatsheet)
    culture.md             — proverbs, curses, naming (once accepted)
  reference/
    tables.md              — compact paradigms and the connective summary table

lexicon/
  SCHEMA.md                — field definitions and status values
  lexicon.yaml             — one entry per lemma (see schema sketch below)

examples/
  examples.md              — curated, glossed sentences, each with status + source

texts/
  tale-of-our-ancestors/
    source.md              — verbatim English + Huntspeak, untouched
    interlinear.md         — line-by-line analysis with flags (C1, C4, C17, M3–M7…)

development/
  AUDIT.md                 — this document (moves here)
  decisions/               — one file per Decision Required + its resolution
  proposals/
    cheatsheet-expansions.md — CHEAT insults/swears/affection terms
    clause-linking.md        — if D5 demotes the ENH chapter
  gaps.md                  — living version of §5
  archive/                 — verbatim originals of the three source files
```

**Lexicon schema sketch (PROPOSAL — not yet applied):**

```yaml
- lemma: qäin
  ipa: kæin
  pos: noun
  gloss: mother
  definition: ""
  root: null            # for verbs: e.g. "v-d-b"
  morphology: []        # component morphemes for compounds
  status: canon         # canon | provisional | proposal | deprecated
  variants: [käin]      # attested spelling variants, never silently erased
  source: ["Huntspeak.md#dictionary"]
  related: [käinaqar, käinvalir]
  notes: ""
  examples: []
```

YAML keeps it hand-editable; documentation, indexes, and dictionary tooling can be generated from it later. Conversion happens **after** the D-decisions, so variant resolution is recorded rather than lost.

---

## 7. Migration Plan

Ordered so that no step can lose information, and canon-affecting steps wait for owner decisions.

1. **Preserve sources (commit the three untracked files verbatim).** Nothing else is safe until the originals are in git history. One commit, no edits.
2. **Commit this audit.**
3. **Owner resolves the Decisions Required (§8)** — or explicitly defers them; deferred items stay flagged, and migration routes around them.
4. **Create the directory skeleton + governance docs** (README expansion, CONTRIBUTING, GOVERNANCE, CHANGELOG). No language content moves yet.
5. **Write `docs/pronunciation.md`** from the existing inventory plus the implicit orthography rules (blocked on D3 only for the q/k paragraph; everything else can note the open question).
6. **Extract the lexicon to `lexicon/lexicon.yaml`.** Every entry carries `status` and `source`; conflicting forms are recorded as variants pointing at their decision file, never merged silently. Cross-check: every word used in any example or the legend must either exist in the lexicon or be flagged (this check catches C4/C6-type problems mechanically and should eventually be a small script).
7. **Split the grammar** into `docs/grammar/`, preserving wording where it is sound, flagging (not fixing) C5/C10-type rule-vs-example mismatches until confirmed. Clause linking gets the status banner from D5.
8. **Migrate examples** to `examples/examples.md` with glosses, status, and source; erroneous note-pairs (C8) are kept but marked.
9. **Build the legend interlinear** in `texts/`, annotating every flagged form in place. The verbatim source text is never edited.
10. **Split the cheatsheet:** canon rows → `docs/usage/phrasebook.md`; proposals → `development/proposals/`.
11. **Verification pass:** confirm every lemma, rule, and example from the three originals is findable in the new structure (a checklist diff against the archive copies).
12. **Only then** move the originals to `development/archive/` and remove them from the root. Each step above is its own commit (or small commit group) with intent-explaining messages.

Per repository policy, no commits will be made until the owner asks for them; step 1 is strongly recommended as the immediate next action.

---

## 8. Decisions Required

Only questions that materially change Huntspeak. Formatting, organization, and the cosmetic items in §4 will be handled without escalation.

### D1. What does `rav'i` mean — and what is "cold"?

**Issue:** `rav'i` = "thirst" in the word list but "cold" three times in the legend; `sheq` = "cold" in both the word list and the legend's second sentence. (C1)
**Current evidence:** Internally contradictory within the legend itself.
**Option A:** `rav'i` = thirst (word list stands); the legend's three `rav'i`-as-cold tokens are corrected to `sheq` (with the change logged).
**Option B:** `rav'i` = cold (legend majority usage stands); word list updated; a new word for "thirst" is needed (gap).
**Recommendation:** A — the word list and the legend's own first usage agree, and Option B creates a lexical gap.
**Affected material:** legend text, word list, `rav'i-du` comparative example.

### D2. "Food": `evum` or `qäru`?

**Issue:** ENH silently replaced `evum` with `qäru`. (C3)
**Current evidence:** BASE uses `evum`; ENH and its clause-linking examples use `qäru`. No rationale recorded.
**Option A:** Keep `qäru` (latest version wins; avoids `evum`/`evi` proximity); `evum` recorded as deprecated variant.
**Option B:** Keep `evum` (original canon); ENH examples corrected.
**Option C:** Keep both with a real semantic split (e.g. foodstuff vs. prepared meal) — only if you actually want that distinction.
**Recommendation:** A, if the replacement was your deliberate choice during the LLM session; otherwise B. Only you know the intent.
**Affected material:** lexicon entry, auxiliary-verb example, four clause-linking examples.

### D3. Orthography of /k/: standardize on ⟨q⟩ or allow ⟨k⟩?

**Issue:** `qin`/`kin`, `qäin`/`käin-`, `iqe`/`ike`, `kik'et`, `k-d-s`, `kyul'sha` — one phoneme, two letters. (C2, M1)
**Current evidence:** The dictionary is consistently ⟨q⟩; legend, compounds, and notes drift to ⟨k⟩.
**Option A:** ⟨q⟩ everywhere (matches the dictionary; makes ⟨k⟩ appear only inside ⟨kh⟩). Words changed: `kin`→`qin` in compounds, `kik'et`→`qiq'et` or `qik'et`, `ike`→`iqe`, `k-d-s`→`q-d-s`, `kyul'sha`→`qyul'sha`, CHEAT `Kit`→`Qit`.
**Option B:** Define a positional rule (e.g. ⟨k⟩ in clusters/finals, ⟨q⟩ elsewhere) — only worth it if you like the aesthetic of both letters.
**Recommendation:** A — simpler to teach, and the dictionary already follows it. Also decide the related stem spellings `qäsh/qash/qaash` and `qar/qaar` (I recommend `qäsh` and `qar` per the lemma forms, treating `qaar-vu` as a typo).
**Affected material:** ~10 words across legend, compounds, notes, cheatsheet; the orthography doc.

### D4. `nayal`: "which" or "tribe/clan"?

**Issue:** Double assignment. (C4)
**Current evidence:** Interrogative list says "which"; the legend uses it for Zaiya's tribe where `shilaqar` exists and is used twice elsewhere in the same text.
**Option A:** `nayal` = "which" only; legend corrected to `shilaqar` (or to a new kin-word if you want a clan/tribe distinction — that would be a separate proposal).
**Option B:** `nayal` = a kin-group noun; a new "which" interrogative is needed (and should probably be `Nai-` + something, matching the series).
**Recommendation:** A — `Nai-` is transparently the interrogative formative, so a noun `nayal` collides with the system.
**Affected material:** interrogative list, one legend clause.

### D5. Status of the ENH Clause Linking chapter.

**Issue:** ~360 lines of LLM-assisted grammar introducing `naru`, `narudi`, `qesha`, `tarem` and reanalyzing `iqe` as an irrealis particle. (C14)
**Current evidence:** Internally consistent, follows your verb morphology correctly, but exists only in ENH and its four new function words are in no dictionary.
**Option A:** Accept as canon → the four words enter the lexicon, the chapter becomes `docs/grammar/10-clause-linking.md`, and `iqe` is re-labelled "irrealis" in the tense documentation.
**Option B:** Keep as PROVISIONAL → published in docs with a clear "provisional" banner, words enter the lexicon with `status: provisional`.
**Option C:** Demote to proposal → moves to `development/proposals/`.
**Recommendation:** B — it's good, usable work, but you should live with it in RP before locking it in.
**Affected material:** grammar docs, four lexicon entries, connective summary table.

### D6. Status of the cheatsheet insults, swears, and affection terms.

**Issue:** ~15 items on undocumented roots, self-labelled as proposals. (C13)
**Current evidence:** CHEAT's own header calls them "proposed additions we just developed."
**Option A:** Accept some or all into the lexicon (each new root — `doru`, `kharum`, `tesh`, `khät`, etc. — should get at least a one-line etymology or be accepted as an opaque root).
**Option B:** Keep all as proposals in `development/proposals/`; the compositional ones built from existing words (`Ayarevi`, `Naaqidwa`, `Radqän`, `Yirqän`, `Shilaqäsh`) could be fast-tracked since they add no new roots.
**Recommendation:** B with the fast-track — and note the `Sha…`/copula homophony and `Davi`/`dav` proximity before accepting those two.
**Affected material:** lexicon, future `docs/usage/culture.md`.

### D7. "Strong": `yir` or `tir`?

**Issue:** Word list vs. legend. (C6)
**Current evidence:** `yir` appears in the word list and underlies CHEAT's `Yirqän`; `tir` appears once, in the legend.
**Recommendation:** `yir`; correct the legend token (logged, not silent).
**Affected material:** one legend clause.

### D8. Causative prefix on embedded verbs: fixed tense vowel (`da-`) or subject harmony (`du-`)?

**Issue:** The same sentence appears with both. (C7) This also touches the undocumented passive mechanism (C8), which likewise hinges on what the V₁ slot is allowed to copy.
**Current evidence:** The irregular-verb rule ("leave out the subject identifying vowel") predicts `da-`; the `du-` token suggests harmony with the embedded subject `tu`.
**Option A:** `da-` — prefix verbs never carry subject vowels; simpler and matches the stated rule.
**Option B:** `du-` — embedded prefix verbs harmonize with their own subject; more expressive (disambiguates who causes what) but contradicts the stated rule and complicates teaching.
**Recommendation:** A, unless you remember intending B — in which case the irregular-verb rule text needs a documented exception.
**Affected material:** multiple-verb grammar section, one note example.

### D9. "To feel": root `b-v-r` or `b-v-sh`?

**Issue:** Dictionary root vs. the only attested conjugated form `buvash`. (C9)
**Recommendation:** Whichever you originally intended; there is no other evidence. If `b-v-r` stands, the greeting becomes `Naish tu buvar?`.
**Affected material:** one root, one common greeting.

### D10. Presumed typos — will be fixed (with logged commits) unless you object

- Tense text "Future recent / Future long" → "Past recent / Past long" (C5).
- `Tu dæl ike rɪsʌʃ` "If **I** will fight…" → subject `ɪ` (C12).
- Passive note pair `vîdab/vedab` "see" → root is `v-d-b` "write"; pair marked erroneous, correct pair (`vîsat`) retained (C8).
- `n-r-f` "to starve" → `n-r-v`, matching the legend and the phoneme inventory (C15).
- "Nothing": standardize on `yethin` (no /g/ in the inventory), recording `yething` as a legend variant (C16).
- Singular "you" in the Just-Notes questions (`tu` → `su`, `amtu` → `amsu`) — **only** if C11's answer is "sloppy notes" rather than an intended informal `tu`.

---

*End of initial audit (2026-08-09, morning). Addendum below.*

---

# Addendum A — Official Canon File & Decision Resolutions (2026-08-09, afternoon)

## A.1 New source: `Huntspeak-Official-Canon`

The owner added `Huntspeak-Official-Canon`, containing the in-game/official material, with the ruling: **this file always holds true; every other file is an expansion of it.** This creates a new top authority level above BASE. *(Later relocated to the public `canon/` folder; the three BASE/ENH/CHEAT working documents remain private and are not published with the repository.)*

> OFFICIAL CANON (game) > CANON (BASE/repo, as expansion) > PROVISIONAL > WORKING NOTES > PROPOSAL

### What it confirms

- SVO order, "Subject, Verb (adverb), Object(s)" — matches BASE verbatim.
- The triconsonantal root system, subject-vowel harmony (V₁), tense vowel (V₂: a/e/ʌ), two-consonant root behavior — matches BASE verbatim.
- Pronouns `î, su, se, tî, tu, te` — matches.
- ⟨q⟩ = /k/ ("q (k, ke)") — supports D3.
- Roots `v-q-sh, t-kh-r, d-q-b, m-v-t, l-b-, r-s-sh, b-y-, v-d-b` — all match. Note: `v-q-sh` "to love" is listed as a root *in official canon*, so audit item M2 (calling it a redundant derived entry) is withdrawn; it stays a root.
- Cultural frame: Huntspeak varies between the Sun and Moon tribes and "ranges from clicks and whistles to a full guttural language"; few tribes still speak full Huntspeak after the Fifth Umbral Era migration. This retroactively motivates ENH's two language names (`Khiädyasa` "Huntspeak (hunting)" vs `Shilyasa` "Huntspeak (spoken)", M19).

### New official-canon material absent from the repo files

All of these enter the lexicon/phrasebook as **canon** (orthographized per D3: ɪ→î, ʌ→â):

- `Shîmakh` — "Hello!"
- `Râdakh` — "Farewell!"
- `Shakh` — informal hello or bye
- `Qar mîdam` — "Good morning"; `Qar nätum` — "Good night/evening"; `Qar yâl` — "Good meeting / well met"
- `î veqash su` — "I love you"; `î naaq-veqash su` — "I hate you (I have no love for you)"

**Significant:** `naaq-veqash` is official-canon evidence for verbal negation with `naaq-` prefixed to the verb — partially filling Gap G4.

### Canon-internal issues (flagged, not resolved; canon text itself is never edited)

- **A-C1.** The pronoun paradigm gives `Tɪ vɪdeb / Tu vudeb / Te vedeb` glossed as *present* "write" — the tense slot carries `e` (past) for exactly the three plural pronouns, while the canon's own morphology section defines `a` = present and shows `ɪ vɪdeb` = "I wrote". Either a systematic typo or an unstated plural marker (which would make "I wrote" and "we write" both `vɪdeb`). BASE silently normalized all six forms to `-a-`. **Open question D11** — repo follows BASE (`-a-` throughout) until ruled otherwise, with the discrepancy noted in the grammar doc.
- **A-C2.** The canon consonant list omits `n`, `h`, and `th` (θ), yet canon's own vocabulary uses `n` (`naaq`, `nätum`) — the list is evidently incomplete rather than prescriptive. Repo keeps all three (all are needed by canon-file words or BASE vocabulary).
- **A-C3.** The canon vowel list has no /o/; the repo inventory includes it but essentially no word uses it (`shiroth` only, plus the proposed `Doruqän`). /o/ is documented as **marginal** in the pronunciation doc.
- **A-C4.** Canon's vowel key uses IPA symbols non-standardly: `i: pit` and `ɪ: meat` (reversed from standard IPA values). Documentation therefore defines vowels by canon's example words, treating the symbols as project-internal notation: ⟨i⟩ = the *pit* vowel, ⟨î⟩ = the *meat* vowel.
- **A-C5.** `î veqash su` carries `e` in a slot where both repo verb mechanisms would predict `a` (`vîqash` as a root verb, or `vaqash` as prefix `v-` + `qäsh` — the latter attested in BASE notes). The phrase is official canon and stands as-is (treated as a fixed expression); the underlying conjugation question is flagged with D11.

## A.2 Decision resolutions (owner, 2026-08-09)

| # | Ruling | Consequence |
| --- | --- | --- |
| D1 | **A** — `rav'i` = "thirst" | Legend's three `rav'i`-as-"cold" tokens → `sheq` in the corrected text. |
| D2 | **A** — `qäru` = "food" (`evum` "sounds too Latin") | `qäru` canon; `evum` recorded as deprecated variant. |
| D3 | **A** — ⟨q⟩ everywhere for /k/ | `kin→qin` (compounds), `kik'et→qik'et`, `ike→iqe`, `k-d-s→q-d-s`, `kyul'sha→qyul'sha`; lemmas `qäsh`, `qar` (variants `qash/qaash/qaar` deprecated). |
| D4 | **A** — `nayal` = "which" | Legend `amse nayal` → `amse shilaqar`. |
| D5 | **A** — Clause Linking chapter is canon | `naru`, `narudi`, `qesha`, `tarem` enter the lexicon as canon; `iqe` relabeled irrealis particle. |
| D6 | **B**, modified — expansions stay **provisional**; fast-track `sha` "damn" and `khât` "shit/fuck" as accepted | Note: the cheatsheet spells the strong curse `khät` (ä); the owner's ruling spells it `khât` (â). Adopted **`khât`** per the owner's latest wording; `khät` recorded as variant pending confirmation. |
| D7 | `yir` = "strong" | Legend `shua-tir` → `shua-yir`. |
| D8 | **A** — prefix verbs never carry subject vowels | `danenad` standard; the `dunenad` token corrected in curated examples. |
| D9 | `b-v-r` = "to feel" | Greeting becomes `Naish su buvar?`. |
| D10 | All presumed typos confirmed | Tense text → "Past recent/long"; `Tu`→`î` in the hypothetical example; `vîdab` passive pair marked erroneous; `n-r-f`→`n-r-v`; `yething`→`yethin`; notes' singular `tu/amtu`→`su/amsu`. |

**New open decision:**

### D11. Do plural subjects take `-e-` in the present tense?

**Issue:** Official canon's subject-pronoun paradigm systematically writes `-e-` for the three plural pronouns in the present (`Tɪ vɪdeb`, `Tu vudeb`, `Te vedeb`), contradicting its own tense rule (`a` = present) and BASE's normalized paradigm (all `-a-`). Related: canon `î veqash su` also carries `e` (A-C5).
**Current evidence:** Canon morphology section + BASE + the legend all support `a` = present regardless of number; only the canon pronoun list (and `veqash`) deviate.
**Option A:** Typo in the canon source; present is `-a-` for all persons (repo's current behavior).
**Option B:** Plural subjects take `-e-` in the present — a real number distinction, at the cost of ambiguity (`vîdeb` = "I wrote" *and* "we write").
**Recommendation:** A — but since the canon file "always holds true," this deserves an explicit ruling.
**Affected material:** pronoun paradigm doc, every plural present-tense example.

## A.3 Post-decision classification updates

- Clause-linking chapter and its four function words: PROVISIONAL → **CANON** (D5).
- `qäru`: CONFLICT → **CANON**; `evum` → deprecated variant (D2).
- `sha` (interjection "damn") and `khât`: PROPOSAL → **accepted** (D6).
- All other cheatsheet expansions: PROPOSAL → **PROVISIONAL** (D6).
- ENH compounds `nilaqar`, `Khiädyasa`, `Shilyasa`: remain **PROVISIONAL** (not covered by any ruling; flagged for a future decision batch, though A.1's cultural frame supports the latter two).
- Legend: original preserved verbatim in `texts/`; a corrected canonical version applies D1/D3/D4/D7/D10 with a change log; unresolved forms (`tîkhur`, `shu-ba-melu`, `sevu'qe`, `kharau`-as-article, adverbial `-si`) stay flagged in the text notes.

*Migration proceeds per §7 with these rulings applied.*
