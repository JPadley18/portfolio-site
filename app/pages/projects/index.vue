<script setup lang="ts">
const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').order('date', 'DESC').all(),
);

const medalColors: Record<string, string> = {
  gold: 'text-amber-500',
  silver: 'text-zinc-400',
  bronze: 'text-yellow-900',
};
</script>

<template>
  <UPage v-if="projects">
    <UPageHero title="My Projects" />
    <UBlogPosts orientation="horizontal" class="lg:grid-cols-2">
      <UBlogPost
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
        orientation="horizontal"
        :to="project.path"
      >
        <template v-if="project.award" #badge>
          <UIcon name="i-lucide-medal" :class="medalColors[project.award]" />
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPage>
</template>
