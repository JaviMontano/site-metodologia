/**
 * vision-glossary.js — Bilingual modal content for vision page
 *
 * @license Copyleft
 * @copyright MetodologIA
 */

export const GLOSSARY = {
  // ── Problema cards ──
  prob1: {
    es: { term: 'Alerta Crítica', title: 'Multitasking Crónico',
      body: '<p>Tu atención es tu recurso más caro y lo estás regalando.</p><p>Responder mensajes todo el día te da la <em>sensación</em> de trabajar, pero al final del día no has construido nada. Cada interrupción cuesta <strong>23 minutos de refoco</strong>.</p><h4>Antídoto MetodologIA</h4><p>Diseño de Atención y Foco. Recupera tu agenda para recuperar tu negocio.</p>' },
    en: { term: 'Critical Alert', title: 'Chronic Multitasking',
      body: '<p>Your attention is your most expensive resource and you\'re giving it away.</p><p>Answering messages all day gives you the <em>feeling</em> of working, but at the end of the day you haven\'t built anything. Each interruption costs <strong>23 minutes of refocus</strong>.</p><h4>MetodologIA Antidote</h4><p>Attention & Focus Design. Reclaim your schedule to reclaim your business.</p>' }
  },
  prob2: {
    es: { term: 'Drenaje de Recursos', title: 'Fricción Repetitiva',
      body: '<p>Tu tiempo vale demasiado para tareas baratas.</p><p>Usar tu energía creativa para copiar y pegar datos es una mala inversión de vida. Si la tarea es robótica, <strong>dásela al robot</strong>. Tu misión es aportar valor único.</p><h4>Antídoto MetodologIA</h4><p>Apalancamiento con IA. Automatización inteligente de lo repetitivo.</p>' },
    en: { term: 'Resource Drain', title: 'Repetitive Friction',
      body: '<p>Your time is too valuable for cheap tasks.</p><p>Using your creative energy to copy-paste data is a bad life investment. If the task is robotic, <strong>give it to the robot</strong>. Your mission is to add unique value.</p><h4>MetodologIA Antidote</h4><p>AI Leverage. Intelligent automation of the repetitive.</p>' }
  },
  prob3: {
    es: { term: 'Amnesia Institucional', title: 'Silos de Información',
      body: '<p>Si tú faltas, el negocio se detiene. Eso no es una empresa, es un empleo riesgoso.</p><p>El conocimiento operativo debe vivir en el sistema, no en tu memoria. Si todo depende de que tú estés ahí, <strong>eres el cuello de botella</strong> de tu propio crecimiento.</p><h4>Antídoto MetodologIA</h4><p>Activos Digitales que Perduran. Playbooks, SOPs y knowledge base viva.</p>' },
    en: { term: 'Institutional Amnesia', title: 'Information Silos',
      body: '<p>If you\'re absent, the business stops. That\'s not a company, it\'s a risky job.</p><p>Operational knowledge must live in the system, not in your memory. If everything depends on you being there, <strong>you\'re the bottleneck</strong> of your own growth.</p><h4>MetodologIA Antidote</h4><p>Lasting Digital Assets. Playbooks, SOPs and living knowledge base.</p>' }
  },
  prob4: {
    es: { term: 'Falacia de Herramienta', title: 'IA Cosmética',
      body: '<p>La tecnología no arregla el desorden — lo <strong>amplifica</strong>.</p><p>Es como darle un megáfono a alguien que no tiene nada que decir. O como comprarle a todo tu equipo Claude Code de $100/mes pensando que "así seguro cumplimos las metas del Q". Puede que sí... pero velocidad en la dirección equivocada es una maldición, no una bendición.</p><p>Amplificar a un gran tenor es belleza pura. Amplificar ruido es <strong>insoportable</strong>. Primero ordena la casa, luego invita a los robots.</p><h4>Antídoto MetodologIA</h4><p>Primero Estrategia, Luego Tecnología. Método antes que herramienta.</p>' },
    en: { term: 'Tool Fallacy', title: 'Cosmetic AI',
      body: '<p>Technology doesn\'t fix disorder — it <strong>amplifies</strong> it.</p><p>It\'s like giving a megaphone to someone with nothing to say. Or buying your entire team $100/month Claude Code subscriptions thinking "surely we\'ll hit our quarterly targets now." Maybe... but speed in the wrong direction is a curse, not a blessing.</p><p>Amplifying a great tenor is pure beauty. Amplifying noise is <strong>unbearable</strong>. First tidy the house, then invite the robots.</p><h4>MetodologIA Antidote</h4><p>Strategy First, Technology Second. Method before tool.</p>' }
  },

  // ── Trampa ──
  trampa_eq: {
    es: { term: 'La Ecuación del Caos', title: 'Caos + IA = Caos²',
      body: '<p>La tecnología es un <strong>amplificador</strong>, no un corrector.</p><p>Digitalizar un mal proceso solo hace que las cosas salgan mal <em>más rápido</em>. Es la diferencia entre amplificar a Pavarotti y amplificar una alarma de coche: el volumen es el mismo, la experiencia es opuesta.</p><p><strong>Consecuencia:</strong> Cada día sin método, el caos crece exponencialmente. No es que "no pasa nada" — es que el costo de la inercia se acumula en silencio.</p>' },
    en: { term: 'The Chaos Equation', title: 'Chaos + AI = Chaos²',
      body: '<p>Technology is an <strong>amplifier</strong>, not a corrector.</p><p>Digitizing a bad process just makes things go wrong <em>faster</em>. It\'s the difference between amplifying Pavarotti and amplifying a car alarm: same volume, opposite experience.</p><p><strong>Consequence:</strong> Every day without method, chaos grows exponentially. It\'s not that "nothing happens" — the cost of inertia accumulates silently.</p>' }
  },
  trampa_quote: {
    es: { term: 'La Falacia de la Herramienta', title: '"Le compro IA a todos y listo"',
      body: '<p>"Les compro a todos Claude Cowork de $100 para que tengan capacidad y tokens para hacer lo que quieran y así seguro cumplimos las metas del Q."</p><p>Suena razonable. <strong>Y ahí está la trampa.</strong></p><p>Lo peor no es que no funcione — lo peor es que <em>puede que sí funcione</em>... pero con velocidad en la dirección equivocada. Y velocidad hacia el abismo es una maldición disfrazada de productividad.</p><p>Del mismo modo que amplificar a un gran tenor es belleza, <strong>amplificar ruido es terrible</strong>. Antes de subir el volumen, asegúrate de que la melodía vale la pena.</p>' },
    en: { term: 'The Tool Fallacy', title: '"I\'ll buy everyone AI and we\'re set"',
      body: '<p>"I\'ll buy everyone $100 Claude Cowork subscriptions so they have capacity and tokens to do whatever they want and surely we\'ll hit our quarterly targets."</p><p>Sounds reasonable. <strong>And there\'s the trap.</strong></p><p>The worst part isn\'t that it won\'t work — the worst part is that <em>it might</em>... but with speed in the wrong direction. And speed toward the cliff is a curse disguised as productivity.</p><p>Just as amplifying a great tenor is beauty, <strong>amplifying noise is terrible</strong>. Before turning up the volume, make sure the melody is worth it.</p>' }
  },

  // ── Sistema (4 fases) ──
  fase1: {
    es: { term: 'Fase 1 · Diagnóstico', title: 'FUNDAMENTAR',
      body: '<p>Mapeamos dolores, flujos y oportunidades reales. <strong>Sin supuestos</strong> — solo evidencia medible.</p><p>El resultado es un radar con tu nivel actual en cada dimensión y un roadmap priorizado de quick wins.</p>',
      cta: 'Ir al Diagnóstico →', ctaHref: '/diagnostico/' },
    en: { term: 'Phase 1 · Diagnosis', title: 'GROUND',
      body: '<p>We map pains, flows and real opportunities. <strong>No assumptions</strong> — only measurable evidence.</p><p>The result is a radar with your current level in each dimension and a prioritized quick-win roadmap.</p>',
      cta: 'Go to Diagnosis →', ctaHref: '/diagnostico/' }
  },
  fase2: {
    es: { term: 'Fase 2 · Tracción', title: 'ACELERAR',
      body: '<p>Eliminamos fricción y activamos <strong>victorias rápidas</strong>. El equipo siente el cambio en semanas, no meses.</p><p>Quick wins que generan confianza y momentum para las fases más profundas.</p>' },
    en: { term: 'Phase 2 · Traction', title: 'ACCELERATE',
      body: '<p>We eliminate friction and activate <strong>quick wins</strong>. The team feels the change in weeks, not months.</p><p>Quick wins that build trust and momentum for deeper phases.</p>' }
  },
  fase3: {
    es: { term: 'Fase 3 · Sistematización', title: 'CATALIZAR',
      body: '<p>Convertimos conocimiento tácito en <strong>activos digitales replicables</strong>. Playbooks, templates, agentes.</p><p>Lo que antes vivía en la cabeza de alguien, ahora vive en el sistema y escala sin depender de personas.</p>' },
    en: { term: 'Phase 3 · Systematization', title: 'CATALYZE',
      body: '<p>We turn tacit knowledge into <strong>replicable digital assets</strong>. Playbooks, templates, agents.</p><p>What used to live in someone\'s head now lives in the system and scales without depending on people.</p>' }
  },
  fase4: {
    es: { term: 'Fase 4 · Escala & Soberanía', title: 'AMPLIFICAR',
      body: '<p>Agentes de MetodologIA trabajan <strong>24/7</strong> para ti. Tú diseñas, ellos ejecutan.</p><p>Desacople total entre tu nómina y tu capacidad de procesamiento. Soberanía estratégica alcanzada.</p>' },
    en: { term: 'Phase 4 · Scale & Sovereignty', title: 'AMPLIFY',
      body: '<p>MetodologIA agents work <strong>24/7</strong> for you. You design, they execute.</p><p>Total decoupling between your payroll and your processing capacity. Strategic sovereignty achieved.</p>' }
  },

  // ── PIVOTE letters ──
  piv_p: {
    es: { term: 'Fase A · Fundamentar', title: 'P: Personas',
      body: '<p>En la era de la IA, obedecer vale cero; pensar vale oro.</p><p>Dejamos de contratar "manos" para desarrollar "cerebros". Tu equipo debe pasar de operar tareas a <strong>diseñar soluciones</strong>. Ese es el único trabajo seguro.</p>' },
    en: { term: 'Phase A · Ground', title: 'P: People',
      body: '<p>In the AI era, obedience is worthless; thinking is gold.</p><p>We stop hiring "hands" to develop "brains." Your team must shift from operating tasks to <strong>designing solutions</strong>. That\'s the only safe job.</p>' }
  },
  piv_i: {
    es: { term: 'Fase A · Fundamentar', title: 'I: Interacciones',
      body: '<p>El trabajo debe fluir como el agua, no trabarse.</p><p>Diseñamos la ruta de menor resistencia: menos reuniones, menos correos inútiles y más <strong>decisiones claras</strong>. La eficiencia no es trabajar más rápido, es eliminar la fricción.</p>' },
    en: { term: 'Phase A · Ground', title: 'I: Interactions',
      body: '<p>Work must flow like water, not get stuck.</p><p>We design the path of least resistance: fewer meetings, fewer useless emails and more <strong>clear decisions</strong>. Efficiency isn\'t working faster, it\'s eliminating friction.</p>' }
  },
  piv_v: {
    es: { term: 'Fase A · Fundamentar', title: 'V: Valor',
      body: '<p>Cobra por el impacto que generas, no por las horas que te sientas.</p><p>A tus clientes no les importa tu esfuerzo, les importa su resultado. Define el <strong>"Ganar"</strong> antes de empezar a correr y todo cambiará.</p>' },
    en: { term: 'Phase A · Ground', title: 'V: Value',
      body: '<p>Charge for the impact you generate, not the hours you sit.</p><p>Your clients don\'t care about your effort, they care about their result. Define <strong>"Winning"</strong> before you start running and everything changes.</p>' }
  },
  piv_o: {
    es: { term: 'Fase B · Amplificar', title: 'O: Organización',
      body: '<p>Sistematiza para ser libre. Si no está escrito, no existe y depende de ti.</p><p>Convertimos tu conocimiento en <strong>Playbooks</strong> para que el negocio funcione con calidad perfecta, incluso cuando tú estás durmiendo.</p>' },
    en: { term: 'Phase B · Amplify', title: 'O: Organization',
      body: '<p>Systematize to be free. If it\'s not written, it doesn\'t exist and depends on you.</p><p>We turn your knowledge into <strong>Playbooks</strong> so the business runs with perfect quality, even when you\'re sleeping.</p>' }
  },
  piv_t: {
    es: { term: 'Fase B · Amplificar', title: 'T: Tecnología',
      body: '<p>Multiplica tu capacidad ×100. Una vez que tienes orden (O), la IA es la palanca infinita.</p><p>Clona tu mejor versión y pon a ejércitos digitales a trabajar <strong>24/7</strong> para ti. Eso es escalar sin quemarse.</p>' },
    en: { term: 'Phase B · Amplify', title: 'T: Technology',
      body: '<p>Multiply your capacity ×100. Once you have order (O), AI is the infinite lever.</p><p>Clone your best version and put digital armies to work <strong>24/7</strong> for you. That\'s scaling without burning out.</p>' }
  },
  piv_e: {
    es: { term: 'Fase B · Amplificar', title: 'E: Evolución',
      body: '<p>Lo que funciona hoy, mañana es obsoleto. Diseñamos sistemas que aprenden solos.</p><p>No solo te actualizamos — instalamos la capacidad de <strong>mejora continua</strong> para que siempre vayas un paso delante del mercado.</p>' },
    en: { term: 'Phase B · Amplify', title: 'E: Evolution',
      body: '<p>What works today is obsolete tomorrow. We design systems that learn by themselves.</p><p>We don\'t just update you — we install the capacity for <strong>continuous improvement</strong> so you\'re always one step ahead of the market.</p>' }
  },

  // ── Principios ──
  princ_metodo: {
    es: { term: 'Principio 01', title: 'Primero el orden, después la herramienta',
      body: '<p>Si el proceso está roto, la IA solo escala el caos. Un método claro convierte la IA en palanca.</p><p>No vendemos herramientas. Vendemos <strong>orden</strong> que hace que las herramientas funcionen.</p>' },
    en: { term: 'Principle 01', title: 'First order, then the tool',
      body: '<p>If the process is broken, AI only scales the chaos. A clear method turns AI into leverage.</p><p>We don\'t sell tools. We sell <strong>order</strong> that makes tools work.</p>' }
  },
  princ_soberania: {
    es: { term: 'Principio 02', title: 'Termino cuando ya no me necesitas',
      body: '<p>Construimos capacidad instalada, no dependencia. Cada engagement transfiere <strong>conocimiento explícito</strong>.</p><p>Nuestro éxito se mide por tu independencia, no por tu renovación.</p>' },
    en: { term: 'Principle 02', title: 'I finish when you no longer need me',
      body: '<p>We build installed capacity, not dependency. Every engagement transfers <strong>explicit knowledge</strong>.</p><p>Our success is measured by your independence, not your renewal.</p>' }
  },
  princ_dignidad: {
    es: { term: 'Principio 03', title: 'El rendimiento no justifica el desgaste',
      body: '<p>Productividad sin bienestar es explotación disfrazada. Diseñamos cadencias con <strong>ritmo sostenible</strong>.</p><p>Si tu equipo está "reventado" pero cumple metas, el sistema está roto — no el equipo.</p>' },
    en: { term: 'Principle 03', title: 'Performance doesn\'t justify burnout',
      body: '<p>Productivity without wellbeing is disguised exploitation. We design cadences with <strong>sustainable rhythm</strong>.</p><p>If your team is "burned out" but hitting targets, the system is broken — not the team.</p>' }
  },
  princ_evidencia: {
    es: { term: 'Principio 04', title: 'Sin datos, no hay verdad',
      body: '<p>Todo lo que afirmamos tiene un antes y un después medible. <strong>CSAT, ROI, TTFW, Lead Time.</strong></p><p>No trabajamos con intuiciones ni promesas. Si no se puede medir, no se puede mejorar.</p>' },
    en: { term: 'Principle 04', title: 'Without data, there\'s no truth',
      body: '<p>Everything we claim has a measurable before and after. <strong>CSAT, ROI, TTFW, Lead Time.</strong></p><p>We don\'t work with intuitions or promises. If it can\'t be measured, it can\'t be improved.</p>' }
  }
};

/** Get a glossary entry for the current locale. */
export function getEntry(key) {
  const lang = document.documentElement.lang || 'es';
  return GLOSSARY[key]?.[lang] || GLOSSARY[key]?.es || null;
}
