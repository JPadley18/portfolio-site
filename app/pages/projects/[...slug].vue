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
      <UPageHeader
        :title="page.title"
        class="mb-5"
        :ui="{
          title: 'font-heading',
        }"
      />
      <UCarousel
        v-slot="{ item }"
        :items="page.carousel"
        class="mx-auto w-11/12 md:w-1/2"
        loop
        arrows
        dots
        :autoplay="{ delay: 6000 }"
      >
        <NuxtImg
          :src="item"
          class="rounded-lg mx-auto w-auto h-80 lg:h-100 object-cover"
          loading="lazy"
        />
      </UCarousel>
      <UPageSection
        title="About the Project"
        :ui="{
          title: 'font-heading',
        }"
      >
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
