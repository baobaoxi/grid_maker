<template>
  <div class="pixel-art-page">
    <AppNavbar></AppNavbar>

  

    <div class="page-header">
      <h1>Pixel Art Generator</h1>
      <p>Convert your photos into pixel art for cross-stitch patterns</p>
    </div>
  <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>
    <div class="page-content">
      <div class="main-section">
        <div class="sidebar">
          <div class="upload-section">
            <h3>Upload Image</h3>
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

          <div class="pixel-settings">
            <h3>Pixel Settings</h3>
            
            <div class="setting-group">
              <label>Pixel Size: {{ pixelSize }}</label>
              <input type="range" v-model.number="pixelSize" min="5" max="50" />
              <p class="setting-hint">Recommended: 10-20 for cross-stitch</p>
            </div>

            <div class="setting-group">
              <label>Width: {{ outputWidth }} pixels</label>
              <input type="number" v-model.number="outputWidth" min="10" max="500" />
            </div>

            <div class="setting-group">
              <label>Height: {{ outputHeight }} pixels</label>
              <input type="number" v-model.number="outputHeight" min="10" max="500" />
            </div>

            <div class="setting-group">
              <label>Colors: {{ colorCount }}</label>
              <input type="range" v-model.number="colorCount" min="2" max="24" />
              <p class="setting-hint">Number of colors in palette</p>
            </div>

            <div class="setting-group">
              <label>
                <input type="checkbox" v-model="showGrid" />
                Show Grid Lines
              </label>
            </div>
          </div>

          <div class="action-buttons">
            <button class="export-btn" @click="downloadImage">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Pixel Art
            </button>
            <button class="export-btn secondary" @click="downloadPattern">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Download Pattern Guide
            </button>
          </div>
        </div>

        <div class="canvas-section">
          <div class="canvas-container" ref="containerRef">
            <canvas ref="canvasRef" class="pixel-canvas"></canvas>
            <div v-if="!currentImage" class="placeholder">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
              <p>Upload an image to get started</p>
            </div>
          </div>
          
          <div v-if="currentImage" class="info-panel">
            <div class="info-item">
              <span class="label">Original Size</span>
              <span class="value">{{ originalWidth }} × {{ originalHeight }}</span>
            </div>
            <div class="info-item">
              <span class="label">Pixel Size</span>
              <span class="value">{{ outputWidth }} × {{ outputHeight }}</span>
            </div>
            <div class="info-item">
              <span class="label">Colors Used</span>
              <span class="value">{{ actualColors.length }}</span>
            </div>
          </div>

          <div v-if="currentImage" class="color-palette">
            <h4>Color Palette</h4>
            <div class="palette-colors">
              <div v-for="(color, index) in actualColors" :key="index" class="color-item">
                <div class="color-swatch" :style="{ backgroundColor: color }"></div>
                <span class="color-value">{{ color }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AppFooter company="Photo Grid App" @navigate="handleFooterNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'

const currentImage = ref<string>('')
const originalWidth = ref(0)
const originalHeight = ref(0)
const pixelSize = ref(15)
const outputWidth = ref(50)
const outputHeight = ref(50)
const colorCount = ref(12)
const showGrid = ref(true)
const actualColors = ref<string[]>([])

const canvasRef = ref<HTMLCanvasElement | null>(null)
const containerRef = ref<HTMLDivElement | null>(null)

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      currentImage.value = e.target?.result as string
      const img = new Image()
      img.onload = () => {
        originalWidth.value = img.width
        originalHeight.value = img.height
        calculateOptimalSize(img.width, img.height)
        nextTick(() => {
          drawPixelArt(img)
        })
      }
      img.src = currentImage.value
    }
    reader.readAsDataURL(file)
  }
}

const calculateOptimalSize = (width: number, height: number) => {
  const maxDimension = Math.max(width, height)
  const optimalPixels = Math.floor(maxDimension / pixelSize.value)
  const ratio = width / height
  
  if (width > height) {
    outputWidth.value = Math.max(10, Math.min(200, optimalPixels))
    outputHeight.value = Math.max(10, Math.min(200, Math.floor(outputWidth.value / ratio)))
  } else {
    outputHeight.value = Math.max(10, Math.min(200, optimalPixels))
    outputWidth.value = Math.max(10, Math.min(200, Math.floor(outputHeight.value * ratio)))
  }
}

