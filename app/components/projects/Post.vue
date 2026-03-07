<script setup lang="ts">
import type { ProjectsCollectionItem } from '@nuxt/content';

defineProps<{
  project: ProjectsCollectionItem;
}>();

const medalColors: Record<string, string> = {
  gold: 'text-amber-500',
  silver: 'text-zinc-400',
  bronze: 'text-yellow-900',
};
</script>

<template>
  <UBlogPost
    v-bind="project"
    orientation="horizontal"
    :to="project.path"
    :ui="{
      title: 'font-heading font-bold',
    }"
  >
    <template v-if="project.award" #badge>
      <UIcon name="i-lucide-medal" :class="medalColors[project.award]" />
    </template>
    <template #description>
      <p class="mb-3">{{ project.description }}</p>
      <UBadge
        v-for="skill in project.skills"
        :key="skill.name"
        :icon="skill.icon"
        class="mr-2 mb-1"
        variant="outline"
        >{{ skill.name }}</UBadge
      >
    </template>
  </UBlogPost>
</template>
