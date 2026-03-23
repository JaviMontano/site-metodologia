import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock Firebase Firestore
vi.mock('firebase/firestore', () => ({
  getFirestore: vi.fn(() => ({})),
  doc: vi.fn(),
  updateDoc: vi.fn(),
  addDoc: vi.fn(),
  collection: vi.fn(),
  serverTimestamp: vi.fn(() => new Date()),
}));

// Mock AuthService
vi.mock('../../js/cms/auth-service.js', () => ({
  AuthService: {
    isAdmin: vi.fn(() => true),
    getCurrentUser: vi.fn(() => ({ uid: 'admin1', email: 'admin@test.com' })),
  },
}));

const { updateDoc, addDoc } = await import('firebase/firestore');
const { AdminAPI } = await import('../../js/cms/admin-api.js');

describe('AdminAPI', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    updateDoc.mockResolvedValue(undefined);
    addDoc.mockResolvedValue({ id: 'audit-1' });
  });

  describe('updateProgram', () => {
    it('should update program and create audit log', async () => {
      await AdminAPI.updateProgram('empresas_diagnostico', {
        description_es: 'New ES',
        description_en: 'New EN',
      });
      expect(updateDoc).toHaveBeenCalled();
      expect(addDoc).toHaveBeenCalled(); // audit log
    });

    it('should reject when bilingual pair is incomplete', async () => {
      await expect(
        AdminAPI.updateProgram('empresas_diagnostico', {
          description_es: 'Only ES',
          // missing description_en
        }),
      ).rejects.toThrow(/bilingual/i);
    });
  });

  describe('updatePricing', () => {
    it('should update pricing document', async () => {
      await AdminAPI.updatePricing('b2c_base', { programs: {} });
      expect(updateDoc).toHaveBeenCalled();
    });
  });

  describe('updateTranslations', () => {
    it('should merge translation updates', async () => {
      await AdminAPI.updateTranslations('es', { nav: { home: 'Inicio nuevo' } });
      expect(updateDoc).toHaveBeenCalled();
    });
  });

  describe('sanitizeInput', () => {
    it('should strip HTML tags from text input', () => {
      const result = AdminAPI.sanitizeInput('<script>alert("xss")</script>Hello');
      expect(result).toBe('Hello');
      expect(result).not.toContain('<script>');
    });

    it('should preserve plain text', () => {
      const result = AdminAPI.sanitizeInput('Normal text & more');
      expect(result).toBe('Normal text & more');
    });
  });
});
