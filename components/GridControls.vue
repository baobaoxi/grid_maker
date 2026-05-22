<template>
  <div class="controls-panel">
    <h3>{{ title }}</h3>
    
    <div v-if="selectedGridTypes.length > 0" class="selected-grid-types">
      <span class="selected-label">已选择:</span>
      <div class="selected-tags">
        <span 
          v-for="gridType in selectedGridTypes" 
          :key="gridType" 
          class="selected-tag"
          @click="toggleGridType(gridType)"
        >
          {{ getGridLabel(gridType) }}
          <span class="tag-remove">×</span>
        </span>
      </div>
    </div>
    
    <div class="control-group">
      <label>{{ gridTypeLabel }}</label>
      <div class="grid-type-checkboxes">
        <div 
          v-for="group in gridGroups" 
          :key="group.name"
          class="expandable-group"
        >
          <button 
            class="group-header"
            @click="toggleGroup(group.name)"
          >
            <span class="expand-icon">{{ expandedGroups.includes(group.name) ? '−' : '+' }}</span>
            <span class="group-label">{{ group.label }}</span>
            <span class="group-count">({{ getGroupSelectedCount(group.grids) }})</span>
          </button>
          <div v-show="expandedGroups.includes(group.name)" class="group-content">
            <label 
              v-for="grid in group.grids" 
              :key="grid.value" 
              class="grid-type-checkbox"
            >
              <input 
                type="checkbox" 
                :checked="selectedGridTypes.includes(grid.value)"
                @change="toggleGridType(grid.value)"
              />
              <span>{{ grid.label }}</span>
            </label>
            <div v-if="group.name === 'standard' && selectedGridTypes.includes('standard')" class="standard-controls">
              <div class="control-row">
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
              <div class="control-row">
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
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="control-group">
      <label>{{ colorLabel }}</label>
      <input 
        type="color" 
        v-model="localColor" 
        class="color-input"
        @input="emitUpdate"
      />
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
import { ref, computed, watch } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  gridTypeLabel?: string
  columnsLabel?: string
  rowsLabel?: string
  colorLabel?: string
  lineWidthLabel?: string
  opacityLabel?: string
  showLabelsLabel?: string
  downloadLabel?: string
  clearLabel?: string
  gridTypes?: string[]
  cols?: number
  rows?: number
  color?: string
  lineWidth?: number
  opacity?: number
  showLabels?: boolean
  canDownload?: boolean
}>(), {
  title: 'Grid Settings',
  gridTypeLabel: 'Grid Type',
  columnsLabel: 'Columns',
  rowsLabel: 'Rows',
  colorLabel: 'Grid Color',
  lineWidthLabel: 'Line Width',
  opacityLabel: 'Opacity',
  showLabelsLabel: 'Show Grid Labels',
  downloadLabel: 'Download Image',
  clearLabel: 'Upload New Image',
  gridTypes: () => ['standard'],
  cols: 3,
  rows: 3,
  color: '#ff0000',
  lineWidth: 2,
  opacity: 50,
  showLabels: true,
  canDownload: false
})

const emit = defineEmits<{
  update: [settings: { gridTypes: string[]; cols: number; rows: number; color: string; lineWidth: number; opacity: number; showLabels: boolean }]
  download: []
  clear: []
}>()

const artistGrids = [
  { value: 'fixed', label: 'Fixed Measurement Grid' },
  { value: 'proportional', label: 'Proportional Transfer' },
  { value: 'diagonal', label: 'Diagonal Cell Grid' },
  { value: 'crossDiagonal', label: 'Cross-Diagonal Cells' },
  { value: 'portraitFace', label: 'Portrait Face Guide' },
  { value: 'loomisHead', label: 'Loomis Head Guide' },
  { value: 'figureProportion', label: 'Figure Proportion' },
  { value: 'muralScaling', label: 'Mural Scaling Grid' }
]

const compositionGrids = [
  { value: 'ruleOfThirds', label: 'Rule of Thirds' },
  { value: 'goldenRatio', label: 'Golden Ratio' },
  { value: 'goldenSpiral', label: 'Golden Spiral' },
  { value: 'goldenTriangle', label: 'Golden Triangle' },
  { value: 'diagonalMethod', label: 'Diagonal Method' },
  { value: 'centerCross', label: 'Center Cross' },
  { value: 'ruleOfFifths', label: 'Rule of Fifths' },
  { value: 'quadrantGrid', label: 'Quadrant Grid' }
]

const standardGrids = [
  { value: 'standard', label: 'Standard Grid' }
]

