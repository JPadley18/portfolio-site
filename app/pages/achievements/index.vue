<script setup lang="ts">
useSeoMeta({
  title: 'Achievements',
  ogTitle: 'Achievements',
  description:
    "Here you can find some highlights from what I've been up to over the past few years.",
  ogDescription:
    "Here you can find some highlights from what I've been up to over the past few years.",
  ogImage: '/images/me-wide.jpg',
  twitterCard: 'summary_large_image',
});

const { data: achievements } = await useAsyncData(() =>
  queryCollection('achievements').order('date', 'DESC').all(),
);
</script>
<template>
  <UPage v-if="achievements">
    <UPageHero
      title="My Achievements"
      description="Here you can find some highlights from what I've been up to over the past few years."
      :ui="{
        title: 'font-heading',
      }"
    />
    <AchievementsList :achievements />
  </UPage>
</template>
