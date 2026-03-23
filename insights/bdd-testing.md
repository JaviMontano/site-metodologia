# BDD & Testing Insights

Decision patterns for test strategy, BDD implementation, runner selection, and verification methods.

### INS-BDD-001: Gherkin is spec, step definition is implementation — runner is free
- **Origin**: TS-022/TS-040 debate (static vs runtime verification)
- **Pattern**: A `.feature` file documents WHAT behavior is expected (spec). A step definition implements HOW it's verified (implementation). The test runner matches the nature of the verification: browser tests → Playwright, code structure → Vitest/grep, security rules → Firebase Emulator, data layer → Emulator integration. The `@TS-xxx` tag is the traceability bridge. Never force all tests through one runner.
- **Rationale**: Forcing a code-scan test through Playwright is like using a browser to run `grep` — technically possible but semantically wrong and 7.5x slower. The runner-agnostic principle preserves BDD rigor (traceability, specification language) without runtime overhead.
- **Applies when**: Choosing how to implement any BDD step definition
- **Constitutional anchor**: XV (runner-agnostic step definitions), XII (Code Sustainability)

### INS-BDD-002: If a step cannot generate a step definition, remove it
- **Origin**: TS-003 clarification (prior session)
- **Pattern**: Every Gherkin step must map to an automatable step definition. If a step describes something that cannot be programmatically verified (e.g., "no deployment was triggered"), it's not BDD — it's documentation disguised as a test. Remove it. If the behavior it describes is important, find an observable proxy (e.g., "appears within 5 seconds" proves no deployment since deployments take minutes).
- **Rationale**: Unautomatable steps create false confidence — the scenario appears to cover the behavior but no test actually runs. Worse, they block step definition generation and create skeleton tests that never fail.
- **Applies when**: Writing or reviewing any Gherkin step — always ask "what code runs for this step?"
- **Constitutional anchor**: IX (TDD — tests run in automation), XV (BDD as specification language)

### INS-BDD-003: One scenario, one concern — split by verification mechanism
- **Origin**: TS-020 debate (audit log vs UX feedback)
- **Pattern**: If a scenario would require two different verification mechanisms (e.g., database read + UI assertion), it's testing two concerns. Split it. Each scenario should have a single failure mode — when it fails, you know exactly what broke without investigation. Data integrity scenarios verify the data layer. UX scenarios verify the user experience. Combining them produces ambiguous failures.
- **Rationale**: TS-020 could have combined "log was created" (Emulator) with "admin sees confirmation" (Playwright). But a failure wouldn't tell you which layer broke. Separation makes each test diagnostic, not just detective.
- **Applies when**: A scenario's Then clauses would require different runners or access patterns
- **Constitutional anchor**: XV (Full-Spectrum — one angle per scenario), IX (TDD)

### INS-BDD-004: Vague comparison words are not testable assertions
- **Origin**: TS-013 clarification (prior session)
- **Pattern**: Words like "identically", "correctly", "properly", "as expected" are not testable. Replace them with specific comparison operations: string equality, numeric range, set membership, existence check. The Then clause should read like pseudocode that a developer can directly translate into an assertion.
- **Rationale**: "Translates identically" could mean visual match, string match, semantic match, or behavioral match. "Displays the same text as its corresponding key" has exactly one implementation. Precision in Gherkin eliminates ambiguity before it reaches implementation.
- **Applies when**: Writing any Then/And clause — if it contains an adjective, it's probably vague
- **Constitutional anchor**: XV (Scenario Precision), XIII (Evidence before assertion)
