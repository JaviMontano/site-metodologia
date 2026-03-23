/**
 * Dual-source resolver: Firestore-first with cache fallback, null terminal.
 * Content-agnostic — consumers decide what null means.
 * @module js/cms/migration-bridge
 */
import { CacheManager } from './cache-manager.js';

export const MigrationBridge = {
  /**
   * Resolve content from Firestore or cache based on migration status.
   *
   * @param {Object} options
   * @param {string} options.collection - Collection name (e.g., 'programs')
   * @param {string[]} options.migratedCollections - Currently migrated collections
   * @param {Function} options.firestoreFetcher - Async function that fetches from Firestore
   * @param {string} options.cacheKey - Cache lookup key
   * @param {string} options.cacheStore - IndexedDB store name
   * @returns {Promise<any | null>} Resolved data or null (caller handles static fallback)
   */
  async resolve({ collection, migratedCollections, firestoreFetcher, cacheKey, cacheStore }) {
    // Not migrated — return null so caller uses static content
    if (!migratedCollections.includes(collection)) {
      return null;
    }

    // Firestore-first
    try {
      const data = await firestoreFetcher();
      if (data != null) {
        await CacheManager.set(cacheStore, cacheKey, data);
        return data;
      }
    } catch {
      // Firestore unavailable — fall through to cache
    }

    // Cache fallback
    const cached = await CacheManager.get(cacheStore, cacheKey);
    if (cached) return cached.data;

    // Terminal fallback — null
    return null;
  },
};
