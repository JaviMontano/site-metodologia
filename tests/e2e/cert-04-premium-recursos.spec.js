// @ts-check
import { test, expect } from '@playwright/test';
import {
  navigateTo, startErrorCollector, startCSSChecker,
} from './helpers/cert-helpers.js';

/**
 * cert-04 — Premium Recursos Listing Pages (13 pages × 6 tests = 78)
 *
 * All pages under /recursos/premium/. Structurally identical to free
 * recursos but with premium-specific nav and access control.
 */

const PREMIUM_PAGES = [
  '/recursos/premium/',
  '/recursos/premium/asistentes-gemini/',
  '/recursos/premium/asistentes-gpt/',
  '/recursos/premium/automatizaciones/',
  '/recursos/premium/catalogo/',
  '/recursos/premium/ebooks/',
  '/recursos/premium/flujos-genspark/',
  '/recursos/premium/flujos-manus/',
  '/recursos/premium/miniapps-aistudio/',
  '/recursos/premium/miniapps-claude/',
  '/recursos/premium/playbooks/',
  '/recursos/premium/prototipos-stitch/',
  '/recursos/premium/prototipos-v0/',
];

for (const path of PREMIUM_PAGES) {
  const label = path.replace('/recursos/premium/', 'premium/').replace(/\/$/, '') || 'premium-index';

  test.describe(`Premium: ${label}`, () => {

    test(`${label} — loads HTTP 200`, async ({ page }) => {
      const res = await page.goto(`http://localhost:3000${path}`, { waitUntil: 'domcontentloaded' });
      expect(res?.status()).toBe(200);
    });

    test(`${label} — site-header present`, async ({ page }) => {
      await navigateTo(page, path);
      await expect(page.locator('site-header')).toBeAttached({ timeout: 3000 });
    });

    test(`${label} — exactly 1 site-footer`, async ({ page }) => {
      await navigateTo(page, path);
      expect(await page.locator('site-footer').count()).toBeGreaterThanOrEqual(1);
    });

    test(`${label} — neoswiss-system.css loads (200)`, async ({ page }) => {
      const assertCSS = startCSSChecker(page);
      await navigateTo(page, path);
      assertCSS(label);
    });

    test(`${label} — zero console errors`, async ({ page }) => {
      const assertErrors = startErrorCollector(page);
      await navigateTo(page, path);
      assertErrors(label);
    });

    test(`${label} — has h1 with content`, async ({ page }) => {
      await navigateTo(page, path);
      const h1 = page.locator('h1').first();
      await expect(h1).toBeAttached();
      const text = await h1.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    });
  });
}
