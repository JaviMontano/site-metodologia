# Implementation Plan: Home como Landing Vendedora (3 CTAs Primarios)

**Branch**: `009-home-landing-sales` | **Date**: 2026-04-21 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `specs/009-home-landing-sales/spec.md` (v7 consolidated)
**Version**: v4 (regenerated from blank template by `/iikit-02-plan`)

## Summary

Redesign the home page (`index.html`) as a Neo-Swiss Light sales landing with a 3-CTA conversion pyramid (Diagnóstico P1, Recursos P2, Oferta P3), a 6-step diagnostic flow persisted to Firestore via anonymous auth, full responsive design across 6 viewport classes (xs–2xl), an adaptive blueprint with 3 toggles (locale/theme/audience), and a 13-page shell scaffold. The site consumes Firebase BaaS read-only for published content and write-only (append-only) for `leads/` and `diagnostics/`. No server-side runtime. Constitution v7.0.0 governs all decisions.

## Technical Context

**Language/Version**: JavaScript ES2022+ (vanilla, no transpiler), CSS3 with Custom Properties, HTML5
**Primary Dependencies**: Firebase JS SDK v10 (already in tree: `js/cms/firebase-config.js`), Tailwind CSS (prebuilt `dist/output.css`), Lucide Icons (via `js/icons.js`), Web Components API (native)
**Storage**: Firestore (reads: `programs/`, `resources/`, `testimonials/`; writes: `leads/{uid}`, `diagnostics/{uid}`), IndexedDB (SWR cache via `js/cms/cache-manager.js`), localStorage (`mdg_theme`, `mdg_locale`, `mdg_audience`, diagnostic progress)
**Testing**: Vitest (unit), Firebase Emulator Suite (integration/security rules), Playwright (E2E/visual/a11y)
**Target Platform**: Modern evergreen browsers — Chrome 110+, Safari 15+, Firefox 110+, Edge 110+, iOS Safari 15+, Chrome Android 110+
**Project Type**: Static web — single-project structure, no monorepo
**Performance Goals**: LCP ≤2.5s on 4G / ≤1.5s desktop, TBT <200ms, CLS <0.1, INP <200ms, toggle transitions <100ms, Lighthouse ≥90 all categories
**Constraints**: <250 KB initial (HTML + critical CSS), <800 KB total, zero server runtime (Constitution I), zero new dependencies (NFR-001, C-002), Hostinger shared hosting with CDN
**Scale/Scope**: 13 pages, 2 locales (ES/EN), 2 audiences (persona/empresa), <10K daily visitors, 1 human + AI agents team

## Constitution Check (Pre-Design)

*GATE: All 23 principles validated. No violations found.*

| Principle | Status | Notes |
|---|---|---|
| I. BaaS-First, Zero Server | PASS | Firebase-only backend; zero server runtime [CODE] |
| II. Accessibility-First | PASS | WCAG 2.1 AA, keyboard nav, ARIA, skip-link (FR-061..FR-065) [DOC] |
| III. SEO Integrity | PASS | Meta tags, sitemap, canonical URLs, 301 redirects (US-7) [DOC] |
| IV. Component Consistency | PASS | Web Components (SiteHeader, SiteFooter), design tokens, `data-i18n` contract [CODE] |
| V. Brand Separation | PASS | MetodologIA only; no Sofka/JM Labs in public content [DOC] |
| VI. Cloud-First + Static Fallback | PASS | Dual-source bridge permanent; `migration-bridge.js` + static dictionaries [CODE] |
| VII. Secure by Default | PASS | Security rules per contract; App Check on PII writes; input sanitization [DOC] |
| VIII. SWR + Explicit Offline UX | PASS | Offline/syncing/fallback pills, `aria-live`, Playwright test (FR-097..FR-099) [DOC] |
| IX. TDD | PASS | ATDD outer + TDD inner; 85% weighted coverage (NFR-007..NFR-008) [DOC] |
| X. Design System Governance | PASS | Neo-Swiss Light/Dark, canonical tokens from `estilos/variables.css` (FR-040..FR-045) [DOC] |
| XI. Brand Voice Integrity | PASS | Minto pyramid, red-list terms, voice audit per audience (FR-046) [DOC] |
| XII. Code Sustainability | PASS | Business-readable names, README per dir, no dead code [DOC] |
| XIII. Think First | PASS | Spec → Plan → Tasks → Tests → Code pipeline enforced [DOC] |
| XIV. Simple First | PASS | No premature abstractions; hand-authored critical CSS over tooling (R5) [DOC] |
| XV. BDD Full-Spectrum | PASS | Multi-angle scenarios (UX, security, perf, a11y, brand, data) per US [DOC] |
| XVI. Sequential-First | PASS | Sequential default; WIP ≤3; branch-per-task [DOC] |
| XVII. Continuous Learning | PASS | Research decisions archived; insights from Socratic debates [DOC] |
| XVIII. Indexable Repo | PASS | README per new directory; sitemap governance [DOC] |
| XIX. Bug Protocol | N/A | No bugs in scope |
| XX. Branch-to-Environment Parity | PASS | feature → staging → main → production (C-005) [DOC] |
| XXI. Zero Hardcoding | PASS | Tokens in CSS vars; content in dictionaries/Firestore; config in env [DOC] |
| XXII. PII-Append-Only | PASS | `leads/` and `diagnostics/` append-only; dedup deferred to 010 (FR-017) [DOC] |
| XXIII. Feature-Bounded Architecture | PASS | Collections table in spec §4.4; backoffice scoped to 010 [DOC] |

