# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-5 @P2
Feature: Offline Resilience and Caching
  As a site visitor
  I want the site to work offline after first visit
  So that intermittent connectivity doesn't break my experience

  Background:
    Given the content service is initialized with Firebase

  @TS-025 @FR-005 @FR-006 @SC-004 @acceptance
  Scenario: Full offline operation after first visit
    Given a visitor has loaded the site at least once with connectivity
    When they return with no internet connection
    Then all pages display cached content for programs, prices, and translations
    And no blank sections or error states are shown

  @TS-026 @FR-007 @acceptance
  Scenario: Stale cache triggers background refresh
    Given cached content exists but is older than the TTL
    When the visitor loads a page with connectivity
    Then fresh content is fetched from Firestore in the background
    And the cache is updated with new data

  @TS-027 @FR-005 @FR-007 @acceptance
  Scenario: Fresh cache served without Firestore fetch
    Given cached content exists and is within the TTL
    When the visitor loads a page
    Then the cached content is used immediately
    And no Firestore fetch is triggered

  @TS-028 @FR-007 @acceptance
  Scenario: Updated prices propagate after TTL expiry
    Given the cache contains prices from a previous session
    And the admin has updated prices in Firestore
    And the cache TTL has expired
    When the next page load occurs with connectivity
    Then the new prices are fetched and the cache is updated

  @TS-029 @FR-006 @SC-004 @acceptance
  Scenario: Mid-session Firestore failure handled gracefully
    Given Firestore becomes unreachable during a visit
    When the visitor navigates to a new page
    Then the page renders from cache
    And no interruption to the browsing experience occurs

  @TS-030 @FR-017 @SC-013 @acceptance
  Scenario: Non-migrated content continues from static source
    Given some content has not been migrated to Firestore
    When a visitor loads a page with non-migrated content
    Then the page functions from static HTML/JS sources
    And no regressions occur compared to the pre-migration behavior

  @TS-031 @SC-010 @acceptance
  Scenario: Lighthouse performance score maintained after migration
    Given the site has been fully migrated to Firestore content
    When Lighthouse is run on homepage, empresas/, and personas/
    Then the Performance score is >= 90 on all three pages
