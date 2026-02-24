<script setup lang="ts">
const { data: projects } = await useAsyncData(() => queryCollection('projects').all());
</script>

<template>
  <UPage v-if="projects">
    <UPageHero title="My Projects" />
    <p v-for="project in projects" :key="project.id">{{ project.meta.title }}</p>
  </UPage>
</template>
