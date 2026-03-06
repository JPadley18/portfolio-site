<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
});

const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').order('date', 'DESC').all(),
);
</script>

<template>
  <UPage v-if="projects">
    <UPageHero
      title="My Projects"
      description="Here you can explore a collection of projects that I have worked on in my free time."
    />
    <ProjectsList :projects />
  </UPage>
</template>
