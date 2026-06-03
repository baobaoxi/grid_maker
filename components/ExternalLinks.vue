<template>
  <div class="external-links">
    <div class="external-links-title">Featured Resources</div>
    <div class="external-links-list">
      <a 
        v-for="link in externalLinks" 
        :key="link.url"
        :href="link.url"
        :title="link.title"
        target="_blank"
        rel="noopener noreferrer"
        class="external-link"
      >
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const externalLinks = ref([
  { 
    label: 'BestAITool AI Tools Directory', 
    url: 'https://bestaitool.app/', 
    title: 'BestAITool AI Tools Directory' 
  }
])
</script>

<style scoped>
.external-links {
  padding: 20px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  margin-bottom: 20px;
}

.external-links-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
}

.external-links-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.external-link {
  color: #667eea;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s ease;
}

.external-link:hover {
  color: #764ba2;
  text-decoration: underline;
}
</style>
