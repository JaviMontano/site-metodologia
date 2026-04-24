/**
 * diag-glossary.js — Bilingual modal content for diagnostico page
 * @license Copyleft
 * @copyright MetodologIA
 */

export const DIAG = {
  ficha: {
    es: {
      term: 'Paso 01 · 3-4 min', title: 'Ficha Personal',
      body: `<p>Este formulario recoge tu <strong>contexto profesional</strong> para personalizar todo el diagnostico.</p>
<h4>Que te vamos a preguntar</h4>
<ul>
<li><strong>Identificacion:</strong> nombre, contacto, ciudad</li>
<li><strong>Perfil profesional:</strong> empresa, cargo, experiencia, nivel educativo</li>
<li><strong>Motivacion:</strong> tus 3 motivadores principales, como aprendes mejor, que esperas lograr</li>
<li><strong>Autorizaciones:</strong> tratamiento de datos y comunicaciones</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Al completar esta ficha, nuestros agentes activan tu perfil para que, al terminar los demas formularios, puedas recibir un diagnostico a tu medida.</p>`
    },
    en: {
      term: 'Step 01 · 3-4 min', title: 'Personal Profile',
      body: `<p>This form collects your <strong>professional context</strong> to personalize the entire diagnostic.</p>
<h4>What we'll ask</h4>
<ul>
<li><strong>Identification:</strong> name, contact, city</li>
<li><strong>Professional profile:</strong> company, role, experience, education level</li>
<li><strong>Motivation:</strong> your 3 main motivators, how you learn best, what you hope to achieve</li>
<li><strong>Authorizations:</strong> data processing and communications</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Upon completing this form, our agents activate your profile so that, after finishing the other forms, you can receive a personalized diagnostic.</p>`
    },
    url: 'https://forms.gle/C3NRx4ZmFmkymsgu5'
  },
  ia: {
    es: {
      term: 'Paso 02 · 4-5 min', title: 'Madurez en IA',
      body: `<p>Medimos tu <strong>nivel real de adopcion de IA</strong> — no lo que sabes, sino lo que haces con ella.</p>
<h4>Que te vamos a preguntar</h4>
<ul>
<li><strong>Conocimiento:</strong> diferencia entre IA tradicional y generativa, que es un prompt, herramientas usadas</li>
<li><strong>Practica:</strong> frecuencia de uso, escenarios reales, actitud hacia la IA</li>
<li><strong>Evidencia:</strong> artefactos construidos con IA, feedback recibido, nivel de confianza</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Incluye escenarios practicos como: "Tienes 2 horas para un informe sobre un tema que no dominas. Que harias con IA?"</p>`
    },
    en: {
      term: 'Step 02 · 4-5 min', title: 'AI Maturity',
      body: `<p>We measure your <strong>real AI adoption level</strong> — not what you know, but what you do with it.</p>
<h4>What we'll ask</h4>
<ul>
<li><strong>Knowledge:</strong> difference between traditional and generative AI, what is a prompt, tools used</li>
<li><strong>Practice:</strong> frequency of use, real scenarios, attitude towards AI</li>
<li><strong>Evidence:</strong> artifacts built with AI, feedback received, confidence level</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Includes practical scenarios like: "You have 2 hours for a report on a topic you don't know. What would you do with AI?"</p>`
    },
    url: 'https://forms.gle/HumRZT2soF7XqKav6'
  },
  metodo: {
    es: {
      term: 'Paso 03 · 4-5 min', title: 'Madurez en Metodo y FdT',
      body: `<p>Evaluamos tus <strong>formas de trabajo</strong>: como organizas, priorizas y produces resultados.</p>
<h4>Que te vamos a preguntar</h4>
<ul>
<li><strong>Contexto:</strong> equipo vs individual, rol principal, herramientas de organizacion</li>
<li><strong>Metodo:</strong> marcos aplicados (Agile, GTD, etc.), ciclos de planificacion, retrospectivas</li>
<li><strong>Capacidades:</strong> power skills, dolor principal, disposicion al cambio</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Incluye escenarios como: "Informe urgente en 3 horas, sin plantilla, 3 tareas pendientes. Que haces primero?"</p>`
    },
    en: {
      term: 'Step 03 · 4-5 min', title: 'Methodology & WoW Maturity',
      body: `<p>We evaluate your <strong>ways of working</strong>: how you organize, prioritize and produce results.</p>
<h4>What we'll ask</h4>
<ul>
<li><strong>Context:</strong> team vs individual, main role, organization tools</li>
<li><strong>Method:</strong> applied frameworks (Agile, GTD, etc.), planning cycles, retrospectives</li>
<li><strong>Capabilities:</strong> power skills, main pain point, willingness to change</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Includes scenarios like: "Urgent report in 3 hours, no template, 3 pending tasks. What do you do first?"</p>`
    },
    url: 'https://forms.gle/4D7YysEcJtgeH6iVA'
  },
  digital: {
    es: {
      term: 'Paso 04 · 8-9 min', title: 'Capacidades Digitales',
      body: `<p>El mas completo: mide tus <strong>competencias digitales reales</strong> en 5 areas.</p>
<h4>Que te vamos a preguntar</h4>
<ul>
<li><strong>Base digital:</strong> manejo de computador, busqueda en internet, seguridad digital</li>
<li><strong>Ofimatica:</strong> correo, calendario, hojas de calculo, archivos en la nube</li>
<li><strong>Segundo Cerebro:</strong> captura de notas, organizacion de ideas y aprendizajes</li>
<li><strong>Multimedia:</strong> video, audio/podcast, edicion basica, herramientas multimedia</li>
<li><strong>Reflexion:</strong> que habilidad digital mejorar as primero</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Incluye escenarios practicos con Excel, Google Drive, correo y grabacion de video.</p>`
    },
    en: {
      term: 'Step 04 · 8-9 min', title: 'Digital Capabilities',
      body: `<p>The most comprehensive: measures your <strong>real digital skills</strong> across 5 areas.</p>
<h4>What we'll ask</h4>
<ul>
<li><strong>Digital basics:</strong> computer skills, internet search, digital security</li>
<li><strong>Office suite:</strong> email, calendar, spreadsheets, cloud files</li>
<li><strong>Second Brain:</strong> note capture, idea and learning organization</li>
<li><strong>Multimedia:</strong> video, audio/podcast, basic editing, multimedia tools</li>
<li><strong>Reflection:</strong> which digital skill would you improve first</li>
</ul>
<p style="margin-top:.75rem;font-size:.85rem;color:var(--brand-text-soft);">Includes practical scenarios with Excel, Google Drive, email and video recording.</p>`
    },
    url: 'https://forms.gle/Dwq6u5QaUCGoksiq8'
  }
};

export function getDiagEntry(key) {
  const entry = DIAG[key];
  if (!entry) return null;
  const lang = (document.documentElement.lang || 'es').slice(0, 2);
  const localized = entry[lang] || entry.es;
  return { ...localized, url: entry.url };
}

export function getDiagUIText() {
  const lang = (document.documentElement.lang || 'es').slice(0, 2);
  return lang === 'en'
    ? { cta: 'Start form →', cancel: 'Cancel', close: 'Close' }
    : { cta: 'Iniciar formulario →', cancel: 'Cancelar', close: 'Cerrar' };
}
