# Feature Specification: Home como Landing Vendedora (3 CTAs Primarios)

**Feature Branch**: `009-home-landing-sales`
**Created**: 2026-04-14
**Revised**: 2026-04-14 (v2 — Socratic refinement + responsive + stack constraints)
**Status**: Draft v2
**Input (v1)**: "Requiero crear una versión nueva de mi sitio web, pero mucho más vendedora. El home es una landing que invita a (1) iniciar un diagnóstico gratuito, (2) usar un recurso, o (3) conocer nuestra oferta educativa. El branding esperado está demostrado en las cartillas/playbooks Neo-Swiss del workspace."
**Input (v2 amendment)**: Full responsive (mobile/tablet/desktop native), stack desplegable en Hostinger (HTML/CSS/JS), debate socrático para afinar intención, mejorar requerimiento y trazar mejor especificación, revisando `workspace/2026-04-10-site-reconstruction/inputs`.

---

## 1. Debate Socrático — Intención y Restricciones

### 1.1 Intención Real del Usuario (cuestionamiento)

**Pregunta**: ¿El objetivo es "tres rutas iguales de conversión" o "una sola intención de venta con dos escape routes para reducir abandono"?

**Tensión**: Tres CTAs con igual jerarquía diluyen la decisión y bajan conversión (ley de Hick). Pero el visitante que no está listo para diagnóstico rebota si solo ve una opción.

**Resolución**: Es una **pirámide de intención**, no tres rutas iguales.

- **CTA Primario (P1)** — Diagnóstico gratuito: peso visual dominante, arriba del fold, color oro, tamaño XL.
- **CTA Secundario (P2)** — Recurso gratuito: peso medio, outline, disponible junto al primario pero visualmente subordinado.
- **CTA Terciario (P3)** — Oferta educativa: link con chevron en nav + card en sección dedicada, sin competir con el hero.

**Por qué**: El diagnóstico es el único CTA que produce un **lead con contexto** (segmento + madurez + intent). Los otros dos capturan audiencias tempranas que aún no están listas para compartir datos. Degradar P2/P3 a "escape routes con peso visual decreciente" multiplica la conversión del P1 sin sacrificar los tempranos.

---

### 1.2 Identidad Visual — Presente vs Futuro

