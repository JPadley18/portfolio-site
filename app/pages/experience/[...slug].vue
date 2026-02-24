<script setup lang="ts">
const path = useRoute().path;
const { data: page } = await useAsyncData(() => queryCollection('experience').path(path).first());
</script>

<template>
  <UPageHero v-if="page" :title="page.title" :headline="page.date" />
  <UPageSection>
    <slot mdc-unwrap="p" />
  </UPageSection>
</template>
