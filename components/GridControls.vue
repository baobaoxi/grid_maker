<template>
  <div class="controls-panel">
    <h3>{{ title }}</h3>

    <div v-if="selectedGridTypes.length > 0" class="selected-grid-types">
      <span class="selected-label">Selected:</span>
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
          v-for="group in gridGroups.filter(g => g.name === 'standard')"
          :key="group.name"
          class="expandable-group standard-group"
        >
          <button
            class="group-header"
            @click="toggleGroup(group.name)"
          >
            <span class="expand-icon">{{ expandedGroups.includes(group.name) ? '−' : '+' }}</span>
            <span class="group-label white">{{ group.label }}</span>
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

        <div class="expandable-group more-types-group">
          <button
            class="group-header"
            @click="toggleMoreTypes"
          >
            <span class="expand-icon">{{ showMoreTypes ? '−' : '+' }}</span>
            <span class="group-label white">More Types</span>
            <span class="group-count">({{ getMoreTypesSelectedCount() }})</span>
          </button>
          <div v-show="showMoreTypes" class="group-content more-types-content">
            <div
              v-for="group in gridGroups.filter(g => g.name !== 'standard')"
              :key="group.name"
              class="sub-expandable-group"
            >
              <button
                class="sub-group-header"
                @click="toggleGroup(group.name)"
              >
                <span class="expand-icon">{{ expandedGroups.includes(group.name) ? '−' : '+' }}</span>
                <span class="group-label white">{{ group.label }}</span>
                <span class="group-count">({{ getGroupSelectedCount(group.grids) }})</span>
              </button>
              <div v-show="expandedGroups.includes(group.name)" class="sub-group-content">
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
      <div class="dropdown" :class="{ open: showDownloadMenu }">
        <button
          class="btn btn-primary dropdown-toggle"
          :disabled="!canDownload"
          @click="toggleDownloadMenu"
        >
          {{ downloadLabel }}
          <span class="dropdown-arrow">▼</span>
        </button>
        <div v-show="showDownloadMenu" class="dropdown-menu">
          <button class="dropdown-item" @click="handleDownloadPng">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download PNG
          </button>
          <button class="dropdown-item" @click="handleDownloadSvg">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download SVG
          </button>
          <button class="dropdown-item" @click="handlePrint">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 6 2 18 2 18 9"></polyline>
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
              <rect x="6" y="14" width="12" height="8"></rect>
            </svg>
            Print
          </button>
        </div>
      </div>
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
  downloadLabel: 'Download',
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
  downloadSvg: []
  print: []
  clear: []
}>()

const showDownloadMenu = ref(false)

const toggleDownloadMenu = () => {
  showDownloadMenu.value = !showDownloadMenu.value
}

const handleDownloadPng = () => {
  showDownloadMenu.value = false
  emit('download')
}

const handleDownloadSvg = () => {
  showDownloadMenu.value = false
  emit('downloadSvg')
}

const handlePrint = () => {
  showDownloadMenu.value = false
  emit('print')
}

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
  { value: 'centerCross', label: 'Center Cross' }
]

const standardGrids = [
  { value: 'standard', label: 'Standard Grid' }
]

const advancedGrids = [
  { value: 'radialGrid', label: 'Radial Grid' },
  { value: 'triangularGrid', label: 'Triangular Grid' },
  { value: 'hexagonalGrid', label: 'Hexagonal Grid' },
  { value: 'isometricGrid', label: 'Isometric Grid' },
  { value: 'brickPattern', label: 'Brick Pattern' },
  { value: 'herringbonePattern', label: 'Herringbone Pattern' }
]

const dynamicSymmetryGrids = [
  { value: 'dynamicSymmetry', label: 'Dynamic Symmetry' },
  { value: 'root2Rectangle', label: 'Root 2 Rectangle' },
  { value: 'root3Rectangle', label: 'Root 3 Rectangle' },
  { value: 'root4Rectangle', label: 'Root 4 Rectangle' },
  { value: 'goldenRectangle', label: 'Golden Rectangle' },
  { value: 'silverRectangle', label: 'Silver Rectangle' }
]

const perspectiveGrids = [
  { value: 'onePointPerspective', label: 'One-Point Perspective' },
  { value: 'twoPointPerspective', label: 'Two-Point Perspective' },
  { value: 'threePointPerspective', label: 'Three-Point Perspective' },
  { value: 'perspectiveGrid', label: 'Perspective Grid' }
]

const specialtyGrids = [
  { value: 'tileGrid', label: 'Tile Pattern' },
  { value: 'mosaicGrid', label: 'Mosaic Pattern' },
  { value: 'stainedGlass', label: 'Stained Glass' },
  { value: 'quiltPattern', label: 'Quilt Pattern' },
  { value: 'crossStitch', label: 'Cross Stitch Grid' },
  { value: 'pixelArt', label: 'Pixel Art Grid' }
]