## Project Structure

### Documentation (this feature)

```text
specs/009-home-landing-sales/
  spec.md                  # Feature specification (v7 consolidated)
  plan.md                  # This file (v4)
  research.md              # Phase 0: 13 resolved technical decisions
  data-model.md            # Phase 1: read/write entities for 009 scope
  quickstart.md            # Phase 1: manual + automated validation guide
  contracts/
    diagnostic-logic.json  # Diagnostic scoring contract (§4.5)
    analytics-events.md    # Firebase Analytics event catalog (FR-070..072)
    firestore-rules.md     # Security rules contract (per-collection)
  adaptive-blueprint.md    # 3-axis toggle system + page shell spec
  sitemap.md               # 13-page IA + redirects + nav structure
  robustness-v1.md         # TDD/ATDD/coverage/flows contract
  backcasting.md           # FR→US→SC→Constitution traceability
  checklists/              # Pre-merge checklists
  tasks.md                 # Phase 5 output (NOT created by /iikit-02-plan)
```

### Source Code (repository root)

```text
# ── Pages (13 canonical) ──────────────────────────────────────
index.html                          # Home v2 landing (primary deliverable)
diagnostico/index.html              # 6-step diagnostic flow
empresas/index.html                 # B2B hub (existing, shell upgrade)
personas/index.html                 # B2C hub (existing, shell upgrade)
programas/index.html                # Programs listing (?slug= detail)
recursos/index.html                 # Resource catalog (existing, shell upgrade)
metodo/index.html                   # Methodology page (shell)
casos/index.html                    # Case studies (shell)
nosotros/index.html                 # About (shell)
insights/index.html                 # Insights (?slug= detail, shell)
contacto/index.html                 # Contact form (shell)
legal/index.html                    # Legal / privacy (shell)
404.html                            # Not found (shell)

# ── JavaScript modules (new for 009) ──────────────────────────
js/diagnostic/
  logic.js                          # Pure scoring + threshold logic
  state.js                          # localStorage state machine
  controller.js                     # DOM orchestration + Firestore write
js/audience/
  state.js                          # AudienceState management
  controller.js                     # Toggle + slot hydration
js/analytics/
  events.js                         # Typed event emitter (consent-gated)
  consent.js                        # Cookie banner + mdg_consent logic
js/theme/
  toggle.js                         # Theme switch + persistence
js/state/
  bus.js                            # Lightweight event bus (pub/sub)
js/blueprint/
  shell.js                          # Common page shell bootstrap
  slot-resolver.js                  # ContentSlot → DOM hydration
js/redirects/
  legacy-router.js                  # 301 legacy URL resolution

# ── JavaScript modules (existing, consumed) ───────────────────
js/cms/
  firebase-config.js                # Firebase init
  content-service.js                # Firestore reads
  cache-manager.js                  # IndexedDB SWR
  migration-bridge.js               # Dual-source (Firestore ↔ static)
  auth-service.js                   # Anonymous auth + claims
  init.js                           # Bootstrap
  admin-api.js                      # (not used in 009 — read-only)
js/i18n/
  i18n.js                           # i18n module
  dictionaries/
    home.json                       # NEW: home page content slots (ES/EN × persona/empresa)
    common.json                     # Shared keys (nav, footer, toggles)
    diagnostico.json                # NEW: diagnostic flow copy
    {pageSlug}.json                 # Per-page dictionaries
js/icons.js                         # Lucide icon loader
js/modal-system.js                  # Modal for resource premium gate

# ── Web Components ────────────────────────────────────────────
components/
  SiteHeader.js                     # MODIFIED: add 3 toggles + offline pills
  SiteFooter.js                     # MODIFIED: 12-page link list
  DiagnosticStepper.js              # NEW: 6-step wizard component
  OfflinePill.js                    # NEW: cache state indicator
  ConsentBanner.js                  # NEW: LGPD analytics consent
  ProgramCard.js                    # NEW: program listing card

# ── Styles ────────────────────────────────────────────────────
estilos/
  variables.css                     # MODIFIED: add Neo-Swiss Light/Dark tokens (Constitution X)
  critical.css                      # NEW: hand-authored fold CSS (FR-092, FR-096)
  home.css                          # MODIFIED: home v2 layout
  diagnostic.css                    # NEW: stepper + result screen
  blueprint.css                     # NEW: shared page shell layout
  components.css                    # MODIFIED: new component styles

# ── Firebase ──────────────────────────────────────────────────
firebase/
  firestore.rules                   # MODIFIED: add leads/ + diagnostics/ rules
  firestore.indexes.json            # MODIFIED: add composite indexes

# ── Scripts ───────────────────────────────────────────────────
scripts/
  seed.js                           # NEW: idempotent seeder (programs, resources, testimonials)
  generate-sitemap-xml.js           # NEW: 12-URL sitemap generator
  count-pages.js                    # NEW: 13-page constraint enforcer (pre-commit)

# ── Tests ─────────────────────────────────────────────────────
tests/
  unit/
    diagnostic-logic.spec.js        # Pure scoring (100% coverage)
    diagnostic-state.spec.js        # localStorage state machine
    analytics-events.spec.js        # Consent gating, envelope, PII rules
    theme-toggle.spec.js            # Theme persistence + fallback
    audience-state.spec.js          # AudienceState provenance chain
    bus.spec.js                     # Event bus (100% coverage)
    slot-resolver.spec.js           # ContentSlot fallback cascade
  integration/
    security-rules.spec.js          # Emulator: leads/ + diagnostics/ CRUD
    home-firestore.spec.js          # Emulator: SWR + append-only
  e2e/
    home-fold.spec.js               # Responsive fold: CTA visible in 6 viewports
    home-a11y.spec.js               # axe-core audit + keyboard tab order
    home-critical-css.spec.js       # First paint without FOUC
    home-i18n.spec.js               # ES↔EN switch, zero raw keys
    home-offline-pill.spec.js       # Firestore stub → pill appears
    diagnostic-flow.spec.js         # 6-step happy path + result
    adaptive-blueprint.spec.js      # 52-combo matrix (13 pages × 2 locale × 2 audience)
    sitemap-redirects.spec.js       # Legacy URL 301s + sitemap.xml validation
  features/
    us-1-diagnostic.feature         # ATDD scenarios from spec
    us-2-resources.feature
    us-3-oferta.feature
    us-4-neoswiss.feature
    us-5-responsive.feature
    us-6-blueprint.feature
    us-7-sitemap.feature
```

