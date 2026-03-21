<!-- Sync Impact Report
Version: 1.0.0 (initial ratification)
Modified principles: N/A (initial)
Added sections: Core Principles (I-V), Quality Standards, Development Workflow, Governance
Removed sections: N/A
Follow-up TODOs: None
-->

# Site MetodologIA Constitution

## Core Principles

### I. Static-First

The site is a static, client-side-only application with no
server-side rendering or backend dependencies.

- All pages are standalone HTML documents
- No build step is required to serve the site (Tailwind
  compilation is a development convenience, not a runtime
  dependency)
- No server-side logic, APIs, or databases
- Content changes are deployed by updating static files

**Rationale**: Static sites are fast, secure, and cheap to
host. The site's purpose is content delivery, not application
logic.

### II. Accessibility-First

Every page must be usable by people with disabilities and
meet accessibility standards.

- All interactive elements must be keyboard-navigable
- Modals must use proper ARIA attributes (role, aria-modal,
  aria-labelledby)
- Skip-to-content links on every page
- Color contrast must meet minimum accessibility thresholds
- Images must have meaningful alt text

**Rationale**: Accessibility is a legal and ethical
requirement, not a nice-to-have. An EdTech site must model
inclusive design.

### III. SEO Integrity

Every public page must be discoverable and correctly
described for search engines and social platforms.

- Required meta tags: description, robots, canonical, Open
  Graph (type, url, title, description, image), Twitter Card
- Internal/template pages must be marked noindex
- Sitemap must reflect actual site structure
- No duplicate or orphaned canonical URLs

**Rationale**: Organic search is the primary acquisition
channel. Incomplete or incorrect SEO metadata directly
reduces visibility.

### IV. Component Consistency

Shared UI patterns must be implemented once and reused, not
duplicated across pages.

- Site-wide elements (header, footer) use web components
- Modal behavior uses a unified system, not per-page
  implementations
- No inline styles for patterns that exist in the stylesheet
- CSS follows the established token and layering system

**Rationale**: Duplication creates drift. When 63+ pages
share patterns, a single source of truth prevents
inconsistency and reduces maintenance burden.

### V. Brand Separation

MetodologIA is a distinct brand. Site content must never mix
or reference other brands.

- No references to parent companies, partner brands, or
  internal tooling names in public-facing content
- Visual identity (colors, typography, tone) must be
  consistently MetodologIA
- Program names must match the defined catalog exactly

**Rationale**: Brand confusion undermines trust. The site
represents MetodologIA exclusively.

## Quality Standards

- No broken links or missing assets on any public page
- No JavaScript console errors in production
- All pages must render correctly on mobile and desktop
- Theme switching (dark/light) must not break layout or
  readability
- Resource downloads must point to valid, accessible files
- Cotizadores must produce correct calculations with no
  rounding or display errors

## Development Workflow

- Read existing code before modifying any file
- Test changes across representative pages (not just the
  page being edited)
- Verify modal behavior, navigation, and theme toggle after
  structural changes
- Validate SEO meta tags after adding or renaming pages
- Update sitemap when pages are added, removed, or renamed
- Remove dead code rather than commenting it out

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
  project owner; accessibility and brand separation take
  precedence over convenience

**Version**: 1.0.0 | **Ratified**: 2026-03-21 | **Last Amended**: 2026-03-21
