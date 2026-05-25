import { defineComponent, ref, reactive, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { A as AppNavbar } from "./AppNavbar-B9xYuVAx.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const defaultImage = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "advanced",
  __ssrInlineRender: true,
  setup(__props) {
    const currentImage = ref("");
    const imageRef = ref(null);
    const canvasRef = ref(null);
    const selectedPattern = ref("squareGrid");
    const gridCount = ref(12);
    const selectedCombo = ref({ rows: 3, cols: 4, label: "3×4" });
    const selectedStyle = ref("square");
    const expandedCategories = ref(["basic", "artist"]);
    const gridSettings = reactive({
      rows: 3,
      cols: 4,
      opacity: 50,
      lineWidth: 2,
      color: "#8b5cf6"
    });
    const gridStyles = [
      { value: "square", label: "Square", icon: "◻️" },
      { value: "diamond", label: "Diamond", icon: "◇" },
      { value: "triangle", label: "Triangle", icon: "△" },
      { value: "hexagon", label: "Hexagon", icon: "⬡" }
    ];
    const presetColors = ["#000000", "#ffffff", "#8b5cf6", "#ef4444", "#22c55e", "#3b82f6", "#f59e0b", "#ec4899"];
    const gridCategories = [
      {
        name: "basic",
        label: "Basic Drawing Grids",
        patterns: [
          { value: "squareGrid", label: "Square Grid" },
          { value: "rectangularGrid", label: "Rectangular Grid" },
          { value: "customGrid", label: "Custom Grid" },
          { value: "ruleOfThirds", label: "Rule of Thirds" },
          { value: "goldenRatio", label: "Golden Ratio" },
          { value: "goldenSpiral", label: "Golden Spiral" }
        ]
      },
      {
        name: "artist",
        label: "Artist Guides",
        patterns: [
          { value: "perspective1", label: "1-Point Perspective" },
          { value: "perspective2", label: "2-Point Perspective" },
          { value: "perspective3", label: "3-Point Perspective" },
          { value: "horizonLine", label: "Horizon Line" },
          { value: "vanishingPoint", label: "Vanishing Points" },
          { value: "anatomyGrid", label: "Anatomy Grid" }
        ]
      },
      {
        name: "composition",
        label: "Composition Guides",
        patterns: [
          { value: "ruleOfThirds", label: "Rule of Thirds" },
          { value: "goldenRatio", label: "Golden Ratio" },
          { value: "goldenSpiral", label: "Golden Spiral" },
          { value: "diagonalLines", label: "Diagonal Lines" },
          { value: "triangleComposition", label: "Triangle Composition" },
          { value: "symmetry", label: "Symmetry Lines" },
          { value: "crossDiagonal", label: "Cross Diagonal" }
        ]
      },
      {
        name: "photography",
        label: "Photography Guides",
        patterns: [
          { value: "ruleOfThirds", label: "Rule of Thirds" },
          { value: "goldenRatio", label: "Golden Ratio" },
          { value: "goldenSpiral", label: "Golden Spiral" },
          { value: "diagonalLines", label: "Diagonal Lines" },
          { value: "centerFrame", label: "Center Frame" },
          { value: "leadingLines", label: "Leading Lines" },
          { value: "grid16x9", label: "16:9 Grid" },
          { value: "grid4x3", label: "4:3 Grid" }
        ]
      },
      {
        name: "design",
        label: "Design Grids",
        patterns: [
          { value: "columns12", label: "12-Column Grid" },
          { value: "columns8", label: "8-Column Grid" },
          { value: "columns6", label: "6-Column Grid" },
          { value: "baseline", label: "Baseline Grid" },
          { value: "hierarchy", label: "Hierarchy Grid" },
          { value: "modularScale", label: "Modular Scale" }
        ]
      },
      {
        name: "geometry",
        label: "Geometric Patterns",
        patterns: [
          { value: "concentricCircles", label: "Concentric Circles" },
          { value: "radialLines", label: "Radial Lines" },
          { value: "hexGrid", label: "Hex Grid" },
          { value: "triangularGrid", label: "Triangular Grid" },
          { value: "diamondGrid", label: "Diamond Grid" },
          { value: "isometric", label: "Isometric Grid" },
          { value: "octagonal", label: "Octagonal Grid" }
        ]
      },
      {
        name: "fibonacci",
        label: "Fibonacci & Golden",
        patterns: [
          { value: "goldenRatio", label: "Golden Ratio" },
          { value: "goldenSpiral", label: "Golden Spiral" },
          { value: "fibonacciSpiral", label: "Fibonacci Spiral" },
          { value: "goldenRectangle", label: "Golden Rectangle" },
          { value: "goldenTriangle", label: "Golden Triangle" },
          { value: "phiGrid", label: "Phi Grid" }
        ]
      },
      {
        name: "annotation",
        label: "Annotation Guides",
        patterns: [
          { value: "marginGuides", label: "Margin Guides" },
          { value: "safeArea", label: "Safe Area" },
          { value: "cropMarks", label: "Crop Marks" },
          { value: "bleedLines", label: "Bleed Lines" },
          { value: "registration", label: "Registration Marks" }
        ]
      }
    ];
    const gridCombinations = computed(() => {
      const count = gridCount.value;
      const combinations = [];
      if (count < 4) return [];
      const sqrt = Math.sqrt(count);
      const maxFactor = Math.floor(sqrt);
      for (let i = maxFactor; i >= 1; i--) {
        if (count % i === 0) {
          const j = count / i;
          const score = Math.abs(i - j);
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: `${Math.min(i, j)}×${Math.max(i, j)}`, score });
        }
      }
      for (let i = maxFactor + 1; i <= Math.min(count, maxFactor + 5); i++) {
        if (count % i !== 0) {
          const j = Math.ceil(count / i);
          const score = Math.abs(i - j) + 1;
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: `${Math.min(i, j)}×${Math.max(i, j)}`, score });
        }
      }
      return combinations.sort((a, b) => a.score - b.score).slice(0, 5);
    });
    const drawGrid = () => {
      const canvas = canvasRef.value;
      const img = imageRef.value;
      if (!canvas || !img) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const rect = img.getBoundingClientRect();
      const scaleX = img.naturalWidth / rect.width;
      const scaleY = img.naturalHeight / rect.height;
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const width = canvas.width;
      const height = canvas.height;
      const color = gridSettings.color;
      const alpha = gridSettings.opacity / 100;
      const lineWidth = gridSettings.lineWidth * Math.min(scaleX, scaleY);
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth;
      ctx.globalAlpha = alpha;
      const basicStyles = ["square", "diamond", "triangle", "hexagon"];
      if (basicStyles.includes(selectedStyle.value)) {
        drawBasicStyle(selectedStyle.value, ctx, width, height);
      } else {
        drawPattern(selectedPattern.value, ctx, width, height);
      }
    };
    const drawPattern = (pattern, ctx, width, height) => {
      switch (pattern) {
        case "squareGrid":
          drawSquareGrid(ctx, width, height, gridSettings.rows, gridSettings.cols);
          break;
        case "rectangularGrid":
          drawSquareGrid(ctx, width, height, 4, 6);
          break;
        case "customGrid":
          drawSquareGrid(ctx, width, height, gridSettings.rows, gridSettings.cols);
          break;
        case "ruleOfThirds":
          drawRuleOfThirds(ctx, width, height);
          break;
        case "goldenRatio":
          drawGoldenRatio(ctx, width, height);
          break;
        case "goldenSpiral":
          drawGoldenSpiral(ctx, width, height);
          break;
        case "perspective1":
          draw1PointPerspective(ctx, width, height);
          break;
        case "perspective2":
          draw2PointPerspective(ctx, width, height);
          break;
        case "perspective3":
          draw3PointPerspective(ctx, width, height);
          break;
        case "horizonLine":
          drawHorizonLine(ctx, width, height);
          break;
        case "vanishingPoint":
          drawVanishingPoints(ctx, width, height);
          break;
        case "anatomyGrid":
          drawAnatomyGrid(ctx, width, height);
          break;
        case "diagonalLines":
          drawDiagonalLines(ctx, width, height);
          break;
        case "triangleComposition":
          drawTriangleComposition(ctx, width, height);
          break;
        case "symmetry":
          drawSymmetryLines(ctx, width, height);
          break;
        case "crossDiagonal":
          drawCrossDiagonal(ctx, width, height);
          break;
        case "centerFrame":
          drawCenterFrame(ctx, width, height);
          break;
        case "leadingLines":
          drawLeadingLines(ctx, width, height);
          break;
        case "grid16x9":
          drawSquareGrid(ctx, width, height, 9, 16);
          break;
        case "grid4x3":
          drawSquareGrid(ctx, width, height, 3, 4);
          break;
        case "columns12":
          drawSquareGrid(ctx, width, height, 1, 12);
          break;
        case "columns8":
          drawSquareGrid(ctx, width, height, 1, 8);
          break;
        case "columns6":
          drawSquareGrid(ctx, width, height, 1, 6);
          break;
        case "baseline":
          drawBaselineGrid(ctx, width, height);
          break;
        case "hierarchy":
          drawHierarchyGrid(ctx, width, height);
          break;
        case "modularScale":
          drawModularScale(ctx, width, height);
          break;
        case "concentricCircles":
          drawConcentricCircles(ctx, width, height);
          break;
        case "radialLines":
          drawRadialLines(ctx, width, height);
          break;
        case "hexGrid":
          drawHexGrid(ctx, width, height);
          break;
        case "triangularGrid":
          drawTriangularGrid(ctx, width, height);
          break;
        case "diamondGrid":
          drawDiamondGrid(ctx, width, height);
          break;
        case "isometric":
          drawIsometricGrid(ctx, width, height);
          break;
        case "octagonal":
          drawOctagonalGrid(ctx, width, height);
          break;
        case "fibonacciSpiral":
          drawFibonacciSpiral(ctx, width, height);
          break;
        case "goldenRectangle":
          drawGoldenRectangle(ctx, width, height);
          break;
        case "goldenTriangle":
          drawGoldenTriangle(ctx, width, height);
          break;
        case "phiGrid":
          drawPhiGrid(ctx, width, height);
          break;
        case "marginGuides":
          drawMarginGuides(ctx, width, height);
          break;
        case "safeArea":
          drawSafeArea(ctx, width, height);
          break;
        case "cropMarks":
          drawCropMarks(ctx, width, height);
          break;
        case "bleedLines":
          drawBleedLines(ctx, width, height);
          break;
        case "registration":
          drawRegistrationMarks(ctx, width, height);
          break;
        default:
          drawSquareGrid(ctx, width, height, gridSettings.rows, gridSettings.cols);
      }
    };
    const drawBasicStyle = (style, ctx, width, height) => {
      const rows = gridSettings.rows;
      const cols = gridSettings.cols;
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      if (style === "square") {
        drawSquareGrid(ctx, width, height, rows, cols);
      } else if (style === "diamond") {
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = Math.max(width, height);
        for (let r = 0; r <= maxRadius; r += cellWidth) {
          ctx.beginPath();
          ctx.moveTo(centerX, centerY - r);
          ctx.lineTo(centerX + r, centerY);
          ctx.lineTo(centerX, centerY + r);
          ctx.lineTo(centerX - r, centerY);
          ctx.closePath();
          ctx.stroke();
        }
      } else if (style === "triangle") {
        const h = cellHeight;
        const w = cellWidth;
        for (let row = 0; row < rows; row++) {
          const yOffset = row * h;
          const xOffset = row % 2 * (w / 2);
          for (let col = -1; col <= cols; col++) {
            const x = col * w + xOffset;
            const y = yOffset;
            ctx.beginPath();
            ctx.moveTo(x + w / 2, y);
            ctx.lineTo(x + w, y + h);
            ctx.lineTo(x, y + h);
            ctx.closePath();
            ctx.stroke();
          }
        }
      } else if (style === "hexagon") {
        const hexHeight = cellHeight;
        const hexWidth = hexHeight * 0.866;
        const vertDist = hexHeight * 0.75;
        const horizDist = hexWidth;
        for (let row = 0; row <= Math.ceil(height / vertDist) + 1; row++) {
          for (let col = 0; col <= Math.ceil(width / horizDist) + 1; col++) {
            const x = col * horizDist + row % 2 * (horizDist / 2);
            const y = row * vertDist;
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
              const angle = Math.PI / 3 * i - Math.PI / 6;
              const px = x + hexHeight / 2 * Math.cos(angle);
              const py = y + hexHeight / 2 * Math.sin(angle);
              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.closePath();
            ctx.stroke();
          }
        }
      }
    };
    const drawSquareGrid = (ctx, width, height, rows, cols) => {
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      for (let i = 1; i < cols; i++) {
        ctx.beginPath();
        ctx.moveTo(i * cellWidth, 0);
        ctx.lineTo(i * cellWidth, height);
        ctx.stroke();
      }
      for (let j = 1; j < rows; j++) {
        ctx.beginPath();
        ctx.moveTo(0, j * cellHeight);
        ctx.lineTo(width, j * cellHeight);
        ctx.stroke();
      }
    };
    const drawRuleOfThirds = (ctx, width, height) => {
      const thirdW = width / 3;
      const thirdH = height / 3;
      ctx.beginPath();
      ctx.moveTo(thirdW, 0);
      ctx.lineTo(thirdW, height);
      ctx.moveTo(thirdW * 2, 0);
      ctx.lineTo(thirdW * 2, height);
      ctx.moveTo(0, thirdH);
      ctx.lineTo(width, thirdH);
      ctx.moveTo(0, thirdH * 2);
      ctx.lineTo(width, thirdH * 2);
      ctx.stroke();
    };
    const drawGoldenRatio = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      ctx.beginPath();
      ctx.moveTo(width / phi, 0);
      ctx.lineTo(width / phi, height);
      ctx.moveTo(0, height / phi);
      ctx.lineTo(width, height / phi);
      ctx.stroke();
    };
    const drawGoldenSpiral = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      let w = width;
      let h = height;
      let x = 0;
      let y = 0;
      let direction = 0;
      ctx.beginPath();
      while (w > 1 && h > 1) {
        if (direction === 0) {
          ctx.moveTo(x + w, y);
          ctx.lineTo(x + w, y + h);
          h /= phi;
          direction = 1;
        } else if (direction === 1) {
          ctx.lineTo(x, y + h);
          w /= phi;
          direction = 2;
        } else if (direction === 2) {
          ctx.lineTo(x, y);
          h /= phi;
          direction = 3;
        } else {
          ctx.lineTo(x + w, y);
          w /= phi;
          x += w;
          direction = 0;
        }
      }
      ctx.stroke();
    };
    const draw1PointPerspective = (ctx, width, height) => {
      const horizonY = height * 0.4;
      const vanishX = width / 2;
      const vanishY = horizonY;
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(width, horizonY);
      ctx.stroke();
      const lines = 8;
      for (let i = 0; i <= lines; i++) {
        const x = width / lines * i;
        ctx.beginPath();
        ctx.moveTo(x, height);
        ctx.lineTo(vanishX, vanishY);
        ctx.stroke();
      }
      const verticalLines = 6;
      for (let i = 1; i < verticalLines; i++) {
        const y = horizonY + (height - horizonY) / verticalLines * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };
    const draw2PointPerspective = (ctx, width, height) => {
      const horizonY = height * 0.4;
      const vanish1X = -width * 0.5;
      const vanish2X = width * 1.5;
      const vanishY = horizonY;
      ctx.beginPath();
      ctx.moveTo(0, horizonY);
      ctx.lineTo(width, horizonY);
      ctx.stroke();
      const lines = 8;
      for (let i = 0; i <= lines; i++) {
        const y = horizonY + (height - horizonY) / lines * i;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(vanish1X, vanishY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width, y);
        ctx.lineTo(vanish2X, vanishY);
        ctx.stroke();
      }
    };
    const draw3PointPerspective = (ctx, width, height) => {
      const vanish1X = -width * 0.5;
      const vanish2X = width * 1.5;
      const vanishY = height * 0.5;
      const topVanishY = -height * 0.5;
      ctx.beginPath();
      ctx.moveTo(width / 2, height);
      ctx.lineTo(width / 2, topVanishY);
      ctx.stroke();
      const lines = 6;
      for (let i = 0; i <= lines; i++) {
        const y = (height - vanishY) / lines * i + vanishY;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(vanish1X, vanishY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width, y);
        ctx.lineTo(vanish2X, vanishY);
        ctx.stroke();
      }
    };
    const drawHorizonLine = (ctx, width, height) => {
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();
    };
    const drawVanishingPoints = (ctx, width, height) => {
      const vanish1X = width * 0.1;
      const vanish2X = width * 0.9;
      const vanishY = height * 0.3;
      ctx.beginPath();
      ctx.moveTo(0, vanishY);
      ctx.lineTo(width, vanishY);
      ctx.stroke();
      const points = 6;
      for (let i = 0; i <= points; i++) {
        const y = vanishY + (height - vanishY) / points * i;
        ctx.beginPath();
        ctx.moveTo(y * (vanish1X / (height - vanishY)), y);
        ctx.lineTo(vanish1X, vanishY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(width - y * ((width - vanish2X) / (height - vanishY)), y);
        ctx.lineTo(vanish2X, vanishY);
        ctx.stroke();
      }
    };
    const drawAnatomyGrid = (ctx, width, height) => {
      const headHeight = height * 0.15;
      const torsoHeight = height * 0.3;
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(width / 4, 0);
      ctx.lineTo(width / 4, height);
      ctx.moveTo(width * 0.75, 0);
      ctx.lineTo(width * 0.75, height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, headHeight);
      ctx.lineTo(width, headHeight);
      ctx.moveTo(0, headHeight + torsoHeight);
      ctx.lineTo(width, headHeight + torsoHeight);
      ctx.stroke();
    };
    const drawDiagonalLines = (ctx, width, height) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();
      const steps = 5;
      for (let i = 1; i < steps; i++) {
        const offset = width / steps * i;
        ctx.beginPath();
        ctx.moveTo(offset, 0);
        ctx.lineTo(width, height - height / width * offset);
        ctx.moveTo(0, height / steps * i);
        ctx.lineTo(width - width / height * (height / steps * i), height);
        ctx.stroke();
      }
    };
    const drawTriangleComposition = (ctx, width, height) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(0, height);
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.stroke();
    };
    const drawSymmetryLines = (ctx, width, height) => {
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();
    };
    const drawCrossDiagonal = (ctx, width, height) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width, height);
      ctx.moveTo(width, 0);
      ctx.lineTo(0, height);
      ctx.stroke();
    };
    const drawCenterFrame = (ctx, width, height) => {
      const margin = Math.min(width, height) * 0.25;
      ctx.beginPath();
      ctx.moveTo(margin, margin);
      ctx.lineTo(width - margin, margin);
      ctx.lineTo(width - margin, height - margin);
      ctx.lineTo(margin, height - margin);
      ctx.closePath();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
    };
    const drawLeadingLines = (ctx, width, height) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const lines = 5;
      for (let i = -lines; i <= lines; i++) {
        ctx.beginPath();
        ctx.moveTo(i * (width / (lines * 2)) + centerX, height);
        ctx.lineTo(centerX, centerY * 0.3);
        ctx.stroke();
      }
    };
    const drawBaselineGrid = (ctx, width, height) => {
      const lineHeight = 40;
      for (let y = lineHeight; y < height; y += lineHeight) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };
    const drawHierarchyGrid = (ctx, width, height) => {
      const headerHeight = height * 0.15;
      const sidebarWidth = width * 0.25;
      ctx.beginPath();
      ctx.moveTo(0, headerHeight);
      ctx.lineTo(width, headerHeight);
      ctx.moveTo(sidebarWidth, headerHeight);
      ctx.lineTo(sidebarWidth, height);
      ctx.stroke();
      drawSquareGrid(ctx, sidebarWidth, height - headerHeight, 8, 1);
      drawSquareGrid(ctx, width - sidebarWidth, height - headerHeight, 6, 4);
    };
    const drawModularScale = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      let current = 40;
      let y = 0;
      while (y < height) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width * (current / 200), y);
        ctx.stroke();
        y += current;
        current *= phi;
      }
    };
    const drawConcentricCircles = (ctx, width, height) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const maxRadius = Math.min(width, height) / 2;
      const steps = 8;
      for (let i = 1; i <= steps; i++) {
        const radius = maxRadius / steps * i;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    };
    const drawRadialLines = (ctx, width, height) => {
      const centerX = width / 2;
      const centerY = height / 2;
      const steps = 12;
      for (let i = 0; i < steps; i++) {
        const angle = Math.PI * 2 / steps * i;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(centerX + Math.cos(angle) * width, centerY + Math.sin(angle) * height);
        ctx.stroke();
      }
    };
    const drawHexGrid = (ctx, width, height) => {
      const hexSize = 50;
      const hexWidth = hexSize * 1.732;
      const hexHeight = hexSize * 2;
      for (let row = -1; row <= Math.ceil(height / (hexHeight * 0.75)); row++) {
        for (let col = -1; col <= Math.ceil(width / hexWidth); col++) {
          const x = col * hexWidth + row % 2 * (hexWidth / 2);
          const y = row * hexHeight * 0.75;
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = Math.PI / 3 * i - Math.PI / 6;
            const px = x + hexSize * Math.cos(angle);
            const py = y + hexSize * Math.sin(angle);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
          }
          ctx.closePath();
          ctx.stroke();
        }
      }
    };
    const drawTriangularGrid = (ctx, width, height) => {
      const triSize = 40;
      const triHeight = triSize * Math.sqrt(3) / 2;
      for (let row = -1; row <= Math.ceil(height / triHeight); row++) {
        for (let col = -1; col <= Math.ceil(width / (triSize * 1.5)); col++) {
          const x = col * triSize * 1.5 + row % 2 * (triSize * 0.75);
          const y = row * triHeight;
          ctx.beginPath();
          ctx.moveTo(x, y - triHeight);
          ctx.lineTo(x + triSize, y);
          ctx.lineTo(x - triSize, y);
          ctx.closePath();
          ctx.stroke();
        }
      }
    };
    const drawDiamondGrid = (ctx, width, height) => {
      const size = 60;
      for (let row = -1; row <= Math.ceil(height / size); row++) {
        for (let col = -1; col <= Math.ceil(width / size); col++) {
          const x = col * size + row % 2 * (size / 2);
          const y = row * (size / 2);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + size / 2, y + size / 2);
          ctx.lineTo(x, y + size);
          ctx.lineTo(x - size / 2, y + size / 2);
          ctx.closePath();
          ctx.stroke();
        }
      }
    };
    const drawIsometricGrid = (ctx, width, height) => {
      const size = 30;
      for (let i = -20; i <= 20; i++) {
        ctx.beginPath();
        ctx.moveTo(i * size * 1.5, -height);
        ctx.lineTo(i * size * 1.5 + height * 0.866, height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(i * size * 1.5, -height);
        ctx.lineTo(i * size * 1.5 - height * 0.866, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += size * 0.866) {
        ctx.beginPath();
        ctx.moveTo(-width, y);
        ctx.lineTo(width * 2, y);
        ctx.stroke();
      }
    };
    const drawOctagonalGrid = (ctx, width, height) => {
      const size = 40;
      const octWidth = size * Math.sqrt(2);
      for (let row = -1; row <= Math.ceil(height / (size * 2)); row++) {
        for (let col = -1; col <= Math.ceil(width / octWidth); col++) {
          const x = col * octWidth + row % 2 * (octWidth / 2);
          const y = row * size * 2;
          ctx.beginPath();
          for (let i = 0; i < 8; i++) {
            const angle = Math.PI / 4 * i + Math.PI / 8;
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
    const drawFibonacciSpiral = (ctx, width, height) => {
      const fib = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
      let x = width / 2;
      let y = height / 2;
      let direction = 0;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let i = 0; i < Math.min(fib.length, 7); i++) {
        const size = fib[i] * Math.min(width, height) / 100;
        if (direction === 0) {
          ctx.arc(x - size, y, size, Math.PI / 2, Math.PI, true);
          x -= size;
          y -= size;
        } else if (direction === 1) {
          ctx.arc(x, y - size, size, Math.PI, Math.PI * 1.5, true);
          y -= size;
        } else if (direction === 2) {
          ctx.arc(x + size, y, size, Math.PI * 1.5, Math.PI * 2, true);
          x += size;
        } else {
          ctx.arc(x, y + size, size, 0, Math.PI / 2, true);
          y += size;
        }
        direction = (direction + 1) % 4;
      }
      ctx.stroke();
    };
    const drawGoldenRectangle = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      const shortSide = Math.min(width, height);
      const longSide = shortSide * phi;
      ctx.beginPath();
      ctx.rect((width - longSide) / 2, (height - shortSide) / 2, longSide, shortSide);
      ctx.stroke();
      ctx.beginPath();
      ctx.rect((width - shortSide) / 2, (height - shortSide) / 2, shortSide, shortSide);
      ctx.stroke();
    };
    const drawGoldenTriangle = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      const base = Math.min(width, height) * 0.8;
      const heightTri = base * Math.sqrt(phi) / 2;
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2 - heightTri / 2);
      ctx.lineTo(width / 2 - base / 2, height / 2 + heightTri / 2);
      ctx.lineTo(width / 2 + base / 2, height / 2 + heightTri / 2);
      ctx.closePath();
      ctx.stroke();
    };
    const drawPhiGrid = (ctx, width, height) => {
      const phi = (1 + Math.sqrt(5)) / 2;
      const x1 = width / phi;
      const x2 = width - x1;
      const y1 = height / phi;
      const y2 = height - y1;
      ctx.beginPath();
      ctx.moveTo(x1, 0);
      ctx.lineTo(x1, height);
      ctx.moveTo(x2, 0);
      ctx.lineTo(x2, height);
      ctx.moveTo(0, y1);
      ctx.lineTo(width, y1);
      ctx.moveTo(0, y2);
      ctx.lineTo(width, y2);
      ctx.stroke();
    };
    const drawMarginGuides = (ctx, width, height) => {
      const margin = Math.min(width, height) * 0.1;
      ctx.beginPath();
      ctx.rect(margin, margin, width - margin * 2, height - margin * 2);
      ctx.stroke();
    };
    const drawSafeArea = (ctx, width, height) => {
      const safePercent = 0.08;
      ctx.beginPath();
      ctx.rect(width * safePercent, height * safePercent, width * (1 - safePercent * 2), height * (1 - safePercent * 2));
      ctx.stroke();
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.rect(width * 0.25, height * 0.25, width * 0.5, height * 0.5);
      ctx.stroke();
      ctx.setLineDash([]);
    };
    const drawCropMarks = (ctx, width, height) => {
      const markSize = 20;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(markSize, 0);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, markSize);
      ctx.moveTo(width - markSize, 0);
      ctx.lineTo(width, 0);
      ctx.moveTo(width, 0);
      ctx.lineTo(width, markSize);
      ctx.moveTo(width, height - markSize);
      ctx.lineTo(width, height);
      ctx.moveTo(width - markSize, height);
      ctx.lineTo(width, height);
      ctx.moveTo(0, height - markSize);
      ctx.lineTo(0, height);
      ctx.moveTo(markSize, height);
      ctx.lineTo(0, height);
      ctx.stroke();
    };
    const drawBleedLines = (ctx, width, height) => {
      const bleed = 30;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.rect(-bleed, -bleed, width + bleed * 2, height + bleed * 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.rect(0, 0, width, height);
      ctx.stroke();
      ctx.setLineDash([]);
    };
    const drawRegistrationMarks = (ctx, width, height) => {
      const markSize = 20;
      const positions = [
        { x: markSize * 2, y: markSize * 2 },
        { x: width - markSize * 2, y: markSize * 2 },
        { x: markSize * 2, y: height - markSize * 2 },
        { x: width - markSize * 2, y: height - markSize * 2 }
      ];
      positions.forEach((pos) => {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, markSize, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(pos.x - markSize * 1.5, pos.y);
        ctx.lineTo(pos.x + markSize * 1.5, pos.y);
        ctx.moveTo(pos.x, pos.y - markSize * 1.5);
        ctx.lineTo(pos.x, pos.y + markSize * 1.5);
        ctx.stroke();
      });
    };
    watch([() => gridSettings.rows, () => gridSettings.cols, () => gridSettings.lineWidth, () => gridSettings.opacity, () => gridSettings.color, () => selectedStyle], () => {
      drawGrid();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "advanced-page" }, _attrs))} data-v-43604f6c>`);
      _push(ssrRenderComponent(AppNavbar, null, null, _parent));
      _push(`<div class="page-header" data-v-43604f6c><div class="header-content" data-v-43604f6c><h1 data-v-43604f6c>Advanced Grid Tools</h1><p data-v-43604f6c>Professional grid overlay tools with full customization</p></div><div class="header-image" data-v-43604f6c><img src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1200&amp;h=400&amp;fit=crop" alt="Advanced grid overlay" data-v-43604f6c><div class="header-overlay" data-v-43604f6c></div></div></div><div class="page-content" data-v-43604f6c><div class="main-section" data-v-43604f6c><div class="sidebar" data-v-43604f6c><div class="upload-section" data-v-43604f6c><h3 data-v-43604f6c>Upload Image</h3><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-43604f6c><label for="image-upload" class="upload-label" data-v-43604f6c><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43604f6c><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-43604f6c></path><polyline points="17 8 12 3 7 8" data-v-43604f6c></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-43604f6c></line></svg><span data-v-43604f6c>Choose Image</span></label><p class="upload-hint" data-v-43604f6c>JPG, PNG, GIF supported</p></div><div class="grid-settings" data-v-43604f6c><h3 data-v-43604f6c>Grid Settings</h3><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Grid Count: ${ssrInterpolate(gridCount.value)}</label><input type="number"${ssrRenderAttr("value", gridCount.value)} min="4" max="1000" class="number-input" data-v-43604f6c></div>`);
      if (gridCombinations.value.length > 0) {
        _push(`<div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Grid Combination</label><div class="combination-options" data-v-43604f6c><!--[-->`);
        ssrRenderList(gridCombinations.value, (combo) => {
          _push(`<button class="${ssrRenderClass(["combo-btn", { active: selectedCombo.value.label === combo.label }])}" data-v-43604f6c>${ssrInterpolate(combo.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Grid Style</label><div class="style-options" data-v-43604f6c><!--[-->`);
      ssrRenderList(gridStyles, (style) => {
        _push(`<label class="style-radio" data-v-43604f6c><input type="radio"${ssrRenderAttr("value", style.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedStyle.value, style.value)) ? " checked" : ""} data-v-43604f6c><span class="style-icon" data-v-43604f6c>${ssrInterpolate(style.icon)}</span><span data-v-43604f6c>${ssrInterpolate(style.label)}</span></label>`);
      });
      _push(`<!--]--></div></div><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Line Width: ${ssrInterpolate(gridSettings.lineWidth)}px</label><input type="range"${ssrRenderAttr("value", gridSettings.lineWidth)} min="1" max="10" data-v-43604f6c></div><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Opacity: ${ssrInterpolate(gridSettings.opacity)}%</label><input type="range"${ssrRenderAttr("value", gridSettings.opacity)} min="10" max="100" data-v-43604f6c></div><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Grid Color</label><div class="color-picker" data-v-43604f6c><input type="color"${ssrRenderAttr("value", gridSettings.color)} data-v-43604f6c><div class="preset-colors" data-v-43604f6c><!--[-->`);
      ssrRenderList(presetColors, (color) => {
        _push(`<button style="${ssrRenderStyle({ backgroundColor: color })}" class="color-btn" data-v-43604f6c></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="grid-categories" data-v-43604f6c><h3 data-v-43604f6c>Grid Patterns</h3><!--[-->`);
      ssrRenderList(gridCategories, (category) => {
        _push(`<div class="grid-category" data-v-43604f6c><div class="category-header" data-v-43604f6c><span data-v-43604f6c>${ssrInterpolate(category.label)}</span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${ssrRenderClass({ rotated: expandedCategories.value.includes(category.name) })}" data-v-43604f6c><polyline points="6 9 12 15 18 9" data-v-43604f6c></polyline></svg></div><div class="category-content" style="${ssrRenderStyle(expandedCategories.value.includes(category.name) ? null : { display: "none" })}" data-v-43604f6c><!--[-->`);
        ssrRenderList(category.patterns, (pattern) => {
          _push(`<button class="${ssrRenderClass(["pattern-btn", { active: selectedPattern.value === pattern.value }])}" data-v-43604f6c>${ssrInterpolate(pattern.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (selectedPattern.value === "customGrid") {
        _push(`<div class="custom-grid-settings" data-v-43604f6c><h3 data-v-43604f6c>Custom Grid</h3><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Rows: ${ssrInterpolate(gridSettings.rows)}</label><input type="range"${ssrRenderAttr("value", gridSettings.rows)} min="2" max="20" data-v-43604f6c></div><div class="setting-group" data-v-43604f6c><label data-v-43604f6c>Columns: ${ssrInterpolate(gridSettings.cols)}</label><input type="range"${ssrRenderAttr("value", gridSettings.cols)} min="2" max="20" data-v-43604f6c></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="export-section" data-v-43604f6c><button class="export-btn" data-v-43604f6c><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43604f6c><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-43604f6c></path><polyline points="7 10 12 15 17 10" data-v-43604f6c></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-43604f6c></line></svg> Download PNG </button><button class="export-btn" data-v-43604f6c><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43604f6c><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-43604f6c></path><polyline points="7 10 12 15 17 10" data-v-43604f6c></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-43604f6c></line></svg> Download JPG </button><button class="export-btn" data-v-43604f6c><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43604f6c><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-43604f6c></path><polyline points="7 10 12 15 17 10" data-v-43604f6c></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-43604f6c></line></svg> Download SVG </button><button class="export-btn print-btn" data-v-43604f6c><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-43604f6c><polyline points="6 9 6 2 18 2 18 9" data-v-43604f6c></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" data-v-43604f6c></path><rect x="6" y="14" width="12" height="3" data-v-43604f6c></rect></svg> Print </button></div></div><div class="canvas-section" data-v-43604f6c><div class="canvas-container" data-v-43604f6c><img${ssrRenderAttr("src", currentImage.value || defaultImage)} alt="Preview" class="preview-image" data-v-43604f6c><canvas class="grid-canvas" data-v-43604f6c></canvas></div>`);
      if (!currentImage.value) {
        _push(`<div class="default-hint" data-v-43604f6c><p data-v-43604f6c>Default preview image</p><p class="hint-text" data-v-43604f6c>Upload your own image to customize</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/advanced.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advanced = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43604f6c"]]);
export {
  advanced as default
};
//# sourceMappingURL=advanced-BKMcOrOV.js.map
