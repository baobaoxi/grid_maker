export const drawRoot2 = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const ratio = Math.sqrt(2)
  const squareSize = Math.min(width, height / ratio)
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize * ratio / 2, squareSize, squareSize * ratio)
  ctx.stroke()
}

export const drawRoot3 = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const ratio = Math.sqrt(3)
  const squareSize = Math.min(width, height / ratio)
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize * ratio / 2, squareSize, squareSize * ratio)
  ctx.stroke()
}

export const drawRoot4 = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const ratio = 2
  const squareSize = Math.min(width, height / ratio)
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize * ratio / 2, squareSize, squareSize * ratio)
  ctx.stroke()
}

export const drawRoot5 = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const ratio = Math.sqrt(5)
  const squareSize = Math.min(width, height / ratio)
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize / 2, squareSize, squareSize)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.rect(centerX - squareSize / 2, centerY - squareSize * ratio / 2, squareSize, squareSize * ratio)
  ctx.stroke()
}

export const drawPhiRectangle = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const phi = 1.618
  const rectWidth = width
  const rectHeight = width / phi
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight)
  ctx.stroke()
}

export const drawRectangle15 = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const ratio = 1.5
  const rectWidth = width
  const rectHeight = width / ratio
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.rect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight)
  ctx.stroke()
}