<template>
  <div class="grid-maker-container">
    <h2 class="maker-title">Drawing Grid Maker</h2>
    <div class="maker-subtitle">Upload your photo, generate a grid, and start sketching square by square.</div>
    <div class="grid-maker-main" :class="{ 'single-column': step < 2 }">
      <div class="preview-section">
        <div class="preview-container" :class="{ 'default-height': step < 2 }" @click="goToEdit">
          <img 
            ref="imageRef"
            :src="currentImage" 
            alt="Grid Maker for people to draw artist" 
            class="preview-image"
            @load="onImageLoad"
          />
          <canvas 
            ref="canvasRef"
            class="grid-canvas"
          ></canvas>
          <div class="click-indicator">
            <span>Click to edit</span>
          </div>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="17 8 12 3 7 8"></polyline>
              <line x1="12" y1="3" x2="12" y2="15"></line>
            </svg>
            {{ step === 1 ? 'Choose Image' : 'Change Image' }}
          </label>
        </div>
      </div>

      <div class="form-section" v-if="step >= 2">
        <!-- Step 1: Initial state - show nothing except upload button (already handled) -->
        
        <!-- Step 2: After selecting image - show grid count and style selection -->
        <template v-if="step >= 2">
          <div class="form-group">
            <label for="grid-count">Grid Count</label>
            <input 
              type="number" 
              id="grid-count" 
              v-model.number="gridCount" 
              min="4" 
              max="1000"
              placeholder="Enter grid count"
            />
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

          <button v-if="step === 2" class="btn-primary add-grid-btn" @click="addGrid">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Add Grid
          </button>
        </template>

        <!-- Step 3: After clicking Add Grid - show full settings -->
        <template v-if="step >= 3">
          <h3>Grid Settings</h3>
          
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

          <div class="action-buttons">
            <button class="btn-primary" @click="goToEdit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                <path d="m15 5 4 4"></path>
              </svg>
              Edit
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const step = ref(1) // 1: initial, 2: image selected, 3: grid added
const currentImage = ref('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop')
const imageRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const gridCount = ref(12)
const selectedCombo = ref({ rows: 3, cols: 4, label: '3×4' })
const selectedStyle = ref('square')

const gridStyles = [
  { value: 'square', label: 'Square', icon: '◻️' },
  { value: 'diamond', label: 'Diamond', icon: '◇' },
  { value: 'triangle', label: 'Triangle', icon: '△' },
  { value: 'hexagon', label: 'Hexagon', icon: '⬡' }
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
  const color = '#8b5cf6'
  const alpha = 0.6

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = color
  ctx.lineWidth = 2
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

    const startX = -hexWidth
    const startY = -hexHeight

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

const addGrid = () => {
  step.value = 3
  if (gridCombinations.value.length > 0) {
    selectedCombo.value = gridCombinations.value[0]
  }
  drawGrid()
}

watch([selectedCombo, selectedStyle], () => {
  drawGrid()
})

watch(gridCount, () => {
  if (step.value >= 3 && gridCombinations.value.length > 0) {
    selectedCombo.value = gridCombinations.value[0]
  }
})

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      currentImage.value = e.target?.result as string
      step.value = 2
    }
    reader.readAsDataURL(file)
  }
}

const selectCombo = (combo: { rows: number; cols: number; label: string }) => {
  selectedCombo.value = combo
}

const goToEdit = () => {
  router.push({
    path: '/edit-grid',
    query: {
      image: encodeURIComponent(currentImage.value),
      rows: selectedCombo.value.rows.toString(),
      cols: selectedCombo.value.cols.toString(),
      count: gridCount.value.toString(),
      style: selectedStyle.value
    }
  })
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
  ctx.globalAlpha = 0.6
  ctx.drawImage(canvas, 0, 0)

  const link = document.createElement('a')
  link.download = 'grid.' + format
  link.href = exportCanvas.toDataURL('image/' + format, 0.95)
  link.click()
}

const printImage = () => {
  const img = imageRef.value
  const canvas = canvasRef.value
  if (!img || !canvas) return

  const printCanvas = document.createElement('canvas')
  printCanvas.width = img.naturalWidth
  printCanvas.height = img.naturalHeight
  const ctx = printCanvas.getContext('2d')
  if (!ctx) return

  ctx.drawImage(img, 0, 0)
  ctx.globalAlpha = 0.6
  ctx.drawImage(canvas, 0, 0)

  const imageDataUrl = printCanvas.toDataURL('image/png')
  const printWindow = window.open('', '_blank')
  if (printWindow) {
    printWindow.document.write('<img src="' + imageDataUrl + '" onload="window.print();window.close();">')
    printWindow.document.close()
  }
}

onMounted(() => {
  if (imageRef.value?.complete) {
    drawGrid()
  }
})
</script>

<style scoped>
.grid-maker-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.grid-maker-main {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 30px;
  margin-bottom: 30px;
}

.grid-maker-main.single-column {
  grid-template-columns: 1fr;
}

.preview-section {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.preview-container {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: 20px;
}

.preview-container.default-height {
  height: 400px;
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

.click-indicator {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 12px;
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

.form-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.form-section h3 {
  margin-bottom: 20px;
  color: #1a1a2e;
}

.maker-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a2e;
  text-align: center;
  margin-bottom: 12px;
}

.maker-subtitle {
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 30px;
  line-height: 1.5;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
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
  transition: border-color 0.2s;
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

.action-buttons {
  display: flex;
  gap: 12px;
  margin-top: 24px;
}

.btn-primary {
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.add-grid-btn {
  width: 100%;
}

@media (max-width: 900px) {
  .grid-maker-main {
    grid-template-columns: 1fr;
  }
  
  .maker-title {
    display: none;
  }
  
  .maker-subtitle {
    display: none;
  }
  
  .grid-canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  .preview-container.default-height {
    height: auto;
  }
}
</style>
