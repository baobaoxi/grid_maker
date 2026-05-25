<template>
  <section class="features-section">
    <div class="features-container">
      <div v-if="showHeader" class="features-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>

      <div v-if="showFeatures" class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path :d="feature.iconPath" />
            </svg>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>

      <div v-if="showSteps" class="how-it-works">
        <h3>{{ stepsTitle }}</h3>
        <div class="steps-grid">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="step-card"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <h4>{{ step.title }}</h4>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  stepsTitle?: string
  features?: Array<{ iconPath: string; title: string; description: string }>
  steps?: Array<{ title: string; description: string }>
  showHeader?: boolean
  showFeatures?: boolean
  showSteps?: boolean
}>(), {
  title: 'Why Choose Us',
  subtitle: 'Simple, Fast, Professional Photo Grid Tool',
  stepsTitle: 'How to Use Our Free Online Grid Maker to Proportion Your Images Perfect',
  showHeader: true,
  showFeatures: true,
  showSteps: true,
  features: () => [
    { iconPath: 'M12 20h9', title: 'Custom Grid', description: 'Customizable grid columns and rows for precise control' },
    { iconPath: 'M20 7h-9', title: 'Rich Styles', description: 'Multiple color options with adjustable line width and opacity' },
    { iconPath: 'M12 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z', title: 'Privacy Protection', description: 'All operations are done locally. No data is uploaded to servers.' },
    { iconPath: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', title: 'Quick Export', description: 'One-click download of high-quality images with grid overlay' }
  ],
  steps: () => [
    { title: 'Upload Your Reference Image', description: 'Click the "Upload" button or drag and drop your photo into the workspace. Our online grid maker supports high-resolution PNG, JPG, and WebP formats without compressing your original image quality.' },
    { title: 'Customize Grid Lines and Dimensions', description: 'Adjust the grid density according to your needs. Whether you need a standard 3x3 Instagram grid splitter or a 5x5 drawing grid overlay, you can easily adjust: Columns & Rows: Input precise numbers or pixel sizes. Line Color & Thickness: Choose high-contrast colors (like bright red or white) so the grid remains visible against dark background images.' },
    { title: 'Download or Print', description: 'Once you are satisfied with the grid overlay, click "Export". You can download the image with the grid printed on it, or save individual sliced images for social media carousels.' }
  ]
})
</script>

<style scoped>
.features-section {
  padding: 80px 20px;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  margin-bottom: 60px;
}

.features-header h2 {
  font-size: 2.5rem;
  color: #1a1a2e;
  margin-bottom: 20px;
  font-weight: 700;
}

.features-header p {
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 32px 24px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.feature-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-icon svg {
  width: 36px;
  height: 36px;
  color: white;
}

.feature-card h3 {
  font-size: 1.3rem;
  color: #1a1a2e;
  margin-bottom: 12px;
  font-weight: 600;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
}

.how-it-works {
  background: white;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.how-it-works h3 {
  text-align: center;
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 48px;
  font-weight: 700;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.step-card {
  text-align: center;
}

.step-number {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
}

.step-card h4 {
  font-size: 1.2rem;
  color: #1a1a2e;
  margin-bottom: 12px;
  font-weight: 600;
}

.step-card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
  text-align: left;
}

@media (max-width: 768px) {
  .features-section {
    padding: 60px 20px;
  }

  .features-header h2 {
    font-size: 1.8rem;
  }

  .features-header p {
    font-size: 1rem;
  }

  .features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .how-it-works {
    padding: 32px 24px;
  }

  .how-it-works h3 {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  .steps-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>