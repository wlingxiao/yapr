<template>
  <a :href="href" target="_blank" rel="noreferrer">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{ href?: string }>()
</script>
