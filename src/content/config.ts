import { defineCollection, z } from 'astro:content';

const postSchema = z.object({
  title: z.string().describe('Clean title without leading emojis'),
  description: z
    .string()
    .max(220)
    .describe('Closed excerpt: 1-2 complete sentences, max ~25-35 words. Never truncated mid-word.'),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  category: z.enum(['herramientas', 'modelos', 'infraestructura', 'negocio']),
  lang: z.enum(['es', 'en', 'ua', 'ru']),
  featured: z.boolean().default(false),
  metrics: z
    .object({
      cost: z.string().optional(),
      bottleneck: z.string().optional(),
      realUtility: z.string().optional(),
    })
    .optional(),
  conclusion: z.string().describe('Section "Mi postura / Conclusión" — required'),
});

const posts = defineCollection({
  type: 'content',
  schema: postSchema,
});

export const collections = { posts };