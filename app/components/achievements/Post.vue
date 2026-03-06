<script setup lang="ts">
import type { AchievementsCollectionItem } from '@nuxt/content';

defineProps<{
  achievement: AchievementsCollectionItem;
}>();
</script>

<template>
  <UBlogPost
    orientation="horizontal"
    v-bind="achievement"
    target="_blank"
    :ui="{
      title: 'font-heading font-bold',
    }"
  >
    <template #title>
      <span class="mr-2">{{ achievement.title }}</span
      ><UIcon name="i-lucide-external-link" />
    </template>
    <template #description>
      <div>
        <p class="mb-3">{{ achievement.at }}</p>
        <p>{{ achievement.description }}</p>
      </div>
    </template>
  </UBlogPost>
</template>
