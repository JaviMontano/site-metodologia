import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../../js/cms/admin-api.js', () => ({
  AdminAPI: {
    updatePricing: vi.fn(),
    sanitizeInput: vi.fn((s) => s),
  },
}));

const { AdminAPI } = await import('../../js/cms/admin-api.js');
const { PriceEditor } = await import('../../admin/js/price-editor.js');

describe('PriceEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('validateNumeric', () => {
    it('should return true for valid numbers', () => {
      expect(PriceEditor.validateNumeric(920000)).toBe(true);
      expect(PriceEditor.validateNumeric(0)).toBe(true);
    });

    it('should return false for non-numbers', () => {
      expect(PriceEditor.validateNumeric('abc')).toBe(false);
      expect(PriceEditor.validateNumeric(NaN)).toBe(false);
      expect(PriceEditor.validateNumeric(null)).toBe(false);
    });

    it('should return false for negative numbers', () => {
      expect(PriceEditor.validateNumeric(-1)).toBe(false);
    });
  });

  describe('savePricing', () => {
    it('should call AdminAPI.updatePricing for B2C category', async () => {
      AdminAPI.updatePricing.mockResolvedValue(undefined);
      await PriceEditor.savePricing('b2c_base', { programs: { empoderamiento: { price: 3000000 } } });
      expect(AdminAPI.updatePricing).toHaveBeenCalledWith('b2c_base', expect.any(Object));
    });
  });
});
