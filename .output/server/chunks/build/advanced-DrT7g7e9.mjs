import { defineComponent, ref, reactive, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from 'vue/server-renderer';
import AppNavbar from './AppNavbar-CRd660Id.mjs';
import { _ as _sfc_main$1 } from './AppFooter-kkN9JGJC.mjs';
import { P as PageGuide } from './PageGuide-CPqjQ-_e.mjs';
import { u as useHead } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const drawStandardGrid = (ctx, width, height, cols, rows, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  for (let i = 1; i < cols; i++) {
    ctx.beginPath();
    ctx.moveTo(colWidth * i, 0);
    ctx.lineTo(colWidth * i, height);
    ctx.stroke();
  }
  for (let i = 1; i < rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, rowHeight * i);
    ctx.lineTo(width, rowHeight * i);
    ctx.stroke();
  }
};
const drawRuleOfThirds = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const thirdW = width / 3;
  const thirdH = height / 3;
  ctx.beginPath();
  ctx.moveTo(thirdW, 0);
  ctx.lineTo(thirdW, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(thirdW * 2, 0);
  ctx.lineTo(thirdW * 2, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, thirdH);
  ctx.lineTo(width, thirdH);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, thirdH * 2);
  ctx.lineTo(width, thirdH * 2);
  ctx.stroke();
};
const drawGoldenRatio = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const phi = 1.618;
  const goldenWidth = width / phi;
  const goldenHeight = height / phi;
  ctx.beginPath();
  ctx.moveTo(goldenWidth, 0);
  ctx.lineTo(goldenWidth, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width - goldenWidth, 0);
  ctx.lineTo(width - goldenWidth, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, goldenHeight);
  ctx.lineTo(width, goldenHeight);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height - goldenHeight);
  ctx.lineTo(width, height - goldenHeight);
  ctx.stroke();
};
const drawGoldenSpiral = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const phi = 1.618;
  const size = Math.min(width, height);
  const centerX = width / 2;
  const centerY = height / 2;
  const startX = centerX - size / 2;
  const startY = centerY - size / 2;
  let x = startX;
  let y = startY;
  let currentSize = size;
  ctx.beginPath();
  ctx.moveTo(x, y);
  for (let i = 0; i < 8; i++) {
    const nextSize = currentSize / phi;
    ctx.arc(x + currentSize, y + currentSize, currentSize, Math.PI, Math.PI * 1.5);
    x += currentSize;
    currentSize = nextSize;
    ctx.arc(x, y + currentSize, currentSize, Math.PI * 1.5, 0);
    y += currentSize;
    currentSize = nextSize;
    ctx.arc(x - currentSize, y, currentSize, 0, Math.PI * 0.5);
    x -= currentSize;
    currentSize = nextSize;
    ctx.arc(x, y - currentSize, currentSize, Math.PI * 0.5, Math.PI);
    y -= currentSize;
    currentSize = nextSize;
  }
  ctx.stroke();
};
const drawGoldenTriangle = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const phi = 1.618;
  const triangleHeight = height * 0.8;
  const baseWidth = triangleHeight * phi;
  const centerX = width / 2;
  const topY = (height - triangleHeight) / 2;
  const bottomY = topY + triangleHeight;
  ctx.beginPath();
  ctx.moveTo(centerX, topY);
  ctx.lineTo(centerX - baseWidth / 2, bottomY);
  ctx.lineTo(centerX + baseWidth / 2, bottomY);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, topY);
  ctx.lineTo(centerX, bottomY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX - baseWidth / 2, bottomY);
  ctx.lineTo(centerX + baseWidth / 2, bottomY);
  ctx.stroke();
};
const drawDiagonalMethod = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width, 0);
  ctx.lineTo(0, height);
  ctx.stroke();
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
};
const drawCenterCross = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
};
const drawRuleOfFifths = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const fifthW = width / 5;
  const fifthH = height / 5;
  for (let i = 1; i < 5; i++) {
    ctx.beginPath();
    ctx.moveTo(fifthW * i, 0);
    ctx.lineTo(fifthW * i, height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, fifthH * i);
    ctx.lineTo(width, fifthH * i);
    ctx.stroke();
  }
};
const drawQuadrantGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
};
const drawOnePointPerspective = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, 5, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i <= 10; i++) {
    const x = width / 10 * i;
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(centerX, centerY);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(0, height * 0.6);
  ctx.lineTo(width, height * 0.6);
  ctx.stroke();
};
const drawTwoPointPerspective = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const leftX = width * 0.2;
  const rightX = width * 0.8;
  const horizonY = height * 0.4;
  ctx.beginPath();
  ctx.arc(leftX, horizonY, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(rightX, horizonY, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, horizonY);
  ctx.lineTo(width, horizonY);
  ctx.stroke();
  for (let i = 0; i <= 10; i++) {
    const x = width / 10 * i;
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(leftX, horizonY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(rightX, horizonY);
    ctx.stroke();
  }
};
const drawThreePointPerspective = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const leftX = width * 0.2;
  const rightX = width * 0.8;
  const horizonY = height * 0.4;
  const bottomX = width / 2;
  const bottomY = height * 0.9;
  ctx.beginPath();
  ctx.arc(leftX, horizonY, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(rightX, horizonY, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(bottomX, bottomY, 5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, horizonY);
  ctx.lineTo(width, horizonY);
  ctx.stroke();
  for (let i = 0; i <= 10; i++) {
    const x = width / 10 * i;
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(leftX, horizonY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(rightX, horizonY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, height);
    ctx.lineTo(bottomX, bottomY);
    ctx.stroke();
  }
};
const drawIsometric = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const size = Math.min(width, height) * 0.4;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6));
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6));
  ctx.lineTo(centerX, centerY + size);
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6));
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX, centerY + size);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX - size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6));
  ctx.lineTo(centerX + size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6));
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX + size * Math.cos(Math.PI / 6), centerY - size * Math.sin(Math.PI / 6));
  ctx.lineTo(centerX - size * Math.cos(Math.PI / 6), centerY + size * Math.sin(Math.PI / 6));
  ctx.stroke();
};
const drawFisheye = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.4;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.stroke();
  for (let i = 0; i < 5; i++) {
    const r = radius * (i + 1) / 5;
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (let i = 0; i < 12; i++) {
    const angle = Math.PI * 2 * i / 12;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
    ctx.stroke();
  }
};
const drawDimetric = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const size = Math.min(width, height) * 0.4;
  const angle1 = Math.PI / 6;
  const angle2 = Math.PI / 3;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY - size * Math.sin(angle1));
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY + size * Math.sin(angle1));
  ctx.lineTo(centerX, centerY + size);
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY + size * Math.sin(angle1));
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY - size * Math.sin(angle1));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX, centerY + size);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX - size * Math.cos(angle2), centerY - size * Math.sin(angle2));
  ctx.lineTo(centerX + size * Math.cos(angle2), centerY + size * Math.sin(angle2));
  ctx.stroke();
};
const drawTrimetric = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const size = Math.min(width, height) * 0.4;
  const angle1 = Math.PI / 8;
  const angle2 = Math.PI / 4;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY - size * Math.sin(angle1));
  ctx.lineTo(centerX + size * Math.cos(angle1), centerY + size * Math.sin(angle1));
  ctx.lineTo(centerX, centerY + size);
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY + size * Math.sin(angle1));
  ctx.lineTo(centerX - size * Math.cos(angle1), centerY - size * Math.sin(angle1));
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX, centerY + size);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX - size * Math.cos(angle2), centerY - size * Math.sin(angle2));
  ctx.lineTo(centerX + size * Math.cos(angle2), centerY + size * Math.sin(angle2));
  ctx.stroke();
};
const drawAnamorphic = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const size = Math.min(width, height) * 0.4;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, size, size * 0.6, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, size * 0.7, size * 0.4, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, size * 0.4, size * 0.2, 0, 0, Math.PI * 2);
  ctx.stroke();
};
const drawPerspectiveGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const horizonY = height * 0.4;
  const vanishingPointX = width / 2;
  const groundLevel = height;
  ctx.beginPath();
  ctx.moveTo(0, horizonY);
  ctx.lineTo(width, horizonY);
  ctx.stroke();
  const numLines = 12;
  for (let i = 0; i <= numLines; i++) {
    const t = i / numLines;
    const bottomX = t * width;
    ctx.beginPath();
    ctx.moveTo(vanishingPointX, horizonY);
    ctx.lineTo(bottomX, groundLevel);
    ctx.stroke();
  }
  const numHorizontal = 8;
  for (let i = 1; i <= numHorizontal; i++) {
    const t = i / numHorizontal;
    const y = horizonY + (groundLevel - horizonY) * Math.pow(t, 1.5);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
const drawTriangularGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const size = Math.min(width, height) * 0.8;
  const centerX = width / 2;
  const centerY = height / 2;
  const triangleHeight = size * Math.sqrt(3) / 2;
  const startX = centerX - size / 2;
  const startY = centerY - triangleHeight / 2;
  ctx.beginPath();
  ctx.moveTo(startX + size / 2, startY);
  ctx.lineTo(startX + size, startY + triangleHeight);
  ctx.lineTo(startX, startY + triangleHeight);
  ctx.closePath();
  ctx.stroke();
  for (let row = 0; row < 4; row++) {
    const y = startY + triangleHeight / 4 * row;
    ctx.beginPath();
    ctx.moveTo(startX + size / 4 * row, y);
    ctx.lineTo(startX + size - size / 4 * row, y);
    ctx.stroke();
  }
};
const drawHexagonalGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const size = Math.min(width, height) * 0.15;
  const cols = Math.ceil(width / (size * 1.5)) + 1;
  const rows = Math.ceil(height / (size * Math.sqrt(3))) + 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * size * 1.5;
      const y = row * size * Math.sqrt(3) + (col % 2 === 1 ? size * Math.sqrt(3) / 2 : 0);
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i - Math.PI / 6;
        const px = x + size * Math.cos(angle);
        const py = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();
    }
  }
};
const drawRadialGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) * 0.45;
  for (let i = 1; i <= 5; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxRadius * i / 5, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (let i = 0; i < 12; i++) {
    const angle = Math.PI * 2 * i / 12;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle));
    ctx.stroke();
  }
};
const drawDotGrid = (ctx, width, height, color, lineWidth) => {
  ctx.fillStyle = color;
  const spacing = 30;
  const dotSize = 3;
  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      ctx.beginPath();
      ctx.arc(x, y, dotSize, 0, Math.PI * 2);
      ctx.fill();
    }
  }
};
const drawDiamondGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const size = 40;
  const cols = Math.ceil(width / size) + 1;
  const rows = Math.ceil(height / size) + 1;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * size;
      const y = row * size;
      ctx.beginPath();
      ctx.moveTo(x + size / 2, y);
      ctx.lineTo(x + size, y + size / 2);
      ctx.lineTo(x + size / 2, y + size);
      ctx.lineTo(x, y + size / 2);
      ctx.closePath();
      ctx.stroke();
    }
  }
};
const drawPolarGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) * 0.45;
  for (let i = 1; i <= 6; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, maxRadius * i / 6, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (let i = 0; i < 16; i++) {
    const angle = Math.PI * 2 * i / 16;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle));
    ctx.stroke();
  }
};
const drawCrossHairGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
  const size = Math.min(width, height) * 0.3;
  ctx.beginPath();
  ctx.moveTo(centerX - size, centerY);
  ctx.lineTo(centerX + size, centerY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(centerX, centerY - size);
  ctx.lineTo(centerX, centerY + size);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(centerX, centerY, size * 0.1, 0, Math.PI * 2);
  ctx.stroke();
};
const drawBrickPattern = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const brickHeight = 30;
  const brickWidth = 60;
  const offset = brickWidth / 2;
  for (let y = 0; y < height; y += brickHeight) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += brickHeight) {
    const rowOffset = Math.floor(y / brickHeight) % 2 * offset;
    for (let x = -offset + rowOffset; x < width + offset; x += brickWidth) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + brickHeight);
      ctx.stroke();
    }
  }
};
const drawHerringbonePattern = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const tileSize = 40;
  for (let y = 0; y < height + tileSize; y += tileSize) {
    for (let x = 0; x < width + tileSize; x += tileSize) {
      const row = Math.floor(y / tileSize);
      if (row % 2 === 0) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + tileSize, y + tileSize);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.moveTo(x + tileSize, y);
        ctx.lineTo(x, y + tileSize);
        ctx.stroke();
      }
    }
  }
};
const drawTileGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const tileSize = 50;
  for (let y = 0; y < height; y += tileSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let x = 0; x < width; x += tileSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
};
const drawMosaicGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const irregularPolygons = [
    { points: [[0, 0], [50, 20], [30, 50], [0, 40]] },
    { points: [[50, 20], [100, 0], [90, 50], [30, 50]] },
    { points: [[0, 40], [30, 50], [20, 90], [0, 80]] },
    { points: [[30, 50], [90, 50], [80, 90], [20, 90]] }
  ];
  for (let baseY = -100; baseY < height; baseY += 100) {
    for (let baseX = -100; baseX < width; baseX += 100) {
      irregularPolygons.forEach((poly) => {
        ctx.beginPath();
        ctx.moveTo(baseX + poly.points[0][0], baseY + poly.points[0][1]);
        poly.points.slice(1).forEach((point) => {
          ctx.lineTo(baseX + point[0], baseY + point[1]);
        });
        ctx.closePath();
        ctx.stroke();
      });
    }
  }
};
const drawStainedGlass = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const maxRadius = Math.min(width, height) * 0.45;
  for (let r = maxRadius / 6; r <= maxRadius; r += maxRadius / 6) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 6) {
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle));
    ctx.stroke();
  }
};
const drawQuiltPattern = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const diamondSize = 60;
  ctx.beginPath();
  for (let y = -diamondSize; y < height + diamondSize; y += diamondSize) {
    const xOffset = Math.floor(y / diamondSize) % 2 * (diamondSize / 2);
    for (let x = -diamondSize + xOffset; x < width + diamondSize; x += diamondSize) {
      ctx.moveTo(x, y + diamondSize / 2);
      ctx.lineTo(x + diamondSize / 2, y + diamondSize);
      ctx.lineTo(x + diamondSize, y + diamondSize / 2);
      ctx.lineTo(x + diamondSize / 2, y);
      ctx.closePath();
    }
  }
  ctx.stroke();
  ctx.beginPath();
  for (let y = -diamondSize; y < height + diamondSize; y += diamondSize) {
    const xOffset = Math.floor(y / diamondSize) % 2 * (diamondSize / 2);
    for (let x = -diamondSize + xOffset; x < width + diamondSize; x += diamondSize) {
      ctx.moveTo(x, y + diamondSize / 2);
      ctx.lineTo(x + diamondSize / 2, y);
      ctx.lineTo(x + diamondSize, y + diamondSize / 2);
      ctx.lineTo(x + diamondSize / 2, y + diamondSize);
      ctx.closePath();
    }
  }
  ctx.stroke();
};
const drawCrossStitch = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const stitchSize = 10;
  for (let y = 0; y < height; y += stitchSize) {
    for (let x = 0; x < width; x += stitchSize) {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + stitchSize, y + stitchSize);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x + stitchSize, y);
      ctx.lineTo(x, y + stitchSize);
      ctx.stroke();
    }
  }
};
const drawPixelArt = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const pixelSize = 8;
  for (let y = 0; y < height; y += pixelSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  for (let x = 0; x < width; x += pixelSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
};
const drawDiagonalGrid = (ctx, width, height, cols, rows, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath();
    ctx.moveTo(colWidth * i, 0);
    ctx.lineTo(colWidth * i, height);
    ctx.stroke();
  }
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, rowHeight * i);
    ctx.lineTo(width, rowHeight * i);
    ctx.stroke();
  }
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath();
    ctx.moveTo(colWidth * i, 0);
    ctx.lineTo(colWidth * i - width, height);
    ctx.stroke();
  }
};
const drawFixedGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const spacing = 50;
  for (let x = spacing; x < width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = spacing; y < height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
};
const drawProportionalGrid = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const phi = 1.618;
  const goldenWidth = width / phi;
  const goldenHeight = height / phi;
  ctx.beginPath();
  ctx.moveTo(goldenWidth, 0);
  ctx.lineTo(goldenWidth, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width - goldenWidth, 0);
  ctx.lineTo(width - goldenWidth, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, goldenHeight);
  ctx.lineTo(width, goldenHeight);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, height - goldenHeight);
  ctx.lineTo(width, height - goldenHeight);
  ctx.stroke();
};
const drawCrossDiagonal = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(width, 0);
  ctx.lineTo(0, height);
  ctx.stroke();
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
};
const drawPortraitFace = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  ctx.beginPath();
  ctx.moveTo(centerX, 0);
  ctx.lineTo(centerX, height);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, centerY);
  ctx.lineTo(width, centerY);
  ctx.stroke();
  const eyeLineY = centerY - height * 0.15;
  ctx.beginPath();
  ctx.moveTo(0, eyeLineY);
  ctx.lineTo(width, eyeLineY);
  ctx.stroke();
  const noseLineY = centerY + height * 0.05;
  ctx.beginPath();
  ctx.moveTo(0, noseLineY);
  ctx.lineTo(width, noseLineY);
  ctx.stroke();
  const mouthLineY = centerY + height * 0.2;
  ctx.beginPath();
  ctx.moveTo(0, mouthLineY);
  ctx.lineTo(width, mouthLineY);
  ctx.stroke();
};
const drawLoomisHead = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const centerY = height / 2;
  const headHeight = height * 0.7;
  const headWidth = headHeight * 0.7;
  ctx.beginPath();
  ctx.ellipse(centerX, centerY, headWidth / 2, headHeight / 2, 0, 0, Math.PI * 2);
  ctx.stroke();
  const eyeLineY = centerY - headHeight * 0.1;
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth / 2, eyeLineY);
  ctx.lineTo(centerX + headWidth / 2, eyeLineY);
  ctx.stroke();
  const browLineY = eyeLineY - headHeight * 0.1;
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth / 2, browLineY);
  ctx.lineTo(centerX + headWidth / 2, browLineY);
  ctx.stroke();
  const noseLineY = centerY + headHeight * 0.05;
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth / 2, noseLineY);
  ctx.lineTo(centerX + headWidth / 2, noseLineY);
  ctx.stroke();
  const mouthLineY = centerY + headHeight * 0.2;
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth / 2, mouthLineY);
  ctx.lineTo(centerX + headWidth / 2, mouthLineY);
  ctx.stroke();
  const chinLineY = centerY + headHeight * 0.35;
  ctx.beginPath();
  ctx.moveTo(centerX - headWidth / 2, chinLineY);
  ctx.lineTo(centerX + headWidth / 2, chinLineY);
  ctx.stroke();
};
const drawFigureProportion = (ctx, width, height, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const centerX = width / 2;
  const figureHeight = height * 0.85;
  const headHeight = figureHeight / 8;
  for (let i = 0; i <= 8; i++) {
    const y = (height - figureHeight) / 2 + i * headHeight;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
  ctx.beginPath();
  ctx.moveTo(centerX, (height - figureHeight) / 2);
  ctx.lineTo(centerX, (height - figureHeight) / 2 + figureHeight);
  ctx.stroke();
  const shoulderY = (height - figureHeight) / 2 + headHeight * 1.5;
  ctx.beginPath();
  ctx.moveTo(centerX - width * 0.15, shoulderY);
  ctx.lineTo(centerX + width * 0.15, shoulderY);
  ctx.stroke();
  const waistY = (height - figureHeight) / 2 + headHeight * 3;
  ctx.beginPath();
  ctx.moveTo(centerX - width * 0.1, waistY);
  ctx.lineTo(centerX + width * 0.1, waistY);
  ctx.stroke();
  const hipY = (height - figureHeight) / 2 + headHeight * 4;
  ctx.beginPath();
  ctx.moveTo(centerX - width * 0.12, hipY);
  ctx.lineTo(centerX + width * 0.12, hipY);
  ctx.stroke();
};
const drawMuralScaling = (ctx, width, height, cols, rows, color, lineWidth) => {
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  const colWidth = width / cols;
  const rowHeight = height / rows;
  for (let i = 0; i <= cols; i++) {
    ctx.beginPath();
    ctx.moveTo(colWidth * i, 0);
    ctx.lineTo(colWidth * i, height);
    ctx.stroke();
  }
  for (let i = 0; i <= rows; i++) {
    ctx.beginPath();
    ctx.moveTo(0, rowHeight * i);
    ctx.lineTo(width, rowHeight * i);
    ctx.stroke();
  }
  ctx.setLineDash([5, 5]);
  for (let i = 1; i < cols; i++) {
    for (let j = 1; j < rows; j++) {
      ctx.beginPath();
      ctx.moveTo(colWidth * i, 0);
      ctx.lineTo(colWidth * i, rowHeight * j);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, rowHeight * j);
      ctx.lineTo(colWidth * i, rowHeight * j);
      ctx.stroke();
    }
  }
  ctx.setLineDash([]);
};
const defaultImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "advanced",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Advanced Online Grid Tool for Artists| Custom Photo Overlay.",
      meta: [
        { name: "description", content: "Upload your image and apply highly customizable grid overlays. Features Rule of Thirds, Golden Ratio, 1/2/3-Point Perspective guides, and standard drawing grids." }
      ],
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/advanced" }
      ]
    });
    const currentImage = ref("");
    const imageRef = ref(null);
    const canvasRef = ref(null);
    ref(null);
    const selectedPatterns = ref(["standardGrid"]);
    const expandedCategories = ref(["standard", "composition"]);
    const gridSettings = reactive({
      rows: 3,
      cols: 4,
      opacity: 50,
      lineWidth: 2,
      color: "#8b5cf6"
    });
    const presetColors = ["#000000", "#ffffff", "#8b5cf6", "#ef4444", "#22c55e", "#3b82f6", "#f59e0b", "#ec4899"];
    const gridCategories = [
      {
        name: "standard",
        label: "Standard Drawing & Mural Scaling Grids",
        patterns: [
          { value: "standardGrid", label: "Standard Grid" },
          { value: "diagonalGrid", label: "Diagonal Grid" },
          { value: "fixedGrid", label: "Fixed Grid" },
          { value: "proportionalGrid", label: "Proportional Grid" },
          { value: "crossDiagonal", label: "Cross Diagonal" },
          { value: "muralScaling", label: "Mural Scaling" }
        ]
      },
      {
        name: "composition",
        label: "Professional Composition Guides",
        patterns: [
          { value: "ruleOfThirds", label: "Rule of Thirds" },
          { value: "goldenRatio", label: "Golden Ratio" },
          { value: "goldenSpiral", label: "Golden Spiral" },
          { value: "ruleOfFifths", label: "Rule of Fifths" },
          { value: "quadrantGrid", label: "Quadrant Grid" },
          { value: "goldenTriangle", label: "Golden Triangle" },
          { value: "diagonalMethod", label: "Diagonal Method" },
          { value: "centerCross", label: "Center Cross" }
        ]
      },
      {
        name: "perspective",
        label: "Advanced Perspective Guides for Artists",
        patterns: [
          { value: "onePointPerspective", label: "1-Point Perspective" },
          { value: "twoPointPerspective", label: "2-Point Perspective" },
          { value: "threePointPerspective", label: "3-Point Perspective" },
          { value: "isometric", label: "Isometric Grid" },
          { value: "fisheye", label: "Fisheye" },
          { value: "anamorphic", label: "Anamorphic" },
          { value: "dimetric", label: "Dimetric" },
          { value: "trimetric", label: "Trimetric" },
          { value: "perspectiveGrid", label: "Perspective Grid" }
        ]
      },
      {
        name: "artist",
        label: "Artist Guides",
        patterns: [
          { value: "portraitFace", label: "Portrait Face" },
          { value: "loomisHead", label: "Loomis Head" },
          { value: "figureProportion", label: "Figure Proportion" }
        ]
      },
      {
        name: "specialty",
        label: "Specialty Patterns",
        patterns: [
          { value: "triangularGrid", label: "Triangular Grid" },
          { value: "hexagonalGrid", label: "Hexagonal Grid" },
          { value: "radialGrid", label: "Radial Grid" },
          { value: "dotGrid", label: "Dot Grid" },
          { value: "diamondGrid", label: "Diamond Grid" },
          { value: "polarGrid", label: "Polar Grid" },
          { value: "crossHairGrid", label: "Cross Hair Grid" }
        ]
      },
      {
        name: "patterns",
        label: "Design Patterns",
        patterns: [
          { value: "brickPattern", label: "Brick Pattern" },
          { value: "herringbonePattern", label: "Herringbone Pattern" },
          { value: "tileGrid", label: "Tile Grid" },
          { value: "mosaicGrid", label: "Mosaic Grid" },
          { value: "stainedGlass", label: "Stained Glass" },
          { value: "quiltPattern", label: "Quilt Pattern" },
          { value: "crossStitch", label: "Cross Stitch" },
          { value: "pixelArt", label: "Pixel Art" }
        ]
      }
    ];
    const drawGrid = () => {
      const canvas = canvasRef.value;
      const img = imageRef.value;
      if (!canvas || !img) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const width = img.clientWidth;
      const height = img.clientHeight;
      canvas.width = width;
      canvas.height = height;
      const color = gridSettings.color;
      const alpha = gridSettings.opacity / 100;
      const lineWidth = gridSettings.lineWidth;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = alpha;
      if (selectedPatterns.value.length === 0) {
        return;
      }
      selectedPatterns.value.forEach((pattern) => {
        drawPattern(pattern, ctx, width, height);
      });
    };
    const drawPattern = (pattern, ctx, width, height) => {
      const color = gridSettings.color;
      const lineWidth = gridSettings.lineWidth;
      switch (pattern) {
        case "standardGrid":
          drawStandardGrid(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth);
          break;
        case "diagonalGrid":
          drawDiagonalGrid(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth);
          break;
        case "fixedGrid":
          drawFixedGrid(ctx, width, height, color, lineWidth);
          break;
        case "proportionalGrid":
          drawProportionalGrid(ctx, width, height, color, lineWidth);
          break;
        case "crossDiagonal":
          drawCrossDiagonal(ctx, width, height, color, lineWidth);
          break;
        case "muralScaling":
          drawMuralScaling(ctx, width, height, gridSettings.cols, gridSettings.rows, color, lineWidth);
          break;
        case "ruleOfThirds":
          drawRuleOfThirds(ctx, width, height, color, lineWidth);
          break;
        case "goldenRatio":
          drawGoldenRatio(ctx, width, height, color, lineWidth);
          break;
        case "goldenSpiral":
          drawGoldenSpiral(ctx, width, height, color, lineWidth);
          break;
        case "goldenTriangle":
          drawGoldenTriangle(ctx, width, height, color, lineWidth);
          break;
        case "diagonalMethod":
          drawDiagonalMethod(ctx, width, height, color, lineWidth);
          break;
        case "centerCross":
          drawCenterCross(ctx, width, height, color, lineWidth);
          break;
        case "ruleOfFifths":
          drawRuleOfFifths(ctx, width, height, color, lineWidth);
          break;
        case "quadrantGrid":
          drawQuadrantGrid(ctx, width, height, color, lineWidth);
          break;
        case "onePointPerspective":
          drawOnePointPerspective(ctx, width, height, color, lineWidth);
          break;
        case "twoPointPerspective":
          drawTwoPointPerspective(ctx, width, height, color, lineWidth);
          break;
        case "threePointPerspective":
          drawThreePointPerspective(ctx, width, height, color, lineWidth);
          break;
        case "isometric":
          drawIsometric(ctx, width, height, color, lineWidth);
          break;
        case "dimetric":
          drawDimetric(ctx, width, height, color, lineWidth);
          break;
        case "trimetric":
          drawTrimetric(ctx, width, height, color, lineWidth);
          break;
        case "fisheye":
          drawFisheye(ctx, width, height, color, lineWidth);
          break;
        case "anamorphic":
          drawAnamorphic(ctx, width, height, color, lineWidth);
          break;
        case "perspectiveGrid":
          drawPerspectiveGrid(ctx, width, height, color, lineWidth);
          break;
        case "portraitFace":
          drawPortraitFace(ctx, width, height, color, lineWidth);
          break;
        case "loomisHead":
          drawLoomisHead(ctx, width, height, color, lineWidth);
          break;
        case "figureProportion":
          drawFigureProportion(ctx, width, height, color, lineWidth);
          break;
        case "triangularGrid":
          drawTriangularGrid(ctx, width, height, color, lineWidth);
          break;
        case "hexagonalGrid":
          drawHexagonalGrid(ctx, width, height, color, lineWidth);
          break;
        case "radialGrid":
          drawRadialGrid(ctx, width, height, color, lineWidth);
          break;
        case "dotGrid":
          drawDotGrid(ctx, width, height, color);
          break;
        case "diamondGrid":
          drawDiamondGrid(ctx, width, height, color, lineWidth);
          break;
        case "polarGrid":
          drawPolarGrid(ctx, width, height, color, lineWidth);
          break;
        case "crossHairGrid":
          drawCrossHairGrid(ctx, width, height, color, lineWidth);
          break;
        case "brickPattern":
          drawBrickPattern(ctx, width, height, color, lineWidth);
          break;
        case "herringbonePattern":
          drawHerringbonePattern(ctx, width, height, color, lineWidth);
          break;
        case "tileGrid":
          drawTileGrid(ctx, width, height, color, lineWidth);
          break;
        case "mosaicGrid":
          drawMosaicGrid(ctx, width, height, color, lineWidth);
          break;
        case "stainedGlass":
          drawStainedGlass(ctx, width, height, color, lineWidth);
          break;
        case "quiltPattern":
          drawQuiltPattern(ctx, width, height, color, lineWidth);
          break;
        case "crossStitch":
          drawCrossStitch(ctx, width, height, color, lineWidth);
          break;
        case "pixelArt":
          drawPixelArt(ctx, width, height, color, lineWidth);
          break;
      }
    };
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    watch([() => gridSettings.rows, () => gridSettings.cols, () => gridSettings.lineWidth, () => gridSettings.opacity, () => gridSettings.color], () => {
      drawGrid();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advanced-page" }, _attrs))} data-v-62569e84>`);
      _push(ssrRenderComponent(AppNavbar, null, null, _parent));
      _push(`<div class="page-header" data-v-62569e84><div class="header-content" data-v-62569e84><h1 data-v-62569e84>Advanced Grid Tools: Professional Photo Overlay &amp; Drawing Grids</h1><div data-v-62569e84>Professional grid overlay tools with full customization</div></div><div class="header-image" data-v-62569e84><img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&amp;h=400&amp;fit=crop" alt="Advanced grid overlay" data-v-62569e84><div class="header-overlay" data-v-62569e84></div></div></div><nav class="page-nav" data-v-62569e84><a href="/" class="back-home" data-v-62569e84>\u2190 Back to Home</a></nav><div class="page-content" data-v-62569e84><div class="main-section" data-v-62569e84><div class="sidebar" data-v-62569e84><h2 data-v-62569e84>Fully Customizable Grid Settings</h2><div class="upload-section" data-v-62569e84><div class="section-title" data-v-62569e84>Upload Image</div><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-62569e84><label for="image-upload" class="upload-label" data-v-62569e84><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-62569e84><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-62569e84></path><polyline points="17 8 12 3 7 8" data-v-62569e84></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-62569e84></line></svg><span data-v-62569e84>Choose Image</span></label><p class="upload-hint" data-v-62569e84>JPG, PNG, GIF supported</p></div><div class="grid-settings" data-v-62569e84><div class="section-title" data-v-62569e84>Grid Settings</div><div class="setting-group" data-v-62569e84><label data-v-62569e84>Line Width: ${ssrInterpolate(gridSettings.lineWidth)}px</label><input type="range"${ssrRenderAttr("value", gridSettings.lineWidth)} min="1" max="10" data-v-62569e84></div><div class="setting-group" data-v-62569e84><label data-v-62569e84>Opacity: ${ssrInterpolate(gridSettings.opacity)}%</label><input type="range"${ssrRenderAttr("value", gridSettings.opacity)} min="10" max="100" data-v-62569e84></div><div class="setting-group" data-v-62569e84><label data-v-62569e84>Grid Color</label><div class="color-picker" data-v-62569e84><input type="color"${ssrRenderAttr("value", gridSettings.color)} data-v-62569e84><div class="preset-colors" data-v-62569e84><!--[-->`);
      ssrRenderList(presetColors, (color) => {
        _push(`<button style="${ssrRenderStyle({ backgroundColor: color })}" class="${ssrRenderClass(["color-btn", { active: gridSettings.color === color }])}" data-v-62569e84></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="grid-categories" data-v-62569e84><div class="section-title" data-v-62569e84>Grid Patterns <span class="hint" data-v-62569e84>(Multi-select supported)</span></div><!--[-->`);
      ssrRenderList(gridCategories, (category) => {
        _push(`<div class="grid-category" data-v-62569e84><div class="category-header" data-v-62569e84><h3 data-v-62569e84>${ssrInterpolate(category.label)}</h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${ssrRenderClass({ rotated: expandedCategories.value.includes(category.name) })}" data-v-62569e84><polyline points="6 9 12 15 18 9" data-v-62569e84></polyline></svg></div><div class="category-content" style="${ssrRenderStyle(expandedCategories.value.includes(category.name) ? null : { display: "none" })}" data-v-62569e84><!--[-->`);
        ssrRenderList(category.patterns, (pattern) => {
          _push(`<button class="${ssrRenderClass(["pattern-btn", { active: selectedPatterns.value.includes(pattern.value) }])}" data-v-62569e84>${ssrInterpolate(pattern.label)}</button>`);
        });
        _push(`<!--]-->`);
        if (category.name === "standard" && (selectedPatterns.value.includes("standardGrid") || selectedPatterns.value.includes("diagonalGrid"))) {
          _push(`<div class="grid-sub-settings" data-v-62569e84><div class="sub-setting" data-v-62569e84><label data-v-62569e84>Rows: <input type="number"${ssrRenderAttr("value", gridSettings.rows)} min="2" max="20" class="number-input" data-v-62569e84></label></div><div class="sub-setting" data-v-62569e84><label data-v-62569e84>Columns: <input type="number"${ssrRenderAttr("value", gridSettings.cols)} min="2" max="20" class="number-input" data-v-62569e84></label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]-->`);
      if (selectedPatterns.value.length > 0) {
        _push(`<div class="selected-patterns" data-v-62569e84><span class="selected-label" data-v-62569e84>Selected: ${ssrInterpolate(selectedPatterns.value.length)}</span><button class="clear-btn" data-v-62569e84>Clear All</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h2 data-v-62569e84>High-Quality Vector &amp; Raster Export Options</h2><div class="export-section" data-v-62569e84><button class="export-btn" data-v-62569e84><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-62569e84><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-62569e84></path><polyline points="7 10 12 15 17 10" data-v-62569e84></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-62569e84></line></svg> Download PNG </button><button class="export-btn" data-v-62569e84><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-62569e84><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-62569e84></path><polyline points="7 10 12 15 17 10" data-v-62569e84></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-62569e84></line></svg> Download JPG </button><button class="export-btn" data-v-62569e84><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-62569e84><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-62569e84></path><polyline points="7 10 12 15 17 10" data-v-62569e84></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-62569e84></line></svg> Download SVG </button><button class="export-btn print-btn" data-v-62569e84><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-62569e84><polyline points="6 9 6 2 18 2 18 9" data-v-62569e84></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" data-v-62569e84></path><rect x="6" y="14" width="12" height="3" data-v-62569e84></rect></svg> Print </button></div></div><div class="canvas-section" data-v-62569e84><h2 data-v-62569e84>Multi-Select Grid Patterns &amp; Composition Guides</h2><div class="canvas-container" data-v-62569e84><img${ssrRenderAttr("src", currentImage.value || defaultImage)} alt="Preview" class="preview-image" data-v-62569e84><canvas class="grid-canvas" data-v-62569e84></canvas></div>`);
      if (!currentImage.value) {
        _push(`<div class="default-hint" data-v-62569e84><p data-v-62569e84>Default preview image</p><p class="hint-text" data-v-62569e84>Upload your own image to customize</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="try-more" data-v-62569e84><h2 data-v-62569e84>Try Our Other Tools</h2><div class="try-more-box" data-v-62569e84>`);
      _push(ssrRenderComponent(PageGuide, {
        description: "Convert your photos into pixel art for cross-stitch patterns. Customize colors, grid size, and download pattern guides.",
        "link-url": "/pixel-art",
        "button-text": "Go to Pixel Art",
        "image-url": "https://6a1925960bc623d413aeb142.imgix.net/p.PNG"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        company: "Grid Maker",
        onNavigate: handleNavigate
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advanced.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advanced = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-62569e84"]]);

export { advanced as default };
//# sourceMappingURL=advanced-DrT7g7e9.mjs.map
