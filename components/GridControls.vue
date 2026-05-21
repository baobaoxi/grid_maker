<template>
  <div class="controls-panel">
    <h3>{{ title }}</h3>
    
    <div class="control-group">
      <label>{{ columnsLabel }}</label>
      <input 
        type="number" 
        v-model.number="localCols" 
        min="1" 
        max="50"
        class="number-input"
        @input="emitUpdate"
      />
    </div>

    <div class="control-group">
      <label>{{ rowsLabel }}</label>
      <input 
        type="number" 
        v-model.number="localRows" 
        min="1" 
        max="50"
        class="number-input"
        @input="emitUpdate"
      />
    </div>

    <div class="control-group">
      <label>{{ colorLabel }}</label>
      <div class="color-picker-wrapper">
        <input 
          type="color" 
          v-model="localColor" 
          class="color-input"
          @input="emitUpdate"
        />
        <span class="color-value">{{ localColor }}</span>
      </div>
    </div>

    <div class="control-group">
      <label>{{ lineWidthLabel }}</label>
      <input 
        type="range" 
        v-model.number="localLineWidth" 
        min="1" 
        max="10"
        class="range-input"
        @input="emitUpdate"
      />
      <span>{{ localLineWidth }}px</span>
    </div>

    <div class="control-group">
      <label>{{ opacityLabel }}</label>
      <input 
        type="range" 
        v-model.number="localOpacity" 
        min="10" 
        max="100"
        class="range-input"
        @input="emitUpdate"
      />
      <span>{{ localOpacity }}%</span>
    </div>

    <div class="control-group checkbox-group">
      <label class="checkbox-label">
        <input 
          type="checkbox" 
          v-model="localShowLabels" 
          @change="emitUpdate"
        />
        <span>{{ showLabelsLabel }}</span>
      </label>
    </div>

    <div class="button-group">
      <button class="btn btn-primary" :disabled="!canDownload" @click="$emit('download')">{{ downloadLabel }}</button>
      <button class="btn btn-secondary" @click="$emit('clear')">{{ clearLabel }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  columnsLabel?: string
  rowsLabel?: string
  colorLabel?: string
  lineWidthLabel?: string
  opacityLabel?: string
  showLabelsLabel?: string
  downloadLabel?: string
  clearLabel?: string
  cols?: number
  rows?: number
  color?: string
  lineWidth?: number
  opacity?: number
  showLabels?: boolean
  canDownload?: boolean
}>(), {
  title: 'Grid Settings',
  columnsLabel: 'Columns',
  rowsLabel: 'Rows',
  colorLabel: 'Grid Color',
  lineWidthLabel: 'Line Width',
  opacityLabel: 'Opacity',
  showLabelsLabel: 'Show Grid Labels',
  downloadLabel: 'Download Image',
  clearLabel: 'Upload New Image',
  cols: 3,
  rows: 3,
  color: '#ff0000',
  lineWidth: 2,
  opacity: 50,
  showLabels: true,
  canDownload: false
})

const emit = defineEmits<{
  update: [settings: { cols: number; rows: number; color: string; lineWidth: number; opacity: number; showLabels: boolean }]
  download: []
  clear: []
}>()

const localCols = ref(props.cols ?? 3)
const localRows = ref(props.rows ?? 3)
const localColor = ref(props.color ?? '#ff0000')
const localLineWidth = ref(props.lineWidth ?? 2)
const localOpacity = ref(props.opacity ?? 50)
const localShowLabels = ref(props.showLabels ?? true)

watch(() => props.cols, (newVal) => { if (newVal !== undefined) localCols.value = newVal })
watch(() => props.rows, (newVal) => { if (newVal !== undefined) localRows.value = newVal })
watch(() => props.color, (newVal) => { if (newVal !== undefined) localColor.value = newVal })
watch(() => props.lineWidth, (newVal) => { if (newVal !== undefined) localLineWidth.value = newVal })
watch(() => props.opacity, (newVal) => { if (newVal !== undefined) localOpacity.value = newVal })
watch(() => props.showLabels, (newVal) => { if (newVal !== undefined) localShowLabels.value = newVal })

const emitUpdate = () => {
  emit('update', {
    cols: localCols.value,
    rows: localRows.value,
    color: localColor.value,
    lineWidth: localLineWidth.value,
    opacity: localOpacity.value,
    showLabels: localShowLabels.value
  })
}
</script>
