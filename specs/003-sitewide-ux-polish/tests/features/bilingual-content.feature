# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-002
Feature: Complete Bilingual Hero & Section Text
  Every hero section, CTA, badge, and visible text element across all
  public pages has data-i18n attributes and corresponding EN translations.
  No Spanish-only text remains in user-visible content areas. Standalone
  downloads and data files also have EN variants.

  @TS-007 @FR-004 @SC-003 @P1 @acceptance
  Scenario: Homepage hero displays in English
    Given a user switches to EN on the homepage
    When they view the hero
    Then the title, subtitle, badge, CTAs, and closing quote all display in English

  @TS-008 @FR-004 @SC-003 @P1 @acceptance
  Scenario: Empresas and personas heroes display in English
    Given a user switches to EN on any empresas/ or personas/ page
    When they view the hero
    Then all hero text, program cards, and CTAs display in English

  @TS-009 @FR-004 @SC-003 @P1 @acceptance
  Scenario: Zero Spanish remnants in EN mode
    Given a user switches to EN on any page
    When they scroll the full page
    Then zero Spanish text remains in any user-facing content (nav, hero, sections, footer, modals, CTAs)

  @TS-010 @FR-005 @P1 @acceptance
  Scenario: ES translation fidelity with HTML fallback
    Given es.json translations exist
    When compared to the HTML fallback text
    Then all ES translations exactly match the HTML source text (no mismatches)

  Rule: Bilingual coverage extends to downloadable assets
    @TS-011 @FR-017 @SC-013 @P1 @acceptance
    Scenario: Standalone HTML downloads have EN variants
      Given a standalone HTML download exists (e.g., wf-01-standalone.html)
      When checking the downloads directory
      Then an EN variant file exists (e.g., wf-01-standalone-en.html)

    @TS-012 @FR-018 @SC-013 @P1 @acceptance
    Scenario: PDF resources have EN variants
      Given a PDF exists in playbooks or bibliotecas
      When checking the resource directory
      Then an EN variant PDF exists

    @TS-013 @FR-019 @SC-013 @P1 @acceptance
    Scenario: JSON data files contain bilingual content
      Given a JSON data file is referenced by the site
      When inspecting the file contents
      Then bilingual content or EN variant keys are present
