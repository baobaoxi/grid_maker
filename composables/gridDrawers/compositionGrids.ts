export const drawRuleOfThirds = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const thirdW = width / 3
  const thirdH = height / 3
  
  ctx.beginPath()
  ctx.moveTo(thirdW, 0)
  ctx.lineTo(thirdW, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(thirdW * 2, 0)
  ctx.lineTo(thirdW * 2, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, thirdH)
  ctx.lineTo(width, thirdH)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, thirdH * 2)
  ctx.lineTo(width, thirdH * 2)
  ctx.stroke()
}

export const drawGoldenRatio = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
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

export const drawGoldenSpiral = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const phi = 1.618
  const size = Math.min(width, height)
  const centerX = width / 2
  const centerY = height / 2
  const startX = centerX - size / 2
  const startY = centerY - size / 2
  
  let x = startX
  let y = startY
  let currentSize = size
  
  ctx.beginPath()
  ctx.moveTo(x, y)
  
  for (let i = 0; i < 8; i++) {
    const nextSize = currentSize / phi
    
    ctx.arc(x + currentSize, y + currentSize, currentSize, Math.PI, Math.PI * 1.5)
    x += currentSize
    currentSize = nextSize
    
    ctx.arc(x, y + currentSize, currentSize, Math.PI * 1.5, 0)
    y += currentSize
    currentSize = nextSize
    
    ctx.arc(x - currentSize, y, currentSize, 0, Math.PI * 0.5)
    x -= currentSize
    currentSize = nextSize
    
    ctx.arc(x, y - currentSize, currentSize, Math.PI * 0.5, Math.PI)
    y -= currentSize
    currentSize = nextSize
  }
  
  ctx.stroke()
}

export const drawGoldenTriangle = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const phi = 1.618
  const triangleHeight = height * 0.8
  const baseWidth = triangleHeight * phi
  
  const centerX = width / 2
  const topY = (height - triangleHeight) / 2
  const bottomY = topY + triangleHeight
  
  ctx.beginPath()
  ctx.moveTo(centerX, topY)
  ctx.lineTo(centerX - baseWidth / 2, bottomY)
  ctx.lineTo(centerX + baseWidth / 2, bottomY)
  ctx.closePath()
  ctx.stroke()
  
  const midY = topY + triangleHeight / 2
  ctx.beginPath()
  ctx.moveTo(centerX, topY)
  ctx.lineTo(centerX, bottomY)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - baseWidth / 2, bottomY)
  ctx.lineTo(centerX + baseWidth / 2, bottomY)
  ctx.stroke()
}

export const drawDiagonalMethod = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
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

export const drawCenterCross = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
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
}

export const drawRuleOfFifths = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const fifthW = width / 5
  const fifthH = height / 5
  
  for (let i = 1; i < 5; i++) {
    ctx.beginPath()
    ctx.moveTo(fifthW * i, 0)
    ctx.lineTo(fifthW * i, height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0, fifthH * i)
    ctx.lineTo(width, fifthH * i)
    ctx.stroke()
  }
}

export const drawQuadrantGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
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
}