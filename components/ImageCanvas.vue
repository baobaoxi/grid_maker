<template>
  <div class="canvas-container">
    <div class="image-wrapper">
      <img 
        :src="imageSrc" 
        ref="imageRef" 
        @load="onImageLoad" 
        class="original-image" 
        alt="online grid maker tool overlay on a sketch reference photo"
      />
      <canvas 
        ref="canvasRef" 
        class="grid-overlay"
        :style="canvasStyle"
        @mousedown="onMouseDown"
        @mousemove="onMouseMove"
        @mouseup="onMouseUp"
        @mouseleave="onMouseUp"
      ></canvas>
    </div>
    <div v-if="showInfo" class="preview-info">
      {{ infoLabel }}: {{ imageWidth }} × {{ imageHeight }} | {{ gridLabel }}: {{ gridTypesDisplay }}
    </div>
    <div v-if="gridOffset.x !== 0 || gridOffset.y !== 0" class="offset-info">
      Offset: {{ gridOffset.x }}px, {{ gridOffset.y }}px
      <button class="reset-offset-btn" @click="resetOffset">Reset</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import * as gridDrawers from '~/composables/gridDrawers'

const props = defineProps<{
  imageSrc: string
  gridTypes?: string[]
  gridCols?: number
  gridRows?: number
  gridColor?: string
  lineWidth?: number
  opacity?: number
  showInfo?: boolean
  infoLabel?: string
  gridLabel?: string
  showLabels?: boolean
}>()

const emit = defineEmits<{
  loaded: []
  dimensions: [dimensions: { width: number; height: number }]
}>()

const imageRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const imageWidth = ref(0)
const imageHeight = ref(0)
const imageLoaded = ref(false)

const gridOffset = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })

const gridTypesDisplay = computed(() => {
  const typeMap: Record<string, string> = {
    standard: 'Standard',
    fixed: 'Fixed Measurement',
    proportional: 'Proportional',
    diagonal: 'Diagonal Cell',
    ruleOfThirds: 'Rule of Thirds',
    goldenRatio: 'Golden Ratio',
    goldenSpiral: 'Golden Spiral',
    crossDiagonal: 'Cross-Diagonal Cells',
    portraitFace: 'Portrait Face Guide',
    loomisHead: 'Loomis Head Guide',
    figureProportion: 'Figure Proportion',
    muralScaling: 'Mural Scaling Grid',
    goldenTriangle: 'Golden Triangle',
    diagonalMethod: 'Diagonal Method',
    centerCross: 'Center Cross',
    ruleOfFifths: 'Rule of Fifths',
    quadrantGrid: 'Quadrant Grid',
    armature: 'Armature (14-line)',
    rabatment: 'Rabatment',
    baroqueDiagonal: 'Baroque Diagonal',
    sinisterDiagonal: 'Sinister Diagonal',
    reciprocalLines: 'Reciprocal Lines',
    root2: 'Root 2 (1:1.414)',
    root3: 'Root 3 (1:1.732)',
    root4: 'Root 4 (1:2)',
    root5: 'Root 5 (1:2.236)',
    phiRectangle: 'Phi Rectangle',
    rectangle15: '1.5 Rectangle (2:3)',
    onePoint: '1-Point Perspective',
    twoPoint: '2-Point Perspective',
    threePoint: '3-Point Perspective',
    isometric: 'Isometric',
    fisheye: '5-Point / Fisheye',
    dimetric: 'Dimetric',
    trimetric: 'Trimetric',
    anamorphic: 'Anamorphic',
    triangular: 'Triangular Grid',
    hexagonal: 'Hexagonal Grid',
    radial: 'Radial / Circular',
    dotGrid: 'Dot Grid',
    diamond: 'Diamond / Rhombus',
    polar: 'Polar / Spiral',
    crossHair: 'Cross-Hair Grid',
    flowerOfLife: 'Flower of Life',
    seedOfLife: 'Seed of Life',
    metatronsCube: "Metatron's Cube",
    vesicaPiscis: 'Vesica Piscis',
    sriYantra: 'Sri Yantra',
    treeOfLife: 'Tree of Life',
    merkaba: 'Merkaba',
    hexagram: 'Hexagram',
    pentagram: 'Pentagram',
    eggOfLife: 'Egg of Life',
    fruitOfLife: 'Fruit of Life',
    yinYang: 'Yin-Yang',
    enneagram: 'Enneagram',
    islamic8Point: 'Islamic 8-Point Star',
    islamic12Point: 'Islamic 12-Point Star',
    borromeanRings: 'Borromean Rings',
    torusField: 'Torus Field',
    ainSoph: 'Ain Soph',
    celticTriquetra: 'Celtic Triquetra',
    platonicSolids: 'Platonic Solids'
  }
  const types = props.gridTypes ?? []
  if (types.length === 0) return 'None'
  return types.map(t => typeMap[t] || t).join(', ')
})

