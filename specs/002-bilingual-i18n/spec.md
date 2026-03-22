# Feature Specification: Bilingual Site (ES/EN)

**Feature Branch**: `002-bilingual-i18n`
**Created**: 2026-03-22
**Status**: Draft
**Input**: User description: "Convertir el sitio metodologia.info en bilingue, ingles espanol y por default, espanol. Crear una estrategia inteligente, de bilinguismo para que, al lado izquierdo del menu de Ruta, entre el logo marca y los menus, este un boton de ingles y espanol. Implementacion progresiva para que cada pagina, modal o descargable, lo sea."

## User Stories *(mandatory)*

### User Story 1 - Language Toggle in Navigation (Priority: P1)

A visitor arrives at metodologia.info (default: Spanish). Between the logo/tagline and the "Ruta de (R)Evolucion" menu link, they see a compact language toggle (ES | EN). Clicking "EN" switches all visible text on the current page to English. The choice persists across navigation via localStorage.

**Why this priority**: The toggle is the entry point for the entire bilingual experience. Without it, nothing else matters.

**Independent Test**: Load any page, click EN, verify header/footer/nav text switches to English. Refresh — stays in English. Click ES — returns to Spanish.

**Acceptance Scenarios**:

1. **Given** a visitor on any page in Spanish, **When** they click "EN" in the nav toggle, **Then** all translatable text on the page switches to English within 200ms without page reload
2. **Given** a visitor who selected "EN", **When** they navigate to another page, **Then** the new page loads in English automatically
3. **Given** a visitor who selected "EN" and closes the browser, **When** they return, **Then** the site loads in English (localStorage persistence)
4. **Given** a visitor on mobile (hamburger menu), **When** they see the toggle, **Then** it is visible and functional in the mobile menu layout

---

### User Story 2 - Translated SiteHeader and SiteFooter (Priority: P1)

The SiteHeader web component (logo tagline, nav links, CTA button, floating nav) and SiteFooter web component (links, sections, copyright) render all text in the selected language.

**Why this priority**: Header and footer appear on every page — translating them gives immediate bilingual presence across the entire site.

**Independent Test**: Switch to EN, verify: nav links ("Route of (R)Evolution", "Resources", "Services", "Contact"), CTA, footer sections, copyright text.

**Acceptance Scenarios**:

1. **Given** language is EN, **When** SiteHeader renders, **Then** all nav links, tagline, and CTA display in English
2. **Given** language is EN, **When** SiteFooter renders, **Then** all section headers, links, and copyright display in English
3. **Given** language is EN, **When** floating nav appears on scroll, **Then** section labels display in English

---

### User Story 3 - Translation System Architecture (Priority: P1)

A JSON-based translation system where each translatable string has a key, with one JSON file per language (es.json, en.json). HTML elements use data-i18n="key" attributes. A lightweight JS module (i18n.js) reads the active language from localStorage, loads the correct JSON, and replaces text content.

**Why this priority**: This is the foundation — without it, no page can be translated.

**Independent Test**: Create i18n.js, add data-i18n attributes to 5 elements on index.html, verify text switches correctly.

**Acceptance Scenarios**:

1. **Given** es.json and en.json exist in /js/i18n/, **When** i18n.js initializes, **Then** it loads the correct file based on localStorage lang key (default: "es")
2. **Given** a page with data-i18n="nav.ruta" on an element, **When** language is EN, **Then** the element text content becomes the value of nav.ruta from en.json
3. **Given** an element with data-i18n-placeholder="search.placeholder", **When** language is EN, **Then** the placeholder attribute is translated

---

### User Story 4 - Progressive Page Translation (Priority: P2)

Pages are translated progressively in waves. Each wave adds data-i18n attributes to a group of pages and their corresponding translations to the JSON files.

**Why this priority**: Enables incremental delivery — the site becomes more bilingual over time without blocking launches.

**Independent Test**: After Wave 1 (core pages), verify index.html, ruta/index.html, contacto/index.html are fully bilingual. Other pages still work in Spanish-only.

**Acceptance Scenarios**:

1. **Given** Wave 1 is complete (5 core pages), **When** a visitor switches to EN, **Then** those 5 pages display fully in English
2. **Given** a page NOT yet translated, **When** a visitor switches to EN, **Then** the page displays in Spanish (graceful fallback, no broken UI)
3. **Given** Wave 2 adds 10 more pages, **When** deployed, **Then** those pages also respond to the language toggle

**Translation Waves**:
- Wave 1: index.html, ruta/index.html, contacto/index.html, servicios/index.html, vision.html (5 pages)
- Wave 2: empresas/index.html, personas/index.html + their sub-pages (10 pages)
- Wave 3: recursos/index.html, biblioteca-prompts/index.html, catalogo (5 pages)
- Wave 4: All 9 biblioteca landing pages (9 pages)
- Wave 5: Premium pages, legal, nosotros (15 pages)
- Wave 6: Standalone HTML downloads, editorial PDFs (18 files)
- Wave 7: Modals, CTAs, dynamic content (site-wide)

