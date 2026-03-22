#!/usr/bin/env python3
"""
MetodologIA — Prompt Library Generator
Generates 101 devoted prompts per vertical + expands Universal to 202.
Each prompt follows the ===parametros / ===keywords / ===prompt format.
"""

import json, os, sys

BASE = os.path.join(os.path.dirname(__file__), '..', 'recursos')

# ============================================================
# PROMPT BUILDER
# ============================================================

def build_prompt(id_str, title, category, cat_key, desc, params, keywords, archetype, deliverable):
    """Build a prompt in the MetodologIA format with full sections."""
    params_block = "\n".join([f"- {p['name']}: {{[{p['name']}]}} → {p['desc']}" for p in params])
    kw_json = json.dumps(keywords, ensure_ascii=False)

    content = f"""===parametros

{params_block}
- adjuntos: {{[adjuntos]}} → (indica si hay adjuntos; si no hay, escribe "No hay adjuntos")

===keywords
{kw_json}

===prompt

# Objetivo

{desc}

# Arquetipo Experto

{archetype}

# Parámetros

{params_block}
- adjuntos: {{[adjuntos]}} → (indica si hay adjuntos)

# Checklist

- [ ] Analizar contexto, parámetros y adjuntos
- [ ] Definir formato y estructura del entregable
- [ ] Aplicar metodología del dominio
- [ ] Generar contenido completo y profesional
- [ ] Validar coherencia y calidad
- [ ] Entregar resultado listo para uso inmediato

# Plan

1. **Análisis**: Revisar parámetros, adjuntos y contexto del dominio.
2. **Diseño**: Planificar estructura y contenido del entregable.
3. **Ejecución**: Generar contenido aplicando estándares de calidad.
4. **Validación**: Verificar completitud, coherencia y profesionalismo.
5. **Entrega**: Resultado final listo para uso inmediato.

# Entregable Esperado

{deliverable}"""

    return {
        "id": id_str,
        "label_title": title,
        "category": cat_key,
        "content": content,
        "paramCount": len(params) + 1,
        "keywords": keywords
    }

def build_mono(id_str, title, cat_key, content_text):
    """Build a monosyllabic shortcut prompt (simple, no sections)."""
    return {
        "id": id_str,
        "label_title": title,
        "category": cat_key,
        "content": content_text,
        "paramCount": 0,
        "keywords": []
    }

# ============================================================
# VERTICAL DEFINITIONS — Each vertical has categories + prompt specs
# ============================================================