const canvasStyle = computed(() => ({
  opacity: (props.opacity ?? 100) / 100,
  width: imageWidth.value > 0 ? imageWidth.value + 'px' : '100%',
  height: imageHeight.value > 0 ? imageHeight.value + 'px' : 'auto',
  transform: `translate(${gridOffset.value.x}px, ${gridOffset.value.y}px)`
}))

const gridDrawerMap: Record<string, (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number, cols?: number, rows?: number) => void> = {
  ruleOfThirds: gridDrawers.drawRuleOfThirds,
  goldenRatio: gridDrawers.drawGoldenRatio,
  goldenSpiral: gridDrawers.drawGoldenSpiral,
  diagonal: (ctx, width, height, color, lineWidth, cols, rows) => gridDrawers.drawDiagonalGrid(ctx, width, height, cols ?? 3, rows ?? 3, color, lineWidth),
  fixed: gridDrawers.drawFixedGrid,
  proportional: gridDrawers.drawProportionalGrid,
  crossDiagonal: gridDrawers.drawCrossDiagonal,
  portraitFace: gridDrawers.drawPortraitFace,
  loomisHead: gridDrawers.drawLoomisHead,
  figureProportion: gridDrawers.drawFigureProportion,
  muralScaling: (ctx, width, height, color, lineWidth, cols, rows) => gridDrawers.drawMuralScaling(ctx, width, height, cols ?? 4, rows ?? 4, color, lineWidth),
  goldenTriangle: gridDrawers.drawGoldenTriangle,
  diagonalMethod: gridDrawers.drawDiagonalMethod,
  centerCross: gridDrawers.drawCenterCross,
  ruleOfFifths: gridDrawers.drawRuleOfFifths,
  quadrantGrid: gridDrawers.drawQuadrantGrid,
  armature: gridDrawers.drawArmature,
  rabatment: gridDrawers.drawRabatment,
  baroqueDiagonal: gridDrawers.drawBaroqueDiagonal,
  sinisterDiagonal: gridDrawers.drawSinisterDiagonal,
  reciprocalLines: gridDrawers.drawReciprocalLines,
  root2: gridDrawers.drawRoot2,
  root3: gridDrawers.drawRoot3,
  root4: gridDrawers.drawRoot4,
  root5: gridDrawers.drawRoot5,
  phiRectangle: gridDrawers.drawPhiRectangle,
  rectangle15: gridDrawers.drawRectangle15,
  onePoint: gridDrawers.drawOnePointPerspective,
  twoPoint: gridDrawers.drawTwoPointPerspective,
  threePoint: gridDrawers.drawThreePointPerspective,
  isometric: gridDrawers.drawIsometric,
  fisheye: gridDrawers.drawFisheye,
  dimetric: gridDrawers.drawDimetric,
  trimetric: gridDrawers.drawTrimetric,
  anamorphic: gridDrawers.drawAnamorphic,
  triangular: gridDrawers.drawTriangularGrid,
  hexagonal: gridDrawers.drawHexagonalGrid,
  radial: gridDrawers.drawRadialGrid,
  dotGrid: gridDrawers.drawDotGrid,
  diamond: gridDrawers.drawDiamondGrid,
  polar: gridDrawers.drawPolarGrid,
  crossHair: gridDrawers.drawCrossHairGrid,
  flowerOfLife: gridDrawers.drawFlowerOfLife,
  seedOfLife: gridDrawers.drawSeedOfLife,
  metatronsCube: gridDrawers.drawMetatronsCube,
  vesicaPiscis: gridDrawers.drawVesicaPiscis,
  sriYantra: gridDrawers.drawSriYantra,
  treeOfLife: gridDrawers.drawTreeOfLife,
  merkaba: gridDrawers.drawMerkaba,
  hexagram: gridDrawers.drawHexagram,
  pentagram: gridDrawers.drawPentagram,
  eggOfLife: gridDrawers.drawEggOfLife,
  fruitOfLife: gridDrawers.drawFruitOfLife,
  yinYang: gridDrawers.drawYinYang,
  enneagram: gridDrawers.drawEnneagram,
  islamic8Point: gridDrawers.drawIslamic8PointStar,
  islamic12Point: gridDrawers.drawIslamic12PointStar,
  borromeanRings: gridDrawers.drawBorromeanRings,
  torusField: gridDrawers.drawTorusField,
  ainSoph: gridDrawers.drawAinSoph,
  celticTriquetra: gridDrawers.drawCelticTriquetra,
  platonicSolids: gridDrawers.drawPlatonicSolids,
  columnGrid: gridDrawers.drawColumnGrid,
  modularGrid: gridDrawers.drawModularGrid,
  baselineGrid: gridDrawers.drawBaselineGrid,
  manuscriptGrid: gridDrawers.drawManuscriptGrid,
  hierarchicalGrid: gridDrawers.drawHierarchicalGrid,
  spacingGrid: gridDrawers.drawSpacingGrid,
  comicPanel: gridDrawers.drawComicPanel,
  storyboardFrame: gridDrawers.drawStoryboardFrame,
  logoConstruction: gridDrawers.drawLogoConstruction,
  iconGrid: gridDrawers.drawIconGrid,
  twelveColumnWeb: gridDrawers.drawTwelveColumnWeb,
  mobileAppLayout: gridDrawers.drawMobileAppLayout,
  posterEditorial: gridDrawers.drawPosterEditorial,
  socialMediaSafe: gridDrawers.drawSocialMediaSafe,
  structuralGrid: gridDrawers.drawStructuralGrid,
  leCorbusierModulor: gridDrawers.drawLeCorbusierModulor,
  tartanGrid: gridDrawers.drawTartanGrid,
  standard: (ctx, width, height, color, lineWidth, cols, rows) => gridDrawers.drawStandardGrid(ctx, width, height, cols ?? 3, rows ?? 3, color, lineWidth),
  radialGrid: gridDrawers.drawRadialGrid,
  triangularGrid: gridDrawers.drawTriangularGrid,
  hexagonalGrid: gridDrawers.drawHexagonalGrid,
  isometricGrid: gridDrawers.drawIsometric,
  brickPattern: gridDrawers.drawBrickPattern,
  herringbonePattern: gridDrawers.drawHerringbonePattern,
  dynamicSymmetry: gridDrawers.drawDynamicSymmetry,
  root2Rectangle: gridDrawers.drawRoot2,
  root3Rectangle: gridDrawers.drawRoot3,
  root4Rectangle: gridDrawers.drawRoot4,
  goldenRectangle: gridDrawers.drawGoldenRectangle,
  silverRectangle: gridDrawers.drawSilverRectangle,
  onePointPerspective: gridDrawers.drawOnePointPerspective,
  twoPointPerspective: gridDrawers.drawTwoPointPerspective,
  threePointPerspective: gridDrawers.drawThreePointPerspective,
  perspectiveGrid: gridDrawers.drawPerspectiveGrid,
  tileGrid: gridDrawers.drawTileGrid,
  mosaicGrid: gridDrawers.drawMosaicGrid,
  stainedGlass: gridDrawers.drawStainedGlass,
  quiltPattern: gridDrawers.drawQuiltPattern,
  crossStitch: gridDrawers.drawCrossStitch,
  pixelArt: gridDrawers.drawPixelArt,
  metatronCube: gridDrawers.drawMetatronsCube,
  torusGrid: gridDrawers.drawTorusField,
  merkabaGrid: gridDrawers.drawMerkaba,
  bookCover: gridDrawers.drawBookCover,
  posterTemplate: gridDrawers.drawPosterTemplate,
  businessCard: gridDrawers.drawBusinessCard,
  socialMediaPost: gridDrawers.drawSocialMediaPost,
  floorPlan: gridDrawers.drawFloorPlan,
  elevationGrid: gridDrawers.drawElevationGrid,
  sectionGrid: gridDrawers.drawSectionGrid,
  sitePlan: gridDrawers.drawSitePlan
}

