<script setup lang="ts">
const { data: items } = await useAsyncData(() => queryCollection('experience').all());
</script>

<template>
  <UPageSection orientation="horizontal" icon="i-lucide-briefcase">
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
