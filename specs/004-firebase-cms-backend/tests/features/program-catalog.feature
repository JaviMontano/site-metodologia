# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-1 @P1
Feature: Program Catalog from Cloud
  As a site visitor or administrator
  I want program catalog content served from Firestore
  So that content updates don't require code deployments

  Background:
    Given the content service is initialized with Firebase
    And the "programs" collection is in the migrated collections list

  @TS-001 @FR-001 @SC-001 @acceptance
  Scenario: Program card displays Firestore content on empresas page
    Given a program catalog document exists in Firestore for "Diagnóstico" with audience "empresas"
    When a visitor loads empresas/index.html
    Then the program card displays title, tagline, description, benefits, and transformation from Firestore
    And no inline JS program objects are used as the data source

  @TS-002 @FR-001 @SC-001 @acceptance
  Scenario: Program card displays Firestore content on personas page
    Given a program catalog document exists in Firestore for "Estrategia" with audience "personas"
    When a visitor loads personas/index.html
    Then the program card displays title, tagline, description, benefits, and transformation from Firestore

  @TS-003 @FR-020 @SC-009 @acceptance
  Scenario: Admin edit appears on public page without deployment
    Given an admin has updated the "Estrategia" program description in the admin interface
    When a visitor reloads the page
    Then the updated description appears within 5 seconds
    And no code deployment was triggered

  @TS-004 @FR-006 @SC-004 @acceptance
  Scenario: Cached content displayed when Firestore is unreachable
    Given a visitor has previously loaded program content successfully
    And the Firestore backend is unreachable
    When a visitor loads any program page
    Then the page displays cached content from the last successful fetch
    And no blank card or error state is shown

  @TS-005 @FR-001 @FR-019 @acceptance
  Scenario: Language toggle uses bilingual Firestore content
    Given a program has both ES and EN content in Firestore
    When the visitor switches language via the toggle
    Then the program card text updates to the selected language
    And content comes from the same Firestore document

  @TS-006 @FR-021 @SC-011 @acceptance
  Scenario: First load on slow connection renders within threshold
    Given the site is loaded for the first time on a 3G connection
    When Firestore content loads
    Then program cards render within 2 seconds
    Or the page falls back to embedded HTML text within the same window
