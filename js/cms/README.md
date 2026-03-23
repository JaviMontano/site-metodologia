# CMS Content Service (`js/cms/`)

Centralized content service modules for the MetodologIA CMS backend.

## Purpose

Provides a unified API for fetching, caching, and managing editable content
(programs, pricing, translations) from Cloud Firestore with IndexedDB caching
and offline fallback.

## Planned API Surface

| Module | Purpose |
|--------|---------|
| `firebase-config.js` | Firebase app initialization (public config only) |
| `content-service.js` | Firestore read + cache + fallback orchestration |
| `cache-manager.js` | IndexedDB wrapper with TTL logic |
| `auth-service.js` | Firebase Auth (Google sign-in, admin claims) |
| `admin-api.js` | Admin write operations (edit, validate, audit log) |
| `migration-bridge.js` | Dual-source resolver (Firestore-first, static fallback) |

## Usage

```js
import { ContentService } from './js/cms/content-service.js';

await ContentService.init({ app });
const programs = await ContentService.getPrograms('empresas');
```

Full API documentation will be added after implementation (see T087).
