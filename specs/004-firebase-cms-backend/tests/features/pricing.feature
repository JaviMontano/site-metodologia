# DO NOT MODIFY SCENARIOS
# These .feature files define expected behavior derived from requirements.
# During implementation:
#   - Write step definitions to match these scenarios
#   - Fix code to pass tests, don't modify .feature files
#   - If requirements change, re-run /iikit-04-testify

@US-2 @P1
Feature: Pricing from Cloud
  As a site visitor or administrator
  I want all pricing data served from Firestore
  So that price changes take effect immediately without editing multiple files

  Background:
    Given the content service is initialized with Firebase
    And the "pricing" collection is in the migrated collections list

  @TS-007 @FR-002 @SC-002 @acceptance
  Scenario: Cotizador uses B2C prices from Firestore
    Given B2C base prices are stored in Firestore under "pricing/b2c_base"
    When a visitor loads the cotizador
    Then checkbox prices and total calculations use Firestore values
    And no hardcoded "data-price" attributes are used as the data source

  @TS-008 @FR-002 @SC-002 @acceptance
  Scenario: Empresas cotizador uses B2B multipliers from Firestore
    Given B2B multipliers are stored in Firestore under "pricing/b2b_multipliers"
    When the empresas cotizador calculates a total
    Then it uses Firestore multipliers instead of inline JS constants

  @TS-009 @FR-002 @SC-002 @acceptance
  Scenario: Premium catalog displays Firestore prices
    Given premium resource prices are stored in Firestore under "pricing/premium"
    When a visitor loads recursos/premium/index.html
    Then the pricing table displays Firestore values

  @TS-010 @FR-020 @SC-009 @acceptance
  Scenario: Admin price change propagates to cotizador
    Given an admin changes the "Bootcamp" base price from 920000 to 1100000 COP
    When a visitor loads the cotizador
    Then the new price is reflected in all calculations

  @TS-011 @FR-006 @SC-004 @acceptance
  Scenario: Cotizador works with cached prices when Firestore unreachable
    Given a visitor has previously loaded pricing data successfully
    And Firestore is unreachable
    When a visitor uses the cotizador
    Then cached prices are used in calculations
    And no NaN or broken totals appear
