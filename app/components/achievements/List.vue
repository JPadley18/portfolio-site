<script setup lang="ts">
import type { AchievementsCollectionItem } from '@nuxt/content';

defineProps<{
  achievements: AchievementsCollectionItem[];
}>();
</script>

<template>
  <UBlogPosts orientation="vertical">
    <AchievementsPost v-for="achievement in achievements" :key="achievement.id" :achievement />
  </UBlogPosts>
</template>
