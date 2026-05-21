<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </header>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
}>(), {
  title: 'Photo Grid Overlay',
  subtitle: 'Upload image and add customizable grid lines'
})
</script>
