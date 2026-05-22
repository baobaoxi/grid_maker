export const drawOnePointPerspective = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  for (let i = 0; i <= 10; i++) {
    const x = (width / 10) * i
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(centerX, centerY)
    ctx.stroke()
  }
  
  ctx.beginPath()
  ctx.moveTo(0, height * 0.6)
  ctx.lineTo(width, height * 0.6)
  ctx.stroke()
}

export const drawTwoPointPerspective = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const leftX = width * 0.2
  const rightX = width * 0.8
  const horizonY = height * 0.4
  
  ctx.beginPath()
  ctx.arc(leftX, horizonY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(rightX, horizonY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, horizonY)
  ctx.lineTo(width, horizonY)
  ctx.stroke()
  
  for (let i = 0; i <= 10; i++) {
    const x = (width / 10) * i
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(leftX, horizonY)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(rightX, horizonY)
    ctx.stroke()
  }
}

export const drawThreePointPerspective = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const leftX = width * 0.2
  const rightX = width * 0.8
  const horizonY = height * 0.4
  const bottomX = width / 2
  const bottomY = height * 0.9
  
  ctx.beginPath()
  ctx.arc(leftX, horizonY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(rightX, horizonY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(bottomX, bottomY, 5, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(0, horizonY)
  ctx.lineTo(width, horizonY)
  ctx.stroke()
  
  for (let i = 0; i <= 10; i++) {
    const x = (width / 10) * i
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(leftX, horizonY)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(rightX, horizonY)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(x, height)
    ctx.lineTo(bottomX, bottomY)
    ctx.stroke()
  }
}

export const drawIsometric = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.stroke()
}

export const drawFisheye = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.4
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  for (let i = 0; i < 5; i++) {
    const r = radius * (i + 1) / 5
    ctx.beginPath()
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2)
    ctx.stroke()
  }
  
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 * i) / 12
    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle))
    ctx.stroke()
  }
}

export const drawDimetric = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  const angle1 = Math.PI / 6
  const angle2 = Math.PI / 3
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY - size * Math.sin(angle1))
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY + size * Math.sin(angle1))
  ctx.lineTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY + size * Math.sin(angle1))
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY - size * Math.sin(angle1))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size * Math.cos(angle2), centerY - size * Math.sin(angle2))
  ctx.lineTo(centerX + size * Math.cos(angle2), centerY + size * Math.sin(angle2))
  ctx.stroke()
}

export const drawTrimetric = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  const angle1 = Math.PI / 8
  const angle2 = Math.PI / 4
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY - size * Math.sin(angle1))
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY + size * Math.sin(angle1))
  ctx.lineTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY + size * Math.sin(angle1))
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY - size * Math.sin(angle1))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size * Math.cos(angle2), centerY - size * Math.sin(angle2))
  ctx.lineTo(centerX + size * Math.cos(angle2), centerY + size * Math.sin(angle2))
  ctx.stroke()
}

export const drawAnamorphic = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, size, size * 0.6, 0, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, size * 0.7, size * 0.4, 0, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.ellipse(centerX, centerY, size * 0.4, size * 0.2, 0, 0, Math.PI * 2)
  ctx.stroke()
}