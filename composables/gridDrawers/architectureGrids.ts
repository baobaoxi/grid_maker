export const drawStructuralGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 6
  const rows = 6
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
  
  ctx.setLineDash([4, 4])
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.moveTo(centerX, 0)
  ctx.lineTo(centerX, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, centerY)
  ctx.lineTo(width, centerY)
  ctx.stroke()
  
  ctx.setLineDash([])
}

export const drawLeCorbusierModulor = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const phi = 1.618
  const baseUnit = Math.min(width, height) * 0.15
  
  let currentY = height * 0.1
  const startX = width * 0.1
  
  for (let i = 0; i < 5; i++) {
    const unitHeight = baseUnit * Math.pow(phi, i)
    
    ctx.beginPath()
    ctx.moveTo(startX, currentY)
    ctx.lineTo(width * 0.9, currentY)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(startX, currentY)
    ctx.lineTo(startX, currentY + unitHeight)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(width * 0.9, currentY)
    ctx.lineTo(width * 0.9, currentY + unitHeight)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(startX, currentY + unitHeight)
    ctx.lineTo(width * 0.9, currentY + unitHeight)
    ctx.stroke()
    
    currentY += unitHeight
  }
}

export const drawTartanGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const patternSize = 40
  
  for (let x = 0; x < width; x += patternSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  
  for (let y = 0; y < height; y += patternSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.setLineDash([2, 2])
  for (let x = patternSize / 2; x < width; x += patternSize) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  
  for (let y = patternSize / 2; y < height; y += patternSize) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.setLineDash([])
}