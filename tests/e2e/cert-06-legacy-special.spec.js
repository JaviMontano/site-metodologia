// @ts-check
import { test, expect } from '@playwright/test';
import { navigateTo, startErrorCollector } from './helpers/cert-helpers.js';

/**
 * cert-06 — Legacy + Special Pages (4 pages × 4 tests = 16)
 *
 * Pages that use older templates or have special behavior:
 * - biblioteca-prompts: legacy template, no NeoSwiss shell
 * - biblioteca-universal: legacy template, no NeoSwiss shell
 * - 404.html: error page with NeoSwiss shell
 * - Montano_Javier_Canonical.html: standalone bio page
 *
 * Reduced criteria: HTTP 200, has content, no fatal JS errors.
 */

test.describe('Legacy: biblioteca-prompts', () => {
  const path = '/recursos/biblioteca-prompts/';

  test('loads HTTP 200', async ({ page }) => {
    const res = await page.goto(`http://localhost:3000${path}`, { waitUntil: 'domcontentloaded' });
    expect(res?.status()).toBe(200);
  });

  test('has heading with content', async ({ page }) => {
    await navigateTo(page, path);
    const heading = page.locator('h1, h2, h3').first();
    await expect(heading).toBeAttached();
    const text = await heading.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('zero console errors', async ({ page }) => {
    const assertErrors = startErrorCollector(page);
    await navigateTo(page, path);
    assertErrors('biblioteca-prompts');
  });

  test('has body content (not blank)', async ({ page }) => {
    await navigateTo(page, path);
    const text = await page.locator('body').textContent();
    expect(text?.trim().length).toBeGreaterThan(50);
  });
});

test.describe('Legacy: biblioteca-universal', () => {
  const path = '/recursos/biblioteca-universal/';

  test('loads HTTP 200', async ({ page }) => {
    const res = await page.goto(`http://localhost:3000${path}`, { waitUntil: 'domcontentloaded' });
    expect(res?.status()).toBe(200);
  });

  test('has h1 with content', async ({ page }) => {
    await navigateTo(page, path);
    const h1 = page.locator('h1').first();
    await expect(h1).toBeAttached();
    const text = await h1.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test('zero console errors', async ({ page }) => {
    const assertErrors = startErrorCollector(page);
    await navigateTo(page, path);
    assertErrors('biblioteca-universal');
  });

  test('has body content (not blank)', async ({ page }) => {
    await navigateTo(page, path);
    const text = await page.locator('body').textContent();
    expect(text?.trim().length).toBeGreaterThan(50);
  });
});

test.describe('Special: 404 page', () => {
  test('loads HTTP 200 (static serve)', async ({ page }) => {
    const res = await page.goto('http://localhost:3000/404.html', { waitUntil: 'domcontentloaded' });
    expect(res?.status()).toBe(200);
  });

  test('has error heading', async ({ page }) => {
    await navigateTo(page, '/404.html');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeAttached();
  });

  test('has CTA back to home', async ({ page }) => {
    await navigateTo(page, '/404.html');
    const link = page.locator('a[href="/"], a[href="./"]').first();
    await expect(link).toBeAttached();
  });

  test('zero console errors', async ({ page }) => {
    const assertErrors = startErrorCollector(page);
    await navigateTo(page, '/404.html');
    assertErrors('404');
  });
});

test.describe('Special: Canonical bio', () => {
  test('loads HTTP 200', async ({ page }) => {
    const res = await page.goto('http://localhost:3000/Montano_Javier_Canonical.html', { waitUntil: 'domcontentloaded' });
    expect(res?.status()).toBe(200);
  });

  test('has content (not blank)', async ({ page }) => {
    await navigateTo(page, '/Montano_Javier_Canonical.html');
    const text = await page.locator('body').textContent();
    expect(text?.trim().length).toBeGreaterThan(50);
  });
});
