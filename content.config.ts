import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    achievements: defineCollection({
      type: '',
      source: 'achievements/*.md',
    }),
    education: defineCollection({
      type: '',
      source: 'education/*.md',
    }),
    experience: defineCollection({
      type: '',
      source: 'experience/*.md',
    }),
    projects: defineCollection({
      type: '',
      source: 'projects/*.md',
    }),
  },
});
