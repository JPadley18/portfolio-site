<script setup lang="ts">
const path = useRoute().path;
const { data: page } = await useAsyncData(() => queryCollection('projects').path(path).first());

useHead({
  titleTemplate: (title) => {
    return title ? `Projects - ${title} - Jacob Padley` : 'Projects - Jacob Padley';
  },
});

useSeoMeta({
  title: page.value?.title,
});
</script>

<template>
  <div>
    <UButton to="/projects" icon="i-lucide-arrow-left" variant="outline" class="mt-5"
      >Return to Projects</UButton
    >
    <div v-if="page">
      <UPageHero :title="page.title" />
      <UPageSection title="About the Project">
        <ProjectsTechStack :items="page.skills" />
        <ContentRenderer :value="page.body" />
      </UPageSection>
    </div>
    <UError
      v-else
      :error="{
        statusCode: 404,
        statusMessage: 'Project Not Found',
        message: 'This is not the project you are looking for.',
      }"
    />
  </div>
</template>
