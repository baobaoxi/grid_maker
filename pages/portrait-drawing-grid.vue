<template>
  <div class="portrait-grid-page">
    <AppNavbar></AppNavbar>

    <div class="page-header">
      <h1>Accurate Portrait Drawing Made Easy</h1>
      <h2>Turn any portrait photo into a perfect drawing reference with customizable grids for realistic face sketching.</h2>
    </div>
    
    <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>
    
    <div class="page-content">
      <div class="main-section">
        <div class="sidebar">
          <div class="upload-section">
            <h3>Upload a Portrait Photo</h3>
            <p class="upload-desc">Upload any face or portrait image to start drawing with a precise grid.</p>
            <input type="file" id="image-upload" class="upload-input" accept="image/*" @change="handleImageUpload" />
            <label for="image-upload" class="upload-label">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>Choose Image</span>
            </label>
            <p class="upload-hint">JPG, PNG supported</p>
          </div>

          <div class="grid-settings">
            <h3>Grid Settings</h3>
            
            <div class="setting-group">
              <label>Grid Size:</label>
              <select v-model="gridSize" class="grid-size-select">
                <option :value="2">2×2</option>
                <option :value="4">4×4</option>
                <option :value="6">6×6</option>
                <option :value="8">8×8</option>
                <option :value="10">10×10</option>
              </select>
            </div>

            <div class="setting-group">
              <label>Grid Color:</label>
              <input type="color" v-model="gridColor" class="color-picker" />
            </div>

            <div class="setting-group">
              <label>Grid Thickness: {{ gridThickness }}px</label>
              <input type="range" v-model.number="gridThickness" min="1" max="5" />
            </div>

            <div class="setting-group">
              <label>
                <input type="checkbox" v-model="showLabels" />
                Show Grid Labels
              </label>
            </div>
          </div>

          <div class="action-buttons">
            <button class="export-btn" @click="downloadPNG">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PNG
            </button>
            <button class="export-btn secondary" @click="downloadPDF">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Download PDF
            </button>
            <button class="export-btn tertiary" @click="printImage">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <polyline points="16 10 14 12 16 14"></polyline>
              </svg>
              Print
            </button>
          </div>
        </div>

        <div class="canvas-section">
          <div class="canvas-container" ref="containerRef">
            <canvas ref="canvasRef" class="portrait-canvas"></canvas>
            <div v-if="!currentImage" class="placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <p>Upload a portrait photo to get started</p>
            </div>
          </div>
          
          <div v-if="hasUploadedImage" class="compare-section">
            <div>Compare</div>
            <div class="compare-images">
              <div class="compare-item">
                <img :src="currentImage" class="compare-img" alt="Original" />
                <span class="compare-label">Original</span>
              </div>
              <div class="compare-item">
                <canvas ref="compareCanvasRef" class="compare-img"></canvas>
                <span class="compare-label">With Grid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="how-to-section">
        <div class="section-header">
          <h2>How to Use Portrait Drawing Grid</h2>
        </div>
        <div class="how-to-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Upload portrait photo</h3>
              <p>Select any face or portrait image from your device.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Choose grid size</h3>
              <p>Select from 2×2 to 10×10 grid options.</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Download or print</h3>
              <p>Export your grid overlay and start drawing.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="why-to-use">
        <h2>Why Use Portrait Drawing Grid</h2>
        <div class="why-grid">
          <div class="why-card">
            <div class="why-image">
              <img src="https://6a1925960bc623d413aeb142.imgix.net/pp.PNG" alt="Learn Portrait Drawing Faster" />
            </div>
            <div class="why-content">
              <h3>Learn Portrait Drawing Faster</h3>
              <p>Struggling to draw realistic faces? Use a portrait drawing grid to break complex facial features into simple sections and improve your proportions faster.</p>
            </div>
          </div>
          <div class="why-card reverse">
            <div class="why-image">
              <img src="https://6a1925960bc623d413aeb142.imgix.net/pp2.png" alt="Create More Accurate Realistic Portraits" />
            </div>
            <div class="why-content">
              <h3>Create More Accurate Realistic Portraits</h3>
              <p>Advanced artists can use finer portrait grids to capture facial proportions, shadows, and details more precisely.</p>
            </div>
          </div>
          <div class="why-card">
            <div class="why-image">
              <img src="https://6a1925960bc623d413aeb142.imgix.net/pp3.png" alt="Perfect for Art Teachers & Students" />
            </div>
            <div class="why-content">
              <h3>Perfect for Art Teachers & Students</h3>
              <p>Create printable portrait grid worksheets for classroom drawing exercises and help students understand facial proportions more easily.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq-section">
        <div class="section-header">
          <h2>FAQ</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item" v-for="(item, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{ expanded: expandedFaq === index }">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
            <div class="faq-answer" v-show="expandedFaq === index">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>

      <div class="try-more">
        <h2>Try Our Other Tools</h2>
        <div class="try-more-box">
          <PageGuide 
            title="Advanced Grid Maker"
            subtitle="Advanced"
            description="Create professional artwork with zero drawing skills. Customizable grid overlays for any image." 
            imageUrl="https://6a1925960bc623d413aeb142.imgix.net/jump.png"
            linkUrl="/advanced"
            buttonText="Go to Advanced"
          />
          <PageGuide 
            title="Pixel Art Generator"
            subtitle="Pixel Art"
            description="Turn any image into stunning pixel art in seconds. Customizable pixel size and retro styles." 
            imageUrl="https://6a1925960bc623d413aeb142.imgix.net/p.PNG"
            linkUrl="/pixel-art"
            buttonText="Go to Pixel Art"
          />
        </div>
      </div>
    </div>

    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import PageGuide from '~/components/PageGuide.vue'

useHead({
  title: 'Portrait Drawing Grid - Accurate Face Sketching',
  meta: [
    { name: 'description', content: 'Create portrait drawing grids from any photo. Perfect for learning realistic face drawing with customizable grid overlays.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://grid-maker.pro/portrait-drawing-grid' }
  ]
})

const currentImage = ref<string>('https://6a1925960bc623d413aeb142.imgix.net/pp.PNG')
const hasUploadedImage = ref(false)
const gridSize = ref(6)
const gridColor = ref('#ff6b6b')
const gridThickness = ref(2)
const showLabels = ref(true)
const expandedFaq = ref<number | null>(null)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const compareCanvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

const faqs = [
  { question: 'What is a portrait drawing grid?', answer: 'A portrait drawing grid is a method used to divide a face or portrait photo into smaller sections, making it easier to draw accurate facial proportions.' },
  { question: 'How do I use a portrait drawing grid?', answer: 'Upload a portrait photo, add a grid overlay, and copy each section onto paper square by square.' },
  { question: 'What grid size is best for portrait drawing?', answer: 'Beginners often use 4×4 or 6×6 grids, while realistic portrait artists prefer 8×8 or finer grids.' },
  { question: 'Is the grid method good for portrait drawing?', answer: 'Yes. The grid method helps improve facial proportions and makes realistic portrait drawing easier.' },
  { question: 'Can beginners use a portrait grid?', answer: 'Absolutely. A portrait drawing grid is one of the easiest ways for beginners to learn face drawing.' },
  { question: 'How do artists draw realistic portraits?', answer: 'Many artists use portrait references, grid methods, and facial proportion guides to improve accuracy.' },
  { question: 'What is the best portrait grid maker?', answer: 'A good portrait grid maker should allow custom grid sizes, printable exports, and high-resolution downloads.' },
  { question: 'Can I print a portrait drawing grid?', answer: 'Yes. You can download and print a portrait grid for pencil sketching and classroom exercises.' },
  { question: 'How do I draw a face with correct proportions?', answer: 'Using a portrait grid helps align the eyes, nose, and mouth more accurately.' },
  { question: 'What is the best grid for face drawing?', answer: 'For most face drawings, a 6×6 grid offers a balance between simplicity and accuracy.' },
  { question: 'Can I add a grid to a portrait photo?', answer: 'Yes. Simply upload your portrait image and generate an instant drawing grid.' },
  { question: 'What is the easiest way to draw portraits?', answer: 'Using a portrait drawing grid is one of the fastest and easiest ways to sketch realistic faces.' }
]

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      currentImage.value = e.target?.result as string
      hasUploadedImage.value = true
      nextTick(() => {
        drawGrid()
      })
    }
    reader.readAsDataURL(file)
  }
}

