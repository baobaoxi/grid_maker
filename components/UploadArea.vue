<template>
  <div class="upload-section">
    <div 
      class="upload-area" 
      :class="{ dragover: isDragging }"
      @click="triggerUpload" 
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="handleDrop"
    >
      <input 
        ref="fileInput" 
        type="file" 
        accept="image/*" 
        class="file-input"
        @change="handleFileSelect"
      />
      <div class="upload-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p>{{ label }}</p>
        <span>{{ hint }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  label?: string
  hint?: string
}>(), {
  label: 'Click or drag to upload image',
  hint: 'Supported formats: JPG, PNG, GIF'
})

const emit = defineEmits<{
  'file-selected': [file: File]
}>()

const fileInput = ref<HTMLInputElement | null>(null)
const isDragging = ref(false)

const triggerUpload = () => fileInput.value?.click()

const handleFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) emit('file-selected', file)
}

const handleDrop = (event: DragEvent) => {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) emit('file-selected', file)
}

defineExpose({ reset: () => { if (fileInput.value) fileInput.value.value = '' } })
</script>
