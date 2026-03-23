import { describe, it, expect, beforeEach, vi } from 'vitest';

// Mock DOM
vi.stubGlobal('document', {
  createElement: vi.fn(() => ({
    innerHTML: '',
    className: '',
    setAttribute: vi.fn(),
    appendChild: vi.fn(),
    querySelectorAll: vi.fn(() => []),
    querySelector: vi.fn(() => null),
    addEventListener: vi.fn(),
  })),
  getElementById: vi.fn(() => null),
  createTextNode: vi.fn((text) => ({ textContent: text })),
});

// Mock AdminAPI
vi.mock('../../js/cms/admin-api.js', () => ({
  AdminAPI: {
    updateProgram: vi.fn(),
    sanitizeInput: vi.fn((s) => s),
  },
}));

const { AdminAPI } = await import('../../js/cms/admin-api.js');
const { ProgramEditor } = await import('../../admin/js/program-editor.js');

describe('ProgramEditor', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('renderProgramList', () => {
    it('should create list items for each program', () => {
      const programs = [
        { id: 'empresas_diagnostico', title_es: 'Diag ES', title_en: 'Diag EN' },
        { id: 'empresas_workshop', title_es: 'Work ES', title_en: 'Work EN' },
      ];
      const result = ProgramEditor.renderProgramList(programs);
      expect(result).toHaveLength(2);
    });
  });

  describe('validateBilingual', () => {
    it('should return true when both variants present', () => {
      expect(ProgramEditor.validateBilingual({ title_es: 'A', title_en: 'B' }, 'title')).toBe(true);
    });

    it('should return false when EN variant missing', () => {
      expect(ProgramEditor.validateBilingual({ title_es: 'A' }, 'title')).toBe(false);
    });

    it('should return false when ES variant missing', () => {
      expect(ProgramEditor.validateBilingual({ title_en: 'B' }, 'title')).toBe(false);
    });
  });

  describe('saveProgram', () => {
    it('should call AdminAPI.updateProgram with sanitized data', async () => {
      AdminAPI.updateProgram.mockResolvedValue(undefined);
      await ProgramEditor.saveProgram('empresas_diagnostico', {
        title_es: 'New Title',
        title_en: 'New Title EN',
      });
      expect(AdminAPI.updateProgram).toHaveBeenCalledWith('empresas_diagnostico', {
        title_es: 'New Title',
        title_en: 'New Title EN',
      });
    });
  });
});