const advancedGrids = [
  { value: 'armature', label: 'Armature (14-line)' },
  { value: 'rabatment', label: 'Rabatment' },
  { value: 'baroqueDiagonal', label: 'Baroque Diagonal' },
  { value: 'sinisterDiagonal', label: 'Sinister Diagonal' },
  { value: 'reciprocalLines', label: 'Reciprocal Lines' }
]

const dynamicSymmetryGrids = [
  { value: 'root2', label: 'Root 2 (1:1.414)' },
  { value: 'root3', label: 'Root 3 (1:1.732)' },
  { value: 'root4', label: 'Root 4 (1:2)' },
  { value: 'root5', label: 'Root 5 (1:2.236)' },
  { value: 'phiRectangle', label: 'Phi Rectangle' },
  { value: 'rectangle15', label: '1.5 Rectangle (2:3)' }
]

const perspectiveGrids = [
  { value: 'onePoint', label: '1-Point Perspective' },
  { value: 'twoPoint', label: '2-Point Perspective' },
  { value: 'threePoint', label: '3-Point Perspective' },
  { value: 'isometric', label: 'Isometric' },
  { value: 'fisheye', label: '5-Point / Fisheye' },
  { value: 'dimetric', label: 'Dimetric' },
  { value: 'trimetric', label: 'Trimetric' },
  { value: 'anamorphic', label: 'Anamorphic' }
]

const specialtyGrids = [
  { value: 'triangular', label: 'Triangular Grid' },
  { value: 'hexagonal', label: 'Hexagonal Grid' },
  { value: 'radial', label: 'Radial / Circular' },
  { value: 'dotGrid', label: 'Dot Grid' },
  { value: 'diamond', label: 'Diamond / Rhombus' },
  { value: 'polar', label: 'Polar / Spiral' },
  { value: 'crossHair', label: 'Cross-Hair Grid' }
]

const sacredGeometryGrids = [
  { value: 'flowerOfLife', label: 'Flower of Life' },
  { value: 'seedOfLife', label: 'Seed of Life' },
  { value: 'metatronsCube', label: "Metatron's Cube" },
  { value: 'vesicaPiscis', label: 'Vesica Piscis' },
  { value: 'sriYantra', label: 'Sri Yantra' },
  { value: 'treeOfLife', label: 'Tree of Life' },
  { value: 'merkaba', label: 'Merkaba' },
  { value: 'hexagram', label: 'Hexagram' },
  { value: 'pentagram', label: 'Pentagram' },
  { value: 'eggOfLife', label: 'Egg of Life' },
  { value: 'fruitOfLife', label: 'Fruit of Life' },
  { value: 'yinYang', label: 'Yin-Yang' },
  { value: 'enneagram', label: 'Enneagram' },
  { value: 'islamic8Point', label: 'Islamic 8-Point Star' },
  { value: 'islamic12Point', label: 'Islamic 12-Point Star' },
  { value: 'borromeanRings', label: 'Borromean Rings' },
  { value: 'torusField', label: 'Torus Field' },
  { value: 'ainSoph', label: 'Ain Soph' },
  { value: 'celticTriquetra', label: 'Celtic Triquetra' },
  { value: 'platonicSolids', label: 'Platonic Solids' }
]

const typographyGrids = [
  { value: 'columnGrid', label: 'Column Grid' },
  { value: 'modularGrid', label: 'Modular Grid' },
  { value: 'baselineGrid', label: 'Baseline Grid' },
  { value: 'manuscriptGrid', label: 'Manuscript Grid' },
  { value: 'hierarchicalGrid', label: 'Hierarchical Grid' },
  { value: 'spacingGrid', label: '8pt / 4pt Spacing' }
]

const designTemplatesGrids = [
  { value: 'comicPanel', label: 'Comic Panel Grid' },
  { value: 'storyboardFrame', label: 'Storyboard Frame' },
  { value: 'logoConstruction', label: 'Logo Construction' },
  { value: 'iconGrid', label: 'Icon Grid' },
  { value: 'twelveColumnWeb', label: '12-Column Web Grid' },
  { value: 'mobileAppLayout', label: 'Mobile App Layout' },
  { value: 'posterEditorial', label: 'Poster / Editorial' },
  { value: 'socialMediaSafe', label: 'Social Media Safe' }
]

const architectureGrids = [
  { value: 'structuralGrid', label: 'Structural Grid' },
  { value: 'leCorbusierModulor', label: 'Le Corbusier Modulor' },
  { value: 'tartanGrid', label: 'Tartan Grid' }
]

