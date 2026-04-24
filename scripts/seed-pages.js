#!/usr/bin/env node

/**
 * Seed Firestore `pages/{slug}` documents from HTML data-cms attributes.
 *
 * Extracts every data-cms="slug.section.key" attribute from each page's HTML,
 * reads the element's text content, and builds nested JSON documents for Firestore.
 *
 * Usage:
 *   node scripts/seed-pages.js --emulator     # seed local emulator
 *   node scripts/seed-pages.js                # seed production
 *   node scripts/seed-pages.js home empresas  # seed specific pages only
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

const args = process.argv.slice(2);
const useEmulator = args.includes('--emulator');
const requestedSlugs = args.filter(a => !a.startsWith('--'));

if (useEmulator) {
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
}

const app = initializeApp({ projectId: 'metodologia-pristino-10x' });
const db = getFirestore(app);

// Page registry: slug → HTML file path (relative to repo root)
const PAGE_REGISTRY = {
  home:        'index.html',
  empresas:    'empresas/index.html',
  personas:    'personas/index.html',
  recursos:    'recursos/index.html',
  programas:   'programas/index.html',
  metodo:      'metodo/index.html',
  diagnostico: 'diagnostico/index.html',
  casos:       'casos/index.html',
  nosotros:    'nosotros/index.html',
  contacto:    'contacto/index.html',
  insights:    'insights/index.html',
  legal:       'legal/index.html',
};

/**
 * Extract data-cms content from an HTML file.
 * Returns a nested object matching Firestore document structure.
 *
 * Example: data-cms="home.hero.title" with textContent "Success as a Service"
 * → { hero: { title: "Success as a <span class=\"gradient-text\">Service</span>" } }
 */
function extractPageContent(slug, htmlPath) {
  const fullPath = resolve(process.cwd(), htmlPath);
  if (!existsSync(fullPath)) {
    console.warn(`  ⚠ File not found: ${htmlPath}`);
    return null;
  }

  const html = readFileSync(fullPath, 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  const elements = doc.querySelectorAll('[data-cms]');
  const data = {};

  for (const el of elements) {
    const key = el.getAttribute('data-cms');
    // Strip the slug prefix: "home.hero.title" → "hero.title"
    const stripped = key.replace(new RegExp(`^${slug}\\.`), '');
    const parts = stripped.split('.');

    // Get innerHTML (preserves formatting tags like <strong>, <span>)
    const value = el.innerHTML.trim();

    // Build nested object
    let obj = data;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!obj[parts[i]]) obj[parts[i]] = {};
      obj = obj[parts[i]];
    }
    obj[parts[parts.length - 1]] = value;
  }

  return data;
}

async function seedPage(slug, htmlPath) {
  const content = extractPageContent(slug, htmlPath);
  if (!content || Object.keys(content).length === 0) {
    console.warn(`  ⚠ No data-cms content found in ${htmlPath}`);
    return false;
  }

  // Add metadata
  content._meta = {
    slug,
    source: htmlPath,
    key_count: countKeys(content),
    seeded_at: new Date().toISOString(),
    seeded_by: 'seed-pages.js',
  };

  await db.collection('pages').doc(slug).set(content);
  console.log(`  ✓ pages/${slug} — ${content._meta.key_count} keys`);
  return true;
}

/** Count leaf keys in a nested object */
function countKeys(obj, count = 0) {
  for (const val of Object.values(obj)) {
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      count = countKeys(val, count);
    } else {
      count++;
    }
  }
  return count;
}

async function main() {
  const slugs = requestedSlugs.length > 0
    ? requestedSlugs
    : Object.keys(PAGE_REGISTRY);

  console.log(`\nSeeding ${slugs.length} page documents to Firestore...`);
  console.log(`Target: ${useEmulator ? 'EMULATOR (localhost:8080)' : 'PRODUCTION'}\n`);

  let seeded = 0;
  for (const slug of slugs) {
    const htmlPath = PAGE_REGISTRY[slug];
    if (!htmlPath) {
      console.warn(`  ⚠ Unknown slug: ${slug}`);
      continue;
    }
    const ok = await seedPage(slug, htmlPath);
    if (ok) seeded++;
  }

  console.log(`\n✓ ${seeded}/${slugs.length} pages seeded.\n`);
  process.exit(0);
}

main().catch(err => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
