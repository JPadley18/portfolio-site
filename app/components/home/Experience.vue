<script setup lang="ts">
const { data: items } = await useAsyncData(() => queryCollection('experience').all());
</script>

<template>
  <UPageSection
    class="w-full"
    orientation="horizontal"
    icon="i-lucide-briefcase"
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
          title: 'text-2xl font-bold mb-2 font-heading',
          date: 'text-md',
        }"
        :items
      >
        <template #title="{ item }">
          <ULink :to="item.path" class="text-neutral hover:underline">
            <span>
              {{ item.title }}
              <UIcon name="i-lucide-link" class="ml-2 pb-2 align-middle" />
            </span>
          </ULink>
        </template>
      </UTimeline>
    </template>
  </UPageSection>
</template>