const gridGroups = [
  { name: 'standard', label: 'Standard', grids: standardGrids },
  { name: 'artist', label: 'Artist Guides', grids: artistGrids },
  { name: 'composition', label: 'Composition', grids: compositionGrids },
  { name: 'advanced', label: 'Advanced', grids: advancedGrids },
  { name: 'dynamicSymmetry', label: 'Dynamic Symmetry', grids: dynamicSymmetryGrids },
  { name: 'perspective', label: 'Perspective', grids: perspectiveGrids },
  { name: 'specialty', label: 'Specialty Grids', grids: specialtyGrids },
  { name: 'sacredGeometry', label: 'Sacred Geometry', grids: sacredGeometryGrids },
  { name: 'typography', label: 'Typography / Design', grids: typographyGrids },
  { name: 'designTemplates', label: 'Design Templates', grids: designTemplatesGrids },
  { name: 'architecture', label: 'Architecture / Engineering', grids: architectureGrids }
]

const allGrids = [
  ...artistGrids,
  ...compositionGrids,
  ...standardGrids,
  ...advancedGrids,
  ...dynamicSymmetryGrids,
  ...perspectiveGrids,
  ...specialtyGrids,
  ...sacredGeometryGrids,
  ...typographyGrids,
  ...designTemplatesGrids,
  ...architectureGrids
]

const expandedGroups = ref<string[]>(['standard'])
const selectedGridTypes = ref<string[]>([...props.gridTypes])
const localCols = ref(props.cols ?? 3)
const localRows = ref(props.rows ?? 3)
const localColor = ref(props.color ?? '#ff0000')
const localLineWidth = ref(props.lineWidth ?? 2)
const localOpacity = ref(props.opacity ?? 50)
const localShowLabels = ref(props.showLabels ?? true)

const getGridLabel = (value: string): string => {
  const grid = allGrids.find(g => g.value === value)
  return grid?.label || value
}

const getGroupSelectedCount = (grids: { value: string; label: string }[]): number => {
  return grids.filter(g => selectedGridTypes.value.includes(g.value)).length
}

const toggleGroup = (groupName: string) => {
  const index = expandedGroups.value.indexOf(groupName)
  if (index > -1) {
    expandedGroups.value.splice(index, 1)
  } else {
    expandedGroups.value.push(groupName)
  }
}

const toggleGridType = (gridType: string) => {
  const index = selectedGridTypes.value.indexOf(gridType)
  if (index > -1) {
    selectedGridTypes.value.splice(index, 1)
  } else {
    selectedGridTypes.value.push(gridType)
  }
  emitUpdate()
}

watch(() => props.gridTypes, (newVal) => {
  if (newVal !== undefined) {
    selectedGridTypes.value = [...newVal]
  }
}, { deep: true })

watch(() => props.cols, (newVal) => { if (newVal !== undefined) localCols.value = newVal })
watch(() => props.rows, (newVal) => { if (newVal !== undefined) localRows.value = newVal })
watch(() => props.color, (newVal) => { if (newVal !== undefined) localColor.value = newVal })
watch(() => props.lineWidth, (newVal) => { if (newVal !== undefined) localLineWidth.value = newVal })
watch(() => props.opacity, (newVal) => { if (newVal !== undefined) localOpacity.value = newVal })
watch(() => props.showLabels, (newVal) => { if (newVal !== undefined) localShowLabels.value = newVal })

const emitUpdate = () => {
  emit('update', {
    gridTypes: selectedGridTypes.value,
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
.grid-type-checkboxes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.expandable-group {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
}

.group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.2s ease;
}

.group-header:hover {
  opacity: 0.9;
}

.expand-icon {
  font-size: 1.2rem;
  font-weight: bold;
  width: 20px;
  display: flex;
  justify-content: center;
  color: #ffffff;
}

.group-label {
  flex: 1;
  color: #ffffff;
}

.group-count {
  font-size: 0.8rem;
  opacity: 0.9;
  background: rgba(255, 255, 255, 0.15);
  padding: 2px 8px;
  border-radius: 10px;
  color: #ffffff;
}

.group-content {
  padding: 8px 12px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.selected-grid-types {
  background: #fff3e0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
}

.selected-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #e65100;
  margin-bottom: 8px;
  display: block;
}

.selected-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.selected-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #ff7043 0%, #ff5722 100%);
  color: white;
  padding: 4px 10px 4px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.selected-tag:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.tag-remove {
  font-size: 1rem;
  font-weight: bold;
  line-height: 1;
}

.grid-type-checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #555;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.grid-type-checkbox:hover {
  background-color: #e8e8e8;
}

.grid-type-checkbox input[type="checkbox"] {
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #667eea;
}

.standard-controls {
  margin-top: 8px;
  padding-top: 8px;
  border-top: 1px dashed #ccc;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.control-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.control-row label {
  font-size: 0.85rem;
  color: #666;
}

.control-row .number-input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
