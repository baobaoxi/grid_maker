<template>
  <div class="perler-bead-page">
    <AppNavbar></AppNavbar>

    <div class="page-header">
      <h1>Perler Bead Pattern Generator</h1>
      <h2>Create pixel-perfect patterns for your Perler bead projects</h2>
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
            <h3>Bead Settings</h3>
            
            <div class="setting-group">
              <label>Bead Size: {{ pixelSize }}</label>
              <input type="range" v-model.number="pixelSize" min="5" max="50" />
              <p class="setting-hint">Recommended: 10-20 for Perler beads</p>
            </div>

            <div class="setting-group">
              <label>Width: {{ outputWidth }} beads</label>
              <input type="number" v-model.number="outputWidth" min="10" max="500" />
            </div>

            <div class="setting-group">
              <label>Height: {{ outputHeight }} beads</label>
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

            <div class="setting-group">
              <label>
                <input type="checkbox" v-model="showBeadOutline" />
                Show Bead Outline
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
              Download Pattern
            </button>
            <button class="export-btn secondary" @click="downloadPattern">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Download Color Guide
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
              <span class="label">Pattern Size</span>
              <span class="value">{{ outputWidth }} × {{ outputHeight }} beads</span>
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

    <div class="features-section">
      <div class="features-header">
        <h2>Feature Introduction</h2>
      </div>
      <FeatureSection 
        v-for="(feature, index) in perlerBeadFeatures" 
        :key="feature.id" 
        :feature="feature" 
        :reverse="index === 1"
      />
    </div>

    <HowToGuide :guide="perlerBeadGuide" />

    <FeaturesSection
      :show-header="false"
      :show-features="false"
      :show-steps="false"
      :show-why-to-use="false"
      :show-faq="true"
      :faq-items="perlerBeadFaq"
    />
    
    <div class="try-more">
      <h2>Try Our Other Tools</h2>
      <div class="try-more-box">
        <PageGuide
          title="Pixel Art Generator"
          description="Convert photos to pixel art for cross-stitch patterns."
          link-url="/pixel-art"
          button-text="Go to Pixel Art"
          image-url="https://6a1925960bc623d413aeb142.imgix.net/p.PNG"
        />
      </div>
    </div>

    <AppFooter company="Photo Grid App" @navigate="handleFooterNavigate" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'
import PageGuide from '~/components/PageGuide.vue'
import FeatureSection from '~/components/FeatureSection.vue'
import HowToGuide from '~/components/HowToGuide.vue'
import { perlerBeadFeatures, perlerBeadGuide, perlerBeadFaq } from '~/config/pixelArtFeatures'

useHead({
  title: 'Perler Bead Pattern Generator',
  meta: [
    { name: 'description', content: 'Create Perler bead patterns from any image. Customize bead size, colors, and download your pattern guide.' }
  ],
  link: [
    { rel: 'canonical', href: 'https://grid-maker.pro/perler-bead' }
  ]
})

const currentImage = ref<string>('https://6a1925960bc623d413aeb142.imgix.net/p2.PNG')
const originalWidth = ref(0)
const originalHeight = ref(0)
const pixelSize = ref(15)
const outputWidth = ref(50)
const outputHeight = ref(50)
const colorCount = ref(12)
const showGrid = ref(true)
const showBeadOutline = ref(true)
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
    outputWidth.value = Math.min(optimalPixels, 100)
    outputHeight.value = Math.min(Math.floor(outputWidth.value / ratio), 100)
  } else {
    outputHeight.value = Math.min(optimalPixels, 100)
    outputWidth.value = Math.min(Math.floor(outputHeight.value * ratio), 100)
  }
}

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

