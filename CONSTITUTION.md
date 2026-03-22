<!-- Sync Impact Report
Version: 3.0.0 (TDD + Design System + Brand Voice)
Modified principles:
  - None (all v2.0.0 principles preserved)
Added sections:
  - IX. Test-Driven Development
  - X. Design System Governance
  - XI. Brand Voice Integrity
  - Quality Standards: expanded for TDD, design tokens, content voice
  - Development Workflow: expanded for test-first, ATDD, design compliance
Removed sections: None
Follow-up TODOs:
  - Update plan.md test stack (Playwright for ATDD, Vitest for unit)
  - Create design-tokens.json or variables.css update with canonical palette
  - Downstream specs may need testify re-run for TDD compliance
-->

# Site MetodologIA Constitution

## Core Principles

### I. Client-Rendered, Cloud-Backed

The site is a client-rendered application backed by a managed
Backend-as-a-Service (BaaS) provider. The browser does the
rendering; the cloud stores the content.

- Pages render entirely in the browser — no server-side
  rendering framework
- Editable content (prices, descriptions, translations,
  program details) is stored in a cloud document store and
  fetched at runtime
- Static HTML provides the shell, layout, and structure;
  the cloud provides the data
- The site must function in degraded mode when the backend
  is unreachable — cached or fallback content is displayed,
  never a blank page
- No custom servers or self-managed infrastructure — only
  managed cloud services
- The build step (CSS compilation) remains a development
  convenience, not a runtime dependency

**Rationale**: Client rendering preserves the speed and
simplicity of a static site while enabling real-time content
updates from a managed backend. A BaaS provider eliminates
server operations overhead. Degraded mode ensures the site
never appears broken to visitors.

**Migration note**: During the transition period, pages may
source content from either static HTML or the cloud backend.
Both modes must coexist — a page that has not yet been
migrated to cloud content must continue working from its
embedded HTML text.

### II. Accessibility-First

Every page must be usable by people with disabilities and
meet accessibility standards.

- All interactive elements must be keyboard-navigable
- Modals must use proper ARIA attributes (role, aria-modal,
  aria-labelledby)
- Skip-to-content links on every page
- Color contrast must meet minimum accessibility thresholds
- Images must have meaningful alt text
- Admin interfaces (content editor) must also meet
  accessibility standards — not just the public site

**Rationale**: Accessibility is a legal and ethical
requirement, not a nice-to-have. An EdTech site must model
inclusive design — including its own tooling.

### III. SEO Integrity

Every public page must be discoverable and correctly
described for search engines and social platforms.

- Required meta tags: description, robots, canonical, Open
  Graph (type, url, title, description, image), Twitter Card
- Internal/admin/template pages must be marked noindex
- Sitemap must reflect actual site structure
- No duplicate or orphaned canonical URLs
- Dynamic content must be present in the DOM before search
  engine crawl timeout — content fetched from the backend
  must render within the initial page load, not behind
  user interaction

**Rationale**: Organic search is the primary acquisition
channel. Backend-sourced content must be just as crawlable
as static HTML content.

### IV. Component Consistency

Shared UI patterns must be implemented once and reused, not
duplicated across pages or between frontend and admin.

- Site-wide elements (header, footer) use web components
- Modal behavior uses a unified system, not per-page
  implementations
- No inline styles for patterns that exist in the stylesheet
- CSS follows the established token and layering system
- Backend data access must go through centralized service
  modules — no scattered inline queries across pages
- The i18n system uses a single attribute contract
  (`data-i18n`) regardless of whether translations come
  from static JSON files or from the cloud

**Rationale**: Duplication creates drift. A single source
of truth for UI patterns AND data access patterns prevents
inconsistency across 63+ pages and reduces maintenance
burden during the static-to-cloud migration.

### V. Brand Separation

MetodologIA is a distinct brand. Site content must never mix
or reference other brands.

- No references to parent companies, partner brands, or
  internal tooling names in public-facing content
- Visual identity (colors, typography, tone) must be
  consistently MetodologIA
- Program names must match the defined catalog exactly
- Admin/CMS interfaces may carry subtle "powered by" marks
  but the public-facing site is MetodologIA exclusively

**Rationale**: Brand confusion undermines trust. The site
represents MetodologIA exclusively.

### VI. Content Authority

Editable content has a single source of truth. No content
is duplicated between static files and the cloud backend.

