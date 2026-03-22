window.promptsProductos = [
  {
    "id": "prod_a",
    "label_title": "Aprueba Feature",
    "category": "meta",
    "content": "Aprobado. Procede con la implementación. Verifica alineamiento con el sprint goal y acceptance criteria.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "prod_e",
    "label_title": "Eleva Experiencia",
    "category": "meta",
    "content": "Aplica un bucle de excelencia de producto: evalúa la feature/flujo contra los mejores productos del mercado. Identifica 3 mejoras de UX, claridad o valor y aplícalas.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "prod_s",
    "label_title": "Sintetiza Feedback",
    "category": "meta",
    "content": "Sintetiza el feedback recibido de usuarios/stakeholders. Consolida: patrones comunes, severidad, impacto en métricas y top 3 acciones recomendadas.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "prod_r",
    "label_title": "Reprioriza Backlog",
    "category": "meta",
    "content": "Reprioriza el backlog actual usando RICE scoring. Identifica los top 5 items de mayor impacto y justifica el orden.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "prod_c",
    "label_title": "Crea User Story",
    "category": "meta",
    "content": "Crea una user story completa: As a [user], I want [action], so that [benefit]. Incluye acceptance criteria, edge cases y definition of done.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "prod_user_research",
    "label_title": "User Research Plan",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"User\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar investigación de usuario con métodos mixtos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de user research plan",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "User"
    ]
  },
  {
    "id": "prod_jtbd",
    "label_title": "Jobs-to-be-Done",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Jobs-to-be-Done\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar jobs funcionales, emocionales y sociales.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de jobs-to-be-done",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Jobs-to-be-Done"
    ]
  },
  {
    "id": "prod_problem_framing",
    "label_title": "Problem Framing",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Problem\"]\n\n===prompt\n\n# Objetivo\n\nEnmarcar el problema correcto antes de diseñar soluciones.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de problem framing",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Problem"
    ]
  },
  {
    "id": "prod_customer_interview",
    "label_title": "Guía de Entrevista",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Guía\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar guía de entrevista que revele insights reales.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de guía de entrevista",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Guía"
    ]
  },
  {
    "id": "prod_competitive_analysis",
    "label_title": "Análisis Competitivo de Producto",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar features y posicionamiento vs competencia.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis competitivo de producto",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Análisis"
    ]
  },
  {
    "id": "prod_persona_creation",
    "label_title": "Creación de Personas",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Creación\"]\n\n===prompt\n\n# Objetivo\n\nConstruir personas basadas en datos reales.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de creación de personas",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Creación"
    ]
  },
  {
    "id": "prod_empathy_map",
    "label_title": "Mapa de Empatía",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Mapa\"]\n\n===prompt\n\n# Objetivo\n\nCrear mapa de empatía para segmento clave.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mapa de empatía",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Mapa"
    ]
  },
  {
    "id": "prod_opportunity_assessment",
    "label_title": "Evaluación de Oportunidad",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Evaluación\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar oportunidad de producto con sizing y viabilidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de evaluación de oportunidad",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Evaluación"
    ]
  },
  {
    "id": "prod_discovery_sprint",
    "label_title": "Sprint de Discovery",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nEjecutar sprint de discovery de 1 semana.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sprint de discovery",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Sprint"
    ]
  },
  {
    "id": "prod_assumption_mapping",
    "label_title": "Mapeo de Supuestos",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Mapeo\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar y priorizar supuestos de riesgo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mapeo de supuestos",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Mapeo"
    ]
  },
  {
    "id": "prod_voice_of_customer",
    "label_title": "Voz del Cliente",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Voz\"]\n\n===prompt\n\n# Objetivo\n\nSistematizar insights de feedback de clientes.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de voz del cliente",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Voz"
    ]
  },
  {
    "id": "prod_usability_testing",
    "label_title": "Plan de Usability Testing",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar test de usabilidad con tareas y métricas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de usability testing",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Plan"
    ]
  },
  {
    "id": "prod_product_vision",
    "label_title": "Visión de Producto",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Visión\"]\n\n===prompt\n\n# Objetivo\n\nArticular visión de producto que inspire y alinee.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de visión de producto",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Visión"
    ]
  },
  {
    "id": "prod_roadmap_now_next",
    "label_title": "Roadmap Now/Next/Later",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Roadmap\"]\n\n===prompt\n\n# Objetivo\n\nCrear roadmap con priorización temporal.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de roadmap now/next/later",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Roadmap"
    ]
  },
  {
    "id": "prod_go_to_market",
    "label_title": "Go-to-Market de Producto",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Go-to-Market\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar GTM para lanzamiento de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de go-to-market de producto",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Go-to-Market"
    ]
  },
  {
    "id": "prod_pricing_product",
    "label_title": "Pricing de Producto",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Pricing\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar modelo de precios con tiers y value metrics.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pricing de producto",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Pricing"
    ]
  },
  {
    "id": "prod_product_led",
    "label_title": "Estrategia PLG",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar Product-Led Growth motion.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia plg",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Estrategia"
    ]
  },
  {
    "id": "prod_competitive_moat",
    "label_title": "Análisis de Moat",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar defensibilidad del producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis de moat",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Análisis"
    ]
  },
  {
    "id": "prod_growth_model",
    "label_title": "Growth Model",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Growth\"]\n\n===prompt\n\n# Objetivo\n\nModelar motor de crecimiento con loops.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de growth model",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Growth"
    ]
  },
  {
    "id": "prod_market_positioning",
    "label_title": "Posicionamiento de Producto",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Posicionamiento\"]\n\n===prompt\n\n# Objetivo\n\nDefinir posicionamiento vs alternativas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de posicionamiento de producto",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Posicionamiento"
    ]
  },
  {
    "id": "prod_platform_thinking",
    "label_title": "Pensamiento de Plataforma",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Pensamiento\"]\n\n===prompt\n\n# Objetivo\n\nEvolucionar producto hacia modelo de plataforma.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pensamiento de plataforma",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Pensamiento"
    ]
  },
  {
    "id": "prod_sunset_plan",
    "label_title": "Plan de Sunset",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar deprecación de producto/feature.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de sunset",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Plan"
    ]
  },
  {
    "id": "prod_user_stories",
    "label_title": "User Story Workshop",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"User\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar sesión de escritura de user stories.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de user story workshop",
    "paramCount": 4,
    "keywords": [
      "Design",
      "User"
    ]
  },
  {
    "id": "prod_wireframe_spec",
    "label_title": "Especificación de Wireframe",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Especificación\"]\n\n===prompt\n\n# Objetivo\n\nCrear spec para wireframes de alta fidelidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de especificación de wireframe",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Especificación"
    ]
  },
  {
    "id": "prod_ux_audit",
    "label_title": "Auditoría UX",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Auditoría\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar usabilidad con heurísticas de Nielsen.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de auditoría ux",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Auditoría"
    ]
  },
  {
    "id": "prod_information_architecture",
    "label_title": "Arquitectura de Información",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Arquitectura\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar IA del producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de arquitectura de información",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Arquitectura"
    ]
  },
  {
    "id": "prod_design_system",
    "label_title": "Design System de Producto",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Design\"]\n\n===prompt\n\n# Objetivo\n\nCrear o evolucionar design system.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de design system de producto",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Design"
    ]
  },
  {
    "id": "prod_accessibility_plan",
    "label_title": "Plan de Accesibilidad",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar WCAG compliance.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de accesibilidad",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Plan"
    ]
  },
  {
    "id": "prod_onboarding_design",
    "label_title": "Diseño de Onboarding",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar flujo de primer uso.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de onboarding",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Diseño"
    ]
  },
  {
    "id": "prod_micro_interactions",
    "label_title": "Micro-interacciones",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Micro-interacciones\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar micro-interacciones que deleiten.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de micro-interacciones",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Micro-interacciones"
    ]
  },
  {
    "id": "prod_responsive_strategy",
    "label_title": "Estrategia Responsive",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar adaptación mobile-first.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia responsive",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Estrategia"
    ]
  },
  {
    "id": "prod_prototype_spec",
    "label_title": "Especificación de Prototipo",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"Especificación\"]\n\n===prompt\n\n# Objetivo\n\nCrear spec para prototipo interactivo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de especificación de prototipo",
    "paramCount": 4,
    "keywords": [
      "Design",
      "Especificación"
    ]
  },
  {
    "id": "prod_north_star",
    "label_title": "North Star Metric",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"North\"]\n\n===prompt\n\n# Objetivo\n\nDefinir y alinear North Star metric del producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de north star metric",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "North"
    ]
  },
  {
    "id": "prod_funnel_analysis",
    "label_title": "Análisis de Funnel",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar funnel de conversión con drop-off analysis.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis de funnel",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Análisis"
    ]
  },
  {
    "id": "prod_retention_cohort",
    "label_title": "Análisis de Cohortes de Retención",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nMedir retención por cohorte.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis de cohortes de retención",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Análisis"
    ]
  },
  {
    "id": "prod_product_market_fit",
    "label_title": "Evaluación de PMF",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Evaluación\"]\n\n===prompt\n\n# Objetivo\n\nMedir Product-Market Fit con Sean Ellis test.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de evaluación de pmf",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Evaluación"
    ]
  },
  {
    "id": "prod_feature_adoption",
    "label_title": "Medición de Adopción de Feature",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Medición\"]\n\n===prompt\n\n# Objetivo\n\nMedir adopción de nueva feature.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de medición de adopción de feature",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Medición"
    ]
  },
  {
    "id": "prod_health_score",
    "label_title": "Product Health Score",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar health score del producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de product health score",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Product"
    ]
  },
  {
    "id": "prod_engagement_metrics",
    "label_title": "Métricas de Engagement",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Métricas\"]\n\n===prompt\n\n# Objetivo\n\nDefinir y trackear engagement metrics.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de métricas de engagement",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Métricas"
    ]
  },
  {
    "id": "prod_churn_prediction",
    "label_title": "Predicción de Churn",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Predicción\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar modelo de predicción de churn.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de predicción de churn",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Predicción"
    ]
  },
  {
    "id": "prod_experiment_design",
    "label_title": "Diseño de Experimento",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar experimento de producto con hipótesis.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de experimento",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Diseño"
    ]
  },
  {
    "id": "prod_feature_prioritization",
    "label_title": "Priorización RICE",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Priorización\"]\n\n===prompt\n\n# Objetivo\n\nPriorizar features con RICE framework.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de priorización rice",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Priorización"
    ]
  },
  {
    "id": "prod_ab_test_product",
    "label_title": "A/B Test de Producto",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"A/B\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar A/B test con rigor estadístico.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de a/b test de producto",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "A/B"
    ]
  },
  {
    "id": "prod_activation_optimization",
    "label_title": "Optimización de Activación",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Optimización\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar flujo de activación.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de optimización de activación",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Optimización"
    ]
  },
  {
    "id": "prod_expansion_revenue",
    "label_title": "Expansion Revenue",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Expansion\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar triggers de upsell/cross-sell.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de expansion revenue",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Expansion"
    ]
  },
  {
    "id": "prod_referral_product",
    "label_title": "Programa de Referidos",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Programa\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar referral loop en el producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de programa de referidos",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Programa"
    ]
  },
  {
    "id": "prod_viral_loop",
    "label_title": "Loop Viral",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Loop\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar mecánica viral orgánica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de loop viral",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Loop"
    ]
  },
  {
    "id": "prod_beta_program",
    "label_title": "Programa Beta",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Programa\"]\n\n===prompt\n\n# Objetivo\n\nEstructurar programa de beta testers.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de programa beta",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Programa"
    ]
  },
  {
    "id": "prod_launch_checklist",
    "label_title": "Checklist de Lanzamiento",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Checklist\"]\n\n===prompt\n\n# Objetivo\n\nChecklist completo pre-launch.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de checklist de lanzamiento",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Checklist"
    ]
  },
  {
    "id": "prod_release_notes",
    "label_title": "Release Notes",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Release\"]\n\n===prompt\n\n# Objetivo\n\nEscribir release notes que generen adopción.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de release notes",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Release"
    ]
  },
  {
    "id": "prod_feature_announcement",
    "label_title": "Anuncio de Feature",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Anuncio\"]\n\n===prompt\n\n# Objetivo\n\nComunicar nueva feature a usuarios.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de anuncio de feature",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Anuncio"
    ]
  },
  {
    "id": "prod_rollout_plan",
    "label_title": "Plan de Rollout Gradual",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar rollout con feature flags.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de rollout gradual",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Plan"
    ]
  },
  {
    "id": "prod_launch_metrics",
    "label_title": "Métricas de Lanzamiento",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Métricas\"]\n\n===prompt\n\n# Objetivo\n\nDefinir success metrics para launch.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de métricas de lanzamiento",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Métricas"
    ]
  },
  {
    "id": "prod_backlog_grooming",
    "label_title": "Backlog Grooming",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Backlog\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar sesión de refinement.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de backlog grooming",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Backlog"
    ]
  },
  {
    "id": "prod_sprint_planning",
    "label_title": "Sprint Planning de Producto",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar sprint con product goals.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sprint planning de producto",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Sprint"
    ]
  },
  {
    "id": "prod_stakeholder_update",
    "label_title": "Update a Stakeholders",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Update\"]\n\n===prompt\n\n# Objetivo\n\nCrear reporte de producto para stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de update a stakeholders",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Update"
    ]
  },
  {
    "id": "prod_product_ops",
    "label_title": "Product Ops Setup",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nEstructurar operaciones de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de product ops setup",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Product"
    ]
  },
  {
    "id": "prod_quarterly_review",
    "label_title": "Review Trimestral",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Review\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar product quarterly review.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de review trimestral",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Review"
    ]
  },
  {
    "id": "prod_prd_document",
    "label_title": "PRD Completo",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"PRD\"]\n\n===prompt\n\n# Objetivo\n\nGenerar Product Requirements Document.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de prd completo",
    "paramCount": 4,
    "keywords": [
      "Output",
      "PRD"
    ]
  },
  {
    "id": "prod_pitch_deck",
    "label_title": "Pitch Deck de Producto",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Pitch\"]\n\n===prompt\n\n# Objetivo\n\nCrear pitch deck para inversores/stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pitch deck de producto",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Pitch"
    ]
  },
  {
    "id": "prod_competitive_landscape",
    "label_title": "Mapa Competitivo",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Mapa\"]\n\n===prompt\n\n# Objetivo\n\nCrear landscape competitivo visual.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mapa competitivo",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Mapa"
    ]
  },
  {
    "id": "prod_product_brief",
    "label_title": "Brief de Producto",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Brief\"]\n\n===prompt\n\n# Objetivo\n\nCrear brief ejecutivo de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de brief de producto",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Brief"
    ]
  },
  {
    "id": "prod_dashboard_producto",
    "label_title": "Dashboard de Producto",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Dashboard\"]\n\n===prompt\n\n# Objetivo\n\nEspecificar dashboard de métricas de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de dashboard de producto",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Dashboard"
    ]
  },
  {
    "id": "prod_user_journey_map",
    "label_title": "User Journey Map",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"User\"]\n\n===prompt\n\n# Objetivo\n\nMapear journey del usuario.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de user journey map",
    "paramCount": 4,
    "keywords": [
      "Output",
      "User"
    ]
  },
  {
    "id": "prod_feature_spec",
    "label_title": "Feature Spec",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Feature\"]\n\n===prompt\n\n# Objetivo\n\nEscribir especificación de feature.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de feature spec",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Feature"
    ]
  },
  {
    "id": "prod_product_strategy_doc",
    "label_title": "Documento de Estrategia",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Documento\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar estrategia de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de documento de estrategia",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Documento"
    ]
  },
  {
    "id": "prod_quarterly_report",
    "label_title": "Reporte Trimestral",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte trimestral de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte trimestral",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "prod_product_retrospective",
    "label_title": "Retrospectiva de Producto",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Retrospectiva\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar retro de ciclo de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de retrospectiva de producto",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Retrospectiva"
    ]
  },
  {
    "id": "prod_extra_0",
    "label_title": "Feature Flag Strategy",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Feature\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar rollout con feature flags.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de feature flag strategy",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Feature"
    ]
  },
  {
    "id": "prod_extra_1",
    "label_title": "Product Metrics Dashboard",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de métricas de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product metrics dashboard",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Product"
    ]
  },
  {
    "id": "prod_extra_2",
    "label_title": "User Onboarding Email",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"User\"]\n\n===prompt\n\n# Objetivo\n\nCrear secuencia de emails de onboarding.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de user onboarding email",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "User"
    ]
  },
  {
    "id": "prod_extra_3",
    "label_title": "Competitor Feature Matrix",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Competitor\"]\n\n===prompt\n\n# Objetivo\n\nCrear matriz comparativa de features.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de competitor feature matrix",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Competitor"
    ]
  },
  {
    "id": "prod_extra_4",
    "label_title": "Product Feedback Survey",
    "category": "feedback",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Feedback\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar encuesta de feedback de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en feedback.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product feedback survey",
    "paramCount": 4,
    "keywords": [
      "Feedback",
      "Product"
    ]
  },
  {
    "id": "prod_extra_5",
    "label_title": "Sprint Retrospective Product",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar retro de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de sprint retrospective product",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Sprint"
    ]
  },
  {
    "id": "prod_extra_6",
    "label_title": "Feature Request Triage",
    "category": "feedback",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Feedback\", \"Feature\"]\n\n===prompt\n\n# Objetivo\n\nFramework para evaluar feature requests.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en feedback.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de feature request triage",
    "paramCount": 4,
    "keywords": [
      "Feedback",
      "Feature"
    ]
  },
  {
    "id": "prod_extra_7",
    "label_title": "Product Analytics Setup",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar eventos de tracking de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product analytics setup",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Product"
    ]
  },
  {
    "id": "prod_extra_8",
    "label_title": "Release Communication",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Release\"]\n\n===prompt\n\n# Objetivo\n\nComunicar lanzamiento a stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de release communication",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Release"
    ]
  },
  {
    "id": "prod_extra_9",
    "label_title": "Product Debt Assessment",
    "category": "operations",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Operations\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar deuda de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en operations.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product debt assessment",
    "paramCount": 4,
    "keywords": [
      "Operations",
      "Product"
    ]
  },
  {
    "id": "prod_extra_10",
    "label_title": "Concept Testing",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Concept\"]\n\n===prompt\n\n# Objetivo\n\nTestear concepto antes de desarrollo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de concept testing",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Concept"
    ]
  },
  {
    "id": "prod_extra_11",
    "label_title": "Value Proposition Canvas",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Value\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar canvas de propuesta de valor.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de value proposition canvas",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Value"
    ]
  },
  {
    "id": "prod_extra_12",
    "label_title": "Customer Advisory Board",
    "category": "feedback",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Feedback\", \"Customer\"]\n\n===prompt\n\n# Objetivo\n\nEstructurar board de advisors de cliente.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en feedback.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de customer advisory board",
    "paramCount": 4,
    "keywords": [
      "Feedback",
      "Customer"
    ]
  },
  {
    "id": "prod_extra_13",
    "label_title": "Product Benchmark",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nBenchmarking de producto vs industria.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product benchmark",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Product"
    ]
  },
  {
    "id": "prod_extra_14",
    "label_title": "Feature Sunset Plan",
    "category": "launch",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Launch\", \"Feature\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar deprecación de feature.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en launch.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de feature sunset plan",
    "paramCount": 4,
    "keywords": [
      "Launch",
      "Feature"
    ]
  },
  {
    "id": "prod_extra_15",
    "label_title": "UX Heuristic Evaluation",
    "category": "design",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Design\", \"UX\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar con heurísticas de Nielsen.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en design.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de ux heuristic evaluation",
    "paramCount": 4,
    "keywords": [
      "Design",
      "UX"
    ]
  },
  {
    "id": "prod_extra_16",
    "label_title": "Customer Segmentation Product",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Customer\"]\n\n===prompt\n\n# Objetivo\n\nSegmentar usuarios por comportamiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de customer segmentation product",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Customer"
    ]
  },
  {
    "id": "prod_extra_17",
    "label_title": "Product-Led Onboarding",
    "category": "growth",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Growth\", \"Product-Led\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar onboarding in-product.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en growth.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product-led onboarding",
    "paramCount": 4,
    "keywords": [
      "Growth",
      "Product-Led"
    ]
  },
  {
    "id": "prod_extra_18",
    "label_title": "Data-Driven Prioritization",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Data-Driven\"]\n\n===prompt\n\n# Objetivo\n\nPriorizar con datos, no opiniones.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de data-driven prioritization",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Data-Driven"
    ]
  },
  {
    "id": "prod_extra_19",
    "label_title": "Product Narrative",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nCrear narrativa de producto para stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product narrative",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Product"
    ]
  },
  {
    "id": "prod_extra_20",
    "label_title": "Integration Roadmap",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Integration\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar roadmap de integraciones.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de integration roadmap",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Integration"
    ]
  },
  {
    "id": "prod_extra_21",
    "label_title": "NPS Action Plan",
    "category": "feedback",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Feedback\", \"NPS\"]\n\n===prompt\n\n# Objetivo\n\nCrear plan de acción basado en NPS.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en feedback.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de nps action plan",
    "paramCount": 4,
    "keywords": [
      "Feedback",
      "NPS"
    ]
  },
  {
    "id": "prod_extra_22",
    "label_title": "Product KPI Tree",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nConstruir árbol de KPIs de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product kpi tree",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Product"
    ]
  },
  {
    "id": "prod_extra_23",
    "label_title": "Usage Analytics Report",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Usage\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar patrones de uso del producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de usage analytics report",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Usage"
    ]
  },
  {
    "id": "prod_extra_24",
    "label_title": "Customer Success Playbook",
    "category": "feedback",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Feedback\", \"Customer\"]\n\n===prompt\n\n# Objetivo\n\nCrear playbook de customer success.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en feedback.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de customer success playbook",
    "paramCount": 4,
    "keywords": [
      "Feedback",
      "Customer"
    ]
  },
  {
    "id": "prod_extra_25",
    "label_title": "Product Positioning Map",
    "category": "strategy",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Strategy\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nCrear mapa de posicionamiento de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en strategy.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product positioning map",
    "paramCount": 4,
    "keywords": [
      "Strategy",
      "Product"
    ]
  },
  {
    "id": "prod_extra_26",
    "label_title": "Feature Impact Analysis",
    "category": "metrics",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Metrics\", \"Feature\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar impacto de feature post-lanzamiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en metrics.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de feature impact analysis",
    "paramCount": 4,
    "keywords": [
      "Metrics",
      "Feature"
    ]
  },
  {
    "id": "prod_extra_27",
    "label_title": "Product Innovation Sprint",
    "category": "discovery",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Discovery\", \"Product\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar sprint de innovación de producto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en discovery.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de product innovation sprint",
    "paramCount": 4,
    "keywords": [
      "Discovery",
      "Product"
    ]
  }
];
