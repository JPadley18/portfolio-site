<script setup lang="ts">
const links = [
  {
    label: 'About Me',
    to: '/',
  },
  {
    label: 'Projects',
    to: '/projects',
  },
  {
    label: 'Achievements',
    to: '/achievements',
  },
];
</script>

<template>
  <div>
    <UNavigationMenu
    :items="links"
    />
  </div>
</template>