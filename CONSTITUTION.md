<!-- Sync Impact Report
Version: 2.0.0 (architectural evolution)
Modified principles:
  - I. Static-First → I. Client-Rendered, Cloud-Backed
  - IV. Component Consistency → IV. Component Consistency (expanded for data layer)
Added sections:
  - VI. Content Authority
  - VII. Secure by Default
  - VIII. Offline Resilience
  - Quality Standards: expanded for dynamic content
  - Development Workflow: expanded for backend-aware workflow
Removed sections: None (all v1 principles preserved or evolved)
Follow-up TODOs:
  - Update PREMISE.md scope (backend/CMS now in scope)
  - Review spec 003-sitewide-ux-polish for compatibility
  - Future spec: 004-firebase-cms-backend
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

## Development Workflow

- Read existing code before modifying any file
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

**Version**: 2.0.0 | **Ratified**: 2026-03-22 | **Last Amended**: 2026-03-22
