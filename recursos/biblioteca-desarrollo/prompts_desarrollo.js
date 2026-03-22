window.promptsDesarrollo = [
  {
    "id": "dev_a",
    "label_title": "Aprueba y Mergea",
    "category": "meta",
    "content": "Aprobado. Procede con el merge. Verifica que CI pase y no haya conflictos.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "dev_e",
    "label_title": "Eleva Calidad de Código",
    "category": "meta",
    "content": "Aplica un bucle de excelencia técnica: revisa el código contra clean code principles. Identifica 3 mejoras de legibilidad, performance o mantenibilidad y aplícalas.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "dev_s",
    "label_title": "Sintetiza PR/Deuda",
    "category": "meta",
    "content": "Sintetiza el estado del PR o la deuda técnica actual. Consolida: cambios clave, riesgos, test coverage y decisiones pendientes.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "dev_r",
    "label_title": "Refactoriza Sección",
    "category": "meta",
    "content": "Refactoriza la sección de código identificada: mejora nombres, extrae funciones, reduce complejidad ciclomática. Mantén el mismo comportamiento.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "dev_c",
    "label_title": "Comenta y Documenta",
    "category": "meta",
    "content": "Agrega documentación concisa: JSDoc/docstrings para funciones públicas, comentarios solo donde la lógica no es obvia, y actualiza el README si aplica.",
    "paramCount": 0,
    "keywords": []
  },
  {
    "id": "dev_system_design",
    "label_title": "System Design",
    "category": "arquitectura",
    "content": "===parametros\n\n- sistema: {[sistema]} → Sistema a diseñar\n- requisitos: {[requisitos]} → Requisitos clave\n- restricciones: {[restricciones]} → Restricciones técnicas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"System\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar arquitectura de sistema completa con diagramas C4, decisiones de trade-off y patrones.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- sistema: {[sistema]} → Sistema a diseñar\n- requisitos: {[requisitos]} → Requisitos clave\n- restricciones: {[restricciones]} → Restricciones técnicas\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de system design",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "System"
    ]
  },
  {
    "id": "dev_microservices",
    "label_title": "Descomposición en Microservicios",
    "category": "arquitectura",
    "content": "===parametros\n\n- monolito: {[monolito]} → Descripción del monolito\n- dominios: {[dominios]} → Dominios identificados\n- prioridad: {[prioridad]} → Servicio a extraer primero\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Descomposición\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar migración de monolito a microservicios con bounded contexts.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- monolito: {[monolito]} → Descripción del monolito\n- dominios: {[dominios]} → Dominios identificados\n- prioridad: {[prioridad]} → Servicio a extraer primero\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de descomposición en microservicios",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Descomposición"
    ]
  },
  {
    "id": "dev_api_rest_design",
    "label_title": "Diseño de API REST",
    "category": "arquitectura",
    "content": "===parametros\n\n- dominio: {[dominio]} → Dominio de la API\n- operaciones: {[operaciones]} → Operaciones principales\n- auth: {[auth]} → Modelo de autenticación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar API RESTful robusta con resources, versioning y error handling.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- dominio: {[dominio]} → Dominio de la API\n- operaciones: {[operaciones]} → Operaciones principales\n- auth: {[auth]} → Modelo de autenticación\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de api rest",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Diseño"
    ]
  },
  {
    "id": "dev_event_driven",
    "label_title": "Arquitectura Event-Driven",
    "category": "arquitectura",
    "content": "===parametros\n\n- dominio: {[dominio]} → Dominio\n- eventos: {[eventos]} → Eventos principales\n- consistencia: {[consistencia]} → Requisitos de consistencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Arquitectura\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar sistema basado en eventos con CQRS, event sourcing y saga patterns.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- dominio: {[dominio]} → Dominio\n- eventos: {[eventos]} → Eventos principales\n- consistencia: {[consistencia]} → Requisitos de consistencia\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de arquitectura event-driven",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Arquitectura"
    ]
  },
  {
    "id": "dev_graphql_design",
    "label_title": "Diseño de Schema GraphQL",
    "category": "arquitectura",
    "content": "===parametros\n\n- dominio: {[dominio]} → Dominio\n- entidades: {[entidades]} → Entidades principales\n- relaciones: {[relaciones]} → Relaciones entre entidades\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar API GraphQL con types, queries, mutations y subscriptions.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- dominio: {[dominio]} → Dominio\n- entidades: {[entidades]} → Entidades principales\n- relaciones: {[relaciones]} → Relaciones entre entidades\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de schema graphql",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Diseño"
    ]
  },
  {
    "id": "dev_serverless",
    "label_title": "Arquitectura Serverless",
    "category": "arquitectura",
    "content": "===parametros\n\n- cloud: {[cloud]} → Cloud provider\n- funciones: {[funciones]} → Funciones principales\n- triggers: {[triggers]} → Triggers/eventos\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Arquitectura\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar aplicación serverless optimizando cold starts, costs y scalability.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- cloud: {[cloud]} → Cloud provider\n- funciones: {[funciones]} → Funciones principales\n- triggers: {[triggers]} → Triggers/eventos\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de arquitectura serverless",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Arquitectura"
    ]
  },
  {
    "id": "dev_data_pipeline",
    "label_title": "Pipeline de Datos",
    "category": "arquitectura",
    "content": "===parametros\n\n- fuentes: {[fuentes]} → Fuentes de datos\n- destino: {[destino]} → Destino\n- frecuencia: {[frecuencia]} → Frecuencia de procesamiento\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Pipeline\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar ETL/ELT pipeline con ingestion, transformación y serving.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- fuentes: {[fuentes]} → Fuentes de datos\n- destino: {[destino]} → Destino\n- frecuencia: {[frecuencia]} → Frecuencia de procesamiento\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pipeline de datos",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Pipeline"
    ]
  },
  {
    "id": "dev_caching_strategy",
    "label_title": "Estrategia de Caching",
    "category": "arquitectura",
    "content": "===parametros\n\n- sistema: {[sistema]} → Sistema\n- patrones: {[patrones]} → Patrones de acceso\n- volumen: {[volumen]} → Volumen de requests\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar capas de caché con invalidation, TTL y consistency.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- sistema: {[sistema]} → Sistema\n- patrones: {[patrones]} → Patrones de acceso\n- volumen: {[volumen]} → Volumen de requests\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de caching",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Estrategia"
    ]
  },
  {
    "id": "dev_realtime_system",
    "label_title": "Sistema Realtime",
    "category": "arquitectura",
    "content": "===parametros\n\n- caso_uso: {[caso_uso]} → Caso de uso\n- concurrencia: {[concurrencia]} → Usuarios concurrentes\n- latencia: {[latencia]} → Latencia máxima\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Sistema\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar sistema en tiempo real con WebSocket/SSE.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- caso_uso: {[caso_uso]} → Caso de uso\n- concurrencia: {[concurrencia]} → Usuarios concurrentes\n- latencia: {[latencia]} → Latencia máxima\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sistema realtime",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Sistema"
    ]
  },
  {
    "id": "dev_auth_architecture",
    "label_title": "Arquitectura de Auth",
    "category": "arquitectura",
    "content": "===parametros\n\n- tipo: {[tipo]} → Tipo (OAuth, OIDC, SAML)\n- roles: {[roles]} → Roles y permisos\n- integraciones: {[integraciones]} → Sistemas a integrar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Arquitectura\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar sistema de autenticación y autorización seguro.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- tipo: {[tipo]} → Tipo (OAuth, OIDC, SAML)\n- roles: {[roles]} → Roles y permisos\n- integraciones: {[integraciones]} → Sistemas a integrar\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de arquitectura de auth",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Arquitectura"
    ]
  },
  {
    "id": "dev_ddd_design",
    "label_title": "Domain-Driven Design",
    "category": "arquitectura",
    "content": "===parametros\n\n- dominio: {[dominio]} → Dominio de negocio\n- actores: {[actores]} → Actores principales\n- procesos: {[procesos]} → Procesos clave\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Domain-Driven\"]\n\n===prompt\n\n# Objetivo\n\nAplicar DDD con bounded contexts, aggregates y domain events.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- dominio: {[dominio]} → Dominio de negocio\n- actores: {[actores]} → Actores principales\n- procesos: {[procesos]} → Procesos clave\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de domain-driven design",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Domain-Driven"
    ]
  },
  {
    "id": "dev_clean_architecture",
    "label_title": "Clean Architecture",
    "category": "arquitectura",
    "content": "===parametros\n\n- proyecto: {[proyecto]} → Tipo de proyecto\n- stack: {[stack]} → Tech stack\n- dependencias: {[dependencias]} → Dependencias externas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"Clean\"]\n\n===prompt\n\n# Objetivo\n\nImplementar clean/hexagonal architecture con ports & adapters.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- proyecto: {[proyecto]} → Tipo de proyecto\n- stack: {[stack]} → Tech stack\n- dependencias: {[dependencias]} → Dependencias externas\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de clean architecture",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "Clean"
    ]
  },
  {
    "id": "dev_code_review",
    "label_title": "Code Review Profundo",
    "category": "codigo",
    "content": "===parametros\n\n- lenguaje: {[lenguaje]} → Lenguaje de programación\n- contexto: {[contexto]} → Contexto del cambio\n- archivos: {[archivos]} → Archivos a revisar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Code\"]\n\n===prompt\n\n# Objetivo\n\nGuiar revisión de código profunda evaluando legibilidad, performance, seguridad y mantenibilidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- lenguaje: {[lenguaje]} → Lenguaje de programación\n- contexto: {[contexto]} → Contexto del cambio\n- archivos: {[archivos]} → Archivos a revisar\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de code review profundo",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Code"
    ]
  },
  {
    "id": "dev_refactoring_plan",
    "label_title": "Plan de Refactoring",
    "category": "codigo",
    "content": "===parametros\n\n- codigo: {[codigo]} → Área de código a refactorizar\n- deuda: {[deuda]} → Tipo de deuda técnica\n- riesgo: {[riesgo]} → Nivel de riesgo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar refactoring incremental sin romper funcionalidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- codigo: {[codigo]} → Área de código a refactorizar\n- deuda: {[deuda]} → Tipo de deuda técnica\n- riesgo: {[riesgo]} → Nivel de riesgo\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de refactoring",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Plan"
    ]
  },
  {
    "id": "dev_design_patterns",
    "label_title": "Patrones de Diseño",
    "category": "codigo",
    "content": "===parametros\n\n- problema: {[problema]} → Problema a resolver\n- lenguaje: {[lenguaje]} → Lenguaje\n- contexto: {[contexto]} → Contexto arquitectónico\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Patrones\"]\n\n===prompt\n\n# Objetivo\n\nSeleccionar y aplicar design patterns apropiados para el problema.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- problema: {[problema]} → Problema a resolver\n- lenguaje: {[lenguaje]} → Lenguaje\n- contexto: {[contexto]} → Contexto arquitectónico\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de patrones de diseño",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Patrones"
    ]
  },
  {
    "id": "dev_clean_code",
    "label_title": "Audit Clean Code",
    "category": "codigo",
    "content": "===parametros\n\n- codigo: {[codigo]} → Código a auditar\n- lenguaje: {[lenguaje]} → Lenguaje\n- estandares: {[estandares]} → Estándares del equipo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Audit\"]\n\n===prompt\n\n# Objetivo\n\nAuditar código contra principios SOLID, DRY, KISS y clean code.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- codigo: {[codigo]} → Código a auditar\n- lenguaje: {[lenguaje]} → Lenguaje\n- estandares: {[estandares]} → Estándares del equipo\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de audit clean code",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Audit"
    ]
  },
  {
    "id": "dev_error_handling",
    "label_title": "Estrategia de Error Handling",
    "category": "codigo",
    "content": "===parametros\n\n- sistema: {[sistema]} → Sistema\n- tipos_error: {[tipos_error]} → Tipos de error\n- criticidad: {[criticidad]} → Nivel de criticidad\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar manejo de errores robusto con recovery y fallbacks.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- sistema: {[sistema]} → Sistema\n- tipos_error: {[tipos_error]} → Tipos de error\n- criticidad: {[criticidad]} → Nivel de criticidad\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de error handling",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Estrategia"
    ]
  },
  {
    "id": "dev_tech_debt",
    "label_title": "Evaluación de Deuda Técnica",
    "category": "codigo",
    "content": "===parametros\n\n- repositorio: {[repositorio]} → Repositorio\n- areas: {[areas]} → Áreas sospechosas\n- criterios: {[criterios]} → Criterios de priorización\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Evaluación\"]\n\n===prompt\n\n# Objetivo\n\nCuantificar y priorizar deuda técnica con impacto estimado.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- repositorio: {[repositorio]} → Repositorio\n- areas: {[areas]} → Áreas sospechosas\n- criterios: {[criterios]} → Criterios de priorización\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de evaluación de deuda técnica",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Evaluación"
    ]
  },
  {
    "id": "dev_naming_conventions",
    "label_title": "Convenciones de Naming",
    "category": "codigo",
    "content": "===parametros\n\n- lenguaje: {[lenguaje]} → Lenguaje\n- tipo_proyecto: {[tipo_proyecto]} → Tipo de proyecto\n- equipo: {[equipo]} → Tamaño de equipo\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Convenciones\"]\n\n===prompt\n\n# Objetivo\n\nDefinir convenciones de naming consistentes para el proyecto.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- lenguaje: {[lenguaje]} → Lenguaje\n- tipo_proyecto: {[tipo_proyecto]} → Tipo de proyecto\n- equipo: {[equipo]} → Tamaño de equipo\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de convenciones de naming",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Convenciones"
    ]
  },
  {
    "id": "dev_code_complexity",
    "label_title": "Análisis de Complejidad",
    "category": "codigo",
    "content": "===parametros\n\n- modulo: {[modulo]} → Módulo a analizar\n- umbral: {[umbral]} → Umbral de complejidad\n- herramienta: {[herramienta]} → Herramienta de análisis\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar y reducir complejidad ciclomática en módulos críticos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- modulo: {[modulo]} → Módulo a analizar\n- umbral: {[umbral]} → Umbral de complejidad\n- herramienta: {[herramienta]} → Herramienta de análisis\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de análisis de complejidad",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Análisis"
    ]
  },
  {
    "id": "dev_dependency_audit",
    "label_title": "Auditoría de Dependencias",
    "category": "codigo",
    "content": "===parametros\n\n- proyecto: {[proyecto]} → Tipo de proyecto\n- gestor: {[gestor]} → Gestor de paquetes\n- politica: {[politica]} → Política de seguridad\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Auditoría\"]\n\n===prompt\n\n# Objetivo\n\nAuditar dependencias por CVEs, freshness y licencias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- proyecto: {[proyecto]} → Tipo de proyecto\n- gestor: {[gestor]} → Gestor de paquetes\n- politica: {[politica]} → Política de seguridad\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de auditoría de dependencias",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Auditoría"
    ]
  },
  {
    "id": "dev_performance_profiling",
    "label_title": "Profiling de Performance",
    "category": "codigo",
    "content": "===parametros\n\n- sistema: {[sistema]} → Sistema\n- sintoma: {[sintoma]} → Síntoma observado\n- metrica: {[metrica]} → Métrica a mejorar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Profiling\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar y resolver cuellos de botella de performance.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- sistema: {[sistema]} → Sistema\n- sintoma: {[sintoma]} → Síntoma observado\n- metrica: {[metrica]} → Métrica a mejorar\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de profiling de performance",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Profiling"
    ]
  },
  {
    "id": "dev_migration_strategy",
    "label_title": "Estrategia de Migración de Código",
    "category": "codigo",
    "content": "===parametros\n\n- origen: {[origen]} → Stack origen\n- destino: {[destino]} → Stack destino\n- tamano: {[tamano]} → Tamaño del codebase\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar migración de codebase con zero-downtime.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- origen: {[origen]} → Stack origen\n- destino: {[destino]} → Stack destino\n- tamano: {[tamano]} → Tamaño del codebase\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de migración de código",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Estrategia"
    ]
  },
  {
    "id": "dev_type_system",
    "label_title": "Diseño de Type System",
    "category": "codigo",
    "content": "===parametros\n\n- lenguaje: {[lenguaje]} → Lenguaje (TypeScript, Rust, etc.)\n- dominio: {[dominio]} → Dominio\n- invariantes: {[invariantes]} → Invariantes a proteger\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar sistema de tipos robusto con branded types y validación.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- lenguaje: {[lenguaje]} → Lenguaje (TypeScript, Rust, etc.)\n- dominio: {[dominio]} → Dominio\n- invariantes: {[invariantes]} → Invariantes a proteger\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de type system",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Diseño"
    ]
  },
  {
    "id": "dev_test_strategy",
    "label_title": "Estrategia de Testing",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar pirámide de testing con cobertura objetivo por capa.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de testing",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Estrategia"
    ]
  },
  {
    "id": "dev_tdd_workflow",
    "label_title": "Workflow TDD",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Workflow\"]\n\n===prompt\n\n# Objetivo\n\nImplementar Test-Driven Development con Red-Green-Refactor.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de workflow tdd",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Workflow"
    ]
  },
  {
    "id": "dev_integration_testing",
    "label_title": "Testing de Integración",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Testing\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar tests de integración con fixtures y cleanup.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de testing de integración",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Testing"
    ]
  },
  {
    "id": "dev_e2e_testing",
    "label_title": "Testing E2E",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Testing\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar suite de tests end-to-end con Playwright/Cypress.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de testing e2e",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Testing"
    ]
  },
  {
    "id": "dev_load_testing",
    "label_title": "Plan de Load Testing",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan de pruebas de carga con K6/Locust.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de load testing",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Plan"
    ]
  },
  {
    "id": "dev_contract_testing",
    "label_title": "Contract Testing",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Contract\"]\n\n===prompt\n\n# Objetivo\n\nImplementar contract tests entre servicios.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de contract testing",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Contract"
    ]
  },
  {
    "id": "dev_mutation_testing",
    "label_title": "Mutation Testing",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Mutation\"]\n\n===prompt\n\n# Objetivo\n\nMejorar calidad de tests con mutation testing.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de mutation testing",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Mutation"
    ]
  },
  {
    "id": "dev_test_data",
    "label_title": "Gestión de Test Data",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Gestión\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de datos de prueba.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gestión de test data",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Gestión"
    ]
  },
  {
    "id": "dev_snapshot_testing",
    "label_title": "Testing de Snapshots",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Testing\"]\n\n===prompt\n\n# Objetivo\n\nImplementar snapshot testing para UI components.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de testing de snapshots",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Testing"
    ]
  },
  {
    "id": "dev_test_automation",
    "label_title": "Automatización de Tests",
    "category": "testing",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Testing\", \"Automatización\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar framework de test automation reutilizable.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en testing.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de automatización de tests",
    "paramCount": 4,
    "keywords": [
      "Testing",
      "Automatización"
    ]
  },
  {
    "id": "dev_cicd_pipeline",
    "label_title": "Pipeline CI/CD",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Pipeline\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar pipeline de CI/CD con stages, gates y rollback.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pipeline ci/cd",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Pipeline"
    ]
  },
  {
    "id": "dev_docker_compose",
    "label_title": "Docker Compose Dev",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Docker\"]\n\n===prompt\n\n# Objetivo\n\nDockerizar entorno de desarrollo local con hot reload.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de docker compose dev",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Docker"
    ]
  },
  {
    "id": "dev_kubernetes",
    "label_title": "Deployment en Kubernetes",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Deployment\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar manifests de K8s para producción.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de deployment en kubernetes",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Deployment"
    ]
  },
  {
    "id": "dev_iac_terraform",
    "label_title": "Infrastructure as Code",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Infrastructure\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar IaC con Terraform/Pulumi.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de infrastructure as code",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Infrastructure"
    ]
  },
  {
    "id": "dev_monitoring_setup",
    "label_title": "Setup de Monitoring",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Setup\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar monitoring con Prometheus/Grafana.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de setup de monitoring",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Setup"
    ]
  },
  {
    "id": "dev_deployment_strategy",
    "label_title": "Estrategia de Deployment",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar blue-green/canary deployments.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de deployment",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Estrategia"
    ]
  },
  {
    "id": "dev_feature_flags",
    "label_title": "Sistema de Feature Flags",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Sistema\"]\n\n===prompt\n\n# Objetivo\n\nImplementar feature flags con rollout gradual.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sistema de feature flags",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Sistema"
    ]
  },
  {
    "id": "dev_secrets_management",
    "label_title": "Gestión de Secrets",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Gestión\"]\n\n===prompt\n\n# Objetivo\n\nImplementar vault/secrets manager.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de gestión de secrets",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Gestión"
    ]
  },
  {
    "id": "dev_logging_strategy",
    "label_title": "Estrategia de Logging",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar logging estructurado con correlation IDs.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de logging",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Estrategia"
    ]
  },
  {
    "id": "dev_incident_response",
    "label_title": "Plan de Respuesta a Incidentes",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar playbook de incidentes con runbooks.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de respuesta a incidentes",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Plan"
    ]
  },
  {
    "id": "dev_threat_model",
    "label_title": "Threat Modeling STRIDE",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Threat\"]\n\n===prompt\n\n# Objetivo\n\nRealizar threat modeling completo del sistema.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de threat modeling stride",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Threat"
    ]
  },
  {
    "id": "dev_owasp_audit",
    "label_title": "Auditoría OWASP Top 10",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Auditoría\"]\n\n===prompt\n\n# Objetivo\n\nAuditar aplicación contra OWASP Top 10.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de auditoría owasp top 10",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Auditoría"
    ]
  },
  {
    "id": "dev_auth_security",
    "label_title": "Seguridad de Autenticación",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Seguridad\"]\n\n===prompt\n\n# Objetivo\n\nAuditar y mejorar seguridad de auth flows.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de seguridad de autenticación",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Seguridad"
    ]
  },
  {
    "id": "dev_api_security",
    "label_title": "Seguridad de API",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Seguridad\"]\n\n===prompt\n\n# Objetivo\n\nImplementar seguridad en APIs (rate limiting, validation).\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de seguridad de api",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Seguridad"
    ]
  },
  {
    "id": "dev_supply_chain",
    "label_title": "Seguridad de Supply Chain",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Seguridad\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar seguridad de la cadena de dependencias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de seguridad de supply chain",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Seguridad"
    ]
  },
  {
    "id": "dev_encryption_strategy",
    "label_title": "Estrategia de Cifrado",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar cifrado at-rest y in-transit.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de cifrado",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Estrategia"
    ]
  },
  {
    "id": "dev_security_headers",
    "label_title": "Headers de Seguridad Web",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Headers\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar CSP, CORS, HSTS y security headers.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de headers de seguridad web",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Headers"
    ]
  },
  {
    "id": "dev_penetration_prep",
    "label_title": "Preparación para Pentest",
    "category": "seguridad",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Seguridad\", \"Preparación\"]\n\n===prompt\n\n# Objetivo\n\nPreparar aplicación para penetration testing.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en seguridad.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de preparación para pentest",
    "paramCount": 4,
    "keywords": [
      "Seguridad",
      "Preparación"
    ]
  },
  {
    "id": "dev_schema_design",
    "label_title": "Diseño de Schema",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar schema de base de datos normalizado y optimizado.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de schema",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Diseño"
    ]
  },
  {
    "id": "dev_migration_plan",
    "label_title": "Plan de Migración de DB",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Plan\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar migración de schema con zero-downtime.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de plan de migración de db",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Plan"
    ]
  },
  {
    "id": "dev_query_optimization",
    "label_title": "Optimización de Queries",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Optimización\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar y optimizar queries lentas.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de optimización de queries",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Optimización"
    ]
  },
  {
    "id": "dev_indexing_strategy",
    "label_title": "Estrategia de Indexing",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar índices óptimos basados en query patterns.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de indexing",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Estrategia"
    ]
  },
  {
    "id": "dev_data_modeling",
    "label_title": "Modelado de Datos",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Modelado\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar modelo de datos con patterns (star schema, document).\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de modelado de datos",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Modelado"
    ]
  },
  {
    "id": "dev_backup_strategy",
    "label_title": "Estrategia de Backup",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar plan de backup y recovery con RPO/RTO.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de backup",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Estrategia"
    ]
  },
  {
    "id": "dev_vector_db",
    "label_title": "Diseño de Vector Database",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar búsqueda semántica con embeddings.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de vector database",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Diseño"
    ]
  },
  {
    "id": "dev_cache_invalidation",
    "label_title": "Invalidación de Caché",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Invalidación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de cache invalidation consistente.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de invalidación de caché",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Invalidación"
    ]
  },
  {
    "id": "dev_adr",
    "label_title": "Architecture Decision Record",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Architecture\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar decisión arquitectónica con contexto, alternativas y consecuencias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de architecture decision record",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Architecture"
    ]
  },
  {
    "id": "dev_api_docs",
    "label_title": "Documentación de API",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Documentación\"]\n\n===prompt\n\n# Objetivo\n\nGenerar documentación de API con OpenAPI/Swagger.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de documentación de api",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Documentación"
    ]
  },
  {
    "id": "dev_runbook",
    "label_title": "Runbook Operacional",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Runbook\"]\n\n===prompt\n\n# Objetivo\n\nCrear runbook para operaciones de producción.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de runbook operacional",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Runbook"
    ]
  },
  {
    "id": "dev_readme",
    "label_title": "README de Proyecto",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"README\"]\n\n===prompt\n\n# Objetivo\n\nEscribir README completo con setup, usage y contributing.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de readme de proyecto",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "README"
    ]
  },
  {
    "id": "dev_onboarding_dev",
    "label_title": "Guía de Onboarding Dev",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Guía\"]\n\n===prompt\n\n# Objetivo\n\nCrear guía de onboarding para nuevos desarrolladores.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de guía de onboarding dev",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Guía"
    ]
  },
  {
    "id": "dev_changelog",
    "label_title": "Generación de Changelog",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Generación\"]\n\n===prompt\n\n# Objetivo\n\nGenerar changelog profesional desde git history.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de generación de changelog",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Generación"
    ]
  },
  {
    "id": "dev_technical_spec",
    "label_title": "Especificación Técnica",
    "category": "documentacion",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Documentacion\", \"Especificación\"]\n\n===prompt\n\n# Objetivo\n\nEscribir spec técnica antes de implementación.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en documentacion.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de especificación técnica",
    "paramCount": 4,
    "keywords": [
      "Documentacion",
      "Especificación"
    ]
  },
  {
    "id": "dev_ai_agent_design",
    "label_title": "Diseño de Agente IA",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Diseño\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar agente autónomo con tools, memory y guardrails.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diseño de agente ia",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Diseño"
    ]
  },
  {
    "id": "dev_rag_system",
    "label_title": "Sistema RAG",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Sistema\"]\n\n===prompt\n\n# Objetivo\n\nArquitectar Retrieval-Augmented Generation pipeline.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de sistema rag",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Sistema"
    ]
  },
  {
    "id": "dev_prompt_engineering",
    "label_title": "Prompt Engineering para Devs",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Prompt\"]\n\n===prompt\n\n# Objetivo\n\nTécnicas avanzadas de prompting para desarrollo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de prompt engineering para devs",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Prompt"
    ]
  },
  {
    "id": "dev_llm_evaluation",
    "label_title": "Evaluación de LLMs",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Evaluación\"]\n\n===prompt\n\n# Objetivo\n\nFramework para evaluar y comparar modelos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de evaluación de llms",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Evaluación"
    ]
  },
  {
    "id": "dev_multi_agent",
    "label_title": "Orquestación Multi-Agente",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Orquestación\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar sistema multi-agente con coordinación.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de orquestación multi-agente",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Orquestación"
    ]
  },
  {
    "id": "dev_fine_tuning",
    "label_title": "Estrategia de Fine-Tuning",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Estrategia\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar fine-tuning de LLM con dataset curation.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de estrategia de fine-tuning",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Estrategia"
    ]
  },
  {
    "id": "dev_guardrails",
    "label_title": "Guardrails de IA",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Guardrails\"]\n\n===prompt\n\n# Objetivo\n\nImplementar safety guardrails para LLMs en producción.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de guardrails de ia",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Guardrails"
    ]
  },
  {
    "id": "dev_ai_pair_programming",
    "label_title": "Pair Programming con IA",
    "category": "ai_dev",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Ai Dev\", \"Pair\"]\n\n===prompt\n\n# Objetivo\n\nMaximizar productividad con AI coding assistants.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en ai dev.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de pair programming con ia",
    "paramCount": 4,
    "keywords": [
      "Ai Dev",
      "Pair"
    ]
  },
  {
    "id": "dev_diagrama_arquitectura",
    "label_title": "Diagrama de Arquitectura",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Diagrama\"]\n\n===prompt\n\n# Objetivo\n\nCrear diagrama C4 de arquitectura del sistema.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de diagrama de arquitectura",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Diagrama"
    ]
  },
  {
    "id": "dev_reporte_tecnico",
    "label_title": "Reporte Técnico",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte técnico de hallazgos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte técnico",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "dev_postmortem",
    "label_title": "Post-Mortem Blameless",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Post-Mortem\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar post-mortem de incidente.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de post-mortem blameless",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Post-Mortem"
    ]
  },
  {
    "id": "dev_tech_radar",
    "label_title": "Technology Radar",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Technology\"]\n\n===prompt\n\n# Objetivo\n\nCrear technology radar del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de technology radar",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Technology"
    ]
  },
  {
    "id": "dev_sprint_report",
    "label_title": "Reporte de Sprint",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte de sprint con métricas DORA.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de sprint",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "dev_rfc_document",
    "label_title": "RFC Document",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"RFC\"]\n\n===prompt\n\n# Objetivo\n\nEscribir Request for Comments para propuesta técnica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de rfc document",
    "paramCount": 4,
    "keywords": [
      "Output",
      "RFC"
    ]
  },
  {
    "id": "dev_security_report",
    "label_title": "Reporte de Seguridad",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte de auditoría de seguridad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de seguridad",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "dev_performance_report",
    "label_title": "Reporte de Performance",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar resultados de load testing.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de performance",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "dev_dependency_report",
    "label_title": "Reporte de Dependencias",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Reporte\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte de salud de dependencias.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de reporte de dependencias",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Reporte"
    ]
  },
  {
    "id": "dev_architecture_deck",
    "label_title": "Deck de Arquitectura",
    "category": "output",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Output\", \"Deck\"]\n\n===prompt\n\n# Objetivo\n\nCrear presentación de arquitectura para stakeholders.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en output.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto y parámetros\n- [ ] Definir formato del entregable\n- [ ] Aplicar metodología del dominio\n- [ ] Generar contenido profesional\n- [ ] Validar calidad\n- [ ] Entregar resultado final\n\n# Plan\n\n1. **Análisis**: Revisar parámetros y contexto.\n2. **Diseño**: Planificar estructura.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar completitud.\n5. **Entrega**: Resultado listo.\n\n# Entregable Esperado\n\nEntregable profesional de deck de arquitectura",
    "paramCount": 4,
    "keywords": [
      "Output",
      "Deck"
    ]
  },
  {
    "id": "dev_extra_0",
    "label_title": "State Machine Design",
    "category": "arquitectura",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"State\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar state machine para flujo de negocio complejo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de state machine design",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "State"
    ]
  },
  {
    "id": "dev_extra_1",
    "label_title": "API Versioning",
    "category": "arquitectura",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Arquitectura\", \"API\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar estrategia de versionamiento de API.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en arquitectura.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de api versioning",
    "paramCount": 4,
    "keywords": [
      "Arquitectura",
      "API"
    ]
  },
  {
    "id": "dev_extra_2",
    "label_title": "Database Sharding",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Database\"]\n\n===prompt\n\n# Objetivo\n\nPlanificar sharding de base de datos para escalabilidad.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de database sharding",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Database"
    ]
  },
  {
    "id": "dev_extra_3",
    "label_title": "Observability Setup",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Observability\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar observabilidad con OpenTelemetry.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de observability setup",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Observability"
    ]
  },
  {
    "id": "dev_extra_4",
    "label_title": "SRE SLO Design",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"SRE\"]\n\n===prompt\n\n# Objetivo\n\nDefinir SLOs y SLIs para servicios críticos.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de sre slo design",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "SRE"
    ]
  },
  {
    "id": "dev_extra_5",
    "label_title": "Code Review Checklist",
    "category": "codigo",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Code\"]\n\n===prompt\n\n# Objetivo\n\nCrear checklist de code review del equipo.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de code review checklist",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Code"
    ]
  },
  {
    "id": "dev_extra_6",
    "label_title": "Git Hooks Setup",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Git\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar pre-commit y pre-push hooks.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de git hooks setup",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Git"
    ]
  },
  {
    "id": "dev_extra_7",
    "label_title": "Database Profiling",
    "category": "datos",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Datos\", \"Database\"]\n\n===prompt\n\n# Objetivo\n\nPerfilar queries y optimizar database performance.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en datos.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de database profiling",
    "paramCount": 4,
    "keywords": [
      "Datos",
      "Database"
    ]
  },
  {
    "id": "dev_extra_8",
    "label_title": "Error Boundary Design",
    "category": "codigo",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Error\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar error boundaries para resiliencia.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de error boundary design",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Error"
    ]
  },
  {
    "id": "dev_extra_9",
    "label_title": "Reverse Proxy Config",
    "category": "devops",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Devops\", \"Reverse\"]\n\n===prompt\n\n# Objetivo\n\nConfigurar reverse proxy con load balancing.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en devops.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de reverse proxy config",
    "paramCount": 4,
    "keywords": [
      "Devops",
      "Reverse"
    ]
  },
  {
    "id": "dev_extra_10",
    "label_title": "Technical Debt Roadmap",
    "category": "codigo",
    "content": "===parametros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Codigo\", \"Technical\"]\n\n===prompt\n\n# Objetivo\n\nCrear roadmap de reducción de deuda técnica.\n\n# Arquetipo Experto\n\nActúa como un **Experto Senior** especializado en codigo.\n\n# Parámetros\n\n- contexto: {[contexto]} → Contexto específico\n- objetivo: {[objetivo]} → Objetivo\n- profundidad: {[profundidad]} → (básico|medio|alto)\n\n# Checklist\n\n- [ ] Analizar contexto\n- [ ] Definir formato\n- [ ] Generar contenido\n- [ ] Validar calidad\n- [ ] Entregar resultado\n\n# Plan\n\n1. **Análisis**: Revisar contexto.\n2. **Diseño**: Planificar entregable.\n3. **Ejecución**: Generar contenido.\n4. **Validación**: Verificar.\n5. **Entrega**: Resultado final.\n\n# Entregable Esperado\n\nEntregable profesional de technical debt roadmap",
    "paramCount": 4,
    "keywords": [
      "Codigo",
      "Technical"
    ]
  }
];
