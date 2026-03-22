# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-6 @P1
Feature: Security Rules and Access Control
  As the system
  I want Firestore security rules to enforce least-privilege access
  So that only authorized admins can modify content

  @TS-032 @FR-012 @SC-005 @acceptance
  Scenario: Public visitor can read published content
    Given a public visitor who is unauthenticated
    When they attempt to read program content from Firestore
    Then the read succeeds
    And published content is accessible to anyone

  @TS-033 @FR-012 @SC-005 @acceptance
  Scenario: Public visitor cannot write to any collection
    Given a public visitor who is unauthenticated
    When they attempt to write to any Firestore collection
    Then the write is denied by security rules

  @TS-034 @FR-012 @SC-005 @SC-006 @acceptance
  Scenario: Authenticated non-admin cannot write
    Given an authenticated user without the "admin" custom claim
    When they attempt to write to Firestore
    Then the write is denied
    And authentication alone is insufficient for write access

  @TS-035 @FR-012 @FR-013 @SC-005 @acceptance
  Scenario: Admin with custom claim can write valid content
    Given an authenticated user with the "admin" custom claim
    When they write to the programs collection with all required fields and both languages
    Then the write succeeds
    And the document passes schema validation in security rules

  @TS-036 @FR-013 @SC-005 @validation
  Scenario: Security rules reject incomplete schema
    Given an authenticated admin
    When they attempt to write a program document missing the "title_en" field
    Then the write is denied by schema validation rules
    And the error indicates a required field is missing

  @TS-037 @FR-014 @SC-005 @acceptance
  Scenario: Every collection has explicit rules with no wildcards
    Given the security rules file in version control
    When reviewed for rule coverage
    Then every collection has explicit read and write rules
    And no wildcard or open permissions exist

  @TS-038 @FR-014 @SC-005 @contract
  Scenario: Security rules test suite passes in emulator
    Given a Firestore security rules test suite
    When run against the Firebase Emulator
    Then all positive access scenarios pass
    And all negative access scenarios pass

  @TS-039 @FR-012 @acceptance
  Scenario: Audit log is append-only for admins
    Given an authenticated admin
    When they attempt to delete or update an audit log entry
    Then the operation is denied by security rules
    And audit log entries are immutable once created

  @TS-040 @FR-016 @acceptance
  Scenario: All Firestore access goes through content service
    Given the codebase is scanned for Firestore API calls
    When checking for direct Firestore queries outside js/cms/
    Then zero scattered inline queries exist across pages
    And all Firestore access is mediated by the centralized content service module
