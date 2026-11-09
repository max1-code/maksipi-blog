# Maksipi Blog

Blog de análisis práctico de IA por **Max (Maksipi)**.

Arquitectura limpia · Multilingüe (ES / EN / UA / RU) · Astro + Tailwind · Zero deuda técnica.

**Live:** https://maksipi-blog-v2.vercel.app

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

## Cómo publicar un post nuevo

1. Crea **4 archivos** Markdown (uno por idioma):

```
src/content/posts/es/mi-slug.md
src/content/posts/en/mi-slug.md
src/content/posts/ua/mi-slug.md
src/content/posts/ru/mi-slug.md
```

2. Frontmatter obligatorio (schema Zod):

```yaml
---
title: "Título limpio sin emoji al inicio"
description: "Extracto cerrado de 1-2 frases completas. Máximo ~25-35 palabras."
pubDate: 2026-11-09
category: "negocio"          # herramientas | modelos | infraestructura | negocio
lang: "es"
featured: false
metrics:
  cost: "opcional"
  bottleneck: "opcional"
  realUtility: "opcional"
conclusion: "Mi postura. Opinión fuerte con números y fricciones reales."
---
```

3. Push a `main` → Vercel despliega automáticamente.

4. URL final: `https://maksipi-blog-v2.vercel.app/es/post/mi-slug`

## Categorías permitidas

- `herramientas`
- `modelos`
- `infraestructura`
- `negocio`

## Diseño

| Token        | Valor     |
|--------------|-----------|
| Fondo        | `#0B0F19` |
| Tarjetas     | `#131B2E` |
| Texto        | `#F0F6FC` |
| Secundario   | `#94A3B8` |
| Acento       | `#00FF9D` |

## Autor

Max (Maksipi) — constructor práctico y evaluador de tecnología.

Sin disclaimers de "escrito por IA". La voz es de Max.
