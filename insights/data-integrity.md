# Data Integrity Insights

Decision patterns for data models, audit trails, schemas, and storage design.

### INS-DATA-001: Audit log fields must be qualified paths, not generic names
- **Origin**: TS-020 debate (audit log verification)
- **Pattern**: When logging "which field changed", the value must be a fully qualified path that identifies collection, document, field, and variant without ambiguity: `programs/diagnostico.description_es`, not `description`. A generic field name is useless for recovery — the admin must know exactly where to look.
- **Rationale**: The spec's recovery mechanism is manual restore from audit log (edge case). If the `field` says "description", the admin has to guess which of 12 program descriptions (6 programs × 2 languages) was changed. Qualified paths make the log self-sufficient for recovery without additional context.
- **Applies when**: Designing any audit/change log schema — always ask "can someone restore from this log without other context?"
- **Constitutional anchor**: VI (Content Authority — single source), VII (Secure by Default), FR-011, SC-012

### INS-DATA-002: Schema validation must cover every collection, not just the first
- **Origin**: TS-036 clarification (prior session)
- **Pattern**: If a requirement says "validate schema on write", one test scenario per collection type is the minimum. Testing schema validation only on the first collection implemented (programs) and assuming it works for others (pricing, translations) is a coverage gap. Each collection has different required fields and different failure modes.
- **Rationale**: Firestore security rules are per-collection. A rule that validates `title_es` in programs says nothing about `base_price` in pricing. Each collection's schema validation is independent code that needs independent testing.
- **Applies when**: Any requirement that applies to "all X" — ensure at least one test per X, not one test total
- **Constitutional anchor**: XV (Full-Spectrum — per-collection), IX (TDD), VII (Security Rules), FR-013
