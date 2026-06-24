import { _ as __nuxt_component_0 } from './FeaturesSection-Cfcf03WL.mjs';
import { defineComponent, ref, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import AppNavbar from './AppNavbar-CRd660Id.mjs';
import { _ as _sfc_main$1 } from './AppFooter-kkN9JGJC.mjs';
import { P as PageGuide } from './PageGuide-CPqjQ-_e.mjs';
import { d as pixelArtFeatures, F as FeatureSection, H as HowToGuide, e as pixelArtGuide, c as pixelArtFaq } from './pixelArtFeatures-De7lwLTn.mjs';
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
  __name: "pixel-art",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pixel Art Generator for Cross-Stitch Patterns",
      meta: [
        { name: "description", content: "Convert photos to pixel art for cross-stitch patterns. Customize pixel size, colors, and grid. Perfect for embroidery and cross-stitch projects." }
      ],
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/pixel-art" }
      ]
    });
    const currentImage = ref("https://6a1925960bc623d413aeb142.imgix.net/p.PNG");
    const isDefaultImage = ref(true);
    const originalWidth = ref(0);
    const originalHeight = ref(0);
    const pixelSize = ref(15);
    const outputWidth = ref(50);
    const outputHeight = ref(50);
    const colorCount = ref(12);
    const showGrid = ref(true);
    const actualColors = ref([]);
    const canvasRef = ref(null);
    ref(null);
    const getDominantColor = (pixels, offset) => {
      const r = pixels[offset];
      const g = pixels[offset + 1];
      const b = pixels[offset + 2];
      return `rgb(${r}, ${g}, ${b})`;
    };
    const quantizeColors = (colors, numColors) => {
      if (colors.length <= numColors) return colors;
      const rgbColors = colors.map((c) => {
        const match = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        return match ? { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) } : null;
      }).filter(Boolean);
      const centroids = rgbColors.slice(0, numColors);
      for (let i = 0; i < 10; i++) {
        const groups = Array(numColors).fill(null).map(() => []);
        rgbColors.forEach((color, idx) => {
          if (!color) return;
          let minDist = Infinity;
          let minIdx = 0;
          centroids.forEach((centroid, cIdx) => {
            if (!centroid) return;
            const dist = Math.sqrt(
              Math.pow(color.r - centroid.r, 2) + Math.pow(color.g - centroid.g, 2) + Math.pow(color.b - centroid.b, 2)
            );
            if (dist < minDist) {
              minDist = dist;
              minIdx = cIdx;
            }
          });
          groups[minIdx].push(idx);
        });
        centroids.forEach((_, cIdx) => {
          const groupColors = groups[cIdx].map((idx) => rgbColors[idx]).filter(Boolean);
          if (groupColors.length > 0) {
            const sumR = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.r) || 0), 0);
            const sumG = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.g) || 0), 0);
            const sumB = groupColors.reduce((acc, c) => acc + ((c == null ? void 0 : c.b) || 0), 0);
            centroids[cIdx] = {
              r: Math.round(sumR / groupColors.length),
              g: Math.round(sumG / groupColors.length),
              b: Math.round(sumB / groupColors.length)
            };
          }
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
      sourceImg.crossOrigin = "anonymous";
      {
        sourceImg.onload = () => {
          processImage(sourceImg);
        };
        sourceImg.onerror = () => {
          console.error("Failed to load image:", currentImage.value);
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
      const imageData = tempCtx.getImageData(0, 0, outputWidth.value, outputHeight.value);
      const pixels = imageData.data;
      const colorsSet = /* @__PURE__ */ new Set();
      for (let y = 0; y < outputHeight.value; y++) {
        for (let x = 0; x < outputWidth.value; x++) {
          const offset = (y * outputWidth.value + x) * 4;
          const color = getDominantColor(pixels, offset);
          colorsSet.add(color);
        }
      }
      const allColors = Array.from(colorsSet);
      actualColors.value = quantizeColors(allColors, colorCount.value);
      canvas.width = outputWidth.value * pixelSize.value;
      canvas.height = outputHeight.value * pixelSize.value;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < outputHeight.value; y++) {
        for (let x = 0; x < outputWidth.value; x++) {
          const offset = (y * outputWidth.value + x) * 4;
          let color = getDominantColor(pixels, offset);
          const rgbColor = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
          if (rgbColor) {
            const r = parseInt(rgbColor[1]);
            const g = parseInt(rgbColor[2]);
            const b = parseInt(rgbColor[3]);
            let minDist = Infinity;
            let closestColor = color;
            actualColors.value.forEach((c) => {
              const match = c.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
              if (match) {
                const cr = parseInt(match[1]);
                const cg = parseInt(match[2]);
                const cb = parseInt(match[3]);
                const dist = Math.sqrt(Math.pow(r - cr, 2) + Math.pow(g - cg, 2) + Math.pow(b - cb, 2));
                if (dist < minDist) {
                  minDist = dist;
                  closestColor = c;
                }
              }
            });
            color = closestColor;
          }
          ctx.fillStyle = color;
          ctx.fillRect(
            x * pixelSize.value,
            y * pixelSize.value,
            pixelSize.value,
            pixelSize.value
          );
          if (showGrid.value) {
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
    watch([pixelSize, outputWidth, outputHeight, colorCount, showGrid], () => {
      if (currentImage.value) {
        drawPixelArt();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FeaturesSection = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "pixel-art-page" }, _attrs))} data-v-87cf033f>`);
      _push(ssrRenderComponent(AppNavbar, null, null, _parent));
      _push(`<div class="page-header" data-v-87cf033f><h1 data-v-87cf033f>Pixel Art Generator</h1><h2 data-v-87cf033f>Convert your photos into pixel art for cross-stitch patterns</h2></div><nav class="page-nav" data-v-87cf033f><a href="/" class="back-home" data-v-87cf033f>\u2190 Back to Home</a></nav><div class="page-content" data-v-87cf033f><div class="main-section" data-v-87cf033f><div class="sidebar" data-v-87cf033f><div class="upload-section" data-v-87cf033f><h3 data-v-87cf033f>Upload Image</h3><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-87cf033f><label for="image-upload" class="upload-label" data-v-87cf033f><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-87cf033f><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-87cf033f></path><polyline points="17 8 12 3 7 8" data-v-87cf033f></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-87cf033f></line></svg><span data-v-87cf033f>Choose Image</span></label><p class="upload-hint" data-v-87cf033f>JPG, PNG supported</p></div><div class="pixel-settings" data-v-87cf033f><h3 data-v-87cf033f>Pixel Settings</h3><div class="setting-group" data-v-87cf033f><label data-v-87cf033f>Pixel Size: ${ssrInterpolate(pixelSize.value)}</label><input type="range"${ssrRenderAttr("value", pixelSize.value)} min="5" max="50" data-v-87cf033f><p class="setting-hint" data-v-87cf033f>Recommended: 10-20 for cross-stitch</p></div><div class="setting-group" data-v-87cf033f><label data-v-87cf033f>Width: ${ssrInterpolate(outputWidth.value)} pixels</label><input type="number"${ssrRenderAttr("value", outputWidth.value)} min="10" max="500" data-v-87cf033f></div><div class="setting-group" data-v-87cf033f><label data-v-87cf033f>Height: ${ssrInterpolate(outputHeight.value)} pixels</label><input type="number"${ssrRenderAttr("value", outputHeight.value)} min="10" max="500" data-v-87cf033f></div><div class="setting-group" data-v-87cf033f><label data-v-87cf033f>Colors: ${ssrInterpolate(colorCount.value)}</label><input type="range"${ssrRenderAttr("value", colorCount.value)} min="2" max="24" data-v-87cf033f><p class="setting-hint" data-v-87cf033f>Number of colors in palette</p></div><div class="setting-group" data-v-87cf033f><label data-v-87cf033f><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(showGrid.value) ? ssrLooseContain(showGrid.value, null) : showGrid.value) ? " checked" : ""} data-v-87cf033f> Show Grid Lines </label></div></div><div class="action-buttons" data-v-87cf033f><button class="export-btn" data-v-87cf033f><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-87cf033f><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-87cf033f></path><polyline points="7 10 12 15 17 10" data-v-87cf033f></polyline><line x1="12" y1="15" x2="12" y2="3" data-v-87cf033f></line></svg> Download Pixel Art </button><button class="export-btn secondary" data-v-87cf033f><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-87cf033f><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" data-v-87cf033f></path><polyline points="14 2 14 8 20 8" data-v-87cf033f></polyline><line x1="16" y1="13" x2="8" y2="13" data-v-87cf033f></line><line x1="16" y1="17" x2="8" y2="17" data-v-87cf033f></line><polyline points="10 9 9 9 8 9" data-v-87cf033f></polyline></svg> Download Pattern Guide </button></div></div><div class="canvas-section" data-v-87cf033f><div class="canvas-container" data-v-87cf033f>`);
      if (currentImage.value && !isDefaultImage.value) {
        _push(`<canvas class="pixel-canvas" data-v-87cf033f></canvas>`);
      } else {
        _push(`<!---->`);
      }
      if (currentImage.value && isDefaultImage.value) {
        _push(`<img${ssrRenderAttr("src", currentImage.value)} class="pixel-canvas" alt="Default pixel art preview" data-v-87cf033f>`);
      } else {
        _push(`<!---->`);
      }
      if (!currentImage.value) {
        _push(`<div class="placeholder" data-v-87cf033f><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-87cf033f><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-87cf033f></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-87cf033f></circle><polyline points="21 15 16 10 5 21" data-v-87cf033f></polyline></svg><p data-v-87cf033f>Upload an image to get started</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (currentImage.value) {
        _push(`<div class="info-panel" data-v-87cf033f><div class="info-item" data-v-87cf033f><span class="label" data-v-87cf033f>Original Size</span><span class="value" data-v-87cf033f>${ssrInterpolate(originalWidth.value)} \xD7 ${ssrInterpolate(originalHeight.value)}</span></div><div class="info-item" data-v-87cf033f><span class="label" data-v-87cf033f>Pixel Size</span><span class="value" data-v-87cf033f>${ssrInterpolate(outputWidth.value)} \xD7 ${ssrInterpolate(outputHeight.value)}</span></div><div class="info-item" data-v-87cf033f><span class="label" data-v-87cf033f>Colors Used</span><span class="value" data-v-87cf033f>${ssrInterpolate(actualColors.value.length)}</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (currentImage.value) {
        _push(`<div class="color-palette" data-v-87cf033f><h4 data-v-87cf033f>Color Palette</h4><div class="palette-colors" data-v-87cf033f><!--[-->`);
        ssrRenderList(actualColors.value, (color, index) => {
          _push(`<div class="color-item" data-v-87cf033f><div class="color-swatch" style="${ssrRenderStyle({ backgroundColor: color })}" data-v-87cf033f></div><span class="color-value" data-v-87cf033f>${ssrInterpolate(color)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="features-section" data-v-87cf033f><div class="features-header" data-v-87cf033f><h2 data-v-87cf033f>Feature Introduction</h2></div><!--[-->`);
      ssrRenderList(unref(pixelArtFeatures), (feature, index) => {
        _push(ssrRenderComponent(FeatureSection, {
          key: feature.id,
          feature,
          reverse: index === 1
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(HowToGuide, { guide: unref(pixelArtGuide) }, null, _parent));
      _push(ssrRenderComponent(_component_FeaturesSection, {
        "show-header": false,
        "show-features": false,
        "show-steps": false,
        "show-why-to-use": false,
        "show-faq": true,
        "faq-items": unref(pixelArtFaq)
      }, null, _parent));
      _push(`<div class="try-more" data-v-87cf033f><h2 data-v-87cf033f>Try Our Other Tools</h2><div class="try-more-box" data-v-87cf033f>`);
      _push(ssrRenderComponent(PageGuide, {
        description: "Grid Maker, Create professional artwork with zero drawing skills.",
        "link-url": "/advanced",
        "button-text": "Go to Advanced",
        "image-url": "https://6a1925960bc623d413aeb142.imgix.net/jump.png"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pixel-art.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pixelArt = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-87cf033f"]]);

export { pixelArt as default };
//# sourceMappingURL=pixel-art-C3_AmfI_.mjs.map
