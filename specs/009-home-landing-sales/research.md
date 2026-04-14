# Research — 009-home-landing-sales

**Status**: All technical unknowns resolved during Socratic refinement (spec v1→v5, sessions 2026-04-14). This file archives the decisions as Phase 0 research output.

## R1. Light vs Dark default

- **Decision**: Neo-Swiss Light default, Dark mirror opt-in (persisted `mdg_theme` + `prefers-color-scheme`).
- **Rationale**: The premium cartillas and playbooks in `workspace/2026-04-10-site-reconstruction/inputs` all ship Light as canonical. Landing sales context favors trust/clarity; dark is secondary.
- **Alternatives considered**: (a) Dark default + light toggle — rejected, diverges from cartilla system; (b) Follow system only — rejected, loses user control and A/B consistency.
- **Source**: spec §1.2.

## R2. Backend topology

- **Decision**: Firebase BaaS + Hostinger static (BFF-light = smart client). Zero server-side runtime.
- **Rationale**: Constitution I + NFR-001. Keeps ops simple (git pull SSH), leverages existing `js/cms/` SDK already in tree, and every previous feature (001..008) already uses Firebase. Introducing a server (Node/Cloud Functions) would contradict XII Sustainability and XIV Simple First.
- **Alternatives considered**: (a) Cloud Functions for writes — rejected, App Check + security rules are sufficient; (b) Next.js SSR — rejected, violates I and XIV; (c) Pure static without Firebase — rejected, breaks diagnóstico persistence (FR-013).
- **Source**: spec §9.1, §12 (v3 session).

## R3. Diagnostic persistence and dedup

- **Decision**: Append-only `leads/{uid}` and `diagnostics/{uid}` under anonymous Firebase Auth. No client-side merge across emails. Dedup deferred to a backoffice admin flow in feature 010.
- **Rationale**: Constitution XXII (PII-Append-Only). Anonymous uids are device-scoped; security rules can only validate `request.auth.uid` reliably. Email-hash dedup at write time would require server logic we explicitly refuse (I, XIV).
- **Alternatives considered**: (a) Query-before-write in client — rejected, race condition + security-rules complexity; (b) Cloud Function on write — rejected, violates BaaS-only posture.
- **Source**: spec §4.1 FR-017, §12 (v5 session).

## R4. CMS scope split

- **Decision**: 009 consumes `js/cms/` **read-only**. The full backoffice (FR-100..FR-120) is moved to feature 010. Flag `cms-i18n` stays OFF; i18n served from `js/i18n/dictionaries/*.json`.
- **Rationale**: Feature-Bounded Architecture (Constitution XXIII). US-1..US-5 deliver value independent of the backoffice. Bundling them would explode tasks beyond sprint size and couple release risk.
- **Alternatives considered**: Keep CMS in 009 — rejected, spec size would exceed phase discipline; Split diagnóstico too — rejected, it *is* the primary CTA.
- **Source**: spec §12 (v4 clarification Q1).

## R5. Critical CSS strategy

- **Decision**: Hand-authored `estilos/critical.css` inlined in `<head>`; `dist/output.css` loaded non-blocking via `media="print"` + `onload` swap. No extraction tool.
- **Rationale**: Introducing a build step to extract critical CSS (e.g., Critters, Penthouse) adds a dependency chain that violates XII. The fold is small and stable (hero + primary CTA + typography); hand-authoring is cheaper than tooling and auditable by humans.
- **Alternatives considered**: Critters postbuild — rejected, deps; Full CSS inline — rejected, bundle size hit; PurgeCSS-only — rejected, doesn't solve render blocking.
- **Source**: spec §4.1 FR-092, FR-096.

## R6. Two-tier consent model

- **Decision**: Analytics consent via cookie banner (`mdg_consent`); PII consent via explicit checkbox at diagnostic step 6 (`FR-012`). Independent gates.
- **Rationale**: Analytics is non-essential and must be gated by an opt-in banner (FR-072). But `leads/` + `diagnostics/` writes are *necessary to deliver* the personalized result to the user — they run on the explicit checkbox regardless of the Analytics banner. This is LGPD/GDPR-compatible (legitimate service delivery) while avoiding consent dark patterns.
- **Alternatives considered**: Single banner gating everything — rejected, would block diagnostic delivery; Always-on analytics — rejected, violates FR-072.
- **Source**: spec §4.1 FR-072.

## R7. Responsive breakpoint set

- **Decision**: `xs 360 / sm 390 / md 768 / lg 1024 / xl 1280 / 2xl 1536`, mobile-first, `clamp()` typography, `env(safe-area-inset-*)` on iOS.
- **Rationale**: Covers the real device matrix in LatAm (most Android low-end is 360–390; iPhone SE/Mini at 390; tablets at 768; laptops at 1024; desktops at 1280+). Matches Tailwind defaults except adding `xs 360`.
- **Alternatives considered**: Desktop-first — rejected, 68% of LatAm traffic is mobile; Fewer breakpoints — rejected, landscape mobile (844×390) needs its own fold check.
- **Source**: spec §1.4.

## R8. Analytics vendor

- **Decision**: Firebase Analytics (primary) + optional GA4 passthrough. No Mixpanel, no PostHog.
- **Rationale**: Already wired via Firebase SDK; no extra dep. GA4 can be layered via the same config without a second script tag.
- **Alternatives considered**: PostHog self-host — rejected, needs server; Plausible — rejected, adds a dep and vendor.
- **Source**: spec §1.6.

## R9. Testing pyramid allocation

- **Decision**:
  - **Unit (Vitest)**: `diagnostic/logic.js`, `diagnostic/state.js`, `analytics/events.js`, `theme/toggle.js` — pure modules, no DOM.
  - **Integration (Firebase emulator + Vitest)**: `home-firestore.spec.js` (SWR + append-only), `security-rules.spec.js`.
  - **E2E (Playwright)**: responsive fold, critical CSS, i18n switch, offline pill, axe a11y audit, diagnostic 6-step happy path.
- **Rationale**: TDD (Constitution IX) for pure logic; rules tests require the emulator by construction; visual and a11y contracts must run against real browsers. Avoid overlap — each level tests what the one below cannot.
- **Source**: Constitution IX + XV.

## Tessl Tiles

No tiles installed in Phase 02. Stack is vanilla + Firebase; Tessl tile registry applies primarily to framework-based scaffolds (React, Next, Supabase). Revisit during `/iikit-03-checklist` if a Firebase-rules tile or Playwright-a11y tile becomes relevant. **Eval scores**: not applicable.

## Open items

None. All unknowns resolved in spec sessions v1..v5.
