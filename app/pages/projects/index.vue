<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
  ogTitle: 'Projects',
  description:
    'Here you can explore a collection of projects that I have worked on in my free time.',
  ogDescription:
    'Here you can explore a collection of projects that I have worked on in my free time.',
  ogImage: '/images/me-wide.jpg',
  twitterCard: 'summary_large_image',
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
      :ui="{
        title: 'font-heading',
      }"
    />
    <ProjectsList :projects />
  </UPage>
</template>