**Structure Decision**: Single-project flat structure extending the existing repo layout. No monorepo, no bundler. New JS modules organized by domain concern (`diagnostic/`, `audience/`, `analytics/`, `theme/`, `state/`, `blueprint/`) following Constitution XII (business-readable). Tests follow the existing `tests/` hierarchy with unit/integration/e2e/features separation per NFR-007..NFR-013.

## Architecture

### System overview (009 scope only)

```
┌────────────────────────────────────────────────────────────────────┐
│                    Visitor Browser (client)                        │
│                                                                    │
│  ┌──────────┐  ┌──────────────┐  ┌────────────┐  ┌────────────┐  │
│  │ 13 HTML  │  │ JS Modules   │  │ Web        │  │ CSS        │  │
│  │ Pages    │──│ (diagnostic, │──│ Components │──│ (tokens +  │  │
│  │ (shell)  │  │  audience,   │  │ (Header,   │  │  critical + │  │
│  │          │  │  analytics,  │  │  Footer,   │  │  Tailwind)  │  │
│  │          │  │  theme, i18n,│  │  Stepper,  │  │            │  │
│  │          │  │  blueprint)  │  │  Pill, …)  │  │            │  │
│  └──────────┘  └──────┬───────┘  └────────────┘  └────────────┘  │
│                       │                                            │
│           ┌───────────┴──────────┐                                │
│           │ js/cms/ SDK          │                                │
│           │ (content-service,    │                                │
│           │  cache-manager,      │                                │
│           │  migration-bridge,   │                                │
│           │  auth-service)       │                                │
│           └───────────┬──────────┘                                │
│                       │                                            │
│           ┌───────────┴──────────┐                                │
│           │ IndexedDB (SWR)      │                                │
│           └──────────────────────┘                                │
└───────────────────────┬────────────────────────────────────────────┘
                        │ HTTPS (Firebase SDK)
                        ▼
┌────────────────────────────────────────────────────────────────────┐
│                    Firebase BaaS (Google)                          │
│                                                                    │
│  ┌───────────┐  ┌──────┐  ┌─────────┐  ┌───────────┐  ┌───────┐ │
│  │ Firestore │  │ Auth │  │ Storage │  │ Analytics │  │ App   │ │
│  │ (7 colls) │  │(anon)│  │ (assets)│  │ (events)  │  │ Check │ │
│  └───────────┘  └──────┘  └─────────┘  └───────────┘  └───────┘ │
└────────────────────────────────────────────────────────────────────┘
                        │
                        │ git pull SSH (:65002)
                        ▼
┌────────────────────────────────────────────────────────────────────┐
│          Hostinger (static hosting + CDN + SSL)                    │
│          /public_html/ ← main branch                              │
└────────────────────────────────────────────────────────────────────┘
```

