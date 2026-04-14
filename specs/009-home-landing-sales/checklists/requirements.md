# Spec Quality Checklist — 009-home-landing-sales

## Content Quality

- [x] Spec describes **what** and **why**, not how (no frameworks, libraries, DB choices hard-coded in requirements)
- [x] Written for business stakeholders (language accessible, no low-level jargon)
- [x] No code, schemas, or API contracts inside spec
- [x] Brand governance is referenced via CONSTITUTION.md §X rather than duplicating tokens
- [x] No prices or cost figures (FTE-months only, and none stated here)

## Requirement Completeness

- [x] Every functional requirement is testable (MUST phrasing, measurable outcome)
- [x] Every user story has priority (P1/P2/P3), independent test path, and ≥2 acceptance scenarios
- [x] Edge cases enumerated (no-JS, backend down, returning visitor, UTM deep-link, i18n, a11y)
- [x] Key entities identified (Lead, Diagnóstico, Recurso, Programa Educativo, Evento)
- [x] Success criteria are measurable, technology-agnostic, user-or-business focused
- [x] No `[NEEDS CLARIFICATION]` markers remain

## Feature Readiness

- [x] MVP slice identified: User Story 1 (diagnóstico) + User Story 4 (branding Neo-Swiss) are independently shippable
- [x] P2/P3 stories (Recursos, Oferta Educativa) can be delivered incrementally without blocking P1
- [x] References to concrete brand anchors exist (cartillas en `workspace/2026-04-10-site-reconstruction/inputs/`)
- [x] Constitution §X (Design System Governance) cited as the single source of truth for visual tokens
- [x] Accessibility (WCAG 2.1 AA) and i18n (ES/EN) explicit
- [x] Analytics/conversion events defined to allow measurement against SC-001..SC-010
- [x] Phase discipline: no technology choices, no implementation schemas, no file-level architecture in spec

## Downstream Impact Preview

- [ ] `plan.md` will need to decide: diagnóstico backend (new vs reuse of existing `cotizador*` flows), where the new home replaces `index.html`, design-token delta vs current `estilos/variables.css`
- [ ] `tasks.md` will enumerate: hero + 3 CTAs, diagnostic flow, resource catalog binding, offer page binding, i18n keys, analytics wiring, a11y audit, Lighthouse gate
- [ ] `test-specs.md` will cover: happy paths per user story, no-JS degradation, returning-visitor state, UTM deep-link, i18n coverage, a11y