**Pregunta**: El home actual usa estética dark startup (navy #0B2545 + oro + glass), y el usuario dice "refleja la identidad pero no el futuro". Las cartillas premium (`cartilla-onboarding-programa-v11.html`, `playbook-deep-research-ia-v1.html`) usan Neo-Swiss Light (#F9FAFB base, navy #122562 ink, oro #FFD700 accent). ¿Cuál es "el futuro"?

**Resolución**: **Neo-Swiss Light es el futuro. Dark Mode es el mirror opcional.**

Evidencia en inputs:
- `--bg: #F9FAFB` (light default), `--bg: #0B2545` (dark mirror)
- Mismo sistema tipográfico en ambos: Poppins head / Montserrat body / Trebuchet MS notes
- Misma paleta: navy, gold, blue, white, lavender implícito
- Mismos radios: 6/12/20/32 px
- Mismas shadows: glow suave en light, glow denso en dark

**Implicación**: El home v2 debe:
1. Partir de **light por defecto** (respetando `prefers-color-scheme: light`)
2. Ofrecer **toggle a dark** persistente en `localStorage`
3. Mirror exacto del sistema de las cartillas — sin introducir tokens nuevos
4. Dark mode es el mirror, no el default

---

### 1.3 Restricciones de Stack — Hostinger Static

**Pregunta**: ¿Qué tecnologías son viables en Hostinger con deployment vía git pull?

**Realidad técnica** (verificada contra el repo):
- **Viable**: HTML estático, CSS (custom props + Tailwind build), Vanilla JS, Web Components, Firebase client SDK (ya integrado en `js/cms/`), Firestore, Firebase Auth, Firebase Analytics, localStorage, Service Worker/PWA.
- **No viable sin server**: Node runtime, Express, SSR, endpoints personalizados, secrets management server-side.
- **Ya integrado en el repo**: Firebase client SDK, i18n module (`js/i18n/`), Web Components (`components/SiteHeader.js`, `components/SiteFooter.js`), Tailwind build (`dist/output.css`), CMS service modules.

**Resolución**: **Stack v2 = HTML + CSS (custom props + Tailwind prebuilt) + Vanilla JS + Web Components + Firebase client SDK**. Cero dependencias nuevas. Todo el backend corre en Firestore desde el cliente, gobernado por security rules.

---

### 1.4 Responsive — Native en Todos los Dispositivos

**Pregunta**: ¿Qué significa "full responsive, mobile native, desktop native, tablet ready"?

**Interpretación**: No es "responsive CSS adaptativo"; es **diseño específico por viewport class con transiciones fluidas**.

**Resolución — Viewport classes + breakpoints**:

| Class | Range | Target devices | Layout |
|---|---|---|---|
| `xs` | 360–389 px | iPhone SE, pequeños Android | 1-col hero, CTA stack vertical, nav drawer |
| `sm` | 390–767 px | iPhone 12–15, Pixel | 1-col hero, CTAs side-by-side condensed |
| `md` | 768–1023 px | iPad portrait, tablet | 1-col hero ancho, CTAs horizontales, rail lateral |
| `lg` | 1024–1279 px | iPad landscape, laptop pequeño | 2-col hero, CTAs horizontales, prueba social lateral |
| `xl` | 1280–1535 px | Desktop estándar | 2-col hero optimizado, max-w 1280 |
| `2xl` | ≥1536 px | Desktop wide, 4K | 2-col hero centrado max-w 1440, resto centrado |

**Reglas duras**:
- **Mobile-first CSS**: base styles son xs, el resto es `min-width`.
- **Sin scroll horizontal** en ningún viewport.
- **Touch targets** ≥44×44 px en xs/sm/md (WCAG 2.1 AAA en mobile).
- **Typography scale** con `clamp()` fluido entre breakpoints, no saltos.
- **Hero alcanza el CTA primario sin scroll** en xs (360×640), sm, md, lg, xl, 2xl.
- **Safe-areas iOS** respetadas vía `env(safe-area-inset-*)`.
- **Orientación landscape en mobile**: hero colapsa a layout compacto con CTA primario visible.

---

### 1.5 Diagnóstico — Datos Mínimos y Persistencia

**Pregunta**: ¿Qué datos pide y dónde viven?

**Resolución**:

**Datos mínimos para completar diagnóstico** (punto de conversión a lead):
- Email (obligatorio, validado formato)
- Nombre (obligatorio, 2–80 chars)
- Segmento inferido (persona/empresa) — derivado de las respuestas, no pedido al usuario
- Idioma activo (auto-detectado, ES/EN)
- Consentimiento LGPD/GDPR-light (checkbox con texto corto + link a política)

**Datos opcionales** (presentados como "agregar contexto"):
- Empresa (si segmento=empresa)
- Rol
- Tamaño de equipo

**Persistencia**:

| Estado | Storage | TTL | Por qué |
|---|---|---|---|
| Diagnóstico en curso (paso 1–5 sin email) | `localStorage` | 24h | Retoma en misma sesión sin pedir nada |
| Diagnóstico completado (con email) | Firestore `diagnostics/{uid}` | Persistente | Fuente de verdad del lead |
| Lead | Firestore `leads/{uid}` | Persistente | Alimenta CRM manual / export |
| Cookie `mdg_returning` (hash del email SHA-256) | Cookie 180 días | 6 meses | Detectar "visitante con diagnóstico previo" para cambiar CTA a "Continuar tu ruta" |

---

### 1.6 Analytics — Vendor y Eventos

**Resolución**: **Firebase Analytics (ya integrado)** + opción a capa GA4 paralela vía gtag si el usuario decide más tarde. No requiere nueva dependencia.

---

### 1.7 Programas Educativos — ¿Existen?

**Pregunta**: ¿La oferta educativa ya está en el repo o hay que crearla?

**Hallazgo**: `empresas/` y `personas/` ya contienen páginas con programas (`bootcamp-ventas-ia.html`, `workshop-venta-amplificada.html`, `bootcamp-amplificacion-profesional.html`, `consultive-workshops-estrategia-personal.html`, `autodiagnostico.html`).

**Resolución**: **Se reutiliza lo existente**. El CTA P3 del home enlaza a `empresas/index.html` y `personas/index.html` como hub de oferta. No se crean programas nuevos.

---

### 1.8 Baseline para Success Criteria

**Pregunta**: ¿Cuál es el baseline actual de conversión del home?

**Resolución**: **Marcado como `[BASELINE-TBD]`**. El primer paso de `/iikit-02-plan` debe incluir una tarea T-000 "Capturar baseline GA4 últimos 30 días" antes de medir SC-001, SC-002, SC-009. Los SC se redefinen como "uplift vs baseline capturado" en lugar de valores absolutos.

---

## 2. Contexto del Producto (mejorado)

**metodologia.info** es el sitio vendedor de **MetodologIA — "Success as a Service"**, una consultora y plataforma EdTech LatAm fundada por Javier Montaño (Sofka + JM Labs). Sirve a dos audiencias complementarias:

- **B2B — Empresas**: líderes y equipos que necesitan modelos operativos y formas de trabajo amplificadas con IA.
- **B2C — Personas**: profesionales que se reinventan en la era de la IA para crear impacto.

**Problema actual del home**: la versión vigente en `index.html` usa estética dark startup (navy + oro + glass + dashboard hero) que comunica tecnología y autoridad pero **no cierra** por tres razones:

1. **Doble gateway Empresas/Personas** fuerza al visitante a auto-clasificarse antes de recibir propuesta de valor.
2. **Cero llamados a la acción en el fold**: el CTA "Descubrir Visión" es navegacional, no conversor.
3. **Discontinuidad visual con las cartillas premium** del workspace: las cartillas son Neo-Swiss Light, el home es dark — el visitante que ha consumido cartillas percibe dos marcas.

**Esta feature redefine el home como una landing de una sola intención macro — "iniciar tu ruta de éxito con una prueba concreta y gratuita" — en estética Neo-Swiss Light coherente con las cartillas, con tres rutas de conversión jerarquizadas (no igualadas) y full responsive nativo en xs/sm/md/lg/xl/2xl.**

---

## 3. User Stories *(mandatory)*

### US-1 — Diagnóstico Gratuito como CTA Primario (Priority: P1)

Un visitante nuevo llega al home y en **≤8 segundos** entiende qué es MetodologIA y ve un botón prominente "Iniciar diagnóstico gratuito". Hace clic, completa un cuestionario de ≤6 pasos y recibe un resultado personalizado (nivel de madurez metodológica + recomendación + CTA siguiente), quedando registrado como lead cualificado con segmento (persona/empresa), idioma, timestamp y fuente `home-hero`.

**Why this priority**: Es la ruta de mayor valor comercial. Un diagnóstico completado es un lead con intent, contexto y segmento, convertible a cotización o conversación. Sin esta ruta, el sitio no vende.

**Independent test**: Publicando solo el hero + flujo de diagnóstico, un visitante puede entrar, iniciar, completar y recibir resultado + registro en Firestore, sin depender de US-2 ni US-3.

**Acceptance Scenarios**:

1. **Given** un visitante nuevo en el home en viewport xs (360×640), **When** la página termina de cargar (LCP ≤2.5s en 4G), **Then** ve el hero Neo-Swiss Light con promesa ≤12 palabras y el botón primario "Iniciar diagnóstico gratuito" visible sin scroll y con touch target ≥44px.
2. **Given** el mismo visitante en viewport 2xl (1920×1080), **When** carga, **Then** ve el mismo hero en layout 2-col optimizado, con el CTA primario manteniendo peso visual dominante.
3. **Given** un visitante hace clic en "Iniciar diagnóstico gratuito", **When** entra al flujo, **Then** ve pasos cortos (≤6 preguntas), indicador de progreso persistente, botones back/next, y tiempo estimado "≈3 min".
4. **Given** un visitante completa el diagnóstico, **When** envía el último paso con email + nombre + consent, **Then** las respuestas quedan persistidas en Firestore `diagnostics/{uid}`, el lead en `leads/{uid}` con segmento inferido, idioma y fuente `home-hero`, y se dispara evento Analytics `diagnostic_completed`.
5. **Given** un visitante abandona en el paso 3, **When** vuelve al home en la misma sesión (≤24h), **Then** ve un banner "Tienes un diagnóstico sin terminar — continuar" que retoma desde el paso 3 (estado en `localStorage`).
6. **Given** un visitante con cookie `mdg_returning`, **When** carga el home, **Then** el CTA primario cambia a "Continuar tu ruta" en lugar de "Iniciar diagnóstico".

---

### US-2 — Recurso Gratuito como Escape Route Temprana (Priority: P2)

Un visitante que aún no está listo para dejar datos ve, **dentro del mismo hero o inmediatamente debajo**, el CTA secundario "Explorar recursos gratis". Navega al catálogo `recursos/`, elige una categoría (cartilla, playbook, biblioteca, mini-app), abre o descarga un recurso y, al terminar, ve una invitación contextual al diagnóstico o a la oferta.

**Why this priority**: Captura visitantes en etapa temprana, construye autoridad y alimenta remarketing. Es el puente entre "curioso" y "lead cualificado". Sin este puente, los visitantes no listos rebotan.

**Independent test**: Publicando solo el home + catálogo, un visitante llega, elige recurso, lo abre/descarga y vuelve — historia completa independiente de US-1 y US-3.

**Acceptance Scenarios**:

1. **Given** un visitante en el home, **When** ve las tres rutas, **Then** "Explorar recursos" aparece como CTA secundario con peso visual claramente subordinado al primario (outline vs filled, tamaño medio vs XL).
2. **Given** un visitante elige "Explorar recursos", **When** navega al catálogo, **Then** ve los recursos organizados por tipo con previsualización Neo-Swiss consistente con las cartillas existentes.
3. **Given** un visitante abre un recurso gratuito, **When** termina de consumirlo, **Then** ve una invitación contextual ("¿Quieres saber qué nivel ya tienes? Haz el diagnóstico de 3 min").
4. **Given** un visitante intenta abrir un recurso premium, **When** clica, **Then** ve un modal "Ingresa tu email para desbloquear" que registra lead con fuente `home-resource-premium` y entrega el recurso sin double opt-in.

---

### US-3 — Oferta Educativa como Camino de Alta Intención (Priority: P3)

Un visitante que ya conoce MetodologIA, o que llegó buscando formación concreta, ve el tercer camino en una sección dedicada bajo el hero ("Programas activos"). Navega a `empresas/` o `personas/`, explora programas con formato consistente (nombre, duración, audiencia, resultado, CTA solicitud), solicita información y queda registrado como lead con contexto `offer:<programa>`.

**Why this priority**: Monetización directa pero con ciclo de venta más largo y audiencia más pequeña. Importante pero no domina el fold.

**Independent test**: Publicando home + `empresas/` + `personas/`, un visitante descubre programas y solicita info — historia completa.

**Acceptance Scenarios**:

1. **Given** un visitante en el home, **When** hace scroll 1 viewport, **Then** ve una sección "Programas activos" con 3–4 cards (uno por programa principal) en layout responsive (1-col xs/sm, 2-col md, 3-col lg+).
2. **Given** un visitante elige un programa, **When** navega, **Then** aterriza en `empresas/index.html` o `personas/index.html` con la oferta respectiva.
3. **Given** un visitante solicita información, **When** envía formulario, **Then** queda registrado como lead con contexto `offer:<slug-programa>`.

---

### US-4 — Identidad Neo-Swiss Light Coherente con Cartillas (Priority: P1)

Un visitante que ya conoce las cartillas premium llega al home y percibe **continuidad visual inmediata**: mismo sistema tipográfico (Poppins/Montserrat/Trebuchet MS), misma paleta (navy #122562, gold #FFD700, blue #137DC5, white #FFFFFF, bg #F9FAFB, bg-soft #F0F0EC), mismos radios (6/12/20/32), mismas shadows, mismos patrones.

**Why this priority**: Sin coherencia visual, el home no hereda la autoridad construida por las cartillas y la retórica "vendedora" suena a marketing barato. La identidad ES parte del argumento de venta.

**Independent test**: Un auditor de marca compara el home nuevo lado a lado con `cartilla-onboarding-programa-v11.html` y `playbook-deep-research-ia-v1.html` y valida consistencia visual ≥95% sin probar ningún flujo.

**Acceptance Scenarios**:

1. **Given** el home nuevo publicado, **When** se compara con las cartillas de referencia, **Then** comparten tokens (colores, tipografía, radios, shadows, spacing) al 100% — mismos custom properties CSS.
2. **Given** el home en modo light (default), **When** se compara con `cartilla-onboarding-programa-v11.html`, **Then** el bg es `#F9FAFB`, el navy `#122562`, el gold `#FFD700` y la tipografía idéntica.
3. **Given** el home en modo dark (toggle), **When** se compara con el dark mirror de las mismas cartillas, **Then** el bg es `#0B2545`, el text `#F0F4F8` y la paleta se adapta con los mismos tokens desaturados.
4. **Given** el home en xs, sm, md, lg, xl y 2xl, **When** se inspecciona, **Then** la jerarquía de los 3 CTAs se preserva y el diagnóstico siempre domina el fold.

---

### US-5 — Responsive Nativo en Todos los Dispositivos (Priority: P1)

Un visitante accede al home desde iPhone SE (xs), iPhone 15 (sm), iPad portrait (md), iPad landscape / MacBook Air (lg), desktop 27" (xl) o monitor 4K (2xl), y en cada caso percibe un **diseño nativo, no un responsive genérico**. Las tres rutas se preservan, el fold muestra CTA primario, no hay scroll horizontal, los touch targets cumplen WCAG, y el LCP es ≤2.5s en 4G.

**Why this priority**: El tráfico LatAm es ≥65% mobile. Un home mal adaptado a xs/sm pierde al grueso de la audiencia; uno mal adaptado a desktop pierde credibilidad B2B.

**Independent test**: Matriz de pruebas manuales en viewports 360×640, 390×844, 768×1024, 1024×768, 1280×800, 1920×1080 — cada uno debe pasar un checklist visual de 12 puntos (fold CTA visible, nav accesible, tipografía legible, touch targets ≥44px, sin scroll horizontal, imágenes nítidas, contrast ≥4.5:1, safe areas respetadas, orientación landscape operativa, modo oscuro legible, i18n sin overflow, footer visible).

**Acceptance Scenarios**:

1. **Given** un visitante en iPhone SE (360×640 portrait), **When** carga, **Then** ve promesa + CTA primario sin scroll, nav en drawer, touch targets ≥44px, tipografía base 16px.
2. **Given** un visitante en iPhone 15 landscape (844×390), **When** carga, **Then** el hero colapsa a layout compacto manteniendo CTA primario visible.
3. **Given** un visitante en iPad portrait (768×1024), **When** carga, **Then** ve el hero en 1-col ancho con CTAs horizontales.
4. **Given** un visitante en desktop 1920×1080, **When** carga, **Then** ve el hero 2-col con max-w 1440 centrado.
5. **Given** un visitante con navegación por teclado, **When** tabula desde el inicio, **Then** el orden de foco es: skip-link → nav → CTA primario → CTA secundario → sección programas → footer.

---

### Edge Cases

- Visitante con JavaScript deshabilitado: hero y los 3 CTAs renderizan como HTML estático con hrefs funcionales a `/diagnostico/`, `/recursos/`, `/empresas/`. El diagnóstico degrada a formulario de contacto simple.
- Backend Firestore caído o rules rechazan: CTA primario muestra toast "Servicio temporal fuera — contáctanos" con link mailto:.
- Visitante con diagnóstico previo: CTA muta a "Continuar tu ruta" (cookie `mdg_returning`).
- UTM `utm_content=recurso` o `utm_content=oferta`: la ruta correspondiente se destaca dinámicamente con un halo gold sin romper jerarquía.
- Home en ES o EN: misma jerarquía, mismo layout, cero cadenas huérfanas.
- Usuarios con `prefers-reduced-motion`: animaciones de entrada desactivadas, transiciones ≤100ms.
- iOS notch / Dynamic Island: contenido crítico respeta `env(safe-area-inset-top)`.
- Lector de pantalla: orden lógico de lectura, skip-link visible al focus, labels descriptivos, live region para progress bar del diagnóstico.
- Bajo ancho de banda (2G/3G): critical CSS inline, fuentes `font-display: swap`, imágenes con `loading="lazy"` y srcset WebP/AVIF con fallback.

---

## 4. Requirements *(mandatory)*

### 4.1 Functional Requirements

**Home landing y narrativa**

- **FR-001**: El home MUST presentar en el viewport inicial sin scroll (xs a 2xl) una promesa de valor ≤12 palabras y los 3 CTAs con jerarquía visual explícita (primario dominante, secundario subordinado, terciario en sección dedicada bajo el hero).
- **FR-002**: El CTA primario "Iniciar diagnóstico gratuito" MUST ser el único con peso visual dominante (filled gold, tamaño XL, touch target ≥44×44 px en mobile y ≥48×48 en tablet/desktop).
- **FR-003**: El home MUST incluir una sección de prueba social (testimonios o logos o métricas) entre el hero y la sección de programas.
- **FR-004**: El home MUST repetir los 3 CTAs en una sección de cierre antes del footer.
- **FR-005**: El home MUST usar la estructura: `hero → prueba social → 3 rutas expandidas → programas activos → cierre con CTAs → footer`.

**Diagnóstico gratuito**

- **FR-010**: El sistema MUST permitir a un visitante iniciar el diagnóstico sin registro previo, sin email, sin cookies.
- **FR-011**: El diagnóstico MUST constar de ≤6 pasos con barra de progreso visible y tiempo estimado "≈3 min".
- **FR-012**: El diagnóstico MUST terminar con un resultado personalizado (nivel + recomendación + CTA siguiente) y solicitar en el último paso: email, nombre, consentimiento LGPD/GDPR-light (checkbox obligatorio con link a política).
- **FR-013**: El sistema MUST persistir el diagnóstico completado en Firestore `diagnostics/{uid}` y el lead en `leads/{uid}` con: segmento inferido, fuente, idioma, timestamp, respuestas hash-paso-a-paso, resultado calculado.
- **FR-014**: El sistema MUST persistir el diagnóstico en curso en `localStorage` con TTL 24h para retomar en la misma sesión o dentro del día.
- **FR-015**: El sistema MUST degradar el CTA a un formulario de contacto cuando Firestore no esté disponible, mostrando mensaje claro ("Servicio temporal fuera — usa este formulario").
- **FR-016**: El sistema MUST generar una cookie `mdg_returning` (SHA-256 del email, Secure, SameSite=Lax, 180 días) al completar el diagnóstico, y cambiar el CTA primario a "Continuar tu ruta" cuando esté presente.

**Recursos**

- **FR-020**: El home MUST exponer un CTA "Explorar recursos gratis" como link secundario junto al CTA primario, con peso visual subordinado.
- **FR-021**: El CTA MUST llevar a `recursos/index.html` (catálogo existente) con resaltado visual Neo-Swiss.
- **FR-022**: Recursos premium MUST pedir email + nombre en un modal antes de desbloquear (lead con fuente `home-resource-premium`), sin double opt-in.

**Oferta educativa**

- **FR-030**: El home MUST exponer una sección "Programas activos" bajo el hero con 3–4 programas representativos (cards con nombre, audiencia, duración, resultado, CTA).
- **FR-031**: Cada card MUST enlazar a la página existente (`empresas/*.html` o `personas/*.html`) sin crear páginas nuevas.
- **FR-032**: El CTA global de la sección MUST ser "Ver todos los programas" enlazando a `empresas/index.html` y `personas/index.html` según segmento.

**Branding y design system**

- **FR-040**: El home MUST consumir exclusivamente los tokens CSS gobernados por `CONSTITUTION.md §X` — custom properties idénticas a las cartillas de referencia.
- **FR-041**: El home MUST usar la paleta Neo-Swiss Light como default: `--bg #F9FAFB`, `--bg-soft #F0F0EC`, `--bg-card rgba(255,255,255,.88)`, `--navy #122562`, `--gold #FFD700`, `--gold-dark #B8860B`, `--blue #137DC5`, `--text #1F2833`, `--text-sec #4A5568`, `--text-muted #808080`, `--border rgba(18,37,98,.08)`.
- **FR-042**: El home MUST soportar dark mirror (toggle manual + `prefers-color-scheme`): `--bg #0B2545`, `--bg-soft #071A33`, `--text #F0F4F8`, con los mismos gold/blue desaturados.
- **FR-043**: El home MUST usar el sistema tipográfico de 3 niveles: `--font-head 'Poppins'` (headings), `--font-body 'Montserrat'` (body), `--font-note 'Trebuchet MS'` (notes, labels, micro-copy).
- **FR-044**: El home MUST usar radios `--radius-sm 6px`, `--radius-md 12px`, `--radius-lg 20px`, `--radius-xl 32px` y shadows `--shadow-card`, `--shadow-glow` idénticos a las cartillas.
- **FR-045**: El home MUST persistir el modo activo (light/dark) en `localStorage` como `mdg_theme`, respetando `prefers-color-scheme` como fallback.

**Responsive y diseño nativo**

- **FR-050**: El home MUST ser mobile-first, con breakpoints `xs 360`, `sm 390`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1536`.
- **FR-051**: El home MUST mostrar el CTA primario visible sin scroll en todos los breakpoints, incluyendo landscape mobile (844×390).
- **FR-052**: El home MUST usar `clamp()` para typography scale fluida entre breakpoints.
- **FR-053**: El home MUST respetar `env(safe-area-inset-*)` en iOS para notch/Dynamic Island/home indicator.
- **FR-054**: El home MUST tener touch targets ≥44×44 px en xs/sm y ≥48×48 px en md/lg/xl/2xl, con spacing ≥8px entre ellos.
- **FR-055**: El home MUST evitar scroll horizontal en cualquier viewport (test automatizado en Playwright).
- **FR-056**: El home MUST cargar imágenes con `srcset` WebP/AVIF + fallback PNG/JPG y `loading="lazy"` fuera del fold.
- **FR-057**: El home MUST reservar espacio (`aspect-ratio` o `width/height`) para todos los media para mantener CLS <0.1.

**Internacionalización y accesibilidad**

- **FR-060**: El home MUST estar 100% traducido ES/EN usando el módulo `js/i18n/` existente y `data-i18n` attributes.
- **FR-061**: El home MUST cumplir WCAG 2.1 AA mínimo: contrast ≥4.5:1 texto normal, ≥3:1 texto grande, ≥3:1 UI components, focus rings visibles, orden de foco lógico.
- **FR-062**: El orden de foco por teclado MUST ser: skip-link → nav → CTA primario → CTA secundario → programas → footer.
- **FR-063**: El home MUST renderizar un estado degradado funcional sin JavaScript (HTML estático navegable a `/diagnostico/`, `/recursos/`, `/empresas/`, `/personas/`).
- **FR-064**: El home MUST respetar `prefers-reduced-motion` desactivando entrance animations y limitando transiciones a ≤100ms.
- **FR-065**: Los iconos lucide MUST tener `aria-hidden="true"` cuando sean decorativos y `aria-label` cuando sean funcionales.

**Analítica de conversión**

- **FR-070**: El home MUST registrar eventos en Firebase Analytics: `home_view`, `cta_click_primary`, `cta_click_secondary`, `cta_click_tertiary`, `diagnostic_start`, `diagnostic_step_{1..6}`, `diagnostic_completed`, `diagnostic_abandoned`, `resource_open`, `resource_premium_unlock`, `program_request`.
- **FR-071**: Cada evento MUST incluir: `locale` (es/en), `device_class` (xs/sm/md/lg/xl/2xl), `source` (organic/utm/direct), `utm_content` si aplica, `variant` si A/B.
- **FR-072**: El home MUST declarar consent banner LGPD-light con opciones aceptar/rechazar analytics antes de disparar eventos (cookie `mdg_consent`).

**Contexto personalizado por intención**

- **FR-080**: El home MUST leer `utm_content` y cuando sea `diagnostico`, `recurso` u `oferta`, destacar visualmente la ruta correspondiente con un halo/glow gold sutil, sin cambiar la jerarquía base.
- **FR-081**: El home MUST detectar la cookie `mdg_returning` y mutar el CTA primario a "Continuar tu ruta" + link directo al diagnóstico con estado restaurado.

**Performance**

- **FR-090**: El home MUST cargar el LCP en ≤2.5s en 4G (slow 3G Fast simulación) y ≤1.5s en desktop cable.
- **FR-091**: El home MUST tener TBT <200ms, CLS <0.1, INP <200ms.
- **FR-092**: El home MUST inline el critical CSS del fold y diferir el resto (`media="print"` + `onload`).
- **FR-093**: El home MUST cargar fuentes con `font-display: swap` y preconnect a `fonts.googleapis.com`.
- **FR-094**: El home MUST diferir toda JS no crítica con `defer` o `type="module"`.
- **FR-095**: El home MUST consumir los assets existentes del proyecto (`dist/output.css`, `components/SiteHeader.js`, `components/SiteFooter.js`, `js/icons.js`) sin introducir dependencias nuevas.

### 4.2 Non-Functional Requirements

- **NFR-001**: Stack = HTML estático + CSS (custom properties + Tailwind prebuilt) + Vanilla JS + Web Components + Firebase client SDK. **Cero runtime server-side**.
- **NFR-002**: Despliegue vía git pull SSH a Hostinger (`u363367449@156.67.75.195:65002`) en rama `main`.
- **NFR-003**: Compatibilidad navegadores: Chrome 110+, Safari 15+, Firefox 110+, Edge 110+, iOS Safari 15+, Chrome Android 110+.
- **NFR-004**: Tamaño total del home <250 KB (HTML + critical CSS) inicial, <800 KB total con lazy loading.
- **NFR-005**: Firestore security rules MUST restringir escritura a `diagnostics/{uid}` y `leads/{uid}` solo al uid de la sesión anónima que las creó.
- **NFR-006**: PII protegida — email nunca en logs de cliente, eventos de Analytics sin email raw (solo hash).

### 4.3 Key Entities

- **Lead**: `{uid, email, name, segmento, fuente, locale, createdAt, updatedAt, consent, programaInterest?}`
- **Diagnóstico**: `{uid, leadUid, steps:[{id,answer}], resultado:{nivel,recomendacion}, locale, deviceClass, fuente, startedAt, completedAt, status:"in-progress"|"completed"|"abandoned"}`
- **Recurso**: `{id, tipo, estado:"free"|"premium", locale, previewUrl, fullUrl}` (existente en el CMS).
- **Programa Educativo**: `{id, slug, nombre, duracion, audiencia, resultado, estado, segmento:"empresa"|"persona", href}` (existente).
- **Evento de Conversión**: `{tipo, sessionId, route, variant?, locale, deviceClass, timestamp, utm?}`

---

## 5. Success Criteria *(mandatory)*

### 5.1 Measurable Outcomes (con baselines declarados)

> **Nota**: Los SC marcados `[BASELINE-TBD]` se miden contra un baseline GA4 capturado en la T-000 del plan (últimos 30 días del home actual).

- **SC-001**: **CTR total** — ≥40% de visitas al home hacen clic en uno de los 3 CTAs `[BASELINE-TBD, target +2×]`.
- **SC-002**: **CTR diagnóstico** — ≥15% de visitas al home inician el diagnóstico `[BASELINE-TBD]`.
- **SC-003**: **Completion rate diagnóstico** — ≥60% de los diagnósticos iniciados terminan con lead registrado.
- **SC-004**: **Tiempo mediano de diagnóstico** — ≤3 minutos (medido desde `diagnostic_start` hasta `diagnostic_completed`).
- **SC-005**: **LCP** — ≤2.5s en 4G (Lighthouse throttled), ≤1.5s desktop cable, en xs/sm/md/lg/xl/2xl.
- **SC-006**: **Consistencia visual cartillas ↔ home** — ≥95% en auditoría lado-a-lado (mismos custom properties, mismos patrones componentes, mismo sistema tipográfico).
- **SC-007**: **Lighthouse** — ≥90 en Performance, Accessibility, Best Practices, SEO en mobile y desktop.
- **SC-008**: **Usabilidad** — ≥90% de usuarios en prueba moderada identifican los 3 caminos y eligen uno en ≤10 segundos.
- **SC-009**: **Conversión total leads** — uplift ≥2× vs baseline en los primeros 30 días post-lanzamiento `[BASELINE-TBD]`.
- **SC-010**: **Cobertura i18n** — 0 cadenas sin traducir en auditoría automática ES y EN.
- **SC-011**: **Matriz responsive** — 6/6 viewports (xs/sm/md/lg/xl/2xl) pasan el checklist de 12 puntos de US-5.
- **SC-012**: **Zero scroll horizontal** — test Playwright en los 6 viewports confirma ausencia de scroll horizontal.
- **SC-013**: **Touch targets** — 100% de elementos interactivos cumplen ≥44×44 px en xs/sm.
- **SC-014**: **CLS** — <0.1 en xs/sm/md/lg (Core Web Vitals).
- **SC-015**: **Contrast** — 100% de pares foreground/background pasan WCAG AA (≥4.5:1 normal, ≥3:1 large).

---

## 6. Constraints & Assumptions

### 6.1 Constraints

- **C-001**: Stack limitado a HTML/CSS/JS estático + Firebase client SDK (Hostinger sin Node runtime).
- **C-002**: No se introducen frameworks nuevos (React, Vue, Svelte) — se mantiene vanilla + Web Components.
- **C-003**: No se crean programas educativos nuevos — se reutilizan los existentes en `empresas/` y `personas/`.
- **C-004**: Paleta y tipografía fijas a tokens del design system gobernado por `CONSTITUTION.md §X`.
- **C-005**: Deployment vía git pull SSH en rama `main` (Constitution XX).
- **C-006**: Bundle Firebase SDK reutilizado — versión ya integrada en `js/cms/firebase-config.js`.

### 6.2 Assumptions

- **A-001**: Existe un baseline de GA4 del home actual capturable en T-000 del plan.
- **A-002**: Las cartillas en `workspace/2026-04-10-site-reconstruction/inputs/` son la fuente de verdad visual hasta que se migren a design system tokens oficiales.
- **A-003**: El catálogo de recursos en `recursos/` está operativo y los premium están marcados.
- **A-004**: La consola Firebase del proyecto permite crear colecciones `diagnostics/` y `leads/` con security rules bajo el modelo de sesión anónima.
- **A-005**: Los usuarios LatAm aceptan consent banner LGPD-light sin double opt-in.

---

## 7. Out of Scope

- Backoffice/CRM para gestionar leads (usar Firestore Studio / export manual como interim).
- Integración email marketing (Mailchimp, Brevo) — fuera del MVP, se hace en fase 2.
- A/B testing framework — la infraestructura se prepara (`variant` en eventos) pero no se lanzan experimentos en el v1.
- Nuevas páginas de programas educativos — solo reutilización.
- Migración del header/footer a light mode — esta feature afecta solo el home; el header/footer se adaptan en una feature subsecuente (`010-navigation-light-mode`).
- Service Worker / PWA offline — puede llegar en fase 2.
- Auto-traducción a nuevos idiomas — solo ES y EN.

---

## 8. Risks & Mitigations

| ID | Riesgo | Impacto | Probabilidad | Mitigación |
|---|---|---|---|---|
| R-01 | Dark mode del header/footer rompe al switchear a light mode en home | Alto | Alta | Scope dark-mode-header a feature separada `010-`, home usa its own theme scope via `body[data-theme]` |
| R-02 | Firebase Firestore quota exceeded en lanzamiento | Medio | Baja | Monitor cuota + fallback a formspree si >80% uso |
| R-03 | LCP degrada por fonts de Google en mobile 3G | Medio | Media | font-display:swap + inline critical CSS + self-host fonts en fase 2 |
| R-04 | Baseline GA4 no disponible → SC no mensurable | Alto | Media | T-000 en plan captura baseline antes del lanzamiento |
| R-05 | Visual drift entre home y cartillas tras updates de cartillas | Medio | Alta | Single source of truth en `estilos/tokens.css` referenciado por ambos |
| R-06 | Usuarios rechazan consent → eventos no se disparan | Medio | Media | Eventos esenciales (page_view) son cookieless; el resto requieren consent |
| R-07 | Touch targets fallan en iOS Safari por hit-area reducida | Medio | Media | hitSlop CSS padding invisible + test manual en 3 devices |
| R-08 | Spec ambigua en fase plan | Alto | Baja | Este documento v2 + `/iikit-clarify` siguiente ronda si surgen dudas |

---

## 9. Clarifications

### Session 2026-04-14 (v2 Socratic refinement)

- Q: ¿Tres CTAs iguales o pirámide de intención? → A: Pirámide con diagnóstico dominante [US-1, US-2, US-3, FR-001, FR-002]
- Q: ¿Identidad presente (dark) o futura (Neo-Swiss Light)? → A: Neo-Swiss Light default + Dark mirror toggle [US-4, FR-041, FR-042, FR-045]
- Q: ¿Stack para Hostinger? → A: HTML/CSS/Vanilla JS + Web Components + Firebase client SDK, cero runtime server [NFR-001, NFR-002, C-001, C-002]
- Q: ¿Qué significa "responsive nativo"? → A: 6 viewport classes (xs/sm/md/lg/xl/2xl) con diseños específicos y fluid scale [US-5, FR-050..FR-057]
- Q: ¿Datos mínimos del diagnóstico? → A: Email + nombre + consent [FR-012]
- Q: ¿Persistencia del diagnóstico? → A: localStorage in-progress (24h), Firestore completed, cookie `mdg_returning` (180d) [FR-013, FR-014, FR-016, US-1 scenarios 5-6]
- Q: ¿Analytics vendor? → A: Firebase Analytics (ya integrado) [FR-070, FR-071, FR-072]
- Q: ¿Programas educativos nuevos o existentes? → A: Reutilizar existentes en `empresas/` y `personas/` [FR-030..FR-032, C-003]
- Q: ¿Baseline de SC? → A: Marcado como [BASELINE-TBD], capturado en T-000 del plan [SC-001, SC-002, SC-009, A-001]
- Q: ¿Recurso premium double opt-in? → A: No, solo email + nombre [FR-022]
- Q: ¿Modo oscuro persistente? → A: Sí, localStorage + prefers-color-scheme fallback [FR-045]
- Q: ¿Consent LGPD/GDPR? → A: Banner light, checkbox obligatorio en diagnóstico, cookie `mdg_consent` [FR-012, FR-072]