const drawGrid = () => {
  if (!imageRef.value || !canvasRef.value || !imageLoaded.value) return
  
  const img = imageRef.value
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return
  
  const displayWidth = img.offsetWidth
  const displayHeight = img.offsetHeight
  
  if (displayWidth === 0 || displayHeight === 0) return
  
  canvas.width = displayWidth
  canvas.height = displayHeight
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  ctx.strokeStyle = props.gridColor ?? '#ff0000'
  ctx.lineWidth = props.lineWidth ?? 2
  
  const gridTypes = props.gridTypes ?? []
  const color = props.gridColor ?? '#ff0000'
  const lineWidth = props.lineWidth ?? 2
  const cols = props.gridCols ?? 3
  const rows = props.gridRows ?? 3
  
  gridTypes.forEach(gridType => {
    ctx.save()
    const drawer = gridDrawerMap[gridType] || gridDrawerMap.standard
    drawer(ctx, canvas.width, canvas.height, color, lineWidth, cols, rows)
    ctx.restore()
  })
  
  if (props.showLabels) {
    const firstType = gridTypes.find(t => t !== 'goldenSpiral' && t !== 'portraitFace' && t !== 'loomisHead' && t !== 'figureProportion') || gridTypes[0]
    if (firstType && !['goldenSpiral', 'portraitFace', 'loomisHead', 'figureProportion'].includes(firstType)) {
      gridDrawers.drawLabels(ctx, canvas.width, canvas.height, cols, rows, color, firstType)
    }
  }
}

