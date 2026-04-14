# Feature Specification: Home como Landing Vendedora (3 CTAs Primarios)

**Feature Branch**: `009-home-landing-sales`
**Created**: 2026-04-14
**Status**: Draft
**Input**: User description: "Requiero crear una versión nueva de mi sitio web, pero mucho más vendedora. El home es una landing que invita a (1) iniciar un diagnóstico gratuito, (2) usar un recurso, o (3) conocer nuestra oferta educativa. El branding esperado está demostrado en las cartillas/playbooks Neo-Swiss del workspace."

## Contexto del Producto

MetodologIA.info es un sitio EdTech LatAm ("Success as a Service"). El home actual tiene una estética oscura tipo startup que no refleja el estándar Neo-Swiss Clean ya implementado en las cartillas premium (`workspace/2026-04-10-site-reconstruction/inputs/*.html`) ni la governance visual del CONSTITUTION.md §X. Los visitantes llegan al home sin un camino claro hacia conversión: la propuesta de valor, los recursos y la oferta educativa compiten por atención y ninguno cierra.

Esta feature redefine el home como una **landing de una sola intención macro — "avanzar contigo" —** expresada en tres rutas de conversión mutuamente excluyentes que el visitante elige en los primeros 10 segundos.

## User Stories *(mandatory)*

### User Story 1 — Diagnóstico Gratuito como CTA Primario (Priority: P1)

Un visitante nuevo llega al home, entiende en menos de 10 segundos qué es MetodologIA y ve, sin hacer scroll, una invitación prominente a iniciar un **diagnóstico gratuito** (cuestionario breve que revela su nivel de madurez metodológica y recomendación personalizada). Hace clic, completa el diagnóstico y queda registrado como lead cualificado con contexto.

**Why this priority**: Es la ruta de mayor valor comercial. Un diagnóstico completado es un lead con intent, contexto y segmento (persona/empresa), convertible a cotización o conversación. Sin este camino, el sitio no vende.

**Independent Test**: Se puede probar de forma aislada publicando solo el hero + flujo de diagnóstico; si un visitante puede entrar, iniciar el diagnóstico y terminarlo recibiendo un resultado + seguimiento, la historia entrega valor sin depender de las demás.

**Acceptance Scenarios**:

1. **Given** un visitante nuevo en el home (desktop o mobile), **When** la página termina de cargar, **Then** ve un hero Neo-Swiss con una promesa de valor clara (≤12 palabras) y un botón primario visible "Iniciar diagnóstico gratuito" sin necesidad de hacer scroll.
2. **Given** un visitante que hace clic en "Iniciar diagnóstico gratuito", **When** entra al flujo, **Then** el flujo se presenta como pasos cortos (≤6 preguntas, progreso visible) y termina con un resultado personalizado y una siguiente acción.
3. **Given** un visitante completa el diagnóstico, **When** envía el último paso, **Then** sus respuestas y datos de contacto quedan registrados como lead con timestamp, segmento inferido y fuente `home-hero`.
4. **Given** un visitante abandona el diagnóstico a mitad, **When** vuelve al home en la misma sesión, **Then** puede retomarlo desde donde quedó.

---

### User Story 2 — Acceso a Recursos como Entrada Gratuita (Priority: P2)

Un visitante que aún no está listo para dar datos ve, en el mismo viewport del hero o inmediatamente debajo, una segunda ruta: **"Usar un recurso"** (cartillas, playbooks, biblioteca de prompts, mini-apps). Puede explorar recursos gratuitos sin registro; los premium piden email mínimo.

**Why this priority**: Captura visitantes en etapa temprana del funnel, construye autoridad y alimenta remarketing. Es el puente entre "curioso" y "lead cualificado".

**Independent Test**: Publicando solo el home + catálogo de recursos, un visitante puede llegar, elegir un recurso, abrirlo o descargarlo y volver al home — historia completa sin depender del diagnóstico ni de la oferta educativa.

**Acceptance Scenarios**:

1. **Given** un visitante en el home, **When** ve las tres rutas, **Then** "Usar un recurso" aparece como CTA secundario con peso visual menor al diagnóstico pero igualmente accesible.
2. **Given** un visitante elige "Usar un recurso", **When** navega al catálogo, **Then** ve los recursos organizados por tipo (cartilla, playbook, biblioteca, mini-app) con previsualización Neo-Swiss consistente con las cartillas existentes.
3. **Given** un visitante abre un recurso gratuito, **When** termina de consumirlo, **Then** ve una invitación contextual a diagnóstico o a la oferta educativa.

---

### User Story 3 — Descubrir la Oferta Educativa (Priority: P3)

Un visitante que ya conoce MetodologIA o que busca formación ve la tercera ruta: **"Conocer la oferta educativa"** (programas, cohortes, rutas de aprendizaje). Puede explorar programas, ver detalle y solicitar información.

**Why this priority**: Monetización directa pero con ciclo de venta más largo y audiencia más pequeña que diagnóstico. Importante pero no la primera prioridad visual.

