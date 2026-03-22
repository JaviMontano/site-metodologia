# Implementation Plan: Bilingual Site (ES/EN)

**Branch**: `002-bilingual-i18n` | **Date**: 2026-03-22 | **Spec**: [spec.md](spec.md)

## Summary

Client-side i18n system for metodologia.info using JSON translation files, `data-i18n` HTML attributes, and a lightweight JS module. Language toggle (ES|EN) in SiteHeader between logo and nav links. Progressive rollout in 7 waves covering 63+ pages. Default Spanish, auto-detect browser language for first visit.

## Technical Context

**Language/Version**: Vanilla JavaScript (ES2020+), HTML5, CSS3
**Primary Dependencies**: None (zero new dependencies — pure vanilla JS)
**Storage**: localStorage for language preference, JSON files for translations
**Testing**: Playwright (existing test infrastructure)
**Target Platform**: Web (all modern browsers, mobile responsive)
**Project Type**: Static site (63+ HTML pages, web components)
**Performance Goals**: <200ms language switch, <50ms page load impact
**Constraints**: Static-first (no server), must work offline for standalone HTMLs
**Scale/Scope**: 63+ pages, 9 biblioteca landings, 2 web components, ~800 translatable strings

## Constitution Check

| Principle | Compliance | Notes |
|-----------|-----------|-------|
| I. Static-First | COMPLIANT | Pure client-side JS, JSON files served as static assets |
| II. Accessibility-First | COMPLIANT | Toggle is keyboard-navigable button with aria-label, lang attribute updates on html element |
| III. SEO Integrity | COMPLIANT | hreflang tags added, meta content translatable via data-i18n-content |
| IV. Component Consistency | COMPLIANT | i18n.js is single module, SiteHeader/SiteFooter integrate via shared API |
| V. Brand Separation | COMPLIANT | All translations are MetodologIA brand only |

## Architecture

```
                    ┌─────────────────┐
                    │   localStorage  │
                    │   lang: "es"    │
                    └────────┬────────┘
                             │ read/write
                    ┌────────▼────────┐
                    │    i18n.js      │
                    │  (Singleton)    │
                    │                 │
                    │ - init()        │
                    │ - setLang(lang) │
                    │ - translate(el) │
                    │ - t(key)        │
                    └───┬────────┬────┘
                        │        │
               load JSON│        │ DOM traverse
                        │        │ data-i18n="key"
              ┌─────────▼──┐  ┌──▼──────────────┐
              │ /js/i18n/  │  │  HTML Pages      │
              │ es.json    │  │  <span            │
              │ en.json    │  │   data-i18n=      │
              └────────────┘  │   "nav.ruta">     │
                              │   Ruta...         │
                              │  </span>          │
                              └──────────────────┘
```

### File Structure

```
js/
  i18n/
    i18n.js          ← Core module (singleton)
    es.json           ← Spanish translations (source of truth = HTML)
    en.json           ← English translations
components/
  SiteHeader.js       ← Modified: adds toggle + data-i18n attrs
  SiteFooter.js       ← Modified: adds data-i18n attrs
```

### i18n.js API

```javascript
window.i18n = {
  lang: 'es',                    // Current language
  translations: {},              // Loaded translation data
  init(),                        // Load from localStorage, fetch JSON, translate page
  setLang(lang),                 // Switch language, save to localStorage, re-translate
  translate(rootElement),         // Translate all data-i18n elements within root
  t(key),                        // Get translation value by dot-notation key
}
```

### HTML Attribute Convention

| Attribute | Translates | Example |
|-----------|-----------|---------|
| `data-i18n="key"` | textContent | `<span data-i18n="nav.ruta">Ruta...</span>` |
| `data-i18n-placeholder="key"` | placeholder attr | `<input data-i18n-placeholder="search.hint">` |
| `data-i18n-title="key"` | title attr | `<a data-i18n-title="nav.home.tip">` |
| `data-i18n-content="key"` | meta content | `<meta data-i18n-content="meta.desc">` |
| `data-i18n-aria-label="key"` | aria-label attr | `<button data-i18n-aria-label="toggle.label">` |
| `data-i18n-html="key"` | innerHTML (for rich text) | `<p data-i18n-html="hero.subtitle">` |

