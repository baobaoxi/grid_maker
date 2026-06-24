import { _ as __nuxt_component_0 } from './FeaturesSection-Cfcf03WL.mjs';
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import AppNavbar from './AppNavbar-CRd660Id.mjs';
import { _ as _sfc_main$1 } from './AppFooter-kkN9JGJC.mjs';
import { P as PageGuide } from './PageGuide-CPqjQ-_e.mjs';
import { a as perlerBeadFeatures, F as FeatureSection, H as HowToGuide, b as perlerBeadGuide, p as perlerBeadFaq } from './pixelArtFeatures-De7lwLTn.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "perler-bead",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Perler Bead Pattern Generator",
      meta: [
        { name: "description", content: "Create Perler bead patterns from any image. Customize bead size, colors, and download your pattern guide." }
      ],
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/perler-bead" }
      ]
    });
    const currentImage = ref("https://6a1925960bc623d413aeb142.imgix.net/p2.PNG");
    const isDefaultImage = ref(true);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const pixelSize = ref(15);
    const outputWidth = ref(50);
    const outputHeight = ref(50);
    const colorCount = ref(12);
    const showGrid = ref(true);
    const showBeadOutline = ref(true);
    const actualColors = ref([]);
    const canvasRef = ref(null);
    ref(null);
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    const rgbToHex = (r, g, b) => {
      return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
    };
    const getColors = (imgData, count) => {
      const pixels = imgData.data;
      const colorMap = {};
      for (let i = 0; i < pixels.length; i += 4) {
        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];
        const color = rgbToHex(r, g, b);
        colorMap[color] = (colorMap[color] || 0) + 1;
      }
      const sortedColors = Object.entries(colorMap).sort((a, b) => b[1] - a[1]).slice(0, count).map((entry) => entry[0]);
      return sortedColors;
    };
    const quantizeColors = (colors, count) => {
      if (colors.length <= count) return colors;
      const rgbColors = colors.map((c) => hexToRgb(c)).filter(Boolean);
      const centroids = rgbColors.slice(0, count);
      for (let iteration = 0; iteration < 10; iteration++) {
        const groups = Array(count).fill(null).map(() => []);
        rgbColors.forEach((color) => {
          let minDist = Infinity;
          let minIdx = 0;
          centroids.forEach((centroid, cIdx) => {
            const dist = Math.sqrt(
              Math.pow(color.r - centroid.r, 2) + Math.pow(color.g - centroid.g, 2) + Math.pow(color.b - centroid.b, 2)
            );
            if (dist < minDist) {
              minDist = dist;
              minIdx = cIdx;
            }
          });
          groups[minIdx].push(color);
        });
        groups.forEach((groupColors, cIdx) => {
          if (groupColors.length === 0) return;
          const sumR = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.r) || 0), 0);
          const sumG = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.g) || 0), 0);
          const sumB = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.b) || 0), 0);
          centroids[cIdx] = {
            r: Math.round(sumR / groupColors.length),
            g: Math.round(sumG / groupColors.length),
            b: Math.round(sumB / groupColors.length)
          };
        });
      }
      return centroids.filter(Boolean).map((c) => `rgb(${c == null ? void 0 : c.r}, ${c == null ? void 0 : c.g}, ${c == null ? void 0 : c.b})`);
    };
    const drawPixelArt = (img) => {
      if (!canvasRef.value) return;
      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx || !currentImage.value) return;
      const sourceImg = new Image();
      {
        sourceImg.onload = () => {
          processImage(sourceImg);
        };
        sourceImg.src = currentImage.value;
        return;
      }
    };
    const processImage = (img) => {
      if (!canvasRef.value) return;
      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const tempCanvas = (void 0).createElement("canvas");
      const tempCtx = tempCanvas.getContext("2d");
      if (!tempCtx) return;
      tempCanvas.width = outputWidth.value;
      tempCanvas.height = outputHeight.value;
      tempCtx.drawImage(img, 0, 0, outputWidth.value, outputHeight.value);
      const imgData = tempCtx.getImageData(0, 0, outputWidth.value, outputHeight.value);
      const colors = getColors(imgData, colorCount.value * 2);
      actualColors.value = quantizeColors(colors, colorCount.value);
      const colorMap = {};
      const rgbColors = actualColors.value.map((c) => {
        const match = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (match) {
          return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
        }
        return null;
      }).filter(Boolean);
      imgData.data.forEach((_, i) => {
        if (i % 4 === 3) return;
        const idx = Math.floor(i / 4);
        const x = idx % outputWidth.value;
        const y = Math.floor(idx / outputWidth.value);
        const pixelData = imgData.data.slice(idx * 4, idx * 4 + 3);
        const pixelRgb = { r: pixelData[0], g: pixelData[1], b: pixelData[2] };
        let closestColor = actualColors.value[0];
        let minDist = Infinity;
        rgbColors.forEach((color, cIdx) => {
          if (!color) return;
          const dist = Math.sqrt(
            Math.pow(pixelRgb.r - color.r, 2) + Math.pow(pixelRgb.g - color.g, 2) + Math.pow(pixelRgb.b - color.b, 2)
          );
          if (dist < minDist) {
            minDist = dist;
            closestColor = actualColors.value[cIdx];
          }
        });
        colorMap[`${x},${y}`] = closestColor;
      });
      canvas.width = outputWidth.value * pixelSize.value;
      canvas.height = outputHeight.value * pixelSize.value;
      for (let y = 0; y < outputHeight.value; y++) {
        for (let x = 0; x < outputWidth.value; x++) {
          const color = colorMap[`${x},${y}`] || "#ffffff";
          if (showBeadOutline.value) {
            ctx.beginPath();
            const centerX = x * pixelSize.value + pixelSize.value / 2;
            const centerY = y * pixelSize.value + pixelSize.value / 2;
            const radius = pixelSize.value / 2 - 1;
            ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
            ctx.fillStyle = color;
            ctx.fill();
            ctx.strokeStyle = "#333333";
            ctx.lineWidth = 1;
            ctx.stroke();
          } else {
            ctx.fillStyle = color;
            ctx.fillRect(
              x * pixelSize.value,
              y * pixelSize.value,
              pixelSize.value,
              pixelSize.value
            );
          }
          if (showGrid.value && !showBeadOutline.value) {
            ctx.strokeStyle = "#cccccc";
            ctx.lineWidth = 0.5;
            ctx.strokeRect(
              x * pixelSize.value,
              y * pixelSize.value,
              pixelSize.value,
              pixelSize.value
            );
          }
        }
      }
    };
    const handleFooterNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    watch([pixelSize, outputWidth, outputHeight, colorCount, showGrid, showBeadOutline], () => {
      if (currentImage.value && !isDefaultImage.value) {
        drawPixelArt();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeaturesSection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "perler-bead-page" }, _attrs))} data-v-65843e06>`);
      _push(ssrRenderComponent(AppNavbar, null, null, _parent));
      _push(`<div class="page-header" data-v-65843e06><h1 data-v-65843e06>Perler Bead Pattern Generator</h1><h2 data-v-65843e06>Create pixel-perfect patterns for your Perler bead projects</h2></div><nav class="page-nav" data-v-65843e06><a href="/" class="back-home" data-v-65843e06>\u2190 Back to Home</a></nav><div class="page-content" data-v-65843e06><div class="main-section" data-v-65843e06><div class="sidebar" data-v-65843e06><div class="upload-section" data-v-65843e06><h3 data-v-65843e06>Upload Image</h3><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-65843e06><label for="image-upload" class="upload-label" data-v-65843e06><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-65843e06><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-65843e06></path><polyline points="17 8 12 3 7 8" data-v-65843e06></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-65843e06></line></svg><span data-v-65843e06>Choose Image</span></label><p class="upload-hint" data-v-65843e06>JPG, PNG supported</p></div><div class="pixel-settings" data-v-65843e06><h3 data-v-65843e06>Bead Settings</h3><div class="setting-group" data-v-65843e06><label data-v-65843e06>Bead Size: ${ssrInterpolate(pixelSize.value)}</label><input type="range"${ssrRenderAttr("value", pixelSize.value)} min="5" max="50" data-v-65843e06><p class="setting-hint" data-v-65843e06>Recommended: 10-20 for Perler beads</p></div><div class="setting-group" data-v-65843e06><label data-v-65843e06>Width: ${ssrInterpolate(outputWidth.value)} beads</label><input type="number"${ssrRenderAttr("value", outputWidth.value)} min="10" max="500" data-v-65843e06></div><div class="setting-group" data-v-65843e06><label data-v-65843e06>Height: ${ssrInterpolate(outputHeight.value)} beads</label><input type="number"${ssrRenderAttr("value", outputHeight.value)} min="10" max="500" data-v-65843e06></div><div class="setting-group" data-v-65843e06><label data-v-65843e06>Colors: ${ssrInterpolate(colorCount.value)}</label><input type="range"${ssrRenderAttr("value", colorCount.value)} min="2" max="24" data-v-65843e06><p class="setting-hint" data-v-65843e06>Number of colors in palette</p></div><div class="setting-group" data-v-65843e06><label data-v-65843e06><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(showGrid.value) ? ssrLooseContain(showGrid.value, null) : showGrid.value) ? " checked" : ""} data-v-65843e06> Show Grid Lines </label></div><div class="setting-group" data-v-65843e06><label data-v-65843e06><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(showBeadOutline.value) ? ssrLooseContain(showBeadOutline.value, null) : showBeadOutline.value) ? " checked" : ""} data-v-65843e06> Show Bead Outline </label></div></div><div class="action-buttons" data-v-65843e06><button class="export-btn" data-v-65843e06><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-65843e06><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-65843e06></path><polyline points="7 10 12 15 17 10" data-v-65843e06></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-65843e06></line></svg> Download Pattern </button><button class="export-btn secondary" data-v-65843e06><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-65843e06><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-65843e06></path><polyline points="14 2 14 8 20 8" data-v-65843e06></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-65843e06></line><line x1="16" y1="17" x2="8" y2="17" data-v-65843e06></line><polyline points="10 9 9 9 8 9" data-v-65843e06></polyline></svg> Download Color Guide </button></div></div><div class="canvas-section" data-v-65843e06><div class="canvas-container" data-v-65843e06>`);
      if (currentImage.value && !isDefaultImage.value) {
        _push(`<canvas class="pixel-canvas" data-v-65843e06></canvas>`);
      } else {
        _push(`<!---->`);
      }
      if (currentImage.value && isDefaultImage.value) {
        _push(`<img${ssrRenderAttr("src", currentImage.value)} class="pixel-canvas" alt="Default Perler bead preview" data-v-65843e06>`);
      } else {
        _push(`<!---->`);
      }
      if (!currentImage.value) {
        _push(`<div class="placeholder" data-v-65843e06><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-65843e06><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-65843e06></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-65843e06></circle><polyline points="21 15 16 10 5 21" data-v-65843e06></polyline></svg><p data-v-65843e06>Upload an image to get started</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (currentImage.value) {
        _push(`<div class="info-panel" data-v-65843e06><div class="info-item" data-v-65843e06><span class="label" data-v-65843e06>Original Size</span><span class="value" data-v-65843e06>${ssrInterpolate(originalWidth.value)} \xD7 ${ssrInterpolate(originalHeight.value)}</span></div><div class="info-item" data-v-65843e06><span class="label" data-v-65843e06>Pattern Size</span><span class="value" data-v-65843e06>${ssrInterpolate(outputWidth.value)} \xD7 ${ssrInterpolate(outputHeight.value)} beads</span></div><div class="info-item" data-v-65843e06><span class="label" data-v-65843e06>Colors Used</span><span class="value" data-v-65843e06>${ssrInterpolate(actualColors.value.length)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentImage.value) {
        _push(`<div class="color-palette" data-v-65843e06><h4 data-v-65843e06>Color Palette</h4><div class="palette-colors" data-v-65843e06><!--[-->`);
        ssrRenderList(actualColors.value, (color, index) => {
          _push(`<div class="color-item" data-v-65843e06><div class="color-swatch" style="${ssrRenderStyle({ backgroundColor: color })}" data-v-65843e06></div><span class="color-value" data-v-65843e06>${ssrInterpolate(color)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="features-section" data-v-65843e06><div class="features-header" data-v-65843e06><h2 data-v-65843e06>Feature Introduction</h2></div><!--[-->`);
      ssrRenderList(unref(perlerBeadFeatures), (feature, index) => {
        _push(ssrRenderComponent(FeatureSection, {
          key: feature.id,
          feature,
          reverse: index === 1
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(HowToGuide, { guide: unref(perlerBeadGuide) }, null, _parent));
      _push(ssrRenderComponent(_component_FeaturesSection, {
        "show-header": false,
        "show-features": false,
        "show-steps": false,
        "show-why-to-use": false,
        "show-faq": true,
        "faq-items": unref(perlerBeadFaq)
      }, null, _parent));
      _push(`<div class="try-more" data-v-65843e06><h2 data-v-65843e06>Try Our Other Tools</h2><div class="try-more-box" data-v-65843e06>`);
      _push(ssrRenderComponent(PageGuide, {
        title: "Pixel Art Generator",
        description: "Convert photos to pixel art for cross-stitch patterns.",
        "link-url": "/pixel-art",
        "button-text": "Go to Pixel Art",
        "image-url": "https://6a1925960bc623d413aeb142.imgix.net/p.PNG"
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        company: "Photo Grid App",
        onNavigate: handleFooterNavigate
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/perler-bead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const perlerBead = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-65843e06"]]);

export { perlerBead as default };
//# sourceMappingURL=perler-bead-BO1tfLzj.mjs.map
