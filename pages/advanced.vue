<template>
  <div class="advanced-page">
    <AppNavbar></AppNavbar>

    <div class="page-header">
      <div class="header-content">
        <h1>Advanced Grid Tools</h1>
        <p>Professional grid overlay tools with full customization</p>
      </div>
      <div class="header-image">
        <img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&amp;h=400&amp;fit=crop" alt="Advanced grid overlay"></img>
        <div class="header-overlay"></div>
      </div>
    </div>

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
            <p class="upload-hint">JPG, PNG, GIF supported</p>
          </div>

          <div class="grid-settings">
            <h3>Grid Settings</h3>

            <div class="setting-group" v-if="selectedPatterns.includes('standardGrid') || selectedPatterns.includes('diagonalGrid') || selectedPatterns.includes('muralScaling')">
              <label>Rows: {{ gridSettings.rows }}</label>
              <input type="range" v-model.number="gridSettings.rows" min="2" max="20" />
            </div>

            <div class="setting-group" v-if="selectedPatterns.includes('standardGrid') || selectedPatterns.includes('diagonalGrid') || selectedPatterns.includes('muralScaling')">
              <label>Columns: {{ gridSettings.cols }}</label>
              <input type="range" v-model.number="gridSettings.cols" min="2" max="20" />
            </div>

            <div class="setting-group">
              <label>Line Width: {{ gridSettings.lineWidth }}px</label>
              <input type="range" v-model.number="gridSettings.lineWidth" min="1" max="10" />
            </div>

            <div class="setting-group">
              <label>Opacity: {{ gridSettings.opacity }}%</label>
              <input type="range" v-model.number="gridSettings.opacity" min="10" max="100" />
            </div>

            <div class="setting-group">
              <label>Grid Color</label>
              <div class="color-picker">
                <input type="color" v-model="gridSettings.color" />
                <div class="preset-colors">
                  <button v-for="color in presetColors" :key="color" :style="{ backgroundColor: color }" class="color-btn" @click="gridSettings.color = color"></button>
                </div>
              </div>
            </div>
          </div>

          <div class="grid-categories">
            <h3>Grid Patterns <span class="hint">(Multi-select supported)</span></h3>
            <div v-for="category in gridCategories" :key="category.name" class="grid-category">
              <div class="category-header" @click="toggleCategory(category.name)">
                <span>{{ category.label }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" :class="{ rotated: expandedCategories.includes(category.name) }">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div v-show="expandedCategories.includes(category.name)" class="category-content">
                <button v-for="pattern in category.patterns" :key="pattern.value" :class="['pattern-btn', { active: selectedPatterns.includes(pattern.value) }]" @click="togglePattern(pattern.value)">
                  {{ pattern.label }}
                </button>
              </div>
            </div>
            <div v-if="selectedPatterns.length > 0" class="selected-patterns">
              <span class="selected-label">Selected: {{ selectedPatterns.length }}</span>
              <button class="clear-btn" @click="clearAllPatterns">Clear All</button>
            </div>
          </div>

          <div class="export-section">
            <button class="export-btn" @click="downloadImage('png')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download PNG
            </button>
            <button class="export-btn" @click="downloadImage('jpg')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download JPG
            </button>
            <button class="export-btn" @click="downloadImage('svg')">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download SVG
            </button>
            <button class="export-btn print-btn" @click="printImage">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="3"></rect>
              </svg>
              Print
            </button>
          </div>
        </div>

        <div class="canvas-section">
          <div class="canvas-container">
            <img ref="imageRef" :src="currentImage || defaultImage" alt="Preview" class="preview-image" @load="drawGrid" />
            <canvas ref="canvasRef" class="grid-canvas" />
          </div>
          <div v-if="!currentImage" class="default-hint">
            <p>Default preview image</p>
            <p class="hint-text">Upload your own image to customize</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import AppNavbar from '~/components/AppNavbar.vue'
import {
  drawStandardGrid,
  drawRuleOfThirds,
  drawGoldenRatio,
  drawGoldenSpiral,
  drawGoldenTriangle,
  drawDiagonalMethod,
  drawCenterCross,
  drawRuleOfFifths,
  drawQuadrantGrid,
  drawDiagonalGrid,
  drawFixedGrid,
  drawProportionalGrid,
  drawCrossDiagonal,
  drawPortraitFace,
  drawLoomisHead,
  drawFigureProportion,
  drawMuralScaling,
  drawOnePointPerspective,
  drawTwoPointPerspective,
  drawThreePointPerspective,
  drawIsometric,
  drawFisheye,
  drawDimetric,
  drawTrimetric,
  drawAnamorphic,
  drawPerspectiveGrid,
  drawTriangularGrid,
  drawHexagonalGrid,
  drawRadialGrid,
  drawDotGrid,
  drawDiamondGrid,
  drawPolarGrid,
  drawCrossHairGrid,
  drawBrickPattern,
  drawHerringbonePattern,
  drawTileGrid,
  drawMosaicGrid,
  drawStainedGlass,
  drawQuiltPattern,
  drawCrossStitch,
  drawPixelArt
} from '~/composables/gridDrawers'

const currentImage = ref('')
const defaultImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
const imageRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const selectedPatterns = ref<string[]>(['standardGrid'])
const expandedCategories = ref(['standard', 'composition'])

const gridSettings = reactive({
  rows: 3,
  cols: 4,
  opacity: 50,
  lineWidth: 2,
  color: '#8b5cf6'
})

const presetColors = ['#000000', '#ffffff', '#8b5cf6', '#ef4444', '#22c55e', '#3b82f6', '#f59e0b', '#ec4899']

const gridCategories = [
  {
    name: 'standard',
    label: 'Standard Grids',
    patterns: [
      { value: 'standardGrid', label: 'Standard Grid' },
      { value: 'diagonalGrid', label: 'Diagonal Grid' },
      { value: 'fixedGrid', label: 'Fixed Grid' },
      { value: 'proportionalGrid', label: 'Proportional Grid' },
      { value: 'crossDiagonal', label: 'Cross Diagonal' },
      { value: 'muralScaling', label: 'Mural Scaling' }
    ]
  },
  {
    name: 'composition',
    label: 'Composition Guides',
    patterns: [
      { value: 'ruleOfThirds', label: 'Rule of Thirds' },
      { value: 'goldenRatio', label: 'Golden Ratio' },
      { value: 'goldenSpiral', label: 'Golden Spiral' },
      { value: 'goldenTriangle', label: 'Golden Triangle' },
      { value: 'diagonalMethod', label: 'Diagonal Method' },
      { value: 'centerCross', label: 'Center Cross' },
      { value: 'ruleOfFifths', label: 'Rule of Fifths' },
      { value: 'quadrantGrid', label: 'Quadrant Grid' }
    ]
  },
  {
    name: 'perspective',
    label: 'Perspective Guides',
    patterns: [
      { value: 'onePointPerspective', label: '1-Point Perspective' },
      { value: 'twoPointPerspective', label: '2-Point Perspective' },
      { value: 'threePointPerspective', label: '3-Point Perspective' },
      { value: 'isometric', label: 'Isometric' },
      { value: 'dimetric', label: 'Dimetric' },
      { value: 'trimetric', label: 'Trimetric' },
      { value: 'fisheye', label: 'Fisheye' },
      { value: 'anamorphic', label: 'Anamorphic' },
      { value: 'perspectiveGrid', label: 'Perspective Grid' }
    ]
  },
  {
    name: 'artist',
    label: 'Artist Guides',
    patterns: [
      { value: 'portraitFace', label: 'Portrait Face' },
      { value: 'loomisHead', label: 'Loomis Head' },
      { value: 'figureProportion', label: 'Figure Proportion' }
    ]
  },
  {
    name: 'specialty',
    label: 'Specialty Patterns',
    patterns: [
      { value: 'triangularGrid', label: 'Triangular Grid' },
      { value: 'hexagonalGrid', label: 'Hexagonal Grid' },
      { value: 'radialGrid', label: 'Radial Grid' },
      { value: 'dotGrid', label: 'Dot Grid' },
      { value: 'diamondGrid', label: 'Diamond Grid' },
      { value: 'polarGrid', label: 'Polar Grid' },
      { value: 'crossHairGrid', label: 'Cross Hair Grid' }
    ]
  },
  {
    name: 'patterns',
    label: 'Design Patterns',
    patterns: [
      { value: 'brickPattern', label: 'Brick Pattern' },
      { value: 'herringbonePattern', label: 'Herringbone Pattern' },
      { value: 'tileGrid', label: 'Tile Grid' },
      { value: 'mosaicGrid', label: 'Mosaic Grid' },
      { value: 'stainedGlass', label: 'Stained Glass' },
      { value: 'quiltPattern', label: 'Quilt Pattern' },
      { value: 'crossStitch', label: 'Cross Stitch' },
      { value: 'pixelArt', label: 'Pixel Art' }
    ]
  }
]

const togglePattern = (patternValue: string) => {
  const index = selectedPatterns.value.indexOf(patternValue)
  if (index > -1) {
    selectedPatterns.value.splice(index, 1)
  } else {
    selectedPatterns.value.push(patternValue)
  }
  drawGrid()
}

const toggleCategory = (categoryName: string) => {
  const index = expandedCategories.value.indexOf(categoryName)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryName)
  }
}

