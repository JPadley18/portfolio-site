<script setup lang="ts">
const props = defineProps<{
  image: string,
}>();
</script>

<template>
  <UPageHero class="w-3/4 mx-auto" orientation="horizontal" reverse>
    <template #title>
      <slot mdc-unwrap="p" />
    </template>

    <img :src="props.image" class="w-50 h-50 aspect-square rounded-full" />

    <template #description>
      <slot name="description" />
    </template>
  </UPageHero>
</template>
