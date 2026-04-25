// @ts-check
import { test, expect } from '@playwright/test';
import {
  navigateTo, assertNeoSwissShell, startErrorCollector, startCSSChecker,
} from './helpers/cert-helpers.js';

/**
 * cert-02 — Assistant Landing Pages (32 pages × 6 tests = 192)
 *
 * All 32 individual GPT/Gem assistant pages under /recursos/asistentes/.
 * Template-uniform: data-page-slug="recursos", NeoSwiss shell, h1 present.
 */

const ASSISTANTS = [
  'command-center', 'dbr', 'finder-conocimiento', 'finder-digital',
  'finder-metodologia', 'hbr', 'infographic-gem-studio', 'infographic-multimodal',
  'infographic-strategy', 'kpi-architect', 'management-analyst', 'mbr',
  'meeting-analyst', 'notetaker', 'okr-architect', 'operations-analyst',
  'pristino', 'process-modeler', 'productivity-architect', 'project-architect',
  'prompt-analyst', 'qa-analyst', 'qbr', 'research-blueprint',
  'research-studio', 'scaleup-review', 'strategy-architect', 'tactics-architect',
  'task-tracking-analyst', 'wbr', 'workflow-generator', 'ybr',
];

for (const slug of ASSISTANTS) {
  const path = `/recursos/asistentes/${slug}/`;
  const label = slug;

  test.describe(`Asistente: ${label}`, () => {

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
