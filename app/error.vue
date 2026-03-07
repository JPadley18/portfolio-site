<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps<{
  error: NuxtError;
}>();

useSeoMeta({
  title: `Error ${props.error.status} - Jacob Padley`,
});
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <UApp>
      <ClientOnly>
        <ContourBackground
          :cell-size="30"
          :mobile-cell-size="30"
          :speed="0.005"
          :scale="50"
          :stroke-width="1.5"
          :opacity="0.09"
          :scroll-multiplier="0.0025"
        />
      </ClientOnly>

      <NuxtLayout>
        <UError
          :error="{
            statusCode: props.error.status,
            statusMessage: props.error.statusText,
          }"
          :ui="{
            statusMessage: 'font-heading',
          }"
        />
      </NuxtLayout>
    </UApp>
  </div>
</template>