- Each piece of editable content (price, description,
  translation, program detail) lives in exactly one place
- During migration: content authority shifts from HTML
  files to the cloud backend one section at a time — never
  both simultaneously for the same content
- Content schema must be documented and validated — no
  free-form unstructured storage
- Bilingual content (ES/EN) follows a consistent structure:
  every editable text has both language variants stored
  together
- Content changes made via the admin interface take effect
  immediately — no deployment step required

**Rationale**: Dual sources of truth create conflicts and
stale data. The CMS vision requires clear ownership of every
piece of content. The migration must be incremental to avoid
big-bang risk.

### VII. Secure by Default

Access control is enforced at the data layer, not the
application layer.

- Backend security rules enforce least-privilege access —
  public visitors read content, only authenticated
  administrators edit it
- Authentication is handled by a managed identity provider,
  not custom auth logic
- No secrets, API keys, or admin credentials in
  client-side code
- Admin operations require role-based authorization — not
  just authentication
- Security rules are version-controlled and tested before
  deployment

**Rationale**: A CMS is a write-capable system. Without
server-side enforcement, any client-side restriction can be
bypassed. Data-layer security is the last line of defense
and must be treated as such.

### VIII. Offline Resilience

The site must degrade gracefully when connectivity is
impaired.

- Client-side caching of backend content ensures the site
  works with intermittent connectivity
- Critical content (program catalog, prices, navigation)
  is cached for offline access after first visit
- Cache invalidation follows a clear strategy — stale
  content is acceptable temporarily, but updates must
  propagate within a defined window
- When backend is unreachable, the site displays the last
  known good content, not an error state

**Rationale**: The site serves users across Latin America
where connectivity varies. A backend dependency must not
make the site less reliable than the static version it
replaces.

### IX. Test-Driven Development

All production code MUST be preceded by tests. Tests define
expected behavior; code is written to satisfy those tests.

- Tests MUST be written before the production code they
  verify — red-green-refactor is the required workflow
- Acceptance Test-Driven Development (ATDD): feature-level
  behavior is specified as executable acceptance scenarios
  (Given/When/Then) before implementation begins
- End-to-end tests MUST cover critical user journeys:
  content loading, offline resilience, admin workflows,
  language switching, cotizador calculations
- Security rules MUST be tested against an emulator before
  deployment — positive and negative access scenarios
- Test assertions MUST NOT be modified to make failing
  tests pass — fix the production code instead
- Feature files (.feature) and test specifications are
  generated from requirements and hash-locked — changes
  require re-running the testify phase, not manual edits
- Tests MUST run in automation (CI or pre-commit) — manual
  test execution is not a substitute for automated gates

**Rationale**: A CMS migration touches every page on the
site. Without test-first discipline, regressions hide until
users report them. ATDD ensures acceptance criteria are
executable, not just documented. Hash-locked feature files
prevent the common failure mode of weakening tests to match
broken code.

### X. Design System Governance

The site follows a documented design system with canonical
tokens. Visual decisions are made once and enforced
everywhere — not reinvented per page.

- **Aesthetic**: Neo-Swiss Clean — flat vector illustration,
  Swiss grid (editorial order), generous whitespace,
  column-based composition, soft geometric forms, simple
  consistent iconography
- **Color palette** (exclusive, no deviations):
  Navy #122562, Gold #FFD700, Blue #137DC5, Dark #1F2833,
  Lavender #BBA0CC, Gray #808080
- **Typography hierarchy**: Poppins (headings), Trebuchet
  (body), Futura (footnotes, callouts, small UI labels)
- **Visual rules**: high legibility (large text, high
  contrast), no text on noisy backgrounds, soft shadows
  and micro-gradients (never realistic), faceless human
  figures in illustrations, UI element motifs (chips,
  checklists, timers)
- All design tokens (colors, fonts, spacing, shadows) MUST
  be defined in a single source of truth (CSS custom
  properties or a tokens file) and referenced — never
  hardcoded as raw values across pages
- New pages and components MUST use existing tokens — no
  one-off color values, font stacks, or spacing that
  diverges from the system
- Dark/light theme variants MUST both comply with the
  palette and contrast requirements

**Rationale**: 63+ pages without a governed design system
drift into visual inconsistency. Canonical tokens ensure
every page looks like the same brand. The Neo-Swiss Clean
aesthetic communicates the method-driven, professional
identity of MetodologIA without visual noise.

