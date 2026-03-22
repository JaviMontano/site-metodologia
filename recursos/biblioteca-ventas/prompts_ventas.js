window.promptsVentas = [
  {
    "id": "metaprompt_investigacion_datos_basicos",
    "label_title": "Metaprompt Investigación Datos Básicos",
    "category": "investigacion",
    "content": "===parametros\n\n- razon_social: {[razon_social]} → Razón social o nombre de la empresa\n- nit: {[nit]} → NIT de la empresa (formato: 123456789-0)\n- pais: {[pais]} → País donde opera la empresa\n\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n{ventana_temporal} → (opcional; default: toda información pública con mayor ponderación últimos 12 meses) Ventana temporal para búsqueda\n\n===prompt\n\n# Objetivo\n\nGenerar un prompt de investigación específico y ejecutable para recopilar datos básicos fundamentales del cliente o lead identificado. El prompt generado debe estar completamente personalizado según los inputs proporcionados y debe producir un reporte ejecutivo de nivel Google, McKinsey o Deloitte.\n\n# Arquetipo Experto\n\nActúa como un **Market Researcher Senior de Google** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es diseñar investigaciones de mercado que generan insights accionables de alto valor comercial.\n\n# Parámetros\n\n- razon_social: {[razon_social]} → Razón social o nombre de la empresa\n- nit: {[nit]} → NIT de la empresa (formato: 123456789-0)\n- pais: {[pais]} → País donde opera la empresa\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- ventana_temporal: {ventana_temporal} → (opcional; default: toda información pública con mayor ponderación últimos 12 meses) Ventana temporal\n\n# Checklist\n\n- [ ] Analizar los inputs proporcionados (razón social, NIT, país)\n- [ ] Diseñar prompt de investigación completamente personalizado\n- [ ] Incluir metodología de búsqueda estructurada\n- [ ] Definir fuentes de información prioritarias\n- [ ] Establecer criterios de validación de datos\n- [ ] Generar prompt ejecutable listo para usar\n- [ ] Ejecutar el prompt generado y producir reporte ejecutivo\n\n# Preguntas Clave\n\n- ¿Qué información básica es crítica para iniciar la relación comercial?\n- ¿Qué fuentes oficiales deben consultarse (RUES, Cámara de Comercio, etc.)?\n- ¿Qué datos de contacto son prioritarios para el seguimiento comercial?\n- ¿Qué información permite identificar oportunidades de negocio?\n\n# Plan\n\n1. **Análisis de Inputs**: Revisar razón social, NIT y país para contextualizar la investigación\n2. **Diseño de Prompt**: Crear prompt de investigación personalizado con metodología estructurada\n3. **Definición de Fuentes**: Identificar fuentes oficiales y no oficiales relevantes\n4. **Ejecución**: Ejecutar el prompt generado para recopilar datos básicos\n5. **Síntesis**: Consolidar información en reporte ejecutivo de alto nivel\n\n# Entregable Esperado\n\n1. **Prompt de Investigación Generado**: Prompt completamente personalizado y ejecutable\n2. **Reporte Ejecutivo de Datos Básicos** con:\n   - Razón social y variaciones encontradas\n   - NIT y validación de registro\n   - Representante legal y estructura societaria\n   - Información de contacto (emails, teléfonos, direcciones)\n   - Presencia en redes sociales (LinkedIn, Facebook, Twitter, Instagram)\n   - Perfiles de LinkedIn de directivos clave\n   - Inputs estructurados para búsquedas posteriores\n   - Nivel de confianza por dato recopilado\n   - Insights iniciales para oportunidades comerciales\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 6,
    "keywords": [
      "Investigación",
      "Metaprompt",
      "Investigación",
      "Datos"
    ],
    "explicacion": "Generar un prompt de investigación específico y ejecutable para recopilar datos fundamentales de un cliente o lead. Entrega un reporte ejecutivo con razón social, NIT, estructura societaria, contactos, redes sociales y perfiles de directivos clave.",
    "cuando_usar": "Úsalo al inicio del proceso comercial cuando tienes un nuevo lead o prospecto y necesitas información básica verificada antes del primer contacto. Ideal para preparar reuniones de discovery o personalizar propuestas iniciales."
  },
  {
    "id": "metaprompt_analisis_voz_marca_arquetipos",
    "label_title": "Metaprompt Análisis Voz Marca Arquetipos",
    "category": "investigacion",
    "content": "===parametros\n\n- datos_basicos: {[datos_basicos]} → Output del metaprompt de datos básicos (JSON o texto estructurado)\n\n{plataformas_sociales} → (opcional; default: todas principales) Plataformas a analizar (LinkedIn, Facebook, Twitter, Instagram, YouTube)\n{profundidad_analisis} → (opcional; default: alto) Nivel de profundidad del análisis (medio|alto|exhaustivo)\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n{ventana_temporal} → (opcional; default: últimos 12 meses con mayor ponderación) Ventana temporal para análisis\n\n===prompt\n\n# Objetivo\n\nGenerar un prompt de investigación específico y ejecutable para analizar la voz de marca, identificar arquetipos de marca y realizar ingeniería inversa de la estrategia de comunicación de la empresa y su alta dirección. El prompt generado debe estar completamente personalizado según los datos básicos proporcionados y debe producir un reporte ejecutivo de nivel Google, McKinsey o Deloitte.\n\n# Arquetipo Experto\n\nActúa como un **Market Researcher Senior de Google** especializado en análisis de marca y comunicación estratégica, con experiencia en consultoría nivel McKinsey y Deloitte. Tu especialidad es deconstruir estrategias de marca para identificar oportunidades de alineación comercial.\n\n# Parámetros\n\n- datos_basicos: {[datos_basicos]} → Output del metaprompt de datos básicos\n- plataformas_sociales: {plataformas_sociales} → (opcional; default: todas principales) Plataformas a analizar\n- profundidad_analisis: {profundidad_analisis} → (opcional; default: alto) Nivel de profundidad\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- ventana_temporal: {ventana_temporal} → (opcional; default: últimos 12 meses con mayor ponderación) Ventana temporal\n\n# Checklist\n\n- [ ] Analizar datos básicos proporcionados para contextualizar la investigación\n- [ ] Diseñar prompt de investigación personalizado para análisis de voz de marca\n- [ ] Incluir metodología de análisis de arquetipos de marca\n- [ ] Definir proceso de ingeniería inversa de estrategia de comunicación\n- [ ] Establecer análisis de perfil de alta dirección y comunicadores\n- [ ] Generar prompt ejecutable listo para usar\n- [ ] Ejecutar el prompt generado y producir reporte ejecutivo\n\n# Preguntas Clave\n\n- ¿Cuál es la voz de marca que proyecta la empresa en redes sociales?\n- ¿Qué arquetipos de marca se identifican en su comunicación?\n- ¿Cómo comunica la alta dirección y qué valores transmite?\n- ¿Qué oportunidades de alineación comercial se identifican?\n\n# Plan\n\n1. **Análisis de Contexto**: Revisar datos básicos para identificar canales y perfiles clave\n2. **Diseño de Prompt**: Crear prompt de investigación personalizado para análisis de marca\n3. **Metodología de Análisis**: Definir proceso estructurado de análisis de voz y arquetipos\n4. **Ejecución**: Ejecutar el prompt generado para analizar presencia digital\n5. **Síntesis**: Consolidar insights en reporte ejecutivo de alto nivel\n\n# Entregable Esperado\n\n1. **Prompt de Investigación Generado**: Prompt completamente personalizado y ejecutable\n2. **Reporte Ejecutivo de Análisis de Marca** con:\n   - Análisis de voz de marca identificada en cada plataforma\n   - Arquetipos de marca detectados (Hero, Sage, Explorer, etc.)\n   - Ingeniería inversa de estrategia de comunicación\n   - Perfil de comunicación de alta dirección y responsables de comunicación\n   - Valores y mensajes clave transmitidos\n   - Oportunidades de alineación comercial basadas en voz de marca\n   - Recomendaciones para personalización de propuesta comercial\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 5,
    "keywords": [
      "Investigación",
      "Metaprompt",
      "Análisis",
      "Marca"
    ],
    "explicacion": "Analizar la voz de marca, identificar arquetipos de marca y realizar ingeniería inversa de la estrategia de comunicación de la empresa y su alta dirección. Produce un reporte con arquetipos detectados, valores transmitidos y oportunidades de alineación comercial.",
    "cuando_usar": "Úsalo después de obtener datos básicos cuando necesitas entender cómo comunica el cliente para personalizar tu propuesta con su mismo lenguaje y valores. Especialmente útil para propuestas de alto valor donde la alineación de marca es diferenciador."
  },
  {
    "id": "metaprompt_investigacion_opiniones_terceros",
    "label_title": "Metaprompt Investigación Opiniones Terceros",
    "category": "investigacion",
    "content": "===parametros\n\n- datos_basicos: {[datos_basicos]} → Output del metaprompt de datos básicos (JSON o texto estructurado)\n\n{fuentes} → (opcional; default: todas relevantes) Fuentes de opiniones (reviews, noticias, menciones, entes de control)\n{tipo_opiniones} → (opcional; default: reviews, noticias, menciones) Tipos de opiniones a buscar\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n{ventana_temporal} → (opcional; default: últimos 12 meses con mayor ponderación) Ventana temporal para búsqueda\n\n===prompt\n\n# Objetivo\n\nGenerar un prompt de investigación específico y ejecutable para buscar y analizar opiniones de terceros sobre la marca, incluyendo reviews, noticias, menciones, reportes en entes de control y demandas. El prompt generado debe estar completamente personalizado según los datos básicos proporcionados y debe producir un reporte ejecutivo de nivel Google, McKinsey o Deloitte.\n\n# Arquetipo Experto\n\nActúa como un **Market Researcher Senior de Google** especializado en análisis de reputación y percepción de marca, con experiencia en consultoría nivel McKinsey y Deloitte. Tu especialidad es identificar señales de mercado que impactan decisiones comerciales.\n\n# Parámetros\n\n- datos_basicos: {[datos_basicos]} → Output del metaprompt de datos básicos\n- fuentes: {fuentes} → (opcional; default: todas relevantes) Fuentes de opiniones\n- tipo_opiniones: {tipo_opiniones} → (opcional; default: reviews, noticias, menciones) Tipos de opiniones\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- ventana_temporal: {ventana_temporal} → (opcional; default: últimos 12 meses con mayor ponderación) Ventana temporal\n\n# Checklist\n\n- [ ] Analizar datos básicos proporcionados para contextualizar la búsqueda\n- [ ] Diseñar prompt de investigación personalizado para opiniones de terceros\n- [ ] Incluir metodología de búsqueda en múltiples fuentes\n- [ ] Definir criterios de análisis de sentimiento y relevancia\n- [ ] Establecer proceso de verificación de información\n- [ ] Generar prompt ejecutable listo para usar\n- [ ] Ejecutar el prompt generado y producir reporte ejecutivo\n\n# Preguntas Clave\n\n- ¿Qué dicen terceros sobre la empresa en diferentes canales?\n- ¿Hay señales de alerta o riesgos reputacionales?\n- ¿Qué oportunidades o fortalezas se mencionan externamente?\n- ¿Cómo se percibe la empresa en el mercado?\n\n# Plan\n\n1. **Análisis de Contexto**: Revisar datos básicos para identificar nombres y variaciones a buscar\n2. **Diseño de Prompt**: Crear prompt de investigación personalizado para búsqueda de opiniones\n3. **Metodología de Búsqueda**: Definir proceso estructurado de búsqueda multi-fuente\n4. **Ejecución**: Ejecutar el prompt generado para recopilar opiniones\n5. **Síntesis**: Consolidar información en reporte ejecutivo de alto nivel\n\n# Entregable Esperado\n\n1. **Prompt de Investigación Generado**: Prompt completamente personalizado y ejecutable\n2. **Reporte Ejecutivo de Opiniones de Terceros** con:\n   - Reviews y calificaciones en plataformas relevantes\n   - Noticias y menciones en medios de comunicación\n   - Menciones en redes sociales y foros\n   - Reportes en entes de control (Superintendencias, Procuraduría, etc.)\n   - Demandas y procesos legales públicos\n   - Análisis de sentimiento general\n   - Señales de alerta o riesgos identificados\n   - Fortalezas y oportunidades mencionadas externamente\n   - Insights para gestión de objeciones comerciales\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 4,
    "keywords": [
      "Investigación",
      "Metaprompt",
      "Investigación",
      "Opiniones"
    ],
    "explicacion": "Buscar y analizar opiniones de terceros sobre la marca incluyendo reviews, noticias, menciones, reportes en entes de control y demandas. Genera un reporte de reputación con análisis de sentimiento, señales de alerta y fortalezas identificadas externamente.",
    "cuando_usar": "Úsalo para due diligence comercial antes de comprometer recursos significativos en un prospecto. Especialmente importante para clientes enterprise o contratos de largo plazo donde los riesgos reputacionales pueden afectar tu marca."
  },
  {
    "id": "metaprompt_analisis_tendencias_sector",
    "label_title": "Metaprompt Análisis Tendencias Sector",
    "category": "investigacion",
    "content": "===parametros\n\n- sector: {[sector]} → Sector económico de la empresa\n- industria: {[industria]} → Industria específica\n- nicho: {[nicho]} → Nicho de mercado\n- cliente_especifico: {[cliente_especifico]} → Información específica del cliente/lead\n\n{horizonte_temporal} → (opcional; default: últimos 12 meses con proyección 6 meses) Horizonte temporal para análisis\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n\n===prompt\n\n# Objetivo\n\nGenerar un prompt de investigación específico y ejecutable para analizar tendencias relevantes del sector, industria y nicho que sean de interés para el negocio del cliente o lead. El prompt generado debe estar completamente personalizado según los inputs proporcionados y debe producir un reporte ejecutivo de nivel Google, McKinsey o Deloitte.\n\n# Arquetipo Experto\n\nActúa como un **Market Researcher Senior de Google** especializado en análisis de tendencias y prospectiva estratégica, con experiencia en consultoría nivel McKinsey y Deloitte. Tu especialidad es identificar tendencias que generan oportunidades comerciales.\n\n# Parámetros\n\n- sector: {[sector]} → Sector económico de la empresa\n- industria: {[industria]} → Industria específica\n- nicho: {[nicho]} → Nicho de mercado\n- cliente_especifico: {[cliente_especifico]} → Información específica del cliente/lead\n- horizonte_temporal: {horizonte_temporal} → (opcional; default: últimos 12 meses con proyección 6 meses) Horizonte temporal\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- profundidad:\n# Checklist\n\n- [ ] Analizar inputs de sector, industria, nicho y cliente específico\n- [ ] Diseñar prompt de investigación personalizado para análisis de tendencias\n- [ ] Incluir metodología de identificación de tendencias relevantes\n- [ ] Definir fuentes de información de tendencias (reportes, estudios, análisis)\n- [ ] Establecer criterios de relevancia para el negocio del cliente\n- [ ] Generar prompt ejecutable listo para usar\n- [ ] Ejecutar el prompt generado y producir reporte ejecutivo\n\n# Preguntas Clave\n\n- ¿Qué tendencias del sector impactan al cliente?\n- ¿Qué oportunidades comerciales surgen de las tendencias identificadas?\n- ¿Cómo puede el cliente capitalizar estas tendencias?\n- ¿Qué riesgos o desafíos se vislumbran?\n\n# Plan\n\n1. **Análisis de Contexto**: Revisar sector, industria, nicho y cliente específico\n2. **Diseño de Prompt**: Crear prompt de investigación personalizado para tendencias\n3. **Metodología de Análisis**: Definir proceso estructurado de identificación de tendencias\n4. **Ejecución**: Ejecutar el prompt generado para analizar tendencias\n5. **Síntesis**: Consolidar insights en reporte ejecutivo de alto nivel\n\n# Entregable Esperado\n\n1. **Prompt de Investigación Generado**: Prompt completamente personalizado y ejecutable\n2. **Reporte Ejecutivo de Tendencias del Sector** con:\n   - Tendencias macro del sector económico\n   - Tendencias específicas de la industria\n   - Tendencias del nicho de mercado\n   - Tendencias relevantes para el cliente específico\n   - Oportunidades comerciales identificadas\n   - Riesgos y desafíos emergentes\n   - Recomendaciones estratégicas basadas en tendencias\n   - Insights para propuesta comercial alineada con tendencias\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 5,
    "keywords": [
      "Investigación",
      "Metaprompt",
      "Análisis",
      "Tendencias"
    ],
    "explicacion": "Analizar tendencias relevantes del sector, industria y nicho que impactan al cliente. Produce un reporte con tendencias macro y micro, oportunidades comerciales basadas en tendencias, y riesgos emergentes relevantes para la propuesta.",
    "cuando_usar": "Úsalo para posicionarte como experto sectorial durante discovery o para fundamentar propuestas con contexto de mercado. Ideal cuando el cliente pregunta 'qué están haciendo otros en mi industria'."
  },
  {
    "id": "investigacion_completa_cliente_minutos",
    "label_title": "Investigación Completa Cliente Minutos",
    "category": "investigacion",
    "content": "===parametros\n\n- cliente: {[cliente]} → Nombre o razón social del cliente/lead\n- fuentes_prioritarias: {[fuentes_prioritarias]} → Fuentes prioritarias para investigación\n\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n{ventana_temporal} → (opcional; default: toda información pública con mayor ponderación últimos 12 meses) Ventana temporal para búsqueda\n{integracion_metaprompts} → (opcional; default: si) Integrar outputs de metaprompts anteriores\n\n===prompt\n\n# Objetivo\n\nEjecutar una investigación completa y exhaustiva del cliente o lead, integrando metodologías de los metaprompts de investigación para producir un reporte ejecutivo consolidado de forma exhaustiva. Generar información accionable para iniciar la relación comercial.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Investigación Comercial Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es sintetizar información compleja en insights comerciales accionables.\n\n# Parámetros\n\n- cliente: {[cliente]} → Nombre o razón social del cliente/lead\n- fuentes_prioritarias: {[fuentes_prioritarias]} → Fuentes prioritarias para investigación\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- ventana_temporal: {ventana_temporal} → (opcional; default: toda información pública con mayor ponderación últimos 12 meses) Ventana temporal\n- integracion_metaprompts: {integracion_metaprompts} → (opcional; default: si) Integrar outputs de metaprompts anteriores\n\n# Checklist\n\n- [ ] Ejecutar investigación de datos básicos del cliente\n- [ ] Realizar análisis de voz de marca y arquetipos\n- [ ] Buscar opiniones de terceros sobre la marca\n- [ ] Analizar tendencias del sector relevante\n- [ ] Consolidar toda la información en reporte único\n- [ ] Identificar oportunidades comerciales prioritarias\n- [ ] Generar insights accionables para ventas\n\n# Preguntas Clave\n\n- ¿Qué información es crítica para iniciar la relación comercial?\n- ¿Cuáles son las oportunidades comerciales más prometedoras?\n- ¿Qué riesgos o señales de alerta se identifican?\n- ¿Cómo personalizar la propuesta comercial basada en la investigación?\n\n# Plan\n\n1. **Investigación Integrada**: Ejecutar investigación multi-dimensional del cliente\n2. **Análisis de Oportunidades**: Identificar oportunidades comerciales basadas en investigación\n3. **Síntesis Ejecutiva**: Consolidar información en reporte ejecutivo\n4. **Insights Accionables**: Generar recomendaciones específicas para ventas\n\n# Entregable Esperado\n\n**Reporte Ejecutivo Consolidado de Investigación Completa** con:\n- Resumen ejecutivo de hallazgos clave\n- Datos básicos del cliente (razón social, NIT, contactos, estructura)\n- Análisis de voz de marca y arquetipos\n- Opiniones de terceros y reputación\n- Tendencias del sector relevantes\n- Oportunidades comerciales priorizadas\n- Riesgos y señales de alerta\n- Recomendaciones para personalización de propuesta\n- Insights accionables para estrategia de ventas\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 3,
    "keywords": [
      "Investigación",
      "Investigación",
      "Completa",
      "Cliente"
    ],
    "explicacion": "Ejecutar investigación completa y exhaustiva del cliente integrando metodologías de todos los metaprompts de investigación. Genera un reporte consolidado con datos básicos, voz de marca, reputación, tendencias y oportunidades comerciales priorizadas.",
    "cuando_usar": "Úsalo cuando necesitas una investigación integral rápida antes de una reunión importante o para preparar una propuesta high ticket. Combina el valor de los 4 metaprompts en una sola ejecución."
  },
  {
    "id": "validacion_informacion_cliente",
    "label_title": "Validación Información Cliente",
    "category": "investigacion",
    "content": "===parametros\n\n- datos_cliente: {[datos_cliente]} → Datos recopilados del cliente (JSON o texto estructurado)\n- fuentes_verificacion: {[fuentes_verificacion]} → Fuentes para verificación (oficiales|no_oficiales|ambas)\n- criterios_validacion: {[criterios_validacion]} → Criterios de validación requeridos\n\n{idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda de información\n{pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes de información\n{nivel_confianza_minimo} → (opcional; default: medio) Nivel de confianza mínimo aceptable (bajo|medio|alto)\n\n===prompt\n\n# Objetivo\n\nValidar y verificar la información recopilada del cliente o lead, estableciendo niveles de confianza por dato y identificando discrepancias o información que requiere verificación adicional. El objetivo es asegurar la calidad y confiabilidad de la información antes de usarla para decisiones comerciales.\n\n# Arquetipo Experto\n\nActúa como un **Auditor de Información Comercial Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es validar información crítica para decisiones de negocio.\n\n# Parámetros\n\n- datos_cliente: {[datos_cliente]} → Datos recopilados del cliente\n- fuentes_verificacion: {[fuentes_verificacion]} → Fuentes para verificación (oficiales|no_oficiales|ambas)\n- criterios_validacion: {[criterios_validacion]} → Criterios de validación requeridos\n- idiomas_busqueda: {idiomas_busqueda} → (opcional; default: español) Idiomas para búsqueda\n- pais_fuentes: {pais_fuentes} → (opcional; default: Colombia) País para restringir fuentes\n- nivel_confianza_minimo: {nivel_confianza_minimo} → (opcional; default: medio) Nivel de confianza mínimo aceptable\n\n# Checklist\n\n- [ ] Revisar todos los datos recopilados del cliente\n- [ ] Verificar información en fuentes oficiales (RUES, Cámara de Comercio, etc.)\n- [ ] Validar consistencia entre diferentes fuentes\n- [ ] Identificar discrepancias o información conflictiva\n- [ ] Establecer nivel de confianza por dato\n- [ ] Marcar información que requiere verificación adicional\n- [ ] Generar reporte de validación con recomendaciones\n\n# Preguntas Clave\n\n- ¿Qué información está verificada y es confiable?\n- ¿Hay discrepancias entre fuentes que requieren atención?\n- ¿Qué datos necesitan verificación adicional?\n- ¿Cuál es el nivel de confianza general de la información?\n\n# Plan\n\n1. **Revisión de Datos**: Analizar todos los datos recopilados\n2. **Verificación Multi-Fuente**: Validar información en fuentes oficiales y no oficiales\n3. **Análisis de Consistencia**: Identificar discrepancias y conflictos\n4. **Evaluación de Confianza**: Establecer niveles de confianza por dato\n5. **Reporte de Validación**: Generar reporte ejecutivo con recomendaciones\n\n# Entregable Esperado\n\n**Reporte Ejecutivo de Validación de Información** con:\n- Matriz de validación por dato (verificado|pendiente|discrepante)\n- Nivel de confianza por dato (alto|medio|bajo)\n- Fuentes de verificación utilizadas\n- Discrepancias identificadas y análisis\n- Información que requiere verificación adicional\n- Recomendaciones para mejorar confiabilidad\n- Resumen ejecutivo de calidad de información\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 4,
    "keywords": [
      "Investigación",
      "Validación",
      "Información",
      "Cliente"
    ],
    "explicacion": "Validar y verificar la información recopilada del cliente, estableciendo niveles de confianza por dato e identificando discrepancias. Genera una matriz de validación con fuentes, nivel de confianza y recomendaciones para mejorar la calidad de datos.",
    "cuando_usar": "Úsalo después de cualquier investigación cuando necesitas asegurar la calidad de la información antes de usarla en propuestas o decisiones comerciales. Esencial para propuestas enterprise donde errores de datos dañan credibilidad."
  },
  {
    "id": "perfilamiento_cliente_ventas",
    "label_title": "Perfilamiento Cliente Ventas",
    "category": "investigacion",
    "content": "===parametros\n\n- datos_investigacion: {[datos_investigacion]} → Datos completos de investigación del cliente\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta comercial (producto|servicio|solucion)\n- industria: {[industria]} → Industria del cliente\n\n{enfoque_ventas} → (opcional; default: consultivo) Enfoque de ventas (consultivo|transaccional|relacional)\n{valor_propuesto} → (opcional) Valor aproximado de la propuesta\n{etapa_venta} → (opcional; default: prospeccion) Etapa del proceso de ventas\n\n===prompt\n\n# Objetivo\n\nCrear un perfil completo del cliente optimizado para estrategia de ventas, transformando la información de investigación en insights accionables que permitan personalizar la propuesta comercial y maximizar las probabilidades de cierre.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Ventas B2B Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es transformar investigación en estrategias de ventas efectivas.\n\n# Parámetros\n\n- datos_investigacion: {[datos_investigacion]} → Datos completos de investigación del cliente\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta comercial (producto|servicio|solucion)\n- industria: {[industria]} → Industria del cliente\n- enfoque_ventas: {enfoque_ventas} → (opcional; default: consultivo) Enfoque de ventas\n- valor_propuesto: {valor_propuesto} → (opcional) Valor aproximado de la propuesta\n- etapa_venta: {etapa_venta} → (opcional; default: prospeccion) Etapa del proceso de ventas\n\n# Checklist\n\n- [ ] Analizar datos de investigación del cliente\n- [ ] Identificar perfil de decisor y estructura de compra\n- [ ] Determinar necesidades y pain points del cliente\n- [ ] Establecer estrategia de acercamiento personalizada\n- [ ] Identificar argumentos de venta más relevantes\n- [ ] Definir tácticas de personalización de propuesta\n- [ ] Generar perfil ejecutivo para ventas\n\n# Preguntas Clave\n\n- ¿Quién es el decisor y cómo toma decisiones?\n- ¿Cuáles son los pain points principales del cliente?\n- ¿Qué argumentos de venta serán más efectivos?\n- ¿Cómo personalizar la propuesta para este cliente?\n\n# Plan\n\n1. **Análisis de Perfil**: Analizar datos de investigación para construir perfil del cliente\n2. **Identificación de Necesidades**: Determinar necesidades y pain points\n3. **Estrategia de Ventas**: Definir estrategia de acercamiento y argumentos\n4. **Personalización**: Identificar elementos de personalización para propuesta\n5. **Síntesis Ejecutiva**: Generar perfil ejecutivo para equipo de ventas\n\n# Entregable Esperado\n\n**Perfil Ejecutivo de Cliente para Ventas** con:\n- Resumen ejecutivo del cliente\n- Perfil del decisor y estructura de compra\n- Necesidades y pain points identificados\n- Oportunidades comerciales priorizadas\n- Argumentos de venta más relevantes\n- Estrategia de acercamiento recomendada\n- Elementos de personalización para propuesta\n- Tácticas de seguimiento y cierre\n- Insights accionables para equipo de ventas\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 5,
    "keywords": [
      "Investigación",
      "Perfilamiento",
      "Cliente",
      "Ventas"
    ],
    "explicacion": "Crear un perfil completo del cliente optimizado para estrategia de ventas, transformando información de investigación en insights accionables para personalizar la propuesta y maximizar probabilidades de cierre.",
    "cuando_usar": "Úsalo después de completar la investigación cuando necesitas sintetizar toda la información en un perfil ejecutivo que el equipo de ventas pueda usar inmediatamente para la estrategia de abordaje."
  },
  {
    "id": "identificacion_oportunidades_negocio",
    "label_title": "Identificación Oportunidades Negocio",
    "category": "propuestas",
    "content": "===parametros\n\n- datos_cliente: {[datos_cliente]} → Datos completos del cliente/lead\n- servicios_empresa: {[servicios_empresa]} → Servicios o productos que ofrece tu empresa\n- contexto_mercado: {[contexto_mercado]} → Contexto de mercado y competencia\n\n{priorizacion} → (opcional; default: impacto_esfuerzo) Criterio de priorización (impacto_esfuerzo|valor|probabilidad)\n{horizonte_temporal} → (opcional; default: corto_plazo) Horizonte temporal (corto_plazo|medio_plazo|largo_plazo)\n{valor_minimo} → (opcional) Valor mínimo de oportunidad a considerar\n\n===prompt\n\n# Objetivo\n\nIdentificar y priorizar oportunidades de negocio específicas basadas en la investigación del cliente, alineando las necesidades del cliente con los servicios o productos de la empresa para maximizar el valor de la relación comercial.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Desarrollo de Negocios Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es identificar y priorizar oportunidades comerciales de alto valor.\n\n# Parámetros\n\n- datos_cliente: {[datos_cliente]} → Datos completos del cliente/lead\n- servicios_empresa: {[servicios_empresa]} → Servicios o productos que ofrece tu empresa\n- contexto_mercado: {[contexto_mercado]} → Contexto de mercado y competencia\n- priorizacion: {priorizacion} → (opcional; default: impacto_esfuerzo) Criterio de priorización\n- horizonte_temporal: {horizonte_temporal} → (opcional; default: corto_plazo) Horizonte temporal\n- valor_minimo: {valor_minimo} → (opcional) Valor mínimo de oportunidad\n\n# Checklist\n\n- [ ] Analizar datos del cliente y necesidades identificadas\n- [ ] Mapear servicios de la empresa con necesidades del cliente\n- [ ] Identificar oportunidades de negocio específicas\n- [ ] Evaluar valor y viabilidad de cada oportunidad\n- [ ] Priorizar oportunidades según criterios establecidos\n- [ ] Generar justificación para cada oportunidad priorizada\n- [ ] Crear plan de acción para oportunidades top\n\n# Preguntas Clave\n\n- ¿Qué necesidades del cliente pueden ser satisfechas con nuestros servicios?\n- ¿Cuáles son las oportunidades de mayor valor?\n- ¿Qué oportunidades tienen mayor probabilidad de cierre?\n- ¿Cómo priorizar las oportunidades identificadas?\n\n# Plan\n\n1. **Análisis de Alineación**: Mapear necesidades del cliente con servicios de la empresa\n2. **Identificación de Oportunidades**: Generar lista de oportunidades específicas\n3. **Evaluación y Priorización**: Evaluar y priorizar oportunidades según criterios\n4. **Justificación**: Crear justificación para oportunidades priorizadas\n5. **Plan de Acción**: Generar plan de acción para oportunidades top\n\n# Entregable Esperado\n\n**Reporte Ejecutivo de Oportunidades de Negocio** con:\n- Lista priorizada de oportunidades de negocio\n- Justificación de cada oportunidad (valor, viabilidad, probabilidad)\n- Alineación entre necesidades del cliente y servicios de la empresa\n- Estimación de valor por oportunidad\n- Probabilidad de cierre estimada\n- Plan de acción para oportunidades top\n- Recomendaciones estratégicas para maximizar valor\n\nReporte ejecutivo: claro, directo, valor accionable. Calidad Google/Big Four/Stanford.",
    "paramCount": 5,
    "keywords": [
      "Propuestas",
      "Identificación",
      "Oportunidades",
      "Negocio"
    ],
    "explicacion": "Identificar y priorizar oportunidades de negocio específicas basadas en la investigación del cliente, alineando necesidades del cliente con servicios de tu empresa para maximizar el valor de la relación comercial.",
    "cuando_usar": "Úsalo después del perfilamiento para identificar qué productos o servicios específicos ofrecer y en qué orden de prioridad. Ideal para cuentas con múltiples oportunidades potenciales."
  },
  {
    "id": "generacion_propuesta_comercial_personalizada",
    "label_title": "Generación Propuesta Comercial Personalizada",
    "category": "propuestas",
    "content": "===parametros\n\n- cliente: {[cliente]} → Nombre o razón social del cliente\n- servicios: {[servicios]} → Servicios o productos a incluir en la propuesta\n- presupuesto: {[presupuesto]} → Presupuesto estimado o rango\n- plazo: {[plazo]} → Plazo de ejecución o entrega\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente (output de investigación)\n\n{formato_propuesta} → (opcional; default: ejecutivo) Formato de propuesta (ejecutivo|detallado|tecnico)\n{objetivo_propuesta} → (opcional) Objetivo específico de la propuesta\n{valor_propuesto} → (opcional) Valor total propuesto\n\n===prompt\n\n# Objetivo\n\nGenerar una propuesta comercial completa y personalizada para el cliente, integrando toda la información de investigación para crear un documento que maximice las probabilidades de aceptación y cierre.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Propuestas Comerciales Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es crear propuestas comerciales que generan valor y cierran negocios.\n\n# Parámetros\n\n- cliente: {[cliente]} → Nombre o razón social del cliente\n- servicios: {[servicios]} → Servicios o productos a incluir en la propuesta\n- presupuesto: {[presupuesto]} → Presupuesto estimado o rango\n- plazo: {[plazo]} → Plazo de ejecución o entrega\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente\n- formato_propuesta: {formato_propuesta} → (opcional; default: ejecutivo) Formato de propuesta\n- objetivo_propuesta: {objetivo_propuesta} → (opcional) Objetivo específico\n- valor_propuesto: {valor_propuesto} → (opcional) Valor total propuesto\n\n# Checklist\n\n- [ ] Analizar perfil del cliente y necesidades identificadas\n- [ ] Estructurar propuesta según formato requerido\n- [ ] Personalizar contenido basado en investigación del cliente\n- [ ] Incluir argumentos de valor alineados con voz de marca del cliente\n- [ ] Desarrollar propuesta de valor clara y convincente\n- [ ] Incluir casos de éxito y evidencia relevante\n- [ ] Generar propuesta completa lista para entrega\n\n# Preguntas Clave\n\n- ¿Cómo estructurar la propuesta para maximizar impacto?\n- ¿Qué elementos de personalización son más efectivos?\n- ¿Cómo comunicar el valor de manera convincente?\n- ¿Qué evidencia y casos de éxito incluir?\n\n# Plan\n\n1. **Análisis de Contexto**: Revisar perfil del cliente y servicios a proponer\n2. **Diseño de Estructura**: Crear estructura de propuesta optimizada\n3. **Personalización**: Personalizar contenido basado en investigación\n4. **Desarrollo de Contenido**: Desarrollar contenido completo y convincente\n5. **Validación**: Revisar y optimizar propuesta antes de entrega\n\n# Entregable Esperado\n\n**Propuesta Comercial Personalizada Completa** con:\n- Resumen ejecutivo personalizado\n- Propuesta de valor alineada con necesidades del cliente\n- Descripción detallada de servicios o productos\n- Beneficios específicos para el cliente\n- Casos de éxito y evidencia relevante\n- Inversión y términos comerciales\n- Plan de implementación o ejecución\n- Próximos pasos y llamados a la acción\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 6,
    "keywords": [
      "Propuestas",
      "Generación",
      "Propuesta",
      "Comercial"
    ],
    "explicacion": "Generar una propuesta comercial completa y personalizada para el cliente, integrando toda la información de investigación para crear un documento que maximice las probabilidades de aceptación y cierre.",
    "cuando_usar": "Úsalo cuando estés listo para crear la propuesta formal después de completar discovery y tener claridad sobre necesidades y presupuesto del cliente. El prompt genera la estructura completa lista para refinamiento."
  },
  {
    "id": "estructura_propuesta_alto_impacto",
    "label_title": "Estructura Propuesta Alto Impacto",
    "category": "propuestas",
    "content": "===parametros\n\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta (high_ticket|estandar|enterprise)\n- valor_propuesto: {[valor_propuesto]} → Valor total de la propuesta\n- audiencia: {[audiencia]} → Audiencia objetivo (C-level|gerencia|operativo)\n- objetivo: {[objetivo]} → Objetivo principal de la propuesta\n\n{complejidad} → (opcional; default: media) Complejidad de la propuesta (baja|media|alta)\n{tiempo_lectura} → (opcional; default: 15_min) Tiempo estimado de lectura\n{formato_entrega} → (opcional; default: presentacion) Formato de entrega (presentacion|documento|hibrido)\n\n===prompt\n\n# Objetivo\n\nCrear la estructura óptima para una propuesta comercial de alto impacto, diseñada específicamente para propuestas high ticket que requieren persuasión estratégica y presentación ejecutiva de nivel superior.\n\n# Arquetipo Experto\n\nActúa como un **Diseñador de Propuestas Estratégicas Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es diseñar estructuras de propuestas que maximizan la persuasión y el cierre.\n\n# Parámetros\n\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta (high_ticket|estandar|enterprise)\n- valor_propuesto: {[valor_propuesto]} → Valor total de la propuesta\n- audiencia: {[audiencia]} → Audiencia objetivo (C-level|gerencia|operativo)\n- objetivo: {[objetivo]} → Objetivo principal de la propuesta\n- complejidad: {complejidad} → (opcional; default: media) Complejidad de la propuesta\n- tiempo_lectura: {tiempo_lectura} → (opcional; default: 15_min) Tiempo estimado de lectura\n- formato_entrega: {formato_entrega} → (opcional; default: presentacion) Formato de entrega\n\n# Checklist\n\n- [ ] Analizar tipo de propuesta y audiencia objetivo\n- [ ] Diseñar estructura optimizada para alto impacto\n- [ ] Definir flujo narrativo persuasivo\n- [ ] Establecer secciones clave y su propósito\n- [ ] Crear guía de contenido para cada sección\n- [ ] Optimizar para formato de entrega especificado\n- [ ] Generar estructura completa lista para desarrollo\n\n# Preguntas Clave\n\n- ¿Qué estructura maximiza el impacto para esta audiencia?\n- ¿Cómo crear un flujo narrativo persuasivo?\n- ¿Qué secciones son críticas para propuestas high ticket?\n- ¿Cómo optimizar para el formato de entrega?\n\n# Plan\n\n1. **Análisis de Contexto**: Revisar tipo de propuesta, valor y audiencia\n2. **Diseño de Estructura**: Crear estructura optimizada para alto impacto\n3. **Flujo Narrativo**: Definir flujo narrativo persuasivo\n4. **Optimización**: Optimizar estructura para formato de entrega\n5. **Guía de Desarrollo**: Crear guía de contenido para cada sección\n\n# Entregable Esperado\n\n**Estructura de Propuesta de Alto Impacto** con:\n- Estructura completa optimizada para alto impacto\n- Flujo narrativo persuasivo definido\n- Secciones clave con propósito y guía de contenido\n- Recomendaciones de formato y diseño visual\n- Tiempo estimado por sección\n- Estrategia de persuasión por sección\n- Checklist de completitud\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 6,
    "keywords": [
      "Propuestas",
      "Estructura",
      "Propuesta",
      "Impacto"
    ],
    "explicacion": "Crear la estructura óptima para una propuesta comercial de alto impacto, diseñada específicamente para propuestas high ticket que requieren persuasión estratégica y presentación ejecutiva de nivel superior.",
    "cuando_usar": "Úsalo antes de escribir propuestas de alto valor ($100M+ COP) donde la estructura y el flujo narrativo son críticos para la decisión. Define primero la estructura, luego llena el contenido."
  },
  {
    "id": "personalizacion_propuesta_ia",
    "label_title": "Personalización Propuesta IA",
    "category": "propuestas",
    "content": "===parametros\n\n- propuesta_base: {[propuesta_base]} → Propuesta base o template a personalizar\n- datos_cliente: {[datos_cliente]} → Datos completos de investigación del cliente\n- preferencias_cliente: {[preferencias_cliente]} → Preferencias y estilo de comunicación del cliente\n\n{nivel_personalizacion} → (opcional; default: alto) Nivel de personalización (bajo|medio|alto|maximo)\n{elementos_personalizar} → (opcional; default: todos) Elementos a personalizar (contenido|diseno|ambos)\n{alineacion_marca} → (opcional; default: si) Alinear con voz de marca del cliente\n\n===prompt\n\n# Objetivo\n\nPersonalizar una propuesta comercial base usando inteligencia artificial y los insights de investigación del cliente, creando una propuesta altamente personalizada que resuene con el cliente y maximice las probabilidades de aceptación.\n\n# Arquetipo Experto\n\nActúa como un **Especialista en Personalización Comercial con IA** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es usar IA para crear propuestas altamente personalizadas que generan conexión emocional.\n\n# Parámetros\n\n- propuesta_base: {[propuesta_base]} → Propuesta base o template a personalizar\n- datos_cliente: {[datos_cliente]} → Datos completos de investigación del cliente\n- preferencias_cliente: {[preferencias_cliente]} → Preferencias y estilo de comunicación\n- nivel_personalizacion: {nivel_personalizacion} → (opcional; default: alto) Nivel de personalización\n- elementos_personalizar: {elementos_personalizar} → (opcional; default: todos) Elementos a personalizar\n- alineacion_marca: {alineacion_marca} → (opcional; default: si) Alinear con voz de marca\n\n# Checklist\n\n- [ ] Analizar propuesta base y datos del cliente\n- [ ] Identificar elementos de personalización prioritarios\n- [ ] Personalizar contenido basado en investigación\n- [ ] Alinear tono y estilo con voz de marca del cliente\n- [ ] Incorporar insights específicos del cliente\n- [ ] Optimizar argumentos de valor para el cliente\n- [ ] Generar propuesta personalizada completa\n\n# Preguntas Clave\n\n- ¿Qué elementos de personalización generan mayor impacto?\n- ¿Cómo alinear la propuesta con la voz de marca del cliente?\n- ¿Qué insights específicos deben incorporarse?\n- ¿Cómo optimizar argumentos de valor para este cliente?\n\n# Plan\n\n1. **Análisis de Personalización**: Analizar propuesta base y datos del cliente\n2. **Identificación de Elementos**: Identificar elementos de personalización prioritarios\n3. **Personalización de Contenido**: Personalizar contenido basado en investigación\n4. **Alineación de Marca**: Alinear tono y estilo con voz de marca\n5. **Optimización**: Optimizar propuesta personalizada para máximo impacto\n\n# Entregable Esperado\n\n**Propuesta Comercial Personalizada con IA** con:\n- Propuesta base transformada con personalización profunda\n- Contenido alineado con voz de marca del cliente\n- Insights específicos del cliente incorporados\n- Argumentos de valor optimizados para el cliente\n- Tono y estilo personalizados\n- Elementos visuales y de diseño personalizados (si aplica)\n- Resumen de personalizaciones aplicadas\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Propuestas",
      "Personalización",
      "Propuesta"
    ],
    "explicacion": "Personalizar una propuesta comercial base usando IA y los insights de investigación del cliente, creando una propuesta altamente personalizada que resuene con el cliente y maximice las probabilidades de aceptación.",
    "cuando_usar": "Úsalo cuando tienes un template de propuesta y necesitas personalizarlo profundamente para un cliente específico. Transforma propuestas genéricas en documentos que hablan directamente al cliente."
  },
  {
    "id": "validacion_ajustes_propuesta",
    "label_title": "Validación Ajustes Propuesta",
    "category": "propuestas",
    "content": "===parametros\n\n- propuesta: {[propuesta]} → Propuesta comercial a validar\n- criterios_calidad: {[criterios_calidad]} → Criterios de calidad a evaluar\n- mejoras_sugeridas: {[mejoras_sugeridas]} → (opcional) Mejoras específicas sugeridas\n\n{nivel_revision} → (opcional; default: completo) Nivel de revisión (basico|medio|completo|exhaustivo)\n{enfoque_validacion} → (opcional; default: persuasion) Enfoque de validación (persuasion|tecnico|ambos)\n{optimizacion_cierre} → (opcional; default: si) Optimizar para maximizar cierre\n\n===prompt\n\n# Objetivo\n\nValidar y optimizar una propuesta comercial antes de su entrega, asegurando que cumple con los más altos estándares de calidad, persuasión y efectividad para maximizar las probabilidades de aceptación y cierre.\n\n# Arquetipo Experto\n\nActúa como un **Auditor de Propuestas Comerciales Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es identificar oportunidades de mejora que incrementan significativamente las probabilidades de cierre.\n\n# Parámetros\n\n- propuesta: {[propuesta]} → Propuesta comercial a validar\n- criterios_calidad: {[criterios_calidad]} → Criterios de calidad a evaluar\n- mejoras_sugeridas: {mejoras_sugeridas} → (opcional) Mejoras específicas sugeridas\n- nivel_revision: {nivel_revision} → (opcional; default: completo) Nivel de revisión\n- enfoque_validacion: {enfoque_validacion} → (opcional; default: persuasion) Enfoque de validación\n- optimizacion_cierre: {optimizacion_cierre} → (opcional; default: si) Optimizar para maximizar cierre\n\n# Checklist\n\n- [ ] Revisar estructura y organización de la propuesta\n- [ ] Evaluar claridad y persuasión del mensaje\n- [ ] Validar argumentos de valor y evidencia\n- [ ] Verificar personalización y relevancia para el cliente\n- [ ] Identificar oportunidades de mejora\n- [ ] Aplicar mejoras sugeridas\n- [ ] Generar propuesta validada y optimizada\n\n# Preguntas Clave\n\n- ¿La propuesta es clara y persuasiva?\n- ¿Los argumentos de valor son convincentes?\n- ¿La propuesta está bien personalizada para el cliente?\n- ¿Qué mejoras incrementarían las probabilidades de cierre?\n\n# Plan\n\n1. **Revisión Completa**: Revisar propuesta según criterios de calidad\n2. **Identificación de Mejoras**: Identificar oportunidades de mejora\n3. **Aplicación de Mejoras**: Aplicar mejoras sugeridas\n4. **Validación Final**: Validar propuesta mejorada\n5. **Reporte de Optimización**: Generar reporte de mejoras aplicadas\n\n# Entregable Esperado\n\n**Propuesta Comercial Validada y Optimizada** con:\n- Propuesta mejorada con todas las optimizaciones aplicadas\n- Reporte de validación con evaluación por criterio\n- Mejoras aplicadas y justificación\n- Recomendaciones adicionales para futuras propuestas\n- Checklist de calidad completado\n- Nivel de preparación para entrega (alto|medio|bajo)\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.\n\n> Contexto crítico: Ten en cuenta mejoras sugeridas ({[mejoras_sugeridas]}).\n",
    "paramCount": 5,
    "keywords": [
      "Propuestas",
      "Validación",
      "Ajustes",
      "Propuesta"
    ],
    "explicacion": "Validar y optimizar una propuesta comercial antes de su entrega, asegurando que cumple con los más altos estándares de calidad, persuasión y efectividad para maximizar probabilidades de aceptación.",
    "cuando_usar": "Úsalo como paso final antes de enviar cualquier propuesta importante. El prompt actúa como auditor que identifica mejoras que incrementan probabilidades de cierre."
  },
  {
    "id": "defensa_precio_deep_research",
    "label_title": "Defensa Precio Deep Research",
    "category": "defensa",
    "content": "===parametros\n\n- precio: {[precio]} → Precio o inversión propuesta\n- valor_propuesto: {[valor_propuesto]} → Valor total propuesto al cliente\n- competencia: {[competencia]} → Información de competencia y precios de mercado\n- datos_cliente: {[datos_cliente]} → Datos de investigación del cliente\n\n{contexto_negociacion} → (opcional) Contexto específico de la negociación\n{objeciones_esperadas} → (opcional) Objeciones de precio esperadas\n{benchmark_mercado} → (opcional; default: si) Incluir benchmark de mercado\n\n===prompt\n\n# Objetivo\n\nPreparar una defensa sólida y convincente del precio propuesto, basada en investigación profunda que demuestra el valor y justifica la inversión desde múltiples perspectivas estratégicas y financieras.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Pricing y Negociación Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es construir argumentos de defensa de precio que cierran negocios de alto valor.\n\n# Parámetros\n\n- precio: {[precio]} → Precio o inversión propuesta\n- valor_propuesto: {[valor_propuesto]} → Valor total propuesto al cliente\n- competencia: {[competencia]} → Información de competencia y precios\n- datos_cliente: {[datos_cliente]} → Datos de investigación del cliente\n- contexto_negociacion: {contexto_negociacion} → (opcional) Contexto específico\n- objeciones_esperadas: {objeciones_esperadas} → (opcional) Objeciones esperadas\n- benchmark_mercado: {benchmark_mercado} → (opcional; default: si) Incluir benchmark\n\n# Checklist\n\n- [ ] Analizar precio propuesto y valor entregado\n- [ ] Investigar precios de mercado y competencia\n- [ ] Calcular ROI y valor para el cliente\n- [ ] Desarrollar argumentos de defensa multi-dimensional\n- [ ] Preparar respuestas a objeciones comunes de precio\n- [ ] Crear sustentación técnica y financiera\n- [ ] Generar guía de defensa de precio completa\n\n# Preguntas Clave\n\n- ¿Cómo justificar el precio desde perspectiva de valor?\n- ¿Qué argumentos financieros son más convincentes?\n- ¿Cómo posicionar el precio frente a la competencia?\n- ¿Qué respuestas a objeciones son más efectivas?\n\n# Plan\n\n1. **Análisis de Pricing**: Analizar precio propuesto y valor entregado\n2. **Investigación de Mercado**: Investigar precios de mercado y competencia\n3. **Desarrollo de Argumentos**: Desarrollar argumentos de defensa multi-dimensional\n4. **Preparación de Respuestas**: Preparar respuestas a objeciones\n5. **Sustentación Técnica**: Crear sustentación técnica y financiera\n\n# Entregable Esperado\n\n**Guía de Defensa de Precio con Deep Research** con:\n- Análisis de valor vs. precio propuesto\n- Benchmark de mercado y competencia\n- Cálculo de ROI y valor para el cliente\n- Argumentos de defensa multi-dimensional (valor, ROI, competitividad, calidad)\n- Respuestas a objeciones comunes de precio\n- Sustentación técnica y financiera\n- Estrategia de negociación recomendada\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 6,
    "keywords": [
      "Defensa",
      "Defensa",
      "Precio",
      "Research"
    ],
    "explicacion": "Preparar una defensa sólida y convincente del precio propuesto, basada en investigación profunda que demuestra el valor y justifica la inversión desde múltiples perspectivas estratégicas y financieras.",
    "cuando_usar": "Úsalo cuando anticipas objeciones de precio o cuando el cliente ha indicado que el precio es una barrera. Prepara argumentos antes de la reunión de negociación."
  },
  {
    "id": "estrategias_high_ticket",
    "label_title": "Estrategias High Ticket",
    "category": "propuestas",
    "content": "===parametros\n\n- valor_propuesto: {[valor_propuesto]} → Valor total de la propuesta high ticket\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente (C-level, empresa, industria)\n- tipo_servicio: {[tipo_servicio]} → Tipo de servicio o solución propuesta\n- contexto: {[contexto]} → Contexto del negocio y relación\n\n{enfoque_venta} → (opcional; default: consultivo) Enfoque de venta (consultivo|relacional|estrategico)\n{complejidad_solucion} → (opcional; default: alta) Complejidad de la solución\n{tiempo_decision} → (opcional) Tiempo estimado de decisión del cliente\n\n===prompt\n\n# Objetivo\n\nDesarrollar estrategias específicas para propuestas comerciales de alto valor (high ticket), diseñando un enfoque de ventas que maximiza las probabilidades de cierre en transacciones de alto valor.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Ventas Enterprise Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es diseñar estrategias de venta para propuestas de alto valor que requieren decisiones complejas.\n\n# Parámetros\n\n- valor_propuesto: {[valor_propuesto]} → Valor total de la propuesta high ticket\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente\n- tipo_servicio: {[tipo_servicio]} → Tipo de servicio o solución\n- contexto: {[contexto]} → Contexto del negocio\n- enfoque_venta: {enfoque_venta} → (opcional; default: consultivo) Enfoque de venta\n- complejidad_solucion: {complejidad_solucion} → (opcional; default: alta) Complejidad\n- tiempo_decision: {tiempo_decision} → (opcional) Tiempo estimado de decisión\n\n# Checklist\n\n- [ ] Analizar perfil del cliente y contexto del negocio\n- [ ] Diseñar estrategia de acercamiento para high ticket\n- [ ] Desarrollar tácticas de construcción de confianza\n- [ ] Crear estrategia de demostración de valor\n- [ ] Definir proceso de decisión y stakeholders\n- [ ] Preparar estrategia de cierre para high ticket\n- [ ] Generar guía completa de estrategias high ticket\n\n# Preguntas Clave\n\n- ¿Cómo construir confianza para propuestas de alto valor?\n- ¿Qué tácticas son más efectivas para high ticket?\n- ¿Cómo manejar el proceso de decisión complejo?\n- ¿Qué estrategias de cierre funcionan mejor?\n\n# Plan\n\n1. **Análisis de Contexto**: Analizar perfil del cliente y contexto\n2. **Diseño de Estrategia**: Diseñar estrategia de acercamiento high ticket\n3. **Desarrollo de Tácticas**: Desarrollar tácticas específicas\n4. **Proceso de Decisión**: Definir estrategia para proceso de decisión\n5. **Estrategia de Cierre**: Preparar estrategia de cierre\n\n# Entregable Esperado\n\n**Estrategia High Ticket Completa** con:\n- Análisis del contexto high ticket\n- Estrategia de acercamiento personalizada\n- Tácticas de construcción de confianza\n- Estrategia de demostración de valor\n- Manejo del proceso de decisión y stakeholders\n- Estrategia de cierre para high ticket\n- Plan de seguimiento y nurturing\n- Métricas de éxito y KPIs\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 6,
    "keywords": [
      "Propuestas",
      "Estrategias",
      "Ticket"
    ],
    "explicacion": "Desarrollar estrategias específicas para propuestas comerciales de alto valor, diseñando un enfoque de ventas que maximiza las probabilidades de cierre en transacciones que requieren decisiones complejas.",
    "cuando_usar": "Úsalo cuando trabajas en oportunidades de $200M+ COP donde el proceso de venta es complejo, involucra múltiples stakeholders y requiere construcción de confianza a largo plazo."
  },
  {
    "id": "sustentacion_tecnica_deep_research",
    "label_title": "Sustentación Técnica Deep Research",
    "category": "defensa",
    "content": "===parametros\n\n- propuesta: {[propuesta]} → Propuesta comercial a sustentar\n- datos_cliente: {[datos_cliente]} → Datos de investigación del cliente\n- casos_estudio: {[casos_estudio]} → Casos de estudio relevantes\n- evidencia: {[evidencia]} → Evidencia técnica y de resultados\n\n{profundidad_tecnica} → (opcional; default: alta) Profundidad técnica requerida\n{audiencia_tecnica} → (opcional; default: mixta) Audiencia técnica (tecnica|ejecutiva|mixta)\n{validacion_externa} → (opcional; default: si) Incluir validación externa\n\n===prompt\n\n# Objetivo\n\nCrear una sustentación técnica robusta y convincente basada en investigación profunda, que demuestra la viabilidad, efectividad y valor de la propuesta comercial desde perspectiva técnica y estratégica.\n\n# Arquetipo Experto\n\nActúa como un **Consultor Técnico Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es crear sustentaciones técnicas que generan confianza y cierran negocios complejos.\n\n# Parámetros\n\n- propuesta: {[propuesta]} → Propuesta comercial a sustentar\n- datos_cliente: {[datos_cliente]} → Datos de investigación del cliente\n- casos_estudio: {[casos_estudio]} → Casos de estudio relevantes\n- evidencia: {[evidencia]} → Evidencia técnica y de resultados\n- profundidad_tecnica: {profundidad_tecnica} → (opcional; default: alta) Profundidad técnica\n- audiencia_tecnica: {audiencia_tecnica} → (opcional; default: mixta) Audiencia técnica\n- validacion_externa: {validacion_externa} → (opcional; default: si) Incluir validación externa\n\n# Checklist\n\n- [ ] Analizar propuesta y requerimientos técnicos\n- [ ] Investigar evidencia técnica y casos de estudio\n- [ ] Desarrollar sustentación técnica robusta\n- [ ] Incluir validación externa y referencias\n- [ ] Crear documentación técnica de apoyo\n- [ ] Preparar respuestas a preguntas técnicas\n- [ ] Generar documento de sustentación técnica completo\n\n# Preguntas Clave\n\n- ¿Cómo demostrar viabilidad técnica de la propuesta?\n- ¿Qué evidencia técnica es más convincente?\n- ¿Cómo validar la propuesta con casos de estudio?\n- ¿Qué documentación técnica de apoyo es necesaria?\n\n# Plan\n\n1. **Análisis Técnico**: Analizar propuesta y requerimientos técnicos\n2. **Investigación de Evidencia**: Investigar evidencia técnica y casos\n3. **Desarrollo de Sustentación**: Desarrollar sustentación técnica robusta\n4. **Validación Externa**: Incluir validación externa y referencias\n5. **Documentación**: Crear documentación técnica de apoyo\n\n# Entregable Esperado\n\n**Documento de Sustentación Técnica con Deep Research** con:\n- Análisis técnico de la propuesta\n- Evidencia técnica y de resultados\n- Casos de estudio relevantes y comparables\n- Validación externa y referencias\n- Documentación técnica de apoyo\n- Respuestas a preguntas técnicas comunes\n- Métricas y KPIs de éxito\n- Garantías y mitigación de riesgos\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 6,
    "keywords": [
      "Defensa",
      "Sustentación",
      "Técnica",
      "Research"
    ],
    "explicacion": "Crear una sustentación técnica robusta y convincente basada en investigación profunda, que demuestra la viabilidad, efectividad y valor de la propuesta desde perspectiva técnica y estratégica.",
    "cuando_usar": "Úsalo cuando el comité de evaluación incluye roles técnicos (CTO, IT, Arquitecto) que necesitan validar la viabilidad técnica antes de aprobar. Prepara respuestas a preguntas técnicas detalladas."
  },
  {
    "id": "preparacion_defensa_comercial_acelerada",
    "label_title": "Preparación Defensa Comercial Acelerada",
    "category": "defensa",
    "content": "===parametros\n\n- propuesta: {[propuesta]} → Propuesta comercial a defender\n- objeciones_esperadas: {[objeciones_esperadas]} → Objeciones esperadas del cliente\n\n{contexto_negociacion} → (opcional) Contexto específico de la negociación\n{nivel_defensa} → (opcional; default: completo) Nivel de defensa requerido (basico|medio|completo)\n{enfoque_rapido} → (opcional; default: si) Enfoque en preparación rápida y efectiva\n\n===prompt\n\n# Objetivo\n\nPreparar una defensa comercial completa y efectiva de forma exhaustiva, asegurando que estás listo para defender la propuesta y manejar objeciones de manera convincente y profesional.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Negociación Comercial Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es preparar defensas comerciales efectivas de forma exhaustiva.\n\n# Parámetros\n\n- propuesta: {[propuesta]} → Propuesta comercial a defender\n- objeciones_esperadas: {[objeciones_esperadas]} → Objeciones esperadas\n- contexto_negociacion: {contexto_negociacion} → (opcional) Contexto específico\n- nivel_defensa: {nivel_defensa} → (opcional; default: completo) Nivel de defensa\n- enfoque_rapido: {enfoque_rapido} → (opcional; default: si) Enfoque rápido\n\n# Checklist\n\n- [ ] Analizar propuesta y objeciones esperadas\n- [ ] Identificar argumentos clave de defensa\n- [ ] Preparar respuestas a objeciones prioritarias\n- [ ] Desarrollar estrategia de comunicación\n- [ ] Crear guía rápida de referencia\n- [ ] Preparar materiales de apoyo\n- [ ] Generar guía completa de defensa comercial\n\n# Preguntas Clave\n\n- ¿Cuáles son los argumentos de defensa más importantes?\n- ¿Cómo responder a las objeciones más comunes?\n- ¿Qué estrategia de comunicación es más efectiva?\n- ¿Cómo prepararse rápidamente pero efectivamente?\n\n# Plan\n\n1. **Análisis Rápido**: Analizar propuesta y objeciones de forma exhaustiva\n2. **Identificación de Argumentos**: Identificar argumentos clave de defensa\n3. **Preparación de Respuestas**: Preparar respuestas a objeciones\n4. **Estrategia de Comunicación**: Desarrollar estrategia de comunicación\n5. **Guía de Referencia**: Crear guía rápida de referencia\n\n# Entregable Esperado\n\n**Guía de Defensa Comercial Acelerada** con:\n- Argumentos clave de defensa priorizados\n- Respuestas a objeciones esperadas\n- Estrategia de comunicación recomendada\n- Guía rápida de referencia para negociación\n- Materiales de apoyo sugeridos\n- Checklist de preparación\n- Tácticas de cierre recomendadas\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Defensa",
      "Preparación",
      "Defensa",
      "Comercial"
    ],
    "explicacion": "Preparar una defensa comercial completa y efectiva de forma exhaustiva, asegurando que estás listo para defender la propuesta y manejar objeciones de manera convincente y profesional.",
    "cuando_usar": "Úsalo cuando tienes poco tiempo antes de una reunión de defensa o negociación. Genera rápidamente los argumentos clave y respuestas a objeciones esperadas."
  },
  {
    "id": "gestion_objeciones_comunes",
    "label_title": "Gestión Objeciones Comunes",
    "category": "defensa",
    "content": "===parametros\n\n- industria: {[industria]} → Industria del cliente\n- tipo_objeciones: {[tipo_objeciones]} → Tipo de objeciones (precio|tiempo|confianza|tecnico|otros)\n- contexto_cliente: {[contexto_cliente]} → Contexto específico del cliente\n\n{categorias_objeciones} → (opcional; default: todas) Categorías de objeciones a cubrir\n{profundidad_respuestas} → (opcional; default: alta) Profundidad de respuestas\n{formato_respuestas} → (opcional; default: estructurado) Formato de respuestas\n\n===prompt\n\n# Objetivo\n\nGenerar un banco completo de respuestas efectivas a objeciones comunes por industria, proporcionando al equipo de ventas herramientas listas para usar que incrementan las probabilidades de cierre.\n\n# Arquetipo Experto\n\nActúa como un **Especialista en Gestión de Objeciones Comerciales Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es (R)Evolucionar objeciones en oportunidades de cierre.\n\n# Parámetros\n\n- industria: {[industria]} → Industria del cliente\n- tipo_objeciones: {[tipo_objeciones]} → Tipo de objeciones\n- contexto_cliente: {[contexto_cliente]} → Contexto específico del cliente\n- categorias_objeciones: {categorias_objeciones} → (opcional; default: todas) Categorías\n- profundidad_respuestas: {profundidad_respuestas} → (opcional; default: alta) Profundidad\n- formato_respuestas: {formato_respuestas} → (opcional; default: estructurado) Formato\n\n# Checklist\n\n- [ ] Identificar objeciones comunes por industria\n- [ ] Desarrollar respuestas efectivas a cada objeción\n- [ ] Incluir técnicas de manejo de objeciones\n- [ ] Crear scripts de respuesta personalizables\n- [ ] Agregar ejemplos y casos de uso\n- [ ] Organizar por categoría y prioridad\n- [ ] Generar banco de respuestas completo\n\n# Preguntas Clave\n\n- ¿Cuáles son las objeciones más comunes en esta industria?\n- ¿Qué respuestas son más efectivas para cada objeción?\n- ¿Cómo (R)Evolucionar objeciones en oportunidades?\n- ¿Qué técnicas de manejo de objeciones aplicar?\n\n# Plan\n\n1. **Identificación**: Identificar objeciones comunes por industria\n2. **Desarrollo de Respuestas**: Desarrollar respuestas efectivas\n3. **Técnicas de Manejo**: Incluir técnicas de manejo de objeciones\n4. **Personalización**: Crear scripts personalizables\n5. **Organización**: Organizar banco de respuestas\n\n# Entregable Esperado\n\n**Banco de Respuestas a Objeciones Comunes** con:\n- Lista de objeciones comunes por industria\n- Respuestas efectivas a cada objeción\n- Técnicas de manejo de objeciones\n- Scripts de respuesta personalizables\n- Ejemplos y casos de uso\n- Estrategias de transformación de objeciones\n- Guía de uso del banco de respuestas\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Defensa",
      "Gestión",
      "Objeciones",
      "Comunes"
    ],
    "explicacion": "Generar un banco completo de respuestas efectivas a objeciones comunes por industria, proporcionando herramientas listas para usar que incrementan las probabilidades de cierre.",
    "cuando_usar": "Úsalo para capacitar al equipo de ventas o prepararte para un vertical específico. Crea un banco de respuestas que se puede usar repetidamente en múltiples deals."
  },
  {
    "id": "simulacion_objeciones_ia",
    "label_title": "Simulación Objeciones IA",
    "category": "defensa",
    "content": "===parametros\n\n- tipo_simulacion: {[tipo_simulacion]} → Tipo de simulación (precio|tecnico|confianza|completo)\n- nivel_dificultad: {[nivel_dificultad]} → Nivel de dificultad (facil|medio|duro|extremo)\n- contexto: {[contexto]} → Contexto específico de la simulación\n\n{perfil_cliente} → (opcional) Perfil del cliente a simular\n{objeciones_especificas} → (opcional) Objeciones específicas a practicar\n{feedback_detallado} → (opcional; default: si) Incluir feedback detallado\n\n===prompt\n\n# Objetivo\n\nSimular escenarios realistas de objeciones comerciales usando inteligencia artificial, proporcionando un entorno de práctica seguro donde el usuario puede desarrollar habilidades de manejo de objeciones con feedback inmediato y detallado.\n\n# Arquetipo Experto\n\nActúa como un **Simulador de Negociaciones Comerciales con IA** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es crear simulaciones realistas que mejoran habilidades de ventas.\n\n# Parámetros\n\n- tipo_simulacion: {[tipo_simulacion]} → Tipo de simulación\n- nivel_dificultad: {[nivel_dificultad]} → Nivel de dificultad\n- contexto: {[contexto]} → Contexto específico\n- perfil_cliente: {perfil_cliente} → (opcional) Perfil del cliente\n- objeciones_especificas: {objeciones_especificas} → (opcional) Objeciones específicas\n- feedback_detallado: {feedback_detallado} → (opcional; default: si) Feedback detallado\n\n# Checklist\n\n- [ ] Configurar simulación según tipo y nivel de dificultad\n- [ ] Crear escenario realista de objeción\n- [ ] Simular interacción con cliente\n- [ ] Evaluar respuestas del usuario\n- [ ] Proporcionar feedback detallado\n- [ ] Sugerir mejoras y alternativas\n- [ ] Generar reporte de simulación completo\n\n# Preguntas Clave\n\n- ¿Cómo crear un escenario de simulación realista?\n- ¿Qué feedback es más útil para mejorar?\n- ¿Cómo evaluar la efectividad de las respuestas?\n- ¿Qué mejoras sugerir para incrementar efectividad?\n\n# Plan\n\n1. **Configuración**: Configurar simulación según parámetros\n2. **Creación de Escenario**: Crear escenario realista de objeción\n3. **Simulación**: Simular interacción con cliente\n4. **Evaluación**: Evaluar respuestas del usuario\n5. **Feedback**: Proporcionar feedback detallado y mejoras\n\n# Entregable Esperado\n\n**Simulación Interactiva de Objeciones con IA** con:\n- Escenario de simulación configurado\n- Interacción simulada con cliente\n- Evaluación de respuestas del usuario\n- Feedback detallado por respuesta\n- Sugerencias de mejora y alternativas\n- Reporte de simulación con métricas\n- Recomendaciones para desarrollo de habilidades\n\nLa simulación debe ser realista, interactiva y proporcionar feedback valioso, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Defensa",
      "Simulación",
      "Objeciones"
    ],
    "explicacion": "Simular escenarios realistas de objeciones comerciales usando IA, proporcionando un entorno de práctica seguro donde puedes desarrollar habilidades de manejo de objeciones con feedback inmediato.",
    "cuando_usar": "Úsalo para training del equipo de ventas o para practicar antes de una reunión importante. La IA simula diferentes tipos de clientes y niveles de dificultad."
  },
  {
    "id": "estrategias_seguimiento_cierre",
    "label_title": "Estrategias Seguimiento Cierre",
    "category": "cierre",
    "content": "===parametros\n\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta entregada\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente\n- etapa_venta: {[etapa_venta]} → Etapa actual del proceso de ventas\n\n{canales_comunicacion} → (opcional; default: todos) Canales de comunicación a usar\n{objetivo_seguimiento} → (opcional) Objetivo específico del seguimiento\n\n===prompt\n\n# Objetivo\n\nDesarrollar estrategias efectivas de seguimiento post-propuesta y tácticas de cierre que mantienen el momentum de la venta y maximizan las probabilidades de cierre exitoso.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Cierre de Ventas Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es diseñar estrategias de seguimiento que cierran negocios.\n\n# Parámetros\n\n- tipo_propuesta: {[tipo_propuesta]} → Tipo de propuesta entregada\n- perfil_cliente: {[perfil_cliente]} → Perfil del cliente\n- etapa_venta: {[etapa_venta]} → Etapa actual del proceso\n- objetivo_seguimiento: {objetivo_seguimiento} → (opcional) Objetivo específico\n\n# Checklist\n\n- [ ] Analizar tipo de propuesta y perfil del cliente\n- [ ] Diseñar estrategia de seguimiento personalizada\n- [ ] Definir tácticas de cierre específicas\n- [ ] Crear calendario de seguimiento\n- [ ] Desarrollar mensajes de seguimiento\n- [ ] Preparar estrategia de manejo de silencio\n- [ ] Generar plan completo de seguimiento y cierre\n\n# Preguntas Clave\n\n- ¿Cuál es la frecuencia óptima de seguimiento?\n- ¿Qué tácticas de cierre son más efectivas?\n- ¿Cómo manejar el silencio del cliente?\n- ¿Qué mensajes de seguimiento generan más respuesta?\n\n# Plan\n\n1. **Análisis de Contexto**: Analizar propuesta y perfil del cliente\n2. **Diseño de Estrategia**: Diseñar estrategia de seguimiento personalizada\n3. **Tácticas de Cierre**: Definir tácticas de cierre específicas\n4. **Calendario**: Crear calendario de seguimiento\n5. **Mensajes**: Desarrollar mensajes de seguimiento\n\n# Entregable Esperado\n\n**Plan de Seguimiento y Cierre Completo** con:\n- Estrategia de seguimiento personalizada\n- Calendario de seguimiento recomendado\n- Tácticas de cierre específicas\n- Mensajes de seguimiento por etapa\n- Estrategia de manejo de silencio\n- Técnicas de motivación a la acción\n- Métricas de éxito y KPIs\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Cierre",
      "Estrategias",
      "Seguimiento",
      "Cierre"
    ],
    "explicacion": "Desarrollar estrategias efectivas de seguimiento post-propuesta y tácticas de cierre que mantienen el momentum de la venta y maximizan las probabilidades de cierre exitoso.",
    "cuando_usar": "Úsalo después de enviar una propuesta cuando necesitas un plan estructurado de seguimiento. Evita el ghosting y mantiene el deal activo hasta el cierre."
  },
  {
    "id": "banco_respuestas_personalizado_industria",
    "label_title": "Banco Respuestas Personalizado Industria",
    "category": "defensa",
    "content": "===parametros\n\n- industria: {[industria]} → Industria específica\n- tipo_servicios: {[tipo_servicios]} → Tipo de servicios o productos\n- objeciones_frecuentes: {[objeciones_frecuentes]} → Objeciones más frecuentes en la industria\n\n{cobertura_completa} → (opcional; default: si) Cobertura completa de objeciones\n{formato_banco} → (opcional; default: estructurado) Formato del banco (estructurado|script|hibrido)\n{actualizacion_continua} → (opcional; default: si) Incluir proceso de actualización continua\n\n===prompt\n\n# Objetivo\n\nCrear un banco completo y personalizado de respuestas a objeciones comunes específico para una industria, proporcionando al equipo de ventas un recurso completo y actualizable para manejar cualquier objeción de manera efectiva.\n\n# Arquetipo Experto\n\nActúa como un **Especialista en Desarrollo de Recursos de Ventas Senior** con experiencia en consultoría estratégica nivel McKinsey y Deloitte. Tu especialidad es crear bancos de conocimiento comercial que incrementan efectividad de ventas.\n\n# Parámetros\n\n- industria: {[industria]} → Industria específica\n- tipo_servicios: {[tipo_servicios]} → Tipo de servicios o productos\n- objeciones_frecuentes: {[objeciones_frecuentes]} → Objeciones más frecuentes\n- cobertura_completa: {cobertura_completa} → (opcional; default: si) Cobertura completa\n- formato_banco: {formato_banco} → (opcional; default: estructurado) Formato\n- actualizacion_continua: {actualizacion_continua} → (opcional; default: si) Actualización continua\n\n# Checklist\n\n- [ ] Identificar objeciones específicas de la industria\n- [ ] Desarrollar respuestas personalizadas por industria\n- [ ] Organizar banco por categorías y prioridad\n- [ ] Incluir ejemplos y casos de uso específicos\n- [ ] Crear sistema de búsqueda y referencia rápida\n- [ ] Desarrollar proceso de actualización continua\n- [ ] Generar banco completo y estructurado\n\n# Preguntas Clave\n\n- ¿Cuáles son las objeciones específicas de esta industria?\n- ¿Cómo personalizar respuestas para la industria?\n- ¿Qué formato facilita el uso del banco?\n- ¿Cómo mantener el banco actualizado?\n\n# Plan\n\n1. **Identificación**: Identificar objeciones específicas de la industria\n2. **Desarrollo**: Desarrollar respuestas personalizadas\n3. **Organización**: Organizar banco por categorías\n4. **Sistema de Referencia**: Crear sistema de búsqueda rápida\n5. **Actualización**: Desarrollar proceso de actualización continua\n\n# Entregable Esperado\n\n**Banco de Respuestas Personalizado por Industria** con:\n- Lista completa de objeciones por industria\n- Respuestas personalizadas para cada objeción\n- Organización por categorías y prioridad\n- Ejemplos y casos de uso específicos\n- Sistema de búsqueda y referencia rápida\n- Proceso de actualización continua\n- Guía de uso del banco\n- Métricas de efectividad\n\nEl documento debe ser claro, directo, orientado a valor práctico y accionable, con calidad de nivel Google, Big Four o Stanford.",
    "paramCount": 5,
    "keywords": [
      "Defensa",
      "Banco",
      "Respuestas",
      "Personalizado"
    ],
    "explicacion": "Crear un banco completo y personalizado de respuestas a objeciones comunes específico para una industria, proporcionando un recurso actualizable para manejar cualquier objeción de manera efectiva.",
    "cuando_usar": "Úsalo cuando entras a un nuevo vertical o industria y necesitas preparar al equipo con respuestas específicas. Base para onboarding de nuevos vendedores."
  },
  {
    "id": "auditoria_del_proceso_comercial",
    "label_title": "Auditoría del Proceso Comercial",
    "category": "setup",
    "content": "===parametros\n\n- etapas_actuales: {[etapas]} → Lista de etapas del CRM actual\n- tasas_conversion: {[tasas]} → % de paso entre etapas (si existen)\n\n===prompt\n\n# Dónde se rompe la venta\n\nActúa como Auditor de Procesos Comerciales.\nAnaliza las etapas proporcionadas: {[etapas]} y sus tasas: {[tasas]}.\nIdentifica los 3 cuellos de botella más probables donde se pierde eficiencia.\nGenera un reporte de 'Semáforo':\n- Verde: Etapas fluidas.\n- Rojo: Puntos de fricción crítica.\n- Recomendación táctica para desbloquear los rojos.\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Auditoría",
      "Proceso",
      "Comercial"
    ],
    "explicacion": "Analizar las etapas del CRM actual y sus tasas de conversión para identificar los cuellos de botella donde se pierde eficiencia. Genera un reporte de semáforo con puntos de fricción y recomendaciones tácticas.",
    "cuando_usar": "Úsalo trimestralmente o cuando notes caída en conversiones. Identifica dónde se rompe la venta para priorizar mejoras."
  },
  {
    "id": "mapa_del_ciclo_comercial_ideal",
    "label_title": "Mapa del Ciclo Comercial Ideal",
    "category": "setup",
    "content": "===parametros\n\n- producto: {[producto]}\n- ticket_promedio: {[precio]}\n- ciclo_estimado: {[dias]}\n\n===prompt\n\n# La ruta crítica del dinero\n\nDiseña el Mapa del Ciclo Comercial Ideal para un producto de ticket {[precio]}.\nDefine las etapas estándar (Prospect -> Lead -> Opp -> Close) pero personalizadas para este ciclo de {[dias]} días.\nPara cada etapa, define:\n1. Objetivo de salida (Exit Criteria).\n2. Actividad clave del vendedor.\n3. Material de soporte necesario (Collateral).\n\n> Contexto crítico: Ten en cuenta producto ({[producto]}).\n",
    "paramCount": 3,
    "keywords": [
      "Setup",
      "Ciclo",
      "Comercial",
      "Ideal"
    ],
    "explicacion": "Diseñar el ciclo comercial ideal para un producto específico, definiendo etapas personalizadas con criterios de salida, actividades clave y materiales de soporte necesarios.",
    "cuando_usar": "Úsalo al diseñar o rediseñar tu proceso de ventas. Define la ruta crítica desde prospecto hasta cliente cerrado."
  },
  {
    "id": "definicion_de_icp_y_buyer_persona",
    "label_title": "Definición de ICP y Buyer Persona",
    "category": "setup",
    "content": "===parametros\n\n- industria_objetivo: {[industria]}\n- problema_que_resuelve: {[problema]}\n\n===prompt\n\n# A quién le vendemos (y a quién no)\n\nDefine el Perfil de Cliente Ideal (ICP) para la industria {[industria]}.\nCrea 2 Buyer Personas clave:\n1. El Campeón (Usuario/Beneficiario).\n2. El Decisor Económico (Budget Holder).\nIncluye para cada uno: Cargo, KPIs que le quitan el sueño, y Objeción principal al cambio.\n\n> Contexto crítico: Ten en cuenta problema ({[problema]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Definición",
      "Buyer",
      "Persona"
    ],
    "explicacion": "Definir el Perfil de Cliente Ideal (ICP) y crear Buyer Personas clave con cargos, KPIs que les quitan el sueño, y objeciones principales al cambio.",
    "cuando_usar": "Úsalo al iniciar estrategia de ventas para un nuevo producto o mercado. Clarifica a quién le vendes y a quién no."
  },
  {
    "id": "matriz_de_calificacion_de_leads",
    "label_title": "Matriz de Calificación de Leads",
    "category": "setup",
    "content": "===parametros\n\n- criterios_ideales: {[criterios]}\n\n===prompt\n\n# Separar el trigo de la paja\n\nCrea una Matriz de Calificación de Leads (Scoring).\nDefine 3 niveles: Hot, Warm, Cold.\nAsigna puntos a criterios como: Presupuesto confirmado, Autoridad, Urgencia (Timing), Fit técnico.\nEntrega una tabla simple para que el SDR califique rápidamente.\n\n> Contexto crítico: Ten en cuenta criterios ({[criterios]}).\n",
    "paramCount": 1,
    "keywords": [
      "Setup",
      "Matriz",
      "Calificación",
      "Leads"
    ],
    "explicacion": "Crear una matriz de scoring de leads con niveles Hot, Warm, Cold basada en criterios como presupuesto, autoridad, urgencia y fit técnico.",
    "cuando_usar": "Úsalo para estandarizar cómo califican leads los SDRs. Separa el trigo de la paja antes de invertir tiempo del AE."
  },
  {
    "id": "calculadora_de_tam_sam_som",
    "label_title": "Calculadora de TAM SAM SOM",
    "category": "setup",
    "content": "===parametros\n\n- region: {[region]}\n- nicho: {[nicho]}\n- precio_anual: {[precio]}\n\n===prompt\n\n# El tamaño del premio\n\nEstima el mercado total direccionable de forma lógica (Fermi estimate).\n- TAM (Total Addressable Market) en {[region]}.\n- SAM (Serviceable Available Market).\n- SOM (Serviceable Obtainable Market) realista para el año 1.\nExplica la lógica del cálculo (bottom-up).\n\n> Contexto crítico: Ten en cuenta nicho ({[nicho]}), precio ({[precio]}).\n",
    "paramCount": 3,
    "keywords": [
      "Setup",
      "Calculadora"
    ],
    "explicacion": "Estimar el mercado total direccionable (TAM), mercado disponible (SAM) y mercado obtenible (SOM) usando lógica bottom-up y estimaciones tipo Fermi.",
    "cuando_usar": "Úsalo para presentaciones a inversores, planning estratégico, o para justificar expansión a nuevos mercados."
  },
  {
    "id": "analisis_foda_comercial",
    "label_title": "Análisis FODA Comercial",
    "category": "setup",
    "content": "===parametros\n\n- mi_producto: {[producto]}\n- competidor_principal: {[competidor]}\n\n===prompt\n\n# Dónde ganar y dónde protegerse\n\nRealiza un FODA estrictamente comercial (no corporativo).\n- Fortalezas: Por qué ganamos deals.\n- Oportunidades: Gaps del competidor {[competidor]}.\n- Debilidades: Por qué perdemos deals.\n- Amenazas: Cambios de mercado/precio.\nGenera una estrategia de ataque por cada Oportunidad y una de defensa por cada Amenaza.\n\n> Contexto crítico: Ten en cuenta producto ({[producto]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Análisis",
      "Comercial"
    ],
    "explicacion": "Realizar un FODA estrictamente comercial identificando por qué ganamos deals, gaps del competidor, por qué perdemos deals, y cambios de mercado. Genera estrategias de ataque y defensa.",
    "cuando_usar": "Úsalo antes de entrar a competir en un nuevo mercado o cuando pierdes deals consistentemente ante un competidor específico."
  },
  {
    "id": "propuesta_de_valor_unica",
    "label_title": "Propuesta de Valor Única",
    "category": "setup",
    "content": "===parametros\n\n- caracteristicas: {[features]}\n- beneficios: {[beneficios]}\n\n===prompt\n\n# Por qué nosotros\n\nSintetiza la Propuesta de Valor Única (UVP) en una frase tipo 'Pitch'.\nEstructura: 'Ayudamos a X a lograr Y mediante Z, sin sufrir W'.\nLuego, desglosa 3 pilares de valor (Value Pillars) que sustentan esa promesa.\n\n> Contexto crítico: Ten en cuenta features ({[features]}), beneficios ({[beneficios]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Propuesta",
      "Valor",
      "Única"
    ],
    "explicacion": "Sintetizar la Propuesta de Valor Única (UVP) en formato pitch de una frase, con estructura 'Ayudamos a X a lograr Y mediante Z, sin sufrir W', más 3 pilares de valor.",
    "cuando_usar": "Úsalo para alinear el mensaje del equipo de ventas. Toda comunicación debe reflejar esta UVP."
  },
  {
    "id": "estrategia_de_precios_y_descuentos",
    "label_title": "Estrategia de Precios y Descuentos",
    "category": "setup",
    "content": "===parametros\n\n- modelo_actual: {[pricing]}\n- margen_negociacion: {[margen]}\n\n===prompt\n\n# Defender el valor, no el precio\n\nEstablece una política de descuentos (Discounting Policy).\nDefine 3 niveles de concesión y qué pedimos a cambio (Give-Get):\n1. Pronto pago -> X% dto.\n2. Volumen/Plurianual -> Y% dto.\n3. Caso de éxito público -> Z% dto.\nScript para decir 'No' a un descuento sin perder el deal.\n\n> Contexto crítico: Ten en cuenta pricing ({[pricing]}), margen ({[margen]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Estrategia",
      "Precios",
      "Descuentos"
    ],
    "explicacion": "Establecer una política de descuentos con niveles de concesión y qué pedir a cambio (Give-Get). Incluye script para decir 'No' a descuentos sin perder el deal.",
    "cuando_usar": "Úsalo para estandarizar cómo el equipo maneja negociaciones de precio. Protege márgenes mientras cierras deals."
  },
  {
    "id": "stack_tecnologico_de_ventas",
    "label_title": "Stack Tecnológico de Ventas",
    "category": "setup",
    "content": "===parametros\n\n- equipo_tamano: {[n_vendedores]}\n- presupuesto_tech: {[budget]}\n\n===prompt\n\n# Las armas del equipo\n\nRecomienda el Tech Stack mínimo viable para un equipo de {[n_vendedores]} personas.\n- CRM.\n- Herramienta de Prospección/Data.\n- Herramienta de Videoconferencia/Grabación.\n- Herramienta de Firma/Propuestas.\nJustifica la elección por ROI y facilidad de uso.\n\n> Contexto crítico: Ten en cuenta budget ({[budget]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Stack",
      "Tecnológico",
      "Ventas"
    ],
    "explicacion": "Recomendar el stack tecnológico mínimo viable para un equipo de ventas, incluyendo CRM, prospección, videoconferencia y firma, justificado por ROI y facilidad de uso.",
    "cuando_usar": "Úsalo al configurar un nuevo equipo de ventas o al evaluar si tu stack actual es óptimo."
  },
  {
    "id": "plan_de_contratacion_de_vendedores",
    "label_title": "Plan de Contratación de Vendedores",
    "category": "setup",
    "content": "===parametros\n\n- meta_crecimiento: {[meta]}\n- cuota_promedio: {[cuota]}\n\n===prompt\n\n# Quienes nos llevarán a la meta\n\nCalcula cuántos vendedores necesitamos (Headcount Planning).\nConsiderando la meta {[meta]} y cuota {[cuota]}, asumiendo que un vendedor nuevo tarda 3 meses en ser productivo (Ramp-up).\nCrea un cronograma de contrataciones (Q1, Q2, Q3, Q4) para asegurar el número a fin de año.\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Contratación",
      "Vendedores"
    ],
    "explicacion": "Calcular cuántos vendedores necesitas para alcanzar la meta de ventas, considerando cuota promedio y tiempo de ramp-up. Genera cronograma de contrataciones por trimestre.",
    "cuando_usar": "Úsalo durante planning anual o cuando necesitas justificar headcount adicional ante liderazgo."
  },
  {
    "id": "modelo_de_compensacion_variable",
    "label_title": "Modelo de Compensación Variable",
    "category": "setup",
    "content": "===parametros\n\n- salario_base: {[base]}\n- ote_objetivo: {[ote]}\n\n===prompt\n\n# Incentivos que alinean comportamiento\n\nDiseña un esquema de comisiones simple.\n- % sobre venta nueva.\n- % sobre renovación.\n- Aceleradores (Kickers) si superan la cuota (>100%).\nAsegura que el plan motive a cerrar deals sanos, no solo volumen.\n\n> Contexto crítico: Ten en cuenta base ({[base]}), ote ({[ote]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Modelo",
      "Compensación",
      "Variable"
    ],
    "explicacion": "Diseñar un esquema de comisiones simple con % sobre venta nueva, renovación, y aceleradores para superar cuota. Alinea incentivos con comportamientos de venta sanos.",
    "cuando_usar": "Úsalo al estructurar o reestructurar compensación del equipo de ventas. Incentivos correctos = comportamientos correctos."
  },
  {
    "id": "manual_de_cultura_de_ventas",
    "label_title": "Manual de Cultura de Ventas",
    "category": "setup",
    "content": "===parametros\n\n- valores_empresa: {[valores]}\n\n===prompt\n\n# Cómo nos comportamos cuando nadie mira\n\nRedacta el 'Manifiesto de Ventas' del equipo.\nTraduce los valores {[valores]} en comportamientos diarios de venta.\nEjemplo: 'Si valoramos la transparencia, entonces comunicamos las malas noticias rápido al cliente'.\n",
    "paramCount": 1,
    "keywords": [
      "Setup",
      "Manual",
      "Cultura",
      "Ventas"
    ],
    "explicacion": "Redactar el 'Manifiesto de Ventas' del equipo, traduciendo valores de la empresa en comportamientos diarios de venta concretos.",
    "cuando_usar": "Úsalo para onboarding de nuevos vendedores o para realinear cultura del equipo existente."
  },
  {
    "id": "kpis_y_cuadro_de_mando",
    "label_title": "KPIs y Cuadro de Mando",
    "category": "setup",
    "content": "===parametros\n\n- etapa_empresa: {[startup_scaleup_enterprise]}\n\n===prompt\n\n# Lo que no se mide no se mejora\n\nDefine los 5 KPIs sagrados para este equipo.\n1. Actividad (Inputs).\n2. Eficiencia (Conversion rates).\n3. Resultados (Outputs).\nCrea la estructura de un Dashboard simple para revisar cada lunes.\n\n> Contexto crítico: Ten en cuenta startup scaleup enterprise ({[startup_scaleup_enterprise]}).\n",
    "paramCount": 1,
    "keywords": [
      "Setup",
      "Cuadro",
      "Mando"
    ],
    "explicacion": "Definir los 5 KPIs sagrados del equipo de ventas (actividad, eficiencia, resultados) y crear estructura de dashboard para revisión semanal.",
    "cuando_usar": "Úsalo al establecer métricas para un nuevo equipo o cuando las métricas actuales no predicen resultados."
  },
  {
    "id": "proyeccion_de_ventas_trimestral",
    "label_title": "Proyección de Ventas Trimestral",
    "category": "setup",
    "content": "===parametros\n\n- pipeline_actual: {[pipeline]}\n- hit_rate_historico: {[tasa_cierre]}\n\n===prompt\n\n# La verdad numérica\n\nGenera un Forecast Trimestral basado en el pipeline {[pipeline]}.\nAplica el Weighted Forecast (Valor del deal x Probabilidad de etapa).\nIdentifica el Gap para llegar a la meta y sugiere acciones de cobertura.\n\n> Contexto crítico: Ten en cuenta tasa cierre ({[tasa_cierre]}).\n",
    "paramCount": 2,
    "keywords": [
      "Setup",
      "Proyección",
      "Ventas",
      "Trimestral"
    ],
    "explicacion": "Generar un forecast trimestral basado en pipeline usando Weighted Forecast (valor x probabilidad). Identifica gaps y sugiere acciones de cobertura.",
    "cuando_usar": "Úsalo al inicio de cada trimestre o mes para forecast preciso. Requisito para reporting a liderazgo."
  },
  {
    "id": "cadena_de_busqueda_booleana",
    "label_title": "Cadena de Búsqueda Booleana",
    "category": "prospeccion",
    "content": "===parametros\n\n- cargo_target: {[cargo]}\n- industria: {[industria]}\n- excluyendo: {[exclusiones]}\n\n===prompt\n\n# Encontrar la aguja en el pajar\n\nGenera 3 cadenas booleanas (Boolean Strings) para LinkedIn/Google.\n1. Broad: Para capturar volumen.\n2. Targeted: Para alta relevancia.\n3. Niche: Buscando palabras clave específicas en el perfil.\nAsegúrate de usar operadores AND, OR, NOT y paréntesis correctamente.\n\n> Contexto crítico: Ten en cuenta cargo ({[cargo]}), industria ({[industria]}), exclusiones ({[exclusiones]}).\n",
    "paramCount": 3,
    "keywords": [
      "Prospección",
      "Cadena",
      "Búsqueda",
      "Booleana"
    ],
    "explicacion": "Generar 3 cadenas booleanas para LinkedIn/Google: Broad para volumen, Targeted para relevancia, y Niche para palabras clave específicas.",
    "cuando_usar": "Úsalo para encontrar prospectos específicos que cumplen criterios exactos. Encuentra la aguja en el pajar."
  },
  {
    "id": "secuencia_outbound_multicanal",
    "label_title": "Secuencia Outbound Multicanal",
    "category": "prospeccion",
    "content": "===parametros\n\n- dias_duracion: {[dias]}\n- canales: {[canales]} → Email, LinkedIn, Teléfono\n\n===prompt\n\n# Omnipresencia estratégica\n\nDiseña una cadencia de prospección de {[dias]} días.\nDía 1: Email 1 + LinkedIn Connect.\nDía 3: Llamada (No dejar voicemail).\nDía 5: Email 2 (Aporte valor).\n...\nHasta el 'Break-up'. Define la actividad exacta por día.\n\n> Contexto crítico: Ten en cuenta canales ({[canales]}).\n",
    "paramCount": 2,
    "keywords": [
      "Prospección",
      "Secuencia",
      "Outbound",
      "Multicanal"
    ],
    "explicacion": "Diseñar una cadencia de prospección multicanal con actividad exacta por día (email, LinkedIn, llamada) hasta el break-up.",
    "cuando_usar": "Úsalo para sistematizar el outbound del equipo. Omnipresencia estratégica sin ser spam."
  },
  {
    "id": "plantilla_cold_email_pain_centric",
    "label_title": "Plantilla Cold Email Pain Centric",
    "category": "prospeccion",
    "content": "===parametros\n\n- dolor_mercado: {[dolor]}\n- caso_similar: {[cliente_similar]}\n\n===prompt\n\n# Hablar del problema, no de la solución\n\nRedacta un Cold Email de <100 palabras.\nAsunto: Curiosidad o Relevancia.\nCuerpo: 'Vi que empresas como {[cliente_similar]} sufren con {[dolor]}. Nosotros lo arreglamos así. ¿Te suena familiar?'.\nCall to Action (CTA): Interés, no reunión.\n",
    "paramCount": 2,
    "keywords": [
      "Prospección",
      "Plantilla",
      "Email",
      "Centric"
    ],
    "explicacion": "Redactar un cold email de menos de 100 palabras enfocado en el problema del prospecto, no en tu solución. CTA busca interés, no reunión.",
    "cuando_usar": "Úsalo como primer touchpoint de outbound. Habla del problema, no de ti."
  },
  {
    "id": "guion_de_llamada_en_frio_opener",
    "label_title": "Guión de Llamada en Frío Opener",
    "category": "prospeccion",
    "content": "===parametros\n\n- segundos_iniciales: 10\n\n===prompt\n\n# Ganar los primeros 30 segundos\n\nEscribe un Opener para Cold Call que baje la barrera defensiva.\nUsa 'Permission based opener' (¿Te pillo en mal momento?) o una apertura directa de contexto.\nObjetivo: Que el prospecto diga 'Ok, dime de qué se trata'.\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Guión",
      "Llamada",
      "Opener"
    ],
    "explicacion": "Escribir un opener de cold call que baja la barrera defensiva en los primeros 10 segundos usando permission-based opening o contexto directo.",
    "cuando_usar": "Úsalo para ganar los primeros 30 segundos críticos de una llamada fría. El objetivo es que digan 'Ok, dime de qué se trata'."
  },
  {
    "id": "mensaje_de_conexion_linkedin",
    "label_title": "Mensaje de Conexión LinkedIn",
    "category": "prospeccion",
    "content": "===parametros\n\n- motivo: {[motivo]}\n\n===prompt\n\n# La invitación que aceptan\n\nRedacta 3 invitaciones de LinkedIn (Nota personal).\nSin venta. Sin links.\nSolo contexto ('Leí tu post', 'Tenemos conexiones comunes') y curiosidad genuina.\n\n> Contexto crítico: Ten en cuenta motivo ({[motivo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Mensaje",
      "Conexión",
      "LinkedIn"
    ],
    "explicacion": "Redactar 3 invitaciones de LinkedIn sin venta, sin links, solo contexto y curiosidad genuina que generen aceptación.",
    "cuando_usar": "Úsalo para expandir red de contactos estratégicamente. La invitación que aceptan es la que no vende."
  },
  {
    "id": "video_prospecting_script",
    "label_title": "Video Prospecting Script",
    "category": "prospeccion",
    "content": "===parametros\n\n- duracion: 45s\n- elemento_visual: {[pantalla]}\n\n===prompt\n\n# La cara detrás del email\n\nGuion para video Loom/Vidyard.\n1. Saludo personalizado con su nombre escrito en una pizarra o su web de fondo.\n2. 'Me tomé el atrevimiento de ver tu web y noté X'.\n3. Idea provocadora.\n4. 'Si quieres ver cómo arreglarlo, hablemos'.\n\n> Contexto crítico: Ten en cuenta pantalla ({[pantalla]}).\n",
    "paramCount": 2,
    "keywords": [
      "Prospección",
      "Video",
      "Prospecting",
      "Script"
    ],
    "explicacion": "Crear guión para video Loom/Vidyard de 45 segundos con saludo personalizado, observación de la web del prospecto, idea provocadora y CTA.",
    "cuando_usar": "Úsalo para diferenciarte en outbound saturado. La cara detrás del email genera 3x más respuestas."
  },
  {
    "id": "respuestas_a_objeciones_de_prospeccion",
    "label_title": "Respuestas a Objeciones de Prospección",
    "category": "prospeccion",
    "content": "===parametros\n\n- objecion: \"No me interesa\" / \"Envíame info\"\n\n===prompt\n\n# No es un No, es un No ahora\n\nGenera respuestas de rebote (Rebuttal) para las objeciones clásicas de interrupción.\n- 'Envíame info' -> 'Claro, para no enviarte algo genérico, ¿tu foco es A o B?'.\n- 'No me interesa' -> 'Justo por eso te llamo, la mayoría no tiene interés hasta que ven el impacto de X...'.\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Respuestas",
      "Objeciones",
      "Prospección"
    ],
    "explicacion": "Generar respuestas de rebote (Rebuttal) para las objeciones clásicas de interrupción como 'No me interesa' o 'Envíame info'.",
    "cuando_usar": "Úsalo para preparar al equipo de SDRs ante los rechazos más comunes. No es un No, es un No ahora."
  },
  {
    "id": "reactivacion_de_leads_zombies",
    "label_title": "Reactivación de Leads Zombies",
    "category": "prospeccion",
    "content": "===parametros\n\n- meses_sin_contacto: {[meses]}\n\n===prompt\n\n# ¿Sigues vivo?\n\nRedacta el 'Dean Jackson 9-word email' para revivir leads muertos.\nAsunto: [Nombre del prospecto].\nCuerpo: Una sola pregunta directa sobre si todavía están buscando resolver [Problema].\n\n> Contexto crítico: Ten en cuenta meses ({[meses]}).\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Reactivación",
      "Leads",
      "Zombies"
    ],
    "explicacion": "Redactar el 'Dean Jackson 9-word email' para revivir leads muertos con una pregunta directa simple.",
    "cuando_usar": "Úsalo para leads que llevan meses sin responder. ¿Sigues vivo? A veces resucitan."
  },
  {
    "id": "referidos_como_pedirlos",
    "label_title": "Referidos Cómo Pedirlos",
    "category": "prospeccion",
    "content": "===parametros\n\n- momento_clave: {[momento]} → Entrega de valor, firma, éxito\n\n===prompt\n\n# El canal más rentable\n\nRedacta un script para pedir referidos sin parecer desesperado.\nEstrategia: 'Hacer un favor' vs 'Pedir un favor'.\n'Ahora que logramos X para ti, ¿conoces 2 personas en tu red que tengan el mismo problema Y?'.\n\n> Contexto crítico: Ten en cuenta momento ({[momento]}).\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Referidos",
      "Pedirlos"
    ],
    "explicacion": "Redactar script para pedir referidos sin parecer desesperado, usando estrategia de 'hacer un favor' vs 'pedir un favor'.",
    "cuando_usar": "Úsalo después de entregar valor o cerrar exitosamente. El canal más rentable son los referidos."
  },
  {
    "id": "social_selling_rutina_diaria",
    "label_title": "Social Selling Rutina Diaria",
    "category": "prospeccion",
    "content": "===parametros\n\n- tiempo_disponible: 15 min\n\n===prompt\n\n# Estar presente sin perder el día\n\nGenera una checklist de rutina diaria en LinkedIn.\n- 5 min: Comentar en posts de prospectos (no 'buen post', sino aporte).\n- 5 min: Conectar con nuevos leads de la cuenta target.\n- 5 min: Aceptar invitaciones y responder DMs.\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Social",
      "Selling",
      "Rutina"
    ],
    "explicacion": "Generar checklist de rutina diaria en LinkedIn de 15 minutos: comentar, conectar, responder.",
    "cuando_usar": "Úsalo para sistematizar presencia en LinkedIn sin perder el día. Estar presente sin ser invasivo."
  },
  {
    "id": "comentarios_estrategicos_linkedin",
    "label_title": "Comentarios Estratégicos LinkedIn",
    "category": "prospeccion",
    "content": "===parametros\n\n- post_del_prospecto: {[texto_post]}\n\n===prompt\n\n# Comentar para ser visto\n\nGenera 3 opciones de comentario para el post {[texto_post]}.\nObjetivo: Que el autor (prospecto) responda o visite tu perfil.\nTécnica: Validar + Agregar perspectiva nueva + Pregunta abierta.\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Comentarios",
      "Estratégicos",
      "LinkedIn"
    ],
    "explicacion": "Generar 3 opciones de comentario para post de prospecto usando técnica: Validar + Agregar perspectiva + Pregunta abierta.",
    "cuando_usar": "Úsalo para ser visto y generar que el prospecto visite tu perfil. Comentar para conectar, no para vender."
  },
  {
    "id": "curacion_de_contenidos_sectoriales",
    "label_title": "Curación de Contenidos Sectoriales",
    "category": "prospeccion",
    "content": "===parametros\n\n- industria: {[industria]}\n- noticia_reciente: {[noticia]}\n\n===prompt\n\n# Experto por asociación\n\nRedacta un post compartiendo la noticia {[noticia]}.\nNo solo compartas el link. Agrega tu 'Take' (Opinión).\n'Lo que esto significa para los Directores de {[industria]} es que...'.\n",
    "paramCount": 2,
    "keywords": [
      "Prospección",
      "Curación",
      "Contenidos",
      "Sectoriales"
    ],
    "explicacion": "Redactar post compartiendo noticia del sector con tu 'Take' (opinión) que te posiciona como experto por asociación.",
    "cuando_usar": "Úsalo para posicionarte como experto sectorial sin crear contenido original. Curación inteligente."
  },
  {
    "id": "lead_magnet_mecanica",
    "label_title": "Lead Magnet Mecánica",
    "category": "prospeccion",
    "content": "===parametros\n\n- problema_micro: {[problema]}\n\n===prompt\n\n# Valor a cambio de un contacto\n\nDiseña la estructura de un Lead Magnet simple.\nFormato: PDF de 1 página, Checklist, o Calculadora.\nTítulo: Promesa específica (Cómo solucionar [problema] en 5 pasos).\nCall to Action para descarga.\n\n> Contexto crítico: Ten en cuenta problema ({[problema]}).\n",
    "paramCount": 1,
    "keywords": [
      "Prospección",
      "Magnet",
      "Mecánica"
    ],
    "explicacion": "Diseñar estructura de Lead Magnet simple (PDF, Checklist, Calculadora) con título de promesa específica y CTA para descarga.",
    "cuando_usar": "Úsalo para generar leads inbound ofreciendo valor a cambio de un contacto."
  },
  {
    "id": "webinar_estructura_de_convocatoria",
    "label_title": "Webinar Estructura de Convocatoria",
    "category": "prospeccion",
    "content": "===parametros\n\n- tema: {[tema]}\n- dolor_que_resuelve: {[dolor]}\n\n===prompt\n\n# Llenar la sala virtual\n\nSecuencia de 3 emails para convocar a un webinar.\n1. Invitación (EL problema y por qué ahora).\n2. Recordatorio (Social proof, quién más va).\n3. Última llamada ('Empezamos en 1 hora').\n\n> Contexto crítico: Ten en cuenta tema ({[tema]}), dolor ({[dolor]}).\n",
    "paramCount": 2,
    "keywords": [
      "Prospección",
      "Webinar",
      "Estructura",
      "Convocatoria"
    ],
    "explicacion": "Crear secuencia de 3 emails para convocar a webinar: Invitación, Recordatorio y Última llamada.",
    "cuando_usar": "Úsalo para llenar la sala virtual de tu próximo webinar o evento online."
  },
  {
    "id": "analisis_de_cuenta_y_mapeo",
    "label_title": "Análisis de Cuenta y Mapeo",
    "category": "discovery",
    "content": "===parametros\n\n- cuenta: {[empresa]}\n- organigrama_conocido: {[nombres]}\n\n===prompt\n\n# Navegar la política interna\n\nCrea un Account Plan visual (texto).\nIdentifica los huecos en el organigrama.\n¿Quién es el Economic Buyer? ¿Quién es el Champion? ¿Quién es el Blocker (Detractor)?\nDefine la estrategia para llegar a los desconocidos.\n\n> Contexto crítico: Ten en cuenta empresa ({[empresa]}), nombres ({[nombres]}).\n",
    "paramCount": 2,
    "keywords": [
      "Discovery",
      "Análisis",
      "Cuenta",
      "Mapeo"
    ],
    "explicacion": "Crear Account Plan identificando huecos en organigrama, Economic Buyer, Champion y Blocker. Define estrategia para llegar a contactos desconocidos.",
    "cuando_usar": "Úsalo para navegar la política interna de cuentas enterprise complejas."
  },
  {
    "id": "carta_de_acceso_a_poder",
    "label_title": "Carta de Acceso a Poder",
    "category": "discovery",
    "content": "===parametros\n\n- contacto_bajo: {[nombre_bajo]}\n- contacto_alto: {[nombre_jefe]}\n\n===prompt\n\n# Top-Down Selling\n\nRedacta un email para el C-Level {[nombre_jefe]}.\nContexto: 'He estado hablando con tu equipo ({[nombre_bajo]}) y detectamos X'.\nObjetivo: Validar si X es prioridad estratégica para la dirección.\n",
    "paramCount": 2,
    "keywords": [
      "Discovery",
      "Carta",
      "Acceso",
      "Poder"
    ],
    "explicacion": "Redactar email para C-Level referenciando conversaciones con su equipo para validar si el problema es prioridad estratégica. Top-Down Selling.",
    "cuando_usar": "Úsalo cuando estás estancado con contactos operativos y necesitas acceso a nivel ejecutivo."
  },
  {
    "id": "breakup_email_final",
    "label_title": "Breakup Email Final",
    "category": "discovery",
    "content": "===parametros\n\n- nombre: {[nombre]}\n\n===prompt\n\n# Retirar la oferta para generar deseo\n\nRedacta el email de despedida ('Going negative').\n'Como no he sabido de ti, asumo que X ya no es prioridad. Voy a cerrar este expediente para no molestarte más'.\nA menudo genera una respuesta de '¡No, espera!'.\n\n> Contexto crítico: Ten en cuenta nombre ({[nombre]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Breakup",
      "Email",
      "Final"
    ],
    "explicacion": "Redactar email de despedida ('Going negative') que retira la oferta para generar deseo. A menudo genera respuesta de '¡No, espera!'.",
    "cuando_usar": "Úsalo como último recurso cuando el prospecto desaparece. Retirar la oferta para generar urgencia."
  },
  {
    "id": "handover_sdr_a_ae",
    "label_title": "Handover SDR a AE",
    "category": "discovery",
    "content": "===parametros\n\n- lead: {[nombre]}\n- resumen_dolor: {[dolor]}\n\n===prompt\n\n# Pase de batuta sin caídas\n\nFormato de nota de entrega (Handoff) del SDR al Account Executive.\nDatos duros: Empresa, cargo.\nContexto cualitativo: 'Me dijo que le urge porque...'.\nNext Step agendado. Evita que el cliente tenga que repetir su historia.\n\n> Contexto crítico: Ten en cuenta nombre ({[nombre]}), dolor ({[dolor]}).\n",
    "paramCount": 2,
    "keywords": [
      "Discovery",
      "Handover"
    ],
    "explicacion": "Crear formato de nota de entrega del SDR al Account Executive con datos duros y contexto cualitativo. Evita que el cliente repita su historia.",
    "cuando_usar": "Úsalo en cada pase de batuta para mantener continuidad y profesionalismo."
  },
  {
    "id": "agenda_reunion_discovery",
    "label_title": "Agenda Reunión Discovery",
    "category": "discovery",
    "content": "===parametros\n\n- duracion: 30 min\n\n===prompt\n\n# Controlar el tiempo y la expectativa\n\nDefine la Agenda (Upfront Contract) para iniciar la llamada.\n1. Confirmar tiempo.\n2. Propósito: Ver si hay fit.\n3. Dinámica: Te haré preguntas, tú hazme preguntas.\n4. Resultado: Decidir si avanzamos o no.\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Agenda",
      "Reunión",
      "Discovery"
    ],
    "explicacion": "Definir Agenda (Upfront Contract) de 30 minutos para discovery: confirmar tiempo, propósito, dinámica de preguntas, y resultado esperado.",
    "cuando_usar": "Úsalo al inicio de cada discovery call para controlar tiempo y expectativas."
  },
  {
    "id": "investigacion_previa_3x3",
    "label_title": "Investigación Previa 3x3",
    "category": "discovery",
    "content": "===parametros\n\n- linkedin_url: {[url]}\n- web_empresa: {[url_web]}\n\n===prompt\n\n# 3 datos en 3 minutos\n\nInstrucciones para encontrar 3 'Icebreakers' rápidos:\n1. Algo personal del perfil (Hobby, voluntariado).\n2. Algo reciente de la empresa (Noticia, post).\n3. Una conexión o experiencia compartida.\nPara usar al inicio y crear rapport real.\n\n> Contexto crítico: Ten en cuenta url ({[url]}), url web ({[url_web]}).\n",
    "paramCount": 2,
    "keywords": [
      "Discovery",
      "Investigación",
      "Previa"
    ],
    "explicacion": "Encontrar 3 icebreakers rápidos en 3 minutos: algo personal, algo reciente de la empresa, una conexión compartida.",
    "cuando_usar": "Úsalo antes de cada llamada para crear rapport real con datos específicos."
  },
  {
    "id": "preguntas_situacion_spin",
    "label_title": "Preguntas Situación SPIN",
    "category": "discovery",
    "content": "===parametros\n\n- industria: {[industria]}\n\n===prompt\n\n# SPIN: Situación\n\nGenera 5 preguntas de Situación para entender el contexto SIN aburrir.\nEvita preguntas que Google puede responder ('¿Cuántos empleados sois?').\nMejor: '¿Cómo gestionáis actualmente el proceso de X?'.\n\n> Contexto crítico: Ten en cuenta industria ({[industria]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Preguntas",
      "Situación"
    ],
    "explicacion": "Generar 5 preguntas de Situación para entender contexto sin aburrir. Evita preguntas que Google puede responder.",
    "cuando_usar": "Úsalo para iniciar discovery sin parecer que no investigaste. SPIN: Situación."
  },
  {
    "id": "preguntas_problema_spin",
    "label_title": "Preguntas Problema SPIN",
    "category": "discovery",
    "content": "===parametros\n\n- proceso_actual: {[proceso]}\n\n===prompt\n\n# SPIN: Problema\n\nGenera 5 preguntas para descubrir insatisfacción implícita.\n'¿Qué desafíos encontráis con el proceso actual?'.\n'¿Os cuesta mantener la consistencia en... ?'.\nEl objetivo es que admitan que no todo es perfecto.\n\n> Contexto crítico: Ten en cuenta proceso ({[proceso]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Preguntas",
      "Problema"
    ],
    "explicacion": "Generar 5 preguntas para descubrir insatisfacción implícita con el proceso actual. SPIN: Problema.",
    "cuando_usar": "Úsalo después de preguntas de situación para profundizar en dolores."
  },
  {
    "id": "preguntas_implicacion_spin",
    "label_title": "Preguntas Implicación SPIN",
    "category": "discovery",
    "content": "===parametros\n\n- problema_detectado: {[problema]}\n\n===prompt\n\n# SPIN: Implicación (Hacer que duela)\n\nGenera 5 preguntas que exploren las consecuencias del problema.\n'¿Cómo afecta este retraso a la entrega final al cliente?'.\n'¿Cuánto presupuesto estáis perdiendo por este error recurrente?'.\nAquí es donde se crea la urgencia.\n\n> Contexto crítico: Ten en cuenta problema ({[problema]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Preguntas",
      "Implicación"
    ],
    "explicacion": "Generar 5 preguntas que exploran consecuencias del problema para crear urgencia. SPIN: Implicación (hacer que duela).",
    "cuando_usar": "Úsalo cuando identificaste un problema pero el prospecto no ve urgencia. Aquí se crea el dolor."
  },
  {
    "id": "preguntas_necesidad_solucion_spin",
    "label_title": "Preguntas Necesidad Solución SPIN",
    "category": "discovery",
    "content": "===parametros\n\n- implicacion_grave: {[consecuencia]}\n\n===prompt\n\n# SPIN: Necesidad de Solución (El cliente se vende solo)\n\nGenera preguntas para que el cliente verbalice el valor de arreglarlo.\n'Si pudierais eliminar ese error, ¿cuánto tiempo ahorraría el equipo?'.\n'¿Cómo ayudaría eso a tu objetivo trimestral?'.\n\n> Contexto crítico: Ten en cuenta consecuencia ({[consecuencia]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Preguntas",
      "Necesidad",
      "Solución"
    ],
    "explicacion": "Generar preguntas para que el cliente verbalice el valor de resolver el problema. SPIN: El cliente se vende solo.",
    "cuando_usar": "Úsalo cuando el cliente ha admitido el dolor y quieres que él mismo visualice el valor de la solución."
  },
  {
    "id": "calificacion_meddic_metrics",
    "label_title": "Calificación MEDDIC Metrics",
    "category": "discovery",
    "content": "===parametros\n\n- solucion: {[mi_solucion]}\n\n===prompt\n\n# MEDDIC: Metrics\n\nPreguntas para definir el impacto económico cuantificable.\n'¿Cuál es el KPI específico que esperáis mejorar?'.\n'¿Cómo mediréis el éxito de este proyecto?'.\nSi no hay métrica, no hay urgencia real.\n\n> Contexto crítico: Ten en cuenta mi solucion ({[mi_solucion]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Metrics"
    ],
    "explicacion": "Preguntas MEDDIC para definir impacto económico cuantificable. Si no hay métrica, no hay urgencia real.",
    "cuando_usar": "Úsalo para calificar si el deal tiene métricas de éxito claras. M de MEDDIC."
  },
  {
    "id": "calificacion_meddic_economic_buyer",
    "label_title": "Calificación MEDDIC Economic Buyer",
    "category": "discovery",
    "content": "===parametros\n\n- contacto_actual: {[contacto]}\n\n===prompt\n\n# MEDDIC: Economic Buyer\n\nEstrategia para identificar y llegar a quien tiene la chequera.\nPregunta indirecta: 'Además de ti, ¿quién más necesita dar el visto bueno final para liberar el presupuesto?'.\nNo asumas que tu contacto es el que paga.\n\n> Contexto crítico: Ten en cuenta contacto ({[contacto]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Economic"
    ],
    "explicacion": "Estrategia para identificar y llegar a quien tiene la chequera. No asumas que tu contacto es el que paga. E de MEDDIC.",
    "cuando_usar": "Úsalo cuando no estás seguro de quién firma el cheque. Identifica al Economic Buyer."
  },
  {
    "id": "calificacion_meddic_decision_criteria",
    "label_title": "Calificación MEDDIC Decision Criteria",
    "category": "discovery",
    "content": "===parametros\n\n- competidores: {[lista]}\n\n===prompt\n\n# MEDDIC: Decision Criteria\n\nPreguntas para entender bajo qué reglas juegan.\n'Técnicamente, ¿qué requisitos son imprescindibles?'.\n'Financieramente, ¿qué ROI esperáis ver?'.\nSi no conocemos las reglas, podemos estar jugando el juego equivocado.\n\n> Contexto crítico: Ten en cuenta lista ({[lista]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Decision"
    ],
    "explicacion": "Preguntas para entender bajo qué reglas juegan la evaluación: requisitos técnicos y ROI esperado. D de MEDDIC.",
    "cuando_usar": "Úsalo cuando necesitas entender cómo van a evaluar tu propuesta vs la competencia."
  },
  {
    "id": "calificacion_meddic_decision_process",
    "label_title": "Calificación MEDDIC Decision Process",
    "category": "discovery",
    "content": "===parametros\n\n- fecha_objetivo: {[fecha]}\n\n===prompt\n\n# MEDDIC: Decision Process\n\nEntender el 'Cómo' y el 'Cuándo' compran.\n'Si decidimos avanzar hoy, ¿cuáles son los pasos exactos legal y compras hasta la firma?'.\n'¿Cuánto tarda típicamente ese proceso?'.\nVital para el Forecast.\n\n> Contexto crítico: Ten en cuenta fecha ({[fecha]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Decision"
    ],
    "explicacion": "Entender el 'Cómo' y el 'Cuándo' compran: pasos exactos desde decisión hasta firma. Vital para forecast preciso.",
    "cuando_usar": "Úsalo cuando necesitas predecir fecha de cierre con precisión. D de MEDDIC."
  },
  {
    "id": "calificacion_meddic_identify_pain",
    "label_title": "Calificación MEDDIC Identify Pain",
    "category": "discovery",
    "content": "===parametros\n\n- dolor_superficial: {[dolor]}\n\n===prompt\n\n# MEDDIC: Identify Pain\n\nValidar que el dolor es agudo y no solo una molestia.\n'¿Qué pasa si no hacéis nada respecto a esto en 6 meses?'.\nSi la respuesta es 'nada grave', el deal está muerto.\n\n> Contexto crítico: Ten en cuenta dolor ({[dolor]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Identify"
    ],
    "explicacion": "Validar que el dolor es agudo y no solo una molestia. Si no pasa nada grave en 6 meses sin actuar, el deal está muerto. I de MEDDIC.",
    "cuando_usar": "Úsalo para calificar si hay urgencia real o solo interés tibio."
  },
  {
    "id": "calificacion_meddic_champion",
    "label_title": "Calificación MEDDIC Champion",
    "category": "discovery",
    "content": "===parametros\n\n- contacto: {[nombre]}\n\n===prompt\n\n# MEDDIC: Champion\n\nTestear si tienes un Champion real o solo un Coach.\n¿Tiene acceso al decisor económico?\n¿Te vende internamente cuando no estás?\nPrueba ácida: Pídele acceso a datos sensibles o una reunión con su jefe.\n\n> Contexto crítico: Ten en cuenta nombre ({[nombre]}).\n",
    "paramCount": 1,
    "keywords": [
      "Discovery",
      "Calificación",
      "MEDDIC",
      "Champion"
    ],
    "explicacion": "Testear si tienes un Champion real o solo un Coach: ¿tiene acceso al decisor? ¿te vende internamente? C de MEDDIC.",
    "cuando_usar": "Úsalo para validar que tu contacto tiene influencia real en la decisión."
  },
  {
    "id": "analisis_de_la_competencia_en_deal",
    "label_title": "Análisis de la Competencia en Deal",
    "category": "demo",
    "content": "===parametros\n\n- competidor_mencionado: {[competidor]}\n\n===prompt\n\n# Plantar minas (Landmines)\n\nCómo desposicionar al competidor sin hablar mal de él.\n'Son una gran opción para [Caso A]. Sin embargo, he visto que clientes con [Necesidad B] suelen tener problemas con su enfoque de X. ¿Os habéis asegurado de cómo manejan eso?'.\nSembrar duda razonable.\n\n> Contexto crítico: Ten en cuenta competidor ({[competidor]}).\n",
    "paramCount": 1,
    "keywords": [
      "Demo",
      "Análisis",
      "Competencia"
    ],
    "explicacion": "Plantar minas (Landmines) para desposicionar al competidor sin hablar mal de él. Sembrar duda razonable.",
    "cuando_usar": "Úsalo cuando sabes que hay competencia en el deal y necesitas diferenciarte estratégicamente."
  },
  {
    "id": "storytelling_hero_journey",
    "label_title": "Storytelling Hero Journey",
    "category": "demo",
    "content": "===parametros\n\n- cliente: {[cliente]}\n- problema: {[dolor]}\n\n===prompt\n\n# Tu cliente es el héroe, no tú\n\nEstructura una narrativa de venta usando el 'Viaje del Héroe'.\n1. El Mundo Ordinario (Su Status Quo doloroso).\n2. La Llamada a la Aventura (El detonante del cambio).\n3. El Mentor (Tú/Tu producto).\n4. El Cruce del Umbral (La implementación).\n5. La Recompensa (El resultado final).\n\n> Contexto crítico: Ten en cuenta cliente ({[cliente]}), dolor ({[dolor]}).\n",
    "paramCount": 2,
    "keywords": [
      "Demo",
      "Storytelling",
      "Journey"
    ],
    "explicacion": "Estructurar narrativa de venta usando el Viaje del Héroe: tu cliente es el héroe, no tú. Tú eres el mentor.",
    "cuando_usar": "Úsalo para hacer demos y presentaciones memorables que conectan emocionalmente."
  },
  {
    "id": "estructura_demo_no_lineal",
    "label_title": "Estructura Demo No Lineal",
    "category": "demo",
    "content": "===parametros\n\n- dolor_principal: {[dolor]}\n- feature_killer: {[feature]}\n\n===prompt\n\n# Ir directo al grano\n\nDiseña un flujo de Demo que empiece por el final (el resultado).\n'Aquí está el reporte que soluciona tu problema X'.\nLuego ve hacia atrás: 'Permíteme mostrarte lo fácil que fue generarlo'.\nEvita el 'Harbor Tour' (mostrar todos los botones).\n\n> Contexto crítico: Ten en cuenta dolor ({[dolor]}), feature ({[feature]}).\n",
    "paramCount": 2,
    "keywords": [
      "Demo",
      "Estructura",
      "Lineal"
    ],
    "explicacion": "Diseñar flujo de Demo que empieza por el final (el resultado) y va hacia atrás. Evita el 'Harbor Tour' de mostrar todos los botones.",
    "cuando_usar": "Úsalo para demos que van directo al grano. El prospecto quiere ver el resultado, no el proceso."
  },
  {
    "id": "guion_demo_tecnica",
    "label_title": "Guión Demo Técnica",
    "category": "demo",
    "content": "===parametros\n\n- audiencia_tecnica: {[rol_tecnico]}\n\n===prompt\n\n# Hablar el idioma del CTO\n\nGuion para presentar la diseño de sistemas/seguridad sin dormir a la audiencia.\nEnfócate en: Seguridad, Escalabilidad, Integraciones.\nTraduce cada feature técnico en tranquilidad para ellos ('Esto significa que no te llamarán el fin de semana por caídas').\n\n> Contexto crítico: Ten en cuenta rol tecnico ({[rol_tecnico]}).\n",
    "paramCount": 1,
    "keywords": [
      "Demo",
      "Guión",
      "Técnica"
    ],
    "explicacion": "Guión para presentar diseño de sistemas y seguridad sin dormir a la audiencia técnica. Traduce features en tranquilidad.",
    "cuando_usar": "Úsalo cuando la demo incluye audiencia técnica (CTO, IT). Habla su idioma."
  },
  {
    "id": "manejo_de_preguntas_dificiles_demo",
    "label_title": "Manejo de Preguntas Difíciles Demo",
    "category": "demo",
    "content": "===parametros\n\n- pregunta_trampa: {[pregunta]}\n\n===prompt\n\n# Responder sin improvisar\n\nEstrategia para preguntas que no sabes responder.\nNo mientas.\nUsa: 'Excelente pregunta. Para darte la respuesta técnica precisa, quiero consultarlo con ingeniería y volver a ti hoy mismo. ¿Te parece bien?'.\nAnótalo y CUMPLE.\n\n> Contexto crítico: Ten en cuenta pregunta ({[pregunta]}).\n",
    "paramCount": 1,
    "keywords": [
      "Demo",
      "Manejo",
      "Preguntas",
      "Difíciles"
    ],
    "explicacion": "Estrategia para responder preguntas que no sabes sin improvisar. No mientas, consulta y cumple.",
    "cuando_usar": "Úsalo cuando te hacen preguntas técnicas que no puedes responder en el momento."
  },
  {
    "id": "propuesta_comercial_estructura",
    "label_title": "Propuesta Comercial Estructura",
    "category": "cierre",
    "content": "===parametros\n\n- solucion_propuesta: {[solucion]}\n\n===prompt\n\n# La propuesta que se lee sola\n\nOutline de una Propuesta Ganadora:\n1. Resumen Ejecutivo (El problema y el resultado).\n2. Situación Actual vs Situación Futura.\n3. Implementación y Cronograma (Reducir riesgo).\n4. Inversión (No 'Costo').\n5. Términos y Próximos pasos.\n\n> Contexto crítico: Ten en cuenta solucion ({[solucion]}).\n",
    "paramCount": 1,
    "keywords": [
      "Cierre",
      "Propuesta",
      "Comercial",
      "Estructura"
    ],
    "explicacion": "Outline de Propuesta Ganadora: Resumen Ejecutivo, Situación Actual vs Futura, Implementación, Inversión, Próximos pasos.",
    "cuando_usar": "Úsalo como template para estructurar cualquier propuesta comercial. La propuesta que se lee sola."
  },
  {
    "id": "resumen_ejecutivo_impactante",
    "label_title": "Resumen Ejecutivo Impactante",
    "category": "cierre",
    "content": "===parametros\n\n- decidor: {[nombre_ceo]}\n\n===prompt\n\n# Si solo leen una página, que sea esta\n\nRedacta el Resumen Ejecutivo.\nDebe responder: ¿Por qué cambiar? ¿Por qué ahora? ¿Por qué nosotros?\nSin jerga técnica. Enfoque 100% en negocio y ROI.\n\n> Contexto crítico: Ten en cuenta nombre ceo ({[nombre_ceo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Cierre",
      "Resumen",
      "Ejecutivo",
      "Impactante"
    ],
    "explicacion": "Redactar el Resumen Ejecutivo que responde: ¿Por qué cambiar? ¿Por qué ahora? ¿Por qué nosotros? Sin jerga técnica.",
    "cuando_usar": "Úsalo como la página más importante de cualquier propuesta. Si solo leen una página, que sea esta."
  },
  {
    "id": "caso_de_exito_formato_star",
    "label_title": "Caso de Éxito Formato STAR",
    "category": "cierre",
    "content": "===parametros\n\n- cliente_exito: {[nombre]}\n- desafio: {[desafio]}\n- resultado: {[kpi]}\n\n===prompt\n\n# Prueba social estructurada\n\nRedacta un Mini-Case Study formato STAR.\nSaturación (El problema antes de nosotros).\nTarea (Lo que había que resolver).\nAcción (Lo que hicimos/implementamos).\nResultado (El KPI mejorado - cuanto más numérico mejor).\n\n> Contexto crítico: Ten en cuenta nombre ({[nombre]}), desafio ({[desafio]}), kpi ({[kpi]}).\n",
    "paramCount": 3,
    "keywords": [
      "Cierre",
      "Éxito",
      "Formato"
    ],
    "explicacion": "Redactar Mini-Case Study formato STAR: Situación, Tarea, Acción, Resultado. Prueba social estructurada.",
    "cuando_usar": "Úsalo para documentar éxitos de forma que sean útiles en ventas. Cuanto más numérico, mejor."
  },
  {
    "id": "roi_business_case_builder",
    "label_title": "ROI Business Case Builder",
    "category": "cierre",
    "content": "===parametros\n\n- costo_solucion: {[costo]}\n- ahorro_estimado: {[ahorro]}\n\n===prompt\n\n# Vender dinero por dinero\n\nConstruye el Business Case o calculadora de ROI.\nInversión: $X.\nAhorro en eficiencia: $Y.\nGanancia en nuevos ingresos: $Z.\nPayback period: ¿En cuántos meses se paga sola la herramienta?\n\n> Contexto crítico: Ten en cuenta costo ({[costo]}), ahorro ({[ahorro]}).\n",
    "paramCount": 2,
    "keywords": [
      "Cierre",
      "Business",
      "Builder"
    ],
    "explicacion": "Construir Business Case o calculadora de ROI: Inversión, Ahorro, Ganancia, Payback period. Vender dinero por dinero.",
    "cuando_usar": "Úsalo cuando el cliente necesita justificar internamente la inversión. CFO-friendly."
  },
  {
    "id": "email_seguimiento_post_demo",
    "label_title": "Email Seguimiento Post Demo",
    "category": "cierre",
    "content": "===parametros\n\n- acuerdos: {[next_steps]}\n\n===prompt\n\n# Mantener el momentum\n\nEmail post-demo inmediato.\n1. Agradecimiento.\n2. Resumen de los 3 dolores clave que vimos que solucionamos.\n3. Grabación de la llamada.\n4. Lista de Action Items acordados con responsables y fechas.\n\n> Contexto crítico: Ten en cuenta next steps ({[next_steps]}).\n",
    "paramCount": 1,
    "keywords": [
      "Cierre",
      "Email",
      "Seguimiento"
    ],
    "explicacion": "Email post-demo inmediato con agradecimiento, resumen de 3 dolores clave, grabación y action items acordados.",
    "cuando_usar": "Úsalo inmediatamente después de cada demo para mantener el momentum."
  },
  {
    "id": "manejo_de_ghosting",
    "label_title": "Manejo de Ghosting",
    "category": "cierre",
    "content": "===parametros\n\n- dias_sin_respuesta: {[dias]}\n\n===prompt\n\n# Romper el silencio con elegancia\n\nEmail para cuando desaparecen tras la propuesta.\nNo: '¿Leíste mi propuesta?'.\nSí: 'Estaba pensando en nuestro debate sobre X y encontré este artículo relevante. ¿Siguen siendo esas las prioridades?'.\nAportar valor para re-enganchar.\n\n> Contexto crítico: Ten en cuenta dias ({[dias]}).\n",
    "paramCount": 1,
    "keywords": [
      "Cierre",
      "Manejo",
      "Ghosting"
    ],
    "explicacion": "Email para cuando desaparecen tras la propuesta. No preguntar si leyeron, aportar valor para re-enganchar.",
    "cuando_usar": "Úsalo cuando el prospecto desaparece después de enviar propuesta. Romper el silencio con elegancia."
  },
  {
    "id": "matriz_de_objeciones_comunes",
    "label_title": "Matriz de Objeciones Comunes",
    "category": "cierre",
    "content": "===parametros\n\n- producto: {[producto]}\n\n===prompt\n\n# Vacunar contra el 'No'\n\nCrea una Battlecard de objeciones comunes.\n1. Precio.\n2. Competencia.\n3. Timing ('Ahora no es momento').\n4. Status Quo ('Estamos bien así').\nPara cada una: Una pregunta para aislarla y una respuesta para reencuadrarla.\n\n> Contexto crítico: Ten en cuenta producto ({[producto]}).\n",
    "paramCount": 1,
    "keywords": [
      "Cierre",
      "Matriz",
      "Objeciones",
      "Comunes"
    ],
    "explicacion": "Crear Battlecard de objeciones: Precio, Competencia, Timing, Status Quo. Pregunta para aislar y respuesta para reencuadrar.",
    "cuando_usar": "Úsalo para preparar al equipo ante los 'No' más comunes. Vacunar contra objeciones."
  },
  {
    "id": "script_manejo_precio_caro",
    "label_title": "Script Manejo Precio Caro",
    "category": "negociacion",
    "content": "===parametros\n\n- diferencia_precio: {[porcentaje_mayor]}\n\n===prompt\n\n# Caro vs Costoso\n\nRebuttal para 'Sois muy caros'.\n'Comparado con [Opción barata], sí, la inversión es mayor. Pero el costo de fallar en [Proceso Crítico] es de $X. Nuestra solución garantiza...'.\nAislar precio vs valor total de propiedad (TCO).\n\n> Contexto crítico: Ten en cuenta porcentaje mayor ({[porcentaje_mayor]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Script",
      "Manejo",
      "Precio"
    ],
    "explicacion": "Rebuttal para 'Sois muy caros': separar precio de valor, mostrar costo de fallar vs inversión. Caro vs Costoso.",
    "cuando_usar": "Úsalo cuando el cliente dice que eres más caro que la competencia."
  },
  {
    "id": "script_manejo_tenemos_proveedor",
    "label_title": "Script Manejo Tenemos Proveedor",
    "category": "negociacion",
    "content": "===parametros\n\n- proveedor_actual: {[competidor]}\n\n===prompt\n\n# No pedimos matrimonio, solo una cita\n\nRespuesta para 'Ya tenemos proveedor'.\n'Genial, [Competidor] es bueno. No pido que cambieis. Solo sugiero una comparación de 15 min para asegurar que no estáis dejando dinero sobre la mesa en [Área donde somos mejores]. Al menos tendréis una palanca para renegociar con ellos'.\n\n> Contexto crítico: Ten en cuenta competidor ({[competidor]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Script",
      "Manejo",
      "Tenemos"
    ],
    "explicacion": "Respuesta para 'Ya tenemos proveedor': no pedir matrimonio, solo una comparación. Darles palanca para renegociar.",
    "cuando_usar": "Úsalo cuando el prospecto está satisfecho con su proveedor actual."
  },
  {
    "id": "tecnica_cierre_presuntivo",
    "label_title": "Técnica Cierre Presuntivo",
    "category": "negociacion",
    "content": "===parametros\n\n- fecha_deseada: {[fecha]}\n\n===prompt\n\n# Asumir la venta\n\nScript de Cierre Presuntivo (Assumptive Close).\n'Perfecto, para llegar a la fecha de lanzamiento de {[fecha]}, necesitaríamos firmar el jueves y empezar el onboarding el lunes. ¿Os encaja ese cronograma?'.\nEnfocarse en la logística, no en la decisión.\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Técnica",
      "Cierre",
      "Presuntivo"
    ],
    "explicacion": "Script de Cierre Presuntivo (Assumptive Close): enfocarse en logística, no en la decisión. Asumir la venta.",
    "cuando_usar": "Úsalo cuando sientes que el deal está listo pero el cliente no da el paso final."
  },
  {
    "id": "tecnica_cierre_opcion_doble",
    "label_title": "Técnica Cierre Opción Doble",
    "category": "negociacion",
    "content": "===parametros\n\n- opciones: {[opcion_a_b]}\n\n===prompt\n\n# La ilusión de elección\n\nCierre de Doble Opción (Alternative Close).\n'¿Preferís empezar con el Plan Básico este mes o ir directos al Pro para aprovechar la formación incluida?'.\nCualquier respuesta es un Sí.\n\n> Contexto crítico: Ten en cuenta opcion a b ({[opcion_a_b]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Técnica",
      "Cierre",
      "Opción"
    ],
    "explicacion": "Cierre de Doble Opción (Alternative Close): ofrecer dos opciones donde cualquier respuesta es un Sí. La ilusión de elección.",
    "cuando_usar": "Úsalo cuando el cliente duda entre opciones. Cualquier respuesta cierra el deal."
  },
  {
    "id": "tecnica_cierre_puppy_dog",
    "label_title": "Técnica Cierre Puppy Dog",
    "category": "negociacion",
    "content": "===parametros\n\n- barrera_entrada: {[riesgo]}\n\n===prompt\n\n# Pruébalo y no querrás devolverlo\n\nPropuesta de 'Puppy Dog Close' (Piloto/Trial).\n'Hagamos esto: Usadlo 15 días sin compromiso. Si no veis el resultado X, lo apagamos y amigos como siempre. ¿Trato?'.\nBajar el riesgo a cero.\n\n> Contexto crítico: Ten en cuenta riesgo ({[riesgo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Técnica",
      "Cierre",
      "Puppy"
    ],
    "explicacion": "Propuesta de 'Puppy Dog Close' (Piloto/Trial): pruébalo y no querrás devolverlo. Bajar el riesgo a cero.",
    "cuando_usar": "Úsalo cuando el cliente tiene miedo al compromiso. Reduce el riesgo percibido."
  },
  {
    "id": "negociacion_harvard_mapa",
    "label_title": "Negociación Harvard Mapa",
    "category": "negociacion",
    "content": "===parametros\n\n- intereses_mios: {[mios]}\n- intereses_ellos: {[ellos]}\n\n===prompt\n\n# Ganar-Ganar real\n\nPrepara el mapa de negociación (Metodología Harvard).\nSepara POSICIONES (Lo que piden: Dto 20%) de INTERESES (Lo que necesitan: Quedar bien ante el CFO).\nBusca opciones creativas que satisfagan el interés sin ceder la posición (ej. plazos de pago, training extra).\n\n> Contexto crítico: Ten en cuenta mios ({[mios]}), ellos ({[ellos]}).\n",
    "paramCount": 2,
    "keywords": [
      "Negociación",
      "Negociación",
      "Harvard"
    ],
    "explicacion": "Preparar mapa de negociación metodología Harvard: separar posiciones de intereses, buscar opciones creativas ganar-ganar.",
    "cuando_usar": "Úsalo antes de cualquier negociación importante para prepararte estratégicamente."
  },
  {
    "id": "batna_calculo_estrategico",
    "label_title": "BATNA Cálculo Estratégico",
    "category": "negociacion",
    "content": "===parametros\n\n- oferta_minima_aceptable: {[minimo]}\n\n===prompt\n\n# Saber cuándo levantarse de la mesa\n\nDefine tu MAAN (Mejor Alternativa al Acuerdo Negociado) y el de ellos.\n¿Qué pasa si no cerramos? ¿Cuál es mi límite real?\nDa poder y calma en la negociación.\n\n> Contexto crítico: Ten en cuenta minimo ({[minimo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "BATNA",
      "Cálculo",
      "Estratégico"
    ],
    "explicacion": "Definir tu MAAN (Mejor Alternativa al Acuerdo Negociado) y el del cliente. Saber cuándo levantarse de la mesa.",
    "cuando_usar": "Úsalo antes de negociaciones críticas. Conocer tu límite da poder y calma."
  },
  {
    "id": "concesiones_matriz_intercambio",
    "label_title": "Concesiones Matriz Intercambio",
    "category": "negociacion",
    "content": "===parametros\n\n- variables: {[variables_negociables]}\n\n===prompt\n\n# Nada es gratis\n\nCrea una Matriz de Concesiones (Trading Plan).\nLista de cosas que puedes dar (Precio, Plazo, Soporte, Features).\nValor para ti (Bajo/Alto) vs Valor para ellos (Bajo/Alto).\nRegla: Nunca des una de alto costo para ti si es de bajo valor para ellos. Intercambia 'Barato para mí, Caro para ellos'.\n\n> Contexto crítico: Ten en cuenta variables negociables ({[variables_negociables]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Concesiones",
      "Matriz",
      "Intercambio"
    ],
    "explicacion": "Crear Matriz de Concesiones (Trading Plan): qué puedes dar y qué valor tiene. Nada es gratis - intercambia 'barato para ti, caro para ellos'.",
    "cuando_usar": "Úsalo para preparar qué puedes conceder y qué pedir a cambio."
  },
  {
    "id": "clausulas_contractuales_clave",
    "label_title": "Cláusulas Contractuales Clave",
    "category": "negociacion",
    "content": "===parametros\n\n- riesgo_legal: {[riesgo]}\n\n===prompt\n\n# Proteger el negocio\n\nChecklist de términos clave a revisar en el contrato (MSA).\nSLA (Service Level Agreement), Cláusula de salida (Opt-out), Renovación automática, Protección de datos.\nAlerta roja para términos que pongan en riesgo la rentabilidad.\n\n> Contexto crítico: Ten en cuenta riesgo ({[riesgo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Cláusulas",
      "Contractuales",
      "Clave"
    ],
    "explicacion": "Checklist de términos clave a revisar en contrato (MSA): SLA, opt-out, renovación automática, protección de datos.",
    "cuando_usar": "Úsalo antes de firmar para proteger el negocio. Alerta roja para términos riesgosos."
  },
  {
    "id": "email_cierre_fin_de_mes",
    "label_title": "Email Cierre Fin de Mes",
    "category": "negociacion",
    "content": "===parametros\n\n- incentivo_temporal: {[promo]}\n\n===prompt\n\n# El empujón final\n\nEmail para crear urgencia legítima a fin de mes/Q.\n'Mi manager me ha autorizado a incluir X si firmamos antes del viernes a las 5pm. Después de esa hora, volvemos a tarifa estándar'.\nUsar con precaución.\n\n> Contexto crítico: Ten en cuenta promo ({[promo]}).\n",
    "paramCount": 1,
    "keywords": [
      "Negociación",
      "Email",
      "Cierre"
    ],
    "explicacion": "Email para crear urgencia legítima a fin de mes/trimestre. Oferta limitada con deadline claro.",
    "cuando_usar": "Úsalo con precaución para el empujón final cuando tienes incentivo temporal real."
  },
  {
    "id": "onboarding_kickoff_reunion",
    "label_title": "Onboarding Kickoff Reunión",
    "category": "postventa",
    "content": "===parametros\n\n- equipo_cliente: {[nombres]}\n- milestones: {[hitos_clave]}\n\n===prompt\n\n# Empezar con el pie derecho\n\nAgenda para la reunión de Kick-off.\n1. Reconfirmar los objetivos de negocio (Value Drivers).\n2. Presentar el equipo de proyecto.\n3. Validar el cronograma y dependencias.\n4. Definir qué es 'Éxito' en los primeros 30-60-90 días.\n\n> Contexto crítico: Ten en cuenta nombres ({[nombres]}), hitos clave ({[hitos_clave]}).\n",
    "paramCount": 2,
    "keywords": [
      "Postventa",
      "Onboarding",
      "Kickoff",
      "Reunión"
    ],
    "explicacion": "Agenda para reunión de Kick-off: reconfirmar objetivos, presentar equipos, validar cronograma, definir éxito en 30-60-90 días.",
    "cuando_usar": "Úsalo inmediatamente después de cerrar para empezar con el pie derecho."
  },
  {
    "id": "qbr_business_review_trimestral",
    "label_title": "QBR Business Review Trimestral",
    "category": "postventa",
    "content": "===parametros\n\n- resultados_q: {[resultados]}\n- objetivos_q_next: {[nuevos_objetivos]}\n\n===prompt\n\n# De proveedor a partner estratégico\n\nEstructura de QBR (Quarterly Business Review).\n1. Executive Summary: ¿Cumplimos la promesa?\n2. Datos de uso y adopción.\n3. Impacto en negocio (ROI calculado).\n4. Roadmap conjunto: ¿Qué sigue? (Oportunidad de Upsell).\n\n> Contexto crítico: Ten en cuenta resultados ({[resultados]}), nuevos objetivos ({[nuevos_objetivos]}).\n",
    "paramCount": 2,
    "keywords": [
      "Postventa",
      "Business",
      "Review",
      "Trimestral"
    ],
    "explicacion": "Estructura de QBR (Quarterly Business Review): resumen ejecutivo, datos de uso, impacto en negocio, roadmap conjunto y oportunidad de upsell.",
    "cuando_usar": "Úsalo cada trimestre para pasar de proveedor a partner estratégico."
  },
  {
    "id": "plan_de_adopcion_usuario_final",
    "label_title": "Plan de Adopción Usuario Final",
    "category": "postventa",
    "content": "===parametros\n\n- resistencia_esperada: {[resistencia]}\n\n===prompt\n\n# Que lo usen de verdad\n\nPlan de gestión del cambio para usuarios finales.\n- Comunicar el 'WIIFM' (What's in it for me) para el usuario base, no solo para el jefe.\n- Plan de formación (Gamificación/Sesiones cortas).\n- Identificar 'Champions' internos para evangelizar.\n\n> Contexto crítico: Ten en cuenta resistencia ({[resistencia]}).\n",
    "paramCount": 1,
    "keywords": [
      "Postventa",
      "Adopción",
      "Usuario",
      "Final"
    ],
    "explicacion": "Plan de gestión del cambio para usuarios finales: comunicar WIIFM (What's in it for me), formación gamificada, identificar Champions internos.",
    "cuando_usar": "Úsalo cuando la adopción del producto depende de usuarios finales, no solo del comprador."
  },
  {
    "id": "identificacion_riesgo_churn",
    "label_title": "Identificación Riesgo Churn",
    "category": "postventa",
    "content": "===parametros\n\n- senales_alerta: {[senales]} → Baja actividad, cambio sponsor\n\n===prompt\n\n# Salvar al paciente\n\nChecklist de salud de cuenta.\nSi hay señales rojas (NPS bajo, bajada de uso, ticket de soporte enojado), activar 'Playbook de Riesgo'.\n- Agendar reunión ejecutiva urgente.\n- Ofrecer plan de remediación (Get well plan).\n\n> Contexto crítico: Ten en cuenta senales ({[senales]}).\n",
    "paramCount": 1,
    "keywords": [
      "Postventa",
      "Identificación",
      "Riesgo",
      "Churn"
    ],
    "explicacion": "Checklist de salud de cuenta para identificar señales de churn: baja actividad, cambio de sponsor, NPS bajo. Activar playbook de riesgo.",
    "cuando_usar": "Úsalo para monitorear cuentas y detectar problemas antes de que cancelen."
  },
  {
    "id": "playbook_renovacion_contrato",
    "label_title": "Playbook Renovación Contrato",
    "category": "postventa",
    "content": "===parametros\n\n- dias_vencimiento: 90\n\n===prompt\n\n# No esperar al último día\n\nCronograma de renovación T-90.\nT-90: Validar satisfacción y ROI con Champion.\nT-60: Presentar propuesta de renovación (+ Upsell).\nT-30: Enviar contrato legal.\nT-0: Firma.\nEvitar sorpresas.\n",
    "paramCount": 1,
    "keywords": [
      "Postventa",
      "Playbook",
      "Renovación",
      "Contrato"
    ],
    "explicacion": "Cronograma de renovación T-90: validar satisfacción, presentar propuesta + upsell, enviar contrato legal, firma. No esperar al último día.",
    "cuando_usar": "Úsalo desde 90 días antes del vencimiento de cualquier contrato."
  },
  {
    "id": "estrategia_upsell_cross_sell",
    "label_title": "Estrategia Upsell Cross-Sell",
    "category": "postventa",
    "content": "===parametros\n\n- producto_actual: {[producto_a]}\n- producto_nuevo: {[producto_b]}\n\n===prompt\n\n# ¿Quieres patatas con eso?\n\nScript para expandir la cuenta.\n'Como ya estáis teniendo éxito con A, muchos clientes similares han agregado B para acelerar [Resultado]. ¿Tiene sentido explorarlo?'.\nContextual, no intrusivo.\n\n> Contexto crítico: Ten en cuenta producto a ({[producto_a]}), producto b ({[producto_b]}).\n",
    "paramCount": 2,
    "keywords": [
      "Postventa",
      "Estrategia",
      "Upsell",
      "Cross-Sell"
    ],
    "explicacion": "Script para expandir la cuenta: contextual, no intrusivo. '¿Quieres patatas con eso?' adaptado a B2B.",
    "cuando_usar": "Úsalo cuando el cliente tiene éxito con producto A y hay oportunidad de producto B."
  },
  {
    "id": "recoleccion_testimonios_video",
    "label_title": "Recolección Testimonios Video",
    "category": "postventa",
    "content": "===parametros\n\n- cliente_feliz: {[nombre]}\n\n===prompt\n\n# La prueba definitiva\n\nGuion para que el cliente grabe un testimonio (sin guionizarlo demasiado).\nPreguntas:\n1. ¿Cuál era el mayor dolor antes de nosotros?\n2. ¿Cómo fue la experiencia de implementación?\n3. ¿Qué resultado específico habéis logrado?\n\n> Contexto crítico: Ten en cuenta nombre ({[nombre]}).\n",
    "paramCount": 1,
    "keywords": [
      "Postventa",
      "Recolección",
      "Testimonios",
      "Video"
    ],
    "explicacion": "Guión para que el cliente grabe testimonio sin sobre-guionizar. 3 preguntas clave: dolor anterior, experiencia, resultado. La prueba definitiva.",
    "cuando_usar": "Úsalo cuando tienes un cliente feliz dispuesto a dar testimonio público."
  },
  {
    "id": "gestion_crisis_cliente_enfadado",
    "label_title": "Gestión Crisis Cliente Enfadado",
    "category": "postventa",
    "content": "===parametros\n\n- incidencia: {[incidencia]}\n\n===prompt\n\n# Desescalar el fuego\n\nProtocolo L.A.S.T. para clientes furiosos.\nListen (Escuchar sin interrumpir).\nApoligize (Disculparse sinceramente, sin excusas).\nSolve (Proponer solución inmediata).\nThank (Agradecer el feedback).\nScript de email post-crisis.\n\n> Contexto crítico: Ten en cuenta incidencia ({[incidencia]}).\n",
    "paramCount": 1,
    "keywords": [
      "Postventa",
      "Gestión",
      "Crisis",
      "Cliente"
    ],
    "explicacion": "Protocolo L.A.S.T. para clientes furiosos: Listen, Apologize, Solve, Thank. Desescalar el fuego.",
    "cuando_usar": "Úsalo cuando un cliente está enfadado y necesitas desescalar rápidamente."
  },
  {
    "id": "analisis_post_mortem_deal_perdido",
    "label_title": "Análisis Post Mortem Deal Perdido",
    "category": "analisis",
    "content": "===parametros\n\n- oportunidad: {[nombre_deal]}\n\n===prompt\n\n# Aprender de la derrota\n\nFormato de autopsia de deal.\n¿Fue el fit? ¿Fue el precio? ¿Fue nuestra venta?\n¿Hubo señales que ignoramos?\nQué haríamos diferente la próxima vez.\nSin culpas, solo aprendizaje.\n\n> Contexto crítico: Ten en cuenta nombre deal ({[nombre_deal]}).\n",
    "paramCount": 1,
    "keywords": [
      "Análisis",
      "Análisis",
      "Mortem",
      "Perdido"
    ],
    "explicacion": "Formato de autopsia de deal: ¿Fue fit, precio, o nuestra venta? ¿Qué señales ignoramos? Sin culpas, solo aprendizaje.",
    "cuando_usar": "Úsalo después de perder un deal importante para aprender de la derrota."
  },
  {
    "id": "prompt_ingenieria_para_ventas_base",
    "label_title": "Prompt Ingeniería para Ventas Base",
    "category": "analisis",
    "content": "===parametros\n\n- tarea_repetitiva: {[tarea]}\n\n===prompt\n\n# Automatizar lo aburrido\n\nMeta-prompt para crear prompts.\n'Ayúdame a crear un prompt para automatizar {[tarea]}. El prompt debe tener un Rol, Contexto, Instrucción paso a paso y formato de salida'.\nPara que el vendedor cree sus propias herramientas.\n",
    "paramCount": 1,
    "keywords": [
      "Análisis",
      "Prompt",
      "Ingeniería",
      "Ventas"
    ],
    "explicacion": "Meta-prompt para crear prompts propios: definir Rol, Contexto, Instrucción paso a paso y formato de salida. Automatizar lo aburrido.",
    "cuando_usar": "Úsalo para que el vendedor cree sus propias herramientas de IA."
  },
  {
    "id": "auditoria_higiene_datos_crm",
    "label_title": "Auditoría Higiene Datos CRM",
    "category": "analisis",
    "content": "===parametros\n\n- campos_clave: {[lista_campos]}\n\n===prompt\n\n# Garbage in, Garbage out\n\nReglas de validación para el CRM.\n- Ningún deal en etapa 'Negociación' sin fecha de cierre futura.\n- Ningún contacto sin email.\n- Ninguna oportunidad sin 'Next Step' loggeado.\n\n> Contexto crítico: Ten en cuenta lista campos ({[lista_campos]}).\n",
    "paramCount": 1,
    "keywords": [
      "Análisis",
      "Auditoría",
      "Higiene",
      "Datos"
    ],
    "explicacion": "Reglas de validación para el CRM: ningún deal en negociación sin fecha, ningún contacto sin email, ninguna oportunidad sin next step. Garbage in, garbage out.",
    "cuando_usar": "Úsalo mensualmente para mantener datos limpios y forecast confiable."
  },
  {
    "id": "calculadora_comision_vendedor",
    "label_title": "Calculadora Comisión Vendedor",
    "category": "analisis",
    "content": "===parametros\n\n- venta_cerrada: {[monto]}\n- tabla_comisiones: {[tabla]}\n\n===prompt\n\n# Cuánto gané hoy\n\nFórmula simple o script para que el vendedor calcule su comisión estimada por un deal.\nMotivación inmediata.\n\n> Contexto crítico: Ten en cuenta monto ({[monto]}), tabla ({[tabla]}).\n",
    "paramCount": 2,
    "keywords": [
      "Análisis",
      "Calculadora",
      "Comisión",
      "Vendedor"
    ],
    "explicacion": "Fórmula simple para que el vendedor calcule su comisión estimada por deal. Motivación inmediata: cuánto gané hoy.",
    "cuando_usar": "Úsalo para motivar al equipo mostrando impacto inmediato de cada cierre."
  },
  {
    "id": "plan_semanal_vendedor_top_performer",
    "label_title": "Plan Semanal Vendedor Top Performer",
    "category": "analisis",
    "content": "===parametros\n\n- meta_semanal: {[meta]}\n\n===prompt\n\n# Ganar la semana\n\nEstructura de planificación de domingo noche.\n- Revisar calendario (¿Tengo suficientes demos?).\n- Revisar pipeline (¿Qué tengo que empujar?).\n- Bloquear tiempo de prospección inamovible.\n\n> Contexto crítico: Ten en cuenta meta ({[meta]}).\n",
    "paramCount": 1,
    "keywords": [
      "Análisis",
      "Semanal",
      "Vendedor",
      "Performer"
    ],
    "explicacion": "Estructura de planificación de domingo noche: revisar calendario, revisar pipeline, bloquear tiempo de prospección. Ganar la semana.",
    "cuando_usar": "Úsalo cada domingo para planificar la semana ganadora."
  },
  {
    "id": "checklist_preparacion_cierre_trimestre",
    "label_title": "Checklist Preparacion Cierre Trimestre",
    "category": "general",
    "content": "===parametros\n\n- semana_actual: {[semana_q]}\n\n===prompt\n\n# El sprint final\n\nLista de verificación para la última semana del Q.\n- Confirmar pasos legales/compras de todos los commits.\n- Tener plan B para los 'Best Case'.\n- Negociar internamente aprobaciones especiales por adelantado.\n\n> Contexto crítico: Ten en cuenta semana q ({[semana_q]}).\n",
    "paramCount": 0,
    "keywords": [
      "General",
      "Checklist",
      "Preparacion",
      "Cierre"
    ],
    "explicacion": "Prompt para uso comercial.",
    "cuando_usar": "Consulta el contexto del prompt para determinar uso."
  },
  {
    "id": "ventas_plan_territorial_cuentas",
    "label_title": "Plan Territorial de Cuentas",
    "category": "ventas",
    "content": "===parametros\n\n- territorio: {[territorio]} → Región o segmento a planificar\n- num_cuentas: {[num_cuentas]} → Número total de cuentas en el territorio\n- criterios: {[criterios]} → Criterios de priorización (revenue, potencial, fit)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos y qué se anexa; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Plan Territorial\", \"Account Planning\", \"Segmentación\", \"Revenue\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar un plan territorial que segmente y priorice cuentas por potencial de revenue, alineando recursos comerciales con oportunidades de mayor impacto.\n\n# Arquetipo Experto\n\nActúa como un **VP de Ventas** experto en territory planning y account-based selling con experiencia en empresas B2B de alta complejidad.\n\n# Parámetros\n\n- territorio: {[territorio]} → Región o segmento a planificar\n- num_cuentas: {[num_cuentas]} → Número total de cuentas en el territorio\n- criterios: {[criterios]} → Criterios de priorización (revenue, potencial, fit)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos y qué se anexa)\n\n# Checklist\n\n- [ ] Analizar y comprender los parámetros y requisitos\n- [ ] Identificar el tipo de entregable y formato apropiado\n- [ ] Aplicar metodología y proceso especificado\n- [ ] Generar contenido completo y estructurado\n- [ ] Aplicar estándares de calidad y profesionalismo\n- [ ] Validar completitud y coherencia del entregable\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y requisitos.\n2. **Diseño**: Planificar estructura y contenido del entregable.\n3. **Creación**: Generar contenido completo y estructurado.\n4. **Validación**: Verificar completitud, coherencia y calidad.\n5. **Entrega**: Proporcionar resultado final listo para uso inmediato.\n\n# Entregable Esperado\n\nPlan territorial con segmentación ABC, asignación de recursos por tier, calendario de cobertura y forecast por cuenta",
    "paramCount": 4,
    "keywords": [
      "Plan Territorial",
      "Account Planning",
      "Segmentación",
      "Revenue"
    ]
  }
];
