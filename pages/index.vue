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
          title="Grid Settings"
          :grid-type="gridType"
          :cols="gridCols"
          :rows="gridRows"
          :color="gridColor"
          :line-width="lineWidth"
          :opacity="opacity"
          :show-labels="showLabels"
          :can-download="hasUserUploadedImage"
          @update="handleGridUpdate"
          @download="downloadImage"
          @clear="triggerFileInput"
        />

        <div class="canvas-wrapper">
          <div class="upload-btn-wrapper">
            <input 
              ref="hiddenFileInput"
              type="file" 
              accept="image/*" 
              class="file-input"
              @change="handleHiddenFileSelect"
            />
            <button class="btn btn-upload" @click="triggerFileInput">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Change Image
            </button>
          </div>
          <ImageCanvas 
            ref="imageCanvasRef"
            :image-src="imageSrc"
            :grid-type="gridType"
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
      </div>
    </main>

    <FeaturesSection 
      title="Why Choose Us"
      subtitle="Simple, Fast, Professional Photo Grid Tool"
      steps-title="How It Works"
    />
    
    <AppFooter 
      company="Photo Grid App"
      @navigate="handleFooterNavigate"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppHeader from '~/components/AppHeader.vue'
import UploadArea from '~/components/UploadArea.vue'
import GridControls from '~/components/GridControls.vue'
import ImageCanvas from '~/components/ImageCanvas.vue'
import FeaturesSection from '~/components/FeaturesSection.vue'
import AppFooter from '~/components/AppFooter.vue'

const uploadAreaRef = ref<InstanceType<typeof UploadArea> | null>(null)
const imageCanvasRef = ref<InstanceType<typeof ImageCanvas> | null>(null)
const hiddenFileInput = ref<HTMLInputElement | null>(null)
const imageSrc = ref('')
const hasUserUploadedImage = ref(false)
const gridType = ref('standard')
const gridCols = ref(4)
const gridRows = ref(3)
const gridColor = ref('#00ff00')
const lineWidth = ref(2)
const opacity = ref(50)
const showLabels = ref(true)

onMounted(() => {
  imageSrc.value = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
})

const handleFileSelected = (file: File) => {
  hasUserUploadedImage.value = true
  const reader = new FileReader()
  reader.onload = (e) => {
    imageSrc.value = e.target?.result as string
  }
  reader.readAsDataURL(file)
}

const triggerFileInput = () => {
  hiddenFileInput.value?.click()
}

const handleHiddenFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    handleFileSelected(file)
  }
  if (hiddenFileInput.value) {
    hiddenFileInput.value.value = ''
  }
}

const handleGridUpdate = (settings: { gridType: string; cols: number; rows: number; color: string; lineWidth: number; opacity: number; showLabels: boolean }) => {
  gridType.value = settings.gridType
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
  if (!imageCanvasRef.value || !hasUserUploadedImage.value) return
  const canvas = imageCanvasRef.value.getCanvasWithGrid()
  if (canvas) {
    const link = document.createElement('a')
    link.download = 'grid-image.png'
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
}

const handleFooterNavigate = (link: { label: string; url: string }) => {
  if (link.label === 'Privacy Policy') {
    alert('Privacy Policy\n\nWe respect your privacy.\n\n1. We do not collect any personal information.\n2. Images you upload are processed locally only and never sent to any server.\n3. All operations are performed on your device.')
  } else if (link.label === 'Terms of Service') {
    alert('Terms of Service\n\nBy using this tool, you agree to:\n\n1. Only process images that you have the right to use.\n2. Not use this tool for any illegal purposes.\n3. Take full responsibility for any consequences arising from using this tool.')
  } else if (link.label === 'About Us') {
    alert('About Us\n\nPhoto Grid Overlay is a free online photo grid tool.\n\nFeatures:\n• Customizable grid columns and rows\n• Adjustable grid color and opacity\n• Image download support\n• Local processing for privacy protection')
  }
}
</script>
