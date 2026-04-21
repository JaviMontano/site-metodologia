/**
 * slot-resolver.js — 5-level audience/locale fallback cascade
 *
 * Cascade order:
 *   1. Firestore slots/{pageSlug} (if cmsEnabled and value exists)
 *   2. Dictionary exact:    {pageSlug}.{slotId}.{audience}.{locale}
 *   3. Locale fallback:     {pageSlug}.{slotId}.{audience}.es
 *   4. Audience fallback:   {pageSlug}.{slotId}.persona.{locale}
 *   5. Double fallback:     {pageSlug}.{slotId}.persona.es
 *   6. Return "[MISSING: {slotId}]"
 */

const DEFAULT_LOCALE = 'es';
const DEFAULT_AUDIENCE = 'persona';

/**
 * Resolve a single content slot through the 5-level fallback cascade.
 *
 * @param {string} pageSlug
 * @param {string} slotId
 * @param {string} audience
 * @param {string} locale
 * @param {object} options
 * @param {object} options.dictionaries
 * @param {object} [options.firestoreSlots]
 * @param {boolean} [options.cmsEnabled]
 * @returns {string}
 */
export function resolveSlot(pageSlug, slotId, audience, locale, options = {}) {
  const { dictionaries = {}, firestoreSlots = {}, cmsEnabled = false } = options;

  // Level 1: Firestore override
  if (cmsEnabled) {
    const fsPage = firestoreSlots[pageSlug];
    if (fsPage && fsPage[slotId] !== undefined && fsPage[slotId] !== null) {
      return fsPage[slotId];
    }
  }

  const page = dictionaries[pageSlug];
  if (!page) return `[MISSING: ${slotId}]`;

  const slot = page[slotId];
  if (!slot) return `[MISSING: ${slotId}]`;

  // Level 2: Exact match
  if (slot[audience]?.[locale] !== undefined) {
    return slot[audience][locale];
  }

  // Level 3: Locale fallback (same audience, default locale)
  if (slot[audience]?.[DEFAULT_LOCALE] !== undefined) {
    return slot[audience][DEFAULT_LOCALE];
  }

  // Level 4: Audience fallback (default audience, original locale)
  if (slot[DEFAULT_AUDIENCE]?.[locale] !== undefined) {
    return slot[DEFAULT_AUDIENCE][locale];
  }

  // Level 5: Double fallback (default audience + default locale)
  if (slot[DEFAULT_AUDIENCE]?.[DEFAULT_LOCALE] !== undefined) {
    return slot[DEFAULT_AUDIENCE][DEFAULT_LOCALE];
  }

  return `[MISSING: ${slotId}]`;
}

/**
 * Resolve all slots for a page, returning a Map<slotId, string>.
 *
 * @param {string} pageSlug
 * @param {string} audience
 * @param {string} locale
 * @param {object} options
 * @returns {Map<string, string>}
 */
export function resolveAllSlots(pageSlug, audience, locale, options = {}) {
  const { dictionaries = {} } = options;
  const result = new Map();

  const page = dictionaries[pageSlug];
  if (!page) return result;

  for (const slotId of Object.keys(page)) {
    result.set(slotId, resolveSlot(pageSlug, slotId, audience, locale, options));
  }

  return result;
}
