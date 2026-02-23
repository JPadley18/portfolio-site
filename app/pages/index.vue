<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('home').path('/').first());

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description,
});
</script>

<template>
  <UPage v-if="home">
    <HomeHero :page="home" />
  </UPage>
</template>
