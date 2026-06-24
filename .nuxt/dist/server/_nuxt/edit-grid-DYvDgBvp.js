import AppNavbar from "./AppNavbar-CRd660Id.js";
import { defineComponent, ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppFooter-kkN9JGJC.js";
import { u as useHead } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/hookable/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/unctx/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/defu/dist/defu.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/ufo/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "edit-grid",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/edit-grid" }
      ]
    });
    const currentImage = ref("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop");
    const hasUploadedImage = ref(false);
    const imageRef = ref(null);
    const canvasRef = ref(null);
    const gridCount = ref(12);
    const selectedCombo = ref({ rows: 3, cols: 4, label: "3×4" });
    const selectedStyle = ref("square");
    const lineWidth = ref(2);
    const opacity = ref(60);
    const gridColor = ref("#8b5cf6");
    ref(false);
    let drawTimeout = null;
    const debouncedDrawGrid = () => {
      if (drawTimeout) {
        clearTimeout(drawTimeout);
      }
      drawTimeout = setTimeout(() => {
        drawGrid();
        drawTimeout = null;
      }, 100);
    };
    const gridStyles = [
      { value: "square", label: "Square", icon: "◻️" },
      { value: "diamond", label: "Diamond", icon: "◇" },
      { value: "triangle", label: "Triangle", icon: "△" },
      { value: "hexagon", label: "Hexagon", icon: "⬡" }
    ];
    const presetColors = [
      "#8b5cf6",
      "#ef4444",
      "#22c55e",
      "#3b82f6",
      "#f59e0b",
      "#ec4899",
      "#06b6d4",
      "#6b7280",
      "#ffffff",
      "#000000"
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
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + "×" + Math.max(i, j), score });
        }
      }
      for (let i = maxFactor + 1; i <= Math.min(count, maxFactor + 5); i++) {
        if (count % i !== 0) {
          const j = Math.ceil(count / i);
          const score = Math.abs(i - j) + 1;
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + "×" + Math.max(i, j), score });
        }
      }
      return combinations.sort((a, b) => a.score - b.score).slice(0, 5);
    });
    const drawGrid = () => {
      const canvas = canvasRef.value;
      const img = imageRef.value;
      if (!canvas || !img || !img.complete) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const maxSize = 4096;
      const scale = Math.min(1, maxSize / Math.max(img.naturalWidth, img.naturalHeight));
      canvas.width = Math.floor(img.naturalWidth * scale);
      canvas.height = Math.floor(img.naturalHeight * scale);
      const width = canvas.width;
      const height = canvas.height;
      const rows = selectedCombo.value.rows;
      const cols = selectedCombo.value.cols;
      const color = gridColor.value;
      const alpha = opacity.value / 100;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth.value * scale;
      ctx.globalAlpha = alpha;
      const cellWidth = width / cols;
      const cellHeight = height / rows;
      if (selectedStyle.value === "square") {
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
      } else if (selectedStyle.value === "diamond") {
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
      } else if (selectedStyle.value === "triangle") {
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
      } else if (selectedStyle.value === "hexagon") {
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
    watch([selectedCombo, selectedStyle, gridColor, lineWidth, opacity], () => {
      debouncedDrawGrid();
    });
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppNavbar = AppNavbar;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "edit-grid-container" }, _attrs))} data-v-566c3fa3>`);
      _push(ssrRenderComponent(_component_AppNavbar, null, null, _parent));
      _push(`<nav class="page-nav" data-v-566c3fa3><a href="/" class="back-home" data-v-566c3fa3>← Back to Home</a></nav><div class="page-header" data-v-566c3fa3><h1 data-v-566c3fa3>Image Grid Maker: Custom Grid Splitter &amp; Drawing Templates</h1><p data-v-566c3fa3>Upload your image and create professional grid overlays for drawing and composition</p></div><div class="edit-content" data-v-566c3fa3><div class="edit-preview" data-v-566c3fa3><div class="preview-container" data-v-566c3fa3><img${ssrRenderAttr("src", currentImage.value)} alt="Grid preview" class="preview-image" fetchpriority="high" data-v-566c3fa3><canvas class="grid-canvas" data-v-566c3fa3></canvas></div><div class="upload-section" data-v-566c3fa3><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-566c3fa3><label for="image-upload" class="upload-button" data-v-566c3fa3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-566c3fa3><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-566c3fa3></path><polyline points="17 8 12 3 7 8" data-v-566c3fa3></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-566c3fa3></line></svg> Change Image </label></div></div><div class="edit-form" data-v-566c3fa3><div class="form-section" data-v-566c3fa3><h2 data-v-566c3fa3>Flexible Grid &amp; Matrix Settings</h2><div class="form-group" data-v-566c3fa3><label data-v-566c3fa3>Grid Count</label><input type="number"${ssrRenderAttr("value", gridCount.value)} min="4" max="1000" data-v-566c3fa3></div>`);
      if (gridCombinations.value.length > 0) {
        _push(`<div class="form-group" data-v-566c3fa3><label data-v-566c3fa3>Grid Combination</label><div class="combination-options" data-v-566c3fa3><!--[-->`);
        ssrRenderList(gridCombinations.value, (combo) => {
          _push(`<button class="${ssrRenderClass(["combo-btn", { active: selectedCombo.value.label === combo.label }])}" data-v-566c3fa3>${ssrInterpolate(combo.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-group" data-v-566c3fa3><h2 data-v-566c3fa3>Geometric Grid Styles &amp; Shapes</h2><div class="style-options" data-v-566c3fa3><!--[-->`);
      ssrRenderList(gridStyles, (style) => {
        _push(`<label class="style-radio" data-v-566c3fa3><input type="radio"${ssrRenderAttr("value", style.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedStyle.value, style.value)) ? " checked" : ""} data-v-566c3fa3><span class="style-icon" data-v-566c3fa3>${ssrInterpolate(style.icon)}</span><span data-v-566c3fa3>${ssrInterpolate(style.label)}</span></label>`);
      });
      _push(`<!--]--></div></div></div><div class="form-section" data-v-566c3fa3><h2 data-v-566c3fa3>Appearance Styling &amp; Vector Export</h2><div class="form-group" data-v-566c3fa3><label data-v-566c3fa3>Line Width: ${ssrInterpolate(lineWidth.value)}px</label><input type="range"${ssrRenderAttr("value", lineWidth.value)} min="1" max="10" data-v-566c3fa3></div><div class="form-group" data-v-566c3fa3><label data-v-566c3fa3>Opacity: ${ssrInterpolate(opacity.value)}%</label><input type="range"${ssrRenderAttr("value", opacity.value)} min="10" max="100" data-v-566c3fa3></div><div class="form-group" data-v-566c3fa3><label data-v-566c3fa3>Grid Color</label><div class="color-options" data-v-566c3fa3><input type="color"${ssrRenderAttr("value", gridColor.value)} data-v-566c3fa3><div class="preset-colors" data-v-566c3fa3><!--[-->`);
      ssrRenderList(presetColors, (color) => {
        _push(`<button style="${ssrRenderStyle({ backgroundColor: color })}" class="${ssrRenderClass([{ active: gridColor.value === color }, "color-preset"])}" data-v-566c3fa3></button>`);
      });
      _push(`<!--]--></div></div></div></div><div class="form-section" data-v-566c3fa3><h3 data-v-566c3fa3>Export Options</h3><div class="export-buttons" data-v-566c3fa3><button class="${ssrRenderClass([{ disabled: !hasUploadedImage.value }, "export-btn"])}"${ssrIncludeBooleanAttr(!hasUploadedImage.value) ? " disabled" : ""} data-v-566c3fa3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-566c3fa3><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-566c3fa3></path><polyline points="7 10 12 15 17 10" data-v-566c3fa3></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-566c3fa3></line></svg> JPG </button><button class="${ssrRenderClass([{ disabled: !hasUploadedImage.value }, "export-btn"])}"${ssrIncludeBooleanAttr(!hasUploadedImage.value) ? " disabled" : ""} data-v-566c3fa3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-566c3fa3><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-566c3fa3></path><polyline points="7 10 12 15 17 10" data-v-566c3fa3></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-566c3fa3></line></svg> PNG </button><button class="${ssrRenderClass([{ disabled: !hasUploadedImage.value }, "export-btn"])}"${ssrIncludeBooleanAttr(!hasUploadedImage.value) ? " disabled" : ""} data-v-566c3fa3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-566c3fa3><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-566c3fa3></path><polyline points="7 10 12 15 17 10" data-v-566c3fa3></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-566c3fa3></line></svg> SVG </button><button class="${ssrRenderClass([{ disabled: !hasUploadedImage.value }, "export-btn print-btn"])}"${ssrIncludeBooleanAttr(!hasUploadedImage.value) ? " disabled" : ""} data-v-566c3fa3><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-566c3fa3><polyline points="6 9 6 2 18 2 18 9" data-v-566c3fa3></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" data-v-566c3fa3></path><rect x="6" y="14" width="12" height="3" data-v-566c3fa3></rect></svg> Print </button></div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/edit-grid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const editGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-566c3fa3"]]);
export {
  editGrid as default
};
//# sourceMappingURL=edit-grid-DYvDgBvp.js.map
