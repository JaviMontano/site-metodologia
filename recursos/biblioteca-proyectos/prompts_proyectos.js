window.promptsProyectos = [
  {
    "id": "proy_a",
    "label_title": "Aprueba Entregable",
    "category": "meta",
    "content": "Aprobado. Procede con la entrega. Verifica que cumpla con los criterios de aceptación y el Definition of Done.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "proy_e",
    "label_title": "Eleva Plan/Reporte",
    "category": "meta",
    "content": "Aplica un bucle de excelencia de proyecto: evalúa el plan/reporte contra PMI standards. Mejora claridad, completitud y accionabilidad.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "proy_s",
    "label_title": "Sintetiza Status",
    "category": "meta",
    "content": "Sintetiza el estado actual del proyecto: % avance, RAG status, top 3 riesgos activos, top 3 decisiones pendientes y forecast actualizado.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "proy_r",
    "label_title": "Recalibra Cronograma",
    "category": "meta",
    "content": "Recalibra el cronograma basado en velocity actual. Identifica desviaciones, impacto en milestones y opciones de recuperación.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "proy_c",
    "label_title": "Comunica al Stakeholder",
    "category": "meta",
    "content": "Crea comunicación ejecutiva para el stakeholder: status en 3 bullets, decisiones que necesitan, riesgos que deben conocer y próximos pasos.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "proy_wbs",
    "label_title": "Estructura WBS",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Estructura\"]\n\n===prompt\n\n# Objetivo\n\nCrear WBS con 3+ niveles de descomposición.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estructura wbs",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Estructura"
    ]
  },
  {
    "id": "proy_cronograma",
    "label_title": "Cronograma con Critical Path",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Cronograma\"]\n\n===prompt\n\n# Objetivo\n\nConstruir cronograma con dependencias y ruta crítica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de cronograma con critical path",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Cronograma"
    ]
  },
  {
    "id": "proy_plan_recursos",
    "label_title": "Plan de Recursos",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar asignación de recursos y capacidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de recursos",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Plan"
    ]
  },
  {
    "id": "proy_project_charter",
    "label_title": "Project Charter",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nCrear acta de constitución de proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de project charter",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Project"
    ]
  },
  {
    "id": "proy_scope_statement",
    "label_title": "Scope Statement",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Scope\"]\n\n===prompt\n\n# Objetivo\n\nDefinir alcance con boundaries y exclusiones.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de scope statement",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Scope"
    ]
  },
  {
    "id": "proy_plan_comunicacion",
    "label_title": "Plan de Comunicación",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan de comunicación con cadencia.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de comunicación",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Plan"
    ]
  },
  {
    "id": "proy_plan_calidad",
    "label_title": "Plan de Calidad",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan de aseguramiento de calidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de calidad",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Plan"
    ]
  },
  {
    "id": "proy_plan_procurement",
    "label_title": "Plan de Procurement",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar adquisiciones y contratos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de procurement",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Plan"
    ]
  },
  {
    "id": "proy_plan_rrhh",
    "label_title": "Plan de Recursos Humanos",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar necesidades de talento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de recursos humanos",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Plan"
    ]
  },
  {
    "id": "proy_milestone_planning",
    "label_title": "Planificación de Milestones",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Planificación\"]\n\n===prompt\n\n# Objetivo\n\nDefinir milestones con criterios de cumplimiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de planificación de milestones",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Planificación"
    ]
  },
  {
    "id": "proy_cost_estimation",
    "label_title": "Estimación de Costos",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Estimación\"]\n\n===prompt\n\n# Objetivo\n\nEstimar costos con técnicas bottom-up/paramétrica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estimación de costos",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Estimación"
    ]
  },
  {
    "id": "proy_dependency_mapping",
    "label_title": "Mapeo de Dependencias",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Mapeo\"]\n\n===prompt\n\n# Objetivo\n\nMapear dependencias críticas entre workstreams.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mapeo de dependencias",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Mapeo"
    ]
  },
  {
    "id": "proy_daily_standup",
    "label_title": "Facilitación de Daily",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Facilitación\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar dailys de 15 minutos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de facilitación de daily",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Facilitación"
    ]
  },
  {
    "id": "proy_issue_tracking",
    "label_title": "Gestión de Issues",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Gestión\"]\n\n===prompt\n\n# Objetivo\n\nImplementar proceso de issue tracking.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gestión de issues",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Gestión"
    ]
  },
  {
    "id": "proy_sprint_execution",
    "label_title": "Ejecución de Sprint",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Ejecución\"]\n\n===prompt\n\n# Objetivo\n\nGestionar ejecución del sprint day-by-day.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de ejecución de sprint",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Ejecución"
    ]
  },
  {
    "id": "proy_team_coordination",
    "label_title": "Coordinación de Equipo",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Coordinación\"]\n\n===prompt\n\n# Objetivo\n\nCoordinar trabajo entre múltiples equipos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de coordinación de equipo",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Coordinación"
    ]
  },
  {
    "id": "proy_progress_tracking",
    "label_title": "Tracking de Progreso",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Tracking\"]\n\n===prompt\n\n# Objetivo\n\nImplementar tracking de avance efectivo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de tracking de progreso",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Tracking"
    ]
  },
  {
    "id": "proy_blocker_resolution",
    "label_title": "Resolución de Bloqueantes",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Resolución\"]\n\n===prompt\n\n# Objetivo\n\nFramework para desbloquear impedimentos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de resolución de bloqueantes",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Resolución"
    ]
  },
  {
    "id": "proy_scope_control",
    "label_title": "Control de Alcance",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Control\"]\n\n===prompt\n\n# Objetivo\n\nPrevenir y gestionar scope creep.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de control de alcance",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Control"
    ]
  },
  {
    "id": "proy_vendor_coordination",
    "label_title": "Coordinación con Vendors",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Coordinación\"]\n\n===prompt\n\n# Objetivo\n\nGestionar proveedores y dependencias externas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de coordinación con vendors",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Coordinación"
    ]
  },
  {
    "id": "proy_remote_team",
    "label_title": "Gestión de Equipo Remoto",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Gestión\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar trabajo de equipo distribuido.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gestión de equipo remoto",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Gestión"
    ]
  },
  {
    "id": "proy_meeting_facilitation",
    "label_title": "Facilitación de Reuniones",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Facilitación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar reuniones productivas de 30 min máximo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de facilitación de reuniones",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Facilitación"
    ]
  },
  {
    "id": "proy_risk_register",
    "label_title": "Registro de Riesgos",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Registro\"]\n\n===prompt\n\n# Objetivo\n\nCrear y mantener registro de riesgos del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de registro de riesgos",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Registro"
    ]
  },
  {
    "id": "proy_risk_response",
    "label_title": "Plan de Respuesta a Riesgos",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar respuestas: mitigar, transferir, aceptar, evitar.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de respuesta a riesgos",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Plan"
    ]
  },
  {
    "id": "proy_contingency",
    "label_title": "Plan de Contingencia",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar planes B y C para riesgos top.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de contingencia",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Plan"
    ]
  },
  {
    "id": "proy_risk_monitoring",
    "label_title": "Monitoreo de Riesgos",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Monitoreo\"]\n\n===prompt\n\n# Objetivo\n\nImplementar dashboard de monitoreo de riesgos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de monitoreo de riesgos",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Monitoreo"
    ]
  },
  {
    "id": "proy_escalation_protocol",
    "label_title": "Protocolo de Escalamiento",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Protocolo\"]\n\n===prompt\n\n# Objetivo\n\nDefinir rutas y criterios de escalamiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de protocolo de escalamiento",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Protocolo"
    ]
  },
  {
    "id": "proy_assumptions_log",
    "label_title": "Log de Supuestos",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Log\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar y validar supuestos del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de log de supuestos",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Log"
    ]
  },
  {
    "id": "proy_issue_log",
    "label_title": "Log de Issues",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Log\"]\n\n===prompt\n\n# Objetivo\n\nMantener log de issues con tracking de resolución.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de log de issues",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Log"
    ]
  },
  {
    "id": "proy_early_warning",
    "label_title": "Sistema de Early Warning",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Sistema\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar indicadores adelantados de problemas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sistema de early warning",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Sistema"
    ]
  },
  {
    "id": "proy_status_report",
    "label_title": "Reporte de Status",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nCrear reporte ejecutivo semanal.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de status",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Reporte"
    ]
  },
  {
    "id": "proy_stakeholder_map",
    "label_title": "Mapeo de Stakeholders",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Mapeo\"]\n\n===prompt\n\n# Objetivo\n\nMapear stakeholders con influencia e interés.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mapeo de stakeholders",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Mapeo"
    ]
  },
  {
    "id": "proy_executive_briefing",
    "label_title": "Briefing Ejecutivo",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Briefing\"]\n\n===prompt\n\n# Objetivo\n\nPreparar briefing para sponsor/C-level.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de briefing ejecutivo",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Briefing"
    ]
  },
  {
    "id": "proy_team_newsletter",
    "label_title": "Newsletter de Equipo",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Newsletter\"]\n\n===prompt\n\n# Objetivo\n\nCrear comunicación interna de proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de newsletter de equipo",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Newsletter"
    ]
  },
  {
    "id": "proy_decision_log",
    "label_title": "Log de Decisiones",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Log\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar decisiones con contexto y rationale.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de log de decisiones",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Log"
    ]
  },
  {
    "id": "proy_change_request",
    "label_title": "Gestión de Change Requests",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Gestión\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar y procesar solicitudes de cambio.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gestión de change requests",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Gestión"
    ]
  },
  {
    "id": "proy_quality_audit",
    "label_title": "Auditoría de Calidad",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Auditoría\"]\n\n===prompt\n\n# Objetivo\n\nAuditar entregables contra criterios de aceptación.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de auditoría de calidad",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Auditoría"
    ]
  },
  {
    "id": "proy_peer_review",
    "label_title": "Proceso de Peer Review",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Proceso\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar proceso de revisión entre pares.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de proceso de peer review",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Proceso"
    ]
  },
  {
    "id": "proy_acceptance_criteria",
    "label_title": "Criterios de Aceptación",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Criterios\"]\n\n===prompt\n\n# Objetivo\n\nDefinir AC testables para entregables.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de criterios de aceptación",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Criterios"
    ]
  },
  {
    "id": "proy_dod",
    "label_title": "Definition of Done",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Definition\"]\n\n===prompt\n\n# Objetivo\n\nEstablecer DoD del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de definition of done",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Definition"
    ]
  },
  {
    "id": "proy_dor",
    "label_title": "Definition of Ready",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Definition\"]\n\n===prompt\n\n# Objetivo\n\nEstablecer DoR para items del backlog.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de definition of ready",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Definition"
    ]
  },
  {
    "id": "proy_quality_metrics",
    "label_title": "Métricas de Calidad",
    "category": "calidad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Calidad\", \"Métricas\"]\n\n===prompt\n\n# Objetivo\n\nDefinir y trackear métricas de calidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en calidad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de métricas de calidad",
    "paramCount": 4,
    "keywords": [
      "Calidad",
      "Métricas"
    ]
  },
  {
    "id": "proy_budget_baseline",
    "label_title": "Baseline de Presupuesto",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Baseline\"]\n\n===prompt\n\n# Objetivo\n\nCrear baseline de presupuesto del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de baseline de presupuesto",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Baseline"
    ]
  },
  {
    "id": "proy_evm_analysis",
    "label_title": "Análisis EVM",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nCalcular Earned Value Management metrics.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis evm",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Análisis"
    ]
  },
  {
    "id": "proy_cost_tracking",
    "label_title": "Seguimiento de Costos",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Seguimiento\"]\n\n===prompt\n\n# Objetivo\n\nMonitorear gastos vs presupuesto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de seguimiento de costos",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Seguimiento"
    ]
  },
  {
    "id": "proy_forecast_budget",
    "label_title": "Forecast de Presupuesto",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Forecast\"]\n\n===prompt\n\n# Objetivo\n\nProyectar costo final del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de forecast de presupuesto",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Forecast"
    ]
  },
  {
    "id": "proy_variance_analysis",
    "label_title": "Análisis de Variaciones",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar variaciones de costo y schedule.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis de variaciones",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Análisis"
    ]
  },
  {
    "id": "proy_lessons_learned",
    "label_title": "Lecciones Aprendidas",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Lecciones\"]\n\n===prompt\n\n# Objetivo\n\nCapturar y documentar lecciones del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de lecciones aprendidas",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Lecciones"
    ]
  },
  {
    "id": "proy_handover_plan",
    "label_title": "Plan de Handover",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar transferencia de conocimiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de handover",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Plan"
    ]
  },
  {
    "id": "proy_closure_report",
    "label_title": "Reporte de Cierre",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte formal de cierre.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de cierre",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Reporte"
    ]
  },
  {
    "id": "proy_celebration_plan",
    "label_title": "Plan de Celebración",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar reconocimiento de logros del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de celebración",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Plan"
    ]
  },
  {
    "id": "proy_archive_plan",
    "label_title": "Plan de Archivo",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nOrganizar archivos y documentación de proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de archivo",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Plan"
    ]
  },
  {
    "id": "proy_retrospectiva",
    "label_title": "Retrospectiva de Sprint",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Retrospectiva\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar retrospectiva efectiva.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de retrospectiva de sprint",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Retrospectiva"
    ]
  },
  {
    "id": "proy_velocity_tracking",
    "label_title": "Tracking de Velocity",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Tracking\"]\n\n===prompt\n\n# Objetivo\n\nMonitorear y predecir velocity.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de tracking de velocity",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Tracking"
    ]
  },
  {
    "id": "proy_kanban_optimization",
    "label_title": "Optimización Kanban",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Optimización\"]\n\n===prompt\n\n# Objetivo\n\nOptimizar flujo con WIP limits y cycle time.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de optimización kanban",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Optimización"
    ]
  },
  {
    "id": "proy_sprint_review",
    "label_title": "Sprint Review",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nPreparar sprint review impactante.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sprint review",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Sprint"
    ]
  },
  {
    "id": "proy_backlog_refinement",
    "label_title": "Backlog Refinement",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Backlog\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar sesión de refinement.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de backlog refinement",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Backlog"
    ]
  },
  {
    "id": "proy_sprint_goal",
    "label_title": "Sprint Goal Design",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nCrear sprint goals efectivos y medibles.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sprint goal design",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Sprint"
    ]
  },
  {
    "id": "proy_team_agreements",
    "label_title": "Working Agreements",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Working\"]\n\n===prompt\n\n# Objetivo\n\nCrear acuerdos de equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de working agreements",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Working"
    ]
  },
  {
    "id": "proy_agile_metrics",
    "label_title": "Dashboard Ágil",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Dashboard\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de métricas ágiles.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de dashboard ágil",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Dashboard"
    ]
  },
  {
    "id": "proy_project_dashboard",
    "label_title": "Dashboard de Proyecto",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Dashboard\"]\n\n===prompt\n\n# Objetivo\n\nEspecificar dashboard ejecutivo de proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de dashboard de proyecto",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Dashboard"
    ]
  },
  {
    "id": "proy_project_report",
    "label_title": "Reporte Mensual",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte mensual de proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte mensual",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "proy_gantt_chart",
    "label_title": "Gantt Chart",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Gantt\"]\n\n===prompt\n\n# Objetivo\n\nCrear cronograma Gantt visual.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gantt chart",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Gantt"
    ]
  },
  {
    "id": "proy_risk_heatmap",
    "label_title": "Heatmap de Riesgos",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Heatmap\"]\n\n===prompt\n\n# Objetivo\n\nCrear visualización de riesgos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de heatmap de riesgos",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Heatmap"
    ]
  },
  {
    "id": "proy_resource_heatmap",
    "label_title": "Heatmap de Recursos",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Heatmap\"]\n\n===prompt\n\n# Objetivo\n\nCrear heatmap de carga de trabajo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de heatmap de recursos",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Heatmap"
    ]
  },
  {
    "id": "proy_burndown_chart",
    "label_title": "Burndown Chart",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Burndown\"]\n\n===prompt\n\n# Objetivo\n\nCrear y analizar burndown del sprint.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de burndown chart",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Burndown"
    ]
  },
  {
    "id": "proy_portfolio_view",
    "label_title": "Vista de Portfolio",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Vista\"]\n\n===prompt\n\n# Objetivo\n\nCrear vista consolidada de portfolio.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de vista de portfolio",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Vista"
    ]
  },
  {
    "id": "proy_team_performance",
    "label_title": "Reporte de Performance de Equipo",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte de rendimiento.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de performance de equipo",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "proy_extra_0",
    "label_title": "Team Health Check",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Team\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar salud del equipo con métricas cualitativas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de team health check",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Team"
    ]
  },
  {
    "id": "proy_extra_1",
    "label_title": "Capacity Planning",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Capacity\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar capacidad del equipo para el trimestre.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de capacity planning",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Capacity"
    ]
  },
  {
    "id": "proy_extra_2",
    "label_title": "Technical Spike",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Technical\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar spike de investigación técnica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de technical spike",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Technical"
    ]
  },
  {
    "id": "proy_extra_3",
    "label_title": "Cross-Team Alignment",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Cross-Team\"]\n\n===prompt\n\n# Objetivo\n\nAlinear equipos con dependencias cruzadas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de cross-team alignment",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Cross-Team"
    ]
  },
  {
    "id": "proy_extra_4",
    "label_title": "Innovation Time",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Innovation\"]\n\n===prompt\n\n# Objetivo\n\nEstructurar tiempo de innovación del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de innovation time",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Innovation"
    ]
  },
  {
    "id": "proy_extra_5",
    "label_title": "Knowledge Base",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Knowledge\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar base de conocimiento del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de knowledge base",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Knowledge"
    ]
  },
  {
    "id": "proy_extra_6",
    "label_title": "Team Onboarding",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Team\"]\n\n===prompt\n\n# Objetivo\n\nOnboarding de nuevo miembro al proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de team onboarding",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Team"
    ]
  },
  {
    "id": "proy_extra_7",
    "label_title": "Conflict Resolution",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Conflict\"]\n\n===prompt\n\n# Objetivo\n\nFramework para resolver conflictos de equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de conflict resolution",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Conflict"
    ]
  },
  {
    "id": "proy_extra_8",
    "label_title": "Project Recovery",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nRescatar proyecto en riesgo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de project recovery",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Project"
    ]
  },
  {
    "id": "proy_extra_9",
    "label_title": "Continuous Improvement",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Continuous\"]\n\n===prompt\n\n# Objetivo\n\nImplementar ciclo PDCA de mejora continua.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de continuous improvement",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Continuous"
    ]
  },
  {
    "id": "proy_extra_10",
    "label_title": "Team Building Virtual",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Team\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar actividad de team building remoto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de team building virtual",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Team"
    ]
  },
  {
    "id": "proy_extra_11",
    "label_title": "Vendor Management",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Vendor\"]\n\n===prompt\n\n# Objetivo\n\nGestionar proveedores y SLAs.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de vendor management",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Vendor"
    ]
  },
  {
    "id": "proy_extra_12",
    "label_title": "Project Post-Mortem",
    "category": "cierre",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cierre\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar post-mortem blameless.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en cierre.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de project post-mortem",
    "paramCount": 4,
    "keywords": [
      "Cierre",
      "Project"
    ]
  },
  {
    "id": "proy_extra_13",
    "label_title": "Automation Opportunities",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Automation\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar automatizaciones en procesos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de automation opportunities",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Automation"
    ]
  },
  {
    "id": "proy_extra_14",
    "label_title": "Stakeholder Reporting",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Stakeholder\"]\n\n===prompt\n\n# Objetivo\n\nCrear reportes ejecutivos para stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de stakeholder reporting",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Stakeholder"
    ]
  },
  {
    "id": "proy_extra_15",
    "label_title": "Release Planning",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Release\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar release trimestral.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de release planning",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Release"
    ]
  },
  {
    "id": "proy_extra_16",
    "label_title": "Team Skills Matrix",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Team\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar skills del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de team skills matrix",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Team"
    ]
  },
  {
    "id": "proy_extra_17",
    "label_title": "Sprint Goal Writing",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Sprint\"]\n\n===prompt\n\n# Objetivo\n\nEscribir sprint goals efectivos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de sprint goal writing",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Sprint"
    ]
  },
  {
    "id": "proy_extra_18",
    "label_title": "Epic Breakdown",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Epic\"]\n\n===prompt\n\n# Objetivo\n\nDescomponer épicas en historias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de epic breakdown",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Epic"
    ]
  },
  {
    "id": "proy_extra_19",
    "label_title": "Budget Variance",
    "category": "presupuesto",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Presupuesto\", \"Budget\"]\n\n===prompt\n\n# Objetivo\n\nAnalizar variaciones de presupuesto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en presupuesto.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de budget variance",
    "paramCount": 4,
    "keywords": [
      "Presupuesto",
      "Budget"
    ]
  },
  {
    "id": "proy_extra_20",
    "label_title": "Project Health Check",
    "category": "riesgos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Riesgos\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nCheck de salud del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en riesgos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de project health check",
    "paramCount": 4,
    "keywords": [
      "Riesgos",
      "Project"
    ]
  },
  {
    "id": "proy_extra_21",
    "label_title": "Meeting Audit",
    "category": "ejecucion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ejecucion\", \"Meeting\"]\n\n===prompt\n\n# Objetivo\n\nReducir reuniones innecesarias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ejecucion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de meeting audit",
    "paramCount": 4,
    "keywords": [
      "Ejecucion",
      "Meeting"
    ]
  },
  {
    "id": "proy_extra_22",
    "label_title": "Retrospective Formats",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Retrospective\"]\n\n===prompt\n\n# Objetivo\n\n10 formatos de retrospectiva creativos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de retrospective formats",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Retrospective"
    ]
  },
  {
    "id": "proy_extra_23",
    "label_title": "Cross-Functional Team",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Cross-Functional\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar equipo cross-funcional.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de cross-functional team",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Cross-Functional"
    ]
  },
  {
    "id": "proy_extra_24",
    "label_title": "Project Success Criteria",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nDefinir criterios de éxito del proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de project success criteria",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Project"
    ]
  },
  {
    "id": "proy_extra_25",
    "label_title": "Agile Coach Playbook",
    "category": "agile",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Agile\", \"Agile\"]\n\n===prompt\n\n# Objetivo\n\nCrear playbook de coaching ágil.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en agile.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de agile coach playbook",
    "paramCount": 4,
    "keywords": [
      "Agile",
      "Agile"
    ]
  },
  {
    "id": "proy_extra_26",
    "label_title": "Project Timeline Estimation",
    "category": "planificacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Planificacion\", \"Project\"]\n\n===prompt\n\n# Objetivo\n\nEstimar timeline con incertidumbre.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en planificacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de project timeline estimation",
    "paramCount": 4,
    "keywords": [
      "Planificacion",
      "Project"
    ]
  },
  {
    "id": "proy_extra_27",
    "label_title": "Team Communication Cadence",
    "category": "comunicacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comunicacion\", \"Team\"]\n\n===prompt\n\n# Objetivo\n\nDefinir cadencia de comunicación del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en comunicacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de team communication cadence",
    "paramCount": 4,
    "keywords": [
      "Comunicacion",
      "Team"
    ]
  }
];
