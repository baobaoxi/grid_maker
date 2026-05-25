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

export const drawBookCover = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const spineWidth = width * 0.08
  const frontWidth = width * 0.85
  const gutter = width * 0.02

  ctx.beginPath()
  ctx.rect(0, 0, spineWidth, height)
  ctx.stroke()

  ctx.beginPath()
  ctx.rect(spineWidth + gutter, 0, frontWidth, height)
  ctx.stroke()

  const foldLine = spineWidth + gutter * 0.5
  ctx.setLineDash([5, 5])
  ctx.beginPath()
  ctx.moveTo(foldLine, 0)
  ctx.lineTo(foldLine, height)
  ctx.stroke()
  ctx.setLineDash([])
}

export const drawPosterTemplate = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const marginTop = height * 0.15
  const marginSides = width * 0.1
  const marginBottom = height * 0.1

  ctx.beginPath()
  ctx.rect(marginSides, marginTop, width - marginSides * 2, height - marginTop - marginBottom)
  ctx.stroke()

  const headlineHeight = marginTop * 0.4
  ctx.beginPath()
  ctx.moveTo(marginSides, marginTop)
  ctx.lineTo(width - marginSides, marginTop)
  ctx.stroke()

  const bodyTop = marginTop + headlineHeight + 20
  const bodyHeight = height - marginTop - marginBottom - headlineHeight - 40

  ctx.setLineDash([3, 3])
  ctx.beginPath()
  ctx.rect(marginSides + 10, bodyTop, width - marginSides * 2 - 20, bodyHeight * 0.6)
  ctx.stroke()
  ctx.setLineDash([])
}

export const drawBusinessCard = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const cardWidth = Math.min(width, height) * 1.75
  const cardHeight = Math.min(width, height)
  const cardX = (width - cardWidth) / 2
  const cardY = (height - cardHeight) / 2

  ctx.beginPath()
  ctx.rect(cardX, cardY, cardWidth, cardHeight)
  ctx.stroke()

  const bleed = 3
  ctx.setLineDash([2, 2])
  ctx.beginPath()
  ctx.rect(cardX - bleed, cardY - bleed, cardWidth + bleed * 2, cardHeight + bleed * 2)
  ctx.stroke()
  ctx.setLineDash([])

  const logoAreaSize = cardHeight * 0.25
  ctx.beginPath()
  ctx.rect(cardX + 15, cardY + 15, logoAreaSize, logoAreaSize)
  ctx.stroke()

  const textStartX = cardX + 15 + logoAreaSize + 15
  const textWidth = cardWidth - (textStartX - cardX) - 15

  for (let i = 0; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(textStartX, cardY + 25 + i * 12)
    ctx.lineTo(textStartX + textWidth * 0.6, cardY + 25 + i * 12)
    ctx.stroke()
  }
}

export const drawSocialMediaPost = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const isSquare = Math.abs(width - height) < Math.min(width, height) * 0.1
  const isPortrait = height > width

  if (isSquare || isPortrait) {
    const safeWidth = isSquare ? width * 0.8 : height * 0.8
    const safeHeight = safeWidth
    const x = (width - safeWidth) / 2
    const y = (height - safeHeight) / 2

    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.rect(x, y, safeWidth, safeHeight)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.beginPath()
    ctx.rect(x + 10, y + 10, safeWidth - 20, safeHeight - 20)
    ctx.stroke()
  } else {
    const safeWidth = width * 0.8
    const safeHeight = height * 0.8
    const x = (width - safeWidth) / 2
    const y = (height - safeHeight) / 2

    ctx.setLineDash([5, 5])
    ctx.beginPath()
    ctx.rect(x, y, safeWidth, safeHeight)
    ctx.stroke()
    ctx.setLineDash([])

    ctx.beginPath()
    ctx.rect(x + 10, y + 10, safeWidth - 20, safeHeight - 20)
    ctx.stroke()
  }
}