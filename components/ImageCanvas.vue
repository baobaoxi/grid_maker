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
      {{ infoLabel }}: {{ imageWidth }} × {{ imageHeight }} | {{ gridLabel }}: {{ gridCols }} × {{ gridRows }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'

const props = defineProps<{
  imageSrc: string
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
  
  const colWidth = canvas.width / (props.gridCols ?? 3)
  const rowHeight = canvas.height / (props.gridRows ?? 3)
  
  for (let i = 1; i < (props.gridCols ?? 3); i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, canvas.height)
    ctx.stroke()
  }
  
  for (let i = 1; i < (props.gridRows ?? 3); i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(canvas.width, rowHeight * i)
    ctx.stroke()
  }
  
  if (props.showLabels) {
    ctx.fillStyle = props.gridColor ?? '#ff0000'
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    for (let row = 0; row < (props.gridRows ?? 3); row++) {
      for (let col = 0; col < (props.gridCols ?? 3); col++) {
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
  
  const colWidth = canvas.width / (props.gridCols ?? 3)
  const rowHeight = canvas.height / (props.gridRows ?? 3)
  
  for (let i = 1; i < (props.gridCols ?? 3); i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, canvas.height)
    ctx.stroke()
  }
  
  for (let i = 1; i < (props.gridRows ?? 3); i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(canvas.width, rowHeight * i)
    ctx.stroke()
  }
  
  if (props.showLabels) {
    ctx.fillStyle = props.gridColor ?? '#ff0000'
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    for (let row = 0; row < (props.gridRows ?? 3); row++) {
      for (let col = 0; col < (props.gridCols ?? 3); col++) {
        const letter = String.fromCharCode(65 + col)
        const label = `${letter}${row + 1}`
        const x = colWidth * (col + 1) - 4
        const y = rowHeight * (row + 1) - 4
        ctx.fillText(label, x, y)
      }
    }
  }
  
  return canvas
}

defineExpose({ getCanvasWithGrid })

watch([() => props.gridCols, () => props.gridRows, () => props.gridColor, () => props.lineWidth, () => props.opacity, () => props.showLabels], () => {
  drawGrid()
})

onMounted(() => {
  drawGrid()
})
</script>
