# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-004
Feature: Dead Link Elimination
  All href="#" placeholder links across the site are replaced with
  functional destinations. The contacto page includes a general inquiry
  mailto option.

  @TS-018 @FR-007 @SC-004 @P2 @acceptance
  Scenario: Beta tester link on recursos is functional
    Given a user clicks "Escríbenos para ser Beta Tester" on recursos/index.html
    When the link activates
    Then it opens a mailto or navigates to contacto/

  @TS-019 @FR-007 @SC-004 @P2 @acceptance
  Scenario: Contact email links are functional
    Given a user clicks "Contactar por Email" on any page
    When the link activates
    Then it opens mailto:contacto@metodologia.info

  @TS-020 @FR-007 @FR-016 @SC-004 @SC-012 @P2 @acceptance
  Scenario: Contacto page email link is functional
    Given a user clicks "Envíanos un email" on contacto/index.html
    When the link activates
    Then it opens mailto:contacto@metodologia.info

  @TS-021 @FR-007 @SC-004 @P2 @validation
  Scenario: Zero placeholder links remain site-wide
    Given a complete site audit
    When scanning all HTML files
    Then zero href="#" placeholder links remain on public pages (except legitimate anchor links like back-to-top or scroll targets)
