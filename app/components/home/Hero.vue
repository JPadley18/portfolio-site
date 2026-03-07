<script setup lang="ts">
const props = defineProps<{
  title: string;
  image: string;
}>();
</script>

<template>
  <UPageHero
    orientation="horizontal"
    :ui="{
      title: 'font-extrabold font-heading',
    }"
  >
    <template #title>
      <p
        v-for="(chunk, i) in title.split(' ')"
        :key="i"
        :class="{
          'text-primary': i % 2 !== 0,
        }"
      >
        {{ chunk }}
      </p>
    </template>

    <NuxtImg :src="props.image" class="hidden lg:block w-50 h-50 aspect-square rounded-full" />

    <template #description>
      <div class="flex flex-col gap-6">
        <NuxtImg
          :src="props.image"
          class="block lg:hidden w-42 h-42 aspect-square rounded-full self-start"
        />

        <slot name="description" />
      </div>
    </template>
  </UPageHero>
</template>
