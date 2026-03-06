<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

defineProps<{
  projects: ProjectsCollectionItem[];
}>();
</script>

<template>
  <UBlogPosts orientation="horizontal" class="lg:grid-cols-2">
    <ProjectsPost v-for="project in projects" :key="project.id" :project />
  </UBlogPosts>
</template>
