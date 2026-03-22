# Site MetodologIA Premise

## What

Client-rendered marketing and content management site for MetodologIA (metodologia.info) — a 63+ page site built with Tailwind CSS, vanilla JS web components, and Google Fonts. Evolving from static HTML into a tailor-made CMS backed by a managed BaaS provider, where prices, services, bilingual content, and program descriptions are editable from an admin interface without code deployments.

## Who

- **Professionals (Personas)**: Individuals seeking AI skills, productivity tools, and methodology training — from beginners to advanced practitioners.
- **Companies (Empresas)**: Organizations looking for AI consulting, team training, and digital transformation programs.
- **Community**: MetodologIA ecosystem participants accessing free and premium resources.
- **Administrators**: Site owner and editors who manage content (prices, descriptions, translations, program details) through an admin interface without touching code.

## Why

MetodologIA needs a digital presence that communicates its value proposition, catalogs its 6 training programs (Diagnóstico, Estrategia, Amplificación, Ofimática, Ventas, Champions/Empoderamiento), provides a resource library (14 free + 13 premium categories), and enables self-service quoting via interactive cotizadores. The current static approach requires developer intervention for every content change — prices, descriptions, new resources, translation fixes. A managed backend with an admin interface enables the site owner to update content instantly, maintain bilingual parity, and evolve the site without code deployments.

## Domain

EdTech and AI Consulting. Key terms:
- **Cotizador**: Interactive pricing calculator for programs
- **Recursos**: Downloadable resources organized by category (prompts, templates, guides)
- **Premium**: Paid tier of resources with higher-value content
- **Ruta**: Learning path / roadmap for users
- **Gemini Gems**: AI assistants built on Google Gemini for specific use cases
- **Content Authority**: The single source of truth for each piece of editable content (static HTML during migration, cloud backend after migration)

## Scope

**In scope**:
- Public marketing pages (home, about, programs, resources, contact, legal)
- Program catalogs for personas and empresas with info modals
- Interactive cotizadores (real-time pricing with progress bars)
- Free and premium resource library (14+ categories each)
- SEO optimization (OG tags, Twitter cards, sitemap, canonical URLs)
- Accessibility (skip-to-content, ARIA modals, keyboard navigation)
- Responsive design with dark/light theme support
- Managed BaaS backend for editable content (prices, descriptions, translations)
- Admin interface for content editing (bilingual text, program details, service descriptions)
- Role-based authentication for admin access
- Offline resilience with client-side caching
- Incremental migration from static HTML content to cloud-backed content

**Out of scope**:
- Custom server infrastructure (BaaS only, no self-managed servers)
- Payment processing (cotizadores are informational, not transactional)
- User accounts for visitors (auth is admin-only)
- Full CMS framework adoption (this is a tailor-made solution, not WordPress/Strapi)
