<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('home').path('/').first());

useSeoMeta({
  title: home.value?.title,
  ogTitle: home.value?.title,
  description: home.value?.description,
  ogDescription: home.value?.description,
  ogImage: '/images/me-wide.jpg',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <UPage v-if="home">
    <ContentRenderer :value="home" />
  </UPage>
</template>
