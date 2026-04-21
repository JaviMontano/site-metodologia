# Tasks: Home como Landing Vendedora (3 CTAs Primarios)

**Input**: Design documents from `/specs/009-home-landing-sales/`
**Prerequisites**: plan.md (v5), spec.md (v7), data-model.md (v3), contracts/ (3 files), research.md, quickstart.md, 8 .feature files (92 scenarios), sitemap.md (v1), adaptive-blueprint.md (v1)
**Branch**: `009-home-landing-sales`
**Total tasks**: 72 | **Per-story**: US-1: 13, US-4: 6, US-5: 5, US-6: 12, US-7: 15, US-2: 4, US-3: 3, Setup: 5, Foundation: 5, Polish: 4
**Version**: v2 (v1 + Socratic debate: 7 tensions resolved, 10 tasks added/split)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[USn]**: Which user story this task belongs to
- Include exact file paths in descriptions
- **Traceability**: Test spec IDs reference `.feature` tags (TS-001..TS-092)

---

## Phase 1: Setup

**Purpose**: Baseline capture, project structure, tooling configuration, redirect infrastructure

- [ ] T001 Capture GA4 baseline for SC-001, SC-002, SC-009 (30-day window of current home) — document in specs/009-home-landing-sales/baseline.md
- [ ] T002 [P] Create new directory structure: `js/diagnostic/`, `js/audience/`, `js/analytics/`, `js/theme/`, `js/state/`, `js/blueprint/`, `js/redirects/`, `diagnostico/`, `metodo/`, `casos/`, `insights/`
- [ ] T003 [P] Update `vitest.config.js` with per-module coverage thresholds per NFR-008 (pure: 100%, logic: 95%, controllers: 80%, components: 70%, global: 85%)
- [ ] T004 [P] Create pre-commit hook script `scripts/count-pages.js` to enforce exactly 13 canonical pages [TS-057]
- [ ] T005 [P] Create `.htaccess` with 17 legacy 301 redirect rules for SEO (see Socratic debate §3 redirect map: /vision.html→/metodo/, /servicios/→/programas/, /ruta/*→/diagnostico/, /metodologia.html→/metodo/, /empresas/diagnostico-gratuito.html→/diagnostico/?audiencia=empresa, /personas/autodiagnostico.html→/diagnostico/?audiencia=persona, /legal/privacidad.html→/legal/#privacidad, /legal/terminos.html→/legal/#terminos, /nosotros/ecosistema.html→/nosotros/, /nosotros/mision.html→/nosotros/, /ruta/cotizador*.html→/diagnostico/, /ruta/levels_grid.html→/programas/, /ruta/service_blueprint.html→/programas/, /ruta/a-medida.html→/contacto/, /sitemap.html→/) [TS-053, TS-054, TS-055, TS-056]

**Checkpoint**: Structure ready, baseline documented, .htaccess deployed

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Leaf modules with zero internal dependencies — MUST complete before ANY user story

**CRITICAL**: All user stories depend on these pure modules

- [ ] T006 [P] Implement `js/state/bus.js` — lightweight pub/sub event bus (pure, zero deps) + unit test `tests/unit/bus.spec.js` (100% coverage) [TS-062]
- [ ] T007 [P] Implement `js/diagnostic/logic.js` — pure scoring + threshold logic from `contracts/diagnostic-logic.json` + unit test `tests/unit/diagnostic-logic.spec.js` (100% coverage) [TS-003, TS-004, TS-088, TS-089, TS-090, TS-091, TS-092]
- [ ] T008 [P] Implement `js/audience/state.js` — AudienceState management (6-level provenance cascade from adaptive-blueprint.md §3.1: URL param → localStorage → landing inference → diagnostic → UTM → default) + unit test `tests/unit/audience-state.spec.js` (≥95%) [TS-043, TS-046]
- [ ] T009 [P] Implement `js/theme/toggle.js` — theme switch + localStorage persistence + `prefers-color-scheme` fallback + unit test `tests/unit/theme-toggle.spec.js` (≥95%) [TS-032]
- [ ] T010 [P] Implement `js/redirects/legacy-router.js` — client-side fallback URL resolution for 17 legacy paths (JS redirect for browsers that bypass .htaccess) [TS-053, TS-054, TS-055, TS-056]

**Checkpoint**: 5 leaf modules + 5 unit test files ready — all stories can now begin

---

## Phase 3: US-4 — Neo-Swiss Identity (Priority: P1)

**Goal**: Design tokens, critical CSS, and visual system coherent with cartillas
**Independent Test**: Side-by-side audit of home tokens vs cartilla reference
**Context**: Current site is **all dark theme** (bg #111621, #0a0f1e). This phase introduces Neo-Swiss Light as default + Dark as mirror.

### Tests

- [ ] T011 [P] [US-4] Write E2E test `tests/e2e/home-critical-css.spec.js` — first paint without FOUC [TS-063]

### Implementation

- [ ] T012 [US-4] Update `estilos/variables.css` — add Neo-Swiss Light/Dark token sets (FR-041, FR-042, FR-044) with canonical custom properties per spec §4.1 [TS-026, TS-027, TS-028]
- [ ] T013 [P] [US-4] Create `estilos/critical.css` — hand-authored fold CSS: tokens + hero layout + CTA primario + above-fold typography (FR-092, FR-096) [TS-063]
- [ ] T014 [P] [US-4] Create `estilos/blueprint.css` — shared page shell layout for 13-page blueprint per adaptive-blueprint.md §2.1 [TS-049]
- [ ] T015 [US-4] Update `estilos/home.css` — home v2 layout using Neo-Swiss tokens, clamp() typography, 6-breakpoint grid [TS-029, TS-030, TS-038]
- [ ] T016 [US-4] Update `estilos/components.css` — new component styles (DiagnosticStepper, OfflinePill, ConsentBanner, ProgramCard) [TS-031]

**Checkpoint**: Visual system complete — all pages can consume canonical tokens

---

## Phase 4: US-6 — Adaptive Blueprint (Priority: P1)

**Goal**: 3-toggle system (locale/theme/audience), page shell bootstrap, slot resolution, slug router
**Independent Test**: 52-combo matrix (13 pages × 2 locale × 2 audience) — zero raw keys
**Context**: Implements FR-200..FR-232 from adaptive-blueprint.md. All 3 toggles in SiteHeader; orthogonal (theme=CSS only, locale+audience=content only).

### Tests

- [ ] T017 [P] [US-6] Write unit test `tests/unit/slot-resolver.spec.js` — 5-level fallback cascade (exact → audience-neutral → locale-fallback → both-fallback → hard-fallback) per adaptive-blueprint.md §2.3 (≥95%) [TS-048]

### Implementation

- [ ] T018 [US-6] Create i18n dictionaries: `js/i18n/dictionaries/home.json` (ES/EN × persona/empresa × unknown) and `js/i18n/dictionaries/common.json` (nav 5 items, footer 12 pages, toggles, skip-link, missing-key fallbacks) [TS-048, TS-073]
- [ ] T019 [US-6] Implement `js/analytics/consent.js` — cookie banner logic + `mdg_consent` persistence (two-tier: banner=analytics only, PII=separate checkbox per FR-072) [TS-075, TS-076, TS-077, TS-078, TS-079]
- [ ] T020 [US-6] Implement `js/analytics/events.js` — typed event emitter with consent gating + `audience` field in BaseEventEnvelope + `audience_switched` event per adaptive-blueprint.md §3.2 + unit test `tests/unit/analytics-events.spec.js` (≥95%) [TS-074, TS-075]
- [ ] T021 [US-6] Implement `js/blueprint/slot-resolver.js` — ContentSlot → DOM hydration with 5-level audience/locale fallback cascade, `data-i18n` attribute resolution, zero raw keys guarantee (depends on T008, T018) [TS-048]
- [ ] T022 [US-6] Implement `js/blueprint/shell.js` — common page shell bootstrap: toggles init, slot resolution, theme restore from inline `<script>` (anti-FOUC), bus wiring, `mdg:state-changed` event emission (depends on T006, T009, T021) [TS-044, TS-045]
- [ ] T023 [US-6] Implement `js/blueprint/slug-router.js` — lightweight client-side `?slug=X` router for 3 dynamic templates (/programas/, /recursos/, /insights/): read param → fetch doc from Firestore or i18n fallback → render in template slots. Pre-render top-5 slugs as static HTML for SEO (plan.md R12) [TS-052]
- [ ] T024 [US-6] Implement `js/audience/controller.js` — toggle + slot hydration, `data-audience-variant`/`data-audience-filter` declarative DOM, <100ms re-render, FR-206 pinned state on /empresas/ and /personas/ (depends on T008, T021, T006) [TS-043, TS-047]
- [ ] T025 [US-6] Create Web Component `components/ConsentBanner.js` — LGPD analytics consent banner with accept/reject (depends on T019) [TS-075]
- [ ] T026 [US-6] Create Web Component `components/OfflinePill.js` — cache state indicator (offline/syncing/fallback) with `aria-live="polite"` (depends on T006) [TS-072, TS-050]
- [ ] T027 [US-6] Modify `components/SiteHeader.js` — add 3 toggles with `role="radiogroup"`/`role="radio"` + `aria-label` (FR-201), offline pills coexistence (FR-099b), collapse to "⚙ Preferencias" on xs/sm (FR-200), keyboard nav Arrow Left/Right (FR-230) (depends on T009, T024) [TS-044, TS-045, TS-050]
- [ ] T028 [US-6] Write E2E test `tests/e2e/adaptive-blueprint.spec.js` — 52-combo parametrized matrix (13 pages × 2 locale × 2 audience), zero raw keys, <100ms toggle transitions, ARIA announcements [TS-043, TS-044, TS-045, TS-046, TS-047, TS-048, TS-049, TS-050, TS-051]

**Checkpoint**: Blueprint operational — any page can consume toggles, slots, shell, and slug routing. 52-combo matrix passing.

---

## Phase 5: US-1 ��� Diagnostic CTA (Priority: P1) MVP

**Goal**: 6-step diagnostic wizard → lead + diagnostic in Firestore → personalized result
**Independent Test**: Hero + diagnostic flow end-to-end, lead in Firestore
**Context**: New `/diagnostico/index.html` replaces both `empresas/diagnostico-gratuito.html` (B2B) and `personas/autodiagnostico.html` (B2C) — those redirect via .htaccess (T005).

### Tests

- [ ] T029 [P] [US-1] Write unit test `tests/unit/diagnostic-state.spec.js` — localStorage state machine (≥95%) [TS-005, TS-014, TS-015]
- [ ] T030 [P] [US-1] Write integration test `tests/integration/security-rules.spec.js` — Emulator: leads/ + diagnostics/ CRUD (positive + negative per contracts/firestore-rules.md) [TS-007, TS-008, TS-009, TS-010]

### Implementation

- [ ] T031 [US-1] Implement `js/diagnostic/state.js` — localStorage state machine (idle → in_progress → captured → persisted/pending_sync → sync_failed) with 24h TTL (depends on T006) [TS-005, TS-014]
- [ ] T032 [US-1] Implement `js/diagnostic/controller.js` — DOM orchestration + Firestore write with optimistic result + deferred sync (R14) + exponential retry (1s→4s→16s, max 3) (depends on T007, T031, T020) [TS-003, TS-004, TS-005, TS-006, TS-007, TS-010, TS-088, TS-089, TS-090, TS-091, TS-092]
- [ ] T033 [US-1] Create Web Component `components/DiagnosticStepper.js` — 6-step wizard with progress bar, back/next, time estimate "≈3 min" (depends on T032) [TS-003, TS-011, TS-012, TS-013, TS-014, TS-015]
- [ ] T034 [US-1] Create `estilos/diagnostic.css` — stepper + result screen styles per Neo-Swiss tokens [TS-026]
- [ ] T035 [US-1] Create `diagnostico/index.html` — 6-step diagnostic flow page using DiagnosticStepper + shell.js, accepts `?audiencia=empresa|persona` param for pre-selection [TS-001, TS-002, TS-003]
- [ ] T036 [US-1] Create i18n dictionary `js/i18n/dictionaries/diagnostico.json` — diagnostic flow copy (ES/EN × persona/empresa) [TS-073]
- [ ] T037 [US-1] Update `firebase/firestore.rules` — add leads/ + diagnostics/ rules per contracts/firestore-rules.md (append-only, auth.uid match, App Check) [TS-007, TS-008, TS-009, TS-010]
- [ ] T038 [US-1] Update `firebase/firestore.indexes.json` — add composite indexes for programs (status, order) and testimonials (status, order) [DOC]
- [ ] T039 [US-1] Redesign `index.html` — home v2 landing with FULL structure per FR-005: hero (promesa ≤12 words + CTA primario gold filled + CTA secundario outline + `mdg_returning` detection) → proof section (testimonials/logos placeholder) → 3 rutas expandidas → "Programas activos" section (3-4 static cards from i18n, replaced by ProgramCard WC in Phase 9) → closing (repeat 3 CTAs) → footer. Inline critical.css, defer output.css via media=print+onload swap. [TS-001, TS-002, TS-006, TS-016, TS-022, TS-080, TS-081, TS-082]
- [ ] T040 [US-1] Write E2E test `tests/e2e/diagnostic-flow.spec.js` — 6-step happy path + result + Firestore persist [TS-003, TS-004, TS-005, TS-006]
- [ ] T041 [US-1] Write E2E test `tests/e2e/home-fold.spec.js` — CTA visible in 6 viewports without scroll [TS-001, TS-002]

**Checkpoint**: Primary conversion flow operational — visitor → diagnostic → lead → result. Home ships with ALL 3 CTAs + static program cards.

---

## Phase 6: US-7 — Sitemap + 13-Page Shell (Priority: P1)

**Goal**: 13 canonical pages with shell blueprint, sitemap.xml, legacy redirects
**Independent Test**: Crawler finds exactly 12 public URLs; legacy 301s resolve correctly
**Context**: Repo has 70+ HTML files. This phase creates/rewrites 11 non-home pages. Pages split into 3 tiers by complexity (Socratic debate §2).

### Tests

- [ ] T042 [P] [US-7] Write E2E test `tests/e2e/sitemap-redirects.spec.js` — sitemap.xml validation (12 URLs) + 17 legacy 301 redirects + nav 5 items + footer 12 pages [TS-052, TS-053, TS-054, TS-055, TS-056, TS-057, TS-058, TS-059]

### Tier A — Rewrite existing pages (rich content → Neo-Swiss Light shell + preserved value)

- [ ] T043 [US-7] Rewrite `empresas/index.html` — migrate from dark B2B landing (KPI cards, modal-system) to Neo-Swiss Light shell with hero (audience=empresa locked per FR-206), proof section, program links, escape routes to `/diagnostico/?audiencia=empresa`. Preserve JSON-LD Organization schema. [TS-052, TS-058]
- [ ] T044 [US-7] Rewrite `personas/index.html` — migrate from dark B2C landing (emerald theme, bootcamp grid) to Neo-Swiss Light shell with hero (audience=persona locked per FR-206), proof section, program links, escape routes to `/diagnostico/?audiencia=persona`. Preserve JSON-LD schema. [TS-052, TS-058]
- [ ] T045 [US-7] Rewrite `recursos/index.html` — migrate from dark resource hub to Neo-Swiss Light shell with category picker, resource catalog grid, premium gate integration. Preserve links to existing subcategory pages (14+ subdirectories untouched by 009). [TS-052, TS-058]
- [ ] T046 [US-7] Rewrite `nosotros/index.html` — migrate from dark about page (team hierarchy, ecosystem map) to Neo-Swiss Light shell with hero + team section + escape routes. Absorb `/nosotros/ecosistema.html` and `/nosotros/mision.html` content into single page (redirected via .htaccess). [TS-052, TS-058]
- [ ] T047 [US-7] Rewrite `contacto/index.html` — migrate from dark glassmorphic form to Neo-Swiss Light shell with contact form + booking CTA + escape routes. Preserve JSON-LD ContactPage. [TS-052, TS-058]

### Tier B — Create new pages (no prior existence)

- [ ] T048 [P] [US-7] Create `programas/index.html` — dynamic template with slug router (?slug=X) for program detail, list view with audience filter, responsive card grid. Replaces `/servicios/index.html` (redirected). [TS-052, TS-058]
- [ ] T049 [P] [US-7] Create `metodo/index.html` — methodology explainer shell. Replaces `/vision.html` and `/metodologia.html` (both redirected). Hero + 3-phase methodology (Diagnóstico→Estrategia→Amplificación) + closing CTA to diagnostic. [TS-052, TS-058]
- [ ] T050 [P] [US-7] Create `casos/index.html` — case studies shell. Hero + top-3 embedded testimonials from i18n dict + "Ver todos" link + escape routes. Uses `testimonials/` with `type` filter (OQ2 resolved: no new collection). [TS-052, TS-058]
- [ ] T051 [P] [US-7] Create `insights/index.html` — "early access" shell (not "coming soon" per sitemap.md Q6). Hero + subscription form (writes to `leads/` with `fuente: "insights-subscribe"` per OQ1 resolution) + escape routes. [TS-052, TS-058]
- [ ] T052 [P] [US-7] Create `404.html` — not-found page with Neo-Swiss shell, "Volver al home" CTA, i18n (ES/EN), analytics `page_not_found` event. [TS-056]

### Tier C — Consolidate existing pages

- [ ] T053 [US-7] Create `legal/index.html` — consolidate `legal/privacidad.html` + `legal/terminos.html` into single page with 3 anchor sections (#privacidad, #terminos, #cookies per sitemap.md Q7). Both old files redirected via .htaccess (T005). [TS-052, TS-058]

### Shared shell infrastructure

- [ ] T054 [US-7] Create 11 i18n dictionaries `js/i18n/dictionaries/{pageSlug}.json` — per-page dictionaries for empresas, personas, recursos, nosotros, contacto, programas, metodo, casos, insights, legal, 404. Total ~132 i18n keys (11 pages × 3 slots × 2 audiences × 2 locales) + per-page specific keys. [TS-073, TS-048]
- [ ] T055 [US-7] Create `scripts/generate-sitemap-xml.js` — 12-URL sitemap generator (excludes 404) with hreflang alternates (es/en) and dynamic slug URLs for pre-rendered top-5 [TS-052]
- [ ] T056 [US-7] Modify `components/SiteFooter.js` — 12-page link list per sitemap.md, social links, language toggle [TS-058, TS-059]
- [ ] T057 [US-7] Update nav in `components/SiteHeader.js` — exactly 5 nav items (Diagnóstico as gold CTA button, Empresas, Personas, Recursos, Método) per sitemap.md principle A [TS-059]
- [ ] T058 [US-7] Write integration test `tests/integration/home-firestore.spec.js` — Emulator: SWR + append-only for home content reads [TS-072]
- [ ] T059 [US-7] Create idempotent seed script `scripts/seed.js` — programs, resources, testimonials from JSON manifest (seed to emulator with --emulator flag, to prod with --apply) [DOC]

**Checkpoint**: 13-page site structure complete — all pages navigable with Neo-Swiss shell, sitemap valid, 17 legacy URLs redirect, subcategory pages preserved

---

## Phase 7: US-5 — Responsive Native (Priority: P1)

**Goal**: Design-specific layouts per viewport class (xs/sm/md/lg/xl/2xl), no scroll horizontal, touch targets, clamp() typography
**Independent Test**: 6-viewport checklist of 12 points per US-5

### Tests

- [ ] T060 [P] [US-5] Write E2E test `tests/e2e/home-a11y.spec.js` — axe-core audit + keyboard tab order (skip-link → nav → CTA1 → CTA2 → programs → footer) [TS-037, TS-067, TS-068]

### Implementation

- [ ] T061 [US-5] Responsive CSS refinement across `estilos/home.css`, `estilos/blueprint.css`, `estilos/diagnostic.css` — 6-breakpoint mobile-first, clamp() typography, safe-area insets, landscape compact hero [TS-033, TS-034, TS-035, TS-036, TS-038, TS-039, TS-040]
- [ ] T062 [US-5] Add `srcset` WebP/AVIF + fallback + `loading="lazy"` + `aspect-ratio` for all images outside fold [TS-040, TS-085, TS-086]
- [ ] T063 [US-5] Ensure touch targets ≥44×44px (xs/sm) and ≥48×48px (md+) with ≥8px spacing on all interactive elements [TS-033, TS-037]
- [ ] T064 [US-5] Write E2E test `tests/e2e/home-i18n.spec.js` — ES↔EN switch, zero raw keys in production DOM [TS-073, TS-074]

**Checkpoint**: All 6 viewports pass 12-point checklist — no horizontal scroll, touch targets compliant, LCP within budget

---

## Phase 8: US-2 — Resource Escape Route (Priority: P2)

**Goal**: Premium resource gate + contextual diagnostic invitation
**Independent Test**: Home → catalog → resource open/download → contextual diagnostic invite
**Context**: The secondary CTA "Explorar recursos" is already in the home hero (T039). This phase adds the interactive logic on `/recursos/`.

- [ ] T065 [US-2] Implement premium resource email modal in `js/modal-system.js` (extend existing) — lead write with fuente `home-resource-premium`, anonymous auth + App Check [TS-019, TS-020, TS-021]
- [ ] T066 [US-2] Add contextual diagnostic invitation banner after resource consumption in `recursos/index.html` — "¿Quieres saber qué nivel ya tienes? Haz el diagnóstico de 3 min" [TS-018]
- [ ] T067 [US-2] Wire analytics events: `resource_open`, `resource_premium_unlock` per contracts/analytics-events.md [TS-017]
- [ ] T068 [US-2] Write E2E test for premium unlock flow — email modal → lead in Firestore with correct fuente [TS-019, TS-020, TS-021]

**Checkpoint**: Resource escape route functional — captures early-stage visitors, contextual upsell to diagnostic

---

## Phase 9: US-3 — Educational Offer (Priority: P3)

**Goal**: Replace static program cards on home with dynamic ProgramCard WC + Firestore
**Independent Test**: Home → dynamic program cards from Firestore → empresas/ or personas/ landing
**Context**: Home already has static "Programas activos" section from T039. This phase adds the dynamic component.

- [ ] T069 [US-3] Create Web Component `components/ProgramCard.js` — name_i18n, audiencia, duracion, resultado_i18n, CTA href (standalone, template-only, reads from Firestore `programs/` with static fallback) [TS-022, TS-023]
- [ ] T070 [US-3] Replace static program cards in `index.html` with ProgramCard WC instances fed from Firestore `programs/` collection (status=published, ordered by `order`), responsive grid (1-col xs/sm, 2-col md, 3-col lg+), audience-filtered by `data-audience-filter` [TS-022, TS-024, TS-025]
- [ ] T071 [US-3] Write E2E test for program section — ProgramCard rendering from seed data, link targets to existing pages, `program_request` analytics event with slug + audiencia [TS-022, TS-023, TS-024, TS-025]

**Checkpoint**: Oferta educativa dynamic on home — third conversion path with Firestore-backed data

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Performance optimization, a11y hardening, E2E offline pill, brand audit

- [ ] T072 Write E2E test `tests/e2e/home-offline-pill.spec.js` �� stub Firestore → pill appears within 3s, aria-live announces state [TS-072, TS-074, TS-080]
- [ ] T073 Performance audit — Lighthouse ≥90 (4 categories) on mobile + desktop, bundle <250KB initial / <800KB total, all deferred JS uses `defer` or `type="module"`, fonts swap + preconnect [TS-060, TS-061, TS-062, TS-064, TS-065, TS-066, TS-085, TS-086]
- [ ] T074 Brand voice audit per FR-046: review all i18n dictionaries for persona (cercano, inspiracional) vs empresa (seguro, basado en resultados) tone. Run quickstart.md validation. Final coverage report against NFR-008 thresholds. [TS-067, TS-068, TS-069, TS-070, TS-071, TS-080, TS-081, TS-082, TS-083, TS-084, TS-085, TS-086, TS-087]
- [ ] T075 Verify all 17 .htaccess redirects return 301 on production (Hostinger). If mod_rewrite unavailable, fall back to meta-refresh in legacy HTML files. [TS-053, TS-054, TS-055, TS-056]

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 1 (Setup) ──→ Phase 2 (Foundational) ──→ Phase 3 (US-4 Tokens)
                                                       │
                                    ┌──────────────────┤
                                    ▼                  ▼
                           Phase 4 (US-6 Blueprint)   Phase 7 (US-5 Responsive)
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
           Phase 5 (US-1)   Phase 6 (US-7)   Phase 8 (US-2)
                    │               │               │
                    └───────┬───────┘               │
                            ▼                       │
                    Phase 9 (US-3)                  │
                            │                       │
                            └───────────┬───────────┘
                                        ▼
                               Phase 10 (Polish)
```

### Critical Path

T001 → T006 → T012 → T021 → T022 → T032 → T039 → T043 → T074

**Longest chain**: 9 tasks (Setup → Foundational → Tokens → Blueprint → Diagnostic → Home → Shells → Polish)

### Parallel Batches per Phase

| Phase | Parallel batch | Tasks |
|---|---|---|
| 1 | Batch A | T002, T003, T004, T005 (after T001) |
| 2 | Batch B | T006, T007, T008, T009, T010 (all independent) |
| 3 | Batch C | T011, T013, T014 (after T012) |
| 4 | Batch D | T017, T018, T019 (after Phase 3) |
| 5 | Batch E | T029, T030 (after Phase 4); T034, T036 parallel with T031 |
| 6-Tier B | Batch F | T048, T049, T050, T051, T052 (all independent new pages) |
| 7 | Batch G | T060 parallel with T061, T062 |
| 8 | T065, T067 parallel; then T066, T068 |
| 9 | T069 parallel with T070 |

### Story Independence

| Story | Can start after | Depends on stories |
|---|---|---|
| US-4 | Phase 2 | None |
| US-6 | US-4 (tokens) | US-4 |
| US-1 | US-6 (shell + slots) | US-4, US-6 |
| US-7 | US-6 (shell + slots) | US-4, US-6 |
| US-5 | US-4 (tokens) | US-4 (applied across all) |
| US-2 | US-1 (home exists) + US-7 (recursos rewritten) | US-4, US-6, US-1, US-7 |
| US-3 | US-1 (home exists with static cards) | US-4, US-6, US-1 |

---

## MVP Scope Suggestion

**Minimum viable launch** = Phases 1–6 (Setup + Foundation + US-4 + US-6 + US-1 + US-7):
- Home v2 landing with 3-CTA pyramid (all 3 CTAs present)
- Diagnostic flow end-to-end
- 13-page shell scaffold (5 rewrites + 5 new + 1 consolidation)
- Design tokens + adaptive blueprint + slug router
- 17 legacy redirects via .htaccess
- **49 tasks** to MVP

Phases 7–10 (US-5 polish, US-2, US-3, cross-cutting) add the remaining 23 tasks for full feature completion.

---

## Clarifications

### Session 2026-04-21 (v2 — Socratic debate: UX + Product + Tech)

- Q: ¿Qué pasa con las 70+ páginas HTML existentes al consolidar a 13 canónicas? → A: Tres destinos: (1) absorbidas por templates dinámicos (?slug=X), (2) redirected 301 via .htaccess, (3) preservadas sin participar en nav/sitemap. Las 14+ subcategorías de /recursos/ siguen funcionando como rutas estáticas; el template dinámico opera en paralelo. Migración completa = features 011+. [T005, T010, T023, T042, T043, T044, T045, T046, T047, T048, T049, T050, T051, T052, T053]
- Q: T041 "Create 11 shell pages" trata 11 archivos como una sola tarea cuando 5 de ellos son reescrituras de páginas existentes con contenido rico. ¿Se debe split? → A: Sí. Split en Tier A (5 rewrites: empresas, personas, recursos, nosotros, contacto), Tier B (5 new: programas, metodo, casos, insights, 404), Tier C (1 consolidation: legal). Cada rewrite preserva contenido valioso (JSON-LD schemas, KPI cards, category pickers) mientras migra a Neo-Swiss Light shell. [T043, T044, T045, T046, T047, T048, T049, T050, T051, T052, T053]
- Q: El redirect map en T009 tiene solo 4 URLs pero el repo real necesita 17 redirects. ¿Se amplía? → A: Sí. Dual strategy: `.htaccess` para 301s reales (SEO) + `legacy-router.js` como fallback JS. Mapa expandido de 4→17 rutas incluyendo ruta/cotizador-*.html, nosotros/ecosistema.html, legal/privacidad.html, etc. [T005, T010, T042, T075]
- Q: T037 (home redesign) encapsula US-1+US-2+US-3. ¿Se entrega incompleto o con estructura completa? → A: T039 entrega la estructura HTML completa del home (3 CTAs + programas section con cards estáticas de i18n). US-2 (Phase 8) agrega solo lógica interactiva de premium modal. US-3 (Phase 9) reemplaza cards estáticas con ProgramCard WC + Firestore. Esto evita rework y cumple FR-005. [T039, T065, T066, T070]
- Q: Falta tarea para el client-side slug router de los 3 templates dinámicos (programas, recursos, insights). → A: Agregado T023 `js/blueprint/slug-router.js` — lee ?slug=X, fetch doc Firestore o fallback i18n, renderiza en template. Pre-render top-5 para SEO (R12). [T023, T048]
- Q: Open Questions de sitemap.md (OQ1-OQ5) sin resolver. → A: OQ1: insights subscription → `leads/` con `fuente: "insights-subscribe"` (no new collection, Constitution XXIII). OQ2: /casos/ → `testimonials/` con campo `type` (no new collection). OQ3: /nosotros/ → HTML estático en 009, Firestore en 010. OQ4: .htaccess para 301s + JS fallback (dual). OQ5: script generate-sitemap-xml.js (ya en T055). [T005, T050, T051, T053, T055, T059]
- Q: /recursos/ actual tiene 14+ subcategorías como rutas estáticas. ¿Se destruyen en 009? → A: No. /recursos/index.html se reescribe como shell Neo-Swiss con filtros, pero las subcategorías existentes (biblioteca-prompts/, ebooks/, playbooks/, etc.) siguen funcionando. El template dinámico (?slug=X) opera en paralelo. Migración completa de subcategorías a template = features 011+. [T045]

---

## Notes

- [P] tasks = different files, no dependencies
- [USn] label maps task to user story for traceability
- TDD discipline (NFR-007): write tests FIRST in each phase, ensure they FAIL, then implement
- Constitution IX enforces ATDD outer loop: `.feature` scenarios (TS-xxx) written before step definitions
- Each user story is independently completable and testable per spec's "Independent test" sections
- 92 BDD scenarios (TS-001..TS-092) provide full traceability coverage
- All 13 current dark-theme pages migrate to Neo-Swiss Light; dark mode is the mirror toggle
- Existing /recursos/ subcategory pages (70+ HTML files) are NOT touched by 009 — they continue to function alongside the new shell
