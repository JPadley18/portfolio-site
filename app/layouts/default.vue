<script setup lang="ts"></script>

<template>
  <div>
    <UContainer class="mb-10">
      <ClientOnly fallback-tag="header">
        <AppHeader />
      </ClientOnly>
      <slot />
    </UContainer>
  </div>
</template>
