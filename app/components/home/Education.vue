<script setup lang="ts">
const { data: items } = await useAsyncData(() => queryCollection('education').all());
</script>

<template>
  <UPageSection
    orientation="horizontal"
    icon="i-lucide-graduation-cap"
    :ui="{
      title: 'font-heading',
    }"
  >
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <UTimeline
        v-if="items"
        :ui="{
          title: 'font-heading text-2xl font-bold mb-2',
          date: 'text-md',
        }"
        :items
      />
    </template>
  </UPageSection>
</template>
