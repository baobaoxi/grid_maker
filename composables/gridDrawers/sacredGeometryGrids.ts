export const drawFlowerOfLife = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.08
  
  const positions = [
    { x: 0, y: 0 },
    { x: radius, y: 0 },
    { x: -radius, y: 0 },
    { x: radius / 2, y: radius * Math.sqrt(3) / 2 },
    { x: -radius / 2, y: radius * Math.sqrt(3) / 2 },
    { x: radius / 2, y: -radius * Math.sqrt(3) / 2 },
    { x: -radius / 2, y: -radius * Math.sqrt(3) / 2 }
  ]
  
  positions.forEach(pos => {
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, radius, 0, Math.PI * 2)
    ctx.stroke()
  })
}

export const drawSeedOfLife = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.12
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 * i) / 6
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.stroke()
  }
}

export const drawMetatronsCube = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.15
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI * 2 * i) / 6
    const x = centerX + radius * Math.cos(angle)
    const y = centerY + radius * Math.sin(angle)
    
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.stroke()
    
    for (let j = 0; j < 6; j++) {
      const angle2 = (Math.PI * 2 * j) / 6
      const x2 = x + radius * Math.cos(angle2)
      const y2 = y + radius * Math.sin(angle2)
      
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x2, y2)
      ctx.stroke()
    }
  }
}

export const drawVesicaPiscis = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.25
  
  ctx.beginPath()
  ctx.arc(centerX - radius / 2, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX + radius / 2, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
}

export const drawSriYantra = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.4
  
  for (let i = 0; i < 9; i++) {
    const triangleSize = size * (1 - i * 0.1)
    const inverted = i % 2 === 1
    
    ctx.beginPath()
    if (inverted) {
      ctx.moveTo(centerX, centerY + triangleSize)
      ctx.lineTo(centerX - triangleSize * Math.cos(Math.PI / 6), centerY - triangleSize * Math.sin(Math.PI / 6))
      ctx.lineTo(centerX + triangleSize * Math.cos(Math.PI / 6), centerY - triangleSize * Math.sin(Math.PI / 6))
    } else {
      ctx.moveTo(centerX, centerY - triangleSize)
      ctx.lineTo(centerX + triangleSize * Math.cos(Math.PI / 6), centerY + triangleSize * Math.sin(Math.PI / 6))
      ctx.lineTo(centerX - triangleSize * Math.cos(Math.PI / 6), centerY + triangleSize * Math.sin(Math.PI / 6))
    }
    ctx.closePath()
    ctx.stroke()
  }
}

export const drawTreeOfLife = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  const circles = [
    { x: 0, y: -size },
    { x: -size * 0.5, y: -size * 0.5 },
    { x: size * 0.5, y: -size * 0.5 },
    { x: -size, y: 0 },
    { x: 0, y: 0 },
    { x: size, y: 0 },
    { x: -size * 0.5, y: size * 0.5 },
    { x: size * 0.5, y: size * 0.5 },
    { x: 0, y: size },
    { x: 0, y: -size * 0.5 }
  ]
  
  circles.forEach(pos => {
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, size * 0.15, 0, Math.PI * 2)
    ctx.stroke()
  })
  
  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 5], [3, 4], [4, 5],
    [3, 6], [5, 7], [6, 8], [7, 8], [4, 9], [6, 9], [7, 9]
  ]
  
  connections.forEach(([from, to]) => {
    ctx.beginPath()
    ctx.moveTo(centerX + circles[from].x, centerY + circles[from].y)
    ctx.lineTo(centerX + circles[to].x, centerY + circles[to].y)
    ctx.stroke()
  })
}

export const drawMerkaba = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  const angle = Math.PI / 6
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(angle), centerY - size * Math.sin(angle))
  ctx.lineTo(centerX + size * Math.cos(angle), centerY + size * Math.sin(angle))
  ctx.lineTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * Math.cos(angle), centerY + size * Math.sin(angle))
  ctx.lineTo(centerX - size * Math.cos(angle), centerY - size * Math.sin(angle))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY + size)
  ctx.lineTo(centerX + size * Math.cos(angle), centerY + size * Math.sin(angle))
  ctx.lineTo(centerX + size * Math.cos(angle), centerY - size * Math.sin(angle))
  ctx.lineTo(centerX, centerY - size)
  ctx.lineTo(centerX - size * Math.cos(angle), centerY - size * Math.sin(angle))
  ctx.lineTo(centerX - size * Math.cos(angle), centerY + size * Math.sin(angle))
  ctx.closePath()
  ctx.stroke()
}

export const drawHexagram = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY + size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.closePath()
  ctx.stroke()
}

export const drawPentagram = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  const points: [number, number][] = []
  for (let i = 0; i < 5; i++) {
    const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
    points.push([
      centerX + size * Math.cos(angle),
      centerY + size * Math.sin(angle)
    ])
  }
  
  ctx.beginPath()
  ctx.moveTo(points[0][0], points[0][1])
  ctx.lineTo(points[2][0], points[2][1])
  ctx.lineTo(points[4][0], points[4][1])
  ctx.lineTo(points[1][0], points[1][1])
  ctx.lineTo(points[3][0], points[3][1])
  ctx.closePath()
  ctx.stroke()
}

export const drawEggOfLife = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.12
  
  const positions = [
    { x: 0, y: -radius },
    { x: radius * Math.cos(Math.PI / 6), y: -radius * Math.sin(Math.PI / 6) },
    { x: radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) },
    { x: 0, y: radius },
    { x: -radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) },
    { x: -radius * Math.cos(Math.PI / 6), y: -radius * Math.sin(Math.PI / 6) },
    { x: 0, y: 0 }
  ]
  
  positions.forEach(pos => {
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, radius, 0, Math.PI * 2)
    ctx.stroke()
  })
}

