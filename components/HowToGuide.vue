<template>
  <div class="how-to-guide" :id="guide.id">
    <h2>{{ guide.title }}</h2>
    <div class="steps-container">
      <div v-for="(step, index) in guide.steps" :key="index" class="step-item">
        <div class="step-number">
          <span>{{ index + 1 }}</span>
        </div>
        <div class="step-content">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { GuideSection } from '~/config/pixelArtFeatures'

defineProps({
  guide: {
    type: Object as () => GuideSection,
    required: true
  }
})
</script>

<style scoped>
.how-to-guide {
  max-width: 1200px;
  margin: 40px auto;
  padding: 40px 20px;
  text-align: center;
}

.how-to-guide h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 30px 0;
}

.steps-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.step-item {
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  text-align: left;
}

.step-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.step-number span {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.step-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 12px 0;
}

.step-content p {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 768px) {
  .how-to-guide h2 {
    font-size: 1.5rem;
  }
  
  .steps-container {
    grid-template-columns: 1fr;
  }
}
</style>