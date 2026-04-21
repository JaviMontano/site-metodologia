# Specification Analysis Report — 009-home-landing-sales v8

**Generated**: 2026-04-21 (re-run: deep traceability pass post-v7.1.0 constitution)
**Artifacts**: spec.md (v8), plan.md (v5), tasks.md (v3), 9 `.feature` files (107 scenarios), CONSTITUTION.md (v7.1.0 — 24 principles)

---

## Findings

| ID | Category | Severity | Location(s) | Summary | Recommendation |
|----|----------|----------|-------------|---------|----------------|
| F-01 | Untested Requirement | HIGH | spec.md:549, `tests/features/` | **FR-246** (triple toggle 3 `role="switch"` buttons with `aria-checked`, theme/locale/audience specific behaviors) has zero `@FR-246` tag in any `.feature` file. Adjacent FRs (FR-245, FR-247, FR-248, FR-249) are tagged but FR-246's button-type definitions lack direct traceability. | Add `@FR-246` tag to TS-043 or TS-099 in `us-6-adaptive-blueprint.feature`. |
| F-02 | Stale Reference | MEDIUM | tasks.md:154 | Task **T054** references `FR-206` which is **SUPERSEDED** by FR-240..FR-253 (sidebar architecture v8). Creates traceability confusion. | Update T054 to reference FR-245 instead of superseded FR-206. |
| F-03 | Plan Coverage | MEDIUM | plan.md | ~40 in-scope FRs not explicitly referenced by ID in plan.md. Coverage exists indirectly via tasks.md TS→FR mappings, but plan itself doesn't cite many FRs (FR-002..FR-004, FR-010..FR-017, FR-020..FR-032, FR-050..FR-057, FR-060..FR-065, FR-070..FR-072, etc.). | Acceptable — FRs are covered via tasks.md TS traceability. Consider adding an FR index to plan.md in future iterations. |
| F-04 | Ambiguity | MEDIUM | spec.md:373 | **FR-046** (brand voice audit per audience) says "MUST pasar un audit manual de brand voice antes de merge" but provides no measurable pass/fail criteria. Task T092 covers it, but acceptance threshold is undefined. | Define a 5-point voice audit checklist with explicit pass/fail criteria in spec.md or checklists/. |
| F-05 | Constitution Alignment | LOW | analysis.md | **XXIV. Adaptive Blueprint Personalization** was added in Constitution v7.1.0 but the spec.md §4.4 "Constitutional Alignment" section references v7.0.0 (only 23 principles). The new principle is satisfied in substance (FR-240..FR-253) but not formally acknowledged. | Update spec.md §4.4 header to reference v7.1.0 and add XXIV row to the Constitution Check table. |
| F-06 | Superseded References | LOW | spec.md:253 | Superseded FR IDs (FR-200, FR-206, FR-232) still appear in spec text within `[SUPERSEDED]` annotations. Not confusing but adds noise. | Consider removing inline superseded IDs in next spec revision, keeping only the header note in US-6. |

---

## Constitution Alignment

| Principle | Status | Notes |
|-----------|--------|-------|
| I. BaaS-First, Zero Server | ALIGNED | Firebase-only backend; zero server runtime. Spec §4.4 declares all services. |
| II. Accessibility-First | ALIGNED | WCAG 2.1 AA in FR-061..FR-065; axe-core E2E; touch targets ≥44px; ARIA on all components. |
| III. SEO Integrity | ALIGNED | Meta tags, sitemap.xml, canonical URLs, 17 legacy 301 redirects (US-7), JSON-LD preserved. |
| IV. Component Consistency | ALIGNED | Web Components (Header, Footer, Sidebar, TripleToggle, etc.); `data-i18n` contract; CSS tokens. |
| V. Brand Separation | ALIGNED | MetodologIA only; no Sofka/JM Labs in public content. FR-046 enforces voice audit per audience. |
| VI. Cloud-First + Static Fallback | ALIGNED | `migration-bridge.js` dual-source permanent; static dictionaries as frozen fallback (not transitional). |
| VII. Secure by Default | ALIGNED | Security rules per contract; App Check on PII writes; input sanitization; two-tier consent (FR-072). |
| VIII. SWR + Explicit Offline UX | ALIGNED | Offline/syncing/fallback pills (FR-097..FR-099b); `aria-live`; Playwright test; deferred sync R14. |
| IX. TDD | ALIGNED | ATDD outer + TDD inner; 85% weighted coverage; hash-locked features (NFR-007..NFR-013). |
| X. Design System Governance | ALIGNED | Neo-Swiss Light/Dark canonical tokens; `estilos/variables.css` single source of truth. |
| XI. Brand Voice Integrity | ALIGNED | FR-046 voice audit; red-list terms; Minto pyramid; 4 copy variants per audience×locale. |
| XII. Code Sustainability | ALIGNED | Business-readable names; README per dir; module tree organized by domain concern. |
| XIII. Think First, Act Next | ALIGNED | Full pipeline: spec → plan → tasks → tests → code. Evidence tags throughout. |
| XIV. Simple First, Robust Next | ALIGNED | Hand-authored critical CSS (R5); no premature abstractions; shell-first delivery (R15). |
| XV. BDD Full-Spectrum | ALIGNED | 107 scenarios across 9 feature files covering UX, security, perf, a11y, brand, data angles. |
| XVI. Sequential-First | ALIGNED | 11-phase sequential plan; parallel batches only for zero-dependency tasks; WIP ≤3. |
| XVII. Continuous Learning | ALIGNED | Research decisions archived in research.md; 6 Socratic debates resolved; insights referenced. |
| XVIII. Indexable Repo | ALIGNED | README per new directory; sitemap governance; `.gitignore` documented. |
| XIX. Bug Protocol | N/A | No bugs in feature scope. |
| XX. Branch-to-Environment Parity | ALIGNED | feature → staging → main → production; rollback strategy with decision criteria documented. |
| XXI. Zero Hardcoding | ALIGNED | Tokens in CSS vars; content in dictionaries/Firestore; config in env; thresholds in contract JSON. |
| XXII. PII-Append-Only | ALIGNED | `leads/` + `diagnostics/` append-only (FR-017); dedup deferred to 010; security rules enforced. |
| XXIII. Feature-Bounded Architecture | ALIGNED | Collections table in §4.4; backoffice scoped to 010; seed path documented. |
| XXIV. Adaptive Blueprint Personalization | ALIGNED | 3-axis orthogonal system (locale/theme/audience); single shell; sidebar + triple toggle; 52-combo test matrix. *(Spec §4.4 references v7.0.0 — see F-05.)* |

