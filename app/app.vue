<script setup lang="ts">
useHead({
  titleTemplate: (title) => {
    return title ? `${title} - Jacob Padley` : 'Jacob Padley';
  },
});
</script>

<template>
  <div>
    <UApp>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