const rgbToHex = (r: number, g: number, b: number) => {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`
}

const getColors = (imgData: ImageData, count: number) => {
  const pixels = imgData.data
  const colorMap: Record<string, number> = {}
  
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    const color = rgbToHex(r, g, b)
    colorMap[color] = (colorMap[color] || 0) + 1
  }
  
  const sortedColors = Object.entries(colorMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(entry => entry[0])
  
  return sortedColors
}

const quantizeColors = (colors: string[], count: number) => {
  if (colors.length <= count) return colors
  
  const rgbColors = colors.map(c => hexToRgb(c)).filter(Boolean) as { r: number; g: number; b: number }[]
  const centroids = rgbColors.slice(0, count)
  
  for (let iteration = 0; iteration < 10; iteration++) {
    const groups: { r: number; g: number; b: number }[][] = Array(count).fill(null).map(() => [])
    
    rgbColors.forEach(color => {
      let minDist = Infinity
      let minIdx = 0
      
      centroids.forEach((centroid, cIdx) => {
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
      
      groups[minIdx].push(color)
    })
    
    groups.forEach((groupColors, cIdx) => {
      if (groupColors.length === 0) return
      const sumR = groupColors.reduce((acc, c) => acc + (c?.r || 0), 0)
      const sumG = groupColors.reduce((acc, c) => acc + (c?.g || 0), 0)
      const sumB = groupColors.reduce((acc, c) => acc + (c?.b || 0), 0)
      centroids[cIdx] = {
        r: Math.round(sumR / groupColors.length),
        g: Math.round(sumG / groupColors.length),
        b: Math.round(sumB / groupColors.length)
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
  sourceImg.crossOrigin = 'anonymous'
  
  if (!img) {
    sourceImg.onload = () => {
      processImage(sourceImg)
    }
    sourceImg.onerror = () => {
      console.error('Failed to load image:', currentImage.value)
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
  
  const imgData = tempCtx.getImageData(0, 0, outputWidth.value, outputHeight.value)
  const colors = getColors(imgData, colorCount.value * 2)
  actualColors.value = quantizeColors(colors, colorCount.value)
  
  const colorMap: Record<string, string> = {}
  const rgbColors = actualColors.value.map(c => {
    // 支持两种格式：rgb(...) 和 #hex
    const rgbMatch = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/)
    if (rgbMatch) {
      return { r: parseInt(rgbMatch[1]), g: parseInt(rgbMatch[2]), b: parseInt(rgbMatch[3]) }
    }
    // 处理十六进制颜色
    const hexMatch = c.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i)
    if (hexMatch) {
      return { 
        r: parseInt(hexMatch[1], 16), 
        g: parseInt(hexMatch[2], 16), 
        b: parseInt(hexMatch[3], 16) 
      }
    }
    return null
  }).filter(Boolean)
  
  imgData.data.forEach((_, i) => {
    if (i % 4 === 3) return
    
    const idx = Math.floor(i / 4)
    const x = idx % outputWidth.value
    const y = Math.floor(idx / outputWidth.value)
    
    const pixelData = imgData.data.slice(idx * 4, idx * 4 + 3)
    const pixelRgb = { r: pixelData[0], g: pixelData[1], b: pixelData[2] }
    
    let closestColor = actualColors.value[0]
    let minDist = Infinity
    
    rgbColors.forEach((color, cIdx) => {
      if (!color) return
      const dist = Math.sqrt(
        Math.pow(pixelRgb.r - color.r, 2) +
        Math.pow(pixelRgb.g - color.g, 2) +
        Math.pow(pixelRgb.b - color.b, 2)
      )
      if (dist < minDist) {
        minDist = dist
        closestColor = actualColors.value[cIdx]
      }
    })
    
    colorMap[`${x},${y}`] = closestColor
  })
  
  canvas.width = outputWidth.value * pixelSize.value
  canvas.height = outputHeight.value * pixelSize.value
  
  // 绘制背景
  ctx.fillStyle = '#f0f0f0'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  
  // 绘制网格线
  if (showGrid.value) {
    ctx.strokeStyle = '#e0e0e0'
    ctx.lineWidth = 0.5
    
    for (let x = 0; x <= outputWidth.value; x++) {
      ctx.beginPath()
      ctx.moveTo(x * pixelSize.value, 0)
      ctx.lineTo(x * pixelSize.value, canvas.height)
      ctx.stroke()
    }
    
    for (let y = 0; y <= outputHeight.value; y++) {
      ctx.beginPath()
      ctx.moveTo(0, y * pixelSize.value)
      ctx.lineTo(canvas.width, y * pixelSize.value)
      ctx.stroke()
    }
  }
  
  for (let y = 0; y < outputHeight.value; y++) {
    for (let x = 0; x < outputWidth.value; x++) {
      const color = colorMap[`${x},${y}`] || '#ffffff'
      
      const centerX = x * pixelSize.value + pixelSize.value / 2
      const centerY = y * pixelSize.value + pixelSize.value / 2
      const radius = pixelSize.value / 2 - (showBeadOutline.value ? 1 : 0)
      
      // 绘制圆圈 - 直接使用颜色，不做饱和度调整
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 0.9, 0, Math.PI * 2)
      ctx.fillStyle = color
      ctx.fill()
      
      // 添加珠子轮廓
      if (showBeadOutline.value) {
        ctx.strokeStyle = '#333333'
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }
  }
}

const downloadImage = () => {
  if (!canvasRef.value) return
  
  const link = document.createElement('a')
  link.download = `perler-bead-pattern.png`
  link.href = canvasRef.value.toDataURL('image/png')
  link.click()
}

const downloadPattern = () => {
  let pattern = `Perler Bead Pattern Guide\n`
  pattern += `=========================\n\n`
  pattern += `Pattern Size: ${outputWidth.value} × ${outputHeight.value} beads\n`
  pattern += `Bead Size: ${pixelSize.value}px\n`
  pattern += `Colors: ${actualColors.value.length}\n\n`
  pattern += `Color Palette:\n`
  actualColors.value.forEach((color, index) => {
    pattern += `${index + 1}. ${color}\n`
  })
  pattern += `\nPattern (${outputHeight.value} rows × ${outputWidth.value} columns):\n`
  
  const link = document.createElement('a')
  link.download = `perler-bead-pattern.txt`
  link.href = `data:text/plain,${encodeURIComponent(pattern)}`
  link.click()
}

const handleFooterNavigate = (link: { label: string; url: string }) => {
  window.location.href = link.url
}

watch([pixelSize, outputWidth, outputHeight, colorCount, showGrid, showBeadOutline], () => {
  if (currentImage.value && !isDefaultImage.value) {
    drawPixelArt()
  }
})

onMounted(() => {
  nextTick(() => {
    if (currentImage.value) {
      drawPixelArt()
    }
  })
})
</script>

<style scoped>
.perler-bead-page {
  min-height: 100vh;
  background: #f5f7fa;
}

.page-header {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin: 0 0 12px 0;
  font-weight: 700;
}

.page-header h2 {
  font-size: 1.2rem;
  margin: 0;
  font-weight: 400;
  opacity: 0.9;
}

.page-nav {
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #e5e7eb;
}

.back-home {
  color: #f59e0b;
  text-decoration: none;
  font-weight: 500;
}

.back-home:hover {
  text-decoration: underline;
}

.page-content {
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.main-section {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.upload-section {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.upload-section h3 {
  margin: 0 0 16px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
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
  border: 2px dashed #ddd;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s;
  color: #666;
}

.upload-label:hover {
  border-color: #f59e0b;
  background: #fffbeb;
}

.upload-hint {
  text-align: center;
  font-size: 0.85rem;
  color: #888;
  margin-top: 12px;
}

.pixel-settings {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.pixel-settings h3 {
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group:last-child {
  margin-bottom: 0;
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
  font-size: 1rem;
}

.setting-group input[type="checkbox"] {
  margin-right: 8px;
}

.setting-hint {
  font-size: 0.85rem;
  color: #888;
  margin: 6px 0 0 0;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.export-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 24px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.export-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.4);
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
  gap: 24px;
  margin-top: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 8px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-item .label {
  font-size: 0.85rem;
  color: #888;
}

.info-item .value {
  font-weight: 600;
  color: #333;
}

.color-palette {
  margin-top: 16px;
}

.color-palette h4 {
  margin: 0 0 12px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
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
  font-size: 0.85rem;
  color: #666;
  font-family: monospace;
}

.features-section {
  max-width: 1200px;
  margin: 30px auto;
  padding: 0 24px;
}

.features-header {
  text-align: center;
  padding: 30px 20px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.features-header h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
}

.try-more {
  max-width: 600px;
  margin: 30px auto;
  padding: 0 24px;
}

.try-more h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 20px 0;
}

.try-more-box {
  display: flex;
  justify-content: center;
}

@media (max-width: 900px) {
  .main-section {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    order: 2;
  }
  
  .canvas-section {
    order: 1;
  }
}

@media (max-width: 768px) {
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .page-header h2 {
    font-size: 1rem;
  }
  
  .info-panel {
    flex-wrap: wrap;
  }
}
</style>