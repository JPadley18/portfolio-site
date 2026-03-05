<script setup lang="ts">
useSeoMeta({
  title: 'Projects',
});

const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').order('date', 'DESC').all(),
);

const medalColors: Record<string, string> = {
  gold: 'text-amber-500',
  silver: 'text-zinc-400',
  bronze: 'text-yellow-900',
};
</script>

<template>
  <UPage v-if="projects">
    <UPageHero
      title="My Projects"
      description="Here you can explore a collection of projects that I have worked on in my free time."
    />
    <UBlogPosts orientation="horizontal" class="lg:grid-cols-2">
      <UBlogPost
        v-for="project in projects"
        :key="project.id"
        v-bind="project"
        orientation="horizontal"
        :to="project.path"
      >
        <template v-if="project.award" #badge>
          <UIcon name="i-lucide-medal" :class="medalColors[project.award]" />
        </template>
        <template #description>
          <p class="mb-3">{{ project.description }}</p>
          <UBadge
            v-for="skill in project.skills"
            :key="skill.name"
            :icon="skill.icon"
            class="mr-2 mb-1"
            variant="outline"
            >{{ skill.name }}</UBadge
          >
        </template>
      </UBlogPost>
    </UBlogPosts>
  </UPage>
</template>
