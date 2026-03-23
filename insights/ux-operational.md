# UX & Operational Insights

Decision patterns for user experience, admin workflows, and operational coverage.

### INS-UX-001: Data confirmation ≠ UX confirmation — both are needed, separately
- **Origin**: TS-020 debate (audit log vs UI feedback)
- **Pattern**: When a system writes data (audit log, save operation), there are two distinct verification needs: (1) the data was actually written correctly (data integrity), and (2) the user received feedback that the action succeeded (UX). These are different test scenarios with different runners and different failure modes. Never combine them into one scenario.
- **Rationale**: An admin could see "Saved!" while the audit log silently failed (batch write partial success). Or the audit log could write perfectly while the UI shows no feedback (missing toast/confirmation). Each failure needs its own detection mechanism.
- **Applies when**: Any feature where a user action produces both a data side-effect and a UI response
- **Constitutional anchor**: XV (operational coverage angle + data coverage angle), II (Accessibility — feedback is accessible UX)
