const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════════
   15-bibliotecas-workflows.spec.js
   Coverage for: biblioteca-universal, biblioteca-prompts, workflows,
   plugins-claude-code, and remaining uncovered resource pages
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

// ═══════════════════════════════════════════════════════════════════
//  1. BIBLIOTECA UNIVERSAL
// ═══════════════════════════════════════════════════════════════════

test.describe('Biblioteca Universal (recursos/biblioteca-universal/)', () => {
  const URL = `${BASE}/recursos/biblioteca-universal/`;

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' });
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

  test('has exactly one canonical link', async ({ page }) => {
    const canonicals = page.locator('link[rel="canonical"]');
    await expect(canonicals).toHaveCount(1);
  });

  test('has OG tags', async ({ page }) => {
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
  });

  test('has JSON-LD structured data', async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThanOrEqual(1);
    const content = await jsonLd.first().textContent();
    const parsed = JSON.parse(content);
    expect(parsed['@type']).toBeTruthy();
  });

  // ── JS errors / 404s ─────────────────────────────────
  test('no JS errors on load', async ({ page }) => {
    const { jsErrors } = await gotoCollecting(page, URL);
    const real = jsErrors.filter(e =>
      !e.includes('fonts.googleapis') && !e.includes('favicon')
    );
    expect(real).toHaveLength(0);
  });

  test('no 404 local resources', async ({ page }) => {
    const { failed404 } = await gotoCollecting(page, URL);
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
  test('h1 contains "Biblioteca Universal"', async ({ page }) => {
    await expect(page.locator('h1')).toContainText(/Biblioteca/i);
  });

  test('search input exists', async ({ page }) => {
    const search = page.locator('#heroSearchInput');
    await expect(search).toBeVisible();
  });

  test('prompts grid loads with cards', async ({ page }) => {
    const grid = page.locator('#promptsGrid');
    await expect(grid).toBeAttached();
    // Wait for JS to inject prompts
    await page.waitForTimeout(1000);
    const cards = grid.locator('article');
    const count = await cards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('prompts count badge updates', async ({ page }) => {
    await page.waitForTimeout(1000);
    const badge = page.locator('#promptsCount');
    const text = await badge.textContent();
    expect(text).toMatch(/\d+ prompts/);
    const num = parseInt(text);
    expect(num).toBeGreaterThan(0);
  });

  test('search filters prompts', async ({ page }) => {
    await page.waitForTimeout(1000);
    const input = page.locator('#heroSearchInput');
    await input.fill('estrategia');
    await page.waitForTimeout(500);
    const results = page.locator('#inlineSearchResults');
    await expect(results).not.toHaveClass(/hidden/);
  });

  test('Cmd+K focuses search', async ({ page }) => {
    await page.keyboard.press('Meta+k');
    const input = page.locator('#heroSearchInput');
    await expect(input).toBeFocused();
  });

  test('Prompting 101 section visible', async ({ page }) => {
    const section = page.locator('text=Prompting 101');
    await expect(section).toBeVisible();
  });

  test('breadcrumb nav exists', async ({ page }) => {
    const bc = page.locator('nav').filter({ hasText: 'Recursos' }).first();
    await expect(bc).toBeVisible();
  });

  // ── Horizontal overflow ───────────────────────────────
  for (const vw of VIEWPORTS) {
    test(`no horizontal overflow at ${vw}px`, async ({ page }) => {
      await page.setViewportSize({ width: vw, height: 800 });
      await page.goto(URL, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  2. BIBLIOTECA DE PROMPTS (Hub)
// ═══════════════════════════════════════════════════════════════════

test.describe('Biblioteca Prompts Hub (recursos/biblioteca-prompts/)', () => {
  const URL = `${BASE}/recursos/biblioteca-prompts/`;

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' });
  });

  test('has robots meta with index', async ({ page }) => {
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /index/);
  });

  test('no JS errors on load', async ({ page }) => {
    const { jsErrors } = await gotoCollecting(page, URL);
    const real = jsErrors.filter(e =>
      !e.includes('fonts.googleapis') && !e.includes('favicon')
    );
    expect(real).toHaveLength(0);
  });

  test('no 404 local resources', async ({ page }) => {
    const { failed404 } = await gotoCollecting(page, URL);
    expect(failed404).toHaveLength(0);
  });

  test('SiteHeader and SiteFooter render', async ({ page }) => {
    await expect(page.locator('site-header')).toHaveCount(1);
    await expect(page.locator('site-footer')).toHaveCount(1);
  });

  test('h1 visible', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('links to biblioteca-universal', async ({ page }) => {
    const link = page.locator('a[href*="biblioteca-universal"]');
    await expect(link.first()).toBeAttached();
  });

  for (const vw of VIEWPORTS) {
    test(`no horizontal overflow at ${vw}px`, async ({ page }) => {
      await page.setViewportSize({ width: vw, height: 800 });
      await page.goto(URL, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  3. PLUGINS CLAUDE CODE
// ═══════════════════════════════════════════════════════════════════

test.describe('Plugins Claude Code (recursos/plugins-claude-code/)', () => {
  const URL = `${BASE}/recursos/plugins-claude-code/`;

  test.beforeEach(async ({ page }) => {
    await page.goto(URL, { waitUntil: 'networkidle' });
  });

  test('has robots meta with index', async ({ page }) => {
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /index/);
  });

  test('has description meta >= 20 chars', async ({ page }) => {
    const desc = page.locator('meta[name="description"]');
    const content = await desc.getAttribute('content');
    expect(content.length).toBeGreaterThanOrEqual(20);
  });

  test('no JS errors on load', async ({ page }) => {
    const { jsErrors } = await gotoCollecting(page, URL);
    const real = jsErrors.filter(e =>
      !e.includes('fonts.googleapis') && !e.includes('favicon')
    );
    expect(real).toHaveLength(0);
  });

  test('no 404 local resources', async ({ page }) => {
    const { failed404 } = await gotoCollecting(page, URL);
    expect(failed404).toHaveLength(0);
  });

  test('SiteHeader and SiteFooter render', async ({ page }) => {
    await expect(page.locator('site-header')).toHaveCount(1);
    await expect(page.locator('site-footer')).toHaveCount(1);
  });

  test('h1 visible with plugin-related content', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('has plugin cards (MAO, Pristino)', async ({ page }) => {
    const main = page.locator('main');
    await expect(main).toContainText(/MAO|Pristino/i);
  });

  for (const vw of VIEWPORTS) {
    test(`no horizontal overflow at ${vw}px`, async ({ page }) => {
      await page.setViewportSize({ width: vw, height: 800 });
      await page.goto(URL, { waitUntil: 'networkidle' });
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth > document.documentElement.clientWidth
      );
      expect(overflow).toBe(false);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  4. WORKFLOWS HUB (index page, NOT editorial/standalone)
// ═══════════════════════════════════════════════════════════════════

test.describe('Workflows Hub (recursos/workflows/)', () => {
  const URL = `${BASE}/recursos/workflows/`;

  test.beforeEach(async ({ page }) => {
    const resp = await page.goto(URL, { waitUntil: 'networkidle' });
    test.skip(resp.status() === 404, 'Workflows hub does not exist — skipping');
  });

  test('has robots meta', async ({ page }) => {
    const robots = page.locator('meta[name="robots"]');
    await expect(robots).toHaveAttribute('content', /.+/);
  });

  test('no JS errors on load', async ({ page }) => {
    const { jsErrors } = await gotoCollecting(page, URL);
    const real = jsErrors.filter(e =>
      !e.includes('fonts.googleapis') && !e.includes('favicon')
    );
    expect(real).toHaveLength(0);
  });

  test('SiteHeader and SiteFooter render', async ({ page }) => {
    await expect(page.locator('site-header')).toHaveCount(1);
    await expect(page.locator('site-footer')).toHaveCount(1);
  });

  test('h1 visible', async ({ page }) => {
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });
});

// ═══════════════════════════════════════════════════════════════════
//  5. REMAINING UNCOVERED RESOURCE PAGES
// ═══════════════════════════════════════════════════════════════════

const UNCOVERED_PAGES = [
  { slug: 'recursos/flujos-manus/',       label: 'Flujos Manus' },
  { slug: 'recursos/flujos-genspark/',    label: 'Flujos GenSpark' },
  { slug: 'recursos/miniapps-claude/',    label: 'Mini Apps Claude' },
  { slug: 'recursos/miniapps-aistudio/',  label: 'Mini Apps AI Studio' },
  { slug: 'recursos/prototipos-stitch/',  label: 'Prototipos Stitch' },
  { slug: 'recursos/prototipos-v0/',      label: 'Prototipos V0' },
];

for (const pg of UNCOVERED_PAGES) {
  test.describe(`${pg.label} (${pg.slug})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.goto(`${BASE}/${pg.slug}`, { waitUntil: 'networkidle' });
    });

    test('has robots meta with index', async ({ page }) => {
      const robots = page.locator('meta[name="robots"]');
      await expect(robots).toHaveAttribute('content', /index/);
    });

    test('has description meta >= 20 chars', async ({ page }) => {
      const desc = page.locator('meta[name="description"]');
      const content = await desc.getAttribute('content');
      expect(content.length).toBeGreaterThanOrEqual(20);
    });

    test('has OG image', async ({ page }) => {
      const og = page.locator('meta[property="og:image"]');
      await expect(og).toHaveAttribute('content', /og-image/);
    });

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

    test('SiteHeader renders', async ({ page }) => {
      await expect(page.locator('site-header')).toHaveCount(1);
    });

    test('SiteFooter renders', async ({ page }) => {
      await expect(page.locator('site-footer')).toHaveCount(1);
    });

    test('h1 visible', async ({ page }) => {
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });

    test('breadcrumb nav exists', async ({ page }) => {
      const bc = page.locator('nav[aria-label="Breadcrumb"]');
      await expect(bc.first()).toBeVisible();
    });

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
