<script setup lang="ts">
const path = useRoute().path;
const { data: page } = await useAsyncData(() => queryCollection('projects').path(path).first());
</script>

<template>
  <div>
    <UButton to="/projects" icon="i-lucide-arrow-left" variant="outline" class="mt-5"
      >Return to Projects</UButton
    >
    <div v-if="page">
      <UPageHero :title="page.title" />
      <UPageSection title="About the Project">
        <ContentRenderer :value="page.body" />
      </UPageSection>
      <UPageSection title="Key Skills" />
    </div>
  </div>
</template>