const onImageLoad = () => {
  if (!imageRef.value) return
  
  imageWidth.value = imageRef.value.offsetWidth
  imageHeight.value = imageRef.value.offsetHeight
  imageLoaded.value = true
  
  drawGrid()
  
  const dimensions = { width: imageWidth.value, height: imageHeight.value }
  emit('loaded')
  emit('dimensions', dimensions)
}

const onMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  dragStart.value = { x: e.clientX - gridOffset.value.x, y: e.clientY - gridOffset.value.y }
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value) return
  
  gridOffset.value = {
    x: e.clientX - dragStart.value.x,
    y: e.clientY - dragStart.value.y
  }
}

const onMouseUp = () => {
  isDragging.value = false
}

const resetOffset = () => {
  gridOffset.value = { x: 0, y: 0 }
}

watch(() => [props.gridTypes, props.gridColor, props.lineWidth, props.opacity, props.gridCols, props.gridRows], () => {
  drawGrid()
}, { deep: true })

watch(() => props.imageSrc, () => {
  imageLoaded.value = false
  gridOffset.value = { x: 0, y: 0 }
})

onMounted(() => {
  if (imageRef.value && imageRef.value.complete) {
    onImageLoad()
  }
  
  window.addEventListener('resize', handleResize)
})

const handleResize = () => {
  if (imageLoaded.value && imageRef.value) {
    imageWidth.value = imageRef.value.offsetWidth
    imageHeight.value = imageRef.value.offsetHeight
    drawGrid()
  }
}

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const getCanvasWithGrid = (): HTMLCanvasElement | null => {
  if (!imageRef.value || !imageLoaded.value) return null
  
  const img = imageRef.value
  const canvas = document.createElement('canvas')
  canvas.width = img.naturalWidth
  canvas.height = img.naturalHeight
  
  const ctx = canvas.getContext('2d')
  if (!ctx) return null
  
  ctx.drawImage(img, 0, 0)
  
  const displayWidth = img.offsetWidth
  const displayHeight = img.offsetHeight
  
  if (displayWidth === 0 || displayHeight === 0) return null
  
  ctx.strokeStyle = props.gridColor ?? '#ff0000'
  ctx.lineWidth = props.lineWidth ?? 2
  
  const gridTypes = props.gridTypes ?? []
  const color = props.gridColor ?? '#ff0000'
  const lineWidth = props.lineWidth ?? 2
  const cols = props.gridCols ?? 3
  const rows = props.gridRows ?? 3
  
  const scaleX = canvas.width / displayWidth
  
  gridTypes.forEach(gridType => {
    ctx.save()
    const drawer = gridDrawerMap[gridType] || gridDrawerMap.standard
    drawer(ctx, canvas.width, canvas.height, color, lineWidth * scaleX, cols, rows)
    ctx.restore()
  })
  
  return canvas
}

