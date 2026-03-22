# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-4 @P1
Feature: Admin Interface
  As an authenticated administrator
  I want a content editor at /admin/
  So that I can manage programs, prices, and translations without developer help

  @TS-017 @FR-008 @SC-006 @acceptance
  Scenario: Unauthenticated user sees login screen
    Given a user navigates to /admin/
    When they are not authenticated
    Then they see a login screen
    And the content editor is not visible

  @TS-018 @FR-009 @acceptance
  Scenario: Admin sees all programs with bilingual content
    Given an authenticated admin opens the content editor
    When they select "Programs"
    Then they see all 6 programs with their current ES and EN content side-by-side

  @TS-019 @FR-010 @SC-007 @validation
  Scenario: Save blocked when language variant missing
    Given an admin edits the "Ventas" program description
    When they submit with only the ES field filled
    Then the save is blocked with a validation error "EN translation required"

  @TS-020 @FR-011 @SC-012 @acceptance
  Scenario: Change log entry created on valid edit
    Given an admin saves a valid edit with both languages present
    When the save completes
    Then a change log entry is created with timestamp, admin ID, field changed, and previous value

  @TS-021 @FR-008 @SC-006 @acceptance
  Scenario: Non-admin authenticated user denied access
    Given a non-admin authenticated user attempts to access /admin/
    When the page loads
    Then access is denied
    And the admin interface requires the "admin" role not just authentication

  @TS-022 @FR-015 @SC-008 @acceptance
  Scenario: No secrets exposed in client-side code
    Given the admin interface is open
    When inspecting client-side code
    Then no API keys, service account credentials, or admin secrets are exposed in the browser
    And only the Firebase public client config is present

  @TS-023 @FR-022 @acceptance
  Scenario: Admin interface meets accessibility standards
    Given the admin interface is loaded
    When audited for accessibility
    Then all interactive elements are keyboard-navigable
    And proper ARIA attributes are present on form controls and dialogs
    And color contrast meets minimum thresholds

  @TS-024 @FR-023 @validation
  Scenario: Admin input is sanitized before storage
    Given an admin enters content containing HTML tags in a description field
    When the content is saved
    Then raw HTML is stripped or escaped before storage
    And only plain text or structured data is stored in Firestore