const drawGrid = () => {
  if (!canvasRef.value || !currentImage.value) return
  
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return
  
  const img = new Image()
  img.onload = () => {
    const maxSize = 500
    let width = img.width
    let height = img.height
    
    if (width > maxSize || height > maxSize) {
      const ratio = Math.min(maxSize / width, maxSize / height)
      width = Math.round(width * ratio)
      height = Math.round(height * ratio)
    }
    
    canvas.width = width
    canvas.height = height
    
    ctx.drawImage(img, 0, 0, width, height)
    
    const gridSizeValue = gridSize.value
    const cellWidth = width / gridSizeValue
    const cellHeight = height / gridSizeValue
    
    ctx.strokeStyle = gridColor.value
    ctx.lineWidth = gridThickness.value
    
    for (let i = 1; i < gridSizeValue; i++) {
      ctx.beginPath()
      ctx.moveTo(cellWidth * i, 0)
      ctx.lineTo(cellWidth * i, height)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(0, cellHeight * i)
      ctx.lineTo(width, cellHeight * i)
      ctx.stroke()
    }
    
    if (showLabels.value) {
      ctx.fillStyle = gridColor.value
      ctx.font = `${Math.max(10, Math.min(16, cellHeight / 3))}px Arial`
      ctx.textAlign = 'right'
      ctx.textBaseline = 'bottom'
      
      // 在每个格子的右下角显示坐标编号（如 a1, a2, b1, b2）
      const margin = 4 // 边距
      for (let row = 0; row < gridSizeValue; row++) {
        for (let col = 0; col < gridSizeValue; col++) {
          const letter = String.fromCharCode(97 + col)
          const label = letter + (row + 1).toString()
          ctx.fillText(label, col * cellWidth + cellWidth - margin, row * cellHeight + cellHeight - margin)
        }
      }
    }
    
    drawCompareCanvas(img, width, height)
  }
  img.src = currentImage.value
}

