# Tests

Test suite for MetodologIA CMS backend.

## Structure

| Directory | Framework | Purpose |
|-----------|-----------|---------|
| `unit/` | Vitest | Content service, cache manager, auth service unit tests |
| `integration/` | Vitest + Firebase Emulator | Firestore security rules validation |
| `e2e/` | Playwright | End-to-end flows (public content, admin, offline) |

## Running Tests

```bash
# Unit tests
npx vitest run

# Integration tests (requires emulator running)
firebase emulators:exec --only auth,firestore --config firebase/firebase.json "npx vitest run tests/integration"

# E2E tests (requires emulator + dev server)
npx playwright test

# All tests
npm test
```
