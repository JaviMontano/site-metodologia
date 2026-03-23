#!/usr/bin/env node

/**
 * Seed Firestore (emulator or production) with current hardcoded site content.
 *
 * Usage:
 *   node scripts/seed-firestore.js --emulator
 *   node scripts/seed-firestore.js --project site-metodologia
 *
 * Collection-specific extractors are added by T033 (programs), T044 (pricing), T068 (translations).
 */

import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const args = process.argv.slice(2);
const useEmulator = args.includes('--emulator');
const collections = args.filter((a) => !a.startsWith('--'));

// Configure for emulator or production
if (useEmulator) {
  process.env.FIRESTORE_EMULATOR_HOST = 'localhost:8080';
}

const app = initializeApp({
  projectId: 'site-metodologia',
});

const db = getFirestore(app);

/**
 * Registry of collection extractors.
 * Each extractor returns an array of { id, data } objects.
 * Added by T033 (programs), T044 (pricing), T068 (translations).
 */
const extractors = {};

// --- T033: Program extractor ---
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { JSDOM } from 'jsdom';

function extractProgramsFromPage(htmlPath, audience) {
  const html = readFileSync(resolve(process.cwd(), htmlPath), 'utf-8');
  // Extract programsData JS object using regex
  const match = html.match(/var\s+programsData\s*=\s*(\{[\s\S]*?\});\s*\n/);
  if (!match) {
    console.warn(`  Could not extract programsData from ${htmlPath}`);
    return [];
  }

  // Evaluate the JS object (safe: static content we control)
  let programsData;
  try {
    programsData = new Function(`return ${match[1]}`)();
  } catch (err) {
    console.warn(`  Failed to parse programsData from ${htmlPath}:`, err.message);
    return [];
  }

  const now = new Date();
  return Object.entries(programsData).map(([slug, data], index) => ({
    id: `${audience}_${slug}`,
    data: {
      audience,
      slug,
      sort_order: index,
      icon: data.icon,
      icon_color: data.iconColor,
      title_es: data.title,
      title_en: data.title, // Placeholder — EN titles added manually
      tagline_es: data.tagline,
      tagline_en: data.tagline,
      description_es: data.description,
      description_en: data.description,
      benefits_es: data.benefits,
      benefits_en: data.benefits,
      transformation_es: data.transformation,
      transformation_en: data.transformation,
      is_published: true,
      updated_at: now,
      updated_by: 'seed-script',
    },
  }));
}

registerExtractor('programs', async () => {
  const empresas = extractProgramsFromPage('empresas/index.html', 'empresas');
  const personas = extractProgramsFromPage('personas/index.html', 'personas');
  return [...empresas, ...personas];
});

/**
 * Register a collection extractor.
 * @param {string} name - Collection name
 * @param {Function} fn - Async function returning [{ id, data }]
 */
export function registerExtractor(name, fn) {
  extractors[name] = fn;
}

/**
 * Seed a collection using its registered extractor.
 * @param {string} collectionName
 */
async function seedCollection(collectionName) {
  const extractor = extractors[collectionName];
  if (!extractor) {
    console.warn(`No extractor registered for collection: ${collectionName}`);
    return;
  }

  console.log(`Seeding ${collectionName}...`);
  const items = await extractor();
  const batch = db.batch();
  for (const { id, data } of items) {
    batch.set(db.collection(collectionName).doc(id), data);
  }
  await batch.commit();
  console.log(`  ✓ ${items.length} documents written to ${collectionName}`);
}

/**
 * Seed config/settings document.
 */
async function seedConfig() {
  console.log('Seeding config/settings...');
  await db.collection('config').doc('settings').set({
    cache_ttl_ms: 3600000,
    migrated_collections: [],
    maintenance_mode: false,
  });
  console.log('  ✓ config/settings written');
}

// Main
async function main() {
  const toSeed = collections.length > 0 ? collections : Object.keys(extractors);

  await seedConfig();
  for (const name of toSeed) {
    await seedCollection(name);
  }

  console.log('\nSeeding complete.');
  process.exit(0);
}

main().catch((err) => {
  console.error('Seeding failed:', err);
  process.exit(1);
});