const drawCompareCanvas = (img: HTMLImageElement, width: number, height: number) => {
  if (!compareCanvasRef.value) return
  
  const canvas = compareCanvasRef.value
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return
  
  canvas.width = width
  canvas.height = height
  
  ctx.drawImage(img, 0, 0, width, height)
  
  const gridSizeValue = gridSize.value
  const cellWidth = width / gridSizeValue
  const cellHeight = height / gridSizeValue
  
  ctx.strokeStyle = gridColor.value
  ctx.lineWidth = gridThickness.value
  
  for (let i = 1; i < gridSizeValue; i++) {
    ctx.beginPath()
    ctx.moveTo(cellWidth * i, 0)
    ctx.lineTo(cellWidth * i, height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0, cellHeight * i)
    ctx.lineTo(width, cellHeight * i)
    ctx.stroke()
  }
  
  if (showLabels.value) {
    ctx.fillStyle = gridColor.value
    ctx.font = `${Math.max(10, Math.min(16, cellHeight / 3))}px Arial`
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    // 在每个格子的右下角显示坐标编号（如 a1, a2, b1, b2）
    const margin = 4 // 边距
    for (let row = 0; row < gridSizeValue; row++) {
      for (let col = 0; col < gridSizeValue; col++) {
        const letter = String.fromCharCode(97 + col)
        const label = letter + (row + 1).toString()
        ctx.fillText(label, col * cellWidth + cellWidth - margin, row * cellHeight + cellHeight - margin)
      }
    }
  }
}

const downloadPNG = () => {
  if (!canvasRef.value) return
  
  const link = document.createElement('a')
  link.download = 'portrait-grid.png'
  link.href = canvasRef.value.toDataURL('image/png')
  link.click()
}

