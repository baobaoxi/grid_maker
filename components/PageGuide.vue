<template>
  <div class="page-guide">
    <a :href="linkUrl" :target="linkTarget" class="guide-link">
      <div class="guide-content">
        <div class="guide-image-wrapper">
          <img v-if="imageUrl" :src="imageUrl" :alt="description" class="guide-image" />
          <div v-else class="guide-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
        <div class="guide-text">
          <p>{{ description }}</p>
        </div>
      </div>
     </a>
  </div>
</template>

<script setup lang="ts">
defineProps({
  description: {
    type: String,
    required: true
  },
  linkUrl: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Try it now'
  },
  linkTarget: {
    type: String,
    default: '_self'
  },
  imageUrl: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.page-guide {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.guide-content {
  background: white;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 360px;
  min-height: 250px;
}

.guide-image-wrapper {
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  background: linear-gradient(135deg, #e0f2fe 0%, #e0e7ff 100%);
  padding: 16px;
}

.guide-image {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
}

.guide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.guide-icon {
  width: 100%;
  height: 200px;
  background: #f3f4f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #9ca3af;
}

.guide-content h2 {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: #1f2937;
  text-align: center;
}

.guide-content p {
  margin: 0;
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.5;
  text-align: center;
}

.guide-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
  white-space: nowrap;
}

.guide-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

@media (max-width: 768px) {
  .guide-content {
    width: 100%;
    min-height: auto;
    padding: 20px;
  }
  
  .guide-image {
    height: 160px;
  }
  
  .guide-icon {
    height: 160px;
  }
}
.guide-link {
  text-decoration: none;
  color: inherit;
}

.guide-content {
  cursor: pointer;
  /* ... 其他样式 ... */
}

.guide-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}
</style>