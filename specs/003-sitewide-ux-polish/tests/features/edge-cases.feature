# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

Feature: Edge Cases for Bilingual and Toggle Behavior
  Cross-cutting edge cases that span multiple user stories, covering
  modal translation, language persistence, dynamic content, narrow
  viewports, JS-disabled fallback, and floating nav label updates.

  @TS-032 @FR-004 @P2 @acceptance
  Scenario: Modal content translates on language switch
    Given a user has a modal open on any page
    When the user switches language via the toggle
    Then the modal content translates via i18n.translate()

  @TS-033 @FR-001 @P2 @acceptance
  Scenario: Language preference persists across visits
    Given a user selects EN and bookmarks the page
    When the user returns to the bookmarked page
    Then the language preference is restored from localStorage and the page loads in EN

  @TS-034 @FR-004 @P2 @acceptance
  Scenario: Dynamically injected content translates
    Given a page has dynamically injected content via CTAHandler.js
    When the user switches language
    Then the dynamic content re-translates via i18n.translate()

  @TS-035 @FR-002 @P2 @acceptance
  Scenario: Toggle remains accessible on very narrow viewports
    Given the viewport width is less than 320px
    When viewing the language toggle
    Then the toggle remains accessible and does not break layout

  @TS-036 @FR-001 @P2 @acceptance
  Scenario: Graceful fallback when JavaScript is disabled
    Given JavaScript is disabled in the browser
    When a user loads any page
    Then the page remains in Spanish, no toggle appears, and no broken UI results

  @TS-037 @FR-006 @SC-001 @P2 @acceptance
  Scenario: Floating nav labels update on language switch mid-scroll
    Given the floating nav is visible while the user is scrolling
    When the user switches language via the toggle
    Then the floating nav labels update immediately — no stale labels remain

  Rule: Performance budget compliance
    @TS-038 @SC-007 @P1 @validation
    Scenario: Lighthouse performance score maintained
      Given all UX polish changes are applied
      When running Lighthouse on homepage, empresas/, and personas/
      Then the Performance score is >= 90 on all three pages

    @TS-039 @SC-008 @P1 @validation
    Scenario: Existing Playwright bilingual tests still pass
      Given all UX polish changes are applied
      When running the Playwright bilingual test suites (19-25)
      Then all tests pass at 100%

    @TS-040 @SC-006 @P2 @validation
    Scenario: Zero console errors across all pages
      Given all UX polish changes are applied
      When loading each public page and checking the browser console
      Then zero JavaScript errors appear
