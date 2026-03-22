# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-001
Feature: Visible, Stable Language Toggle
  The ES/EN toggle is visible in the navigation bar on all pages (desktop
  and mobile), switches language instantly with zero layout shift, and
  maintains identical dimensions in both states.

  @TS-001 @FR-001 @SC-001 @P1 @acceptance
  Scenario: Desktop toggle visibility in nav bar
    Given a user loads any public page on desktop
    When the page renders
    Then the ES/EN toggle is visible in the right section of the nav bar, between Campus link and CTA button

  @TS-002 @FR-001 @SC-001 @P1 @acceptance
  Scenario: Mobile toggle visibility in hamburger menu
    Given a user loads any public page on mobile
    When the user opens the hamburger menu
    Then the ES/EN toggle is visible and tappable within the mobile menu

  @TS-003 @FR-003 @SC-002 @P1 @acceptance
  Scenario: Zero layout shift on language switch
    Given a user clicks EN on the toggle
    When the language switches
    Then no element on the page changes size, position, or causes reflow — CLS delta is 0

  @TS-004 @FR-002 @P1 @acceptance
  Scenario: ES active state styling
    Given the toggle is in ES state
    When the user views the toggle
    Then ES has the active/gold indicator and EN is semi-transparent; the overall toggle width and shape remain identical

  @TS-005 @FR-002 @P1 @acceptance
  Scenario: EN active state styling
    Given the toggle is in EN state
    When the user views the toggle
    Then EN has the active/gold indicator and ES is semi-transparent; toggle dimensions unchanged

  Rule: Accessibility requirements for toggle
    @TS-006 @FR-001 @P1 @acceptance
    Scenario: Toggle announces state changes to screen readers
      Given a user using a screen reader is on any public page
      When the user activates the language toggle
      Then the state change is announced via an aria-live="polite" region or equivalent mechanism
