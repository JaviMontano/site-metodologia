# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-008
Feature: Deprecated Meta Tag Cleanup
  Remove deprecated meta tags that trigger browser console warnings.

  @TS-030 @FR-012 @SC-006 @P3 @acceptance
  Scenario: Zero deprecation warnings in browser console
    Given any page is loaded
    When checking the browser console
    Then zero deprecation warnings appear related to meta tags

  @TS-031 @FR-012 @SC-006 @P3 @validation
  Scenario: No apple-mobile-web-app-capable meta tags remain
    Given a full-site grep for apple-mobile-web-app-capable
    When scanning all HTML files
    Then zero instances of this deprecated meta tag remain
