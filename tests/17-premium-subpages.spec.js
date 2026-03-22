const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════════
   17-premium-subpages.spec.js
   Coverage for all 13 premium sub-pages under /recursos/premium/
   ═══════════════════════════════════════════════════════════════════ */

const BASE = 'http://localhost:8765';
const VIEWPORTS = [320, 375, 768, 1024, 1440];

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

const PREMIUM_PAGES = [
  { slug: 'recursos/premium/asistentes-gemini/',  label: 'Premium Gemini' },
  { slug: 'recursos/premium/asistentes-gpt/',     label: 'Premium GPT' },
  { slug: 'recursos/premium/automatizaciones/',    label: 'Premium Automatizaciones' },
  { slug: 'recursos/premium/catalogo/',            label: 'Premium Catálogo' },
  { slug: 'recursos/premium/ebooks/',              label: 'Premium Ebooks' },
  { slug: 'recursos/premium/flujos-genspark/',     label: 'Premium GenSpark' },
  { slug: 'recursos/premium/flujos-manus/',        label: 'Premium Manus' },
  { slug: 'recursos/premium/miniapps-aistudio/',   label: 'Premium AI Studio' },
  { slug: 'recursos/premium/miniapps-claude/',     label: 'Premium Claude' },
  { slug: 'recursos/premium/playbooks/',           label: 'Premium Playbooks' },
  { slug: 'recursos/premium/prototipos-stitch/',   label: 'Premium Stitch' },
  { slug: 'recursos/premium/prototipos-v0/',       label: 'Premium V0' },
];

for (const pg of PREMIUM_PAGES) {
  test.describe(`${pg.label} (${pg.slug})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${BASE}/${pg.slug}`, { waitUntil: 'networkidle' });
    });

    // ── SEO ───────────────────────────────────────────────
    test('has robots meta with index', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', /index/);
    });

    test('has description meta >= 20 chars', async ({ page }) => {
      const desc = page.locator('meta[name="description"]');
      const content = await desc.getAttribute('content');
      expect(content.length).toBeGreaterThanOrEqual(20);
    });

    test('has OG tags', async ({ page }) => {
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
    });

    test('has canonical link', async ({ page }) => {
      const canonical = page.locator('link[rel="canonical"]');
      await expect(canonical).toHaveAttribute('href', /.+/);
    });

    // ── JS errors / 404s ─────────────────────────────────
    test('no JS errors on load', async ({ page }) => {
      const { jsErrors } = await gotoCollecting(page, `${BASE}/${pg.slug}`);
      const real = jsErrors.filter(e =>
        !e.includes('fonts.googleapis') && !e.includes('favicon')
      );
      expect(real).toHaveLength(0);
    });

    test('no 404 local resources', async ({ page }) => {
      const { failed404 } = await gotoCollecting(page, `${BASE}/${pg.slug}`);
      expect(failed404).toHaveLength(0);
    });

    // ── Shell ─────────────────────────────────────────────
    test('SiteHeader renders', async ({ page }) => {
      await expect(page.locator('site-header')).toHaveCount(1);
    });

    test('SiteFooter renders', async ({ page }) => {
      await expect(page.locator('site-footer')).toHaveCount(1);
    });

    // ── Content ───────────────────────────────────────────
    test('h1 visible', async ({ page }) => {
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });

    test('main content visible', async ({ page }) => {
      const main = page.locator('main');
      await expect(main).toBeVisible();
    });

    // ── Pricing presence ────────────────────────────────
    test('has pricing or CTA information', async ({ page }) => {
      const main = page.locator('main');
      const text = await main.textContent();
      // Premium pages should mention price, COP, USD, or CTA
      const hasPricing = /\$|COP|USD|premium|suscri|precio|plan/i.test(text);
      expect(hasPricing).toBe(true);
    });

    // ── Horizontal overflow ───────────────────────────────
    for (const vw of VIEWPORTS) {
      test(`no horizontal overflow at ${vw}px`, async ({ page }) => {
        await page.setViewportSize({ width: vw, height: 800 });
        await page.goto(`${BASE}/${pg.slug}`, { waitUntil: 'networkidle' });
        const overflow = await page.evaluate(() =>
          document.documentElement.scrollWidth > document.documentElement.clientWidth
        );
        expect(overflow).toBe(false);
      });
    }
  });
}
