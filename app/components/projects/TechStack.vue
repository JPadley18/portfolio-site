<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

defineProps<{
  items: ProjectsCollectionItem['skills'];
}>();
</script>

<template>
  <div class="mx-auto">
    <span v-for="item in items" :key="item.name" :style="{ color: item.color }"
      ><UIcon :name="item.icon" class="size-12 mr-5"
    /></span>
  </div>
</template>
