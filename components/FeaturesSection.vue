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

      <div v-if="showWhyToUse" class="why-to-use">
        <h3>Why to Use</h3>
        <div class="why-grid">
          <div v-for="(item, index) in whyItems" :key="index" class="why-card" :class="{ 'reverse': index % 2 === 1 }">
            <div class="why-image">
              <img :src="item.imageUrl" alt="Grid Maker for people to draw artist" />
            </div>
            <div class="why-content">
              <div class="why-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path :d="item.iconPath" />
                </svg>
              </div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="showFaq" class="faq-section">
        <h3>FAQ</h3>
        <div class="faq-list">
          <div v-for="(faq, index) in faqItems" :key="index" class="faq-item">
            <button class="faq-question" @click="toggleFaq(index)">
              <span>{{ faq.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{ rotated: expandedFaq === index }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div v-show="expandedFaq === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const expandedFaq = ref<number | null>(null)

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

withDefaults(defineProps<{
  title?: string
  subtitle?: string
  stepsTitle?: string
  features?: Array<{ iconPath: string; title: string; description: string }>
  steps?: Array<{ title: string; description: string }>
  whyItems?: Array<{ iconPath: string; title: string; description: string; imageUrl: string }>
  faqItems?: Array<{ question: string; answer: string }>
  showHeader?: boolean
  showFeatures?: boolean
  showSteps?: boolean
  showWhyToUse?: boolean
  showFaq?: boolean
}>(), {
  title: 'Why Choose Us',
  subtitle: 'Simple, Fast, Professional Photo Grid Tool',
  stepsTitle: 'How to Use',
  showHeader: true,
  showFeatures: true,
  showSteps: true,
  showWhyToUse: true,
  showFaq: true,
  features: () => [
    { iconPath: 'M12 20h9', title: 'Custom Grid', description: 'Customizable grid columns and rows for precise control' },
    { iconPath: 'M20 7h-9', title: 'Rich Styles', description: 'Multiple color options with adjustable line width and opacity' },
    { iconPath: 'M12 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z', title: 'Privacy Protection', description: 'All operations are done locally. No data is uploaded to servers.' },
    { iconPath: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', title: 'Quick Export', description: 'One-click download of high-quality images with grid overlay' }
  ],
  steps: () => [
    { title: 'Upload your reference image', description: 'by dragging it or clicking to browse' },
    { title: 'Adjust the grid size', description: '6 columns works well for most drawings' },
    { title: 'Enable grid labels', description: 'to easily track your position while drawing' },
    { title: 'Use the gridded reference', description: 'to draw each section accurately onto your paper' }
  ],
  whyItems: () => [
    { iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Say Goodbye to "Ugly Sketches."', description: 'Drawing portraits or complex shapes is hard because proportions collapse easily. The grid method breaks big images into tiny, manageable squares. Your eyes won\'t get tricked, and your drawing will look 1:1 perfectly accurate on your first try!', imageUrl: 'https://6a1650b35d38b1b9b092a71f.imgix.net/171f5c20-6274-4b24-97f7-d5ba9fbb2c3a.jpeg' },
    { iconPath: 'M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z', title: 'No Art Skills? Just Copy and Paste.', description: 'Looking at a whole blank canvas can be terrifying. With a grid, you don\'t need to worry about the big picture. Just look at one single square—like top-left box #3—and copy the simple lines inside it. It turns drawing into a fun connect-the-dots game!', imageUrl: 'https://6a1650b35d38b1b9b092a71f.imgix.net/2adfde43-9af7-4c74-a5bf-123144e08cb4.jpeg' },
    { iconPath: 'M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21', title: 'Blow It Up to Any Size.', description: 'Want to transfer a small photo from your phone onto a giant canvas or sketchpad? It\'s impossible by hand—but effortless with a grid. As long as the grid count matches, you can easily scale up your artwork 10x or 20x bigger without losing any detail.', imageUrl: 'https://6a1650b35d38b1b9b092a71f.imgix.net/aaa939b7-4f33-4244-8cfa-e21eec703a3c.jpeg' },
    { iconPath: 'M12 12s8-5.86 8-8H4s8 5.86 8 8Z', title: 'Learn to Draw Without Knowing It.', description: 'This isn\'t a cheap tracing tool—you are still the one holding the pencil! By copying square by square, your brain naturally learns how lines, angles, and spacing work. Before you know it, you\'re training your hands and building real drawing confidence.', imageUrl: 'https://6a1650b35d38b1b9b092a71f.imgix.net/3a7b002b-c88b-432e-9cea-7ff9df14baca.jpeg' }
  ],
  faqItems: () => [
    { question: 'What is the grid method for drawing?', answer: 'The grid method is a technique where you overlay a grid on your reference image and draw a corresponding grid on your paper. By focusing on one square at a time, you can accurately transfer the image while maintaining correct proportions. It\'s used by both beginners learning to draw and professional artists for precise work.' },
    { question: 'What image formats and sizes can I upload?', answer: 'You can upload common image formats such as JPG and PNG. For best results, use clear, reasonably high-resolution photos so the grid lines stay crisp and easy to see when you zoom in or print your reference. Extremely small or blurry images may be harder to work from, even with a grid.' },
    { question: 'How many grid squares should I use?', answer: 'For most drawings, 6 columns work well as a starting point. Use fewer squares (3-4) for simpler subjects or when you\'re more confident. Use more squares (8-10) for complex details or when you need extra precision. The goal is to have each square small enough to manage but not so small that it becomes tedious.' },
    { question: 'Why are grid labels helpful for drawing?', answer: 'Grid labels (like A1, B2, C3) help you quickly find the same position on both your reference image and your drawing paper. Without labels, it\'s easy to lose track of which square you\'re working on, especially with larger grids or complex images.' },
    { question: 'Can I customize the grid (color, thickness, diagonals, etc.)?', answer: 'Yes. The tool lets you control key grid settings such as the number of rows and columns, line thickness, and grid color. Depending on the version, you may also be able to enable diagonal guides or experiment with different visual styles that match how you like to draw.' },
    { question: 'Is the drawing grid maker free to use?', answer: 'Yes, the online drawing grid maker on this page is free to use for personal and educational projects. You can experiment with different grid settings, download your results, and come back as often as you like to prepare new references for your artwork.' },
    { question: 'Can I print the drawing grid output?', answer: 'Yes. The drawing grid output is designed to be printable, so you can tape it next to your canvas, sketchbook, or drawing surface. Make sure to choose the right paper size and print settings so the grid squares stay evenly spaced and easy to read.' }
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
  grid-template-columns: repeat(4, 1fr);
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
  text-align: center;
}

.why-to-use {
  margin-top: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 48px 40px;
}

.why-to-use h3 {
  text-align: center;
  font-size: 2rem;
  color: white;
  margin-bottom: 48px;
  font-weight: 700;
}

.why-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.why-card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 24px;
  align-items: center;
}

.why-card.reverse {
  flex-direction: row-reverse;
}

.why-image {
  flex-shrink: 0;
  width: 300px;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
}

.why-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.why-content {
  flex: 1;
}

.why-icon {
  width: 48px;
  height: 48px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.why-card h4 {
  font-size: 1.15rem;
  color: #1a1a2e;
  margin-bottom: 12px;
  font-weight: 600;
}

.why-card p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

.faq-section {
  margin-top: 60px;
  background: white;
  border-radius: 16px;
  padding: 48px 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.faq-section h3 {
  text-align: center;
  font-size: 2rem;
  color: #1a1a2e;
  margin-bottom: 40px;
  font-weight: 700;
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  border-bottom: 1px solid #eee;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
}

.faq-question span {
  font-size: 1.1rem;
  color: #1a1a2e;
  font-weight: 500;
}

.faq-question svg {
  color: #667eea;
  transition: transform 0.3s ease;
}

.faq-question svg.rotated {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 0 0 20px;
  overflow: hidden;
}

.faq-answer p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.7;
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

  .why-to-use {
    padding: 32px 24px;
  }

  .why-to-use h3 {
    font-size: 1.5rem;
    margin-bottom: 32px;
  }

  .why-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>