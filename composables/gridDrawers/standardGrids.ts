export const drawStandardGrid = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number, color: string, lineWidth: number) => {
  ctx.strokeStyle = color
  ctx.lineWidth = lineWidth
  
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 1; i < cols; i++) {
    ctx.beginPath()
    ctx.moveTo(colWidth * i, 0)
    ctx.lineTo(colWidth * i, height)
    ctx.stroke()
  }
  
  for (let i = 1; i < rows; i++) {
    ctx.beginPath()
    ctx.moveTo(0, rowHeight * i)
    ctx.lineTo(width, rowHeight * i)
    ctx.stroke()
  }
}

export const drawLabels = (ctx: CanvasRenderingContext2D, width: number, height: number, cols: number, rows: number, color: string, gridType: string) => {
  ctx.fillStyle = color
  ctx.font = '10px Arial'
  ctx.textAlign = 'center'
  
  const colWidth = width / cols
  const rowHeight = height / rows
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      ctx.fillText(`${i},${j}`, colWidth * i + colWidth / 2, rowHeight * j + rowHeight / 2)
    }
  }
}