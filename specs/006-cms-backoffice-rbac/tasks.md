# Tasks: CMS Backoffice RBAC

**Input**: Design documents from `/specs/006-cms-backoffice-rbac/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, 12 .feature files (82 test specs)

**Organization**: Tasks grouped by implementation phase per plan.md, with user story labels for traceability. Test tasks precede implementation per Constitution IX (TDD).

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[USn]**: Which user story this task belongs to
- Test spec references: `[TS-XXX]` from .feature files

---

## Phase 0: Foundation — BUG-003 + Build Pipeline

**Purpose**: Fix the Firebase import error that blocks all admin functionality. Nothing else works until admin page loads.

**Validates**: FR-001, SC-001, BUG-003

- [ ] T001 Add esbuild as dev dependency and create `build:admin` + `watch:admin` npm scripts in package.json [TS-001]
- [ ] T002 Create esbuild entry point configuration: bundle `admin/js/admin-app.js` → `admin/js/admin-bundle.js` (format=esm, minify) [TS-001]
- [ ] T003 Update `admin/index.html` script src from `js/admin-app.js` to `js/admin-bundle.js` [TS-001]
- [ ] T004 Add `admin/js/admin-bundle.js` to `.gitignore` with comment explaining why [TS-001]
- [ ] T005 Verify admin page loads with zero console errors after build [TS-001, TS-002]

**Checkpoint**: Admin page loads — all subsequent phases unblocked

---

## Phase 1: Auth & RBAC Core (P1 — Security Foundation)

**Purpose**: Replace binary admin/non-admin with 4-role RBAC. Core infrastructure that blocks all user story work.

**CRITICAL**: Phases 2-4 cannot begin until this phase is complete

### Cloud Functions Setup

- [ ] T006 Initialize `functions/` directory with `package.json` (firebase-functions v2, firebase-admin v12) and `.eslintrc.js` [TS-041]
- [ ] T007 [P] Create environment config structure for bootstrap accounts per Constitution XXI (`functions.config().bootstrap.accounts`) [TS-049, TS-050]

### Tests — Cloud Functions (TDD: write first, verify they fail)

- [ ] T008 [P] Write unit tests for `onUserFirstLogin` Cloud Function in `tests/integration/cloud-functions.test.js` [TS-041, TS-042, TS-043, TS-044, TS-045]
- [ ] T009 [P] Write unit tests for `setUserRole` Cloud Function in `tests/integration/cloud-functions.test.js` [TS-046, TS-047, TS-048, TS-049, TS-050]
- [ ] T010 [P] Write unit tests for `migrateMyRole` Cloud Function in `tests/integration/cloud-functions.test.js` [TS-051, TS-052, TS-053]

### Tests — Firestore Security Rules (TDD: write first, verify they fail)

- [ ] T011 [P] Write RBAC security rule tests for `users/{uid}` collection in `tests/integration/firestore-rules.test.js` [TS-057, TS-058, TS-059, TS-060, TS-061]
- [ ] T012 [P] Write RBAC security rule tests for `config/access` and `config/invites` in `tests/integration/firestore-rules.test.js` [TS-062, TS-063, TS-064, TS-065]
- [ ] T013 [P] Write RBAC security rule tests for `audit_log` and `page_overrides` in `tests/integration/firestore-rules.test.js` [TS-066, TS-067, TS-068, TS-069, TS-070]
- [ ] T014 [P] Write RBAC security rule tests for content collections (`programs`, `pricing`, `translations`) with legacy fallback in `tests/integration/firestore-rules.test.js` [TS-071, TS-072, TS-073, TS-074]

### Tests — Data Model Validation (TDD)

- [ ] T015 [P] Write data model validation tests for `users/{uid}` schema in `tests/unit/data-model.test.js` [TS-075, TS-076, TS-077]
- [ ] T016 [P] Write data model validation tests for `config/access`, `config/invites`, `audit_log` schemas in `tests/unit/data-model.test.js` [TS-078, TS-079, TS-080, TS-081, TS-082]

### Implementation — Cloud Functions

- [ ] T017 Implement `onUserFirstLogin` Auth trigger in `functions/index.js` — bootstrap check, invite check, domain check, lazy-sync (depends on T006, T007) [TS-041, TS-042, TS-043, TS-044, TS-045]
- [ ] T018 Implement `setUserRole` callable in `functions/index.js` — role assignment, bootstrap protection, last-super-admin guard, dual storage (depends on T006, T007) [TS-046, TS-047, TS-048, TS-049, TS-050]
- [ ] T019 [P] Implement `migrateMyRole` callable in `functions/index.js` — legacy `admin:true` → `role:x` migration (depends on T006) [TS-051, TS-052, TS-053]

### Implementation — Firestore Rules & Client Auth

- [ ] T020 Update `firebase/firestore.rules` to RBAC v2 with helper functions (`isSuperAdmin`, `isEditorOrAbove`, etc.) + legacy fallback (depends on T017, T018) [TS-057, TS-058, TS-059, TS-060, TS-061, TS-062, TS-063, TS-064, TS-065, TS-066, TS-067, TS-068, TS-069, TS-070, TS-071, TS-072, TS-073, TS-074]
- [ ] T021 Update `firebase/firestore.indexes.json` — add `audit_log` and `users` composite indexes per data-model.md
- [ ] T022 Update `js/cms/auth-service.js` — replace `isAdmin()` with `getRole()`, `hasPermission(level)`, add legacy claim detection + `migrateMyRole` call [TS-003, TS-004, TS-005]
- [ ] T023 Update `admin/js/admin-app.js` — role-based tab rendering, `onAuthStateChanged` domain re-check, role-gated UI (depends on T022) [TS-003, TS-004, TS-005, TS-006, TS-007, TS-008]

### Implementation — Seed & Migration Scripts

- [ ] T024 [P] Update `scripts/seed-firestore.js` — seed `config/access` (allowed_domains, default_role), bootstrap accounts mirror [TS-075, TS-078]
- [ ] T025 [P] Create `scripts/set-user-role.js` — RBAC-aware role assignment CLI script
- [ ] T026 [P] Create `scripts/migrate-claims.js` — one-time migration from `admin:true` to `role:x` for existing users

### Tests — Auth Service (TDD)

- [ ] T027 Write unit tests for updated `auth-service.js` in `tests/unit/auth-service.test.js` — `getRole()`, `hasPermission()`, legacy detection [TS-003, TS-004, TS-005]

**Checkpoint**: RBAC core operational — roles enforced in rules + UI. Run all integration tests against emulator.

---

## Phase 2: User Management + Access Control (P1 — Completes Security Layer)

**Purpose**: Enable super admins to manage users, invites, and domain allowlisting from the CMS UI.

**Depends on**: Phase 1 complete

### Tests — User Management (TDD)

- [ ] T028 Write unit tests for `user-manager.js` in `tests/unit/user-manager.test.js` — user listing, role assignment, invite creation [TS-009, TS-010, TS-011]
- [ ] T029 [P] Write unit tests for `idle-timer.js` in `tests/unit/idle-timer.test.js` — timeout behavior, activity reset, signOut trigger [TS-004]
- [ ] T030 [P] Write unit tests for Cloud Functions `inviteUser` and `removeUserAccess` in `tests/integration/cloud-functions.test.js` [TS-054, TS-055, TS-056]

### Implementation — Cloud Functions (Invites & Removal)

- [ ] T031 Implement `inviteUser` callable in `functions/index.js` — email validation, duplicate check, invite creation (depends on T006) [TS-054, TS-055]
- [ ] T032 Implement `removeUserAccess` callable in `functions/index.js` — bootstrap guard, last-super-admin guard, role nullification (depends on T006) [TS-056]
- [ ] T033 [P] Implement `cleanupExpiredAudit` scheduled function in `functions/index.js` — daily TTL cleanup

### Implementation — Admin UI Modules

- [ ] T034 [US2] Create `admin/js/user-manager.js` — user list table, search, role assignment dropdown, calling `setUserRole` (depends on T018) [TS-009, TS-010, TS-011]
- [ ] T035 [US3] Add invite management UI to `admin/js/user-manager.js` — invite form, pending invites list, cancel invite (depends on T031) [TS-012, TS-013, TS-014, TS-015]
- [ ] T036 [US3] Add domain allowlist management UI to `admin/js/user-manager.js` — add/remove domains, default role display (depends on T020) [TS-016, TS-017]
- [ ] T037 [US1] Create `admin/js/idle-timer.js` — track click/keypress/mousemove, `setTimeout(signOut, 8h)`, `sessionStorage` for refresh survival [TS-004]
- [ ] T038 [US4] Create `admin/js/profile-editor.js` — display name, preferred language, avatar, last login, read-only role field [TS-018, TS-019, TS-020, TS-021]

### Tests — Access Control E2E

- [ ] T039 Write E2E tests for role-based access in `tests/e2e/rbac-roles.spec.js` — tab visibility per role, action permissions [TS-006, TS-007, TS-008]

### Edge Cases

- [ ] T040 [US2] Implement last-super-admin demotion guard in user-manager.js UI — disable demote button when count=1 [TS-038]
- [ ] T041 [US3] Implement domain removal blocking in `admin-app.js` — re-check `config/access.allowed_domains` on `onAuthStateChanged` [TS-039]

**Checkpoint**: Full user management operational. Super admin can assign roles, invite externals, manage domains.

---

## Phase 3: Content Editors Enhancement (P1 — Core CMS Function)

**Purpose**: Enhance existing editors with bilingual UX, fix price editor skeleton, add bulk save.

**Depends on**: Phase 1 complete (RBAC for editor+ gating)
**Parallel-eligible with Phase 2**: Different files, no data dependency, no logical dependency (XVI)

### Tests — Content Editing (TDD)

- [ ] T042 [P] Write unit tests for bilingual field component in `tests/unit/bilingual-editor.test.js` — stale indicator, translation needed, dirty flag [TS-022, TS-023]
- [ ] T043 [P] Write unit tests for price editor in `tests/unit/price-editor.test.js` — B2C/B2B/premium, save, validation [TS-025, TS-026]
- [ ] T044 [P] Write unit tests for i18n editor bulk save in `tests/unit/i18n-editor.test.js` — batch operation, partial failure [TS-027]

### Implementation — Editor Enhancements

- [ ] T045 [US5] Enhance `admin/js/program-editor.js` — bilingual side-by-side layout, `_es` save marks `_en` as stale (dirty flag), "translation needed" indicator [TS-022, TS-023, TS-024]
- [ ] T046 [US5] Fix `admin/js/price-editor.js` — working inputs for B2C base, B2B multipliers, premium pricing, save to Firestore [TS-025, TS-026]
- [ ] T047 [US5] Add bulk save to `admin/js/i18n-editor.js` — batch all changed keys in one Firestore operation [TS-027]

### Implementation — Cross-Editor Features

- [ ] T048 [US5] Add unsaved changes indicator + navigation guard to all editors (`program-editor.js`, `price-editor.js`, `i18n-editor.js`) — `beforeunload` + tab switch confirm [TS-028]
- [ ] T049 [US5] Add concurrent edit warning via Firestore `onSnapshot` listener — warn before save if document changed while editing [TS-040]

### Tests — Content Editing E2E

- [ ] T050 Write E2E test for bilingual editing flow in `tests/e2e/admin-flow.spec.js` — edit ES, see EN stale, save both [TS-024]

**Checkpoint**: All 3 content editors fully functional with bilingual fields, save working, navigation guards active.

---

## Phase 4: Page Management + Audit (P2 — Extends CMS Scope)

**Purpose**: Add page registry, audit log viewer, version restore, and login/logout event logging.

**Depends on**: Phase 1 complete (RBAC for visibility rules)

### Tests — Page Registry (TDD)

- [ ] T051 [P] Write unit tests for `page-registry.js` in `tests/unit/page-registry.test.js` — page listing, i18n coverage calculation, merge with Firestore overrides [TS-029, TS-030, TS-031]

### Tests — Audit Viewer (TDD)

- [ ] T052 [P] Write unit tests for `audit-viewer.js` in `tests/unit/audit-viewer.test.js` — filter by collection/user/date, chronological display, version diff [TS-032, TS-033, TS-034]

### Tests — Activity & Recovery (TDD)

- [ ] T053 [P] Write unit tests for version restore logic in `tests/unit/audit-viewer.test.js` — reconstruct from audit entries, create restore entry [TS-035, TS-036, TS-037]

### Implementation — Page Registry

- [ ] T054 [P] [US6] Create `scripts/build-page-registry.js` — scan `**/*.html`, extract title/meta/data-i18n counts/level, output `admin/data/page-registry.json`
- [ ] T055 [US6] Create `admin/js/page-registry.js` — table of pages with path, level (L1-L5), i18n coverage %, merge JSON + Firestore `page_overrides` (depends on T054) [TS-029, TS-030, TS-031]
- [ ] T056 [US6] Add page metadata editing to `admin/js/page-registry.js` — title/description/OG per language, save to `page_overrides/{path_hash}` [TS-031]

### Implementation — Audit Viewer

- [ ] T057 [US7] Create `admin/js/audit-viewer.js` — chronological log with filters (collection, admin, date range), click for full diff [TS-032, TS-033, TS-034]
- [ ] T058 [US8] Add version restore to `admin/js/audit-viewer.js` — reconstruct from audit entries, "Restore" button creates new write + audit entry (action: restore) [TS-035, TS-036]

### Implementation — Activity Logging

- [ ] T059 [US8] Update `js/cms/admin-api.js` — role-based audit entries with extended action types (role_change, login, logout, restore) [TS-037]
- [ ] T060 [US8] Add login/logout event logging in `admin/js/admin-app.js` — write audit_log on `onAuthStateChanged` + `signOut` + `navigator.sendBeacon` on `beforeunload` [TS-037]

### Implementation — Build Integration

- [ ] T061 [P] Add `build:pages` npm script in `package.json` to run `scripts/build-page-registry.js`, integrate with `build:admin`
- [ ] T062 [P] Add `admin/data/page-registry.json` to `.gitignore` with comment

**Checkpoint**: Page registry shows 81+ pages, audit viewer displays changes with filters, version restore functional.

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Documentation, cleanup, security hardening, final integration testing

**Depends on**: All phases 0-4 complete

### Documentation

- [ ] T063 [P] Create `functions/README.md` — Cloud Functions overview, deploy instructions, env config setup (XVIII)
- [ ] T064 [P] Create `admin/js/README.md` — module overview, tab routing, role gating (XVIII)
- [ ] T065 [P] Add deprecation notice to `scripts/set-admin-claim.js` pointing to `set-user-role.js`

### Integration & E2E

- [ ] T066 Update `tests/e2e/admin-flow.spec.js` — full RBAC journey (login → role check → edit → audit → logout) [TS-002, TS-003]
- [ ] T067 Write E2E test for invite flow in `tests/e2e/rbac-roles.spec.js` [TS-014, TS-015]
- [ ] T068 Run quickstart.md validation — execute all T1-T10 manual scenarios against emulator

### Security Hardening

- [ ] T069 Run secrets scan on all new files (G0 gate) — verify no API keys, emails, or domains hardcoded in source
- [ ] T070 Verify Firestore rules deny all unauthorized paths via negative test cases [TS-071, TS-072, TS-073, TS-074]

### Build & Deploy Prep

- [ ] T071 [P] Update `package.json` — add `build:admin`, `watch:admin`, `build:pages`, `deploy:functions` scripts
- [ ] T072 Verify esbuild bundle includes all new modules (user-manager, audit-viewer, page-registry, profile-editor, idle-timer)
- [ ] T073 Run full test suite: `npx vitest run` + `npx playwright test` — all green

**Checkpoint**: Feature complete, all tests green, ready for G3 gate and staging PR.

---

## Dependencies & Execution Order

### Phase Dependencies

```
Phase 0 (BUG-003 fix) ──→ Phase 1 (RBAC Core) ──→ Phase 2 (User Management)
                                                ──→ Phase 3 (Content Editors) [parallel with Phase 2]
                           Phase 1 ──→ Phase 4 (Pages + Audit)
                           All Phases ──→ Phase 5 (Polish)
```

### Parallel Opportunities

| Batch | Tasks | Rationale |
|-------|-------|-----------|
| Phase 1 tests | T008, T009, T010, T011, T012, T013, T014, T015, T016 | Different test files, no deps |
| Phase 1 scripts | T024, T025, T026 | Different script files |
| Phase 2 + Phase 3 | Entire phases | Different files, no data/logical dependency (XVI) |
| Phase 4 tests | T051, T052, T053 | Different test files |
| Phase 4 build | T061, T062 | Config files, no deps |
| Phase 5 docs | T063, T064, T065 | Independent documentation |

### Critical Path

```
T001 → T005 → T006 → T017 → T020 → T023 → T034 → T039 → T066 → T073
(build)  (verify) (fn init) (onCreate) (rules) (app.js) (users) (e2e)  (e2e)  (final)
```

**Estimated longest chain**: 13 sequential tasks on critical path

---

## Summary

| Metric | Value |
|--------|-------|
| **Total tasks** | 73 |
| **Phase 0 (BUG-003)** | 5 tasks |
| **Phase 1 (RBAC Core)** | 22 tasks |
| **Phase 2 (User Mgmt)** | 14 tasks |
| **Phase 3 (Editors)** | 9 tasks |
| **Phase 4 (Pages+Audit)** | 12 tasks |
| **Phase 5 (Polish)** | 11 tasks |
| **Parallel opportunities** | 6 batches |
| **Test specs covered** | 82/82 (TS-001 through TS-082) |

### Tasks per User Story

| Story | Tasks | Phase |
|-------|-------|-------|
| US1 (Admin Login) | T001-T005, T022, T023, T037 | Phase 0, 1, 2 |
| US2 (RBAC) | T006-T027, T034, T039, T040 | Phase 1, 2 |
| US3 (Domain/Invite) | T035, T036, T041 | Phase 2 |
| US4 (Profile) | T038 | Phase 2 |
| US5 (Bilingual Editing) | T042-T050 | Phase 3 |
| US6 (Page Management) | T054-T056 | Phase 4 |
| US7 (Audit Viewer) | T057 | Phase 4 |
| US8 (Activity/Recovery) | T058-T060 | Phase 4 |

### MVP Scope Suggestion

**MVP = Phase 0 + Phase 1 + Phase 2** (41 tasks)
- Admin page loads (BUG-003 fixed)
- 4-role RBAC enforced in UI and rules
- User management, invites, domain allowlisting
- Idle timeout, profile editor
- Validates: SC-001, SC-002, SC-003, SC-008

**MVP+1 = Phase 3** (9 tasks) — bilingual editing, price editor fix
**MVP+2 = Phase 4** (12 tasks) — page registry, audit, version restore
