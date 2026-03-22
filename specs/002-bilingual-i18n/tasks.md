# Tasks: 002-bilingual-i18n

**Feature**: Bilingual Site (ES/EN)
**Branch**: `002-bilingual-i18n`
**Total Tasks**: 42
**Parallel Opportunities**: 12 tasks marked [P]

## Phase 1: Setup

- [ ] T001 Create directory structure: `js/i18n/` for translation module and JSON files
- [ ] T002 Create `js/i18n/es.json` skeleton with nav, footer, toggle, and common section keys extracted from current HTML

## Phase 2: Foundational (i18n Module)

- [ ] T003 [US3] Create `js/i18n/i18n.js` — singleton module with init(), setLang(), translate(), t() API [TS-008, TS-009, TS-010]
- [ ] T004 [US3] Implement localStorage read/write for lang preference (key: "lang", values: "es"/"en") [TS-008]
- [ ] T005 [US3] Implement browser language auto-detection on first visit (navigator.language → "en" if English, fallback "es") [TS-008]
- [ ] T006 [US3] Implement data-i18n text translation (querySelectorAll + textContent replacement) [TS-009]
- [ ] T007 [US3] Implement data-i18n-placeholder, data-i18n-title, data-i18n-content, data-i18n-aria-label attribute translation [TS-010]
- [ ] T008 [US3] Implement data-i18n-html for innerHTML translation (rich text) [TS-009]
- [ ] T009 [US3] Implement graceful fallback: retain original HTML text when translation key missing [TS-011]
- [ ] T010 [US3] Implement window.i18n.translate(element) for dynamic content re-translation [TS-012]
- [ ] T011 [US3] Update `<html lang="es">` attribute on language switch [TS-008]
- [ ] T012 [US3] Ensure i18n.js load time impact < 50ms [TS-013]

> **Dependency**: T003-T012 must complete before Phase 3.

## Phase 3: Language Toggle + Header/Footer (P1)

### US-1: Language Toggle

- [ ] T013 [US1] Add language toggle HTML to SiteHeader.js (between logo/tagline and first nav link) [TS-001]
- [ ] T014 [US1] Style `.lang-toggle` in `estilos/components.css` (pill shape, gold active, semi-transparent) [TS-001]
- [ ] T015 [US1] Wire toggle click → `i18n.setLang()` with aria-pressed state update [TS-001, TS-004]
- [ ] T016 [US1] Add toggle to mobile menu layout in SiteHeader.js [TS-004]
- [ ] T017 [US1] Add keyboard navigation (Tab focus, Enter/Space activate) and focus ring styling [TS-004]

### US-2: Header/Footer Translation

- [ ] T018 [P] [US2] Add data-i18n attributes to SiteHeader.js nav links, tagline, CTA [TS-005]
- [ ] T019 [P] [US2] Add data-i18n attributes to SiteFooter.js section headers, links, copyright [TS-006]
- [ ] T020 [US2] Add data-i18n attributes to floating nav section labels [TS-007]
- [ ] T021 [P] [US2] Add English translations for all header/footer keys to en.json [TS-005, TS-006, TS-007]

### i18n Script Loading

- [ ] T022 Add `<script src="{basePath}/js/i18n/i18n.js" defer></script>` to SiteHeader.js (loads on every page)

> **Dependency**: T013-T022 must complete before Phase 4.

## Phase 4: Wave 1 — Core Pages (P1/P2)

### US-4 Wave 1: 5 Core Pages

- [ ] T023 [P] [US4] Add data-i18n attributes to `index.html` (hero, sections, CTAs) [TS-014]
- [ ] T024 [P] [US4] Add data-i18n attributes to `ruta/index.html` [TS-014]
- [ ] T025 [P] [US4] Add data-i18n attributes to `contacto/index.html` [TS-014]
- [ ] T026 [P] [US4] Add data-i18n attributes to `servicios/index.html` [TS-014]
- [ ] T027 [P] [US4] Add data-i18n attributes to `vision.html` [TS-014]
- [ ] T028 [US4] Add all Wave 1 English translations to en.json [TS-014]
- [ ] T029 [US4] Add all Wave 1 Spanish keys to es.json (matching HTML content) [TS-014]
- [ ] T030 [US4] Verify graceful fallback on untranslated pages (header/footer EN, body ES) [TS-015]

## Phase 5: Wave 4 — Biblioteca Landing Pages (P2)

### US-5: Bilingual Library UI Chrome

- [ ] T031 [P] [US5] Add data-i18n to all 9 biblioteca landing pages (hero, search, categories, downloads) [TS-017]
- [ ] T032 [US5] Add biblioteca UI chrome translations to en.json [TS-017]
- [ ] T033 [US5] Verify prompt modal chrome translated, prompt content stays Spanish [TS-018]

## Phase 6: SEO + Testing (P3)

### US-6: hreflang Tags

- [ ] T034 [P] [US6] Add hreflang link tags to all public pages (index, follow) [TS-019]
- [ ] T035 [US6] Verify internal/noindex pages do NOT have hreflang [TS-020]

### US-7: Playwright Tests

- [ ] T036 [P] [US7] Create `tests/19-bilingual-foundation.spec.js` — i18n module, toggle, persistence [TS-021]
- [ ] T037 [P] [US7] Create `tests/20-bilingual-header-footer.spec.js` — header/footer in both langs [TS-021]
- [ ] T038 [P] [US7] Create `tests/21-bilingual-core-pages.spec.js` — Wave 1 page verification [TS-021]
- [ ] T039 [P] [US7] Create `tests/22-bilingual-bibliotecas.spec.js` — library UI chrome [TS-021]
- [ ] T040 [US7] Run full test suite, verify 100% pass rate [TS-021, TS-022]

## Phase 7: Polish & Cross-Cutting

- [ ] T041 Verify zero JS errors on all pages with both languages (spot-check 10 pages)
- [ ] T042 Performance audit: measure i18n load impact with Lighthouse on 3 pages

## Dependency Graph

```
T001 → T002 → T003..T012 → T013..T022 → T023..T030 → T031..T033 → T034..T040 → T041..T042
                                           ↑ (parallel within phase)
```

**Critical Path**: T001 → T003 → T006 → T013 → T015 → T022 → T023 → T028 → T031 → T036 → T040 → T042
**Length**: 12 tasks sequential

**Parallel Batches**:
- Phase 3: T018, T019, T021 can run in parallel
- Phase 4: T023, T024, T025, T026, T027 can run in parallel
- Phase 6: T034, T036, T037, T038, T039 can run in parallel

## MVP Scope

**Minimum Viable**: Phases 1-3 (T001-T022) = toggle + header/footer translated = bilingual shell on every page.
**Full P1**: Phases 1-4 (T001-T030) = 5 core pages fully bilingual.
**Complete**: All phases (T001-T042) = full bilingual site with tests and SEO.

## Implementation Strategy

1. Build i18n module first (Phase 2) — it's the foundation everything depends on
2. Add toggle + header/footer (Phase 3) — gives immediate visual bilingual presence on ALL pages
3. Translate core pages in parallel (Phase 4) — 5 pages can be done simultaneously
4. Libraries and SEO (Phases 5-6) — lower priority, can be deferred
5. Polish (Phase 7) — final verification pass
