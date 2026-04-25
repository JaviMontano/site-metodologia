// @ts-check
import { test, expect } from '@playwright/test';
import {
  navigateTo, startErrorCollector, startCSSChecker,
} from './helpers/cert-helpers.js';

/**
 * cert-05 — Detail Pages (5 pages × 6 tests = 30)
 *
 * Workflow detail pages (wf-01..04) + playbook detail (item-01).
 */

const DETAIL_PAGES = [
  { path: '/recursos/workflows/wf-01/', label: 'Workflow 01' },
  { path: '/recursos/workflows/wf-02/', label: 'Workflow 02' },
  { path: '/recursos/workflows/wf-03/', label: 'Workflow 03' },
  { path: '/recursos/workflows/wf-04/', label: 'Workflow 04' },
  { path: '/recursos/playbooks/item-01/', label: 'Playbook 01' },
];

for (const pg of DETAIL_PAGES) {
  test.describe(`Detail: ${pg.label}`, () => {

    test(`${pg.label} — loads HTTP 200`, async ({ page }) => {
      const res = await page.goto(`http://localhost:3000${pg.path}`, { waitUntil: 'domcontentloaded' });
      expect(res?.status()).toBe(200);
    });

    test(`${pg.label} — site-header present`, async ({ page }) => {
      await navigateTo(page, pg.path);
      await expect(page.locator('site-header')).toBeAttached({ timeout: 3000 });
    });

    test(`${pg.label} — exactly 1 site-footer`, async ({ page }) => {
      await navigateTo(page, pg.path);
      expect(await page.locator('site-footer').count()).toBeGreaterThanOrEqual(1);
    });

    test(`${pg.label} — neoswiss-system.css loads (200)`, async ({ page }) => {
      const assertCSS = startCSSChecker(page);
      await navigateTo(page, pg.path);
      assertCSS(pg.label);
    });

    test(`${pg.label} — zero console errors`, async ({ page }) => {
      const assertErrors = startErrorCollector(page);
      await navigateTo(page, pg.path);
      assertErrors(pg.label);
    });

    test(`${pg.label} — has h1 with content`, async ({ page }) => {
      await navigateTo(page, pg.path);
      const h1 = page.locator('h1').first();
      await expect(h1).toBeAttached();
      const text = await h1.textContent();
      expect(text?.trim().length).toBeGreaterThan(0);
    });
  });
}
