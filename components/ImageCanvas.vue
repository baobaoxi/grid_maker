<template>
  <div class="canvas-container">
    <div class="image-wrapper">
      <img 
        :src="imageSrc" 
        ref="imageRef" 
        @load="onImageLoad" 
        class="original-image" 
      />
      <canvas 
        ref="canvasRef" 
        class="grid-overlay"
        :style="{ opacity: opacity / 100, width: imageWidth + 'px', height: imageHeight + 'px' }"
      ></canvas>
    </div>
    <div v-if="showInfo" class="preview-info">
      {{ infoLabel }}: {{ imageWidth }} × {{ imageHeight }} | {{ gridLabel }}: {{ gridTypeDisplay }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps<{
  imageSrc: string
  gridType?: string
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

defineEmits<{
  loaded: []
  dimensions: [dimensions: { width: number; height: number }]
}>()

const imageRef = ref<HTMLImageElement | null>(null)
const canvasRef = ref<HTMLCanvasElement | null>(null)
const imageWidth = ref(0)
const imageHeight = ref(0)
const imageLoaded = ref(false)

const gridTypeDisplay = computed(() => {
  const typeMap: Record<string, string> = {
    standard: 'Standard',
    fixed: 'Fixed Measurement',
    proportional: 'Proportional',
    diagonal: 'Diagonal Cell',
    ruleOfThirds: 'Rule of Thirds',
    goldenRatio: 'Golden Ratio',
    goldenSpiral: 'Golden Spiral'
  }
  return typeMap[props.gridType ?? 'standard'] || 'Standard'
})

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
  
  const gridType = props.gridType ?? 'standard'
  
  switch (gridType) {
    case 'ruleOfThirds':
      drawRuleOfThirds(ctx, canvas.width, canvas.height)
      break
    case 'goldenRatio':
      drawGoldenRatio(ctx, canvas.width, canvas.height)
      break
    case 'goldenSpiral':
      drawGoldenSpiral(ctx, canvas.width, canvas.height)
      break
    case 'diagonal':
      drawDiagonalGrid(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3)
      break
    case 'fixed':
      drawFixedGrid(ctx, canvas.width, canvas.height)
      break
    case 'proportional':
      drawProportionalGrid(ctx, canvas.width, canvas.height)
      break
    default:
      drawStandardGrid(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3)
  }
  
  if (props.showLabels && gridType !== 'goldenSpiral') {
    drawLabels(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3, props.gridColor ?? '#ff0000', gridType)
  }
}

const drawStandardGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number) => {
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 1; i < rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
}

const drawRuleOfThirds = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const colWidth = width / 3
  const rowHeight = height / 3
  
  for (let i = 1; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 1; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
  
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.globalAlpha = 0.3
  ctx.fillRect(colWidth, rowHeight, colWidth, rowHeight)
  ctx.globalAlpha = 1
}

const drawGoldenRatio = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  
  const verticalDivider = width / goldenRatio
  const horizontalDivider = height / goldenRatio
  
  ctx.beginPath()
  ctx.moveTo(verticalDivider, 0)
  ctx.lineTo(verticalDivider, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, horizontalDivider)
  ctx.lineTo(width, horizontalDivider)
  ctx.stroke()
  
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.globalAlpha = 0.2
  ctx.fillRect(0, 0, verticalDivider, horizontalDivider)
  ctx.fillRect(verticalDivider, horizontalDivider, width - verticalDivider, height - horizontalDivider)
  ctx.globalAlpha = 1
  
  ctx.font = '12px Arial'
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'bottom'
  ctx.fillText('φ ≈ 1.618', 10, height - 10)
}

const drawGoldenSpiral = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  const minDimension = Math.min(width, height)
  let currentWidth = minDimension
  let currentHeight = minDimension
  let x = 0
  let y = 0
  let direction = 0
  
  ctx.lineWidth = props.lineWidth ?? 2
  ctx.strokeStyle = props.gridColor ?? '#ff0000'
  
  ctx.beginPath()
  
  while (currentWidth > 5) {
    if (direction % 4 === 0) {
      ctx.moveTo(x + currentWidth, y)
      ctx.lineTo(x + currentWidth, y + currentHeight)
      y += currentHeight
    } else if (direction % 4 === 1) {
      ctx.moveTo(x + currentWidth, y)
      ctx.lineTo(x, y)
      x += currentWidth
    } else if (direction % 4 === 2) {
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + currentHeight)
      y -= currentHeight
    } else {
      ctx.moveTo(x, y)
      ctx.lineTo(x + currentWidth, y)
      x -= currentWidth
    }
    
    const temp = currentWidth
    currentWidth = currentHeight / goldenRatio
    currentHeight = temp
    direction++
  }
  
  ctx.stroke()
  
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) / 4
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, 4, 0, Math.PI * 2)
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.fill()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, maxRadius, -Math.PI / 2, Math.PI / 2)
  ctx.strokeStyle = props.gridColor ?? '#ff0000'
  ctx.setLineDash([5, 5])
  ctx.stroke()
  ctx.setLineDash([])
}

const drawDiagonalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number) => {
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 1; i < rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x1 = col * colWidth
      const y1 = row * rowHeight
      const x2 = x1 + colWidth
      const y2 = y1 + rowHeight
      
      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(x2, y1)
      ctx.lineTo(x1, y2)
      ctx.stroke()
    }
  }
}

const drawFixedGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const unit = Math.min(width, height) / 10
  
  for (let x = unit; x < width; x += unit) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  
  for (let y = unit; y < height; y += unit) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.font = 'bold 10px Arial'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  
  for (let i = 1; i * unit < width; i++) {
    ctx.fillText(`${i * 10}%`, i * unit + 2, 2)
  }
}

const drawProportionalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const proportions = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9]
  
  proportions.forEach(p => {
    ctx.beginPath()
    ctx.moveTo(width * p, 0)
    ctx.lineTo(width * p, height)
    ctx.setLineDash(p === 0.5 ? [] : [3, 3])
    ctx.stroke()
    ctx.setLineDash([])
    
    ctx.beginPath()
    ctx.moveTo(0, height * p)
    ctx.lineTo(width, height * p)
    ctx.setLineDash(p === 0.5 ? [] : [3, 3])
    ctx.stroke()
    ctx.setLineDash([])
  })
  
  ctx.fillStyle = props.gridColor ?? '#ff0000'
  ctx.font = '10px Arial'
  ctx.textAlign = 'left'
  ctx.textBaseline = 'top'
  
  proportions.forEach(p => {
    if (p * width < width - 30) {
      ctx.fillText(`${Math.round(p * 100)}%`, p * width + 2, 2)
    }
  })
}

const drawLabels = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number, color: string, gridType: string) => {
  ctx.fillStyle = color
  
  if (gridType === 'ruleOfThirds') {
    ctx.font = 'bold 14px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    
    const colWidth = width / 3
    const rowHeight = height / 3
    
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    let idx = 0
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const x = col * colWidth + colWidth / 2
        const y = row * rowHeight + rowHeight / 2
        ctx.fillText(labels[idx], x, y)
        idx++
      }
    }
  } else if (gridType === 'goldenRatio') {
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const goldenRatio = (1 + Math.sqrt(5)) / 2
    const vDiv = width / goldenRatio
    const hDiv = height / goldenRatio
    
    ctx.fillText('A', vDiv / 2, hDiv / 2)
    ctx.fillText('B', width - vDiv / 2, hDiv / 2)
    ctx.fillText('C', vDiv / 2, height - hDiv / 2)
    ctx.fillText('D', width - vDiv / 2, height - hDiv / 2)
  } else {
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    const colWidth = width / cols
    const rowHeight = height / rows
    
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const letter = String.fromCharCode(65 + col)
        const label = `${letter}${row + 1}`
        const x = colWidth * (col + 1) - 4
        const y = rowHeight * (row + 1) - 4
        ctx.fillText(label, x, y)
      }
    }
  }
}

const onImageLoad = () => {
  if (imageRef.value) {
    imageLoaded.value = true
    requestAnimationFrame(() => {
      if (imageRef.value) {
        imageWidth.value = imageRef.value.offsetWidth
        imageHeight.value = imageRef.value.offsetHeight
        drawGrid()
      }
    })
  }
}

const getCanvasWithGrid = (): HTMLCanvasElement | null => {
  if (!imageRef.value) return null
  
  const img = imageRef.value
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  if (!ctx) return null
  
  const displayWidth = img.offsetWidth || img.naturalWidth
  const displayHeight = img.offsetHeight || img.naturalHeight
  
  canvas.width = displayWidth
  canvas.height = displayHeight
  
  ctx.drawImage(img, 0, 0, displayWidth, displayHeight)
  
  ctx.strokeStyle = props.gridColor ?? '#ff0000'
  ctx.lineWidth = props.lineWidth ?? 2
  
  const gridType = props.gridType ?? 'standard'
  
  switch (gridType) {
    case 'ruleOfThirds':
      drawRuleOfThirds(ctx, canvas.width, canvas.height)
      break
    case 'goldenRatio':
      drawGoldenRatio(ctx, canvas.width, canvas.height)
      break
    case 'goldenSpiral':
      drawGoldenSpiral(ctx, canvas.width, canvas.height)
      break
    case 'diagonal':
      drawDiagonalGrid(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3)
      break
    case 'fixed':
      drawFixedGrid(ctx, canvas.width, canvas.height)
      break
    case 'proportional':
      drawProportionalGrid(ctx, canvas.width, canvas.height)
      break
    default:
      drawStandardGrid(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3)
  }
  
  if (props.showLabels && gridType !== 'goldenSpiral') {
    drawLabels(ctx, canvas.width, canvas.height, props.gridCols ?? 3, props.gridRows ?? 3, props.gridColor ?? '#ff0000', gridType)
  }
  
  return canvas
}

defineExpose({ getCanvasWithGrid })

watch([() => props.gridType, () => props.gridCols, () => props.gridRows, () => props.gridColor, () => props.lineWidth, () => props.opacity, () => props.showLabels], () => {
  drawGrid()
})

onMounted(() => {
  drawGrid()
})
</script>