<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

defineProps<{
  links: ProjectsCollectionItem['links'];
}>();
</script>

<template>
  <div
    :class="links.length > 1 ? 'grid grid-cols-2 gap-2 mt-20 w-fit mx-auto' : 'mt-20 w-fit mx-auto'"
  >
    <UButton
      v-for="link in links"
      :key="link.name"
      :leading-icon="link.icon"
      trailing-icon="i-lucide-external-link"
      variant="outline"
      :to="link.to"
      target="_blank"
      class="mx-auto w-fit"
      >{{ link.name }}</UButton
    >
  </div>
</template>