export const drawFruitOfLife = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.08
  
  const positions = [
    { x: 0, y: 0 },
    { x: radius, y: 0 },
    { x: -radius, y: 0 },
    { x: radius / 2, y: radius * Math.sqrt(3) / 2 },
    { x: -radius / 2, y: radius * Math.sqrt(3) / 2 },
    { x: radius / 2, y: -radius * Math.sqrt(3) / 2 },
    { x: -radius / 2, y: -radius * Math.sqrt(3) / 2 },
    { x: radius, y: radius * Math.sqrt(3) },
    { x: -radius, y: radius * Math.sqrt(3) },
    { x: radius, y: -radius * Math.sqrt(3) },
    { x: -radius, y: -radius * Math.sqrt(3) },
    { x: radius * 1.5, y: 0 },
    { x: -radius * 1.5, y: 0 }
  ]
  
  positions.forEach(pos => {
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, radius, 0, Math.PI * 2)
    ctx.stroke()
  })
}

export const drawYinYang = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.35
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY - radius / 2, radius / 2, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY + radius / 2, radius / 2, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY - radius / 2, radius * 0.15, 0, Math.PI * 2)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY + radius / 2, radius * 0.15, 0, Math.PI * 2)
  ctx.stroke()
}

export const drawEnneagram = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.35
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
  ctx.stroke()
  
  const points: [number, number][] = []
  for (let i = 0; i < 9; i++) {
    const angle = (Math.PI * 2 * i) / 9 - Math.PI / 2
    points.push([
      centerX + radius * Math.cos(angle),
      centerY + radius * Math.sin(angle)
    ])
  }
  
  const connections = [[0, 4], [4, 2], [2, 8], [8, 1], [1, 5], [5, 7], [7, 3], [3, 6], [6, 0]]
  
  connections.forEach(([from, to]) => {
    ctx.beginPath()
    ctx.moveTo(points[from][0], points[from][1])
    ctx.lineTo(points[to][0], points[to][1])
    ctx.stroke()
  })
}

export const drawIslamic8PointStar = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 4), centerY - size * Math.sin(Math.PI / 4))
  ctx.lineTo(centerX + size, centerY)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 4), centerY + size * Math.sin(Math.PI / 4))
  ctx.lineTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 4), centerY + size * Math.sin(Math.PI / 4))
  ctx.lineTo(centerX - size, centerY)
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 4), centerY - size * Math.sin(Math.PI / 4))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX, centerY + size)
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size, centerY)
  ctx.lineTo(centerX + size, centerY)
  ctx.stroke()
}

export const drawIslamic12PointStar = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  const points: [number, number][] = []
  for (let i = 0; i < 12; i++) {
    const angle = (Math.PI * 2 * i) / 12
    points.push([
      centerX + size * Math.cos(angle),
      centerY + size * Math.sin(angle)
    ])
  }
  
  for (let i = 0; i < 12; i++) {
    ctx.beginPath()
    ctx.moveTo(points[i][0], points[i][1])
    ctx.lineTo(points[(i + 5) % 12][0], points[(i + 5) % 12][1])
    ctx.stroke()
  }
}

export const drawBorromeanRings = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.25
  
  const positions = [
    { x: 0, y: -radius * 0.5 },
    { x: radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) },
    { x: -radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) }
  ]
  
  positions.forEach(pos => {
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, radius, 0, Math.PI * 2)
    ctx.stroke()
  })
}

export const drawTorusField = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const maxRadius = Math.min(width, height) * 0.4
  
  for (let i = 1; i <= 8; i++) {
    const radius = maxRadius * i / 8
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
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

export const drawAinSoph = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.35
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY + size)
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6))
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.arc(centerX, centerY, size * 0.5, 0, Math.PI * 2)
  ctx.stroke()
}

export const drawCelticTriquetra = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const radius = Math.min(width, height) * 0.25
  
  const positions = [
    { x: 0, y: -radius },
    { x: radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) },
    { x: -radius * Math.cos(Math.PI / 6), y: radius * Math.sin(Math.PI / 6) }
  ]
  
  positions.forEach((pos, i) => {
    const nextPos = positions[(i + 1) % 3]
    ctx.beginPath()
    ctx.arc(centerX + pos.x, centerY + pos.y, radius, 0, Math.PI * 2)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(centerX + pos.x, centerY + pos.y)
    ctx.lineTo(centerX + nextPos.x, centerY + nextPos.y)
    ctx.stroke()
  })
}

export const drawPlatonicSolids = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const centerX = width / 2
  const centerY = height / 2
  const size = Math.min(width, height) * 0.15
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY - size)
  ctx.lineTo(centerX + size * 0.8, centerY + size * 0.5)
  ctx.lineTo(centerX - size * 0.8, centerY + size * 0.5)
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX, centerY + size)
  ctx.lineTo(centerX - size * 0.8, centerY - size * 0.5)
  ctx.lineTo(centerX + size * 0.8, centerY - size * 0.5)
  ctx.closePath()
  ctx.stroke()
  
  ctx.beginPath()
  ctx.moveTo(centerX - size, centerY)
  ctx.lineTo(centerX + size * 0.5, centerY - size * 0.8)
  ctx.lineTo(centerX + size * 0.5, centerY + size * 0.8)
  ctx.closePath()
  ctx.stroke()
}