# Implementation Plan: Home como Landing Vendedora (3 CTAs Primarios)

**Branch**: `009-home-landing-sales` | **Date**: 2026-04-14 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/009-home-landing-sales/spec.md`
**Constitution**: v7.0.0 (Cloud-First Content-as-Data) — hard gate enforced

## Summary

Reemplazar el home dark-startup actual por una landing vendedora Neo-Swiss Light con pirámide de intención (CTA primario dominante: diagnóstico; secundarios: recursos, oferta educativa), 100% responsive xs→2xl, cumpliendo WCAG 2.1 AA, con stack static-first HTML/CSS/Vanilla JS + Web Components + Firebase BaaS consumido desde cliente (SWR + offline pills + static fallback). Todo el contenido CMS se consume read-only desde `js/cms/` existente; la única escritura es append-only a `leads/{uid}` y `diagnostics/{uid}` bajo Firebase Auth anónimo + App Check. El backoffice completo (FR-100..FR-120) queda fuera de scope — feature 010.

**Enfoque técnico**: reutilizar el SDK CMS existente (`js/cms/*`), los Web Components `SiteHeader`/`SiteFooter`, el módulo `js/i18n/` y el pipeline Tailwind prebuilt (`dist/output.css`). Añadir 3 Web Components nuevos (`ThemeToggle`, `DiagnosticStepper`, `BlockRenderer`), un `estilos/critical.css` hand-authored, un `scripts/seed.js` para `programs/`/`resources/`/`testimonials/`, y `estilos/home-v2.css` que redefine tokens Neo-Swiss Light + dark mirror. El diagnóstico implementa la tabla declarativa de spec §4.5 en un módulo puro `js/diagnostic/logic.js` que los `.feature` scenarios pueden ejercitar sin DOM.

## Technical Context

**Language/Version**: HTML5 + CSS3 (custom properties + Tailwind 3.x prebuilt) + Vanilla JavaScript ES2022 modules + Web Components v1
**Primary Dependencies**: Firebase JS SDK v10 (Firestore, Auth, Storage, Analytics, App Check), existente `js/cms/` SDK, existente `js/i18n/`, `idb` 8.x (wrapper IndexedDB, ya en árbol), Lucide icons (existente `js/icons.js`)
**Storage**: Firestore (read: `programs`, `resources`, `testimonials`, `pages/home` opcional; write append-only: `leads/{uid}`, `diagnostics/{uid}`). `localStorage` para tema + diagnóstico en curso (TTL 24h). IndexedDB vía `cache-manager.js` para SWR con TTL 7d. Cookie `mdg_returning` (SHA-256 email, 180d). Cookie `mdg_consent` (analytics opt-in).
**Testing**: Vitest (unit, módulos puros: `diagnostic/logic.js`, i18n helpers, scoring), Playwright (e2e: responsive, offline pill, i18n switch, critical CSS fold, contrast audit, diagnóstico end-to-end con Firestore emulator), Firebase Emulator Suite (integration: rules + auth anon + append-only)
**Target Platform**: Navegadores evergreen — Chrome 110+, Safari 15+, Firefox 110+, Edge 110+, iOS Safari 15+, Chrome Android 110+. Hosting estático Hostinger VPS (git pull SSH :65002) + Cloudflare CDN.
**Project Type**: Static web (single project, mobile-first, SSR=none)
**Performance Goals**: LCP ≤2.5s en 4G Fast / ≤1.5s en cable, TBT <200ms, CLS <0.1, INP <200ms, bundle inicial (HTML + critical CSS inline) <250 KB, total con lazy <800 KB
**Constraints**: Zero server-side runtime (NFR-001). Cero hardcoding (Constitution XXI). Append-only PII (Constitution XXII). Feature-bounded: CMS backoffice out (Constitution XXIII). Reusar assets existentes (FR-095). Degradación sin JS funcional (FR-063).
**Scale/Scope**: ~8 secciones del home + flujo diagnóstico 6 pasos + re-theming del header/footer globales + seed de 3 colecciones (~30 docs). Audiencia: tráfico público LatAm (ES primario, EN secundario). <5k sessions/día baseline.

## Constitution Check

*GATE: Hard check (Constitution v7.0.0) — debe pasar antes de Phase 0 research y re-verificar tras Phase 1 design.*

| Principio | Cumplimiento en esta feature | Evidencia |
|---|---|---|
| I. BaaS-First, Zero Server | ✅ Firebase único backend; sin proxy/server propio | NFR-001, FR-013, spec §9.1 |
| II. Accessibility-First | ✅ WCAG 2.1 AA declarativo; focus order; reduced-motion; srcset | FR-061..FR-065 |
| III. SEO Integrity | ✅ HTML estático navegable sin JS; metadata dinámica via `pages/home` con fallback; canonical | FR-063, spec §11.3 |
| IV. Component Consistency | ✅ Reuso `SiteHeader`/`SiteFooter`; nuevos WC siguen naming | FR-095, plan componentes |
| V. Brand Separation | ✅ Sólo brand MetodologIA en outputs y assets | N/A (single brand site) |
| VI. Cloud-First + Static Fallback | ✅ Dual-source via `migration-bridge.js`; static fallback en `index.html` + `js/i18n/dictionaries/*` | FR-015, spec §9.1, §11.3 |
| VII. Secure by Default | ✅ App Check sobre writes PII; anonymous auth; security rules append-only | FR-015, NFR-005, NFR-006 |
| VIII. SWR + Offline UX | ✅ `cache-manager.js` SWR + pills (`offline`/`syncing`/`fallback`) con `aria-live` | FR-097..FR-099 |
| IX. TDD | ✅ Testify antes de tasks; `diagnostic/logic.js` TDD-first, scenarios desde spec §4.5 | plan phase ordering |
| X. Design System Governance | ✅ Sólo tokens CSS custom properties, idénticos a cartillas; `estilos/variables.css` extendido | FR-040..FR-045 |
| XI. Brand Voice | ✅ Copy ES/EN revisado vs tone guide MetodologIA | FR-060, US-1..US-5 |
| XII. Sustainability | ✅ Cero deps nuevas; reuso `dist/output.css` y módulos existentes | FR-095 |
| XIII. Think First | ✅ Spec v5 socráticamente refinada; phase discipline | spec §1, §12 |
| XIV. Simple First | ✅ Vanilla JS + WC, sin framework, sin server | NFR-001 |
| XV. BDD Full-Spectrum | ✅ `.feature` files per US-1..US-5 en phase 04-testify | deferred to 04 |
| XVI. Sequential-First | ✅ Spec→plan→checklist→testify→tasks→analyze→implement | IIKit pipeline |
| XVII. Continuous Learning | ✅ `insights/` pattern reuse (socratic, dual-source) | spec §1 ref |
| XVIII. Indexable Repo | ✅ Sin nuevos top-level dirs; todo bajo `estilos/`, `js/`, `components/`, `specs/`, `tests/` | plan estructura |
| XIX. User-Reported Bug Protocol | N/A (new feature) | — |
| XX. Branch-to-Env Parity | ✅ `feature/009-home-landing-sales` from `staging` → PR staging → PR main → SSH | CLAUDE.md branching |
| XXI. Zero Hardcoding | ✅ Tokens CSS + i18n dictionaries + `js/cms/` + tabla diagnóstico en Firestore o JSON bundled | FR-040, FR-060, spec §4.5 |
| XXII. PII-Append-Only | ✅ `leads/`, `diagnostics/` append-only bajo anonymous uid; sin client-side merge | FR-017, spec §9.6 |
| XXIII. Feature-Bounded | ✅ Backoffice CMS fuera (→010); 009 solo consume read-only + escribe propias colecciones | FR-100..FR-120 movidos |

**Resultado del gate**: ✅ **PASS** — sin violaciones. No se requiere Complexity Tracking.

## Project Structure

### Documentation (this feature)

```text
specs/009-home-landing-sales/
├── spec.md              # Feature specification (v5 — locked pre-plan)
├── plan.md              # This file
├── research.md          # Phase 0 output — decisiones ya baked-in desde spec v1..v5
├── data-model.md        # Phase 1 output — entidades leídas/escritas por 009
├── quickstart.md        # Phase 1 output — escenarios manuales + E2E
├── contracts/
│   ├── firestore-rules.md        # Reglas append-only + public-read por colección
│   ├── analytics-events.md       # Schema tipado de FR-070..FR-072
│   └── diagnostic-logic.json     # Tabla declarativa FR §4.5 machine-readable
├── checklists/          # Phase 03 — pendiente
└── tasks.md             # Phase 05 — NO creado por /iikit-02-plan
```

### Source Code (repository root)

Reuso máximo del árbol existente; nuevos archivos marcados con `+`, modificados con `~`.

```text
index.html                          ~ reescrito: hero Neo-Swiss Light, 5 secciones, critical CSS inline
estilos/
├── variables.css                   ~ tokens Neo-Swiss Light default + dark mirror alineados a cartillas
├── base.css                        ~ resets mobile-first, clamp() typography, safe-area insets
├── home.css                        ~ layout del home v2 (hero, programas, prueba social, cierre)
├── components.css                  ~ CTAs, cards, sections, pills offline
└── critical.css                    + hand-authored above-the-fold (tokens + hero + CTA primario + tipografía)

components/
├── SiteHeader.js                   ~ theme toggle integrado, nav ES/EN, respeta tokens nuevos
├── SiteFooter.js                   ~ links + cierre CTAs responsivos
├── ThemeToggle.js                  + WC persiste mdg_theme, respeta prefers-color-scheme
├── DiagnosticStepper.js            + WC 6 pasos + progress bar + a11y focus trap
├── BlockRenderer.js                + WC opcional para hidratar pages/home blocks desde Firestore
└── OfflinePill.js                  + WC aria-live para estados offline/syncing/fallback (FR-097)

js/
├── cms/                            (existente, sin cambios estructurales)
│   ├── init.js                     ~ bootstrap adaptado al home v2 (flags + analytics consent)
│   ├── content-service.js          (reuso — SWR read)
│   ├── cache-manager.js            (reuso — IndexedDB)
│   ├── auth-service.js             ~ expone signInAnon() para diagnóstico
│   ├── admin-api.js                (reuso — write append-only leads/diagnostics)
│   └── migration-bridge.js         (reuso — dual-source read path)
├── diagnostic/
│   ├── logic.js                    + módulo puro: scoring, thresholds, recomendación i18n (desde §4.5)
│   ├── state.js                    + persistencia localStorage TTL 24h + reanudación
│   └── render.js                   + glue DOM para DiagnosticStepper WC
├── i18n/
│   ├── index.js                    (reuso)
│   └── dictionaries/
│       ├── home.es.json            + copy v2 ES (hero, CTAs, programas, cierre)
│       └── home.en.json            + copy v2 EN
├── analytics/
│   └── events.js                   + wrapper tipado FR-070..FR-072 + consent gating (mdg_consent)
└── theme/
    └── toggle.js                   + helper usado por ThemeToggle WC y SSR-less init

scripts/
├── seed.js                         + seed idempotente programs/ resources/ testimonials/ desde JSON manifest local
└── seed.manifest.json              + source de seed (reemplaza base.es en workspace inputs)

firebase/
├── firestore.rules                 ~ append-only para leads/ diagnostics/ + public-read programs/ resources/ testimonials/
└── firestore.indexes.json          ~ índice por (status, locale, order) para programs/resources

tests/
├── unit/
│   ├── diagnostic-logic.spec.js    + Vitest: scoring, thresholds, recomendaciones i18n
│   ├── diagnostic-state.spec.js    + Vitest: TTL localStorage + reanudar
│   ├── analytics-events.spec.js    + Vitest: gating por consent, shape payload
│   └── theme-toggle.spec.js        + Vitest: persistencia mdg_theme + prefers-color-scheme
├── integration/
│   ├── home-firestore.spec.js      + emulador: SWR path + append-only write leads/diagnostics
│   └── security-rules.spec.js      + emulador: reglas per-collection
└── e2e/
    ├── home-responsive.spec.js     + Playwright: xs/sm/md/lg/xl/2xl + landscape mobile (FR-050..FR-055)
    ├── home-critical-css.spec.js   + Playwright: first paint fold sin FOUC
    ├── home-i18n.spec.js           + Playwright: switch ES/EN, data-i18n coverage
    ├── home-offline-pill.spec.js   + Playwright: stub Firestore fail → pill <3s (FR-098)
    ├── home-a11y.spec.js           + Playwright + axe: WCAG AA fold
    └── diagnostico-end-to-end.spec.js + Playwright: 6 pasos + resultado + append-only doc
```

**Structure Decision**: Static single-project. No introducimos `src/` ni bundler — el repo permanece como sitio vanilla desplegado por `git pull`. Los módulos JS son ES2022 nativos servidos directamente. El bundler Tailwind sigue siendo la única build step (`npx tailwindcss -i estilos/tailwind.css -o dist/output.css`). Todos los tests usan el repo-root como raíz de import (Vitest y Playwright ya configurados).

## Architecture (resumen, detalle en spec §9)

- **C4 L1/L2/L3**: spec §9.2–§9.4 (Mermaid). No se duplica aquí.
- **Data model**: spec §9.5 + `data-model.md` (entidades efectivamente leídas/escritas por 009).
- **Security rules**: spec §9.6 + `contracts/firestore-rules.md`.
- **Sequence flows**: spec §10.1 (home read path) y §10.2 (diagnóstico write path) son los normativos para TDD.
- **Deployment**: spec §9.7 — sin cambios topológicos.

## Tessl Tile Discovery

Tessl se detecta instalado en el repo (`.tessl/` presente). Candidatos de tiles (consulta diferida a `/iikit-03-checklist` ya que el stack es vanilla-first y la mayoría de tiles aplican a frameworks):

| Tecnología | Tile candidato | Acción |
|---|---|---|
| Firebase Firestore rules | `tessl-labs/firebase-security-rules` (si existe) | Evaluar en checklist |
| Playwright responsive | Tessl default `playwright` tile | Reusar si disponible |
| Web Components a11y | No tile candidato | N/A |
| Tailwind prebuilt | No tile específico | N/A |

**Nota**: Dado que el repo prioriza sustentabilidad (XII) y el stack es vanilla, **no instalamos tiles en phase 02**. Se revisita en `/iikit-03-checklist` una vez el dashboard liste tiles relevantes. Sin eval scores que registrar.

## Phase 0 — Research (resolved)

Las NEEDS CLARIFICATION están resueltas en las sesiones 2026-04-14 v2..v5 del spec (§12). No quedan unknowns de tecnología; por ende `research.md` captura los trade-offs ya decididos como referencia, no como resolución pendiente. Ver `research.md`.

## Phase 1 — Design & Contracts (this run)

1. **`data-model.md`** — extrae sólo las entidades tocadas por 009 (subset de spec §4.3 y §9.5): `Programa`, `Recurso`, `Testimonial`, `Pagina (home)`, `Lead`, `Diagnostico`. Incluye estados, transiciones append-only y campos PII.
2. **`contracts/firestore-rules.md`** — versión declarativa de las reglas que irán a `firebase/firestore.rules` (read público si `status==published`; write append-only bajo `request.auth.uid` en `leads/{uid}` y `diagnostics/{uid}`).
3. **`contracts/analytics-events.md`** — payload tipado para FR-070..FR-072, con gating por `mdg_consent`.
4. **`contracts/diagnostic-logic.json`** — machine-readable de spec §4.5 (preguntas, pesos, thresholds, recomendaciones), fuente única para `js/diagnostic/logic.js` y los `.feature` scenarios.
5. **`quickstart.md`** — pasos manuales (dev local + emulator) + mapping a E2E suites.
6. **Actualizar contexto de agente** — `update-agent-context.sh claude`.

## Phase 2 — Constitution Re-check (post-design)

Tras generar data-model + contracts, re-validar contra todos los principios. Foco especial en:
- **XXI Zero Hardcoding**: confirmar que `contracts/diagnostic-logic.json` es la única fuente de la tabla (no duplicada en JS).
- **XXII PII Append-Only**: confirmar que `contracts/firestore-rules.md` prohibe `update`/`delete` sobre `leads/` y `diagnostics/`.
- **VIII SWR + Offline UX**: confirmar que `OfflinePill.js` y los escenarios en `quickstart.md` cubren los 3 estados.

## Phase Separation Validation

Auditado el plan por leakage de gobernanza:
- ❌ Sin principios nuevos (todos viven en CONSTITUTION.md)
- ❌ Sin policies transversales (e.g., "siempre usar X en todo el repo")
- ✅ Solo decisiones tácticas del alcance de 009

Auditado por leakage de spec (qué vs cómo):
- Las descripciones del plan son HOW (archivos, componentes, módulos, pipelines)
- Los FR siguen siendo la fuente del WHAT en `spec.md`

## Complexity Tracking

> Vacío — el gate constitucional pasó sin desviaciones.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| _(none)_ | — | — |
