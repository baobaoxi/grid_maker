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

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  gridCols: {
    type: Number,
    default: 3
  },
  gridRows: {
    type: Number,
    default: 3
  },
  gridColor: {
    type: String,
    default: '#ff0000'
  },
  lineWidth: {
    type: Number,
    default: 2
  },
  opacity: {
    type: Number,
    default: 50
  },
  showInfo: {
    type: Boolean,
    default: true
  },
  infoLabel: {
    type: String,
    default: 'Preview Size'
  },
  gridLabel: {
    type: String,
    default: 'Grid'
  },
  showLabels: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['loaded', 'dimensions'])

const imageRef = ref(null)
const canvasRef = ref(null)
const imageWidth = ref(0)
const imageHeight = ref(0)
const imageLoaded = ref(false)

const drawGrid = () => {
  if (!imageRef.value || !canvasRef.value || !imageLoaded.value) return
  
  const img = imageRef.value
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  
  const displayWidth = img.offsetWidth
  const displayHeight = img.offsetHeight
  
  if (displayWidth === 0 || displayHeight === 0) return
  
  canvas.width = displayWidth
  canvas.height = displayHeight
  
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  ctx.strokeStyle = props.gridColor
  ctx.lineWidth = props.lineWidth
  
  const colWidth = canvas.width / props.gridCols
  const rowHeight = canvas.height / props.gridRows
  
  for (let i = 1; i < props.gridCols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, canvas.height)
    ctx.stroke()
  }
  
  for (let i = 1; i < props.gridRows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(canvas.width, rowHeight * i)
    ctx.stroke()
  }
  
  if (props.showLabels) {
    ctx.fillStyle = props.gridColor
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    for (let row = 0; row < props.gridRows; row++) {
      for (let col = 0; col < props.gridCols; col++) {
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
        emit('dimensions', { width: imageWidth.value, height: imageHeight.value })
        emit('loaded')
        drawGrid()
      }
    })
  }
}

const getCanvasWithGrid = () => {
  if (!imageRef.value) return null
  
  const img = imageRef.value
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  const displayWidth = img.width || img.naturalWidth
  const displayHeight = img.height || img.naturalHeight
  
  canvas.width = displayWidth
  canvas.height = displayHeight
  
  ctx.drawImage(img, 0, 0, displayWidth, displayHeight)
  
  ctx.strokeStyle = props.gridColor
  ctx.lineWidth = props.lineWidth
  
  const colWidth = canvas.width / props.gridCols
  const rowHeight = canvas.height / props.gridRows
  
  for (let i = 1; i < props.gridCols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, canvas.height)
    ctx.stroke()
  }
  
  for (let i = 1; i < props.gridRows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(canvas.width, rowHeight * i)
    ctx.stroke()
  }
  
  if (props.showLabels) {
    ctx.fillStyle = props.gridColor
    ctx.font = 'bold 12px Arial'
    ctx.textAlign = 'right'
    ctx.textBaseline = 'bottom'
    
    for (let row = 0; row < props.gridRows; row++) {
      for (let col = 0; col < props.gridCols; col++) {
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

watchEffect(() => {
  const _cols = props.gridCols
  const _rows = props.gridRows
  const _color = props.gridColor
  const _lineWidth = props.lineWidth
  const _opacity = props.opacity
  const _showLabels = props.showLabels
  drawGrid()
})

defineExpose({ getCanvasWithGrid })
</script>

<style scoped>
.canvas-container {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.image-wrapper {
  position: relative;
  display: inline-block;
  max-width: 100%;
}

.original-image {
  display: block;
  max-width: 100%;
  border-radius: 8px;
}

.grid-overlay {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  pointer-events: none;
}

.preview-info {
  margin-top: 16px;
  padding: 12px;
  background: #f8f9ff;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #666;
}
</style>