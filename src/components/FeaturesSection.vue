<template>
  <section class="features-section">
    <div class="features-container">
      <div class="features-header">
        <h2>{{ title }}</h2>
        <p>{{ subtitle }}</p>
      </div>
      
      <div class="features-grid">
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

      <div class="how-it-works">
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

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Why Choose Us'
  },
  subtitle: {
    type: String,
    default: 'Simple, Fast, Professional Photo Grid Tool'
  },
  stepsTitle: {
    type: String,
    default: 'How It Works'
  },
  features: {
    type: Array,
    default: () => [
      {
        iconPath: 'M12 20h9',
        title: 'Custom Grid',
        description: 'Customizable grid columns and rows for precise control'
      },
      {
        iconPath: 'M20 7h-9',
        title: 'Rich Styles',
        description: 'Multiple color options with adjustable line width and opacity'
      },
      {
        iconPath: 'M12 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z',
        title: 'Privacy Protection',
        description: 'All operations are done locally. No data is uploaded to servers.'
      },
      {
        iconPath: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
        title: 'Quick Export',
        description: 'One-click download of high-quality images with grid overlay'
      }
    ]
  },
  steps: {
    type: Array,
    default: () => [
      {
        title: 'Upload Image',
        description: 'Click or drag to upload the image you want to add grid to'
      },
      {
        title: 'Adjust Settings',
        description: 'Set grid columns, rows, color, line width and opacity'
      },
      {
        title: 'Preview Effect',
        description: 'Real-time preview of grid effect with instant adjustments'
      },
      {
        title: 'Download Image',
        description: 'Click download button to save the image with grid overlay'
      }
    ]
  }
})
</script>

<style scoped>
.features-section {
  padding: 40px 20px;
  background: rgba(255, 255, 255, 0.05);
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  color: white;
  margin-bottom: 40px;
}

.features-header h2 {
  font-size: 2rem;
  margin-bottom: 12px;
}

.features-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.feature-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
}

.feature-card h3 {
  font-size: 1.25rem;
  margin-bottom: 12px;
  color: #333;
}

.feature-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.6;
}

.how-it-works {
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.how-it-works h3 {
  text-align: center;
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 32px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}

.step-card {
  text-align: center;
}

.step-number {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  font-size: 1.25rem;
  font-weight: bold;
}

.step-card h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
  color: #333;
}

.step-card p {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .features-header h2 {
    font-size: 1.6rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>