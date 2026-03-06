<script setup lang="ts">
const { scrollY, lastScrollY } = useMouseScroll();

const isVisible = computed(() => {
  // Always show when at the very top of the page
  return scrollY.value < 50 || scrollY.value < lastScrollY.value;
});

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
  <header
    class="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-fit transition-transform duration-300 ease-in-out"
    :class="{ '-translate-y-[150%]': !isVisible }"
  >
    <nav
      class="px-4 py-2 bg-white/60 dark:bg-background/60 backdrop-blur-md rounded-full shadow-lg ring-1 ring-gray-200/50 dark:ring-gray-800/50"
    >
      <UNavigationMenu
        :items="links"
        :ui="{ link: 'rounded-full before:rounded-full transition-colors duration-200' }"
      />
    </nav>
  </header>
</template>
