<script setup lang="ts">
const { data: items } = await useAsyncData(() => queryCollection('education').all());
</script>

<template>
  <UPageSection orientation="horizontal" icon="i-lucide-graduation-cap">
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <UTimeline
        v-if="items"
        :ui="{
          title: 'text-2xl font-bold mb-2',
          date: 'text-md',
        }"
        :items
      />
    </template>
  </UPageSection>
</template>
