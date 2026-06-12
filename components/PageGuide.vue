<template>
  <div class="page-guide">
    <div class="guide-content">
      <div class="guide-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </div>
      <div class="guide-text">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
      <a :href="linkUrl" class="guide-button" :target="linkTarget">
        {{ buttonText }}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"/>
          <path d="m12 5 7 7-7 7"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
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
  }
})
</script>

<style scoped>
.page-guide {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 30px;
  color: white;
}

.guide-content {
  display: flex;
  align-items: center;
  gap: 20px;
}

.guide-icon {
  flex-shrink: 0;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.guide-text {
  flex: 1;
}

.guide-text h3 {
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.guide-text p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
  line-height: 1.5;
}

.guide-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  color: #667eea;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
  white-space: nowrap;
}

.guide-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .guide-content {
    flex-direction: column;
    text-align: center;
  }
  
  .guide-button {
    width: 100%;
    justify-content: center;
  }
}
</style>