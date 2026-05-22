export const drawComicPanel = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 3
  const rows = 3
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
}

export const drawStoryboardFrame = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 4
  const rows = 2
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
  
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const x = col * colWidth + 10
      const y = row * rowHeight + 10
      const w = colWidth - 20
      const h = rowHeight - 20
      
      ctx.beginPath()
      ctx.rect(x, y, w, h)
      ctx.stroke()
    }
  }
}

export const drawLogoConstruction = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  ctx.beginPath()
  ctx.rect(centerX - size, centerY - size, size * 2, size * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - size * 0.7, centerY - size * 0.7, size * 1.4, size * 1.4)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - size * 0.4, centerY - size * 0.4, size * 0.8, size * 0.8)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size, centerY)
  ctx.lineTo(centerX + size, centerY)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size, centerY - size)
  ctx.lineTo(centerX + size, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX + size, centerY - size)
  ctx.lineTo(centerX - size, centerY + size)
  ctx.stroke()
}

export const drawIconGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const gridSize = 64
  const cols = Math.ceil(width / gridSize)
  const rows = Math.ceil(height / gridSize)
  
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath()
    ctx.moveTo(gridSize * i, 0)
    ctx.lineTo(gridSize * i, height)
    ctx.stroke()
  }
  
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, gridSize * i)
    ctx.lineTo(width, gridSize * i)
    ctx.stroke()
  }
  
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      const x = col * gridSize
      const y = row * gridSize
      
      ctx.beginPath()
      ctx.arc(x + gridSize / 2, y + gridSize / 2, gridSize * 0.35, 0, Math.PI * 2)
      ctx.stroke()
    }
  }
}

export const drawTwelveColumnWeb = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const cols = 12
  const colWidth = width / cols
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  const margin = width * 0.1
  ctx.beginPath()
  ctx.moveTo(margin, 0)
  ctx.lineTo(margin, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width - margin, 0)
  ctx.lineTo(width - margin, height)
  ctx.stroke()
}

export const drawMobileAppLayout = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const headerHeight = height * 0.12
  const footerHeight = height * 0.1
  
  ctx.beginPath()
  ctx.moveTo(0, headerHeight)
  ctx.lineTo(width, headerHeight)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, height - footerHeight)
  ctx.lineTo(width, height - footerHeight)
  ctx.stroke()
  
  const cols = 2
  const colWidth = width / cols
  const contentHeight = height - headerHeight - footerHeight
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, headerHeight)
    ctx.lineTo(colWidth * i, height - footerHeight)
    ctx.stroke()
  }
  
  const rows = 3
  const rowHeight = contentHeight / rows
  
  for (let i = 1; i < rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, headerHeight + rowHeight * i)
    ctx.lineTo(width, headerHeight + rowHeight * i)
    ctx.stroke()
  }
}

export const drawPosterEditorial = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const margin = 40
  const contentWidth = width - margin * 2
  const contentHeight = height - margin * 2
  
  ctx.beginPath()
  ctx.rect(margin, margin, contentWidth, contentHeight)
  ctx.stroke()
  
  const headerHeight = contentHeight * 0.25
  ctx.beginPath()
  ctx.moveTo(margin, margin + headerHeight)
  ctx.lineTo(width - margin, margin + headerHeight)
  ctx.stroke()
  
  const cols = 2
  const colWidth = contentWidth / cols
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(margin + colWidth * i, margin + headerHeight)
    ctx.lineTo(margin + colWidth * i, height - margin)
    ctx.stroke()
  }
}

export const drawSocialMediaSafe = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const safeWidth = width * 0.9
  const safeHeight = height * 0.9
  const safeX = (width - safeWidth) / 2
  const safeY = (height - safeHeight) / 2
  
  ctx.setLineDash([5, 5])
  ctx.beginPath()
  ctx.rect(safeX, safeY, safeWidth, safeHeight)
  ctx.stroke()
  
  const criticalWidth = width * 0.8
  const criticalHeight = height * 0.8
  const criticalX = (width - criticalWidth) / 2
  const criticalY = (height - criticalHeight) / 2
  
  ctx.setLineDash([3, 3])
  ctx.beginPath()
  ctx.rect(criticalX, criticalY, criticalWidth, criticalHeight)
  ctx.stroke()
  
  ctx.setLineDash([])
}