const getDominantColor = (pixels: Uint8ClampedArray, offset: number): string => {
  const r = pixels[offset]
  const g = pixels[offset + 1]
  const b = pixels[offset + 2]
  return `rgb(${r}, ${g}, ${b})`
}

const quantizeColors = (colors: string[], numColors: number): string[] => {
  if (colors.length <= numColors) return colors
  
  const rgbColors = colors.map(c => {
    const match = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    return match ? { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) } : null
  }).filter(Boolean)
  
  const centroids = rgbColors.slice(0, numColors)
  
  for (let i = 0; i < 10; i++) {
    const groups: number[][] = Array(numColors).fill(null).map(() => [])
    
    rgbColors.forEach((color, idx) => {
      if (!color) return
      let minDist = Infinity
      let minIdx = 0
      
      centroids.forEach((centroid, cIdx) => {
        if (!centroid) return
        const dist = Math.sqrt(
          Math.pow(color.r - centroid.r, 2) +
          Math.pow(color.g - centroid.g, 2) +
          Math.pow(color.b - centroid.b, 2)
        )
        if (dist < minDist) {
          minDist = dist
          minIdx = cIdx
        }
      })
      groups[minIdx].push(idx)
    })
    
    centroids.forEach((_, cIdx) => {
      const groupColors = groups[cIdx].map(idx => rgbColors[idx]).filter(Boolean)
      if (groupColors.length > 0) {
        const sumR = groupColors.reduce((acc, c) => acc + (c?.r || 0), 0)
        const sumG = groupColors.reduce((acc, c) => acc + (c?.g || 0), 0)
        const sumB = groupColors.reduce((acc, c) => acc + (c?.b || 0), 0)
        centroids[cIdx] = {
          r: Math.round(sumR / groupColors.length),
          g: Math.round(sumG / groupColors.length),
          b: Math.round(sumB / groupColors.length)
        }
      }
    })
  }
  
  return centroids.filter(Boolean).map(c => `rgb(${c?.r}, ${c?.g}, ${c?.b})`)
}

const drawPixelArt = (img?: HTMLImageElement) => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  if (!ctx || !currentImage.value) return
  
  const sourceImg = img || new Image()
  
  if (!img) {
    sourceImg.onload = () => {
      processImage(sourceImg)
    }
    sourceImg.src = currentImage.value
    return
  }
  
  processImage(sourceImg)
}

const processImage = (img: HTMLImageElement) => {
  if (!canvasRef.value) return
  
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return
  
  const tempCanvas = document.createElement('canvas')
  const tempCtx = tempCanvas.getContext('2d')
  
  if (!tempCtx) return
  
  tempCanvas.width = outputWidth.value
  tempCanvas.height = outputHeight.value
  tempCtx.drawImage(img, 0, 0, outputWidth.value, outputHeight.value)
  
  const imageData = tempCtx.getImageData(0, 0, outputWidth.value, outputHeight.value)
  const pixels = imageData.data
  
  const colorsSet = new Set<string>()
  
  for (let y = 0; y < outputHeight.value; y++) {
    for (let x = 0; x < outputWidth.value; x++) {
      const offset = (y * outputWidth.value + x) * 4
      const color = getDominantColor(pixels, offset)
      colorsSet.add(color)
    }
  }
  
  const allColors = Array.from(colorsSet)
  actualColors.value = quantizeColors(allColors, colorCount.value)
  
  canvas.width = outputWidth.value * pixelSize.value
  canvas.height = outputHeight.value * pixelSize.value
  
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  for (let y = 0; y < outputHeight.value; y++) {
    for (let x = 0; x < outputWidth.value; x++) {
      const offset = (y * outputWidth.value + x) * 4
      let color = getDominantColor(pixels, offset)
      
      const rgbColor = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
      if (rgbColor) {
        const r = parseInt(rgbColor[1])
        const g = parseInt(rgbColor[2])
        const b = parseInt(rgbColor[3])
        
        let minDist = Infinity
        let closestColor = color
        
        actualColors.value.forEach(c => {
          const match = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
          if (match) {
            const cr = parseInt(match[1])
            const cg = parseInt(match[2])
            const cb = parseInt(match[3])
            const dist = Math.sqrt(Math.pow(r - cr, 2) + Math.pow(g - cg, 2) + Math.pow(b - cb, 2))
            if (dist < minDist) {
              minDist = dist
              closestColor = c
            }
          }
        })
        color = closestColor
      }
      
      ctx.fillStyle = color
      ctx.fillRect(
        x * pixelSize.value,
        y * pixelSize.value,
        pixelSize.value,
        pixelSize.value
      )
      
      if (showGrid.value) {
        ctx.strokeStyle = '#cccccc'
        ctx.lineWidth = 0.5
        ctx.strokeRect(
          x * pixelSize.value,
          y * pixelSize.value,
          pixelSize.value,
          pixelSize.value
        )
      }
    }
  }
}

