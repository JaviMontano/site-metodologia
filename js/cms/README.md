# CMS Content Service (`js/cms/`)

Centralized content service modules for the MetodologIA CMS backend.

## Purpose

Provides a unified API for fetching, caching, and managing editable content
(programs, pricing, translations) from Cloud Firestore with IndexedDB caching
and offline fallback.

## Modules

| Module | Purpose |
|--------|---------|
| `firebase-config.js` | Firebase app initialization (public config only, no secrets) |
| `content-service.js` | Firestore read + stale-while-revalidate cache + fallback |
| `cache-manager.js` | IndexedDB wrapper with TTL logic via `idb` |
| `auth-service.js` | Firebase Auth (Google sign-in, admin custom claims) |
| `admin-api.js` | Admin write operations (edit, validate, audit log, sanitize) |
| `migration-bridge.js` | Dual-source resolver (Firestore-first, static fallback) |
| `init.js` | CMS bootstrap — exposes ContentService on window for non-module scripts |

## Usage

### Public Pages

```html
<script type="module" src="/js/cms/init.js"></script>
```

This initializes Firebase and ContentService, making it available for i18n.js
and page-level integration scripts.

### Fetching Content

```js
import { ContentService } from './js/cms/content-service.js';
import { getFirebaseApp } from './js/cms/firebase-config.js';

const app = getFirebaseApp();
await ContentService.init({ app });

const programs = await ContentService.getPrograms('empresas'); // Program[] | null
const pricing = await ContentService.getPricing('b2c_base');   // Object | null
const translations = await ContentService.getTranslations('es'); // Object | null
```

### Resolution Chain

All content methods follow: **fresh cache → Firestore → stale cache → null**

1. If IndexedDB cache exists and is within TTL: return immediately (no Firestore)
2. If stale or missing: fetch from Firestore, update cache, return
3. If Firestore fails: log `console.warn`, serve stale cache
4. If no cache: return `null` (caller preserves static HTML)

### Admin Operations

```js
import { AdminAPI } from './js/cms/admin-api.js';

await AdminAPI.updateProgram('empresas_diagnostico', {
  description_es: 'Updated',
  description_en: 'Updated EN', // bilingual pairs required
});

await AdminAPI.updatePricing('b2c_base', { programs: { ... } });
await AdminAPI.updateTranslations('es', { nav: { home: 'Nuevo inicio' } });
```

## Extension Guide

To add a new content type:

1. Add Firestore collection + security rules in `firebase/firestore.rules`
2. Add `get{Type}()` method in `content-service.js` following the existing pattern
3. Add cache store name in `cache-manager.js` STORES array
4. Register extractor in `scripts/seed-firestore.js`
5. Add admin editor in `admin/js/`