### Node classifications (for dashboard)

| Node | Classification |
|---|---|
| Visitor Browser | client |
| 13 HTML Pages | client |
| JS Modules | client |
| Web Components | client |
| CSS | client |
| js/cms/ SDK | client |
| IndexedDB | storage |
| Firestore | storage |
| Firebase Auth | external |
| Firebase Storage | external |
| Firebase Analytics | external |
| App Check | external |
| Hostinger | external |

### Data flow — Read path (content)

1. Page loads → `shell.js` bootstraps toggles (locale, theme, audience) from localStorage/URL
2. `slot-resolver.js` resolves content from `js/i18n/dictionaries/{pageSlug}.json` (static fallback)
3. `migration-bridge.js` checks if Firestore is available + feature flag `cms-i18n` ON
4. If Firestore reachable: `content-service.js` → `cache-manager.js` (IndexedDB SWR) → Firestore
5. Offline pill reflects cache state (fresh/stale/syncing/fallback) via `OfflinePill.js`

### Data flow — Write path (diagnostic → lead)

1. User starts diagnostic → `diagnostic/state.js` saves progress to localStorage
2. User completes step 6 (PII) → `auth-service.js` signs in anonymously
3. `diagnostic/controller.js` builds `diagnostic` + `lead` docs per data-model contract
4. App Check token attached → Firestore create (`diagnostics/{uid}`, `leads/{uid}`)
5. Security rules validate: uid match, append-only, field constraints
6. `analytics/events.js` fires `diagnostic_completed` (if consent)
7. `mdg_returning` cookie set (SHA-256 of email)

### Key design decisions (from research.md)

| # | Decision | Constitutional anchor |
|---|---|---|
| R1 | Neo-Swiss Light default, Dark mirror opt-in | X Design System |
| R2 | Firebase BaaS + Hostinger static, zero server | I BaaS-First |
| R3 | Append-only PII, dedup deferred to 010 | XXII PII-Append-Only |
| R4 | 009 read-only CMS; backoffice = 010 | XXIII Feature-Bounded |
| R5 | Hand-authored critical CSS, no extraction tool | XIV Simple First |
| R6 | Two-tier consent (Analytics banner + PII checkbox) | VII Secure, VIII SWR |
| R7 | 6 breakpoints, mobile-first, clamp() typography | II Accessibility |
| R8 | Firebase Analytics only, no new vendor | XIV Simple First |
| R9 | Unit/integration/E2E pyramid, no overlap | IX TDD, XV BDD |
| R10 | Exactly 13 pages, closed set | XXIII Feature-Bounded |
| R11 | Shell-first delivery; deep content = home + diagnostic only | XIV Simple First |
| R12 | Client-side slug routing, top-5 pre-rendered | XIV Simple First |
| R13 | Full robustness contract (ATDD + 85% + 10 flows) | IX TDD, XV BDD |

