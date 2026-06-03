<template>
  <div class="external-links">
    <div class="external-links-title">Featured Resources</div>
    <div class="external-links-list">
      <a 
        v-for="link in textLinks" 
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
    <div class="external-image-links">
      <a 
        v-for="link in imageLinks" 
        :key="link.url"
        :href="link.url"
        :target="link.target"
        :rel="link.rel"
        class="external-image-link"
      >
        <img 
          :src="link.imageSrc" 
          :alt="link.alt" 
          :width="link.width" 
          :height="link.height"
          class="external-image"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const textLinks = ref([
  { 
    label: 'BestAITool AI Tools Directory', 
    url: 'https://bestaitool.app/', 
    title: 'BestAITool AI Tools Directory' 
  }
])

const imageLinks = ref([
  {
    url: 'https://dang.ai',
    target: '_blank',
    rel: 'dofollow noopener',
    imageSrc: 'https://assets.dang.ai/badges/dang-verified-dark.png',
    alt: 'Verified on DANG!',
    width: 260,
    height: 94
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
  margin-bottom: 16px;
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

.external-image-links {
  margin-top: 16px;
}

.external-image-link {
  display: inline-block;
  text-decoration: none;
  transition: transform 0.2s ease;
}

.external-image-link:hover {
  transform: scale(1.02);
}

.external-image {
  display: block;
  width: 260px;
  max-width: 100%;
  height: auto;
  border: 0;
  outline: none;
  text-decoration: none;
}
</style>
