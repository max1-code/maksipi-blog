import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('posts');

  // Prefer Spanish posts for the main feed, fall back to all
  const sorted = posts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: 'Maksipi — Análisis práctico de IA',
    description: 'Costes reales, cuellos de botella y utilidad concreta. Sin humo corporativo.',
    site: context.site ?? 'https://maksipi-blog-v2.vercel.app',
    items: sorted.map((post) => {
      const rawSlug = post.slug;
      const cleanSlug = rawSlug.includes('/')
        ? rawSlug.split('/').slice(1).join('/')
        : rawSlug;

      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/${post.data.lang}/post/${cleanSlug}/`,
        categories: [post.data.category],
      };
    }),
    customData: `<language>es</language>`,
  });
}
