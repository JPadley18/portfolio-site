<script setup lang="ts">
useSeoMeta({
  title: 'Achievements',
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
    />
    <AchievementsList :achievements />
  </UPage>
</template>
