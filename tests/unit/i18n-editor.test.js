import { describe, it, expect, beforeEach, vi } from 'vitest';

vi.mock('../../js/cms/admin-api.js', () => ({
  AdminAPI: {
    updateTranslations: vi.fn(),
    sanitizeInput: vi.fn((s) => s),
  },
}));

const { AdminAPI } = await import('../../js/cms/admin-api.js');
const { I18nEditor } = await import('../../admin/js/i18n-editor.js');

describe('I18nEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('flattenKeys', () => {
    it('should flatten nested translation objects', () => {
      const result = I18nEditor.flattenKeys({
        nav: { home: 'Inicio', about: 'Acerca' },
        hero: { title: 'Bienvenido' },
      });
      expect(result).toEqual({
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'hero.title': 'Bienvenido',
      });
    });
  });

  describe('filterKeys', () => {
    it('should filter keys by search query', () => {
      const flat = { 'nav.home': 'Inicio', 'nav.about': 'Acerca', 'hero.title': 'Bienvenido' };
      const result = I18nEditor.filterKeys(flat, 'nav');
      expect(Object.keys(result)).toEqual(['nav.home', 'nav.about']);
    });

    it('should return all keys when query is empty', () => {
      const flat = { 'nav.home': 'Inicio', 'hero.title': 'Bienvenido' };
      const result = I18nEditor.filterKeys(flat, '');
      expect(Object.keys(result)).toHaveLength(2);
    });
  });

  describe('saveTranslation', () => {
    it('should call AdminAPI.updateTranslations with nested update', async () => {
      AdminAPI.updateTranslations.mockResolvedValue(undefined);
      await I18nEditor.saveTranslation('es', 'nav.home', 'Inicio nuevo');
      expect(AdminAPI.updateTranslations).toHaveBeenCalledWith('es', { nav: { home: 'Inicio nuevo' } });
    });
  });
});
