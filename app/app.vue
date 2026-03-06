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
      <ClientOnly>
        <ContourBackground
          :cell-size="20"
          :speed="0.00005"
          :scale="50"
          :stroke-width="1.5"
          :opacity="0.07"
        />
      </ClientOnly>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
