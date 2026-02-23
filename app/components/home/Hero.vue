<script setup lang="ts">
import type { HomeCollectionItem } from '@nuxt/content';

defineProps<{
  page: HomeCollectionItem;
}>();
</script>

<template>
  <UPageHero :title="page.title" />
</template>
