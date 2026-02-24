import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    achievements: defineCollection({
      type: 'data',
      source: 'achievements/*.md',
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
      }),
    }),
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
    }),
  },
});