const sacredGeometryGrids = [
  { value: 'metatronCube', label: 'Metatron Cube' },
  { value: 'flowerOfLife', label: 'Flower of Life' },
  { value: 'seedOfLife', label: 'Seed of Life' },
  { value: 'torusGrid', label: 'Torus Grid' },
  { value: 'merkabaGrid', label: 'Merkaba Grid' }
]

const typographyGrids = [
  { value: 'baselineGrid', label: 'Baseline Grid' },
  { value: 'columnGrid', label: 'Column Grid' },
  { value: 'modularGrid', label: 'Modular Grid' }
]

const designTemplatesGrids = [
  { value: 'bookCover', label: 'Book Cover Template' },
  { value: 'posterTemplate', label: 'Poster Template' },
  { value: 'businessCard', label: 'Business Card' },
  { value: 'socialMediaPost', label: 'Social Media Post' }
]

const architectureGrids = [
  { value: 'floorPlan', label: 'Floor Plan Grid' },
  { value: 'elevationGrid', label: 'Elevation Grid' },
  { value: 'sectionGrid', label: 'Section Grid' },
  { value: 'sitePlan', label: 'Site Plan Grid' }
]

const gridGroups = [
  { name: 'standard', label: 'Standard Grid', grids: standardGrids },
  { name: 'artist', label: 'Artist Grids', grids: artistGrids },
  { name: 'composition', label: 'Composition Grids', grids: compositionGrids },
  { name: 'advanced', label: 'Advanced Patterns', grids: advancedGrids },
  { name: 'dynamic', label: 'Dynamic Symmetry', grids: dynamicSymmetryGrids },
  { name: 'perspective', label: 'Perspective Grids', grids: perspectiveGrids },
  { name: 'specialty', label: 'Specialty Patterns', grids: specialtyGrids },
  { name: 'sacred', label: 'Sacred Geometry', grids: sacredGeometryGrids },
  { name: 'typography', label: 'Typography Grids', grids: typographyGrids },
  { name: 'design', label: 'Design Templates', grids: designTemplatesGrids },
  { name: 'architecture', label: 'Architecture Grids', grids: architectureGrids }
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
const showMoreTypes = ref(false)
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

const toggleMoreTypes = () => {
  showMoreTypes.value = !showMoreTypes.value
}

const getMoreTypesSelectedCount = () => {
  const moreGrids = gridGroups.filter(g => g.name !== 'standard').flatMap(g => g.grids)
  return moreGrids.filter(g => selectedGridTypes.value.includes(g.value)).length
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
.controls-panel {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  height: 800px;
  overflow-y: auto;
}

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
  color: #ffffff !important;
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
  color: #333;
  font-weight: 500;
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
  color: #333;
  font-weight: 500;
}

.control-row .number-input {
  width: 60px;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.9rem;
}

.sub-expandable-group {
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 4px;
}

.sub-group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  width: 100%;
  background: #e9ecef;
  color: #2d3436;
  border: none;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  text-align: left;
  transition: all 0.2s ease;
}

.sub-group-header:hover {
  background: #e9ecef;
}

.sub-group-header .expand-icon {
  font-size: 1rem;
  color: #666;
  width: 16px;
}

.sub-group-header .group-label {
  flex: 1;
  color: #444;
}

.sub-group-header .group-count {
  font-size: 0.75rem;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  padding: 2px 6px;
  border-radius: 8px;
}

.sub-group-content {
  padding: 8px 12px;
  background: #ffffff;
}

.more-types-content {
  padding: 8px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: #f0f0f0;
  color: #555;
}

.btn-secondary:hover {
  background: #e0e0e0;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dropdown-arrow {
  font-size: 0.7rem;
  transition: transform 0.2s ease;
}

.dropdown.open .dropdown-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 180px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: 100;
  overflow: hidden;
  padding: 4px 0;
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 14px;
  border: none;
  background: none;
  font-size: 0.9rem;
  color: #333;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
}

.dropdown-item:hover {
  background: #f5f5f5;
  color: #667eea;
}

.dropdown-item svg {
  color: #667eea;
  flex-shrink: 0;
}

.color-input {
  width: 100%;
  height: 40px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  cursor: pointer;
  padding: 2px;
}

.color-input::-webkit-color-swatch-wrapper {
  padding: 2px;
}

.color-input::-webkit-color-swatch {
  border: none;
  border-radius: 4px;
}

.range-input {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e0e0e0;
  appearance: none;
  cursor: pointer;
}

.range-input::-webkit-slider-thumb {
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.4);
}

.checkbox-group {
  margin-top: 16px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 0.9rem;
  color: #555;
}

.checkbox-label input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #667eea;
}

.control-group {
  margin-bottom: 20px;
}

.control-group > label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #555;
  margin-bottom: 8px;
}

.control-group span {
  display: block;
  font-size: 0.8rem;
  color: #888;
  margin-top: 4px;
  text-align: right;
}

@media (max-width: 768px) {
  .button-group {
    flex-direction: column;
  }

  .dropdown-menu {
    position: static;
    width: 100%;
    box-shadow: none;
    border: 1px solid #e0e0e0;
    margin-top: 4px;
  }
}
.white {
  color: white !important;
}

</style>