### Language Toggle Design

Position: Between logo/tagline and first nav link ("Ruta").

```html
<div class="lang-toggle" role="radiogroup" aria-label="Idioma / Language">
  <button class="lang-toggle__btn active" data-lang="es" aria-pressed="true">ES</button>
  <button class="lang-toggle__btn" data-lang="en" aria-pressed="false">EN</button>
</div>
```

Styling: Pill-shaped, semi-transparent, subtle gold border on active. Matches nav aesthetic.

### Translation JSON Structure

```json
{
  "nav": {
    "ruta": "Route of (R)Evolution",
    "recursos": "Resources",
    "servicios": "Services",
    "contacto": "Contact",
    "campus": "Campus",
    "cta": "First Conversation"
  },
  "footer": {
    "servicios": "Services",
    "empresas": "For Companies",
    "personas": "For Individuals",
    "recursos": "Resources",
    "legal": "Legal",
    "terminos": "Terms",
    "privacidad": "Privacy"
  },
  "toggle": {
    "label": "Language"
  },
  "home": {
    "hero_title": "...",
    "hero_subtitle": "..."
  }
}
```

## Implementation Phases

### Phase A: Foundation (Wave 0)
1. Create `js/i18n/i18n.js` — core module
2. Create `js/i18n/es.json` — Spanish keys extracted from HTML
3. Create `js/i18n/en.json` — English translations
4. Add `<script src="js/i18n/i18n.js">` to all pages (via SiteHeader or direct)
5. Tests: i18n module unit behavior

### Phase B: Toggle + Header/Footer (Wave 1 partial)
1. Add language toggle to SiteHeader.js
2. Add `data-i18n` attributes to SiteHeader nav links, tagline, CTA
3. Add `data-i18n` attributes to SiteFooter sections
4. Add `data-i18n` to floating nav labels
5. CSS for toggle: `.lang-toggle` styles in components.css
6. Tests: toggle click, persistence, header/footer translation

### Phase C: Core Pages (Wave 1)
1. Add `data-i18n` to: index.html, ruta/index.html, contacto/index.html, servicios/index.html, vision.html
2. Add corresponding keys to es.json/en.json
3. Add hreflang tags to these pages
4. Tests: full bilingual verification on 5 pages

### Phase D: Product Pages (Wave 2)
1. empresas/index.html + sub-pages
2. personas/index.html + sub-pages
3. Tests: product page bilingual verification

### Phase E: Resource Hub + Bibliotecas (Waves 3-4)
1. recursos/index.html, biblioteca-prompts/index.html, catalogo
2. All 9 biblioteca landing pages (UI chrome only, not prompt content)
3. Tests: biblioteca bilingual verification

### Phase F: Remaining Pages (Waves 5-7)
1. Premium, legal, nosotros pages
2. Standalone HTML downloads (embedded translations)
3. Modals, CTAs, dynamic content
4. Tests: comprehensive site-wide bilingual verification

## Testing Strategy

```
tests/
  19-bilingual-foundation.spec.js   ← i18n module, toggle, persistence
  20-bilingual-header-footer.spec.js ← SiteHeader/SiteFooter in both langs
  21-bilingual-core-pages.spec.js    ← Wave 1 pages fully translated
  22-bilingual-bibliotecas.spec.js   ← Library UI chrome translated
  23-bilingual-comprehensive.spec.js ← Full site bilingual regression
```

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Translation JSON grows too large | Slow initial load | Split by page section, lazy-load per page |
| Inconsistent data-i18n attributes | Partial translations | Playwright test per wave verifies 100% coverage |
| Web component timing | Toggle renders before i18n.js loads | i18n.js loaded sync before components, or components call i18n.init() |
| Standalone HTMLs need embedded translations | Can't load external JSON | Embed both language JSONs inline in standalone files |

## Dependencies

- **Existing**: SiteHeader.js, SiteFooter.js, components.css, Playwright config
- **New files**: js/i18n/i18n.js, js/i18n/es.json, js/i18n/en.json
- **Modified files**: SiteHeader.js, SiteFooter.js, components.css, all 63+ HTML pages (progressively)
