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

export const drawFloorPlan = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const roomWidth = width / 4
  const roomHeight = height / 3

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 4; col++) {
      const x = col * roomWidth
      const y = row * roomHeight

      ctx.beginPath()
      ctx.rect(x + 5, y + 5, roomWidth - 10, roomHeight - 10)
      ctx.stroke()
    }
  }

  const doorSize = 20
  ctx.beginPath()
  ctx.moveTo(roomWidth * 2, roomHeight)
  ctx.lineTo(roomWidth * 2 + doorSize, roomHeight - doorSize)
  ctx.stroke()

  ctx.beginPath()
  ctx.arc(roomWidth * 2, roomHeight, doorSize, -Math.PI / 2, 0)
  ctx.stroke()
}

export const drawElevationGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const baseline = height * 0.9

  ctx.beginPath()
  ctx.moveTo(0, baseline)
  ctx.lineTo(width, baseline)
  ctx.stroke()

  const floorHeight = 30
  const floorY = baseline - floorHeight

  ctx.beginPath()
  ctx.moveTo(0, floorY)
  ctx.lineTo(width, floorY)
  ctx.stroke()

  const windowWidth = 60
  const windowHeight = 80
  const windowSpacing = 100

  for (let x = 50; x < width - 50; x += windowSpacing) {
    ctx.beginPath()
    ctx.rect(x, floorY - windowHeight, windowWidth, windowHeight)
    ctx.stroke()
  }

  const doorWidth = 50
  const doorHeight = 100
  ctx.beginPath()
  ctx.rect(width / 2 - doorWidth / 2, baseline - doorHeight, doorWidth, doorHeight)
  ctx.stroke()
}

export const drawSectionGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const groundLevel = height * 0.85

  ctx.beginPath()
  ctx.moveTo(0, groundLevel)
  ctx.lineTo(width, groundLevel)
  ctx.stroke()

  const scale = 20
  const scaleHeight = 40

  ctx.beginPath()
  ctx.moveTo(30, groundLevel)
  ctx.lineTo(30, groundLevel - scaleHeight)
  ctx.stroke()

  for (let i = 0; i < 5; i++) {
    const y = groundLevel - i * scale
    ctx.beginPath()
    ctx.moveTo(25, y)
    ctx.lineTo(35, y)
    ctx.stroke()
  }

  ctx.beginPath()
  ctx.moveTo(25, groundLevel)
  ctx.lineTo(25, groundLevel - scaleHeight)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(25, groundLevel)
  ctx.lineTo(35, groundLevel)
  ctx.stroke()

  ctx.font = '10px Arial'
  ctx.fillStyle = color
  ctx.fillText('0', 15, groundLevel + 3)
  ctx.fillText(String(scale), 15, groundLevel - scaleHeight + 3)
}

export const drawSitePlan = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.rect(20, 20, width - 40, height - 40)
  ctx.stroke()

  const propertyWidth = width - 80
  const propertyHeight = height - 80

  ctx.setLineDash([5, 5])
  ctx.beginPath()
  ctx.rect(40, 40, propertyWidth, propertyHeight)
  ctx.stroke()
  ctx.setLineDash([])

  const buildingWidth = propertyWidth * 0.4
  const buildingHeight = propertyHeight * 0.5
  const buildingX = 40 + (propertyWidth - buildingWidth) / 2
  const buildingY = 40 + (propertyHeight - buildingHeight) / 2

  ctx.beginPath()
  ctx.rect(buildingX, buildingY, buildingWidth, buildingHeight)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(20, 20)
  ctx.lineTo(0, 0)
  ctx.moveTo(20, 20)
  ctx.lineTo(0, 20)
  ctx.moveTo(20, 20)
  ctx.lineTo(20, 0)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(width - 20, 20)
  ctx.lineTo(width, 0)
  ctx.moveTo(width - 20, 20)
  ctx.lineTo(width, 20)
  ctx.moveTo(width - 20, 20)
  ctx.lineTo(width - 20, 0)
  ctx.stroke()
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