const getSvgWithGrid = (): string | null => {
  if (!imageRef.value || !imageLoaded.value) return null

  const img = imageRef.value
  const width = img.naturalWidth
  const height = img.naturalHeight

  const gridTypes = props.gridTypes ?? []
  const color = props.gridColor ?? '#ff0000'
  const lineWidth = props.lineWidth ?? 2
  const cols = props.gridCols ?? 3
  const rows = props.gridRows ?? 3

  const scaleX = width / img.offsetWidth

  const imageDataUrl = img.src

  let gridPaths = ''
  gridTypes.forEach(gridType => {
    const drawer = gridDrawerMap[gridType] || gridDrawerMap.standard
    const pathCtx = { beginPath: () => {}, moveTo: (x: number, y: number) => {}, lineTo: (x: number, y: number) => {}, stroke: () => {}, save: () => {}, restore: () => {}, strokeStyle: '', lineWidth: 0 } as any
    drawer(pathCtx, width, height, color, lineWidth * scaleX, cols, rows)
  })

  const generateGridLines = (): string => {
    const strokeWidth = lineWidth * scaleX
    const opacity = (props.opacity ?? 100) / 100
    let lines = ''

    if (gridTypes.includes('standard') || gridTypes.length === 0) {
      for (let i = 1; i < cols; i++) {
        const x = (width / cols) * i
        lines += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
      }
      for (let i = 1; i < rows; i++) {
        const y = (height / rows) * i
        lines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
      }
    }

    gridTypes.forEach(gridType => {
      if (gridType === 'ruleOfThirds') {
        for (let i = 1; i < 3; i++) {
          const x = (width / 3) * i
          lines += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        }
        for (let i = 1; i < 3; i++) {
          const y = (height / 3) * i
          lines += `<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        }
      } else if (gridType === 'goldenRatio') {
        const phi = 1.618033988749895
        const x1 = width / phi
        const x2 = width - x1
        const y1 = height / phi
        const y2 = height - y1
        lines += `<line x1="${x1}" y1="0" x2="${x1}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        lines += `<line x1="${x2}" y1="0" x2="${x2}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        lines += `<line x1="0" y1="${y1}" x2="${width}" y2="${y1}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        lines += `<line x1="0" y1="${y2}" x2="${width}" y2="${y2}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
      } else if (gridType === 'diagonal') {
        lines += `<line x1="0" y1="0" x2="${width}" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        lines += `<line x1="${width}" y1="0" x2="0" y2="${height}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
      } else if (gridType === 'centerCross') {
        const cx = width / 2
        const cy = height / 2
        const crossSize = Math.min(width, height) * 0.1
        lines += `<line x1="${cx - crossSize}" y1="${cy}" x2="${cx + crossSize}" y2="${cy}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
        lines += `<line x1="${cx}" y1="${cy - crossSize}" x2="${cx}" y2="${cy + crossSize}" stroke="${color}" stroke-width="${strokeWidth}" stroke-opacity="${opacity}" />`
      }
    })

    return lines
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <image xlink:href="${imageDataUrl}" width="${width}" height="${height}" />
  <g id="grid-lines">
    ${generateGridLines()}
  </g>
</svg>`

  return svg
}

defineExpose({
  getCanvasWithGrid,
  getSvgWithGrid
})
</script>

<style scoped>
.canvas-container {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 100%;
}

.image-wrapper {
  position: relative;
  width: 100%;
  display: inline-block;
}

.original-image {
  display: block;
  width: 100%;
  height: auto;
  max-width: 100%;
  user-select: none;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: auto;
  cursor: move;
}

.preview-info {
  margin-top: 8px;
  font-size: 0.85rem;
  color: #666;
  text-align: center;
  padding: 4px 8px;
  background: #f5f5f5;
  border-radius: 4px;
}

.offset-info {
  margin-top: 4px;
  font-size: 0.8rem;
  color: #888;
  text-align: center;
  padding: 4px 8px;
  background: #fff8e1;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.reset-offset-btn {
  padding: 2px 8px;
  font-size: 0.75rem;
  background: #ff9800;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background 0.2s;
}

.reset-offset-btn:hover {
  background: #f57c00;
}
</style>