const clearAllPatterns = () => {
  selectedPatterns.value = []
  drawGrid()
}

const drawGrid = () => {
  const canvas = canvasRef.value
  const img = imageRef.value
  if (!canvas || !img) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const rect = img.getBoundingClientRect()
  
  canvas.width = rect.width
  canvas.height = rect.height

  const width = canvas.width
  const height = canvas.height
  const color = gridSettings.color
  const alpha = gridSettings.opacity / 100
  const lineWidth = gridSettings.lineWidth

  ctx.clearRect(0, 0, width, height)
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  ctx.globalAlpha = alpha

  if (selectedPatterns.value.length === 0) {
    return
  }

  selectedPatterns.value.forEach(pattern => {
    drawPattern(pattern, ctx, width, height)
  })
}

const drawPattern = (pattern: string, ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const color = gridSettings.color
  const lineWidth = gridSettings.lineWidth

  switch (pattern) {
    case 'standardGrid':
      drawStandardGrid(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth)
      break
    case 'diagonalGrid':
      drawDiagonalGrid(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth)
      break
    case 'fixedGrid':
      drawFixedGrid(ctx, width, height, color, lineWidth)
      break
    case 'proportionalGrid':
      drawProportionalGrid(ctx, width, height, color, lineWidth)
      break
    case 'crossDiagonal':
      drawCrossDiagonal(ctx, width, height, color, lineWidth)
      break
    case 'muralScaling':
      drawMuralScaling(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth)
      break
    case 'ruleOfThirds':
      drawRuleOfThirds(ctx, width, height, color, lineWidth)
      break
    case 'goldenRatio':
      drawGoldenRatio(ctx, width, height, color, lineWidth)
      break
    case 'goldenSpiral':
      drawGoldenSpiral(ctx, width, height, color, lineWidth)
      break
    case 'goldenTriangle':
      drawGoldenTriangle(ctx, width, height, color, lineWidth)
      break
    case 'diagonalMethod':
      drawDiagonalMethod(ctx, width, height, color, lineWidth)
      break
    case 'centerCross':
      drawCenterCross(ctx, width, height, color, lineWidth)
      break
    case 'ruleOfFifths':
      drawRuleOfFifths(ctx, width, height, color, lineWidth)
      break
    case 'quadrantGrid':
      drawQuadrantGrid(ctx, width, height, color, lineWidth)
      break
    case 'onePointPerspective':
      drawOnePointPerspective(ctx, width, height, color, lineWidth)
      break
    case 'twoPointPerspective':
      drawTwoPointPerspective(ctx, width, height, color, lineWidth)
      break
    case 'threePointPerspective':
      drawThreePointPerspective(ctx, width, height, color, lineWidth)
      break
    case 'isometric':
      drawIsometric(ctx, width, height, color, lineWidth)
      break
    case 'dimetric':
      drawDimetric(ctx, width, height, color, lineWidth)
      break
    case 'trimetric':
      drawTrimetric(ctx, width, height, color, lineWidth)
      break
    case 'fisheye':
      drawFisheye(ctx, width, height, color, lineWidth)
      break
    case 'anamorphic':
      drawAnamorphic(ctx, width, height, color, lineWidth)
      break
    case 'perspectiveGrid':
      drawPerspectiveGrid(ctx, width, height, color, lineWidth)
      break
    case 'portraitFace':
      drawPortraitFace(ctx, width, height, color, lineWidth)
      break
    case 'loomisHead':
      drawLoomisHead(ctx, width, height, color, lineWidth)
      break
    case 'figureProportion':
      drawFigureProportion(ctx, width, height, color, lineWidth)
      break
    case 'triangularGrid':
      drawTriangularGrid(ctx, width, height, color, lineWidth)
      break
    case 'hexagonalGrid':
      drawHexagonalGrid(ctx, width, height, color, lineWidth)
      break
    case 'radialGrid':
      drawRadialGrid(ctx, width, height, color, lineWidth)
      break
    case 'dotGrid':
      drawDotGrid(ctx, width, height, color, lineWidth)
      break
    case 'diamondGrid':
      drawDiamondGrid(ctx, width, height, color, lineWidth)
      break
    case 'polarGrid':
      drawPolarGrid(ctx, width, height, color, lineWidth)
      break
    case 'crossHairGrid':
      drawCrossHairGrid(ctx, width, height, color, lineWidth)
      break
    case 'brickPattern':
      drawBrickPattern(ctx, width, height, color, lineWidth)
      break
    case 'herringbonePattern':
      drawHerringbonePattern(ctx, width, height, color, lineWidth)
      break
    case 'tileGrid':
      drawTileGrid(ctx, width, height, color, lineWidth)
      break
    case 'mosaicGrid':
      drawMosaicGrid(ctx, width, height, color, lineWidth)
      break
    case 'stainedGlass':
      drawStainedGlass(ctx, width, height, color, lineWidth)
      break
    case 'quiltPattern':
      drawQuiltPattern(ctx, width, height, color, lineWidth)
      break
    case 'crossStitch':
      drawCrossStitch(ctx, width, height, color, lineWidth)
      break
    case 'pixelArt':
      drawPixelArt(ctx, width, height, color, lineWidth)
      break
  }
}

