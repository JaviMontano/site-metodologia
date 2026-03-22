window.promptsMarketing = [
  {
    "id": "mkt_a",
    "label_title": "Aprueba y Avanza",
    "category": "meta",
    "content": "Aprobado. Procede con la campaña/pieza. Revisa métricas de referencia antes de lanzar.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "mkt_e",
    "label_title": "Eleva Creatividad",
    "category": "meta",
    "content": "Aplica un bucle de excelencia creativa: evalúa el copy/diseño actual contra los mejores benchmarks del sector. Identifica 3 mejoras de alto impacto y aplícalas. El resultado debe ser memorable, no genérico.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "mkt_s",
    "label_title": "Sintetiza Métricas",
    "category": "meta",
    "content": "Sintetiza las métricas clave de las campañas/canales activos. Consolida un resumen ejecutivo con: performance por canal, ROI, tendencia vs período anterior, y 3 acciones recomendadas.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "mkt_r",
    "label_title": "Revisa Performance",
    "category": "meta",
    "content": "Revisa el performance del último período. Identifica qué funcionó, qué no, y por qué. Propón 3 optimizaciones con impacto estimado.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "mkt_c",
    "label_title": "Crea Brief Creativo",
    "category": "meta",
    "content": "Crea un brief creativo rápido: objetivo, audiencia, mensaje clave, tono, formato y CTA. Máximo 1 página.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "mkt_posicionamiento_marca",
    "label_title": "Posicionamiento de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- competidores: {[competidores]} → 3-5 competidores principales\n- audiencia: {[audiencia]} → Audiencia objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Posicionamiento\", \"Branding\", \"Diferenciación\"]\n\n===prompt\n\n# Objetivo\n\nDefinir posicionamiento diferenciador articulando propuesta de valor única frente a competidores.\n\n# Arquetipo Experto\n\nActúa como un **Brand Strategist Senior** con 15 años posicionando marcas en mercados competitivos.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- competidores: {[competidores]} → 3-5 competidores principales\n- audiencia: {[audiencia]} → Audiencia objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nCanvas de posicionamiento con statement, proof points, reason to believe, elevator pitch y framework de mensajes",
    "paramCount": 4,
    "keywords": [
      "Posicionamiento",
      "Branding",
      "Diferenciación"
    ]
  },
  {
    "id": "mkt_brand_voice",
    "label_title": "Guía de Voz de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- personalidad: {[personalidad]} → 3-5 adjetivos de personalidad\n- audiencia: {[audiencia]} → Audiencia principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Brand Voice\", \"Tono\", \"Comunicación\"]\n\n===prompt\n\n# Objetivo\n\nCrear guía de voz y tono que asegure consistencia en toda la comunicación.\n\n# Arquetipo Experto\n\nActúa como un **Director Creativo** especializado en identidad verbal y brand guidelines.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- personalidad: {[personalidad]} → 3-5 adjetivos de personalidad\n- audiencia: {[audiencia]} → Audiencia principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nGuía con personalidad, do's & don'ts, ejemplos por canal, escala de formalidad y templates",
    "paramCount": 4,
    "keywords": [
      "Brand Voice",
      "Tono",
      "Comunicación"
    ]
  },
  {
    "id": "mkt_arquitectura_marca",
    "label_title": "Arquitectura de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- empresa: {[empresa]} → Nombre de la empresa\n- productos: {[productos]} → Lista de productos\n- mercados: {[mercados]} → Mercados objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Arquitectura\", \"Portfolio\", \"Marca\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar arquitectura de marca para portafolio de productos/servicios.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Branding Corporativo** experto en arquitecturas monolítica, endorsed y house of brands.\n\n# Parámetros\n\n- empresa: {[empresa]} → Nombre de la empresa\n- productos: {[productos]} → Lista de productos\n- mercados: {[mercados]} → Mercados objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nDiagrama de arquitectura con modelo recomendado, jerarquía visual, reglas de naming y roadmap",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Portfolio",
      "Marca"
    ]
  },
  {
    "id": "mkt_audit_marca",
    "label_title": "Auditoría de Percepción de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- canales: {[canales]} → Canales a auditar\n- competidores: {[competidores]} → Competidores de referencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Auditoría\", \"Percepción\", \"Gap\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar percepción de marca detectando gaps entre identidad deseada e imagen percibida.\n\n# Arquetipo Experto\n\nActúa como un **Investigador de Marca** con experiencia en estudios cuali-cuantitativos.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- canales: {[canales]} → Canales a auditar\n- competidores: {[competidores]} → Competidores de referencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte con mapa perceptual, gaps, verbatims clave, score por atributo y plan de cierre",
    "paramCount": 4,
    "keywords": [
      "Auditoría",
      "Percepción",
      "Gap"
    ]
  },
  {
    "id": "mkt_rebranding",
    "label_title": "Estrategia de Rebranding",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Marca actual\n- razon: {[razon]} → Razón del rebranding\n- timeline: {[timeline]} → Timeline disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Rebranding\", \"Evolución\", \"Identidad\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar rebranding que evolucione la marca sin perder equity acumulado.\n\n# Arquetipo Experto\n\nActúa como un **Director de Branding** que ha liderado 10+ rebrandings exitosos.\n\n# Parámetros\n\n- marca: {[marca]} → Marca actual\n- razon: {[razon]} → Razón del rebranding\n- timeline: {[timeline]} → Timeline disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con diagnóstico, nueva plataforma de marca, roadmap, comunicación interna/externa y métricas",
    "paramCount": 4,
    "keywords": [
      "Rebranding",
      "Evolución",
      "Identidad"
    ]
  },
  {
    "id": "mkt_naming",
    "label_title": "Naming de Producto",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- categoria: {[categoria]} → Categoría del producto\n- atributos: {[atributos]} → Atributos a comunicar\n- restricciones: {[restricciones]} → Restricciones legales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Naming\", \"Creatividad\", \"Producto\"]\n\n===prompt\n\n# Objetivo\n\nGenerar opciones de nombre siguiendo criterios estratégicos y legales.\n\n# Arquetipo Experto\n\nActúa como un **Especialista en Naming** con experiencia en nombres registrables y memorables.\n\n# Parámetros\n\n- categoria: {[categoria]} → Categoría del producto\n- atributos: {[atributos]} → Atributos a comunicar\n- restricciones: {[restricciones]} → Restricciones legales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\n10 opciones con rationale, disponibilidad estimada, score por criterio y top 3 recomendados",
    "paramCount": 4,
    "keywords": [
      "Naming",
      "Creatividad",
      "Producto"
    ]
  },
  {
    "id": "mkt_storytelling",
    "label_title": "Storytelling de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- origen: {[origen]} → Historia de origen\n- valores: {[valores]} → Valores fundamentales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Storytelling\", \"Narrativa\", \"Conexión\"]\n\n===prompt\n\n# Objetivo\n\nCrear narrativa central de marca que conecte emocionalmente con la audiencia.\n\n# Arquetipo Experto\n\nActúa como un **Storyteller Corporativo** experto en narrativas que generan lealtad.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- origen: {[origen]} → Historia de origen\n- valores: {[valores]} → Valores fundamentales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nNarrativa con historia de origen, arco, hero's journey adaptado, mensajes clave y guía de aplicación",
    "paramCount": 4,
    "keywords": [
      "Storytelling",
      "Narrativa",
      "Conexión"
    ]
  },
  {
    "id": "mkt_partnership",
    "label_title": "Estrategia Brand Partnership",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Tu marca\n- objetivo: {[objetivo]} → Objetivo de la alianza\n- perfil_partner: {[perfil_partner]} → Perfil del partner ideal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Co-branding\", \"Alianzas\", \"Partnership\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar alianzas de marca que amplifiquen reach y credibilidad.\n\n# Arquetipo Experto\n\nActúa como un **Director de Alianzas** con track record en co-brandings de alto impacto.\n\n# Parámetros\n\n- marca: {[marca]} → Tu marca\n- objetivo: {[objetivo]} → Objetivo de la alianza\n- perfil_partner: {[perfil_partner]} → Perfil del partner ideal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFramework con criterios de selección, modelo de evaluación, propuesta tipo y governance",
    "paramCount": 4,
    "keywords": [
      "Co-branding",
      "Alianzas",
      "Partnership"
    ]
  },
  {
    "id": "mkt_crisis_marca",
    "label_title": "Protocolo de Crisis de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- escenarios: {[escenarios]} → Escenarios de riesgo\n- portavoces: {[portavoces]} → Portavoces autorizados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Crisis\", \"Reputación\", \"Protocolo\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar protocolo de comunicación de crisis para proteger reputación.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Crisis** con experiencia en gestión de crisis de marcas.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- escenarios: {[escenarios]} → Escenarios de riesgo\n- portavoces: {[portavoces]} → Portavoces autorizados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlaybook con matriz de escenarios, protocolos por severidad, templates y cadena de escalamiento",
    "paramCount": 4,
    "keywords": [
      "Crisis",
      "Reputación",
      "Protocolo"
    ]
  },
  {
    "id": "mkt_brand_equity",
    "label_title": "Medición de Brand Equity",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- industria: {[industria]} → Industria\n- frecuencia: {[frecuencia]} → Frecuencia de medición\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Brand Equity\", \"Valor\", \"Métricas\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar framework de medición del valor de marca con métricas tangibles.\n\n# Arquetipo Experto\n\nActúa como un **Analista de Brand Equity** con experiencia en modelos Interbrand/BrandZ.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- industria: {[industria]} → Industria\n- frecuencia: {[frecuencia]} → Frecuencia de medición\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFramework con KPIs por dimensión, benchmark sectorial, dashboard y cadencia de medición",
    "paramCount": 4,
    "keywords": [
      "Brand Equity",
      "Valor",
      "Métricas"
    ]
  },
  {
    "id": "mkt_calendario_editorial",
    "label_title": "Calendario Editorial Mensual",
    "category": "contenidos",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- objetivos: {[objetivos]} → Objetivos del mes\n- canales: {[canales]} → Canales activos\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Calendario\", \"Content Plan\", \"Editorial\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar calendario editorial mensual con mix de formatos alineados a objetivos de negocio.\n\n# Arquetipo Experto\n\nActúa como un **Content Marketing Manager** con experiencia en estrategia multiplataforma.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- objetivos: {[objetivos]} → Objetivos del mes\n- canales: {[canales]} → Canales activos\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nCalendario con 20+ piezas, asignación por canal, KPIs y workflow de producción",
    "paramCount": 4,
    "keywords": [
      "Calendario",
      "Content Plan",
      "Editorial"
    ]
  },
  {
    "id": "mkt_copywriting_conversion",
    "label_title": "Copywriting de Conversión",
    "category": "contenidos",
    "content": "===parametros\n\n- producto: {[producto]} → Producto o servicio\n- audiencia: {[audiencia]} → Audiencia target\n- accion: {[accion]} → Acción deseada\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Copywriting\", \"Conversión\", \"Persuasión\"]\n\n===prompt\n\n# Objetivo\n\nEscribir copy persuasivo usando PAS/AIDA/BAB para maximizar conversiones.\n\n# Arquetipo Experto\n\nActúa como un **Copywriter de Conversión** con tasa promedio superior al 5%.\n\n# Parámetros\n\n- producto: {[producto]} → Producto o servicio\n- audiencia: {[audiencia]} → Audiencia target\n- accion: {[accion]} → Acción deseada\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\n3 variantes de copy con headline, body, bullets, CTA y variante de urgencia",
    "paramCount": 4,
    "keywords": [
      "Copywriting",
      "Conversión",
      "Persuasión"
    ]
  },
  {
    "id": "mkt_pillar_content",
    "label_title": "Estrategia Pillar Content",
    "category": "contenidos",
    "content": "===parametros\n\n- tema_central: {[tema_central]} → Tema central del pilar\n- subtemas: {[subtemas]} → 5-10 subtemas\n- competidores: {[competidores]} → URLs competidoras\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Pillar Page\", \"SEO\", \"Content Strategy\"]\n\n===prompt\n\n# Objetivo\n\nCrear estrategia de pillar pages con topic clusters para dominar búsquedas.\n\n# Arquetipo Experto\n\nActúa como un **Content Strategist** experto en arquitectura de contenidos SEO.\n\n# Parámetros\n\n- tema_central: {[tema_central]} → Tema central del pilar\n- subtemas: {[subtemas]} → 5-10 subtemas\n- competidores: {[competidores]} → URLs competidoras\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nMapa hub-spoke, brief por cluster, internal linking plan y calendario",
    "paramCount": 4,
    "keywords": [
      "Pillar Page",
      "SEO",
      "Content Strategy"
    ]
  },
  {
    "id": "mkt_repurposing",
    "label_title": "Plan de Repurposing",
    "category": "contenidos",
    "content": "===parametros\n\n- contenido: {[contenido]} → Pieza original\n- canales: {[canales]} → Canales de distribución\n- formatos: {[formatos]} → Formatos deseados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Repurposing\", \"Multi-formato\", \"Eficiencia\"]\n\n===prompt\n\n# Objetivo\n\nReciclar una pieza de contenido en 10+ formatos diferentes.\n\n# Arquetipo Experto\n\nActúa como un **Content Strategist** especializado en maximizar ROI de contenido.\n\n# Parámetros\n\n- contenido: {[contenido]} → Pieza original\n- canales: {[canales]} → Canales de distribución\n- formatos: {[formatos]} → Formatos deseados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con 10+ derivados, adaptación por canal y estimación de impacto",
    "paramCount": 4,
    "keywords": [
      "Repurposing",
      "Multi-formato",
      "Eficiencia"
    ]
  },
  {
    "id": "mkt_blog_seo",
    "label_title": "Blog Post SEO",
    "category": "contenidos",
    "content": "===parametros\n\n- keyword: {[keyword]} → Keyword principal\n- intent: {[intent]} → Intent de búsqueda\n- longitud: {[longitud]} → Longitud target\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Blog\", \"SEO\", \"Contenido\"]\n\n===prompt\n\n# Objetivo\n\nEscribir blog post optimizado para posicionar en top 3 de Google.\n\n# Arquetipo Experto\n\nActúa como un **SEO Content Writer** con track record en top 3.\n\n# Parámetros\n\n- keyword: {[keyword]} → Keyword principal\n- intent: {[intent]} → Intent de búsqueda\n- longitud: {[longitud]} → Longitud target\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPost completo con H1-H4 optimizados, meta description, schema markup y checklist on-page",
    "paramCount": 4,
    "keywords": [
      "Blog",
      "SEO",
      "Contenido"
    ]
  },
  {
    "id": "mkt_guion_video",
    "label_title": "Guion de Video",
    "category": "contenidos",
    "content": "===parametros\n\n- tema: {[tema]} → Tema del video\n- plataforma: {[plataforma]} → Plataforma\n- audiencia: {[audiencia]} → Nivel de audiencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Video\", \"Guion\", \"Retención\"]\n\n===prompt\n\n# Objetivo\n\nEscribir guion para video de 5-15 min optimizado para retención.\n\n# Arquetipo Experto\n\nActúa como un **Video Scriptwriter** especializado en contenido de alta retención.\n\n# Parámetros\n\n- tema: {[tema]} → Tema del video\n- plataforma: {[plataforma]} → Plataforma\n- audiencia: {[audiencia]} → Nivel de audiencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nGuion con hook, 3 actos, timestamps, pattern interrupts y CTA final",
    "paramCount": 4,
    "keywords": [
      "Video",
      "Guion",
      "Retención"
    ]
  },
  {
    "id": "mkt_lead_magnet",
    "label_title": "Diseño de Lead Magnet",
    "category": "contenidos",
    "content": "===parametros\n\n- audiencia: {[audiencia]} → Audiencia target\n- dolor: {[dolor]} → Pain point principal\n- formato: {[formato]} → Formato preferido\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Lead Magnet\", \"Conversión\", \"Generación\"]\n\n===prompt\n\n# Objetivo\n\nCrear lead magnet irresistible que convierta visitantes en leads.\n\n# Arquetipo Experto\n\nActúa como un **Growth Specialist** con lead magnets de conversión >15%.\n\n# Parámetros\n\n- audiencia: {[audiencia]} → Audiencia target\n- dolor: {[dolor]} → Pain point principal\n- formato: {[formato]} → Formato preferido\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nLead magnet con título, contenido, landing copy, thank you page y secuencia follow-up",
    "paramCount": 4,
    "keywords": [
      "Lead Magnet",
      "Conversión",
      "Generación"
    ]
  },
  {
    "id": "mkt_caso_exito",
    "label_title": "Caso de Éxito Persuasivo",
    "category": "contenidos",
    "content": "===parametros\n\n- cliente: {[cliente]} → Nombre del cliente\n- problema: {[problema]} → Problema inicial\n- solucion: {[solucion]} → Solución implementada\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Case Study\", \"Social Proof\", \"Resultados\"]\n\n===prompt\n\n# Objetivo\n\nEstructurar caso de éxito que demuestre resultados concretos.\n\n# Arquetipo Experto\n\nActúa como un **Content Marketer B2B** que acelera decisiones de compra con case studies.\n\n# Parámetros\n\n- cliente: {[cliente]} → Nombre del cliente\n- problema: {[problema]} → Problema inicial\n- solucion: {[solucion]} → Solución implementada\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nCaso con resumen, desafío, solución, resultados con números, quotes y CTA",
    "paramCount": 4,
    "keywords": [
      "Case Study",
      "Social Proof",
      "Resultados"
    ]
  },
  {
    "id": "mkt_whitepaper",
    "label_title": "Estructura de Whitepaper",
    "category": "contenidos",
    "content": "===parametros\n\n- tema: {[tema]} → Tema del whitepaper\n- audiencia: {[audiencia]} → Audiencia target\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Whitepaper\", \"Thought Leadership\", \"B2B\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar whitepaper de thought leadership que posicione como autoridad.\n\n# Arquetipo Experto\n\nActúa como un **Content Director B2B** con whitepapers que generan pipeline.\n\n# Parámetros\n\n- tema: {[tema]} → Tema del whitepaper\n- audiencia: {[audiencia]} → Audiencia target\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstructura con título, abstract, 5-7 secciones, data points y plan de distribución",
    "paramCount": 4,
    "keywords": [
      "Whitepaper",
      "Thought Leadership",
      "B2B"
    ]
  },
  {
    "id": "mkt_ebook",
    "label_title": "Outline de E-book",
    "category": "contenidos",
    "content": "===parametros\n\n- tema: {[tema]} → Tema del e-book\n- capitulos: {[capitulos]} → Número de capítulos\n- nivel: {[nivel]} → Nivel\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"E-book\", \"Educativo\", \"Lead Gen\"]\n\n===prompt\n\n# Objetivo\n\nCrear outline de e-book educativo que genere autoridad y leads.\n\n# Arquetipo Experto\n\nActúa como un **Autor de E-books Corporativos** descargados 10K+ veces.\n\n# Parámetros\n\n- tema: {[tema]} → Tema del e-book\n- capitulos: {[capitulos]} → Número de capítulos\n- nivel: {[nivel]} → Nivel\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nOutline con capítulos, key takeaways, diseño sugerido y plan de promoción",
    "paramCount": 4,
    "keywords": [
      "E-book",
      "Educativo",
      "Lead Gen"
    ]
  },
  {
    "id": "mkt_ugc",
    "label_title": "Estrategia UGC",
    "category": "contenidos",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- plataformas: {[plataformas]} → Plataformas\n- incentivos: {[incentivos]} → Incentivos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"UGC\", \"Comunidad\", \"Social Proof\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar programa de contenido generado por usuarios.\n\n# Arquetipo Experto\n\nActúa como un **Community Marketing Manager** experto en UGC viral.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- plataformas: {[plataformas]} → Plataformas\n- incentivos: {[incentivos]} → Incentivos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPrograma con mecánica, guidelines, moderación, amplificación y métricas",
    "paramCount": 4,
    "keywords": [
      "UGC",
      "Comunidad",
      "Social Proof"
    ]
  },
  {
    "id": "mkt_plan_redes",
    "label_title": "Plan Integral de Redes Sociales",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- plataformas: {[plataformas]} → Plataformas activas\n- objetivo: {[objetivo]} → Objetivo principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Social Media\", \"Plan\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan con objetivos, pilares y métricas por plataforma.\n\n# Arquetipo Experto\n\nActúa como un **Social Media Strategist** con crecimiento orgánico demostrable.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- plataformas: {[plataformas]} → Plataformas activas\n- objetivo: {[objetivo]} → Objetivo principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con pilares, mix 80/20, calendario semanal y dashboard",
    "paramCount": 4,
    "keywords": [
      "Social Media",
      "Plan",
      "Estrategia"
    ]
  },
  {
    "id": "mkt_community",
    "label_title": "Community Management",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- comunidad: {[comunidad]} → Tipo de comunidad\n- plataforma: {[plataforma]} → Plataforma principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Community\", \"Engagement\", \"Moderación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar gestión de comunidad que fomente engagement y loyalty.\n\n# Arquetipo Experto\n\nActúa como un **Community Manager Senior** con 50K+ miembros.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- comunidad: {[comunidad]} → Tipo de comunidad\n- plataforma: {[plataforma]} → Plataforma principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlaybook con protocolos de respuesta, escalamiento y métricas",
    "paramCount": 4,
    "keywords": [
      "Community",
      "Engagement",
      "Moderación"
    ]
  },
  {
    "id": "mkt_social_listening",
    "label_title": "Framework Social Listening",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Marca a monitorear\n- competidores: {[competidores]} → Competidores\n- keywords: {[keywords]} → Keywords de industria\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Listening\", \"Monitoreo\", \"Insights\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar social listening para monitorear marca y tendencias.\n\n# Arquetipo Experto\n\nActúa como un **Analista de Social Intelligence**.\n\n# Parámetros\n\n- marca: {[marca]} → Marca a monitorear\n- competidores: {[competidores]} → Competidores\n- keywords: {[keywords]} → Keywords de industria\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFramework con queries, alertas, cadencia de reportes y template de insights",
    "paramCount": 4,
    "keywords": [
      "Listening",
      "Monitoreo",
      "Insights"
    ]
  },
  {
    "id": "mkt_influencer",
    "label_title": "Estrategia Influencer",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- presupuesto: {[presupuesto]} → Presupuesto\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Influencer\", \"KOL\", \"Colaboraciones\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar programa de influencers con selección, briefing y medición.\n\n# Arquetipo Experto\n\nActúa como un **Influencer Marketing Manager** con 50+ campañas.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- presupuesto: {[presupuesto]} → Presupuesto\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia con criterios, matrix, brief template y métricas",
    "paramCount": 4,
    "keywords": [
      "Influencer",
      "KOL",
      "Colaboraciones"
    ]
  },
  {
    "id": "mkt_video_corto",
    "label_title": "Script Video Corto",
    "category": "social_media",
    "content": "===parametros\n\n- tema: {[tema]} → Tema\n- plataforma: {[plataforma]} → Plataforma\n- hook: {[hook]} → Tipo de hook\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Short-form\", \"Video\", \"Viral\"]\n\n===prompt\n\n# Objetivo\n\nEscribir script para video 15-60s optimizado para engagement.\n\n# Arquetipo Experto\n\nActúa como un **Creative Director** de short-form con 1M+ views.\n\n# Parámetros\n\n- tema: {[tema]} → Tema\n- plataforma: {[plataforma]} → Plataforma\n- hook: {[hook]} → Tipo de hook\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nScript con hook, setup, payoff, CTA, 3 variantes y dirección",
    "paramCount": 4,
    "keywords": [
      "Short-form",
      "Video",
      "Viral"
    ]
  },
  {
    "id": "mkt_linkedin",
    "label_title": "Estrategia LinkedIn",
    "category": "social_media",
    "content": "===parametros\n\n- perfil: {[perfil]} → Tipo de perfil\n- objetivo: {[objetivo]} → Objetivo\n- frecuencia: {[frecuencia]} → Frecuencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"LinkedIn\", \"B2B\", \"Social Selling\"]\n\n===prompt\n\n# Objetivo\n\nPlan de LinkedIn para marca personal/empresa que genere pipeline.\n\n# Arquetipo Experto\n\nActúa como un **LinkedIn Strategist** en top 1% de engagement.\n\n# Parámetros\n\n- perfil: {[perfil]} → Tipo de perfil\n- objetivo: {[objetivo]} → Objetivo\n- frecuencia: {[frecuencia]} → Frecuencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con optimización de perfil, pilares, calendario y proceso de DM",
    "paramCount": 4,
    "keywords": [
      "LinkedIn",
      "B2B",
      "Social Selling"
    ]
  },
  {
    "id": "mkt_tiktok",
    "label_title": "Estrategia TikTok",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- nicho: {[nicho]} → Nicho\n- recurso: {[recurso]} → Recursos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"TikTok\", \"Short-form\", \"Orgánico\"]\n\n===prompt\n\n# Objetivo\n\nPlan de TikTok que genere reach orgánico y comunidad.\n\n# Arquetipo Experto\n\nActúa como un **TikTok Strategist** con cuentas de 0 a 100K.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- nicho: {[nicho]} → Nicho\n- recurso: {[recurso]} → Recursos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia con análisis de nicho, 5 formatos, hooks database y métricas",
    "paramCount": 4,
    "keywords": [
      "TikTok",
      "Short-form",
      "Orgánico"
    ]
  },
  {
    "id": "mkt_crisis_redes",
    "label_title": "Protocolo Crisis en Redes",
    "category": "social_media",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- equipo: {[equipo]} → Equipo\n- escenarios: {[escenarios]} → Escenarios de riesgo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Crisis\", \"Redes Sociales\", \"Protocolo\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar protocolo de respuesta ante crisis en redes sociales.\n\n# Arquetipo Experto\n\nActúa como un **Social Media Crisis Manager**.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- equipo: {[equipo]} → Equipo\n- escenarios: {[escenarios]} → Escenarios de riesgo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nProtocolo con severidad, árbol de decisión, templates y debrief",
    "paramCount": 4,
    "keywords": [
      "Crisis",
      "Redes Sociales",
      "Protocolo"
    ]
  },
  {
    "id": "mkt_paid_social",
    "label_title": "Estrategia Paid Social",
    "category": "social_media",
    "content": "===parametros\n\n- plataforma: {[plataforma]} → Plataforma\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Paid Social\", \"Ads\", \"Segmentación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar publicidad en redes con segmentación y creatividades.\n\n# Arquetipo Experto\n\nActúa como un **Performance Marketing Manager** certificado.\n\n# Parámetros\n\n- plataforma: {[plataforma]} → Plataforma\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con estructura de campañas, segmentación, creatividades y optimización",
    "paramCount": 4,
    "keywords": [
      "Paid Social",
      "Ads",
      "Segmentación"
    ]
  },
  {
    "id": "mkt_analytics_social",
    "label_title": "Analytics de Redes",
    "category": "social_media",
    "content": "===parametros\n\n- plataformas: {[plataformas]} → Plataformas\n- periodo: {[periodo]} → Período\n- benchmark: {[benchmark]} → Benchmark\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Analytics\", \"Social Media\", \"Métricas\"]\n\n===prompt\n\n# Objetivo\n\nCrear framework de análisis con métricas accionables.\n\n# Arquetipo Experto\n\nActúa como un **Social Media Analyst** experto en insights accionables.\n\n# Parámetros\n\n- plataformas: {[plataformas]} → Plataformas\n- periodo: {[periodo]} → Período\n- benchmark: {[benchmark]} → Benchmark\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFramework con KPIs, dashboard template, cadencia y proceso de action items",
    "paramCount": 4,
    "keywords": [
      "Analytics",
      "Social Media",
      "Métricas"
    ]
  },
  {
    "id": "mkt_nurturing_sequence",
    "label_title": "Secuencia de Nurturing",
    "category": "email_mkt",
    "content": "===parametros\n\n- segmento: {[segmento]} → Segmento de leads\n- producto: {[producto]} → Producto\n- duracion: {[duracion]} → Duración en semanas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Nurturing\", \"Lead Scoring\", \"Automatización\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar secuencia que mueva leads fríos a MQLs con contenido progresivo.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Automation Specialist** experto en nurturing.\n\n# Parámetros\n\n- segmento: {[segmento]} → Segmento de leads\n- producto: {[producto]} → Producto\n- duracion: {[duracion]} → Duración en semanas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nSecuencia de 8-12 emails con subjects, copy, CTAs, triggers y scoring",
    "paramCount": 4,
    "keywords": [
      "Nurturing",
      "Lead Scoring",
      "Automatización"
    ]
  },
  {
    "id": "mkt_onboarding_email",
    "label_title": "Serie Onboarding Email",
    "category": "email_mkt",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- accion_clave: {[accion_clave]} → Acción de activación\n- duracion: {[duracion]} → Duración de la serie\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Onboarding\", \"Activación\", \"Email\"]\n\n===prompt\n\n# Objetivo\n\nCrear serie post-registro que active y retenga usuarios.\n\n# Arquetipo Experto\n\nActúa como un **Product Marketing Manager** experto en onboarding por email.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- accion_clave: {[accion_clave]} → Acción de activación\n- duracion: {[duracion]} → Duración de la serie\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nSerie de 5-7 emails con timing, subject, contenido y métrica de éxito por email",
    "paramCount": 4,
    "keywords": [
      "Onboarding",
      "Activación",
      "Email"
    ]
  },
  {
    "id": "mkt_reactivacion",
    "label_title": "Email de Reactivación",
    "category": "email_mkt",
    "content": "===parametros\n\n- segmento: {[segmento]} → Segmento inactivo\n- periodo_inactivo: {[periodo_inactivo]} → Días de inactividad\n- incentivo: {[incentivo]} → Incentivo disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Win-back\", \"Reactivación\", \"Retención\"]\n\n===prompt\n\n# Objetivo\n\nCrear secuencia para leads/usuarios inactivos.\n\n# Arquetipo Experto\n\nActúa como un **CRM Specialist** con campañas de reactivación de +20% open rate.\n\n# Parámetros\n\n- segmento: {[segmento]} → Segmento inactivo\n- periodo_inactivo: {[periodo_inactivo]} → Días de inactividad\n- incentivo: {[incentivo]} → Incentivo disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nSecuencia de 3-5 emails con subjects emocionales, incentivos progresivos y deadline",
    "paramCount": 4,
    "keywords": [
      "Win-back",
      "Reactivación",
      "Retención"
    ]
  },
  {
    "id": "mkt_newsletter",
    "label_title": "Estrategia de Newsletter",
    "category": "email_mkt",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- audiencia: {[audiencia]} → Audiencia\n- frecuencia: {[frecuencia]} → Frecuencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Newsletter\", \"Retención\", \"Contenido\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar newsletter que genere engagement y anticipación semanal.\n\n# Arquetipo Experto\n\nActúa como un **Newsletter Creator** con 50%+ open rate sostenido.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- audiencia: {[audiencia]} → Audiencia\n- frecuencia: {[frecuencia]} → Frecuencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia con formato, pilares, subject line patterns, calendario y métricas",
    "paramCount": 4,
    "keywords": [
      "Newsletter",
      "Retención",
      "Contenido"
    ]
  },
  {
    "id": "mkt_ab_test_email",
    "label_title": "A/B Test de Emails",
    "category": "email_mkt",
    "content": "===parametros\n\n- metrica: {[metrica]} → Métrica a optimizar\n- variable: {[variable]} → Variable a testear\n- tamano_muestra: {[tamano_muestra]} → Tamaño de muestra\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"A/B Testing\", \"Optimización\", \"Email\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan de A/B testing para optimizar métricas de email.\n\n# Arquetipo Experto\n\nActúa como un **Email Optimization Specialist** con metodología estadística rigurosa.\n\n# Parámetros\n\n- metrica: {[metrica]} → Métrica a optimizar\n- variable: {[variable]} → Variable a testear\n- tamano_muestra: {[tamano_muestra]} → Tamaño de muestra\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con hipótesis, variables, tamaño muestral, duración, criterio de éxito y análisis",
    "paramCount": 4,
    "keywords": [
      "A/B Testing",
      "Optimización",
      "Email"
    ]
  },
  {
    "id": "mkt_automation_workflow",
    "label_title": "Workflow de Automatización",
    "category": "email_mkt",
    "content": "===parametros\n\n- objetivo: {[objetivo]} → Objetivo del workflow\n- trigger: {[trigger]} → Evento trigger\n- segmentos: {[segmentos]} → Segmentos involucrados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Automatización\", \"Workflow\", \"Triggers\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar workflow de marketing automation con triggers y condicionales.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Automation Architect** con experiencia en HubSpot/Marketo.\n\n# Parámetros\n\n- objetivo: {[objetivo]} → Objetivo del workflow\n- trigger: {[trigger]} → Evento trigger\n- segmentos: {[segmentos]} → Segmentos involucrados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nDiagrama de workflow con triggers, condicionales, emails, wait times y exit criteria",
    "paramCount": 4,
    "keywords": [
      "Automatización",
      "Workflow",
      "Triggers"
    ]
  },
  {
    "id": "mkt_segmentacion_avanzada",
    "label_title": "Segmentación Avanzada",
    "category": "email_mkt",
    "content": "===parametros\n\n- base_datos: {[base_datos]} → Tamaño de la base\n- datos_disponibles: {[datos_disponibles]} → Datos disponibles\n- objetivo: {[objetivo]} → Objetivo de la segmentación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Segmentación\", \"Personalización\", \"RFM\"]\n\n===prompt\n\n# Objetivo\n\nCrear modelo de segmentación avanzada para personalización de emails.\n\n# Arquetipo Experto\n\nActúa como un **CRM Data Analyst** experto en modelos RFM y behavioral segmentation.\n\n# Parámetros\n\n- base_datos: {[base_datos]} → Tamaño de la base\n- datos_disponibles: {[datos_disponibles]} → Datos disponibles\n- objetivo: {[objetivo]} → Objetivo de la segmentación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nModelo con criterios, segmentos definidos, tamaño por segmento y estrategia por cada uno",
    "paramCount": 4,
    "keywords": [
      "Segmentación",
      "Personalización",
      "RFM"
    ]
  },
  {
    "id": "mkt_cold_email",
    "label_title": "Cold Email B2B",
    "category": "email_mkt",
    "content": "===parametros\n\n- icp: {[icp]} → ICP target\n- propuesta: {[propuesta]} → Propuesta de valor\n- pasos: {[pasos]} → Número de touchpoints\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Cold Email\", \"B2B\", \"Outbound\"]\n\n===prompt\n\n# Objetivo\n\nEscribir secuencia de cold email B2B que genere respuestas.\n\n# Arquetipo Experto\n\nActúa como un **SDR Manager** con cold emails que superan 15% reply rate.\n\n# Parámetros\n\n- icp: {[icp]} → ICP target\n- propuesta: {[propuesta]} → Propuesta de valor\n- pasos: {[pasos]} → Número de touchpoints\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nSecuencia de 4-6 emails con personalización, social proof, follow-ups y breakup email",
    "paramCount": 4,
    "keywords": [
      "Cold Email",
      "B2B",
      "Outbound"
    ]
  },
  {
    "id": "mkt_transactional_email",
    "label_title": "Emails Transaccionales",
    "category": "email_mkt",
    "content": "===parametros\n\n- tipo: {[tipo]} → Tipo de transacción\n- producto: {[producto]} → Producto\n- oportunidad: {[oportunidad]} → Oportunidad de upsell\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Transaccional\", \"UX\", \"Oportunidad\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar emails transaccionales para generar engagement adicional.\n\n# Arquetipo Experto\n\nActúa como un **Product Marketing Specialist** que maximiza cada touchpoint.\n\n# Parámetros\n\n- tipo: {[tipo]} → Tipo de transacción\n- producto: {[producto]} → Producto\n- oportunidad: {[oportunidad]} → Oportunidad de upsell\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nTemplates optimizados con branding, cross-sell, referral CTA y tracking",
    "paramCount": 4,
    "keywords": [
      "Transaccional",
      "UX",
      "Oportunidad"
    ]
  },
  {
    "id": "mkt_deliverability",
    "label_title": "Plan de Deliverability",
    "category": "email_mkt",
    "content": "===parametros\n\n- dominio: {[dominio]} → Dominio de envío\n- volumen: {[volumen]} → Volumen mensual\n- problemas: {[problemas]} → Problemas detectados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Deliverability\", \"Reputación\", \"Inbox\"]\n\n===prompt\n\n# Objetivo\n\nMejorar deliverability y reputación de sender.\n\n# Arquetipo Experto\n\nActúa como un **Email Deliverability Consultant** certificado.\n\n# Parámetros\n\n- dominio: {[dominio]} → Dominio de envío\n- volumen: {[volumen]} → Volumen mensual\n- problemas: {[problemas]} → Problemas detectados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con auditoría técnica (SPF/DKIM/DMARC), limpieza de lista, warm-up plan y monitoreo",
    "paramCount": 4,
    "keywords": [
      "Deliverability",
      "Reputación",
      "Inbox"
    ]
  },
  {
    "id": "mkt_keyword_research",
    "label_title": "Keyword Research Completo",
    "category": "seo_sem",
    "content": "===parametros\n\n- tema: {[tema]} → Tema o nicho\n- competidores: {[competidores]} → URLs competidoras\n- mercado: {[mercado]} → Mercado geográfico\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"SEO\", \"Keywords\", \"Intent\"]\n\n===prompt\n\n# Objetivo\n\nInvestigación de keywords con intent mapping y oportunidades.\n\n# Arquetipo Experto\n\nActúa como un **SEO Specialist** con herramientas Ahrefs/SEMrush.\n\n# Parámetros\n\n- tema: {[tema]} → Tema o nicho\n- competidores: {[competidores]} → URLs competidoras\n- mercado: {[mercado]} → Mercado geográfico\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nMapa de keywords con volumen, dificultad, intent, clusters y priorización",
    "paramCount": 4,
    "keywords": [
      "SEO",
      "Keywords",
      "Intent"
    ]
  },
  {
    "id": "mkt_audit_seo",
    "label_title": "Auditoría SEO Completa",
    "category": "seo_sem",
    "content": "===parametros\n\n- url: {[url]} → URL del sitio\n- keyword_principal: {[keyword_principal]} → Keyword objetivo\n- competidores: {[competidores]} → 3 competidores\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"SEO\", \"Auditoría\", \"Técnico\"]\n\n===prompt\n\n# Objetivo\n\nAuditoría técnica, on-page y de contenido de un sitio web.\n\n# Arquetipo Experto\n\nActúa como un **SEO Auditor** certificado en Technical SEO.\n\n# Parámetros\n\n- url: {[url]} → URL del sitio\n- keyword_principal: {[keyword_principal]} → Keyword objetivo\n- competidores: {[competidores]} → 3 competidores\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte con score, issues críticos, quick wins y roadmap de optimización",
    "paramCount": 4,
    "keywords": [
      "SEO",
      "Auditoría",
      "Técnico"
    ]
  },
  {
    "id": "mkt_local_seo",
    "label_title": "Plan SEO Local",
    "category": "seo_sem",
    "content": "===parametros\n\n- negocio: {[negocio]} → Tipo de negocio\n- ubicaciones: {[ubicaciones]} → Ubicaciones\n- competidores: {[competidores]} → Competidores locales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"SEO Local\", \"Google Maps\", \"GMB\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar presencia en búsquedas locales y Google Maps.\n\n# Arquetipo Experto\n\nActúa como un **Local SEO Specialist** con 50+ negocios optimizados.\n\n# Parámetros\n\n- negocio: {[negocio]} → Tipo de negocio\n- ubicaciones: {[ubicaciones]} → Ubicaciones\n- competidores: {[competidores]} → Competidores locales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con GMB optimization, NAP consistency, local citations y review strategy",
    "paramCount": 4,
    "keywords": [
      "SEO Local",
      "Google Maps",
      "GMB"
    ]
  },
  {
    "id": "mkt_google_ads",
    "label_title": "Campaña Google Ads",
    "category": "seo_sem",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- objetivo: {[objetivo]} → Objetivo (leads, ventas, tráfico)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Google Ads\", \"SEM\", \"PPC\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar campaña de Google Search Ads con estructura y copy.\n\n# Arquetipo Experto\n\nActúa como un **Google Ads Specialist** certificado con ROAS >4x.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- objetivo: {[objetivo]} → Objetivo (leads, ventas, tráfico)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstructura de campaña con ad groups, keywords, negative keywords, copy por ad y extensions",
    "paramCount": 4,
    "keywords": [
      "Google Ads",
      "SEM",
      "PPC"
    ]
  },
  {
    "id": "mkt_seo_tecnico",
    "label_title": "SEO Técnico",
    "category": "seo_sem",
    "content": "===parametros\n\n- sitio: {[sitio]} → URL del sitio\n- cms: {[cms]} → CMS utilizado\n- issues: {[issues]} → Issues detectados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"SEO Técnico\", \"Crawling\", \"Core Web Vitals\"]\n\n===prompt\n\n# Objetivo\n\nResolver issues técnicos de SEO que impactan el crawling e indexación.\n\n# Arquetipo Experto\n\nActúa como un **Technical SEO Engineer** con experiencia en sitios de 100K+ páginas.\n\n# Parámetros\n\n- sitio: {[sitio]} → URL del sitio\n- cms: {[cms]} → CMS utilizado\n- issues: {[issues]} → Issues detectados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan técnico con priorización de issues, soluciones, impacto estimado y checklist de implementación",
    "paramCount": 4,
    "keywords": [
      "SEO Técnico",
      "Crawling",
      "Core Web Vitals"
    ]
  },
  {
    "id": "mkt_content_gap",
    "label_title": "Análisis Content Gap",
    "category": "seo_sem",
    "content": "===parametros\n\n- dominio: {[dominio]} → Tu dominio\n- competidores: {[competidores]} → 3-5 dominios competidores\n- nicho: {[nicho]} → Nicho temático\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Content Gap\", \"SEO\", \"Oportunidades\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar gaps de contenido vs competencia para capturar tráfico.\n\n# Arquetipo Experto\n\nActúa como un **Content SEO Analyst** con metodología de gap analysis.\n\n# Parámetros\n\n- dominio: {[dominio]} → Tu dominio\n- competidores: {[competidores]} → 3-5 dominios competidores\n- nicho: {[nicho]} → Nicho temático\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nMatriz de gaps con keywords que competidores rankean y tú no, priorizadas por volumen y dificultad",
    "paramCount": 4,
    "keywords": [
      "Content Gap",
      "SEO",
      "Oportunidades"
    ]
  },
  {
    "id": "mkt_link_building",
    "label_title": "Estrategia de Link Building",
    "category": "seo_sem",
    "content": "===parametros\n\n- dominio: {[dominio]} → Tu dominio\n- industria: {[industria]} → Industria\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Link Building\", \"SEO Off-page\", \"Autoridad\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de link building white-hat y escalable.\n\n# Arquetipo Experto\n\nActúa como un **Link Building Strategist** con tácticas white-hat comprobadas.\n\n# Parámetros\n\n- dominio: {[dominio]} → Tu dominio\n- industria: {[industria]} → Industria\n- presupuesto: {[presupuesto]} → Presupuesto mensual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia con tácticas, targets, templates de outreach, timeline y métricas",
    "paramCount": 4,
    "keywords": [
      "Link Building",
      "SEO Off-page",
      "Autoridad"
    ]
  },
  {
    "id": "mkt_seo_internacional",
    "label_title": "SEO Internacional",
    "category": "seo_sem",
    "content": "===parametros\n\n- sitio: {[sitio]} → URL del sitio\n- paises: {[paises]} → Países objetivo\n- idiomas: {[idiomas]} → Idiomas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"SEO Internacional\", \"Hreflang\", \"Multilingual\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar SEO para múltiples países e idiomas.\n\n# Arquetipo Experto\n\nActúa como un **International SEO Consultant** con experiencia en 20+ mercados.\n\n# Parámetros\n\n- sitio: {[sitio]} → URL del sitio\n- paises: {[paises]} → Países objetivo\n- idiomas: {[idiomas]} → Idiomas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con estructura hreflang, content strategy por mercado y technical setup",
    "paramCount": 4,
    "keywords": [
      "SEO Internacional",
      "Hreflang",
      "Multilingual"
    ]
  },
  {
    "id": "mkt_featured_snippets",
    "label_title": "Estrategia Featured Snippets",
    "category": "seo_sem",
    "content": "===parametros\n\n- keywords: {[keywords]} → Keywords objetivo\n- tipo_snippet: {[tipo_snippet]} → Tipo de snippet (párrafo, lista, tabla)\n- contenido_actual: {[contenido_actual]} → URL del contenido actual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Featured Snippets\", \"Posición Cero\", \"SEO\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar contenido para capturar featured snippets y posición cero.\n\n# Arquetipo Experto\n\nActúa como un **SERP Analyst** especializado en featured snippets.\n\n# Parámetros\n\n- keywords: {[keywords]} → Keywords objetivo\n- tipo_snippet: {[tipo_snippet]} → Tipo de snippet (párrafo, lista, tabla)\n- contenido_actual: {[contenido_actual]} → URL del contenido actual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nGuía con optimización por tipo de snippet, estructura de contenido y tracking",
    "paramCount": 4,
    "keywords": [
      "Featured Snippets",
      "Posición Cero",
      "SEO"
    ]
  },
  {
    "id": "mkt_youtube_seo",
    "label_title": "SEO para YouTube",
    "category": "seo_sem",
    "content": "===parametros\n\n- canal: {[canal]} → Nombre del canal\n- nicho: {[nicho]} → Nicho\n- videos: {[videos]} → Videos a optimizar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"YouTube SEO\", \"Video\", \"Posicionamiento\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar videos para posicionar en YouTube y Google Video.\n\n# Arquetipo Experto\n\nActúa como un **YouTube SEO Specialist** con canales de 100K+ suscriptores.\n\n# Parámetros\n\n- canal: {[canal]} → Nombre del canal\n- nicho: {[nicho]} → Nicho\n- videos: {[videos]} → Videos a optimizar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nGuía con title patterns, description templates, tags, thumbnails y retention optimization",
    "paramCount": 4,
    "keywords": [
      "YouTube SEO",
      "Video",
      "Posicionamiento"
    ]
  },
  {
    "id": "mkt_dashboard_marketing",
    "label_title": "Dashboard de Marketing",
    "category": "analytics",
    "content": "===parametros\n\n- canales: {[canales]} → Canales activos\n- kpis: {[kpis]} → KPIs principales\n- herramienta: {[herramienta]} → Herramienta de BI\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Dashboard\", \"KPIs\", \"Analytics\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de métricas de marketing con KPIs accionables.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Analytics Manager** con experiencia en Looker/Tableau.\n\n# Parámetros\n\n- canales: {[canales]} → Canales activos\n- kpis: {[kpis]} → KPIs principales\n- herramienta: {[herramienta]} → Herramienta de BI\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEspecificación de dashboard con widgets, KPIs, filtros y drill-downs",
    "paramCount": 4,
    "keywords": [
      "Dashboard",
      "KPIs",
      "Analytics"
    ]
  },
  {
    "id": "mkt_attribution",
    "label_title": "Modelo de Atribución",
    "category": "analytics",
    "content": "===parametros\n\n- canales: {[canales]} → Canales en el funnel\n- modelo: {[modelo]} → Modelo preferido (linear, time-decay, position)\n- herramienta: {[herramienta]} → Herramienta de analytics\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Atribución\", \"Multi-touch\", \"ROAS\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar modelo de atribución multi-touch para campañas.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Data Scientist** experto en modelos de atribución.\n\n# Parámetros\n\n- canales: {[canales]} → Canales en el funnel\n- modelo: {[modelo]} → Modelo preferido (linear, time-decay, position)\n- herramienta: {[herramienta]} → Herramienta de analytics\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nModelo con metodología, implementación, dashboard y guía de interpretación",
    "paramCount": 4,
    "keywords": [
      "Atribución",
      "Multi-touch",
      "ROAS"
    ]
  },
  {
    "id": "mkt_cohort_analysis",
    "label_title": "Análisis de Cohortes",
    "category": "analytics",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- evento: {[evento]} → Evento de activación\n- periodo: {[periodo]} → Período de análisis\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Cohortes\", \"Retención\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nRealizar análisis de cohortes para entender retención y behavior.\n\n# Arquetipo Experto\n\nActúa como un **Product Analyst** experto en behavioral analytics.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- evento: {[evento]} → Evento de activación\n- periodo: {[periodo]} → Período de análisis\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nAnálisis con tablas de cohorte, visualización, insights y recomendaciones",
    "paramCount": 4,
    "keywords": [
      "Cohortes",
      "Retención",
      "Análisis"
    ]
  },
  {
    "id": "mkt_roi_campana",
    "label_title": "ROI de Campaña",
    "category": "analytics",
    "content": "===parametros\n\n- campana: {[campana]} → Nombre de la campaña\n- inversión: {[inversión]} → Inversión total\n- metricas: {[metricas]} → Métricas de resultado\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"ROI\", \"Campaña\", \"Performance\"]\n\n===prompt\n\n# Objetivo\n\nCalcular ROI integral de campaña incluyendo costos directos e indirectos.\n\n# Arquetipo Experto\n\nActúa como un **Performance Marketing Analyst** riguroso con datos.\n\n# Parámetros\n\n- campana: {[campana]} → Nombre de la campaña\n- inversión: {[inversión]} → Inversión total\n- metricas: {[metricas]} → Métricas de resultado\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte ROI con desglose de costos, revenue atribuido, ROAS, LTV y recomendaciones",
    "paramCount": 4,
    "keywords": [
      "ROI",
      "Campaña",
      "Performance"
    ]
  },
  {
    "id": "mkt_funnel_analysis",
    "label_title": "Análisis de Funnel",
    "category": "analytics",
    "content": "===parametros\n\n- funnel: {[funnel]} → Etapas del funnel\n- datos: {[datos]} → Datos por etapa\n- periodo: {[periodo]} → Período\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Funnel\", \"Conversión\", \"Drop-off\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar funnel de conversión identificando drop-offs y oportunidades.\n\n# Arquetipo Experto\n\nActúa como un **CRO Analyst** con experiencia en optimización de funnels.\n\n# Parámetros\n\n- funnel: {[funnel]} → Etapas del funnel\n- datos: {[datos]} → Datos por etapa\n- periodo: {[periodo]} → Período\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nAnálisis con tasas por etapa, benchmarks, diagnóstico de drop-offs y plan de optimización",
    "paramCount": 4,
    "keywords": [
      "Funnel",
      "Conversión",
      "Drop-off"
    ]
  },
  {
    "id": "mkt_customer_ltv",
    "label_title": "Cálculo de Customer LTV",
    "category": "analytics",
    "content": "===parametros\n\n- datos_transacciones: {[datos_transacciones]} → Datos de transacciones\n- periodo: {[periodo]} → Período de análisis\n- segmentos: {[segmentos]} → Segmentos a evaluar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"LTV\", \"CLV\", \"Retención\"]\n\n===prompt\n\n# Objetivo\n\nCalcular y modelar Lifetime Value por segmento de clientes.\n\n# Arquetipo Experto\n\nActúa como un **Customer Analytics Specialist** con modelos predictivos de LTV.\n\n# Parámetros\n\n- datos_transacciones: {[datos_transacciones]} → Datos de transacciones\n- periodo: {[periodo]} → Período de análisis\n- segmentos: {[segmentos]} → Segmentos a evaluar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nModelo LTV con cálculo por segmento, distribución, predicción y estrategia de inversión por tier",
    "paramCount": 4,
    "keywords": [
      "LTV",
      "CLV",
      "Retención"
    ]
  },
  {
    "id": "mkt_ab_test_estadistico",
    "label_title": "A/B Test Estadístico",
    "category": "analytics",
    "content": "===parametros\n\n- hipotesis: {[hipotesis]} → Hipótesis a testear\n- metrica: {[metrica]} → Métrica principal\n- trafico: {[trafico]} → Tráfico disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"A/B Test\", \"Estadística\", \"Experimentación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar A/B test con rigor estadístico completo.\n\n# Arquetipo Experto\n\nActúa como un **Growth Data Scientist** con formación en estadística aplicada.\n\n# Parámetros\n\n- hipotesis: {[hipotesis]} → Hipótesis a testear\n- metrica: {[metrica]} → Métrica principal\n- trafico: {[trafico]} → Tráfico disponible\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con tamaño muestral, duración, nivel de significancia, análisis y decision framework",
    "paramCount": 4,
    "keywords": [
      "A/B Test",
      "Estadística",
      "Experimentación"
    ]
  },
  {
    "id": "mkt_sentiment_analysis",
    "label_title": "Análisis de Sentimiento",
    "category": "analytics",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- periodo: {[periodo]} → Período\n- fuentes: {[fuentes]} → Fuentes de datos\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Sentimiento\", \"Análisis\", \"Reputación\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar sentimiento de marca en conversaciones online.\n\n# Arquetipo Experto\n\nActúa como un **Social Intelligence Analyst** con NLP aplicado.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- periodo: {[periodo]} → Período\n- fuentes: {[fuentes]} → Fuentes de datos\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte con score de sentimiento, tendencia, temas clave, drivers y alertas",
    "paramCount": 4,
    "keywords": [
      "Sentimiento",
      "Análisis",
      "Reputación"
    ]
  },
  {
    "id": "mkt_cac_optimization",
    "label_title": "Optimización de CAC",
    "category": "analytics",
    "content": "===parametros\n\n- cac_actual: {[cac_actual]} → CAC actual\n- canales: {[canales]} → Canales de adquisición\n- objetivo: {[objetivo]} → CAC objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"CAC\", \"Adquisición\", \"Optimización\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar oportunidades para reducir el costo de adquisición de clientes.\n\n# Arquetipo Experto\n\nActúa como un **Growth Marketing Analyst** con track record en reducción de CAC.\n\n# Parámetros\n\n- cac_actual: {[cac_actual]} → CAC actual\n- canales: {[canales]} → Canales de adquisición\n- objetivo: {[objetivo]} → CAC objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nAnálisis con CAC por canal, tendencia, benchmarks, oportunidades de reducción y plan",
    "paramCount": 4,
    "keywords": [
      "CAC",
      "Adquisición",
      "Optimización"
    ]
  },
  {
    "id": "mkt_predictive_analytics",
    "label_title": "Analytics Predictivo",
    "category": "analytics",
    "content": "===parametros\n\n- objetivo: {[objetivo]} → Qué predecir (churn, compra, upgrade)\n- datos: {[datos]} → Datos disponibles\n- horizonte: {[horizonte]} → Horizonte de predicción\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Predictivo\", \"ML\", \"Forecast\"]\n\n===prompt\n\n# Objetivo\n\nAplicar modelos predictivos para anticipar comportamiento de clientes.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Data Scientist** con experiencia en modelos predictivos.\n\n# Parámetros\n\n- objetivo: {[objetivo]} → Qué predecir (churn, compra, upgrade)\n- datos: {[datos]} → Datos disponibles\n- horizonte: {[horizonte]} → Horizonte de predicción\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nModelo con variables, accuracy estimada, segmentación de riesgo y acciones por segmento",
    "paramCount": 4,
    "keywords": [
      "Predictivo",
      "ML",
      "Forecast"
    ]
  },
  {
    "id": "mkt_growth_experiment",
    "label_title": "Diseño de Growth Experiment",
    "category": "growth",
    "content": "===parametros\n\n- hipotesis: {[hipotesis]} → Hipótesis a validar\n- metrica: {[metrica]} → Métrica north star\n- recurso: {[recurso]} → Recursos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Growth\", \"Experimentación\", \"Hipótesis\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar experimento de growth con hipótesis, métricas y criterio de éxito.\n\n# Arquetipo Experto\n\nActúa como un **Head of Growth** con 100+ experimentos ejecutados.\n\n# Parámetros\n\n- hipotesis: {[hipotesis]} → Hipótesis a validar\n- metrica: {[metrica]} → Métrica north star\n- recurso: {[recurso]} → Recursos disponibles\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFicha de experimento con hipótesis, setup, success criteria, timeline y learnings template",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Experimentación",
      "Hipótesis"
    ]
  },
  {
    "id": "mkt_landing_optimization",
    "label_title": "Optimización de Landing Page",
    "category": "growth",
    "content": "===parametros\n\n- url: {[url]} → URL de la landing\n- objetivo: {[objetivo]} → Objetivo de conversión\n- trafico: {[trafico]} → Tráfico mensual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Landing Page\", \"CRO\", \"Conversión\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar landing page para maximizar conversiones.\n\n# Arquetipo Experto\n\nActúa como un **Conversion Rate Optimizer** con lifts promedio de 30%.\n\n# Parámetros\n\n- url: {[url]} → URL de la landing\n- objetivo: {[objetivo]} → Objetivo de conversión\n- trafico: {[trafico]} → Tráfico mensual\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nAudit con heatmap analysis, 10 recomendaciones priorizadas y wireframe sugerido",
    "paramCount": 4,
    "keywords": [
      "Landing Page",
      "CRO",
      "Conversión"
    ]
  },
  {
    "id": "mkt_referral_program",
    "label_title": "Programa de Referidos",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- incentivo: {[incentivo]} → Tipo de incentivo\n- mecanica: {[mecanica]} → Mecánica preferida\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Referral\", \"Viral\", \"Growth\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar programa de referidos que genere crecimiento viral.\n\n# Arquetipo Experto\n\nActúa como un **Growth Product Manager** con programas de referidos exitosos.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- incentivo: {[incentivo]} → Tipo de incentivo\n- mecanica: {[mecanica]} → Mecánica preferida\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPrograma con mecánica, incentivos, journey del referrer/referee, tracking y KPIs",
    "paramCount": 4,
    "keywords": [
      "Referral",
      "Viral",
      "Growth"
    ]
  },
  {
    "id": "mkt_product_led_growth",
    "label_title": "Estrategia PLG",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- freemium: {[freemium]} → Modelo freemium disponible\n- activation: {[activation]} → Métrica de activación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"PLG\", \"Product-Led\", \"SaaS\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia Product-Led Growth para producto SaaS/digital.\n\n# Arquetipo Experto\n\nActúa como un **PLG Strategist** con experiencia en empresas de $10M+ ARR.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- freemium: {[freemium]} → Modelo freemium disponible\n- activation: {[activation]} → Métrica de activación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia PLG con: free tier design, activation flow, expansion triggers y upgrade path",
    "paramCount": 4,
    "keywords": [
      "PLG",
      "Product-Led",
      "SaaS"
    ]
  },
  {
    "id": "mkt_viral_loop",
    "label_title": "Diseño de Viral Loop",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- usuario: {[usuario]} → Tipo de usuario\n- canal: {[canal]} → Canal principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Viral\", \"Loop\", \"K-factor\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar loop viral que amplifique el crecimiento orgánico.\n\n# Arquetipo Experto\n\nActúa como un **Growth Engineer** experto en viral mechanics.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- usuario: {[usuario]} → Tipo de usuario\n- canal: {[canal]} → Canal principal\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nDiagrama de viral loop con: trigger, action, reward, viral mechanic, K-factor estimado",
    "paramCount": 4,
    "keywords": [
      "Viral",
      "Loop",
      "K-factor"
    ]
  },
  {
    "id": "mkt_onboarding_optimization",
    "label_title": "Optimización de Onboarding",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- accion_aha: {[accion_aha]} → Momento Aha\n- drop_off: {[drop_off]} → Punto de mayor drop-off\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Onboarding\", \"Activación\", \"UX\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar flujo de onboarding para maximizar activación.\n\n# Arquetipo Experto\n\nActúa como un **Product Growth Manager** con onboarding funnels de 60%+ completion.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- accion_aha: {[accion_aha]} → Momento Aha\n- drop_off: {[drop_off]} → Punto de mayor drop-off\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nFlujo optimizado con: pasos, friction points, progressive disclosure y métricas por step",
    "paramCount": 4,
    "keywords": [
      "Onboarding",
      "Activación",
      "UX"
    ]
  },
  {
    "id": "mkt_pricing_strategy",
    "label_title": "Estrategia de Pricing",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- competidores: {[competidores]} → Pricing de competidores\n- segmentos: {[segmentos]} → Segmentos de clientes\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Pricing\", \"Revenue\", \"Monetización\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de precios que maximice revenue y conversión.\n\n# Arquetipo Experto\n\nActúa como un **Pricing Strategist** con experiencia en optimización de precios.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- competidores: {[competidores]} → Pricing de competidores\n- segmentos: {[segmentos]} → Segmentos de clientes\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEstrategia con: modelo, tiers, anchoring, psicología de precios y plan de testing",
    "paramCount": 4,
    "keywords": [
      "Pricing",
      "Revenue",
      "Monetización"
    ]
  },
  {
    "id": "mkt_retention_playbook",
    "label_title": "Playbook de Retención",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- churn_rate: {[churn_rate]} → Churn rate actual\n- segmentos: {[segmentos]} → Segmentos de riesgo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Retención\", \"Churn\", \"Playbook\"]\n\n===prompt\n\n# Objetivo\n\nCrear playbook de retención con triggers y acciones por etapa.\n\n# Arquetipo Experto\n\nActúa como un **Customer Retention Manager** con reducción demostrable de churn.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- churn_rate: {[churn_rate]} → Churn rate actual\n- segmentos: {[segmentos]} → Segmentos de riesgo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlaybook con: early warning signals, intervenciones por etapa, comunicación y métricas",
    "paramCount": 4,
    "keywords": [
      "Retención",
      "Churn",
      "Playbook"
    ]
  },
  {
    "id": "mkt_growth_model",
    "label_title": "Growth Model",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- canales: {[canales]} → Canales de adquisición\n- metricas: {[metricas]} → Métricas actuales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Growth Model\", \"Flywheel\", \"Loops\"]\n\n===prompt\n\n# Objetivo\n\nModelar motor de crecimiento con inputs, loops y outputs.\n\n# Arquetipo Experto\n\nActúa como un **Growth Modeler** que cuantifica cada palanca de crecimiento.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- canales: {[canales]} → Canales de adquisición\n- metricas: {[metricas]} → Métricas actuales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nModelo con: inputs, loops (viral, paid, content), sensibilidad por palanca y forecast",
    "paramCount": 4,
    "keywords": [
      "Growth Model",
      "Flywheel",
      "Loops"
    ]
  },
  {
    "id": "mkt_expansion_revenue",
    "label_title": "Estrategia de Expansion Revenue",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Productos actuales\n- base_clientes: {[base_clientes]} → Tamaño de base\n- oportunidades: {[oportunidades]} → Oportunidades de expansión\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Upsell\", \"Cross-sell\", \"Expansion\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de upsell/cross-sell para base existente.\n\n# Arquetipo Experto\n\nActúa como un **Revenue Expansion Manager** con NRR >120%.\n\n# Parámetros\n\n- producto: {[producto]} → Productos actuales\n- base_clientes: {[base_clientes]} → Tamaño de base\n- oportunidades: {[oportunidades]} → Oportunidades de expansión\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con: triggers de expansión, playbooks por segmento, pricing de upgrades y forecast",
    "paramCount": 4,
    "keywords": [
      "Upsell",
      "Cross-sell",
      "Expansion"
    ]
  },
  {
    "id": "mkt_webinar_planning",
    "label_title": "Planificación de Webinar",
    "category": "eventos",
    "content": "===parametros\n\n- tema: {[tema]} → Tema del webinar\n- audiencia: {[audiencia]} → Audiencia target\n- objetivo: {[objetivo]} → Objetivo (leads, educación, demo)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Webinar\", \"Lead Gen\", \"Eventos\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar webinar que genere leads cualificados y engagement.\n\n# Arquetipo Experto\n\nActúa como un **Event Marketing Manager** con webinars de 500+ asistentes.\n\n# Parámetros\n\n- tema: {[tema]} → Tema del webinar\n- audiencia: {[audiencia]} → Audiencia target\n- objetivo: {[objetivo]} → Objetivo (leads, educación, demo)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con: temática, speakers, promoción, landing, follow-up sequence y métricas",
    "paramCount": 4,
    "keywords": [
      "Webinar",
      "Lead Gen",
      "Eventos"
    ]
  },
  {
    "id": "mkt_evento_lanzamiento",
    "label_title": "Evento de Lanzamiento",
    "category": "eventos",
    "content": "===parametros\n\n- producto: {[producto]} → Producto a lanzar\n- formato: {[formato]} → Formato (presencial, virtual, híbrido)\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Lanzamiento\", \"Evento\", \"Go-to-Market\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar evento de lanzamiento de producto/servicio.\n\n# Arquetipo Experto\n\nActúa como un **Event Director** con 20+ lanzamientos exitosos.\n\n# Parámetros\n\n- producto: {[producto]} → Producto a lanzar\n- formato: {[formato]} → Formato (presencial, virtual, híbrido)\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con: agenda, invitados, promoción pre/during/post, PR y métricas de éxito",
    "paramCount": 4,
    "keywords": [
      "Lanzamiento",
      "Evento",
      "Go-to-Market"
    ]
  },
  {
    "id": "mkt_workshop_marketing",
    "label_title": "Workshop de Marketing",
    "category": "eventos",
    "content": "===parametros\n\n- tema: {[tema]} → Tema del workshop\n- duracion: {[duracion]} → Duración\n- formato: {[formato]} → Formato\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Workshop\", \"Educación\", \"Lead Gen\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar workshop educativo que genere leads y posicione como experto.\n\n# Arquetipo Experto\n\nActúa como un **Facilitador de Workshops** con NPS >80.\n\n# Parámetros\n\n- tema: {[tema]} → Tema del workshop\n- duracion: {[duracion]} → Duración\n- formato: {[formato]} → Formato\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nDiseño con: objetivos, agenda, ejercicios, materiales y plan de follow-up",
    "paramCount": 4,
    "keywords": [
      "Workshop",
      "Educación",
      "Lead Gen"
    ]
  },
  {
    "id": "mkt_conferencia_plan",
    "label_title": "Plan para Conferencia",
    "category": "eventos",
    "content": "===parametros\n\n- conferencia: {[conferencia]} → Nombre del evento\n- objetivo: {[objetivo]} → Objetivo de participación\n- presupuesto: {[presupuesto]} → Presupuesto total\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Conferencia\", \"Feria\", \"Networking\"]\n\n===prompt\n\n# Objetivo\n\nMaximizar ROI de participación en conferencia/feria.\n\n# Arquetipo Experto\n\nActúa como un **Trade Show Strategist** con ROI demostrable.\n\n# Parámetros\n\n- conferencia: {[conferencia]} → Nombre del evento\n- objetivo: {[objetivo]} → Objetivo de participación\n- presupuesto: {[presupuesto]} → Presupuesto total\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con: pre-evento, durante, post-evento, materiales, demos y seguimiento",
    "paramCount": 4,
    "keywords": [
      "Conferencia",
      "Feria",
      "Networking"
    ]
  },
  {
    "id": "mkt_experiential",
    "label_title": "Marketing Experiencial",
    "category": "eventos",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- audiencia: {[audiencia]} → Audiencia\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Experiencial\", \"Inmersivo\", \"Buzz\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar experiencia inmersiva de marca que genere buzz.\n\n# Arquetipo Experto\n\nActúa como un **Experiential Marketing Director** con activaciones virales.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- audiencia: {[audiencia]} → Audiencia\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nConcepto con: experiencia, producción, amplificación digital y medición de impacto",
    "paramCount": 4,
    "keywords": [
      "Experiencial",
      "Inmersivo",
      "Buzz"
    ]
  },
  {
    "id": "mkt_infografia_campana",
    "label_title": "Infografía de Campaña",
    "category": "output",
    "content": "===parametros\n\n- datos: {[datos]} → Datos a visualizar\n- audiencia: {[audiencia]} → Audiencia\n- formato: {[formato]} → Formato\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Infografía\", \"Datos\", \"Visual\"]\n\n===prompt\n\n# Objetivo\n\nCrear brief de infografía que visualice datos clave de campaña.\n\n# Arquetipo Experto\n\nActúa como un **Information Designer** experto en data visualization.\n\n# Parámetros\n\n- datos: {[datos]} → Datos a visualizar\n- audiencia: {[audiencia]} → Audiencia\n- formato: {[formato]} → Formato\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nBrief de infografía con: datos clave, jerarquía visual, paleta, layout y copy",
    "paramCount": 4,
    "keywords": [
      "Infografía",
      "Datos",
      "Visual"
    ]
  },
  {
    "id": "mkt_presentacion_resultados",
    "label_title": "Presentación de Resultados",
    "category": "output",
    "content": "===parametros\n\n- periodo: {[periodo]} → Período\n- metricas: {[metricas]} → Métricas principales\n- audiencia: {[audiencia]} → Audiencia de la presentación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Presentación\", \"Resultados\", \"Ejecutivo\"]\n\n===prompt\n\n# Objetivo\n\nCrear presentación ejecutiva de resultados de marketing.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Director** que presenta a boards.\n\n# Parámetros\n\n- periodo: {[periodo]} → Período\n- metricas: {[metricas]} → Métricas principales\n- audiencia: {[audiencia]} → Audiencia de la presentación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nDeck de 10-15 slides con: executive summary, KPIs, highlights, learnings y next steps",
    "paramCount": 4,
    "keywords": [
      "Presentación",
      "Resultados",
      "Ejecutivo"
    ]
  },
  {
    "id": "mkt_reporte_mensual",
    "label_title": "Reporte Mensual de Marketing",
    "category": "output",
    "content": "===parametros\n\n- mes: {[mes]} → Mes del reporte\n- canales: {[canales]} → Canales activos\n- presupuesto: {[presupuesto]} → Presupuesto ejecutado\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Reporte\", \"Mensual\", \"Performance\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte mensual completo del área de marketing.\n\n# Arquetipo Experto\n\nActúa como un **Marketing Operations Manager** con reportes award-winning.\n\n# Parámetros\n\n- mes: {[mes]} → Mes del reporte\n- canales: {[canales]} → Canales activos\n- presupuesto: {[presupuesto]} → Presupuesto ejecutado\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte con: executive summary, KPIs vs target, análisis por canal, presupuesto y plan siguiente mes",
    "paramCount": 4,
    "keywords": [
      "Reporte",
      "Mensual",
      "Performance"
    ]
  },
  {
    "id": "mkt_brief_creativo",
    "label_title": "Brief Creativo Completo",
    "category": "output",
    "content": "===parametros\n\n- proyecto: {[proyecto]} → Nombre del proyecto\n- objetivo: {[objetivo]} → Objetivo de comunicación\n- audiencia: {[audiencia]} → Audiencia target\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Brief\", \"Creativo\", \"Agencia\"]\n\n===prompt\n\n# Objetivo\n\nCrear brief creativo para agencia o equipo interno.\n\n# Arquetipo Experto\n\nActúa como un **Account Director** de agencia con briefs que generan piezas premiadas.\n\n# Parámetros\n\n- proyecto: {[proyecto]} → Nombre del proyecto\n- objetivo: {[objetivo]} → Objetivo de comunicación\n- audiencia: {[audiencia]} → Audiencia target\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nBrief con: background, objetivo, target, mensaje, tono, medios, timeline y criterios de evaluación",
    "paramCount": 4,
    "keywords": [
      "Brief",
      "Creativo",
      "Agencia"
    ]
  },
  {
    "id": "mkt_email_campana",
    "label_title": "Email de Campaña",
    "category": "output",
    "content": "===parametros\n\n- campana: {[campana]} → Nombre de campaña\n- objetivo: {[objetivo]} → Objetivo del email\n- segmento: {[segmento]} → Segmento destinatario\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Email\", \"Campaña\", \"Copy\"]\n\n===prompt\n\n# Objetivo\n\nEscribir email completo para campaña con subject, preview y body.\n\n# Arquetipo Experto\n\nActúa como un **Email Copywriter** con open rates superiores al 30%.\n\n# Parámetros\n\n- campana: {[campana]} → Nombre de campaña\n- objetivo: {[objetivo]} → Objetivo del email\n- segmento: {[segmento]} → Segmento destinatario\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nEmail completo con: 3 subject lines, preview text, header, body, CTA, footer y variante mobile",
    "paramCount": 4,
    "keywords": [
      "Email",
      "Campaña",
      "Copy"
    ]
  },
  {
    "id": "mkt_social_post_pack",
    "label_title": "Pack de Posts Sociales",
    "category": "output",
    "content": "===parametros\n\n- tema: {[tema]} → Tema central\n- plataformas: {[plataformas]} → Plataformas\n- tono: {[tono]} → Tono de comunicación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Social Posts\", \"Pack\", \"Contenido\"]\n\n===prompt\n\n# Objetivo\n\nCrear pack de 10 posts para redes sociales en diferentes formatos.\n\n# Arquetipo Experto\n\nActúa como un **Social Media Content Creator** con alto engagement.\n\n# Parámetros\n\n- tema: {[tema]} → Tema central\n- plataformas: {[plataformas]} → Plataformas\n- tono: {[tono]} → Tono de comunicación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPack de 10 posts con: copy, hashtags, CTA, formato visual sugerido y hora de publicación",
    "paramCount": 4,
    "keywords": [
      "Social Posts",
      "Pack",
      "Contenido"
    ]
  },
  {
    "id": "mkt_propuesta_comercial",
    "label_title": "Propuesta Comercial de Marketing",
    "category": "output",
    "content": "===parametros\n\n- cliente: {[cliente]} → Nombre del cliente\n- servicios: {[servicios]} → Servicios ofrecidos\n- presupuesto: {[presupuesto]} → Rango de presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Propuesta\", \"Comercial\", \"Servicios\"]\n\n===prompt\n\n# Objetivo\n\nCrear propuesta comercial para servicios de marketing.\n\n# Arquetipo Experto\n\nActúa como un **Business Development Manager** de agencia de marketing.\n\n# Parámetros\n\n- cliente: {[cliente]} → Nombre del cliente\n- servicios: {[servicios]} → Servicios ofrecidos\n- presupuesto: {[presupuesto]} → Rango de presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPropuesta con: diagnóstico, estrategia, servicios, timeline, equipo, inversión y ROI esperado",
    "paramCount": 4,
    "keywords": [
      "Propuesta",
      "Comercial",
      "Servicios"
    ]
  },
  {
    "id": "mkt_dashboard_spec",
    "label_title": "Especificación de Dashboard",
    "category": "output",
    "content": "===parametros\n\n- herramienta: {[herramienta]} → Herramienta (Looker, Tableau, Data Studio)\n- fuentes: {[fuentes]} → Fuentes de datos\n- kpis: {[kpis]} → KPIs a incluir\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Dashboard\", \"Especificación\", \"BI\"]\n\n===prompt\n\n# Objetivo\n\nCrear especificación técnica de dashboard de marketing.\n\n# Arquetipo Experto\n\nActúa como un **BI Analyst** especializado en dashboards de marketing.\n\n# Parámetros\n\n- herramienta: {[herramienta]} → Herramienta (Looker, Tableau, Data Studio)\n- fuentes: {[fuentes]} → Fuentes de datos\n- kpis: {[kpis]} → KPIs a incluir\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nSpec con: wireframe, KPIs por widget, fuentes de datos, filtros, drill-downs y refresh frequency",
    "paramCount": 4,
    "keywords": [
      "Dashboard",
      "Especificación",
      "BI"
    ]
  },
  {
    "id": "mkt_plan_medios",
    "label_title": "Plan de Medios",
    "category": "output",
    "content": "===parametros\n\n- presupuesto: {[presupuesto]} → Presupuesto total\n- canales: {[canales]} → Canales disponibles\n- objetivo: {[objetivo]} → Objetivo de campaña\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Plan de Medios\", \"Media Buy\", \"Distribución\"]\n\n===prompt\n\n# Objetivo\n\nCrear plan de medios con distribución de presupuesto por canal.\n\n# Arquetipo Experto\n\nActúa como un **Media Planner** con experiencia en presupuestos de $100K+.\n\n# Parámetros\n\n- presupuesto: {[presupuesto]} → Presupuesto total\n- canales: {[canales]} → Canales disponibles\n- objetivo: {[objetivo]} → Objetivo de campaña\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nPlan con: distribución por canal, reach estimado, frequency, calendario y optimization rules",
    "paramCount": 4,
    "keywords": [
      "Plan de Medios",
      "Media Buy",
      "Distribución"
    ]
  },
  {
    "id": "mkt_competitor_report",
    "label_title": "Reporte de Competencia",
    "category": "output",
    "content": "===parametros\n\n- marca: {[marca]} → Tu marca\n- competidores: {[competidores]} → 3-5 competidores\n- dimensiones: {[dimensiones]} → Dimensiones a analizar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no hay, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Competencia\", \"Inteligencia\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nCrear reporte de inteligencia competitiva de marketing.\n\n# Arquetipo Experto\n\nActúa como un **Competitive Intelligence Analyst**.\n\n# Parámetros\n\n- marca: {[marca]} → Tu marca\n- competidores: {[competidores]} → 3-5 competidores\n- dimensiones: {[dimensiones]} → Dimensiones a analizar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Analizar contexto, parámetros y adjuntos\n- [ ] Definir formato y estructura del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido completo y profesional\n- [ ] Validar coherencia y calidad\n- [ ] Entregar resultado listo para uso inmediato\n\n# Plan\n\n1. **Análisis**: Revisar parámetros, adjuntos y contexto.\n2. **Diseño**: Planificar estructura del entregable.\n3. **Ejecución**: Generar contenido con estándares de calidad.\n4. **Validación**: Verificar completitud y coherencia.\n5. **Entrega**: Resultado final listo para uso.\n\n# Entregable Esperado\n\nReporte con: matriz comparativa, strengths/weaknesses por competidor, oportunidades y amenazas",
    "paramCount": 4,
    "keywords": [
      "Competencia",
      "Inteligencia",
      "Reporte"
    ]
  },
  {
    "id": "mkt_buyer_persona",
    "label_title": "Buyer Persona Detallado",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- mercado: {[mercado]} → Mercado objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Persona\", \"Segmentación\", \"ICP\"]\n\n===prompt\n\n# Objetivo\n\nCrear buyer persona con demografía, psicografía, pain points y journey.\n\n# Arquetipo Experto\n\nActúa como un **Estratega de Marketing Digital** con 15 años en investigación de audiencias.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- mercado: {[mercado]} → Mercado objetivo\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nBuyer persona con avatar, quotes, canales, objeciones y triggers",
    "paramCount": 3,
    "keywords": [
      "Persona",
      "Segmentación",
      "ICP"
    ]
  },
  {
    "id": "mkt_competitive_digital",
    "label_title": "Análisis Competencia Digital",
    "category": "analytics",
    "content": "===parametros\n\n- marca: {[marca]} → Tu marca\n- competidores: {[competidores]} → 3-5 competidores\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Competitivo\", \"Digital\", \"Benchmark\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar presencia digital de competidores: SEO, redes, contenido, paid.\n\n# Arquetipo Experto\n\nActúa como un **Analista de Inteligencia Competitiva Digital**.\n\n# Parámetros\n\n- marca: {[marca]} → Tu marca\n- competidores: {[competidores]} → 3-5 competidores\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nMatriz comparativa con métricas, gaps y recomendaciones",
    "paramCount": 3,
    "keywords": [
      "Competitivo",
      "Digital",
      "Benchmark"
    ]
  },
  {
    "id": "mkt_email_template",
    "label_title": "Template de Email Reutilizable",
    "category": "email_mkt",
    "content": "===parametros\n\n- tipo: {[tipo]} → Tipo de email\n- marca: {[marca]} → Nombre de marca\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Template\", \"Email\", \"Modular\"]\n\n===prompt\n\n# Objetivo\n\nCrear template de email modular para diferentes campañas.\n\n# Arquetipo Experto\n\nActúa como un **Email Designer** con templates de alta conversión.\n\n# Parámetros\n\n- tipo: {[tipo]} → Tipo de email\n- marca: {[marca]} → Nombre de marca\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nTemplate responsive con: header, hero, body, CTA, footer + variantes",
    "paramCount": 3,
    "keywords": [
      "Template",
      "Email",
      "Modular"
    ]
  },
  {
    "id": "mkt_chatbot_design",
    "label_title": "Diseño de Chatbot",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- objetivo: {[objetivo]} → Objetivo\n- plataforma: {[plataforma]} → Plataforma\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Chatbot\", \"Conversacional\", \"Lead Gen\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar flujos de chatbot conversacional para lead gen.\n\n# Arquetipo Experto\n\nActúa como un **Conversational UX Designer**.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- objetivo: {[objetivo]} → Objetivo\n- plataforma: {[plataforma]} → Plataforma\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nFlujos con: greeting, qualificación, FAQ, handoff y métricas",
    "paramCount": 4,
    "keywords": [
      "Chatbot",
      "Conversacional",
      "Lead Gen"
    ]
  },
  {
    "id": "mkt_black_friday",
    "label_title": "Plan Black Friday",
    "category": "eventos",
    "content": "===parametros\n\n- productos: {[productos]} → Productos\n- descuento: {[descuento]} → Rango de descuento\n- canales: {[canales]} → Canales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Black Friday\", \"Promoción\", \"eCommerce\"]\n\n===prompt\n\n# Objetivo\n\nEstrategia completa para Black Friday/Cyber Monday.\n\n# Arquetipo Experto\n\nActúa como un **eCommerce Marketing Manager** con campañas de $1M+.\n\n# Parámetros\n\n- productos: {[productos]} → Productos\n- descuento: {[descuento]} → Rango de descuento\n- canales: {[canales]} → Canales\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nPlan con: timeline pre/during/post, offers, creative, email sequence y KPIs",
    "paramCount": 4,
    "keywords": [
      "Black Friday",
      "Promoción",
      "eCommerce"
    ]
  },
  {
    "id": "mkt_press_release",
    "label_title": "Comunicado de Prensa",
    "category": "output",
    "content": "===parametros\n\n- noticia: {[noticia]} → Noticia a comunicar\n- empresa: {[empresa]} → Nombre de empresa\n- contacto: {[contacto]} → Contacto de prensa\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"PR\", \"Prensa\", \"Comunicación\"]\n\n===prompt\n\n# Objetivo\n\nEscribir comunicado de prensa profesional.\n\n# Arquetipo Experto\n\nActúa como un **PR Specialist** con comunicados en medios tier 1.\n\n# Parámetros\n\n- noticia: {[noticia]} → Noticia a comunicar\n- empresa: {[empresa]} → Nombre de empresa\n- contacto: {[contacto]} → Contacto de prensa\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nComunicado con: título, subtítulo, lead, cuerpo, quotes, boilerplate y contacto",
    "paramCount": 4,
    "keywords": [
      "PR",
      "Prensa",
      "Comunicación"
    ]
  },
  {
    "id": "mkt_whatsapp",
    "label_title": "Estrategia WhatsApp Marketing",
    "category": "growth",
    "content": "===parametros\n\n- negocio: {[negocio]} → Tipo de negocio\n- audiencia: {[audiencia]} → Audiencia\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"WhatsApp\", \"Conversacional\", \"Messaging\"]\n\n===prompt\n\n# Objetivo\n\nPlan de marketing conversacional por WhatsApp.\n\n# Arquetipo Experto\n\nActúa como un **WhatsApp Business Strategist**.\n\n# Parámetros\n\n- negocio: {[negocio]} → Tipo de negocio\n- audiencia: {[audiencia]} → Audiencia\n- objetivo: {[objetivo]} → Objetivo\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nPlan con: flujos, templates, broadcasts, automatización y métricas",
    "paramCount": 4,
    "keywords": [
      "WhatsApp",
      "Conversacional",
      "Messaging"
    ]
  },
  {
    "id": "mkt_podcast_strategy",
    "label_title": "Estrategia de Podcast",
    "category": "contenidos",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- nicho: {[nicho]} → Nicho temático\n- formato: {[formato]} → Formato preferido\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Podcast\", \"Audio\", \"Contenido\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar podcast de marca que posicione como autoridad.\n\n# Arquetipo Experto\n\nActúa como un **Podcast Producer** con shows top 10.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- nicho: {[nicho]} → Nicho temático\n- formato: {[formato]} → Formato preferido\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEstrategia con: concepto, formato, calendario, distribución y monetización",
    "paramCount": 4,
    "keywords": [
      "Podcast",
      "Audio",
      "Contenido"
    ]
  },
  {
    "id": "mkt_visual_brand",
    "label_title": "Sistema Visual de Marca",
    "category": "estrategia_marca",
    "content": "===parametros\n\n- marca: {[marca]} → Nombre de la marca\n- valores: {[valores]} → Valores de marca\n- aplicaciones: {[aplicaciones]} → Aplicaciones principales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Visual\", \"Branding\", \"Design System\"]\n\n===prompt\n\n# Objetivo\n\nDefinir sistema visual consistente para todos los touchpoints.\n\n# Arquetipo Experto\n\nActúa como un **Brand Designer** con sistemas visuales premiados.\n\n# Parámetros\n\n- marca: {[marca]} → Nombre de la marca\n- valores: {[valores]} → Valores de marca\n- aplicaciones: {[aplicaciones]} → Aplicaciones principales\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nSistema con: paleta, tipografía, iconografía, imagery, grid y aplicaciones",
    "paramCount": 4,
    "keywords": [
      "Visual",
      "Branding",
      "Design System"
    ]
  },
  {
    "id": "mkt_loyalty_program",
    "label_title": "Programa de Fidelización",
    "category": "growth",
    "content": "===parametros\n\n- producto: {[producto]} → Producto\n- base_clientes: {[base_clientes]} → Tamaño de base\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos; si no, escribe \"No hay adjuntos\")\n\n===keywords\n[\"Loyalty\", \"Fidelización\", \"Retención\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar programa de loyalty que incremente retención y LTV.\n\n# Arquetipo Experto\n\nActúa como un **CRM Director** con programas de loyalty de 1M+ miembros.\n\n# Parámetros\n\n- producto: {[producto]} → Producto\n- base_clientes: {[base_clientes]} → Tamaño de base\n- presupuesto: {[presupuesto]} → Presupuesto\n- adjuntos: {[adjuntos]}\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad y coherencia\n- [ ] Entregar resultado listo para uso\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nPrograma con: tiers, beneficios, mecánica, tech stack y ROI proyectado",
    "paramCount": 4,
    "keywords": [
      "Loyalty",
      "Fidelización",
      "Retención"
    ]
  }
];