## Scope Boundary

### In scope (009)

- Home page redesign (`index.html`) — full Neo-Swiss Light + 3 CTAs
- Diagnostic flow (`diagnostico/index.html`) — 6-step wizard + Firestore persist
- 13-page shell scaffold (consistent header/footer/toggles/blueprint)
- Adaptive blueprint (locale/theme/audience toggles)
- Design tokens in `estilos/variables.css` (Light default + Dark mirror)
- Security rules for `leads/`, `diagnostics/`, `programs/`, `resources/`, `testimonials/`
- Seed script (`scripts/seed.js`) for initial content
- Sitemap.xml generator + legacy redirect router
- Analytics event catalog (consent-gated)
- Consent banner (LGPD-light)
- Offline/syncing/fallback pills
- Full test suite (unit + integration + E2E + BDD features)

### Out of scope (deferred)

- **Feature 010**: Backoffice CMS (FR-100..FR-120), schema-driven admin, block editor, versioning, audit log, publish workflow, feature flags UI, experiments, i18n from Firestore
- **Feature 011+**: Deep content for 11 non-home pages, rich-text editing, asset pipeline
- Email marketing integrations, A/B experiment launches, Service Worker/PWA, new locales

## Testing Strategy

### Pyramid allocation (per R9 + NFR-007..NFR-013)

| Level | Runner | Scope | Coverage target |
|---|---|---|---|
| **Unit** | Vitest | Pure modules: `diagnostic/logic.js`, `state/bus.js` (100%); Logic modules: `audience/state.js`, `analytics/events.js`, `theme/toggle.js`, `i18n/resolver.js` (≥95%); Controllers (≥80%); Web Components (≥70%) | Global ≥85% lines, ≥80% branches |
| **Integration** | Vitest + Firebase Emulator | Security rules (positive + negative), SWR behavior, append-only invariants | Rules: 100% of contract |
| **E2E** | Playwright | Responsive fold (6 viewports), a11y (axe-core), critical CSS, i18n, offline pill, diagnostic flow, adaptive blueprint (52 combos), sitemap/redirects | 8 spec files, <3 min wall time |
| **BDD** | Cucumber/Playwright | `.feature` per US (7 files), hash-locked, traceability headers | ≥1 scenario per spec acceptance scenario |

### Test execution

```bash
# Unit + integration
npx vitest run

# E2E (requires dev server + emulator)
npx playwright test

# Coverage report
npx vitest run --coverage
```

## Quality Gates (Constitution §Quality Gates)

| Gate | Criteria for 009 | Enforced by |
|---|---|---|
| **G0** | Secrets scan clean, branch `009-home-landing-sales` from staging, constitution v7 compliance | Pre-commit hook |
| **G1** | Spec complete (45+ FRs, 19 SCs, 7 US with GWT), evidence tags, no `[NEEDS CLARIFICATION]` | `/iikit-01-specify` |
| **G2** | Data model (v3), API contracts (3 files), security rules, BDD hash-locked, tokens referenced, role governance | This plan (`/iikit-02-plan`) |
| **G3** | Tests pass, Lighthouse ≥90 (4 cats), emulator tests, a11y audit, brand scan clean, 85% coverage | Pre-merge CI |

## Risk Mitigations (plan-level)

| Risk | Mitigation |
|---|---|
| R-01 Header/footer theme mismatch | Home uses `body[data-theme]` scope; full header light-mode = feature 010 |
| R-03 Font LCP on 3G | `font-display: swap` + preconnect; self-host fonts in phase 2 |
| R-04 No GA4 baseline | T-000 task captures baseline before implementation begins |
| R-05 Visual drift home ↔ cartillas | Single source of truth in `estilos/variables.css` |
| R-09 Duplicate leads | Accepted in 009; reconciliation = 010; dashboard filters by most-recent |

## Complexity Tracking

> No Constitution violations requiring justification. All decisions follow Simple First (XIV).

| Decision | Why simple | Simpler alternative considered |
|---|---|---|
| 6 breakpoints | LatAm device matrix demands it (R7) | Fewer breakpoints → broken landscape mobile |
| Separate `js/diagnostic/` module tree | Single file would exceed 500 LOC, violating XII | Inline in controller → unmaintainable |
| Web Component for DiagnosticStepper | Encapsulates 6-step state machine; reusable | Vanilla DOM manipulation → scattered state |