const handleImageUpload = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      currentImage.value = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
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
  ctx.globalAlpha = gridSettings.opacity / 100
  ctx.drawImage(canvas, 0, 0)

  const link = document.createElement('a')
  link.download = `grid.${format}`
  link.href = exportCanvas.toDataURL(`image/${format}`, 0.95)
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
  ctx.globalAlpha = gridSettings.opacity / 100
  ctx.drawImage(canvas, 0, 0)

  const printWindow = window.open('', '_blank')
  if (printWindow) {
    const imgSrc = printCanvas.toDataURL('image/png')
    printWindow.document.write('<img src="' + imgSrc + '" onload="window.print();window.close();">')
    printWindow.document.close()
  }
}

watch([() => gridSettings.lineWidth, () => gridSettings.opacity, () => gridSettings.color], () => {
  drawGrid()
})

onMounted(() => {
  if (imageRef.value?.complete) {
    drawGrid()
  }
})
</script>

<style scoped>
.advanced-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.page-header {
  position: relative;
  height: 200px;
  overflow: hidden;
  margin-bottom: 30px;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(66, 153, 225, 0.6));
}

.header-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 40px;
}

.header-content h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.header-content p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.page-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
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
  margin: 0 0 16px 0;
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 12px;
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
  justify-content: center;
  padding: 24px;
  border: 2px dashed #d1d5db;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  color: #6b7280;
}