const downloadPDF = () => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  const imgData = canvas.toDataURL('image/png')
  
  const pdfContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        img { max-width: 100%; max-height: 100vh; }
      </style>
    </head>
    <body>
      <img src="${imgData}" />
    </body>
    </html>
  `
  
  const blob = new Blob([pdfContent], { type: 'application/pdf' })
  const link = document.createElement('a')
  link.download = 'portrait-grid.pdf'
  link.href = URL.createObjectURL(blob)
  link.click()
}

const printImage = () => {
  if (!canvasRef.value) return
  
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Portrait Grid</title>
        <style>
          @media print {
            body { margin: 0; }
            img { max-width: 100%; max-height: 100vh; }
          }
        </style>
      </head>
      <body>
        <img src="${canvasRef.value.toDataURL('image/png')}" />
        <script>
          window.print();
          window.close();
        <\/script>
      </body>
      </html>
    `)
    printWindow.document.close()
  }
}

const toggleFaq = (index: number) => {
  expandedFaq.value = expandedFaq.value === index ? null : index
}

watch([gridSize, gridColor, gridThickness, showLabels], () => {
  if (currentImage.value) {
    drawGrid()
  }
})

onMounted(() => {
  nextTick(() => {
    if (currentImage.value) {
      drawGrid()
    }
  })
})
</script>

<style scoped>
.portrait-grid-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.page-header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 16px;
  font-weight: 700;
}

.page-header h2 {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.9;
}

.page-nav {
  padding: 16px 20px;
  background: rgba(0, 0, 0, 0.05);
}

.back-home {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.page-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
}

.main-section {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.upload-section, .grid-settings {
  background: white;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.upload-section h3 {
  margin-bottom: 8px;
  color: #1f2937;
}

.upload-desc {
  margin-bottom: 16px;
  color: #6b7280;
  font-size: 0.9rem;
}

.upload-input {
  display: none;
}

.upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border: 2px dashed #d1d5db;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.upload-label:hover {
  border-color: #667eea;
  background: #f3f4f6;
}

.upload-hint {
  margin-top: 12px;
  font-size: 0.8rem;
  color: #9ca3af;
  text-align: center;
}

.grid-settings h3 {
  margin-bottom: 20px;
  color: #1f2937;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 500;
}

.grid-size-select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
}

.color-picker {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.setting-group input[type="range"] {
  width: 100%;
}

.setting-group input[type="checkbox"] {
  margin-right: 8px;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.export-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.export-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.export-btn.secondary {
  background: #f3f4f6;
  color: #374151;
}

.export-btn.secondary:hover {
  background: #e5e7eb;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.export-btn.tertiary {
  background: #fff;
  color: #374151;
  border: 1px solid #d1d5db;
}

.export-btn.tertiary:hover {
  background: #f9fafb;
}

.canvas-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.canvas-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.portrait-canvas {
  max-width: 100%;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: #9ca3af;
}

.compare-section {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 20px;
}

.compare-section h4 {
  margin-bottom: 16px;
  color: #1f2937;
}

.compare-images {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.compare-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.compare-img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.compare-label {
  font-size: 0.9rem;
  color: #6b7280;
}

.how-to-section, .scenarios-section, .faq-section {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 30px;
  margin-bottom: 30px;
}

.section-header {
  text-align: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 1.8rem;
  color: #1f2937;
}

.how-to-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.step-number {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 16px;
}

.step-content h3 {
  margin-bottom: 8px;
  color: #1f2937;
}

.step-content p {
  color: #6b7280;
  font-size: 0.9rem;
}

.why-to-use {
  margin-top: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 48px 40px;
}

.why-to-use h2 {
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

.why-card h3 {
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  overflow: hidden;
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  background: #f9fafb;
  cursor: pointer;
  font-weight: 500;
  color: #1f2937;
  transition: background 0.2s;
}

.faq-question:hover {
  background: #f3f4f6;
}

.faq-question svg {
  transition: transform 0.2s;
}

.faq-question svg.expanded {
  transform: rotate(180deg);
}

.faq-answer {
  padding: 16px 20px;
  color: #6b7280;
  line-height: 1.5;
}

@media (max-width: 900px) {
  .main-section {
    grid-template-columns: 1fr;
  }
  
  .how-to-steps, .scenarios {
    grid-template-columns: 1fr;
  }
  
  .compare-images {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .page-header h2 {
    font-size: 1rem;
  }
}

.try-more {
  margin-top: 40px;
}
.try-more h2 {
    text-align: center;
    font-size: 2rem;
    color: #1a1a2e;
    margin-bottom: 40px;
    font-weight: 700;
}
.try-more-box {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
</style>