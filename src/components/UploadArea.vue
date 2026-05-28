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

<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    default: 'Click or drag to upload image'
  },
  hint: {
    type: String,
    default: 'Supported formats: JPG, PNG, GIF'
  }
})

const emit = defineEmits(['file-selected'])

const fileInput = ref(null)
const isDragging = ref(false)

const triggerUpload = () => {
  fileInput.value?.click()
}

const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    emit('file-selected', file)
  }
}

const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file && file.type.startsWith('image/')) {
    emit('file-selected', file)
  }
}

const reset = () => {
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

defineExpose({ reset })
</script>

<style scoped>
.upload-section {
  background: white;
  border-radius: 16px;
  padding: 20px 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.upload-area {
  border: 3px dashed #ddd;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.upload-area:hover,
.upload-area.dragover {
  border-color: #667eea;
  background-color: #f8f9ff;
}

.file-input {
  display: none;
}

.upload-placeholder svg {
  color: #667eea;
  margin-bottom: 20px;
}

.upload-placeholder p {
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
}

.upload-placeholder span {
  color: #666;
  font-size: 0.9rem;
}
</style>