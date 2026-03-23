/**
 * Centralized Firestore read + cache + fallback orchestration.
 * @module js/cms/content-service
 */
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { CacheManager } from './cache-manager.js';

let db = null;
let ready = false;
let migratedCollections = [];
let cacheTtlMs = 3600000; // default 1 hour
const readyCallbacks = [];

export const ContentService = {
  /**
   * Initialize the content service.
   * @param {Object} config
   * @param {FirebaseApp} config.app
   * @param {number} [config.cacheTtlMs]
   */
  async init({ app, cacheTtlMs: overrideTtl } = {}) {
    db = getFirestore(app);

    // Read config/settings from Firestore
    try {
      const settingsRef = doc(db, 'config', 'settings');
      const settingsSnap = await getDoc(settingsRef);
      if (settingsSnap.exists()) {
        const settings = settingsSnap.data();
        migratedCollections = settings.migrated_collections || [];
        cacheTtlMs = settings.cache_ttl_ms || cacheTtlMs;
      }
    } catch {
      // Config unavailable — use defaults
    }

    if (overrideTtl) cacheTtlMs = overrideTtl;

    ready = true;
    for (const cb of readyCallbacks) cb();
    readyCallbacks.length = 0;
  },

  isReady() {
    return ready;
  },

  onReady(callback) {
    if (ready) {
      callback();
    } else {
      readyCallbacks.push(callback);
    }
  },

  /**
   * @param {'empresas' | 'personas'} audience
   * @returns {Promise<Object[] | null>}
   */
  async getPrograms(audience) {
    if (!migratedCollections.includes('programs')) {
      return null;
    }

    try {
      const q = query(
        collection(db, 'programs'),
        where('audience', '==', audience),
        where('is_published', '==', true),
        orderBy('sort_order'),
      );
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const programs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        await CacheManager.set('programs', audience, programs);
        return programs;
      }
    } catch {
      // Firestore unavailable — fall through to cache
    }

    // Cache fallback
    const cached = await CacheManager.get('programs', audience);
    if (cached) return cached.data;

    return null;
  },

  /**
   * @param {'b2c_base' | 'b2b_multipliers' | 'premium'} category
   * @returns {Promise<Object | null>}
   */
  async getPricing(category) {
    if (!migratedCollections.includes('pricing')) {
      return null;
    }

    try {
      const docRef = doc(db, 'pricing', category);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        await CacheManager.set('pricing', category, data);
        return data;
      }
    } catch {
      // Firestore unavailable
    }

    const cached = await CacheManager.get('pricing', category);
    if (cached) return cached.data;

    return null;
  },

  /**
   * @param {'es' | 'en'} lang
   * @returns {Promise<Object | null>}
   */
  async getTranslations(lang) {
    if (!migratedCollections.includes('translations')) {
      return null;
    }

    try {
      const docRef = doc(db, 'translations', lang);
      const snap = await getDoc(docRef);
      if (snap.exists()) {
        const data = snap.data();
        // Strip _meta field per contract
        delete data._meta;
        await CacheManager.set('translations', lang, data);
        return data;
      }
    } catch {
      // Firestore unavailable
    }

    const cached = await CacheManager.get('translations', lang);
    if (cached) return cached.data;

    return null;
  },

  /** Exposed for MigrationBridge */
  _getMigratedCollections() {
    return migratedCollections;
  },

  _getCacheTtlMs() {
    return cacheTtlMs;
  },

  /** Test helper — reset state */
  _reset() {
    db = null;
    ready = false;
    migratedCollections = [];
    cacheTtlMs = 3600000;
    readyCallbacks.length = 0;
  },
};