---

### User Story 5 - Bilingual Prompt Libraries (Priority: P2)

The 9 prompt library landing pages display UI text (hero, search placeholder, category pills, download section labels) in the selected language. The prompts themselves remain in Spanish (they are domain content, not UI).

**Why this priority**: Libraries are the highest-traffic resource pages.

**Independent Test**: Switch to EN on biblioteca-ventas, verify hero title, search placeholder, "Download" section, and category labels are in English. Prompt content stays in Spanish.

**Acceptance Scenarios**:

1. **Given** language is EN on a biblioteca landing, **When** the page renders, **Then** all UI chrome (hero, headings, buttons, labels) displays in English
2. **Given** language is EN, **When** a user opens a prompt modal, **Then** the modal chrome ("Copy Prompt", category label) is in English, but the prompt content is in Spanish

---

### User Story 6 - SEO hreflang Tags (Priority: P3)

Each public page includes hreflang alternate link tags pointing to the same URL (since translation is client-side, not separate URLs).

**Why this priority**: Important for international SEO but does not affect user functionality.

**Independent Test**: View source of any translated page, verify hreflang tags are present.

**Acceptance Scenarios**:

1. **Given** any public page, **When** rendered, **Then** it contains both hreflang="es" and hreflang="en" link tags
2. **Given** the page is the default language (ES), **When** Google crawls it, **Then** it sees the hreflang tags indicating bilingual availability

---

### User Story 7 - Playwright Bilingual Tests (Priority: P3)

Automated tests verify that the language toggle works, translations load, persistence works, and no UI breaks in either language.

**Why this priority**: Prevents regressions as more pages get translated.

**Independent Test**: Run Playwright bilingual test suite — all tests pass.

**Acceptance Scenarios**:

1. **Given** the test suite, **When** run, **Then** it verifies: toggle exists, click switches language, persistence works, header/footer translated, no JS errors in either language
2. **Given** a new wave of translations is added, **When** tests run, **Then** they verify the new pages are also correctly translated

---

### Edge Cases

- What happens when a translation key is missing from en.json? Falls back to Spanish text (original HTML content)
- What happens when localStorage is disabled? Default to Spanish, toggle still works for current session (in-memory)
- What happens with dynamically injected content (prompt cards, search results)? i18n.js provides a translate(element) function callable after DOM mutations
- What happens with SEO/meta tags (title, description, og:tags)? Wave 5+ translates these via data-i18n-attr for meta content

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a language toggle (ES | EN) in the main navigation, positioned between the logo/tagline and the first nav link
- **FR-002**: System MUST persist language preference in localStorage under key "lang" with values "es" or "en"
- **FR-003**: System MUST default to Spanish ("es") when no preference is stored
- **FR-004**: System MUST translate all elements with data-i18n attributes when language changes, without page reload
- **FR-005**: System MUST support attribute translation via data-i18n-placeholder, data-i18n-title, data-i18n-content for placeholders, titles, and meta content
- **FR-006**: System MUST gracefully fall back to original HTML text when a translation key is missing
- **FR-007**: System MUST translate SiteHeader and SiteFooter web components in both languages
- **FR-008**: System MUST translate the floating nav section labels in both languages
- **FR-009**: System MUST support progressive translation — untranslated pages display in Spanish without errors
- **FR-010**: System MUST include hreflang tags on all public pages
- **FR-011**: System MUST provide a window.i18n.translate(element) API for translating dynamically injected content
- **FR-012**: System MUST not increase page load time by more than 50ms (JSON files loaded once, cached)

### Key Entities

- **Translation File** (es.json, en.json): Nested key-value maps organized by page/component (e.g., nav.ruta, footer.servicios, biblioteca.ventas.hero.title)
- **i18n Module** (js/i18n.js): Singleton that manages language state, file loading, and DOM translation
- **Language Toggle**: UI component in SiteHeader that emits language change events

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Language toggle is visible and functional on all 63+ pages (100% coverage for the toggle UI)
- **SC-002**: Wave 1 (5 core pages) fully translated within first implementation sprint
- **SC-003**: Translation switching completes in under 200ms (no perceptible delay)
- **SC-004**: Zero JavaScript errors when switching languages on any page
- **SC-005**: Playwright bilingual test suite passes with 100% success rate
- **SC-006**: Page load performance impact is less than 50ms (measured via Lighthouse)
- **SC-007**: All 7 translation waves completed within 4 sprints
- **SC-008**: SEO hreflang tags present on 100% of public indexed pages
