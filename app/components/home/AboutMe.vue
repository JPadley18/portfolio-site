<script setup lang="ts">
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <UPageSection
    icon="i-lucide-user"
    orientation="horizontal"
    :ui="{
      title: 'font-heading font-bold',
    }"
  >
    <template #title>
      <slot name="title" />
    </template>

    <NuxtImg class="rounded-xl" :src="props.image" />

    <template #description>
      <slot name="description" />
    </template>
  </UPageSection>
</template>
