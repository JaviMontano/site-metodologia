# RBAC Governance Insights

Decision patterns for role-based access control governance in CMS systems.

### INS-RBAC-001: Separate role definition from role governance
- **Origin**: Socratic debate — Constitution v6.0.0 → v6.1.0 evolution
- **Pattern**: The *specific roles* a system supports (super_admin, editor, viewer) belong in the feature spec. The *principles* governing how roles are managed (least privilege, separation of duties, irrevocable bootstrap) belong in the constitution. Mixing them creates either an over-specified constitution or an under-governed spec.
- **Rationale**: The spec 006 defined 4 roles but the constitution only said "role-based authorization" — this left edge cases (last-admin demotion, self-escalation) ungoverned until implementation, when fixing them is 10x more expensive.
- **Applies when**: Any feature that introduces tiered access control. Check: does the constitution govern the management lifecycle (assign, escalate, revoke, audit), or just the existence of roles?
- **Constitutional anchor**: VII (Secure by Default — access governance), XIII (Think First)

### INS-RBAC-002: Editors with full content access is simpler than per-document assignment
- **Origin**: Clarify session — Gap 1 of spec 006
- **Pattern**: For teams of 1-10 CMS users, giving editors access to ALL content types (programs, pricing, translations) is simpler than per-document or per-collection assignment. The separation of duties is achieved by role level (editor vs admin vs super_admin), not by content scope. Per-document assignment adds an assignment UI, storage model, and security rule complexity that doesn't justify itself at this scale.
- **Rationale**: INS-004 (separate platform defaults from feature requests) applies — the simpler model does everything the team needs. Assignment scope is a feature to add WHEN the team grows past the threshold where full access becomes a risk.
- **Applies when**: Deciding between "editors can edit everything" vs "editors are assigned to specific content"
- **Constitutional anchor**: XIV (Simple First), VII (Secure by Default — least privilege still satisfied: editors can't manage users)

### INS-RBAC-003: Bootstrap accounts are security invariants, not configuration
- **Origin**: Socratic debate — irrevocable bootstrap principle
- **Pattern**: The initial super_admin accounts (hardcoded in the system) are not "default configuration" that can be changed — they are a security invariant ensuring the system always has a recovery path. They cannot be removed or demoted via the UI. This is the same class of protection as "the system must have at least one admin" — it's a constraint, not a preference.
- **Rationale**: If all super_admins could demote themselves, a single UI mistake could lock everyone out of user management permanently. The bootstrap accounts are the "break glass" mechanism.
- **Applies when**: Designing admin account management — always ask "what happens if all admins demote themselves?"
- **Constitutional anchor**: VII (Secure by Default — irrevocable bootstrap)
