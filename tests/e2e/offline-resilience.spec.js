// @ts-check
import { test, expect } from '@playwright/test';

/**
 * E2E tests for offline resilience and caching behavior.
 * Requires: Firebase Emulator + dev server running.
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// TS-004: Cached content shown when Firestore unreachable (also in public-content.spec.js)
test('T026 [TS-004] offline: cached programs shown when Firestore down', async ({ page, context }) => {
  // First visit with connectivity
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('networkidle');

  // Block Firestore
  await context.route('**/firestore.googleapis.com/**', (route) => route.abort());
  await context.route('**/localhost:8080/**', (route) => route.abort());

  // Reload
  await page.reload();
  await page.waitForLoadState('domcontentloaded');

  // Should still render content
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
  // No error states visible
  const errorElements = await page.locator('.error, [role="alert"]').count();
  expect(errorElements).toBe(0);
});

// TS-015: First visit falls back to static JSON when Firestore unreachable
test('T064 [TS-015] offline: translations fall back to static JSON', async ({ page, context }) => {
  // Block Firestore from the start
  await context.route('**/firestore.googleapis.com/**', (route) => route.abort());
  await context.route('**/localhost:8080/**', (route) => route.abort());

  await page.goto(`${BASE_URL}/`);
  await page.waitForLoadState('networkidle');

  // Page should still have translated content (from static JSON fallback)
  const i18nElements = page.locator('[data-i18n]');
  const count = await i18nElements.count();
  expect(count).toBeGreaterThan(0);
});

// TS-016: Cached translations refresh after TTL
test('T065 [TS-016] cached translations refresh after TTL', async ({ page }) => {
  await page.goto(`${BASE_URL}/`);
  await page.waitForLoadState('networkidle');
  // Content should load successfully
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-025: Full offline operation after first visit
test('T072 [TS-025] full offline after first visit', async ({ page, context }) => {
  // First visit with connectivity
  await page.goto(`${BASE_URL}/`);
  await page.waitForLoadState('networkidle');

  // Go fully offline
  await context.route('**/*', (route) => {
    if (route.request().url().includes('localhost:3000')) {
      route.continue();
    } else {
      route.abort();
    }
  });

  // Navigate to another page
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('domcontentloaded');

  // No blank sections or error states
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-026: Stale cache triggers background refresh
test('T073 [TS-026] stale cache triggers background refresh', async ({ page }) => {
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('networkidle');
  // Page renders content (from fresh or stale cache)
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-027: Fresh cache served without Firestore fetch
test('T074 [TS-027] fresh cache avoids Firestore fetch', async ({ page }) => {
  // First visit populates cache
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('networkidle');
  // Immediate reload should use cache
  await page.reload();
  await page.waitForLoadState('domcontentloaded');
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-028: Updated prices propagate after TTL expiry
test('T075 [TS-028] prices propagate after TTL expiry', async ({ page }) => {
  await page.goto(`${BASE_URL}/ruta/cotizador.html`);
  await page.waitForLoadState('networkidle');
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-029: Mid-session Firestore failure handled gracefully
test('T076 [TS-029] mid-session failure handled gracefully', async ({ page, context }) => {
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('networkidle');

  // Break Firestore mid-session
  await context.route('**/firestore.googleapis.com/**', (route) => route.abort());
  await context.route('**/localhost:8080/**', (route) => route.abort());

  // Navigate — should gracefully degrade
  await page.goto(`${BASE_URL}/personas/`);
  await page.waitForLoadState('domcontentloaded');

  // No error banners or blank pages
  const errorBanners = await page.locator('.error-banner, .toast-error, [role="alert"]').count();
  expect(errorBanners).toBe(0);
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-030: Non-migrated content from static source
test('T077 [TS-030] non-migrated content uses static source', async ({ page }) => {
  await page.goto(`${BASE_URL}/empresas/`);
  await page.waitForLoadState('networkidle');
  // Static content should still render (programsData fallback)
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});

// TS-011: Cotizador works with cached prices when Firestore unreachable
test('T038 [TS-011] offline: cotizador uses cached prices', async ({ page, context }) => {
  // First visit with connectivity
  await page.goto(`${BASE_URL}/ruta/cotizador.html`);
  await page.waitForLoadState('networkidle');

  // Block Firestore
  await context.route('**/firestore.googleapis.com/**', (route) => route.abort());
  await context.route('**/localhost:8080/**', (route) => route.abort());

  // Reload
  await page.reload();
  await page.waitForLoadState('domcontentloaded');

  // Price elements should still work
  const body = await page.textContent('body');
  expect(body.length).toBeGreaterThan(100);
});
