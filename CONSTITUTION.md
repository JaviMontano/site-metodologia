<!-- Sync Impact Report
Version: 3.1.0 (Code Sustainability + TDD rationale refinement)
Modified principles:
  - IX. Test-Driven Development: rationale expanded — TDD/ATDD
    prevents unnecessary code, not just regressions
Added sections:
  - XII. Code Sustainability
  - Quality Standards: expanded for naming, README, scaffolding
  - Development Workflow: expanded for naming conventions
Removed sections: None
Follow-up TODOs:
  - Update plan.md test stack (Playwright for ATDD, Vitest for unit)
  - Create design-tokens.json or variables.css update with canonical palette
  - Downstream specs may need testify re-run for TDD compliance
  - Define naming convention reference (slugging rules, file patterns)
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

**Rationale**: The primary purpose of TDD and ATDD is to
prevent unnecessary code generation. Tests written first
define the exact boundary of what the system must do —
nothing more, nothing less. This discipline is vital for
sustainability and simplicity without trivializing the
enterprise robustness the project requires. A CMS migration
touches every page; test-first prevents both regressions
and overengineering. ATDD ensures acceptance criteria are
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

### XII. Code Sustainability

All code must be written for the person who maintains it
next — not the person who writes it now. The codebase must
be understandable, navigable, and modifiable by someone
without specialist knowledge of the original implementation.

- **Business-readable code**: variable names, function names,
  and module names must reflect business concepts — not
  implementation mechanics. A non-developer reading the code
  should understand what it does from its naming alone
- **Naming conventions**: files, directories, CSS classes,
  JS identifiers, and URL slugs follow a documented,
  consistent naming convention. No ad-hoc abbreviations,
  no inconsistent casing across the same domain
- **Slugging**: all URL paths, file names, and identifiers
  that appear in user-facing contexts use kebab-case slugs
  derived from the business name — predictable, searchable,
  and human-readable
- **Scaffolding**: new features follow established directory
  patterns. The file structure must be self-documenting —
  a new contributor can find where to add code by looking
  at the existing layout, not by asking
- **README-driven**: every significant module or directory
  must have a README or inline documentation that explains
  its purpose, boundaries, and usage — not its
  implementation details
- **Clean code**: no dead code, no commented-out code, no
  magic numbers, no functions longer than what fits on one
  screen. Single responsibility per module. Explicit over
  implicit
- **Extensible without rewrite**: new content types,
  programs, or pages must be addable by following existing
  patterns — not by modifying core infrastructure
- **Interoperable**: modules communicate through documented
  contracts (function signatures, event names, data shapes),
  not through shared mutable state or implicit dependencies
- **Scalable simplicity**: prefer the simplest solution that
  meets the requirement. Complexity is added only when a
  simpler approach has been proven insufficient — never
  preemptively

**Rationale**: The site will be maintained by a small team
where any member may touch any part of the codebase. Code
that requires specialist knowledge to modify becomes a
single point of failure. Business-readable naming, consistent
conventions, and self-documenting structure reduce onboarding
time and maintenance risk. TDD (Principle IX) prevents
unnecessary code; this principle ensures the necessary code
is written for longevity.

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
- All new modules and directories MUST have a README that
  explains purpose and usage
- Variable and function names MUST reflect business concepts
  — no cryptic abbreviations or implementation-only naming
- File and URL naming MUST follow the documented slug
  convention — no ad-hoc patterns

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
- Name every new file, function, and variable using
  business-readable terms — review naming before merging
- Add a README to any new module or directory that explains
  what it does and how to extend it

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
- **Code sustainability** is verified by naming review,
  README presence, and pattern adherence (Principle XII)

**Version**: 3.1.0 | **Ratified**: 2026-03-22 | **Last Amended**: 2026-03-22
