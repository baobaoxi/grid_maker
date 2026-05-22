export const drawDiagonalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
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
  
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i - width, height)
    ctx.stroke()
  }
}

export const drawFixedGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const spacing = 50
  
  for (let x = spacing; x < width; x += spacing) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }
  
  for (let y = spacing; y < height; y += spacing) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
}

export const drawProportionalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const phi = 1.618
  const goldenWidth = width / phi
  const goldenHeight = height / phi
  
  ctx.beginPath()
  ctx.moveTo(goldenWidth, 0)
  ctx.lineTo(goldenWidth, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width - goldenWidth, 0)
  ctx.lineTo(width - goldenWidth, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, goldenHeight)
  ctx.lineTo(width, goldenHeight)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, height - goldenHeight)
  ctx.lineTo(width, height - goldenHeight)
  ctx.stroke()
}

export const drawCrossDiagonal = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width, 0)
  ctx.lineTo(0, height)
  ctx.stroke()
  
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
}

export const drawPortraitFace = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
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
  
  const eyeLineY = centerY - height * 0.15
  ctx.beginPath()
  ctx.moveTo(0, eyeLineY)
  ctx.lineTo(width, eyeLineY)
  ctx.stroke()
  
  const noseLineY = centerY + height * 0.05
  ctx.beginPath()
  ctx.moveTo(0, noseLineY)
  ctx.lineTo(width, noseLineY)
  ctx.stroke()
  
  const mouthLineY = centerY + height * 0.2
  ctx.beginPath()
  ctx.moveTo(0, mouthLineY)
  ctx.lineTo(width, mouthLineY)
  ctx.stroke()
}

export const drawLoomisHead = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const headHeight = height * 0.7
  const headWidth = headHeight * 0.7
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, headWidth / 2, headHeight / 2, 0, 0, Math.PI * 2)
  ctx.stroke()
  
  const eyeLineY = centerY - headHeight * 0.1
  ctx.beginPath()
  ctx.moveTo(centerX - headWidth / 2, eyeLineY)
  ctx.lineTo(centerX + headWidth / 2, eyeLineY)
  ctx.stroke()
  
  const browLineY = eyeLineY - headHeight * 0.1
  ctx.beginPath()
  ctx.moveTo(centerX - headWidth / 2, browLineY)
  ctx.lineTo(centerX + headWidth / 2, browLineY)
  ctx.stroke()
  
  const noseLineY = centerY + headHeight * 0.05
  ctx.beginPath()
  ctx.moveTo(centerX - headWidth / 2, noseLineY)
  ctx.lineTo(centerX + headWidth / 2, noseLineY)
  ctx.stroke()
  
  const mouthLineY = centerY + headHeight * 0.2
  ctx.beginPath()
  ctx.moveTo(centerX - headWidth / 2, mouthLineY)
  ctx.lineTo(centerX + headWidth / 2, mouthLineY)
  ctx.stroke()
  
  const chinLineY = centerY + headHeight * 0.35
  ctx.beginPath()
  ctx.moveTo(centerX - headWidth / 2, chinLineY)
  ctx.lineTo(centerX + headWidth / 2, chinLineY)
  ctx.stroke()
}

export const drawFigureProportion = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const figureHeight = height * 0.85
  const headHeight = figureHeight / 8
  
  for (let i = 0; i <= 8; i++) {
    const y = (height - figureHeight) / 2 + i * headHeight
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }
  
  ctx.beginPath()
  ctx.moveTo(centerX, (height - figureHeight) / 2)
  ctx.lineTo(centerX, (height - figureHeight) / 2 + figureHeight)
  ctx.stroke()
  
  const shoulderY = (height - figureHeight) / 2 + headHeight * 1.5
  ctx.beginPath()
  ctx.moveTo(centerX - width * 0.15, shoulderY)
  ctx.lineTo(centerX + width * 0.15, shoulderY)
  ctx.stroke()
  
  const waistY = (height - figureHeight) / 2 + headHeight * 3
  ctx.beginPath()
  ctx.moveTo(centerX - width * 0.1, waistY)
  ctx.lineTo(centerX + width * 0.1, waistY)
  ctx.stroke()
  
  const hipY = (height - figureHeight) / 2 + headHeight * 4
  ctx.beginPath()
  ctx.moveTo(centerX - width * 0.12, hipY)
  ctx.lineTo(centerX + width * 0.12, hipY)
  ctx.stroke()
}

export const drawMuralScaling = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
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
  
  ctx.setLineDash([5, 5])
  for (let i = 1; i < cols; i++) {
    for (let j = 1; j < rows; j++) {
      ctx.beginPath()
      ctx.moveTo(colWidth * i, 0)
      ctx.lineTo(colWidth * i, rowHeight * j)
      ctx.stroke()
      
      ctx.beginPath()
      ctx.moveTo(0, rowHeight * j)
      ctx.lineTo(colWidth * i, rowHeight * j)
      ctx.stroke()
    }
  }
  ctx.setLineDash([])
}