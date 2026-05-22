export const drawTriangularGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const size = Math.min(width, height) * 0.8
  const centerX = width / 2
  const centerY = height / 2
  
  const triangleHeight = size * Math.sqrt(3) / 2
  const startX = centerX - size / 2
  const startY = centerY - triangleHeight / 2
  
  ctx.beginPath()
  ctx.moveTo(startX + size / 2, startY)
  ctx.lineTo(startX + size, startY + triangleHeight)
  ctx.lineTo(startX, startY + triangleHeight)
  ctx.closePath()
  ctx.stroke()
  
  for (let row = 0; row < 4; row++) {
    const y = startY + (triangleHeight / 4) * row
    ctx.beginPath()
    ctx.moveTo(startX + (size / 4) * row, y)
    ctx.lineTo(startX + size - (size / 4) * row, y)
    ctx.stroke()
  }
}

export const drawHexagonalGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const size = Math.min(width, height) * 0.15
  const cols = Math.ceil(width / (size * 1.5)) + 1
  const rows = Math.ceil(height / (size * Math.sqrt(3))) + 1
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * size * 1.5
      const y = row * size * Math.sqrt(3) + (col % 2 === 1 ? size * Math.sqrt(3) / 2 : 0)
      
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6
        const px = x + size * Math.cos(angle)
        const py = y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }
  }
}

export const drawRadialGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) * 0.45
  
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, maxRadius * i / 5, 0, Math.PI * 2)
    ctx.stroke()
  }
  
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 * i) / 12
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle))
    ctx.stroke()
  }
}

export const drawDotGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.fillStyle = color
  
  const spacing = 30
  const dotSize = 3
  
  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      ctx.beginPath()
      ctx.arc(x, y, dotSize, 0, Math.PI * 2)
      ctx.fill()
    }
  }
}

export const drawDiamondGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const size = 40
  const cols = Math.ceil(width / size) + 1
  const rows = Math.ceil(height / size) + 1
  
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * size
      const y = row * size
      
      ctx.beginPath()
      ctx.moveTo(x + size / 2, y)
      ctx.lineTo(x + size, y + size / 2)
      ctx.lineTo(x + size / 2, y + size)
      ctx.lineTo(x, y + size / 2)
      ctx.closePath()
      ctx.stroke()
    }
  }
}

export const drawPolarGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) * 0.45
  
  for (let i = 1; i <= 6; i++) {
    ctx.beginPath()
    ctx.arc(centerX, centerY, maxRadius * i / 6, 0, Math.PI * 2)
    ctx.stroke()
  }
  
  for (let i = 0; i < 16; i++) {
    const angle = (Math.PI * 2 * i) / 16
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle))
    ctx.stroke()
  }
}

export const drawCrossHairGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
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
  
  const size = Math.min(width, height) * 0.3
  
  ctx.beginPath()
  ctx.moveTo(centerX - size, centerY)
  ctx.lineTo(centerX + size, centerY)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, size * 0.1, 0, Math.PI * 2)
  ctx.stroke()
}