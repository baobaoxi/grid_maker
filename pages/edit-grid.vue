<template>
  <div class="edit-grid-container">
    <AppNavbar></AppNavbar>

    <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>

    <div class="edit-content">
      <div class="edit-preview">
        <div class="preview-container">
          <img 
            ref="imageRef"
            :src="currentImage" 
            alt="Grid preview" 
            class="preview-image"
            @load="onImageLoad"
            fetchpriority="high"
          />
          <canvas 
            ref="canvasRef"
            class="grid-canvas"
          ></canvas>
        </div>
        
        <div class="upload-section">
          <input 
            type="file" 
            id="image-upload" 
            class="upload-input" 
            accept="image/*" 
            @change="handleImageUpload"
          />
          <label for="image-upload" class="upload-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            Change Image
          </label>
        </div>
      </div>

      <div class="edit-form">
        <div class="form-section">
          <h3>Grid Settings</h3>
          
          <div class="form-group">
            <label>Grid Count</label>
            <input 
              type="number" 
              v-model.number="gridCount" 
              min="4" 
              max="1000"
            />
          </div>

          <div class="form-group" v-if="gridCombinations.length > 0">
            <label>Grid Combination</label>
            <div class="combination-options">
              <button 
                v-for="combo in gridCombinations" 
                :key="combo.label"
                :class="['combo-btn', { active: selectedCombo.label === combo.label }]"
                @click="selectCombo(combo)"
              >
                {{ combo.label }}
              </button>
            </div>
          </div>

          <div class="form-group">
            <label>Grid Style</label>
            <div class="style-options">
              <label v-for="style in gridStyles" :key="style.value" class="style-radio">
                <input 
                  type="radio" 
                  :value="style.value" 
                  v-model="selectedStyle"
                />
                <span class="style-icon">{{ style.icon }}</span>
                <span>{{ style.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Appearance Settings</h3>
          
          <div class="form-group">
            <label>Line Width: {{ lineWidth }}px</label>
            <input type="range" v-model.number="lineWidth" min="1" max="10" />
          </div>

          <div class="form-group">
            <label>Opacity: {{ opacity }}%</label>
            <input type="range" v-model.number="opacity" min="10" max="100" />
          </div>

          <div class="form-group">
            <label>Grid Color</label>
            <div class="color-options">
              <input type="color" v-model="gridColor" />
              <div class="preset-colors">
                <button 
                  v-for="color in presetColors" 
                  :key="color"
                  :style="{ backgroundColor: color }"
                  class="color-preset"
                  :class="{ active: gridColor === color }"
                  @click="gridColor = color"
                ></button>
              </div>
            </div>
          </div>
        </div>

        <div class="form-section">
          <h3>Export Options</h3>
          <div class="export-buttons">
            <button 
              class="export-btn" 
              :class="{ disabled: !hasUploadedImage }" 
              :disabled="!hasUploadedImage"
              @click="downloadImage('jpg')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              JPG
            </button>
            <button 
              class="export-btn" 
              :class="{ disabled: !hasUploadedImage }" 
              :disabled="!hasUploadedImage"
              @click="downloadImage('png')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              PNG
            </button>
            <button 
              class="export-btn" 
              :class="{ disabled: !hasUploadedImage }" 
              :disabled="!hasUploadedImage"
              @click="downloadImage('svg')"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              SVG
            </button>
            <button 
              class="export-btn print-btn" 
              :class="{ disabled: !hasUploadedImage }" 
              :disabled="!hasUploadedImage"
              @click="printImage"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="3"></rect>
              </svg>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentImage = ref('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop')
const hasUploadedImage = ref(false)
const imageRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gridCount = ref(12)
const selectedCombo = ref({ rows: 3, cols: 4, label: '3×4' })
const selectedStyle = ref('square')
const lineWidth = ref(2)
const opacity = ref(60)
const gridColor = ref('#8b5cf6')

const gridStyles = [
  { value: 'square', label: 'Square', icon: '◻️' },
  { value: 'diamond', label: 'Diamond', icon: '◇' },
  { value: 'triangle', label: 'Triangle', icon: '△' },
  { value: 'hexagon', label: 'Hexagon', icon: '⬡' }
]

const presetColors = [
  '#8b5cf6', '#ef4444', '#22c55e', '#3b82f6', '#f59e0b',
  '#ec4899', '#06b6d4', '#6b7280', '#ffffff', '#000000'
]

const gridCombinations = computed(() => {
  const count = gridCount.value
  const combinations: { rows: number; cols: number; label: string; score: number }[] = []
  
  if (count < 4) return []
  
  const sqrt = Math.sqrt(count)
  const maxFactor = Math.floor(sqrt)
  
  for (let i = maxFactor; i >= 1; i--) {
    if (count % i === 0) {
      const j = count / i
      const score = Math.abs(i - j)
      combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + '×' + Math.max(i, j), score })
    }
  }
  
  for (let i = maxFactor + 1; i <= Math.min(count, maxFactor + 5); i++) {
    if (count % i !== 0) {
      const j = Math.ceil(count / i)
      const score = Math.abs(i - j) + 1
      combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + '×' + Math.max(i, j), score })
    }
  }
  
  return combinations.sort((a, b) => a.score - b.score).slice(0, 5)
})

