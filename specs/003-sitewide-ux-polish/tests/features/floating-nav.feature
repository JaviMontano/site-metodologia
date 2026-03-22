# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-003
Feature: Floating Nav Excludes Quote from Section Menu
  The floating nav (scroll-triggered section navigation) on the homepage
  must not display the hook-quote section as a navigation item. The quote
  remains visible on the page but is excluded from section detection.

  @TS-014 @FR-006 @P1 @acceptance
  Scenario: Hook-quote excluded from floating nav
    Given a user scrolls past the main nav on the homepage
    When the floating nav appears
    Then the hook-quote text is NOT listed as a floating nav item

  @TS-015 @FR-006 @P1 @acceptance
  Scenario: Only legitimate sections in floating nav
    Given the floating nav shows section links
    When reviewing the items
    Then only legitimate page sections (Personas, Empresas, etc.) appear — no decorative content

  @TS-016 @FR-006 @P1 @acceptance
  Scenario: Quote still renders on page
    Given the hook-quote section exists on the page
    When the user scrolls to it
    Then the quote renders normally in its original position with full styling

  @TS-017 @FR-006 @P1 @acceptance
  Scenario: Decorative elements excluded site-wide
    Given other pages have their own sections
    When the floating nav detects sections
    Then the detection logic correctly excludes non-navigable decorative elements site-wide
