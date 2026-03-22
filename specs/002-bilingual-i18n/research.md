# Research: Bilingual i18n System

## Decision: Client-side vs Server-side i18n

**Decision**: Client-side only (JSON + JS)

**Rationale**: Constitution Principle I (Static-First) prohibits server-side logic. Client-side i18n with JSON files served as static assets is the only compliant approach.

**Alternatives Considered**:
- Server-side (SSR) with separate URL paths (/en/, /es/) — Rejected: violates Static-First
- Static site generator with pre-built language versions — Rejected: adds build dependency, doubles file count
- Client-side with JS module + JSON — **Selected**: zero dependencies, static-compatible, progressive

## Decision: Translation File Format

**Decision**: Nested JSON with dot-notation keys

**Rationale**: Nested structure (`nav.ruta`) is human-readable, scales well with 800+ keys, and allows page-level organization. Single file per language keeps HTTP requests minimal.

**Alternatives Considered**:
- Flat JSON (`nav_ruta`) — Rejected: harder to organize at scale
- YAML — Rejected: requires parser dependency
- JS modules with exports — Rejected: not cacheable as static assets
- Per-page JSON files — Rejected: too many HTTP requests

## Decision: Browser Language Detection

**Decision**: Auto-detect via `navigator.language` on first visit only (option C from clarify)

**Rationale**: Best UX for international visitors. localStorage preference takes priority after first set. Falls back to Spanish if browser language is not English.

## Decision: Translation Loading Strategy

**Decision**: Load full JSON on page load (sync, cached)

**Rationale**: At ~800 keys, en.json will be ~30-50KB gzipped. A single fetch on page load is simpler than lazy-loading and ensures instant language switching. Browser cache prevents repeated downloads.

## Decision: Standalone HTML Translation

**Decision**: Embed both language JSONs inline in standalone files

**Rationale**: Standalone HTMLs (biblioteca_*_estudio.html) are self-contained — they cannot fetch external JSON. Both language objects are embedded as `<script>` blocks, making them work offline.