const drawGrid = () => {
  const canvas = canvasRef.value
  const img = imageRef.value
  if (!canvas || !img) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight

  const width = canvas.width
  const height = canvas.height
  const rows = selectedCombo.value.rows
  const cols = selectedCombo.value.cols
  const color = gridColor.value
  const alpha = opacity.value / 100

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth.value
  ctx.globalAlpha = alpha

  const cellWidth = width / cols
  const cellHeight = height / rows

  if (selectedStyle.value === 'square') {
    for (let i = 1; i < cols; i++) {
      ctx.beginPath()
      ctx.moveTo(i * cellWidth, 0)
      ctx.lineTo(i * cellWidth, height)
      ctx.stroke()
    }
    for (let j = 1; j < rows; j++) {
      ctx.beginPath()
      ctx.moveTo(0, j * cellHeight)
      ctx.lineTo(width, j * cellHeight)
      ctx.stroke()
    }
  } else if (selectedStyle.value === 'diamond') {
    const centerX = width / 2
    const centerY = height / 2
    const maxRadius = Math.max(width, height)

    for (let r = 0; r <= maxRadius; r += cellWidth) {
      ctx.beginPath()
      ctx.moveTo(centerX, centerY - r)
      ctx.lineTo(centerX + r, centerY)
      ctx.lineTo(centerX, centerY + r)
      ctx.lineTo(centerX - r, centerY)
      ctx.closePath()
      ctx.stroke()
    }
  } else if (selectedStyle.value === 'triangle') {
    const h = cellHeight
    const w = cellWidth

    for (let row = 0; row < rows; row++) {
      const yOffset = row * h
      const xOffset = (row % 2) * (w / 2)

      for (let col = -1; col <= cols; col++) {
        const x = col * w + xOffset
        const y = yOffset

        ctx.beginPath()
        ctx.moveTo(x + w / 2, y)
        ctx.lineTo(x + w, y + h)
        ctx.lineTo(x, y + h)
        ctx.closePath()
        ctx.stroke()
      }
    }
  } else if (selectedStyle.value === 'hexagon') {
    const hexHeight = cellHeight
    const hexWidth = hexHeight * 0.866
    const vertDist = hexHeight * 0.75
    const horizDist = hexWidth

    for (let row = 0; row <= Math.ceil(height / vertDist) + 1; row++) {
      for (let col = 0; col <= Math.ceil(width / horizDist) + 1; col++) {
        const x = col * horizDist + (row % 2) * (horizDist / 2)
        const y = row * vertDist

        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i - Math.PI / 6
          const px = x + (hexHeight / 2) * Math.cos(angle)
          const py = y + (hexHeight / 2) * Math.sin(angle)
          if (i === 0) ctx.moveTo(px, py)
          else ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.stroke()
      }
    }
  }
}

const onImageLoad = () => {
  drawGrid()
}

watch([selectedCombo, selectedStyle, gridColor, lineWidth, opacity], () => {
  drawGrid()
})

const selectCombo = (combo: { rows: number; cols: number; label: string }) => {
  selectedCombo.value = combo
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      currentImage.value = e.target?.result as string
      hasUploadedImage.value = true
    }
    reader.readAsDataURL(file)
  }
}

const goBack = () => {
  window.history.back()
}

const downloadImage = (format: string) => {
  const img = imageRef.value
  const canvas = canvasRef.value
  if (!img || !canvas) return

  const exportCanvas = document.createElement('canvas')
  exportCanvas.width = img.naturalWidth
  exportCanvas.height = img.naturalHeight
  const ctx = exportCanvas.getContext('2d')
  if (!ctx) return

  ctx.drawImage(img, 0, 0)
  ctx.globalAlpha = opacity.value / 100
  ctx.drawImage(canvas, 0, 0)

  const link = document.createElement('a')
  link.download = 'grid.' + format
  link.href = exportCanvas.toDataURL('image/' + format, 0.95)
  link.click()
}

