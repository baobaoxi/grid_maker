export const drawColumnGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const colWidth = width / 12
  
  for (let i = 1; i < 12; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
}

export const drawModularGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 4
  const rows = 4
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 1; i < rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
}

export const drawBaselineGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = 0.5
  
  const baselineSpacing = 12
  
  for (let y = baselineSpacing; y < height; y += baselineSpacing) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}

export const drawManuscriptGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const margin = 40
  const lineSpacing = 24
  
  ctx.beginPath()
  ctx.rect(margin, margin, width - margin * 2, height - margin * 2)
  ctx.stroke()
  
  for (let y = margin + lineSpacing; y < height - margin; y += lineSpacing) {
    ctx.beginPath()
    ctx.moveTo(margin, y)
    ctx.lineTo(width - margin, y)
    ctx.stroke()
  }
}

export const drawHierarchicalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 3
  const colWidth = width / cols
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  const headerHeight = height * 0.2
  ctx.beginPath()
  ctx.moveTo(0, headerHeight)
  ctx.lineTo(width, headerHeight)
  ctx.stroke()
  
  const subHeaderHeight = height * 0.4
  ctx.beginPath()
  ctx.moveTo(0, subHeaderHeight)
  ctx.lineTo(width, subHeaderHeight)
  ctx.stroke()
}

export const drawSpacingGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const spacing8pt = 8
  const spacing4pt = 4
  
  ctx.setLineDash([2, 2])
  for (let y = spacing8pt; y < height; y += spacing8pt) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.setLineDash([1, 3])
  for (let y = spacing4pt; y < height; y += spacing4pt) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.setLineDash([])
}