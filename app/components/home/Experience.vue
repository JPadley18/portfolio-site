<script setup lang="ts">
const { data: items } = await useAsyncData(() => queryCollection('experience').all());
</script>

<template>
  <UPageSection orientation="horizontal" icon="i-lucide-briefcase">
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <UTimeline v-if="items" :items />
    </template>
  </UPageSection>
</template>
