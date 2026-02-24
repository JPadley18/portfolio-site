import { defineContentConfig, defineCollection } from '@nuxt/content';

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
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experience/*.md',
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
    }),
  },
});
