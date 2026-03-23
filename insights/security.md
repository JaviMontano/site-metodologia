# Security Insights

Decision patterns for security architecture, input handling, and access control.

### INS-SEC-001: Strip, don't escape, don't allowlist — for plain text fields
- **Origin**: TS-024 debate (sanitization strategy)
- **Pattern**: When a field's schema is "plain text", the only valid sanitization is strip (remove tags, keep text content). Escape produces visible artifacts (`&lt;`). Allowlist adds XSS surface and dependencies for a use case that doesn't exist. Strip `<script>`/`<style>` tags WITH their content (not just the tags). Use native DOMParser — zero dependencies.
- **Rationale**: The primary threat vector is copy-paste contamination from Word/web, not malicious injection by authenticated admins. Strip handles this cleanly. If rich text is needed later, add a `format` field to the schema — the strip default doesn't block extension.
- **Applies when**: Any user input field whose destination is `textContent` or string interpolation
- **Constitutional anchor**: VII (Secure by Default), XIV (Simple First), FR-023

### INS-SEC-002: Dual-layer verification for security invariants
- **Origin**: TS-022 debate (secrets in client code)
- **Pattern**: Security claims ("no secrets in code") must be verified at two layers: (1) static scan of source files, (2) runtime inspection of what reaches the browser. The marginal cost of layer 2 is near-zero when E2E tests already exist (`page.evaluate` in Playwright). The marginal benefit closes vectors that static analysis cannot detect (runtime injection, build artifacts, dynamic loading).
- **Rationale**: Static analysis catches what's in the repo. Runtime analysis catches what's in the browser. They are complementary, not redundant. For a CMS (write-capable system), this paranoia is proportional to risk.
- **Applies when**: Any security invariant that spans source code AND deployed artifacts
- **Constitutional anchor**: VII (Secure by Default — dual-layer verification)

### INS-SEC-003: Firebase public config is NOT a secret
- **Origin**: TS-022 debate (exclusion patterns)
- **Pattern**: Firebase `apiKey` in client config is a public identifier, not a secret. Security scans must exclude `firebase-config.js` from secret pattern matching. The actual access control is in Firestore Security Rules, not in API key secrecy.
- **Rationale**: False positives in security scans erode trust in the scan. Explicitly excluding known non-secrets makes the scan more reliable.
- **Applies when**: Configuring secret detection patterns for Firebase projects
- **Constitutional anchor**: VII (Secure by Default), FR-015