**Independent Test**: Publicando solo el home + página de oferta educativa, un visitante puede descubrir programas y solicitar info — historia completa independiente.

**Acceptance Scenarios**:

1. **Given** un visitante en el home, **When** ve las tres rutas, **Then** "Conocer oferta educativa" es la tercera ruta, accesible pero con peso visual terciario.
2. **Given** un visitante elige oferta educativa, **When** navega, **Then** ve programas con formato consistente (nombre, duración, audiencia, resultado esperado, CTA de solicitud).
3. **Given** un visitante solicita información de un programa, **When** envía formulario, **Then** queda registrado como lead con contexto `offer:<programa>`.

---

### User Story 4 — Identidad Neo-Swiss Coherente con Cartillas (Priority: P1)

Un visitante que ya conoce las cartillas/playbooks premium de MetodologIA llega al home y percibe **inmediata continuidad visual**: mismo sistema tipográfico (Poppins/Montserrat/Trebuchet MS), misma paleta (navy/gold/blue/lavender/gray), misma aesthetic Neo-Swiss Clean, mismos patrones de layout y micro-interacciones.

**Why this priority**: Sin coherencia visual, el home no hereda la autoridad construida por las cartillas y el mensaje "vendedor" suena a marketing barato. La identidad ES parte del argumento de venta.

**Independent Test**: Un auditor de marca puede comparar el home propuesto con `cartilla-onboarding-programa-v11.html` y `playbook-deep-research-ia-v1.html` y validar consistencia visual sin probar ningún flujo.

**Acceptance Scenarios**:

1. **Given** el home nuevo publicado, **When** se compara lado a lado con las cartillas de referencia del workspace, **Then** comparten tokens de color, escala tipográfica, grid, shadows y patrones de componentes.
2. **Given** un usuario en modo claro o modo oscuro, **When** alterna, **Then** ambos modos respetan la governance del CONSTITUTION.md §X y la paleta exclusiva.
3. **Given** el home en mobile, **When** se inspecciona en viewports de 360px, 768px y 1280px, **Then** la jerarquía de los 3 CTAs se preserva y el diagnóstico sigue siendo la acción dominante.

---

### Edge Cases

- Un visitante con JavaScript deshabilitado debe ver el hero y los 3 CTAs renderizados como HTML estático con navegación funcional a las 3 páginas destino.
- Si el backend del diagnóstico está caído, el CTA primario degrada a formulario de contacto con mensaje explícito y sin errores de cara al usuario.
- Un visitante que ya completó un diagnóstico anterior ve "Continuar tu ruta" en lugar de "Iniciar diagnóstico".
- Un visitante que llega con UTM específico (ej. UTM de recurso) ve esa ruta destacada dinámicamente, sin romper la narrativa base de 3 CTAs.
- El home en ES y EN carga con las mismas 3 rutas y misma jerarquía, traducidas al 100% sin cadenas huérfanas.
- Usuarios con navegación por teclado o lector de pantalla deben tener orden de foco explícito con el diagnóstico primero.

## Requirements *(mandatory)*

### Functional Requirements

**Home landing y narrativa**

- **FR-001**: El home MUST presentar, en el viewport inicial sin scroll, una promesa de valor ≤12 palabras y tres rutas de conversión claramente jerarquizadas.
- **FR-002**: El home MUST jerarquizar visualmente el CTA de diagnóstico gratuito como acción primaria (peso visual dominante, contraste alto), el recurso como secundario y la oferta educativa como terciario.
- **FR-003**: El home MUST incluir al menos una sección de prueba social (testimonios, logos, casos o métricas) entre el hero y el cierre.
- **FR-004**: El home MUST tener una sección de cierre que repita las 3 rutas como último punto de conversión antes del footer.

**Diagnóstico gratuito**

- **FR-010**: El sistema MUST permitir a un visitante iniciar un diagnóstico gratuito desde el home sin registro previo.
- **FR-011**: El diagnóstico MUST constar de ≤6 pasos con indicador de progreso visible.
- **FR-012**: El diagnóstico MUST terminar con un resultado personalizado (texto + recomendación + CTA siguiente) y solicitar datos de contacto mínimos para enviar el resultado.
- **FR-013**: El sistema MUST persistir las respuestas del diagnóstico como lead con segmento inferido (persona/empresa), fuente, timestamp e idioma.
- **FR-014**: Users MUST be able to retomar un diagnóstico interrumpido en la misma sesión (almacenamiento local como mínimo).
- **FR-015**: El sistema MUST degradar el CTA de diagnóstico a un formulario de contacto alternativo cuando el backend del diagnóstico no esté disponible.

**Recursos**

- **FR-020**: El home MUST exponer un CTA "Usar un recurso" que lleva a un catálogo navegable de recursos existentes (cartillas, playbooks, biblioteca de prompts, mini-apps).
- **FR-021**: El catálogo MUST categorizar recursos por tipo y mostrar previsualización consistente con la aesthetic Neo-Swiss de las cartillas existentes.
- **FR-022**: Los recursos gratuitos MUST ser accesibles sin registro; los premium MUST solicitar email para desbloquear.