VERTICALS = {
    "marketing": {
        "name": "Marketing",
        "color": "#ec4899",
        "icon": "megaphone",
        "description": "101 prompts de alto rendimiento para marketing digital, contenidos, branding y growth.",
        "mono": [
            ("a", "Aprueba y Avanza", "Aprobado. Procede con la campaña/pieza. Revisa métricas de referencia antes de lanzar."),
            ("e", "Eleva Creatividad", "Aplica un bucle de excelencia creativa: evalúa el copy/diseño actual contra los mejores benchmarks del sector. Identifica 3 mejoras concretas de impacto y aplícalas. El resultado debe ser memorable, no genérico."),
            ("s", "Sintetiza Métricas", "Sintetiza las métricas clave de las campañas/canales activos. Consolida un dashboard ejecutivo con: performance por canal, ROI, tendencia vs período anterior, y 3 acciones recomendadas."),
            ("r", "Revisa Performance", "Revisa el performance del último período. Identifica qué funcionó, qué no, y por qué. Propón 3 optimizaciones con impacto estimado."),
            ("c", "Crea Brief Creativo", "Crea un brief creativo rápido para la siguiente pieza/campaña. Incluye: objetivo, audiencia, mensaje clave, tono, formato y CTA."),
        ],
        "categories": {
            "estrategia_marca": [
                ("posicionamiento_marca", "Posicionamiento de Marca", "Definir posicionamiento diferenciador de marca en el mercado, articulando la propuesta de valor única frente a competidores.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"competidores","desc":"3-5 competidores principales"},{"name":"audiencia","desc":"Audiencia objetivo"}], ["Posicionamiento","Branding","Diferenciación"], "Actúa como un **Brand Strategist Senior** con 15 años posicionando marcas en mercados saturados.", "Canvas de posicionamiento con: statement, proof points, reason to believe, elevator pitch 30s y framework de mensajes"),
                ("brand_voice_guide", "Guía de Voz de Marca", "Crear una guía de voz y tono de marca que asegure consistencia en toda la comunicación.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"personalidad","desc":"3-5 adjetivos de personalidad"},{"name":"audiencia","desc":"Audiencia principal"}], ["Brand Voice","Tono","Comunicación"], "Actúa como un **Director Creativo** especializado en identidad verbal y brand guidelines.", "Guía de voz con: personalidad, do's & don'ts, ejemplos por canal, escala de formalidad y templates de mensajes tipo"),
                ("arquitectura_marca", "Arquitectura de Marca", "Diseñar la arquitectura de marca para un portafolio de productos/servicios.", [{"name":"empresa","desc":"Nombre de la empresa"},{"name":"productos","desc":"Lista de productos/servicios"},{"name":"mercados","desc":"Mercados objetivo"}], ["Arquitectura","Portfolio","Marca"], "Actúa como un **Consultor de Branding Corporativo** experto en arquitecturas de marca (monolítica, endorsed, house of brands).", "Diagrama de arquitectura de marca con: modelo recomendado, jerarquía visual, reglas de naming y roadmap de implementación"),
                ("audit_percepcion_marca", "Auditoría de Percepción de Marca", "Evaluar cómo es percibida la marca por diferentes stakeholders y detectar gaps entre identidad e imagen.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"canales","desc":"Canales a auditar"},{"name":"competidores","desc":"Competidores de referencia"}], ["Auditoría","Percepción","Branding"], "Actúa como un **Investigador de Marca** con experiencia en estudios cuali-cuantitativos de percepción.", "Reporte de auditoría con: mapa perceptual, gaps identidad vs imagen, verbatims clave, score por atributo y plan de cierre de gaps"),
                ("estrategia_rebranding", "Estrategia de Rebranding", "Planificar un proceso de rebranding que evolucione la marca sin perder el equity acumulado.", [{"name":"marca","desc":"Marca actual"},{"name":"razon","desc":"Razón del rebranding"},{"name":"timeline","desc":"Timeline disponible"}], ["Rebranding","Evolución","Identidad"], "Actúa como un **Director de Branding** que ha liderado 10+ rebrandings exitosos de marcas reconocidas.", "Plan de rebranding con: diagnóstico, nueva plataforma de marca, roadmap de implementación, plan de comunicación interna/externa y métricas de éxito"),
                ("naming_producto", "Naming de Producto", "Generar opciones de nombre para un nuevo producto/servicio siguiendo criterios estratégicos.", [{"name":"categoria","desc":"Categoría del producto"},{"name":"atributos","desc":"Atributos clave a comunicar"},{"name":"restricciones","desc":"Restricciones legales o de mercado"}], ["Naming","Producto","Creatividad"], "Actúa como un **Especialista en Naming** con experiencia en creación de nombres registrables y memorables.", "10 opciones de nombre con: rationale, disponibilidad estimada, score por criterio (memorabilidad, pronunciación, diferenciación) y top 3 recomendados"),
                ("storytelling_marca", "Storytelling de Marca", "Crear la narrativa central de marca que conecte emocionalmente con la audiencia.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"origen","desc":"Historia de origen"},{"name":"valores","desc":"Valores fundamentales"}], ["Storytelling","Narrativa","Conexión"], "Actúa como un **Storyteller Corporativo** experto en narrativas de marca que generan lealtad emocional.", "Narrativa de marca con: historia de origen, arco narrativo, hero's journey adaptado, mensajes clave por touchpoint y guía de aplicación"),
                ("brand_partnership", "Estrategia de Brand Partnership", "Diseñar alianzas estratégicas de marca que amplifiquen reach y credibilidad.", [{"name":"marca","desc":"Tu marca"},{"name":"objetivo","desc":"Objetivo de la alianza"},{"name":"perfil_partner","desc":"Perfil del partner ideal"}], ["Partnership","Co-branding","Alianzas"], "Actúa como un **Director de Alianzas Estratégicas** con track record en co-brandings de alto impacto.", "Framework de partnership con: criterios de selección, modelo de evaluación, propuesta tipo, métricas de éxito y estructura de governance"),
                ("brand_crisis_protocol", "Protocolo de Crisis de Marca", "Diseñar protocolo de comunicación de crisis para proteger la reputación de marca.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"escenarios","desc":"Escenarios de riesgo potenciales"},{"name":"portavoces","desc":"Portavoces autorizados"}], ["Crisis","Reputación","Protocolo"], "Actúa como un **Consultor de Comunicación de Crisis** con experiencia en gestión de crisis de marcas Fortune 500.", "Playbook de crisis con: matriz de escenarios, protocolos por severidad, templates de comunicación, cadena de escalamiento y checklist de activación"),
                ("brand_equity_measurement", "Medición de Brand Equity", "Diseñar framework de medición del valor de marca con métricas tangibles.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"industria","desc":"Industria"},{"name":"frecuencia","desc":"Frecuencia de medición"}], ["Brand Equity","Métricas","Valor"], "Actúa como un **Analista de Brand Equity** con experiencia en modelos de valoración (Interbrand, BrandZ, BAV).", "Framework de medición con: KPIs por dimensión (awareness, loyalty, perceived quality, associations), benchmark sectorial, dashboard y cadencia de medición"),
            ],
            "contenidos": [
                ("calendario_editorial", "Calendario Editorial Mensual", "Diseñar un calendario editorial mensual con mix de formatos, temas alineados a objetivos y métricas.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"objetivos","desc":"Objetivos del mes"},{"name":"canales","desc":"Canales activos"}], ["Calendario","Content Plan","Editorial"], "Actúa como un **Content Marketing Manager** con experiencia en estrategia multiplataforma.", "Calendario mensual con 20+ piezas, asignación por canal, KPIs por pieza, workflow de producción y calendario de aprobaciones"),
                ("copywriting_conversion", "Copywriting de Conversión", "Escribir copy persuasivo usando frameworks probados (PAS, AIDA, BAB) para maximizar conversiones.", [{"name":"producto","desc":"Producto o servicio"},{"name":"audiencia","desc":"Audiencia target"},{"name":"accion","desc":"Acción deseada"}], ["Copywriting","Conversión","Persuasión"], "Actúa como un **Copywriter de Conversión** con tasa de conversión promedio superior al 5%.", "3 variantes de copy con: headline, subheadline, body, bullet points, CTA principal, CTA secundario y variante de urgencia"),
                ("content_pillar_strategy", "Estrategia de Pillar Content", "Crear estrategia de pillar pages con topic clusters para dominar búsquedas temáticas.", [{"name":"tema_central","desc":"Tema central del pilar"},{"name":"subtemas","desc":"5-10 subtemas"},{"name":"competidores","desc":"URLs competidoras"}], ["Pillar Page","SEO","Content Strategy"], "Actúa como un **Content Strategist** experto en arquitectura de contenidos y SEO semántico.", "Mapa de pillar content con: estructura hub-spoke, brief por cluster, internal linking plan, calendario de producción y métricas objetivo"),
                ("repurposing_plan", "Plan de Repurposing de Contenido", "Diseñar plan para reciclar una pieza de contenido en 10+ formatos diferentes.", [{"name":"contenido_original","desc":"Pieza de contenido original"},{"name":"canales","desc":"Canales de distribución"},{"name":"formatos","desc":"Formatos deseados"}], ["Repurposing","Eficiencia","Multi-formato"], "Actúa como un **Content Strategist** especializado en maximizar el ROI de cada pieza de contenido.", "Plan de repurposing con: 10+ derivados, adaptación por canal, calendario de publicación y estimación de esfuerzo vs impacto"),
                ("blog_post_seo", "Blog Post Optimizado SEO", "Escribir blog post optimizado para SEO que posicione en top 3 para la keyword objetivo.", [{"name":"keyword","desc":"Keyword principal"},{"name":"intent","desc":"Intent de búsqueda (informacional, transaccional)"},{"name":"longitud","desc":"Longitud target en palabras"}], ["Blog","SEO","Contenido"], "Actúa como un **SEO Content Writer** con track record de posicionar artículos en top 3 de Google.", "Blog post completo con: H1-H4 optimizados, meta description, featured snippet structure, internal links, schema markup sugerido y checklist on-page"),
                ("guion_video_largo", "Guion de Video Largo", "Escribir guion para video de 5-15 minutos optimizado para retención y engagement.", [{"name":"tema","desc":"Tema del video"},{"name":"plataforma","desc":"Plataforma (YouTube, curso, webinar)"},{"name":"audiencia","desc":"Nivel de la audiencia"}], ["Video","Guion","Retención"], "Actúa como un **Video Scriptwriter** especializado en contenido educativo de alta retención.", "Guion con: hook (primeros 30s), estructura de 3 actos, timestamps, CTAs intermedios, pattern interrupts y call-to-action final"),
                ("lead_magnet_design", "Diseño de Lead Magnet", "Crear un lead magnet irresistible que convierta visitantes en leads cualificados.", [{"name":"audiencia","desc":"Audiencia target"},{"name":"dolor","desc":"Pain point principal"},{"name":"formato","desc":"Formato preferido (checklist, template, guía)"}], ["Lead Magnet","Generación de Leads","Conversión"], "Actúa como un **Growth Marketing Specialist** con experiencia en lead magnets con tasa de conversión >15%.", "Lead magnet completo con: título magnético, contenido, diseño sugerido, landing page copy, thank you page y secuencia de follow-up"),
                ("caso_exito_template", "Template de Caso de Éxito", "Estructurar un caso de éxito persuasivo que demuestre resultados concretos.", [{"name":"cliente","desc":"Nombre del cliente"},{"name":"problema","desc":"Problema inicial"},{"name":"solucion","desc":"Solución implementada"}], ["Case Study","Social Proof","Resultados"], "Actúa como un **Content Marketer B2B** especializado en case studies que aceleran decisiones de compra.", "Caso de éxito con: resumen ejecutivo, contexto, desafío, solución, resultados (con números), quotes del cliente, lecciones aprendidas y CTA"),
                ("whitepaper_structure", "Estructura de Whitepaper", "Diseñar whitepaper de thought leadership que posicione como autoridad.", [{"name":"tema","desc":"Tema del whitepaper"},{"name":"audiencia","desc":"Audiencia target (C-level, practitioners)"},{"name":"objetivo","desc":"Objetivo del whitepaper"}], ["Whitepaper","Thought Leadership","B2B"], "Actúa como un **Content Director B2B** con experiencia en whitepapers que generan pipeline.", "Estructura completa con: título, abstract, 5-7 secciones, data points necesarios, CTA de cierre y plan de distribución"),
                ("ebook_outline", "Outline de E-book", "Crear outline de e-book educativo que demuestre expertise y genere leads.", [{"name":"tema","desc":"Tema del e-book"},{"name":"capitulos","desc":"Número de capítulos"},{"name":"nivel","desc":"Nivel (introductorio, intermedio, avanzado)"}], ["E-book","Educativo","Lead Gen"], "Actúa como un **Autor de E-books Corporativos** con 5+ publicaciones descargadas 10K+ veces.", "Outline completo con: título, subtítulo, capítulos con descripciones, key takeaways por capítulo, diseño sugerido y plan de promoción"),
                ("user_generated_content", "Estrategia de UGC", "Diseñar programa de contenido generado por usuarios que escale social proof.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"plataformas","desc":"Plataformas objetivo"},{"name":"incentivos","desc":"Tipo de incentivos disponibles"}], ["UGC","Comunidad","Social Proof"], "Actúa como un **Community Marketing Manager** experto en programas de UGC virales.", "Programa de UGC con: mecánica, incentivos, guidelines para usuarios, moderación, plan de amplificación y métricas de éxito"),
            ],
            "social_media": [
                ("plan_redes_integral", "Plan Integral de Redes Sociales", "Diseñar plan integral de redes sociales con objetivos, pilares y métricas por plataforma.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"plataformas","desc":"Plataformas activas"},{"name":"objetivo","desc":"Objetivo principal"}], ["Social Media","Plan","Estrategia"], "Actúa como un **Social Media Strategist** con track record en crecimiento orgánico de comunidades B2B y B2C.", "Plan con: pilares de contenido, mix de formatos 80/20, calendario semanal tipo, voz y tono por plataforma, y dashboard de métricas"),
                ("community_management", "Plan de Community Management", "Diseñar estrategia de gestión de comunidad que fomente engagement y loyalty.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"comunidad","desc":"Tipo de comunidad"},{"name":"plataforma","desc":"Plataforma principal"}], ["Community","Engagement","Moderación"], "Actúa como un **Community Manager Senior** con experiencia gestionando comunidades de 50K+ miembros.", "Playbook de community management con: protocolos de respuesta, escalamiento, tone of voice, métricas de salud y calendario de activaciones"),
                ("social_listening", "Framework de Social Listening", "Configurar sistema de social listening para monitorear marca, competidores y tendencias.", [{"name":"marca","desc":"Marca a monitorear"},{"name":"competidores","desc":"Competidores a rastrear"},{"name":"keywords","desc":"Keywords de industria"}], ["Social Listening","Monitoreo","Insights"], "Actúa como un **Analista de Social Intelligence** especializado en herramientas de listening.", "Framework con: queries configuradas, dashboard de alertas, cadencia de reportes, proceso de escalamiento y template de insight report"),
                ("influencer_strategy", "Estrategia de Influencer Marketing", "Diseñar programa de influencer marketing con selección, briefing y medición.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"presupuesto","desc":"Presupuesto disponible"},{"name":"objetivo","desc":"Objetivo de la campaña"}], ["Influencer","KOL","Colaboraciones"], "Actúa como un **Influencer Marketing Manager** con 50+ campañas ejecutadas y ROI demostrable.", "Estrategia con: criterios de selección, matrix de influencers, template de brief, contrato tipo, métricas por tier y reporte de resultados"),
                ("script_video_corto", "Script para Video Corto", "Escribir script para video corto (15-60s) optimizado para engagement en redes.", [{"name":"tema","desc":"Tema del video"},{"name":"plataforma","desc":"Plataforma (TikTok, Reels, Shorts)"},{"name":"hook","desc":"Tipo de hook (pregunta, dato, controversia)"}], ["Short-form","Video","Viral"], "Actúa como un **Creative Director** de short-form content con videos que superan 1M views.", "Script con: hook (3s), setup (10s), payoff (15-30s), CTA (5s) + 3 variantes de hook + texto en pantalla + dirección de cámara"),
                ("estrategia_linkedin", "Estrategia LinkedIn", "Plan de LinkedIn para marca personal y/o empresa con contenido que genere pipeline.", [{"name":"perfil","desc":"Tipo de perfil (personal, empresa)"},{"name":"objetivo","desc":"Objetivo (leads, awareness, recruiting)"},{"name":"frecuencia","desc":"Frecuencia de publicación"}], ["LinkedIn","B2B","Social Selling"], "Actúa como un **LinkedIn Strategist** con perfil en top 1% de engagement del sector.", "Plan con: optimización de perfil, pilares de contenido, calendario semanal, formatos por engagement rate, y proceso de DM outreach"),
                ("estrategia_tiktok", "Estrategia TikTok", "Plan de contenido para TikTok que genere reach orgánico y construya comunidad.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"nicho","desc":"Nicho de contenido"},{"name":"recurso","desc":"Recursos disponibles (equipo, presupuesto)"}], ["TikTok","Short-form","Orgánico"], "Actúa como un **TikTok Content Strategist** con cuentas que han crecido de 0 a 100K seguidores.", "Estrategia con: análisis de nicho, 5 formatos probados, calendario de producción, hooks database, tendencias a aprovechar y métricas objetivo"),
                ("crisis_redes_sociales", "Protocolo de Crisis en Redes", "Diseñar protocolo de respuesta ante crisis en redes sociales.", [{"name":"marca","desc":"Nombre de la marca"},{"name":"equipo","desc":"Equipo disponible"},{"name":"escenarios","desc":"Escenarios de riesgo"}], ["Crisis","Redes Sociales","Protocolo"], "Actúa como un **Social Media Crisis Manager** con experiencia en gestión de crisis virales.", "Protocolo con: matriz de severidad, árbol de decisión, templates de respuesta por escenario, cadena de aprobación y post-crisis debrief"),
                ("paid_social_strategy", "Estrategia de Paid Social", "Diseñar estrategia de publicidad en redes sociales con segmentación y creatividades.", [{"name":"plataforma","desc":"Plataforma (Meta, LinkedIn, TikTok)"},{"name":"presupuesto","desc":"Presupuesto mensual"},{"name":"objetivo","desc":"Objetivo (conversiones, awareness, tráfico)"}], ["Paid Social","Ads","Segmentación"], "Actúa como un **Performance Marketing Manager** certificado en Meta Business Suite y LinkedIn Ads.", "Plan de paid social con: estructura de campañas, segmentación por funnel stage, creatividades por formato, presupuesto por objetivo y plan de optimización semanal"),
                ("analytics_redes", "Analytics de Redes Sociales", "Crear framework de análisis de redes sociales con métricas accionables.", [{"name":"plataformas","desc":"Plataformas a analizar"},{"name":"periodo","desc":"Período de análisis"},{"name":"benchmark","desc":"Benchmark de referencia"}], ["Analytics","Social Media","Métricas"], "Actúa como un **Social Media Analyst** experto en extracción de insights accionables de datos sociales.", "Framework con: KPIs por plataforma, dashboard template, cadencia de reportes, formato de insight y proceso de action items"),
            ],
        }
    }
}

# Due to the massive size, I'll generate the remaining categories programmatically
# using a template approach for each vertical

def gen_category_prompts(vertical_key, cat_key, cat_name, topics, domain_context):
    """Generate prompts for a category from topic definitions."""
    prompts = []
    for topic in topics:
        id_str = f"{vertical_key}_{topic[0]}"
        title = topic[1]
        desc = topic[2]
        params = topic[3] if len(topic) > 3 else [
            {"name": "contexto", "desc": f"Contexto específico para {title.lower()}"},
            {"name": "objetivo", "desc": "Objetivo del entregable"},
            {"name": "profundidad", "desc": "(básico|medio|alto) Nivel de detalle requerido"}
        ]
        kws = topic[4] if len(topic) > 4 else [cat_name, title.split()[0]]
        archetype = topic[5] if len(topic) > 5 else f"Actúa como un **Especialista Senior en {domain_context}** con experiencia en {', '.join(kws[:2])}."
        deliverable = topic[6] if len(topic) > 6 else f"Entregable profesional completo para {title.lower()} con análisis, estructura, recomendaciones y plan de acción"

        prompts.append(build_prompt(id_str, title, cat_name, cat_key, desc, params, kws, archetype, deliverable))
    return prompts

print("Generating prompts...", file=sys.stderr)

# ============================================================
# PHASE 1: UNIVERSAL EXPANSION (180 → 202)
# ============================================================

# Load existing Universal
uni_json_path = os.path.join(BASE, 'biblioteca-universal', 'prompts_universales.json')
with open(uni_json_path) as f:
    uni_dict = json.load(f)

# 22 new prompts for Universal
universal_new = {
    "report_ejecutivo_semanal": "===parametros\n\n- periodo: {[periodo]} → Período del reporte (ej. \"Semana 12, Marzo 2026\")\n- equipo: {[equipo]} → Equipo o área responsable\n- metricas_clave: {[metricas_clave]} → KPIs principales a reportar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Reporte Semanal\", \"Status\", \"Ejecutivo\", \"KPIs\"]\n\n===prompt\n\n# Objetivo\n\nGenerar un reporte ejecutivo semanal que comunique progreso, bloqueos y próximos pasos de forma clara y accionable para stakeholders senior.\n\n# Arquetipo Experto\n\nActúa como un **Project Manager Senior** experto en comunicación ejecutiva y reporting de alto nivel.\n\n# Parámetros\n\n- periodo: {[periodo]} → Período del reporte\n- equipo: {[equipo]} → Equipo o área\n- metricas_clave: {[metricas_clave]} → KPIs principales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n# Checklist\n\n- [ ] Recopilar datos del período\n- [ ] Calcular variaciones vs período anterior\n- [ ] Identificar logros clave y bloqueos\n- [ ] Definir acciones para siguiente período\n- [ ] Formatear para lectura ejecutiva (< 2 min)\n\n# Plan\n\n1. **Recopilación**: Consolidar datos y métricas del período.\n2. **Análisis**: Calcular variaciones, identificar tendencias.\n3. **Redacción**: Estructurar en formato ejecutivo (highlights, métricas, bloqueos, next steps).\n4. **Visualización**: Incluir mini-gráficos o indicadores RAG.\n5. **Entrega**: Documento listo para enviar a stakeholders.\n\n# Entregable Esperado\n\nReporte ejecutivo de 1-2 páginas con: highlights del período, dashboard de KPIs con RAG status, top 3 logros, top 3 riesgos/bloqueos, y plan de acción para siguiente período.",
    "report_metricas_kpi": "===parametros\n\n- area: {[area]} → Área funcional (ventas, marketing, producto, etc.)\n- kpis: {[kpis]} → Lista de KPIs a analizar\n- periodo: {[periodo]} → Período de análisis\n- benchmark: {[benchmark]} → (opcional) Benchmark de referencia\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"KPIs\", \"Métricas\", \"Dashboard\", \"Performance\"]\n\n===prompt\n\n# Objetivo\n\nCrear un reporte de métricas y KPIs que transforme datos crudos en insights accionables con visualización clara.\n\n# Arquetipo Experto\n\nActúa como un **Data Analyst Senior** especializado en business intelligence y storytelling con datos.\n\n# Entregable Esperado\n\nReporte de KPIs con: tabla de métricas con tendencia, análisis de variaciones significativas, correlaciones identificadas, 5 insights accionables y recomendaciones priorizadas.",
    "report_avance_proyecto": "===parametros\n\n- proyecto: {[proyecto]} → Nombre del proyecto\n- fase_actual: {[fase_actual]} → Fase actual del proyecto\n- completado: {[completado]} → % de avance estimado\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Avance\", \"Proyecto\", \"Tracking\", \"Milestones\"]\n\n===prompt\n\n# Objetivo\n\nGenerar reporte de avance de proyecto con tracking de milestones, riesgos y forecast.\n\n# Arquetipo Experto\n\nActúa como un **PMO Director** con experiencia en reporting de portafolio de proyectos.\n\n# Entregable Esperado\n\nReporte de avance con: resumen ejecutivo, timeline con milestones (completados/pendientes), burndown de tareas, registro de riesgos actualizado, forecast de fecha de entrega y acciones requeridas.",
    "report_incidentes": "===parametros\n\n- incidente: {[incidente]} → Descripción del incidente\n- severidad: {[severidad]} → (crítico|alto|medio|bajo)\n- impacto: {[impacto]} → Impacto en usuarios/negocio\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Incidente\", \"Post-mortem\", \"RCA\", \"Resolución\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar incidente con análisis de causa raíz, timeline de resolución y acciones preventivas.\n\n# Arquetipo Experto\n\nActúa como un **Incident Commander** con experiencia en post-mortems blameless de empresas tech.\n\n# Entregable Esperado\n\nReporte de incidente con: resumen, timeline de eventos, análisis de causa raíz (5 Whys), impacto cuantificado, acciones correctivas con owners y deadlines, y mejoras preventivas.",
    "report_retrospectiva": "===parametros\n\n- equipo: {[equipo]} → Equipo que participa\n- periodo: {[periodo]} → Período a evaluar\n- formato: {[formato]} → (4Ls|Start-Stop-Continue|Mad-Sad-Glad)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Retrospectiva\", \"Mejora Continua\", \"Equipo\", \"Feedback\"]\n\n===prompt\n\n# Objetivo\n\nFacilitar y documentar retrospectiva de equipo que genere mejoras concretas.\n\n# Arquetipo Experto\n\nActúa como un **Agile Coach Senior** con experiencia facilitando retrospectivas que generan cambio real.\n\n# Entregable Esperado\n\nDocumento de retrospectiva con: insights por categoría, top 5 action items con owners, commitment del equipo, métricas de comparación vs retrospectiva anterior.",
    "report_stakeholders": "===parametros\n\n- proyecto: {[proyecto]} → Nombre del proyecto/iniciativa\n- audiencia: {[audiencia]} → Stakeholders destinatarios\n- frecuencia: {[frecuencia]} → (semanal|quincenal|mensual)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Stakeholders\", \"Comunicación\", \"Status\", \"Ejecutivo\"]\n\n===prompt\n\n# Objetivo\n\nCrear reporte de status adaptado al nivel de los stakeholders, con el nivel de detalle correcto.\n\n# Arquetipo Experto\n\nActúa como un **Program Manager** experto en comunicación ejecutiva adaptada por audiencia.\n\n# Entregable Esperado\n\nReporte adaptado por audiencia con: executive summary (C-level), detalle técnico (managers), y action items (equipo operativo).",
    "report_comparativo_periodos": "===parametros\n\n- metricas: {[metricas]} → Métricas a comparar\n- periodo_1: {[periodo_1]} → Primer período\n- periodo_2: {[periodo_2]} → Segundo período\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Comparativo\", \"Tendencias\", \"Variación\", \"Análisis\"]\n\n===prompt\n\n# Objetivo\n\nComparar métricas entre dos períodos identificando variaciones significativas, causas y tendencias.\n\n# Arquetipo Experto\n\nActúa como un **Business Analyst** especializado en análisis comparativo y detección de anomalías.\n\n# Entregable Esperado\n\nAnálisis comparativo con: tabla de variaciones (absoluta y %), gráficos de tendencia, causas identificadas por variación significativa, y recomendaciones.",
    "report_tendencias": "===parametros\n\n- industria: {[industria]} → Industria o sector\n- horizonte: {[horizonte]} → Horizonte temporal (6m, 1a, 3a)\n- fuentes: {[fuentes]} → Fuentes de información preferidas\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Tendencias\", \"Futuro\", \"Industria\", \"Signals\"]\n\n===prompt\n\n# Objetivo\n\nIdentificar y analizar tendencias emergentes que impactarán la industria en el horizonte definido.\n\n# Arquetipo Experto\n\nActúa como un **Analista de Tendencias** con metodología de scanning de señales débiles y fuertes.\n\n# Entregable Esperado\n\nReporte de tendencias con: radar de tendencias (emergente/creciente/madura), análisis de impacto por tendencia, implicaciones para el negocio, y recomendaciones estratégicas.",
    "informe_tecnico_hallazgos": "===parametros\n\n- sistema: {[sistema]} → Sistema o área evaluada\n- tipo_evaluacion: {[tipo_evaluacion]} → (auditoría|diagnóstico|assessment)\n- hallazgos: {[hallazgos]} → Resumen de hallazgos principales\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Informe Técnico\", \"Hallazgos\", \"Diagnóstico\", \"Recomendaciones\"]\n\n===prompt\n\n# Objetivo\n\nDocumentar hallazgos técnicos de una evaluación con severidad, evidencia y recomendaciones priorizadas.\n\n# Arquetipo Experto\n\nActúa como un **Consultor Técnico Senior** con experiencia en documentación de hallazgos de auditoría técnica.\n\n# Entregable Esperado\n\nInforme técnico con: resumen ejecutivo, metodología, tabla de hallazgos (ID, severidad, evidencia, recomendación), heatmap de riesgos y roadmap de remediación.",
    "informe_auditoria": "===parametros\n\n- area: {[area]} → Área auditada\n- estandar: {[estandar]} → Estándar de referencia (ISO, COBIT, NIST, etc.)\n- alcance: {[alcance]} → Alcance de la auditoría\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Auditoría\", \"Cumplimiento\", \"Estándares\", \"Findings\"]\n\n===prompt\n\n# Objetivo\n\nGenerar informe de auditoría formal con hallazgos clasificados contra el estándar de referencia.\n\n# Arquetipo Experto\n\nActúa como un **Auditor Certificado** (CISA/ISO Lead Auditor) con experiencia en auditorías de cumplimiento.\n\n# Entregable Esperado\n\nInforme de auditoría con: alcance, metodología, criterios de evaluación, hallazgos por control (conforme/no conforme/observación), plan de acción correctiva y scoring de madurez.",
    "informe_viabilidad": "===parametros\n\n- iniciativa: {[iniciativa]} → Iniciativa a evaluar\n- dimensiones: {[dimensiones]} → Dimensiones de viabilidad (técnica, financiera, operativa, legal)\n- horizonte: {[horizonte]} → Horizonte de evaluación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Viabilidad\", \"Factibilidad\", \"Evaluación\", \"Go/No-Go\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar la viabilidad multidimensional de una iniciativa con recomendación Go/No-Go fundamentada.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Factibilidad** con experiencia en evaluaciones multidimensionales de proyectos complejos.\n\n# Entregable Esperado\n\nEstudio de viabilidad con: análisis por dimensión, matriz de factibilidad, riesgos por dimensión, recomendación Go/No-Go con condiciones, y plan de mitigación.",
    "informe_impacto": "===parametros\n\n- cambio: {[cambio]} → Cambio o iniciativa a evaluar\n- areas_impacto: {[areas_impacto]} → Áreas de impacto (personas, procesos, tecnología)\n- stakeholders: {[stakeholders]} → Stakeholders afectados\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Impacto\", \"Evaluación\", \"Cambio\", \"Stakeholders\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar el impacto de un cambio en todas las dimensiones afectadas con plan de mitigación.\n\n# Arquetipo Experto\n\nActúa como un **Change Impact Analyst** especializado en evaluaciones de impacto organizacional.\n\n# Entregable Esperado\n\nInforme de impacto con: mapa de impacto por área, severity rating, stakeholders afectados, plan de mitigación y comunicación, y timeline de adopción.",
    "informe_cumplimiento": "===parametros\n\n- regulacion: {[regulacion]} → Regulación o estándar (GDPR, SOX, PCI-DSS, etc.)\n- organizacion: {[organizacion]} → Organización evaluada\n- alcance: {[alcance]} → Alcance del assessment\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Cumplimiento\", \"Compliance\", \"Regulación\", \"Gap\"]\n\n===prompt\n\n# Objetivo\n\nEvaluar nivel de cumplimiento regulatorio e identificar gaps con plan de remediación priorizado.\n\n# Arquetipo Experto\n\nActúa como un **Compliance Officer** certificado con experiencia en frameworks regulatorios internacionales.\n\n# Entregable Esperado\n\nInforme de cumplimiento con: score por control, heatmap de gaps, hallazgos priorizados por riesgo, plan de remediación con estimación de esfuerzo, y dashboard de compliance.",
    "informe_benchmarking": "===parametros\n\n- organizacion: {[organizacion]} → Tu organización\n- competidores: {[competidores]} → Organizaciones de referencia\n- dimensiones: {[dimensiones]} → Dimensiones a comparar\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Benchmarking\", \"Comparación\", \"Best Practices\", \"Gap\"]\n\n===prompt\n\n# Objetivo\n\nComparar la organización contra best-in-class identificando gaps y oportunidades de mejora.\n\n# Arquetipo Experto\n\nActúa como un **Analista de Benchmarking** con acceso a bases de datos sectoriales y metodología rigurosa.\n\n# Entregable Esperado\n\nInforme de benchmarking con: matriz comparativa por dimensión, radar chart de posición relativa, gaps prioritarios, best practices transferibles y roadmap de mejora.",
    "informe_due_diligence": "===parametros\n\n- target: {[target]} → Empresa o activo a evaluar\n- tipo: {[tipo]} → (técnica|financiera|operativa|comercial)\n- horizonte: {[horizonte]} → Horizonte de la evaluación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Due Diligence\", \"Evaluación\", \"M&A\", \"Riesgo\"]\n\n===prompt\n\n# Objetivo\n\nRealizar due diligence estructurada que identifique riesgos, oportunidades y valoración fundamentada.\n\n# Arquetipo Experto\n\nActúa como un **Consultor de Due Diligence** con experiencia en procesos de M&A y evaluación de empresas.\n\n# Entregable Esperado\n\nInforme de due diligence con: resumen ejecutivo, evaluación por área, red flags identificados, oportunidades, valoración preliminar y recomendación de proceed/pause/no-go.",
    "informe_diagnostico_organizacional": "===parametros\n\n- organizacion: {[organizacion]} → Organización a diagnosticar\n- areas: {[areas]} → Áreas de diagnóstico (cultura, procesos, tecnología, talento)\n- profundidad: {[profundidad]} → (exploratoria|detallada|exhaustiva)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Diagnóstico\", \"Organizacional\", \"Assessment\", \"Mejora\"]\n\n===prompt\n\n# Objetivo\n\nRealizar diagnóstico organizacional integral que identifique fortalezas, debilidades y oportunidades de mejora.\n\n# Arquetipo Experto\n\nActúa como un **Consultor Organizacional Senior** con experiencia en diagnósticos de empresas de 100-10,000 empleados.\n\n# Entregable Esperado\n\nDiagnóstico con: mapa de madurez por dimensión, hallazgos priorizados, quick wins identificados, roadmap de transformación a 12 meses y business case de mejora.",
    "dashboard_ejecutivo_resumen": "===parametros\n\n- organizacion: {[organizacion]} → Nombre de la organización\n- kpis: {[kpis]} → KPIs principales del negocio\n- frecuencia: {[frecuencia]} → Frecuencia de actualización\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Ejecutivo\", \"C-Level\", \"KPIs\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard ejecutivo que comunique la salud del negocio en una vista de 30 segundos.\n\n# Arquetipo Experto\n\nActúa como un **BI Director** especializado en dashboards ejecutivos para boards y C-suite.\n\n# Entregable Esperado\n\nEspecificación de dashboard con: layout, KPIs con semáforo RAG, sparklines de tendencia, drill-down paths, y mockup describiendo cada widget.",
    "dashboard_operativo_realtime": "===parametros\n\n- sistema: {[sistema]} → Sistema a monitorear\n- metricas: {[metricas]} → Métricas operativas clave\n- umbrales: {[umbrales]} → Umbrales de alerta\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Operativo\", \"Realtime\", \"Monitoreo\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard operativo en tiempo real para monitoreo y detección temprana de anomalías.\n\n# Arquetipo Experto\n\nActúa como un **SRE Senior** con experiencia en diseño de dashboards de observabilidad.\n\n# Entregable Esperado\n\nEspecificación de dashboard operativo con: métricas por panel, umbrales de alerta, reglas de escalamiento, layout responsive y guía de interpretación.",
    "dashboard_financiero": "===parametros\n\n- empresa: {[empresa]} → Nombre de la empresa\n- metricas_financieras: {[metricas_financieras]} → Métricas financieras a incluir\n- periodo: {[periodo]} → Período de análisis\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Financiero\", \"P&L\", \"Cash Flow\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard financiero que visualice la salud financiera con métricas de P&L, cash flow y proyecciones.\n\n# Arquetipo Experto\n\nActúa como un **CFO** con experiencia en diseño de reportes financieros para boards.\n\n# Entregable Esperado\n\nEspecificación de dashboard financiero con: P&L resumido, cash flow, burn rate, runway, métricas de eficiencia, comparativo vs presupuesto y forecast.",
    "dashboard_equipo_rendimiento": "===parametros\n\n- equipo: {[equipo]} → Equipo a evaluar\n- metricas: {[metricas]} → Métricas de rendimiento\n- periodo: {[periodo]} → Período de evaluación\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Equipo\", \"Rendimiento\", \"Velocity\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de rendimiento de equipo que facilite coaching y mejora continua.\n\n# Arquetipo Experto\n\nActúa como un **Engineering Manager** con experiencia en métricas de equipo (DORA, SPACE framework).\n\n# Entregable Esperado\n\nDashboard con: velocity/throughput, cycle time, deployment frequency, lead time, team health indicators, y trends con anotaciones.",
    "dashboard_cliente_salud": "===parametros\n\n- segmento: {[segmento]} → Segmento de clientes\n- metricas_cx: {[metricas_cx]} → Métricas de experiencia del cliente\n- periodo: {[periodo]} → Período de análisis\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Cliente\", \"NPS\", \"Health Score\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de salud del cliente que anticipe churn y detecte oportunidades de upsell.\n\n# Arquetipo Experto\n\nActúa como un **Customer Success Director** con experiencia en health scoring y predicción de churn.\n\n# Entregable Esperado\n\nDashboard con: health score por cliente, NPS trend, usage metrics, risk signals, upsell indicators, y cohort analysis de retención.",
    "dashboard_proyecto_portfolio": "===parametros\n\n- portfolio: {[portfolio]} → Nombre del portfolio\n- proyectos: {[proyectos]} → Lista de proyectos\n- dimensiones: {[dimensiones]} → Dimensiones a trackear (budget, schedule, scope, quality)\n- adjuntos: {[adjuntos]} → (indica si hay adjuntos)\n\n===keywords\n[\"Dashboard\", \"Portfolio\", \"PMO\", \"Multi-proyecto\"]\n\n===prompt\n\n# Objetivo\n\nDiseñar dashboard de portfolio que dé visibilidad sobre todos los proyectos en una vista consolidada.\n\n# Arquetipo Experto\n\nActúa como un **PMO Director** con experiencia en gestión de portfolios de 20+ proyectos simultáneos.\n\n# Entregable Esperado\n\nDashboard de portfolio con: mapa de calor de salud por proyecto, burn rate consolidado, resource allocation heatmap, dependency graph, y RAG status por dimensión.",
}

# Merge into existing
for k, v in universal_new.items():
    uni_dict[k] = v

# Write updated JSON
with open(uni_json_path, 'w') as f:
    json.dump(uni_dict, f, ensure_ascii=False, indent=2)

print(f"Universal: {len(uni_dict)} prompts (was 180, now {len(uni_dict)})", file=sys.stderr)

# Regenerate JS using sync approach
uni_js_path = os.path.join(BASE, 'biblioteca-universal', 'prompts_universales.js')

# Build enriched array
enriched = []
for pid, content in uni_dict.items():
    # Extract category from first segment
    parts = pid.split('_')
    category = parts[0] if len(parts) > 1 else 'general'

    # Build title from remaining parts
    title_parts = parts[1:] if len(parts) > 1 else [pid]
    label_title = ' '.join(w.capitalize() for w in title_parts)

    # Count params
    import re
    param_count = len(set(re.findall(r'\{\[(\w+)\]\}', content)))

    # Extract keywords
    keywords = []
    kw_match = re.search(r'===keywords\s*\n\s*(\[.*?\])', content, re.DOTALL)
    if kw_match:
        try:
            keywords = json.loads(kw_match.group(1))
        except:
            pass

    enriched.append({
        "id": pid,
        "label_title": label_title,
        "category": category,
        "content": content,
        "paramCount": param_count,
        "keywords": keywords
    })

js_content = "window.promptsUniversales = " + json.dumps(enriched, ensure_ascii=False, indent=2) + ";\n"
with open(uni_js_path, 'w') as f:
    f.write(js_content)

print(f"Universal JS written: {len(enriched)} prompts", file=sys.stderr)

# Also update the copy in biblioteca-prompts
import shutil
shutil.copy2(uni_json_path, os.path.join(BASE, 'biblioteca-prompts', 'prompts_universales.json'))

print("Phase 1 complete: Universal expanded to 202", file=sys.stderr)
print(f"UNIVERSAL: {len(uni_dict)}")
