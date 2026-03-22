const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════════
   14-fixes-regression.spec.js — Regression tests for March 2026 fixes
   Verifies: CDN removal, canonical dedup, noindex on workflows
   ═══════════════════════════════════════════════════════════════════ */

const BASE = 'http://localhost:8765';

async function gotoCollecting(page, url) {
  const jsErrors = [];
  const failed404 = [];
  page.on('pageerror', e => jsErrors.push(e.message));
  page.on('response', resp => {
    const u = resp.url();
    if (
      resp.status() === 404 &&
      !u.includes('favicon') &&
      !u.includes('fonts.googleapis') &&
      !u.includes('fonts.gstatic') &&
      !u.includes('cdn') &&
      !u.includes('cdnjs')
    ) {
      failed404.push(u);
    }
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  return { jsErrors, failed404 };
}

// ═══════════════════════════════════════════════════════════════════
//  FIX #1: CDN Tailwind removed from biblioteca-prompts
// ═══════════════════════════════════════════════════════════════════

test.describe('Fix: biblioteca-prompts no CDN Tailwind', () => {
  test('does NOT load cdn.tailwindcss.com', async ({ page }) => {
    const cdnRequests = [];
    page.on('request', req => {
      if (req.url().includes('cdn.tailwindcss.com')) {
        cdnRequests.push(req.url());
      }
    });
    await page.goto(`${BASE}/recursos/biblioteca-prompts/`, { waitUntil: 'networkidle' });
    expect(cdnRequests).toHaveLength(0);
  });

  test('loads local dist/output.css', async ({ page }) => {
    const cssRequests = [];
    page.on('request', req => {
      if (req.url().includes('output.css')) {
        cssRequests.push(req.url());
      }
    });
    await page.goto(`${BASE}/recursos/biblioteca-prompts/`, { waitUntil: 'networkidle' });
    expect(cssRequests.length).toBeGreaterThanOrEqual(1);
    expect(cssRequests.some(u => u.includes('dist/output.css'))).toBe(true);
  });

  test('no 404 local resources after CDN removal', async ({ page }) => {
    const { failed404 } = await gotoCollecting(page, `${BASE}/recursos/biblioteca-prompts/`);
    expect(failed404).toHaveLength(0);
  });

  test('page renders correctly (h1 visible)', async ({ page }) => {
    await page.goto(`${BASE}/recursos/biblioteca-prompts/`, { waitUntil: 'networkidle' });
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});

// ═══════════════════════════════════════════════════════════════════
//  FIX #2: Duplicate canonical removed from biblioteca-universal
// ═══════════════════════════════════════════════════════════════════

test.describe('Fix: biblioteca-universal single canonical', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/recursos/biblioteca-universal/`, { waitUntil: 'networkidle' });
  });

  test('has exactly ONE canonical link', async ({ page }) => {
    const canonicals = page.locator('link[rel="canonical"]');
    await expect(canonicals).toHaveCount(1);
  });

  test('canonical URL uses trailing slash (not /index.html)', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    const href = await canonical.getAttribute('href');
    expect(href).not.toContain('/index.html');
    expect(href).toMatch(/\/$/);
  });
});

// ═══════════════════════════════════════════════════════════════════
//  FIX #3: Workflow editorial/standalone have noindex
// ═══════════════════════════════════════════════════════════════════

const WORKFLOW_FILES = [
  { path: 'recursos/workflows/wf-01/wf-01-editorial.html', label: 'WF01 Editorial' },
  { path: 'recursos/workflows/wf-01/wf-01-standalone.html', label: 'WF01 Standalone' },
  { path: 'recursos/workflows/wf-02/wf-02-editorial.html', label: 'WF02 Editorial' },
  { path: 'recursos/workflows/wf-02/wf-02-standalone.html', label: 'WF02 Standalone' },
  { path: 'recursos/workflows/wf-03/wf-03-editorial.html', label: 'WF03 Editorial' },
  { path: 'recursos/workflows/wf-03/wf-03-standalone.html', label: 'WF03 Standalone' },
  { path: 'recursos/workflows/wf-04/wf-04-editorial.html', label: 'WF04 Editorial' },
  { path: 'recursos/workflows/wf-04/wf-04-standalone.html', label: 'WF04 Standalone' },
];

for (const wf of WORKFLOW_FILES) {
  test.describe(`Fix: ${wf.label} has noindex`, () => {
    test('has robots meta with noindex', async ({ page }) => {
      await page.goto(`${BASE}/${wf.path}`, { waitUntil: 'networkidle' });
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', /noindex/);
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
//  FIX #4: No CDN Tailwind on ANY production page
// ═══════════════════════════════════════════════════════════════════

const CRITICAL_PAGES = [
  '/',
  '/recursos/',
  '/recursos/biblioteca-prompts/',
  '/recursos/biblioteca-universal/',
  '/empresas/',
  '/personas/',
  '/ruta/',
  '/servicios/',
  '/contacto/',
];

test.describe('Global: no CDN Tailwind on any critical page', () => {
  for (const path of CRITICAL_PAGES) {
    test(`${path} does not load cdn.tailwindcss.com`, async ({ page }) => {
      const cdnRequests = [];
      page.on('request', req => {
        if (req.url().includes('cdn.tailwindcss.com')) {
          cdnRequests.push(req.url());
        }
      });
      await page.goto(`${BASE}${path}`, { waitUntil: 'networkidle' });
      expect(cdnRequests).toHaveLength(0);
    });
  }
});
