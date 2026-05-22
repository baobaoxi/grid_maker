export const drawArmature = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.moveTo(0, centerY)
  ctx.lineTo(width, centerY)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, 0)
  ctx.lineTo(centerX, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width, 0)
  ctx.lineTo(0, height)
  ctx.stroke()
  
  const thirdW = width / 3
  const thirdH = height / 3
  
  ctx.setLineDash([4, 4])
  for (let i = 1; i < 3; i++) {
    ctx.beginPath()
    ctx.moveTo(thirdW * i, 0)
    ctx.lineTo(thirdW * i, height)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(0, thirdH * i)
    ctx.lineTo(width, thirdH * i)
    ctx.stroke()
  }
  
  ctx.beginPath()
  ctx.moveTo(thirdW, 0)
  ctx.lineTo(width, thirdH)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width - thirdW, 0)
  ctx.lineTo(0, thirdH)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, height - thirdH)
  ctx.lineTo(width - thirdW, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width, height - thirdH)
  ctx.lineTo(thirdW, height)
  ctx.stroke()
  ctx.setLineDash([])
}

export const drawRabatment = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const shortSide = Math.min(width, height)
  const longSide = Math.max(width, height)
  const rabatment = shortSide
  
  if (width > height) {
    ctx.beginPath()
    ctx.moveTo(rabatment, 0)
    ctx.lineTo(rabatment, height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(width - rabatment, 0)
    ctx.lineTo(width - rabatment, height)
    ctx.stroke()
  } else {
    ctx.beginPath()
    ctx.moveTo(0, rabatment)
    ctx.lineTo(width, rabatment)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0, height - rabatment)
    ctx.lineTo(width, height - rabatment)
    ctx.stroke()
  }
}

export const drawBaroqueDiagonal = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
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

export const drawSinisterDiagonal = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
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

export const drawReciprocalLines = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(width, 0)
  ctx.lineTo(0, height)
  ctx.stroke()
  
  ctx.setLineDash([3, 3])
  
  ctx.beginPath()
  ctx.moveTo(0, centerY)
  ctx.lineTo(width, centerY)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, 0)
  ctx.lineTo(centerX, height)
  ctx.stroke()
  
  ctx.setLineDash([])
}