**Oferta educativa**

- **FR-030**: El home MUST exponer un CTA "Conocer oferta educativa" que lleva a una página con los programas formativos.
- **FR-031**: Cada programa MUST mostrar nombre, duración, audiencia, resultado esperado y CTA de solicitud de información.
- **FR-032**: El formulario de solicitud MUST registrar el lead con contexto del programa específico.

**Branding y design system**

- **FR-040**: El home MUST usar exclusivamente los tokens del design system Neo-Swiss gobernados por `CONSTITUTION.md §X`.
- **FR-041**: El home MUST usar la paleta exclusiva (navy, gold, blue, dark, lavender, gray) sin introducir colores nuevos.
- **FR-042**: El home MUST usar el sistema tipográfico de tres niveles (Poppins headings, Montserrat body, Trebuchet MS footnotes/labels).
- **FR-043**: El home MUST ser consistente visualmente con las cartillas de referencia del workspace (`cartilla-onboarding-programa-v11.html`, `playbook-deep-research-ia-v1.html`, `biblioteca-universal-prompting-v6.html`, `playbook-aprender-a-aprender-v6.html`).
- **FR-044**: El home MUST soportar modo claro como default y modo oscuro como toggle, ambos respetando la governance Neo-Swiss.

**Internacionalización y accesibilidad**

- **FR-050**: El home MUST estar 100% traducido ES/EN con las mismas 3 rutas y misma jerarquía en ambos idiomas.
- **FR-051**: El home MUST cumplir WCAG 2.1 AA como mínimo (contraste, orden de foco, labels, estados).
- **FR-052**: El orden de foco por teclado MUST comenzar por el CTA de diagnóstico antes de los CTAs secundarios.
- **FR-053**: El home MUST renderizar un estado degradado funcional (HTML estático navegable a los 3 destinos) sin JavaScript.

**Analítica de conversión**

- **FR-060**: El sistema MUST registrar eventos para: vista del home, clic en cada una de las 3 rutas, inicio del diagnóstico, paso a paso del diagnóstico, completado del diagnóstico, apertura de recurso, solicitud de oferta educativa.
- **FR-061**: Cada evento MUST incluir idioma, dispositivo, fuente (organic/paid/utm) y variante si hay A/B.

**Contexto personalizado por intención de origen**

- **FR-070**: El home MUST detectar UTMs de origen y, cuando coincidan con una de las 3 rutas, destacar visualmente esa ruta sin romper la narrativa base.
- **FR-071**: El home MUST reconocer visitantes con diagnóstico previo (storage local o cookie) y cambiar el CTA primario a "Continuar tu ruta".

### Key Entities

- **Lead**: Visitante identificado por email y/o sesión, con atributos: segmento (persona/empresa), fuente (home-hero/home-resource/home-offer), idioma, timestamp, estado del diagnóstico, programa de interés si aplica.
- **Diagnóstico**: Cuestionario corto con pasos, respuestas, resultado calculado (nivel + recomendación), contexto (idioma, dispositivo, fuente) y estado (en curso/completado/abandonado).
- **Recurso**: Pieza de contenido con tipo (cartilla/playbook/biblioteca/mini-app), estado (gratuito/premium), metadata bilingüe y relación opcional con programa o diagnóstico.
- **Programa Educativo**: Oferta formativa con nombre, duración, audiencia, resultado esperado, estado (activo/cohorte/pre-inscripción).
- **Evento de Conversión**: Registro de interacción (vista, clic, inicio, completado) con timestamp, sesión, ruta y variante.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Al menos **40% de las visitas al home** hacen clic en una de las 3 rutas de conversión (vs. baseline del home actual).
- **SC-002**: Al menos **15% de las visitas al home** inician el diagnóstico gratuito.
- **SC-003**: Al menos **60% de los diagnósticos iniciados** se completan (paso final enviado con contacto).
- **SC-004**: El tiempo promedio para completar el diagnóstico es **≤3 minutos**.
- **SC-005**: El home carga su contenido above-the-fold en **≤2.5 segundos** en 4G y **≤1.5 segundos** en desktop (LCP).
- **SC-006**: Auditoría de marca lado-a-lado entre el home y las cartillas de referencia: consistencia visual **≥95%**.
- **SC-007**: Lighthouse **≥90** en Performance, Accessibility, Best Practices y SEO, en mobile y desktop.
- **SC-008**: En pruebas de usabilidad, **≥90%** de los usuarios identifican correctamente las 3 rutas y eligen una en ≤10 segundos.
- **SC-009**: Conversiones totales (leads de cualquiera de las 3 rutas) aumentan al menos **2×** vs. baseline en los primeros 30 días post-lanzamiento.
- **SC-010**: Cero cadenas sin traducir detectadas por la auditoría i18n en ES y EN.