const downloadImage = () => {
  if (!canvasRef.value) return
  
  const link = document.createElement('a')
  link.download = `pixel-art-${outputWidth.value}x${outputHeight.value}.png`
  link.href = canvasRef.value.toDataURL('image/png')
  link.click()
}

const downloadPattern = () => {
  let pattern = `Cross-Stitch Pattern Guide\n`
  pattern += `========================\n\n`
  pattern += `Image Size: ${outputWidth.value} × ${outputHeight.value} pixels\n`
  pattern += `Grid Size: ${pixelSize.value}px\n`
  pattern += `Colors: ${actualColors.value.length}\n\n`
  pattern += `Color Palette:\n`
  actualColors.value.forEach((color, index) => {
    pattern += `${index + 1}. ${color}\n`
  })
  pattern += `\nPattern (${outputHeight.value} rows × ${outputWidth.value} columns):\n`
  
  const link = document.createElement('a')
  link.download = `cross-stitch-pattern.txt`
  link.href = `data:text/plain,${encodeURIComponent(pattern)}`
  link.click()
}

const handleFooterNavigate = (link: { label: string; url: string }) => {
  window.location.href = link.url
}

watch([pixelSize, outputWidth, outputHeight, colorCount, showGrid], () => {
  if (currentImage.value) {
    drawPixelArt()
  }
})

onMounted(() => {
  if (currentImage.value) {
    drawPixelArt()
  }
})
</script>

<style scoped>
.pixel-art-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.page-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 20px;
}

.main-section {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 30px;
}

.sidebar {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 20px;
  height: fit-content;
}

.sidebar h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
}

.upload-section {
  margin-bottom: 24px;
}

.upload-input {
  display: none;
}

.upload-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px;
  border: 2px dashed #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.upload-label:hover {
  border-color: #8b5cf6;
  background: #f8f5ff;
}

.upload-hint {
  text-align: center;
  font-size: 0.85rem;
  color: #888;
  margin-top: 12px;
}

.pixel-settings {
  margin-bottom: 24px;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group label {
  display: block;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.setting-group input[type="range"],
.setting-group input[type="number"] {
  width: 100%;
  padding: 8px;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
}

.setting-group input[type="range"] {
  padding: 0;
}

.setting-group input[type="checkbox"] {
  margin-right: 8px;
}

.setting-hint {
  font-size: 0.8rem;
  color: #888;
  margin-top: 4px;
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
  gap: 10px;
  padding: 12px 20px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.export-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

.export-btn.secondary {
  background: #6b7280;
}

.export-btn.secondary:hover {
  background: #4b5563;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.canvas-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.canvas-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  background: #f8f9fa;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pixel-canvas {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.placeholder {
  text-align: center;
  color: #999;
}

.placeholder svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.info-panel {
  display: flex;
  gap: 30px;
  margin-top: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-item {
  display: flex;
  flex-direction: column;
}

.info-item .label {
  font-size: 0.85rem;
  color: #888;
}

.info-item .value {
  font-weight: 600;
  color: #1a1a2e;
}

.color-palette {
  margin-top: 20px;
}

.color-palette h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
}

.palette-colors {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.color-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.color-swatch {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

.color-value {
  font-size: 0.8rem;
  color: #666;
  font-family: monospace;
}

@media (max-width: 768px) {
  .main-section {
    grid-template-columns: 1fr;
  }
  
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .info-panel {
    flex-direction: column;
    gap: 12px;
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