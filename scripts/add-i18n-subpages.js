#!/usr/bin/env node
/**
 * add-i18n-subpages.js — Add data-i18n attributes to sub-pages
 * and generate ES/EN keys for es.json and en.json.
 *
 * Usage: node scripts/add-i18n-subpages.js
 */
const fs = require('fs');
const path = require('path');

// Translations for common shared strings
const SHARED_EN = {
  'Saltar al contenido': 'Skip to content',
  'Abrir en ChatGPT →': 'Open in ChatGPT →',
  'Abrir en Gemini →': 'Open in Gemini →',
  'Ver todos los GPTs →': 'View all GPTs →',
  'Ver todos los Gems →': 'View all Gems →',
  'Ver catálogo →': 'View catalog →',
  'Ver más →': 'View more →',
  'Explorar →': 'Explore →',
  'Descargar': 'Download',
  'Volver': 'Back',
  'Patrón MOAT': 'MOAT Pattern',
  'Estrella': 'Star',
  'Satélite': 'Satellite',
  'Constelación': 'Constellation',
};

// Find all sub-pages that need i18n
function findSubPages() {
  const dirs = [
    'recursos/asistentes',
    'recursos/a-medida',
    'recursos/automatizaciones',
    'recursos/biblioteca-consulting',
    'recursos/biblioteca-desarrollo',
    'recursos/biblioteca-estrategia',
    'recursos/biblioteca-marketing',
    'recursos/biblioteca-productos',
    'recursos/biblioteca-proyectos',
    'recursos/biblioteca-ventas',
    'recursos/biblioteca-vibe-coding',
    'recursos/catalogo',
    'recursos/ebooks',
    'recursos/flujos-genspark',
    'recursos/flujos-manus',
    'recursos/miniapps-aistudio',
    'recursos/miniapps-claude',
    'recursos/playbooks',
    'recursos/plugins-claude-code',
    'recursos/prototipos-stitch',
    'recursos/prototipos-v0',
    'recursos/workflows',
  ];

  const pages = [];
  for (const dir of dirs) {
    const full = path.join(__dirname, '..', dir);
    if (!fs.existsSync(full)) continue;

    // Check index.html in the dir itself
    const idx = path.join(full, 'index.html');
    if (fs.existsSync(idx)) {
      const content = fs.readFileSync(idx, 'utf8');
      if (!content.includes('data-i18n=')) {
        pages.push({ file: idx, dir });
      }
    }

    // Check subdirectories
    try {
      const subs = fs.readdirSync(full, { withFileTypes: true });
      for (const sub of subs) {
        if (!sub.isDirectory()) continue;
        const subIdx = path.join(full, sub.name, 'index.html');
        if (fs.existsSync(subIdx)) {
          const content = fs.readFileSync(subIdx, 'utf8');
          if (!content.includes('data-i18n=')) {
            pages.push({ file: subIdx, dir: `${dir}/${sub.name}` });
          }
        }
      }
    } catch {}
  }
  return pages;
}

// Generate i18n key from path
function keyFromPath(dir) {
  return 'sub.' + dir.replace(/\//g, '.').replace(/-/g, '_');
}

// Process a single page
function processPage(page) {
  let html = fs.readFileSync(page.file, 'utf8');
  const key = keyFromPath(page.dir);
  const esKeys = {};
  const enKeys = {};
  let modified = false;

  // Add data-i18n to skip link
  if (html.includes('>Saltar al contenido<') && !html.includes('data-i18n="skip_link"')) {
    html = html.replace('>Saltar al contenido<', ' data-i18n="skip_link">Saltar al contenido<');
    modified = true;
  }

  // Add data-i18n to h1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/);
  if (h1Match && !h1Match[0].includes('data-i18n')) {
    const h1Text = h1Match[1].replace(/<[^>]+>/g, '').trim();
    esKeys.title = h1Text;
    enKeys.title = h1Text; // Keep original (brand names don't translate)
    html = html.replace(/<h1([^>]*)>/, `<h1$1 data-i18n="${key}.title">`);
    modified = true;
  }

  // Add data-i18n to .lead paragraph
  const leadMatch = html.match(/<p class="lead"[^>]*>(.*?)<\/p>/s);
  if (leadMatch && !leadMatch[0].includes('data-i18n')) {
    const leadText = leadMatch[1].replace(/<[^>]+>/g, '').trim();
    esKeys.lead = leadText;
    enKeys.lead = leadText; // placeholder
    html = html.replace(/<p class="lead"([^>]*)>/, `<p class="lead"$1 data-i18n="${key}.lead">`);
    modified = true;
  }

  // Add data-i18n to eyebrow
  const eyebrowMatch = html.match(/<span class="eyebrow"[^>]*>(.*?)<\/span>/);
  if (eyebrowMatch && !eyebrowMatch[0].includes('data-i18n')) {
    const eyeText = eyebrowMatch[1].replace(/<[^>]+>/g, '').trim();
    esKeys.badge = eyeText;
    enKeys.badge = eyeText;
    html = html.replace(/<span class="eyebrow"([^>]*)>/, `<span class="eyebrow"$1 data-i18n="${key}.badge">`);
    modified = true;
  }

  // Add data-i18n to .principle__body
  const princMatch = html.match(/<p class="principle__body"[^>]*>(.*?)<\/p>/s);
  if (princMatch && !princMatch[0].includes('data-i18n')) {
    const princText = princMatch[1].replace(/<[^>]+>/g, '').trim();
    esKeys.body = princText;
    enKeys.body = princText;
    html = html.replace(/<p class="principle__body"([^>]*)>/, `<p class="principle__body"$1 data-i18n-html="${key}.body">`);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(page.file, html);
  }

  return { key, es: esKeys, en: enKeys, modified };
}

// Main
const pages = findSubPages();
console.log(`Found ${pages.length} sub-pages without data-i18n`);

const allES = {};
const allEN = {};
let modifiedCount = 0;

for (const page of pages) {
  const result = processPage(page);
  if (result.modified) {
    modifiedCount++;
    // Nested key structure
    const parts = result.key.split('.');
    let esRef = allES;
    let enRef = allEN;
    for (let i = 0; i < parts.length - 1; i++) {
      esRef[parts[i]] = esRef[parts[i]] || {};
      enRef[parts[i]] = enRef[parts[i]] || {};
      esRef = esRef[parts[i]];
      enRef = enRef[parts[i]];
    }
    esRef[parts[parts.length - 1]] = result.es;
    enRef[parts[parts.length - 1]] = result.en;
  }
}

// Write the keys to a separate file for manual merge
const outPath = path.join(__dirname, '..', 'js', 'i18n', 'subpage-keys.json');
fs.writeFileSync(outPath, JSON.stringify({ es: allES, en: allEN }, null, 2));

console.log(`Modified ${modifiedCount} HTML files`);
console.log(`Keys written to js/i18n/subpage-keys.json`);
console.log('Merge these keys into es.json and en.json manually.');