.upload-label:hover {
  border-color: #8b5cf6;
  color: #8b5cf6;
}

.upload-label svg {
  margin-bottom: 10px;
}

.upload-hint {
  margin: 8px 0 0 0;
  font-size: 0.75rem;
  color: #9ca3af;
}

.grid-settings {
  margin-bottom: 24px;
}

.setting-group {
  margin-bottom: 20px;
}

.setting-group label {
  display: block;
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
}

.number-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.875rem;
}

input[type="range"] {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e5e7eb;
  outline: none;
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #8b5cf6;
  cursor: pointer;
}

input[type="color"] {
  width: 50px;
  height: 40px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.color-picker {
  display: flex;
  align-items: center;
  gap: 12px;
}

.preset-colors {
  display: flex;
  gap: 6px;
}

.color-btn {
  width: 32px;
  height: 32px;
  border: 2px solid transparent;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.color-btn:hover {
  transform: scale(1.1);
}

.combination-options {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.combo-btn {
  padding: 6px 12px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  background: white;
  font-size: 0.875rem;
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
  gap: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  color: #374151;
}

.style-radio input[type="radio"] {
  display: none;
}

.style-radio input[type="radio"]:checked + .style-icon {
  color: #8b5cf6;
}

.style-icon {
  font-size: 1.25rem;
}

.grid-categories {
  margin-bottom: 24px;
}

.grid-category {
  margin-bottom: 8px;
}

.category-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #f9fafb;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  transition: all 0.2s;
}

.category-header:hover {
  background: #f3f4f6;
}

.category-header svg {
  transition: transform 0.2s;
}

.category-header svg.rotated {
  transform: rotate(180deg);
}

.category-content {
  padding: 8px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.pattern-btn {
  padding: 6px 10px;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  background: white;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
}

.pattern-btn:hover {
  border-color: #8b5cf6;
}

.pattern-btn.active {
  background: #8b5cf6;
  color: white;
  border-color: #8b5cf6;
}

.custom-grid-settings {
  margin-bottom: 24px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
}

.custom-grid-settings h3 {
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid #e5e7eb;
}

.export-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.export-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px;
  border: none;
  border-radius: 6px;
  background: #8b5cf6;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.export-btn:hover {
  background: #7c3aed;
}

.export-btn.print-btn {
  background: #6b7280;
}

.export-btn.print-btn:hover {
  background: #4b5563;
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
  max-width: 100%;
  overflow: hidden;
  border-radius: 8px;
}

.preview-image {
  display: block;
  width: 100%;
  height: auto;
}

.grid-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.default-hint {
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.7);
  padding: 12px 16px;
  border-radius: 8px;
  color: white;
  text-align: center;
}

.default-hint p {
  margin: 0 0 4px 0;
  font-size: 0.875rem;
}

.default-hint .hint-text {
  margin: 0;
  font-size: 0.75rem;
  opacity: 0.8;
}

@media (max-width: 900px) {
  .main-section {
    grid-template-columns: 1fr;
  }

  .sidebar {
    position: static;
  }
}
</style>