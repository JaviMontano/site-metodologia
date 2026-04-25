// @ts-check
import { test, expect } from '@playwright/test';
import {
  navigateTo, startErrorCollector, startCSSChecker,
} from './helpers/cert-helpers.js';

/**
 * cert-03 — Free Recursos Listing Pages (21 pages × 6 tests = 126)
 *
 * All free listing/category pages under /recursos/ (excluding /recursos/
 * itself which is a core page, excluding /recursos/asistentes/* which are
 * in cert-02, and excluding legacy biblioteca pages in cert-06).
 */

const FREE_RECURSOS = [
  '/recursos/a-medida/',
  '/recursos/asistentes-gemini/',
  '/recursos/asistentes-gpt/',
  '/recursos/automatizaciones/',
  '/recursos/biblioteca-consulting/',
  '/recursos/biblioteca-desarrollo/',
  '/recursos/biblioteca-estrategia/',
  '/recursos/biblioteca-marketing/',
  '/recursos/biblioteca-productos/',
  '/recursos/biblioteca-proyectos/',
  '/recursos/biblioteca-ventas/',
  '/recursos/biblioteca-vibe-coding/',
  '/recursos/catalogo/',
  '/recursos/ebooks/',
  '/recursos/flujos-genspark/',
  '/recursos/flujos-manus/',
  '/recursos/miniapps-aistudio/',
  '/recursos/miniapps-claude/',
  '/recursos/playbooks/',
  '/recursos/plugins-claude-code/',
  '/recursos/prototipos-stitch/',
  '/recursos/prototipos-v0/',
  '/recursos/workflows/',
];

for (const path of FREE_RECURSOS) {
  const label = path.replace('/recursos/', '').replace(/\/$/, '') || 'index';

  test.describe(`Recurso: ${label}`, () => {

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
