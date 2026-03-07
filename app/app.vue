<script setup lang="ts">
const route = useRoute();

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
          :mobile-cell-size="40"
          :speed="0.00005"
          :scale="50"
          :stroke-width="1.5"
          :opacity="0.07"
          :scroll-multiplier="0.00004"
        />
      </ClientOnly>

      <Transition name="page">
        <AppHeader v-if="!route.meta.hideNav" />
      </Transition>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UApp>
  </div>
</template>
