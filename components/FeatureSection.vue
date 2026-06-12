<template>
  <div class="feature-section" :id="feature.id">
    <div class="feature-content" :class="{ reverse: reverse }">
      <div class="feature-text">
        <h3>{{ feature.title }}</h3>
        <p class="feature-description">{{ feature.description }}</p>
        <ul class="feature-list">
          <li v-for="(item, index) in feature.items" :key="index">
            <span class="list-icon">{{ index + 1 }}</span>
            <span>{{ item.label }}</span>
          </li>
        </ul>
      </div>
      <div class="feature-image-wrapper">
        <div v-if="feature.imageUrl" class="feature-image">
          <img :src="feature.imageUrl" :alt="feature.imageAlt" />
        </div>
        <div v-else class="feature-image-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <span>Image Placeholder</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FeatureSection } from '~/config/pixelArtFeatures'

defineProps({
  feature: {
    type: Object as () => FeatureSection,
    required: true
  },
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.feature-section {
  padding: 24px 0;
  border-bottom: 1px solid #e5e7eb;
}

.feature-section:last-child {
  border-bottom: none;
}

.feature-content {
  display: flex;
  gap: 40px;
  align-items: center;
  padding: 0 30px;
}

.feature-content.reverse {
  flex-direction: row-reverse;
}

.feature-text {
  flex: 1;
}

.feature-text h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.feature-description {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0 0 16px 0;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-size: 0.95rem;
  color: #374151;
}

.list-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 0.85rem;
  font-weight: 600;
  flex-shrink: 0;
}

.feature-image-wrapper {
  flex-shrink: 0;
  width: 400px;
  height: 280px;
}

.feature-image {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-image-placeholder {
  width: 100%;
  height: 100%;
  background: #f3f4f6;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #9ca3af;
}

.feature-image-placeholder svg {
  width: 48px;
  height: 48px;
}

.feature-image-placeholder span {
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .feature-content,
  .feature-content.reverse {
    flex-direction: column;
    text-align: center;
  }
  
  .feature-text h3 {
    font-size: 1.5rem;
  }
  
  .feature-list li {
    justify-content: flex-start;
  }
  
  .feature-image-wrapper {
    width: 100%;
    max-width: 300px;
  }
}
</style>