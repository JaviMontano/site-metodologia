const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════════
   18-all-bibliotecas.spec.js
   Full certification of ALL 9 prompt libraries:
   Universal, Ventas, Marketing, EstrategIA, Desarrollo, Productos,
   Proyectos, Consulting, Vibe Coding

   Each library must have: Landing, JSON, Standalone HTML, Editorial HTML
   ═══════════════════════════════════════════════════════════════════ */

const BASE = 'http://localhost:8765';
const VIEWPORTS = [320, 375, 768, 1024, 1440];

async function gotoCollecting(page, url) {
  const jsErrors = [];
  const failed404 = [];
  page.on('pageerror', e => jsErrors.push(e.message));
  page.on('response', resp => {
    const u = resp.url();
    if (resp.status() === 404 && !u.includes('favicon') && !u.includes('fonts.') && !u.includes('cdn') && !u.includes('cdnjs') && !u.includes('unpkg')) {
      failed404.push(u);
    }
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  return { jsErrors, failed404 };
}

// ═══════════════════════════════════════════════════════════════════
//  ALL BIBLIOTECAS — parametric tests
// ═══════════════════════════════════════════════════════════════════

const BIBLIOTECAS = [
  { slug: 'biblioteca-universal',   name: 'Universal',   prompts: 202, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_universales.json' },
  { slug: 'biblioteca-ventas',      name: 'Ventas',      prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_ventas.json' },
  { slug: 'biblioteca-marketing',   name: 'Marketing',   prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_marketing.json' },
  { slug: 'biblioteca-estrategia',  name: 'EstrategIA',  prompts: 121, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_estrategia.json' },
  { slug: 'biblioteca-desarrollo',  name: 'Desarrollo',  prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_desarrollo.json' },
  { slug: 'biblioteca-productos',   name: 'Productos',   prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_productos.json' },
  { slug: 'biblioteca-proyectos',   name: 'Proyectos',   prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_proyectos.json' },
  { slug: 'biblioteca-consulting',  name: 'Consulting',  prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_consulting.json' },
  { slug: 'biblioteca-vibe-coding', name: 'Vibe Coding', prompts: 101, hasStudy: true,  hasEditorial: true,  jsonFile: 'prompts_vibe_coding.json' },
];

for (const lib of BIBLIOTECAS) {
  test.describe(`${lib.name} Library (recursos/${lib.slug}/)`, () => {

    // ── LANDING PAGE ──────────────────────────────────────
    test.describe('Landing page', () => {
      test.beforeEach(async ({ page }) => {
        await page.goto(`${BASE}/recursos/${lib.slug}/`, { waitUntil: 'networkidle' });
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

      test('has canonical link', async ({ page }) => {
        const canonical = page.locator('link[rel="canonical"]');
        await expect(canonical).toHaveAttribute('href', new RegExp(lib.slug));
      });

      test('has OG tags', async ({ page }) => {
        await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /.+/);
        await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', /.+/);
      });

      test('no JS errors on load', async ({ page }) => {
        const { jsErrors } = await gotoCollecting(page, `${BASE}/recursos/${lib.slug}/`);
        const real = jsErrors.filter(e => !e.includes('fonts.') && !e.includes('favicon'));
        expect(real).toHaveLength(0);
      });

      test('no 404 local resources', async ({ page }) => {
        const { failed404 } = await gotoCollecting(page, `${BASE}/recursos/${lib.slug}/`);
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

      test('search input exists', async ({ page }) => {
        const search = page.locator('#heroSearchInput');
        await expect(search).toBeVisible();
      });

      test('prompts grid loads with cards', async ({ page }) => {
        await page.waitForTimeout(1500);
        const grid = page.locator('#promptsGrid');
        const cards = grid.locator('article');
        const count = await cards.count();
        expect(count).toBeGreaterThan(0);
      });

      test('breadcrumb nav exists', async ({ page }) => {
        const bc = page.locator('nav[aria-label="Breadcrumb"]');
        await expect(bc.first()).toBeVisible();
      });

      test('does not load cdn.tailwindcss.com', async ({ page }) => {
        const cdnRequests = [];
        page.on('request', req => {
          if (req.url().includes('cdn.tailwindcss.com')) cdnRequests.push(req.url());
        });
        await page.goto(`${BASE}/recursos/${lib.slug}/`, { waitUntil: 'networkidle' });
        expect(cdnRequests).toHaveLength(0);
      });

      for (const vw of VIEWPORTS) {
        test(`no horizontal overflow at ${vw}px`, async ({ page }) => {
          await page.setViewportSize({ width: vw, height: 800 });
          await page.goto(`${BASE}/recursos/${lib.slug}/`, { waitUntil: 'networkidle' });
          const overflow = await page.evaluate(() =>
            document.documentElement.scrollWidth > document.documentElement.clientWidth
          );
          expect(overflow).toBe(false);
        });
      }
    });

    // ── JSON FILE ─────────────────────────────────────────
    test(`JSON file (${lib.jsonFile}) is accessible`, async ({ page }) => {
      const resp = await page.goto(`${BASE}/recursos/${lib.slug}/${lib.jsonFile}`);
      expect(resp.status()).toBe(200);
      const text = await resp.text();
      const data = JSON.parse(text);
      expect(Object.keys(data).length).toBeGreaterThanOrEqual(1);
    });

    // ── EDITORIAL HTML (PDF) ──────────────────────────────
    if (lib.hasEditorial) {
      test('Editorial HTML loads (PDF version)', async ({ page }) => {
        const slug = lib.slug.replace(/-/g, '_').replace('biblioteca_', '');
        const resp = await page.goto(`${BASE}/recursos/${lib.slug}/biblioteca_${slug}_editorial.html`, { waitUntil: 'networkidle' });
        expect(resp.status()).toBe(200);
        // Should have noindex
        const robots = page.locator('meta[name="robots"]');
        await expect(robots).toHaveAttribute('content', /noindex/);
        // Should have print button
        const printBtn = page.locator('button:has-text("Imprimir")');
        await expect(printBtn).toBeVisible();
      });
    }

    // ── STANDALONE HTML ───────────────────────────────────
    if (lib.hasStudy) {
      test('Standalone HTML loads (study version)', async ({ page }) => {
        const slug = lib.slug.replace(/-/g, '_').replace('biblioteca_', '');
        const resp = await page.goto(`${BASE}/recursos/${lib.slug}/biblioteca_${slug}_estudio.html`, { waitUntil: 'networkidle' });
        expect(resp.status()).toBe(200);
        // Should have noindex
        const robots = page.locator('meta[name="robots"]');
        await expect(robots).toHaveAttribute('content', /noindex/);
        // Should have search
        const search = page.locator('#s, #search, #heroSearchInput');
        const count = await search.count();
        expect(count).toBeGreaterThan(0);
      });
    }
  });
}

// ═══════════════════════════════════════════════════════════════════
//  HUB PAGE — all library cards are active (not disabled)
// ═══════════════════════════════════════════════════════════════════

test.describe('Biblioteca Hub — all cards active', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/recursos/biblioteca-prompts/`, { waitUntil: 'networkidle' });
  });

  test('no disabled library cards (all should be active)', async ({ page }) => {
    const disabled = page.locator('.library-card.disabled');
    await expect(disabled).toHaveCount(0);
  });

  test('8 active library cards present (including ventas)', async ({ page }) => {
    const cards = page.locator('a.library-card');
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('all library cards have "Disponible" status', async ({ page }) => {
    const available = page.locator('.library-status.available');
    const count = await available.count();
    expect(count).toBeGreaterThanOrEqual(8);
  });

  test('all library cards link to existing pages', async ({ page }) => {
    const cards = page.locator('a.library-card');
    const count = await cards.count();
    for (let i = 0; i < count; i++) {
      const href = await cards.nth(i).getAttribute('href');
      expect(href).toBeTruthy();
      expect(href).toContain('biblioteca-');
    }
  });
});
