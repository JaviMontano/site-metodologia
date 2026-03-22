# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-005
Feature: Visual Consistency Across Pages
  All pages follow MetodologIA brand standards: consistent card styling,
  CTA colors, zigzag layout patterns, micro-interactions, and approved
  brand terminology.

  @TS-022 @FR-009 @SC-010 @P2 @acceptance
  Scenario: Uniform card styling in solution rows
    Given a user views the 4-card solution row on empresas/ and personas/
    When comparing cards
    Then all cards use the same background style (no single gold card among dark cards)

  @TS-023 @FR-010 @SC-011 @P2 @acceptance
  Scenario: Zigzag layout pattern applied to content sections
    Given the estandares/layout-patterns.md zigzag standard
    When auditing content sections
    Then sections with text + visual columns alternate text-left/text-right per the zigzag pattern

  @TS-024 @FR-014 @P2 @acceptance
  Scenario: Micro-interactions on major content sections
    Given the estandares/micro-interactions.md standard
    When auditing sections
    Then every major section has at least one attention-grabbing micro-interaction (pulse, glow, shimmer)

  @TS-025 @FR-015 @SC-009 @P2 @acceptance
  Scenario: Brand-approved terminology in headings
    Given the brand voice standard (brand_voice_v2.md)
    When auditing heading copy
    Then pages use approved terminology (Metodo/Sistema, not Hack/Truco; (R)Evolucion, not Transformacion)
