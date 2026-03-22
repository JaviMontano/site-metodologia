# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-007
Feature: Missing Asset Deployment
  All locally-tracked files referenced by the site are included in
  the deployment. Zero 404 errors across all pages.

  @TS-028 @FR-008 @SC-005 @P2 @acceptance
  Scenario: business-logic.json serves successfully
    Given the ruta/ page references data/business-logic.json
    When loaded in production
    Then the file is served with 200 status, and mode-switching works

  @TS-029 @FR-013 @SC-005 @P2 @validation
  Scenario: Zero 404 errors across all pages
    Given a full-site resource audit
    When checking all script/link/img references
    Then zero 404 errors occur
