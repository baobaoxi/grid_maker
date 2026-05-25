<template>
  <div class="app-container">
    <AppHeader
      title="Photo Grid Overlay"
      subtitle="Upload image and add customizable grid lines"
    />

    <main class="main-content">
      <UploadArea
        v-if="!imageSrc"
        ref="uploadAreaRef"
        label="Click or drag to upload image"
        hint="Supported formats: JPG, PNG, GIF"
        @file-selected="handleFileSelected"
      />

      <div v-if="imageSrc" class="workspace">
        <GridControls
          class="left-container"
          title="Grid Settings"
          :cols="gridCols"
          :rows="gridRows"
          :color="gridColor"
          :line-width="lineWidth"
          :opacity="opacity"
          :show-labels="showLabels"
          @update="handleGridUpdate"
          @download="downloadImage"
          @clear="triggerFileInput"
        />

        <ImageCanvas
          ref="imageCanvasRef"
          :image-src="imageSrc"
          :grid-cols="gridCols"
          :grid-rows="gridRows"
          :grid-color="gridColor"
          :line-width="lineWidth"
          :opacity="opacity"
          :show-info="true"
          info-label="Preview Size"
          grid-label="Grid"
          :show-labels="showLabels"
        />
      </div>

      <input
        ref="hiddenFileInput"
        type="file"
        accept="image/*"
        class="hidden-file-input"
        @change="handleHiddenFileSelect"
      />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import UploadArea from './components/UploadArea.vue'
import GridControls from './components/GridControls.vue'
import ImageCanvas from './components/ImageCanvas.vue'

const uploadAreaRef = ref(null)
const imageCanvasRef = ref(null)
const hiddenFileInput = ref(null)
const imageSrc = ref('')
const gridCols = ref(4)
const gridRows = ref(3)
const gridColor = ref('#00ff00')
const lineWidth = ref(2)
const opacity = ref(50)
const showLabels = ref(true)

const handleFileSelected = (file) => {
  const reader = new FileReader()
  reader.onload = (e) => {
    imageSrc.value = e.target.result
  }
  reader.readAsDataURL(file)
}

const triggerFileInput = () => {
  hiddenFileInput.value?.click()
}

const handleHiddenFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    handleFileSelected(file)
  }
  if (hiddenFileInput.value) {
    hiddenFileInput.value.value = ''
  }
}

const handleGridUpdate = (settings) => {
  gridCols.value = settings.cols
  gridRows.value = settings.rows
  gridColor.value = settings.color
  lineWidth.value = settings.lineWidth
  opacity.value = settings.opacity
  if (settings.showLabels !== undefined) {
    showLabels.value = settings.showLabels
  }
}

const downloadImage = () => {
  if (!imageCanvasRef.value) return

  const canvas = imageCanvasRef.value.getCanvasWithGrid()
  if (canvas) {
    const link = document.createElement('a')
    link.download = 'grid-image.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  padding: 20px;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
}

.workspace {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 24px;
}

.left-container {
  height: 800px;
  overflow-y: auto;
}



.hidden-file-input {
  display: none;
}

@media (max-width: 900px) {
  .workspace {
    grid-template-columns: 1fr;
  }
}
</style>