const printImage = () => {
  const img = imageRef.value
  const canvas = canvasRef.value
  if (!img || !canvas) {
    alert('Please upload an image first')
    return
  }

  const printCanvas = document.createElement('canvas')
  printCanvas.width = img.naturalWidth
  printCanvas.height = img.naturalHeight
  const ctx = printCanvas.getContext('2d')
  if (!ctx) {
    alert('Failed to create canvas context')
    return
  }

  ctx.drawImage(img, 0, 0)
  ctx.globalAlpha = opacity.value / 100
  ctx.drawImage(canvas, 0, 0)

  const imageDataUrl = printCanvas.toDataURL('image/png')

  const iframe = document.createElement('iframe')
  iframe.style.display = 'none'
  document.body.appendChild(iframe)

  const doc = iframe.contentDocument || iframe.contentWindow?.document
  if (!doc) {
    document.body.removeChild(iframe)
    return
  }

  doc.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Print Grid</title>
      <style>
        body { margin: 0; padding: 20px; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
        img { max-width: 100%; max-height: 100vh; }
        @media print {
          body { padding: 0; }
        }
      </style>
    </head>
    <body>
      <img src="${imageDataUrl}" onload="window.print();" />
    </body>
    </html>
  `)
  doc.close()

  iframe.onload = function() {
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 100)
  }
}

onMounted(() => {
  const image = route.query.image as string
  const rowsParam = route.query.rows as string
  const colsParam = route.query.cols as string
  const countParam = route.query.count as string
  const styleParam = route.query.style as string
  
  if (image) currentImage.value = decodeURIComponent(image)
  if (rowsParam) selectedCombo.value.rows = parseInt(rowsParam)
  if (colsParam) selectedCombo.value.cols = parseInt(colsParam)
  if (countParam) gridCount.value = parseInt(countParam)
  if (styleParam) selectedStyle.value = styleParam
  
  selectedCombo.value.label = selectedCombo.value.rows + '×' + selectedCombo.value.cols
  
  if (imageRef.value?.complete) {
    drawGrid()
  }
})
</script>

<style scoped>
.edit-grid-container {
  min-height: 100vh;
  background: #f9fafb;
}

.edit-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.edit-header h1 {
  margin: 0;
  color: #1a1a2e;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  text-decoration: none;
}

.back-btn:hover {
  background: #e5e7eb;
}

.edit-content {
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 30px;
  padding: 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.edit-preview {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.preview-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}

.preview-image {
  width: 100%;
  height: auto;
  display: block;
}

.grid-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.upload-section {
  text-align: center;
}

.upload-input {
  display: none;
}

.upload-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.upload-button:hover {
  background: #7c3aed;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.form-section h3 {
  margin: 0 0 20px 0;
  color: #1a1a2e;
}

.form-group {
  margin-bottom: 16px;
}

.form-group:last-child {
  margin-bottom: 0;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #374151;
}

.form-group input[type="number"] {
  width: 100%;
  padding: 10px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.form-group input[type="number"]:focus {
  outline: none;
  border-color: #8b5cf6;
}

.form-group input[type="range"] {
  width: 100%;
}

.combination-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.combo-btn {
  padding: 8px 16px;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.combo-btn:hover {
  border-color: #8b5cf6;
}

.combo-btn.active {
  background: #8b5cf6;
  color: white;
  border-color: #8b5cf6;
}

.style-options {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.style-radio {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border: 2px solid #e5e7eb;
  border-radius: 6px;
  transition: all 0.2s;
}

.style-radio:hover {
  border-color: #8b5cf6;
}

.style-radio input {
  display: none;
}

.style-radio:has(input:checked) {
  border-color: #8b5cf6;
  background: rgba(139, 92, 246, 0.1);
}

.style-icon {
  font-size: 18px;
}

.color-options {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-options input[type="color"] {
  width: 50px;
  height: 40px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  padding: 2px;
}

.preset-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.color-preset {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s;
}

.color-preset:hover {
  transform: scale(1.15);
}

.color-preset.active {
  border-color: #8b5cf6;
  box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
}

.export-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.export-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  background: #8b5cf6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.export-btn:hover {
  background: #7c3aed;
  transform: translateY(-2px);
}

.export-btn.disabled {
  background: #d1d5db;
  cursor: not-allowed;
  opacity: 0.7;
}

.export-btn.disabled:hover {
  background: #d1d5db;
  transform: none;
}

.print-btn {
  background: #f59e0b;
}

.print-btn:hover {
  background: #d97706;
}

@media (max-width: 1000px) {
  .edit-content {
    grid-template-columns: 1fr;
  }
  
  .edit-header {
    padding: 16px 20px;
  }
}

.page-nav {
  padding: 16px 24px;
  background: #f8f9fa;
}

.back-home {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.back-home:hover {
  color: #764ba2;
}
</style>