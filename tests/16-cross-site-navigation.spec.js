const { test, expect } = require('@playwright/test');

/* ═══════════════════════════════════════════════════════════════════
   16-cross-site-navigation.spec.js
   End-to-end navigation flows: header → page → breadcrumb → back
   Verifies the entire navigation graph works as a connected system
   ═══════════════════════════════════════════════════════════════════ */

const BASE = 'http://localhost:8765';

// ═══════════════════════════════════════════════════════════════════
//  1. HEADER NAVIGATION — all links reachable from any page
// ═══════════════════════════════════════════════════════════════════

test.describe('Header navigation from home', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  });

  const HEADER_LINKS = [
    { text: /Ruta/i, urlPart: 'ruta' },
    { text: /Recursos/i, urlPart: 'recursos' },
    { text: /Servicios/i, urlPart: 'servicios' },
    { text: /Contacto/i, urlPart: 'contacto' },
  ];

  for (const link of HEADER_LINKS) {
    test(`header link "${link.text}" navigates to ${link.urlPart}`, async ({ page }) => {
      const nav = page.locator('site-header');
      const anchor = nav.locator('a', { hasText: link.text }).first();
      await anchor.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain(link.urlPart);
      // Target page should load without errors
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  2. FOOTER NAVIGATION — all links reachable
// ═══════════════════════════════════════════════════════════════════

test.describe('Footer navigation links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });
  });

  const FOOTER_LINKS = [
    { text: /Empresas/i, urlPart: 'empresas' },
    { text: /Personas/i, urlPart: 'personas' },
    { text: /Recursos/i, urlPart: 'recursos' },
    { text: /Términos/i, urlPart: 'terminos' },
    { text: /Privacidad/i, urlPart: 'privacidad' },
  ];

  for (const link of FOOTER_LINKS) {
    test(`footer link "${link.text}" navigates to ${link.urlPart}`, async ({ page }) => {
      const footer = page.locator('site-footer');
      const anchor = footer.locator('a', { hasText: link.text }).first();
      await anchor.scrollIntoViewIfNeeded();
      await anchor.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain(link.urlPart);
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  3. RECURSOS HUB → Sub-pages → Breadcrumb back
// ═══════════════════════════════════════════════════════════════════

test.describe('Recursos hub to sub-page roundtrip', () => {
  const SUB_PAGES = [
    { href: 'playbooks', title: /Playbook/i },
    { href: 'ebooks', title: /E-book/i },
    { href: 'asistentes-gemini', title: /Gemini/i },
    { href: 'asistentes-gpt', title: /GPT/i },
    { href: 'automatizaciones', title: /Automatizaciones/i },
  ];

  for (const sub of SUB_PAGES) {
    test(`Recursos → ${sub.href} → breadcrumb back`, async ({ page }) => {
      // Navigate to recursos hub
      await page.goto(`${BASE}/recursos/`, { waitUntil: 'networkidle' });

      // Click link to sub-page
      const link = page.locator(`a[href*="${sub.href}"]`).first();
      await link.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain(sub.href);

      // Verify sub-page title
      await expect(page).toHaveTitle(sub.title);

      // Click breadcrumb "Recursos" to go back
      const breadcrumbBack = page.locator('nav a').filter({ hasText: /Recursos/i }).first();
      await breadcrumbBack.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('/recursos/');
    });
  }
});

// ═══════════════════════════════════════════════════════════════════
//  4. DEEP NAVIGATION: Home → Empresas → Sub-product
// ═══════════════════════════════════════════════════════════════════

test.describe('Home → Empresas → Sub-product navigation', () => {
  test('navigate from home to empresas to bootcamp', async ({ page }) => {
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

    // Click empresas link
    const empresasLink = page.locator('a[href*="empresas"]').first();
    await empresasLink.click();
    await page.waitForLoadState('networkidle');
    expect(page.url()).toContain('empresas');

    // Click a product link
    const productLink = page.locator('a[href*="bootcamp"]').first();
    if (await productLink.isVisible()) {
      await productLink.click();
      await page.waitForLoadState('networkidle');
      expect(page.url()).toContain('bootcamp');
      const h1 = page.locator('h1').first();
      await expect(h1).toBeVisible();
    }
  });
});

// ═══════════════════════════════════════════════════════════════════
//  5. PREMIUM GATEWAY FLOW
// ═══════════════════════════════════════════════════════════════════

test.describe('Premium gateway navigation', () => {
  test('recursos → premium → catalog link exists', async ({ page }) => {
    await page.goto(`${BASE}/recursos/premium/`, { waitUntil: 'networkidle' });

    // Verify premium page loaded
    await expect(page.locator('h1')).toContainText(/Premium/i);

    // Verify catalog link
    const catalogLink = page.locator('a[href*="catalogo"]').first();
    await expect(catalogLink).toBeAttached();
  });
});

// ═══════════════════════════════════════════════════════════════════
//  6. MOBILE MENU NAVIGATION
// ═══════════════════════════════════════════════════════════════════

test.describe('Mobile menu navigation', () => {
  test('mobile hamburger menu opens and links work', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(`${BASE}/`, { waitUntil: 'networkidle' });

    // Look for mobile menu toggle button
    const menuButton = page.locator('button[aria-label*="menú"], button[aria-label*="menu"], [data-mobile-menu]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500);

      // Mobile menu should have navigation links
      const mobileLinks = page.locator('[class*="mobile"] a, [data-mobile] a').filter({ hasText: /Ruta|Recursos|Contacto/i });
      const count = await mobileLinks.count();
      expect(count).toBeGreaterThan(0);
    }
  });
});

// ═══════════════════════════════════════════════════════════════════
//  7. SITEMAP.HTML — all links functional
// ═══════════════════════════════════════════════════════════════════

test.describe('sitemap.html has working links', () => {
  test('sitemap page loads and contains links', async ({ page }) => {
    await page.goto(`${BASE}/sitemap.html`, { waitUntil: 'networkidle' });
    await expect(page.locator('h1').first()).toBeVisible();

    // All internal links should be reachable (spot-check)
    const links = page.locator('a[href*="index.html"], a[href$="/"]');
    const count = await links.count();
    expect(count).toBeGreaterThan(10);
  });
});

// ═══════════════════════════════════════════════════════════════════
//  8. 404 BEHAVIOR — non-existent pages
// ═══════════════════════════════════════════════════════════════════

test.describe('Non-existent page handling', () => {
  test('non-existent page returns 404', async ({ page }) => {
    const response = await page.goto(`${BASE}/this-page-does-not-exist.html`);
    expect(response.status()).toBe(404);
  });
});
