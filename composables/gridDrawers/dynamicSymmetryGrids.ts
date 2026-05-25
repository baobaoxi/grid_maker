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

export const drawDynamicSymmetry = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  ctx.beginPath()
  ctx.rect(0, 0, width, height)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(width, height)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(width, 0)
  ctx.lineTo(0, height)
  ctx.stroke()

  const root2 = Math.sqrt(2)
  const diagonal = width * root2
  const offset = (diagonal - width) / 2

  ctx.beginPath()
  ctx.moveTo(-offset, 0)
  ctx.lineTo(width + offset, height)
  ctx.stroke()

  ctx.beginPath()
  ctx.moveTo(width + offset, 0)
  ctx.lineTo(-offset, height)
  ctx.stroke()
}

export const drawGoldenRectangle = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const phi = 1.618033988749895
  let w = width
  let h = height

  if (w / h > phi) {
    w = h * phi
  } else {
    h = w / phi
  }

  const centerX = width / 2
  const centerY = height / 2

  ctx.beginPath()
  ctx.rect(centerX - w / 2, centerY - h / 2, w, h)
  ctx.stroke()

  let remainingW = width - w
  let remainingH = height - h

  ctx.strokeStyle = color + '80'
  while (remainingW > 20 && remainingH > 20) {
    if (remainingW > remainingH) {
      remainingW = remainingH * phi
    } else {
      remainingH = remainingW / phi
    }

    if (remainingW > width - w || remainingH > height - h) break

    ctx.beginPath()
    ctx.rect(centerX - w / 2 - remainingW, centerY - h / 2 - remainingH, remainingW, remainingH)
    ctx.stroke()
  }
}

export const drawSilverRectangle = (ctx: CanvasRenderingContext2D, width: number, height: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth

  const silverRatio = 1 + Math.sqrt(2)
  let w = width
  let h = height

  if (w / h > silverRatio) {
    w = h * silverRatio
  } else {
    h = w / silverRatio
  }

  const centerX = width / 2
  const centerY = height / 2

  ctx.beginPath()
  ctx.rect(centerX - w / 2, centerY - h / 2, w, h)
  ctx.stroke()

  let remainingW = width - w
  let remainingH = height - h

  ctx.strokeStyle = color + '80'
  while (remainingW > 20 && remainingH > 20) {
    if (remainingW > remainingH) {
      remainingW = remainingH * silverRatio
    } else {
      remainingH = remainingW / silverRatio
    }

    if (remainingW > width - w || remainingH > height - h) break

    ctx.beginPath()
    ctx.rect(centerX - w / 2 - remainingW, centerY - h / 2 - remainingH, remainingW, remainingH)
    ctx.stroke()
  }
}