### XI. Brand Voice Integrity

All public-facing content follows the MetodologIA Brand
Voice v3.0 — a method-driven, evidence-based communication
standard.

- **Structure**: all substantive content uses the Minto
  pyramid — conclusion first, then supporting reasons
  (MECE), then evidence, then a call to action
- **Evidence honesty**: every strong claim must be supported
  by a real data point, a suggested indicator, an observable
  signal, or an explicit "data required" marker — never
  unsupported assertions
- **Language**: Spanish (Latin American neutral, "tu" form),
  no regionalisms or local idioms
- **Prohibited terms** (zero tolerance in published
  content): "hack", "truco", "secreto", "resultados
  instantaneos", "arquitecto", "arquitectura",
  "transformacion" (use "(R)Evolucion" instead)
- **Preferred terms**: "metodo", "disenar/diseno",
  "sistemas", "gobernanza", "capacidades",
  "(R)Evolucion", "Success as a Service" (B2B)
- **Voice pillars**:
  - P1 (R)Evolucion: the gap between current and desired
    state is closed with method
  - P2 Intention over intensity: design before force
  - P3 Technology as ally: automate the repetitive,
    amplify the important
- **Content quality gate**: every published piece must pass
  — Minto structure, MECE supports, honest evidence,
  zero red-list terms, executable CTA, both language
  variants present

**Rationale**: Brand voice is not a style preference — it
is a quality system. The Minto-First structure ensures
content drives decisions, not just comprehension. Evidence
honesty prevents the credibility erosion that comes from
inflated promises. The red/green vocabulary list prevents
brand dilution across 63+ pages of content.

## Quality Standards

- No broken links or missing assets on any public page
- No JavaScript console errors in production
- All pages must render correctly on mobile and desktop
- Theme switching (dark/light) must not break layout or
  readability
- Resource downloads must point to valid, accessible files
- Cotizadores must produce correct calculations with no
  rounding or display errors
- Dynamic content from the backend must load within 2
  seconds on a 3G connection or fall back to cached content
- Admin interface must validate content before saving —
  no empty required fields, no broken references, no
  orphaned translations
- Both language variants (ES/EN) must be present before
  content is published — no partial translations visible
  to users
- All acceptance scenarios MUST have passing automated
  tests before a feature is considered complete
- Security rule changes MUST pass emulator tests before
  deployment
- New UI components MUST use design system tokens — no
  raw hex values, no inline font declarations
- Published content MUST pass the brand voice quality gate
  (Minto structure, evidence, CTA, red-list scan)

## Development Workflow

- Read existing code before modifying any file
- Write tests before writing the production code they
  verify (TDD: red-green-refactor)
- Define acceptance scenarios (Given/When/Then) before
  implementation begins (ATDD)
- Run the full automated test suite before committing —
  do not commit with failing tests
- Test changes across representative pages (not just the
  page being edited)
- Verify modal behavior, navigation, and theme toggle after
  structural changes
- Validate SEO meta tags after adding or renaming pages
- Update sitemap when pages are added, removed, or renamed
- Remove dead code rather than commenting it out
- Test backend security rules before deploying changes to
  the data layer
- Verify content renders correctly from both static and
  cloud sources during the migration period
- Run accessibility checks on admin interfaces, not just
  public pages
- Verify new components against design system tokens
  before merging
- Scan published content against the brand voice red list
  before release

## Governance

This constitution governs all development on the
MetodologIA site. It supersedes ad-hoc decisions and
personal preferences.

- **Amendments** require explicit approval from the project
  owner, a version increment, and documentation of the
  change rationale
- **Compliance** is verified by reviewing changes against
  these principles before merging
- **Conflicts** between principles are resolved by the
  project owner; accessibility, security, and brand
  separation take precedence over convenience
- **Migration decisions** (which content migrates to the
  backend and when) are governed by Content Authority
  (Principle VI) — never duplicate, migrate incrementally
- **Test discipline** is non-negotiable: no feature is
  complete without passing automated tests (Principle IX)
- **Design tokens** are the canonical source for visual
  decisions; deviations require amendment (Principle X)
- **Brand voice** compliance is verified for all published
  content; red-list violations block release (Principle XI)

**Version**: 3.0.0 | **Ratified**: 2026-03-22 | **Last Amended**: 2026-03-22
