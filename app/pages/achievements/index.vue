<script setup lang="ts">
const { data: achievements } = await useAsyncData(() =>
  queryCollection('achievements').order('date', 'DESC').all(),
);
</script>
<template>
  <UPage v-if="achievements">
    <UPageHero
      title="My Achievements"
      description="Here you can find some highlights from what I've been up to over the past few years."
    />
    <UBlogPosts orientation="vertical">
      <UBlogPost
        v-for="achievement in achievements"
        :key="achievement.id"
        orientation="horizontal"
        v-bind="achievement"
      >
        <template #description>
          {{ achievement.at }}
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPage>
</template>
