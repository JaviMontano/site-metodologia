# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-4
Feature: Neo-Swiss Light Identity Coherent with Cartillas
  A visitor who knows the premium cartillas perceives immediate visual continuity:
  same typography, palette, radii, shadows, and patterns as the reference cartillas.

  # ── Acceptance Tests (from spec.md US-4) ──

  @TS-026 @FR-040 @SC-006 @P1 @acceptance
  Scenario: Home shares 100% tokens with reference cartillas
    Given the new home is published
    When compared with the reference cartillas
    Then they share tokens (colors, typography, radii, shadows, spacing) at 100%
    And both use the same CSS custom properties

  @TS-027 @FR-041 @SC-006 @P1 @acceptance
  Scenario: Light mode matches cartilla token values
    Given the home in light mode (default)
    When compared with "cartilla-onboarding-programa-v11.html"
    Then bg is "#F9FAFB"
    And navy is "#122562"
    And gold is "#FFD700"
    And the typography is identical (Poppins/Montserrat/Trebuchet MS)

  @TS-028 @FR-042 @SC-006 @P1 @acceptance
  Scenario: Dark mode mirrors cartilla dark tokens
    Given the home in dark mode (toggle)
    When compared with the dark mirror of the cartillas
    Then bg is "#0B2545"
    And text is "#F0F4F8"
    And the palette adapts with the same desaturated tokens

  @TS-029 @FR-001 @FR-002 @SC-006 @P1 @acceptance
  Scenario: CTA hierarchy preserved across all viewports
    Given the home at viewports xs, sm, md, lg, xl, and 2xl
    When inspected
    Then the hierarchy of the 3 CTAs is preserved
    And the diagnostic CTA always dominates the fold

  # ── Validation Tests (from spec FR-040..FR-045) ──

  @TS-030 @FR-043 @P1 @validation
  Scenario: Typography uses the 3-level system
    Given the home is rendered
    When CSS custom properties are inspected
    Then "--font-head" resolves to "Poppins"
    And "--font-body" resolves to "Montserrat"
    And "--font-note" resolves to "Trebuchet MS"

  @TS-031 @FR-044 @P1 @validation
  Scenario: Border radii match design system values
    Given the home is rendered
    When CSS custom properties are inspected
    Then "--radius-sm" is "6px"
    And "--radius-md" is "12px"
    And "--radius-lg" is "20px"
    And "--radius-xl" is "32px"

  @TS-032 @FR-045 @P1 @validation
  Scenario: Theme preference persists in localStorage
    Given a visitor toggles to dark mode
    When they reload the page
    Then "mdg_theme" in localStorage is "dark"
    And the page renders in dark mode without flash
