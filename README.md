# Maksipi Blog

Blog de análisis práctico de IA por **Max (Maksipi)**.

Arquitectura limpia · Multilingüe (ES / EN / UA / RU) · Astro + Tailwind · Zero deuda técnica.

## Stack

- **Astro 5** (SSG)
- **Tailwind CSS** + tokens editoriales oscuros
- **Content Collections** con schema Zod (imposible cruzar extractos)
- i18n nativo de Astro

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Añadir un post nuevo

1. Crea un archivo Markdown en `src/content/posts/{lang}/tu-slug.md`
2. Respeta el frontmatter del schema (title limpio, description cerrada, conclusion obligatoria)
3. Commit y push → Vercel despliega automáticamente

## Diseño

- Fondo: `#0B0F19`
- Tarjetas: `#131B2E`
- Texto: `#F0F6FC` / `#94A3B8`
- Acento: `#00FF9D`

## Autor

Max (Maksipi) — constructor práctico y evaluador de tecnología.
