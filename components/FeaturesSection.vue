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

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  subtitle?: string
  stepsTitle?: string
  features?: Array<{ iconPath: string; title: string; description: string }>
  steps?: Array<{ title: string; description: string }>
}>(), {
  title: 'Why Choose Us',
  subtitle: 'Simple, Fast, Professional Photo Grid Tool',
  stepsTitle: 'How to Use Our Free Online Grid Maker to Proportion Your Images Perfect',
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
