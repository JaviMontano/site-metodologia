# Data Model — 009-home-landing-sales

**Scope**: Only the entities actually **read** or **written** by feature 009. The full CMS catalog (Block, Page, Asset, Flag, Experiment, AuditEvent, etc.) lives in spec §4.3 / §9.5 and is the scope of feature `010-backoffice-cms`.

## Read-only (public-published, seeded manually or via `scripts/seed.js`)

### `programs/{programId}`

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | ✅ | Doc id = slug |
| `slug` | string | ✅ | e.g. `design-thinking-b2b` |
| `nombre_i18n` | `{es: string, en: string}` | ✅ | Display name |
| `audiencia` | `"empresa" \| "persona"` | ✅ | Drives CTA routing |
| `duracion` | string | ✅ | Free text, e.g. `"8 semanas"` |
| `resultado_i18n` | `{es: string, en: string}` | ✅ | Outcome promise |
| `href` | string | ✅ | Existing page URL (`empresas/*.html` or `personas/*.html`) |
| `order` | number | ✅ | Display order, asc |
| `status` | `"draft" \| "published" \| "archived"` | ✅ | Home filters `status==published` |
| `createdAt` | Firestore Timestamp | ✅ | — |
| `updatedAt` | Firestore Timestamp | ✅ | — |

**Indexes**: composite `(status ASC, order ASC)`.

### `resources/{resourceId}`

Already exists in the repo CMS. Fields used by home v2: `id`, `tipo`, `estado` (`free|premium`), `locale`, `previewUrl`, `fullUrl`, `title_i18n`, `status`. No schema change.

### `testimonials/{testimonialId}`

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | ✅ | — |
| `author_name` | string | ✅ | — |
| `author_role_i18n` | `{es, en}` | ✅ | — |
| `quote_i18n` | `{es, en}` | ✅ | Max 200 chars |
| `avatar_url` | string | ❌ | Optional Firebase Storage URL |
| `company_logo_url` | string | ❌ | Optional |
| `order` | number | ✅ | — |
| `status` | `"draft" \| "published"` | ✅ | — |
| `createdAt` / `updatedAt` | Timestamp | ✅ | — |

**Indexes**: composite `(status ASC, order ASC)`.

### `pages/{pageSlug}` — optional, only `pages/home`

If present and `status==published`, the home reads a top-level `seo` block and (optionally) a `blocks[]` override list via `BlockRenderer.js`. If absent, `index.html` renders the static fallback (Constitution VI). Schema = spec §4.3 `Page` entity, read-only for 009.

## Write (append-only, anonymous auth, App Check required)

### `leads/{uid}`

Created once per diagnostic completion. Never updated. Never deleted from client. Dedup by email is a back-office concern (feature 010).

| Field | Type | Required | Notes |
|---|---|---|---|
| `uid` | string | ✅ | = `request.auth.uid` (anonymous session) |
| `email` | string | ✅ | PII — captured at step 6 with explicit consent |
| `name` | string | ✅ | PII |
| `segmento` | `"persona" \| "lider_equipo" \| "fundador" \| "directivo"` | ✅ | From `q_segmento` |
| `fuente` | string | ✅ | `"home-diagnostic"`, `"home-resource-premium"`, etc. |
| `locale` | `"es" \| "en"` | ✅ | At completion time |
| `consent` | `{analytics: boolean, pii: true, policyVersion: string, acceptedAt: Timestamp}` | ✅ | `pii` always true (capture gate) |
| `deviceClass` | `"xs"\|"sm"\|"md"\|"lg"\|"xl"\|"2xl"` | ✅ | From matchMedia |
| `utm` | `{source?, medium?, campaign?, content?}` | ❌ | If present in URL |
| `diagnosticRef` | DocumentReference | ✅ | Backref to `diagnostics/{uid}` |
| `createdAt` | Timestamp (serverTimestamp) | ✅ | — |

**Invariants**:
- Create-only: security rules deny `update` and `delete` from client.
- `uid == request.auth.uid` enforced.
- One `lead` per `diagnostic`; if user re-completes, a new `{uid}` document is written under a new anonymous session (spec FR-017).

### `diagnostics/{uid}`

Created once per completion. Same anonymous auth model.

| Field | Type | Required | Notes |
|---|---|---|---|
| `uid` | string | ✅ | — |
| `leadUid` | string | ✅ | = `uid` (1:1) |
| `steps` | `Array<{id: string, answer: string, weight: number}>` | ✅ | 5 entries (q_contacto not stored) |
| `resultado` | `{score: number, nivel_id: "explorer"\|"builder"\|"strategist", titulo_i18n: {es,en}, cta_id: string, cta_href: string}` | ✅ | Computed per spec §4.5 |
| `locale` | `"es"\|"en"` | ✅ | — |
| `deviceClass` | string | ✅ | — |
| `fuente` | string | ✅ | — |
| `startedAt` | Timestamp | ✅ | Client-provided (localStorage) |
| `completedAt` | Timestamp (serverTimestamp) | ✅ | — |
| `status` | `"completed"` | ✅ | In-progress diagnostics live in localStorage only — never in Firestore (NFR-006) |

**Invariants**:
- Append-only. Never update; never delete from client.
- `steps.length == 5`.
- `resultado.nivel_id` derived from `sum(steps[].weight)` using the thresholds in spec §4.5 — verified by security rules: `resultado.score == steps.map(s => s.weight).reduce(sum)`.

## State transitions

### Diagnostic session lifecycle (client-side)

```
idle → in_progress (step 1 answered)
in_progress → in_progress (steps 2..5 answered; state persisted to localStorage with 24h TTL)
in_progress → captured (step 6 email + consent submitted)
captured → persisted (write to Firestore succeeds; App Check token valid)
captured → degraded (Firestore unavailable → mailto fallback per FR-015)
persisted → done (UI shows resultado screen; localStorage cleared)
```

No intermediate writes to Firestore. No `"in_progress"` doc ever created — privacy by design.

### Cookie lifecycle

- `mdg_consent`: set on banner accept/reject; 180d; gates analytics emission.
- `mdg_returning`: set once on diagnostic completion; 180d; SHA-256(email); switches primary CTA copy.
- `mdg_theme`: `"light"|"dark"`; localStorage, no expiry; respects `prefers-color-scheme` as fallback.

## Collections NOT touched by 009

Read: none beyond the table above.
Write: `audit/`, `pages/`, `blocks/`, `assets/`, `translations/`, `flags/`, `experiments/`, `settings/`, `{entity}_versions/` are all out of scope (→ feature 010).
