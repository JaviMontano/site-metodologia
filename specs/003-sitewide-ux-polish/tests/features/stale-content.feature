# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-006
Feature: Stale Content & Copy Updates
  Outdated date references and temporal content are updated to reflect
  the current state (March 2026).

  @TS-026 @FR-011 @P2 @acceptance
  Scenario: Podcast section date is current
    Given the recursos/index.html podcast section says "Retoma en Febrero 2026"
    When audited
    Then it reflects the actual current status or is removed

  @TS-027 @FR-011 @P2 @acceptance
  Scenario: All date-bound references are accurate
    Given any page contains a date-bound reference
    When audited
    Then the date is accurate as of March 2026 or uses relative language
