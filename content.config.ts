import { defineContentConfig, defineCollection } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: '**/*.md',
    }),
  },
});
