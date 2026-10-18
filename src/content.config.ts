import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(), subtitle: z.string().optional(), description: z.string(),
    category: z.string(), date: z.coerce.date(), updated: z.coerce.date().optional(),
    image: z.string().optional(), imageAlt: z.string().default(''),
    author: z.string().optional(), featured: z.boolean().default(false),
    related: z.array(z.string()).optional(), // optional hand-picked related post slugs
  }),
});
export const collections = { posts };