**Result**: 23/23 ALIGNED, 1 N/A, 0 VIOLATIONS.

---

## Coverage Summary

| Requirement | Has Task? | Task IDs (via TS) | Has Plan Ref? | Plan Context |
|-------------|-----------|-------------------|---------------|--------------|
| FR-001..FR-005 | Yes | T050, T052 | FR-001, FR-005 | §Scope, §Architecture |
| FR-010..FR-017 | Yes | T042–T048 | FR-013, FR-017 | §Data flow, §Risk |
| FR-020..FR-022 | Yes | T083–T085 | FR-020 | §Scope |
| FR-030..FR-032 | Yes | T087–T088 | FR-030 | §Scope |
| FR-040..FR-046 | Yes | T015, T020, T092 | FR-040, FR-045, FR-046 | §Constitution Check |
| FR-050..FR-057 | Yes | T071–T073 | FR-050 | §Scope |
| FR-060..FR-065 | Yes | T024, T074 | FR-060, FR-061, FR-065 | §Testing |
| FR-070..FR-072 | Yes | T026–T027, T090 | FR-070, FR-072 | §Testing, §Scope |
| FR-080..FR-081 | Yes | T050 | FR-080 | §Scope |
| FR-090..FR-096 | Yes | T016, T091 | FR-092, FR-096 | §Architecture, R5 |
| FR-097..FR-099b | Yes | T034, T090 | FR-097..FR-099 | §Constitution Check |
| FR-240..FR-244 | Yes | T006, T012, T013, T017, T032, T037 | FR-240..FR-242, FR-244 | §Scope, §Clarifications |
| FR-245, FR-247..FR-253 | Yes | T019, T031, T037–T038, T076–T080 | FR-245, FR-249, FR-250, FR-253 | §Scope, §Clarifications |
| **FR-246** | **Partial** | T031 (TripleToggle WC) but no TS→FR-246 tag | **No** | **Gap — see F-01** |
| FR-100..FR-120 | N/A (deferred) | — | Referenced in §Out of Scope | Correctly deferred to feature 010 |

---

## Phase Separation Violations

None detected.

- Constitution: governance principles only (no tech choices, no implementation)
- Spec: requirements only (no architecture decisions, no file paths)
- Plan: implementation decisions (module structure, architecture, testing strategy)

---

## Feature File Traceability (H)

### H1. Untested Requirements

| FR/SC ID | In Spec? | In Features? | Status |
|----------|----------|-------------|--------|
| FR-246 | Yes (spec.md:549) | No `@FR-246` tag | **Untested** (HIGH) — see F-01 |
| FR-046 | Yes (spec.md:373) | No `@FR-046` tag | Covered by T092 (manual task), not BDD-traced |
| SC-001, SC-002, SC-008 | Yes | No | **By design** — post-launch metrics, documented |
| SC-018, SC-019 | Yes | No | **By design** — CI/process gates, documented |

### H2. Orphaned Tags

No orphaned tags found. All `@FR-xxx` and `@SC-xxx` tags in `.feature` files reference valid IDs in spec.md.

---

## Metrics

| Metric | Value |
|--------|-------|
| Total FRs (in-scope 009) | 67 |
| Total NFRs | 13 |
| Total SCs | 22 |
| Total User Stories | 8 |
| Total Tasks | 95 |
| Total .feature scenarios | 107 |
| FR→task coverage (direct + via TS) | 66/67 = **98.5%** |
| FR→feature coverage (`@FR-xxx` tags) | 65/67 = **97.0%** |
| SC→feature coverage (automatable only) | 17/17 = **100%** |
| Plan→FR explicit references | ~25/67 = 37% (remainder via tasks/TS indirection) |
| Ambiguity count | 1 (FR-046 measurability) |
| Critical issues | 0 |
| High issues | 1 |
| Medium issues | 3 |
| Low issues | 2 |
| Total findings | 6 |

---

**Health Score: 90/100 (↓ declining)**

> Previous: 100/100 (2026-04-21T15:22:44Z). Score declined due to deeper traceability analysis surfacing FR-246 tag gap, superseded reference in tasks.md, and FR-046 ambiguity. Coverage improved from 88% to 98.5% due to better TS→FR indirect mapping.

## Score History

| Run | Score | Coverage | Critical | High | Medium | Low | Total |
|-----|-------|----------|----------|------|--------|-----|-------|
| 2026-04-21T15:19:07Z | 93 | 88% | 0 | 0 | 3 | 3 | 6 |
| 2026-04-21T15:22:44Z | 100 | 88% | 0 | 0 | 0 | 0 | 0 |
| 2026-04-21T20:45:00Z | 90 | 98.5% | 0 | 1 | 3 | 2 | 6 |
