<script setup lang="ts">
const path = useRoute().path;
const { data: page } = await useAsyncData(() => queryCollection('experience').path(path).first());
</script>

<template>
  <div>
    <UButton to="/" icon="i-lucide-arrow-left" variant="outline" class="mt-5">Return Home</UButton>
    <div v-if="page">
      <UPageHero :title="page.title" :headline="page.date" />
      <UPageSection title="About the role">
        <ContentRenderer :value="page.body" />
      </UPageSection>
      <UPageSection title="Key Skills" />
    </div>
  </div>
</template>
