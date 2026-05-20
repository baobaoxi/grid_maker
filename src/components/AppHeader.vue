<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
  </header>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Photo Grid Overlay'
  },
  subtitle: {
    type: String,
    default: 'Upload image and add customizable grid lines'
  }
})
</script>

<style scoped>
.header {
  text-align: center;
  color: white;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 900px) {
  .header h1 {
    font-size: 1.8rem;
  }
}
</style>