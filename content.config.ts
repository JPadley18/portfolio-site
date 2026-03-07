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
      schema: z.object({
        title: z.string(),
        at: z.string(),
        date: z.string(),
        image: z.string(),
        to: z.string(),
        description: z.string(),
      }),
    }),
    education: defineCollection({
      type: 'data',
      source: 'education/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        icon: z.string(),
      }),
    }),
    experience: defineCollection({
      type: 'page',
      source: 'experience/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        icon: z.string(),
        skills: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            color: z.string(),
          }),
        ),
      }),
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/*.md',
      schema: z.object({
        title: z.string(),
        date: z.string(),
        description: z.string(),
        image: z.string(),
        award: z.string().optional(),
        skills: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            color: z.string(),
          }),
        ),
        carousel: z.array(z.string()),
      }),
    }),
  },
});
