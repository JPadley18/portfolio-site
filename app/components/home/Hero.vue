<script setup lang="ts">
const props = defineProps<{
  image: string;
}>();
</script>

<template>
  <UPageHero orientation="horizontal">
    <template #title>
      <slot mdc-unwrap="p" />
    </template>

    <img :src="props.image" class="w-50 h-50 aspect-square rounded-full" />

    <template #description>
      <slot name="description" />
    </template>
  </UPageHero>
</template>
