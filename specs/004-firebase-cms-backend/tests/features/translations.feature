# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-3 @P2
Feature: Translations from Cloud
  As a site visitor or administrator
  I want i18n dictionaries served from Firestore
  So that translation updates don't require deployment

  Background:
    Given the content service is initialized with Firebase
    And the "translations" collection is in the migrated collections list

  @TS-012 @FR-003 @SC-003 @acceptance
  Scenario: i18n module fetches translations from Firestore
    Given translations are stored in Firestore under "translations/es" and "translations/en"
    When the i18n module initializes
    Then it fetches translations from Firestore instead of static JSON files

  @TS-013 @FR-004 @SC-003 @acceptance
  Scenario: data-i18n contract preserved with Firestore source
    Given the "data-i18n" attribute contract exists on page elements
    When translations are fetched from Firestore
    Then elements translate identically to the current static JSON behavior

  @TS-014 @FR-020 @SC-009 @acceptance
  Scenario: Admin translation correction appears on reload
    Given an admin corrects a typo in the EN translation for "nav.contact"
    When a visitor reloads the page in EN mode
    Then the corrected text appears

  @TS-015 @FR-006 @FR-017 @acceptance
  Scenario: First visit falls back to static JSON when Firestore unreachable
    Given Firestore is unreachable on first visit
    And no cached translations exist
    When the i18n module initializes
    Then it falls back to the bundled static JSON files es.json and en.json
    And translations still work

  @TS-016 @FR-007 @acceptance
  Scenario: Cached translations refresh within staleness window
    Given a visitor has cached translations from a previous visit
    And Firestore has newer translations
    When the cache TTL has expired and the visitor loads a page
    Then the cache is updated with fresh translations from Firestore
