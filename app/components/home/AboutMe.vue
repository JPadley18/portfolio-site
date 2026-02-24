<script setup lang="ts">
</script>

<template>
  <UPageSection icon="i-lucide-user" orientation="horizontal">
    <template #title>
      <slot name="title" />
    </template>
    <template #description>
      <slot name="description" />
    </template>
  </UPageSection>
</template>