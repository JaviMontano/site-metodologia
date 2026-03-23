# Admin Interface (`/admin/`)

Protected content management interface for MetodologIA CMS.

## Access Requirements

- Google account authenticated via Firebase Auth
- `admin: true` custom claim set via `scripts/set-admin-claim.js`

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Admin SPA shell (noindex) |
| `js/admin-app.js` | Auth state handling, tab routing |
| `js/program-editor.js` | Program catalog editor |
| `js/price-editor.js` | Pricing editor |
| `js/i18n-editor.js` | Translation editor |
