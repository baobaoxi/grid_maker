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
      <button class="btn btn-primary" @click="$emit('download')">{{ downloadLabel }}</button>
      <button class="btn btn-secondary" @click="$emit('clear')">{{ clearLabel }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Upload your photo, generate a grid, and start sketching square by square.'
  },
  columnsLabel: {
    type: String,
    default: 'Columns'
  },
  rowsLabel: {
    type: String,
    default: 'Rows'
  },
  colorLabel: {
    type: String,
    default: 'Grid Color'
  },
  lineWidthLabel: {
    type: String,
    default: 'Line Width'
  },
  opacityLabel: {
    type: String,
    default: 'Opacity'
  },
  showLabelsLabel: {
    type: String,
    default: 'Show Grid Labels'
  },
  downloadLabel: {
    type: String,
    default: 'Download Image'
  },
  clearLabel: {
    type: String,
    default: 'Upload New Image'
  },
  cols: {
    type: Number,
    default: 3
  },
  rows: {
    type: Number,
    default: 3
  },
  color: {
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
  showLabels: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update', 'download', 'clear'])

const localCols = ref(props.cols)
const localRows = ref(props.rows)
const localColor = ref(props.color)
const localLineWidth = ref(props.lineWidth)
const localOpacity = ref(props.opacity)
const localShowLabels = ref(props.showLabels)

watch(() => props.cols, (val) => localCols.value = val)
watch(() => props.rows, (val) => localRows.value = val)
watch(() => props.color, (val) => localColor.value = val)
watch(() => props.lineWidth, (val) => localLineWidth.value = val)
watch(() => props.opacity, (val) => localOpacity.value = val)
watch(() => props.showLabels, (val) => localShowLabels.value = val)

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

<style scoped>
.controls-panel {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  height: fit-content;
  position: sticky;
  top: 20px;
  height: 800px;
  overflow-y: auto;
}

.controls-panel h3 {
  font-size: 1.3rem;
  margin-bottom: 24px;
  color: #333;
  border-bottom: 2px solid #eee;
  padding-bottom: 12px;
}

.control-group {
  margin-bottom: 20px;
}

.control-group label {
  display: block;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
}

.number-input {
  width: 100%;
  padding: 10px 14px;
  border: 2px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.number-input:focus {
  outline: none;
  border-color: #667eea;
}

.color-picker-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
}

.color-input {
  width: 50px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.color-input:focus {
  outline: none;
  border-color: #667eea;
}

.color-value {
  font-family: monospace;
  font-size: 0.9rem;
  color: #666;
}

.range-input {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #ddd;
  outline: none;
  -webkit-appearance: none;
}

.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #667eea;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.range-input::-webkit-slider-thumb:hover {
  transform: scale(1.1);
}

.control-group span {
  display: inline-block;
  margin-top: 8px;
  font-weight: 600;
  color: #667eea;
}

.checkbox-group {
  margin-bottom: 20px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-weight: 600;
  color: #555;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #667eea;
}

.checkbox-label span {
  margin-top: 0;
  color: #555;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 24px;
}

.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #f0f0f0;
  color: #555;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

@media (max-width: 900px) {
  .controls-panel {
    position: relative;
    top: auto;
  }
}
</style>