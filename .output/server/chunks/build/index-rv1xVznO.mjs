import { defineComponent, defineAsyncComponent, mergeProps, unref, ref, computed, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './FeaturesSection-Cfcf03WL.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$3 } from './AppFooter-kkN9JGJC.mjs';
import { useRouter } from 'vue-router';
import { u as useHead } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-ee26b4d8><div class="hero-background" data-v-ee26b4d8><div class="demo-image" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=960&amp;h=540&amp;fit=crop" alt="Grid Maker for people to draw artist" width="960" height="540" fetchpriority="high" data-v-ee26b4d8><div class="grid-overlay" data-v-ee26b4d8></div></div><div class="overlay-gradient" data-v-ee26b4d8></div></div><div class="hero-content" data-v-ee26b4d8><h1 class="hero-title" data-v-ee26b4d8> Grid Maker for People Who Can\u2019t Draw. </h1><p class="hero-subtitle" data-v-ee26b4d8> Grid Maker is the best online grid maker tool that helps you create precise grids for your artistic works. This grid maker allows you to upload any image and overlay customizable grid lines. Whether you&#39;re a beginner or a professional artist, this grid maker tool will perfect your proportions and composition. </p><div class="hero-social-proof" data-v-ee26b4d8><div class="user-avatars" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop" alt="User avatar" width="100" height="100" loading="lazy" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop" alt="User avatar" width="100" height="100" loading="lazy" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop" alt="User avatar" width="100" height="100" loading="lazy" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop" alt="User avatar" width="100" height="100" loading="lazy" data-v-ee26b4d8><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop" alt="User avatar" width="100" height="100" loading="lazy" data-v-ee26b4d8></div><div class="rating" data-v-ee26b4d8><div class="stars" data-v-ee26b4d8><span data-v-ee26b4d8>\u2605</span><span data-v-ee26b4d8>\u2605</span><span data-v-ee26b4d8>\u2605</span><span data-v-ee26b4d8>\u2605</span><span data-v-ee26b4d8>\u2605</span></div><p data-v-ee26b4d8>Trusted by 999+ artists worldwide</p></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ee26b4d8"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GridMaker",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const step = ref(1);
    const currentImage = ref("https://6a1650b35d38b1b9b092a71f.imgix.net/shoutuweb.jpeg");
    const imageRef = ref(null);
    const canvasRef = ref(null);
    const gridCount = ref(12);
    const selectedCombo = ref({ rows: 3, cols: 4, label: "3\xD74" });
    const selectedStyle = ref("square");
    ref(false);
    const lineWidth = ref(2);
    const gridStyles = [
      { value: "square", label: "Square", icon: "\u25FB\uFE0F" },
      { value: "diamond", label: "Diamond", icon: "\u25C7" },
      { value: "triangle", label: "Triangle", icon: "\u25B3" },
      { value: "hexagon", label: "Hexagon", icon: "\u2B21" }
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
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + "\xD7" + Math.max(i, j), score });
        }
      }
      for (let i = maxFactor + 1; i <= Math.min(count, maxFactor + 5); i++) {
        if (count % i !== 0) {
          const j = Math.ceil(count / i);
          const score = Math.abs(i - j) + 1;
          combinations.push({ rows: Math.min(i, j), cols: Math.max(i, j), label: Math.min(i, j) + "\xD7" + Math.max(i, j), score });
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
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const width = canvas.width;
      const height = canvas.height;
      const rows = selectedCombo.value.rows;
      const cols = selectedCombo.value.cols;
      const color = "#8b5cf6";
      const alpha = 0.6;
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = color;
      ctx.lineWidth = lineWidth.value;
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
    watch([selectedCombo, selectedStyle], () => {
      drawGrid();
    });
    watch(gridCount, () => {
      if (step.value >= 3 && gridCombinations.value.length > 0) {
        selectedCombo.value = gridCombinations.value[0];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-maker-container" }, _attrs))} data-v-a852bcb9><h2 class="maker-title" data-v-a852bcb9>Drawing Grid Maker</h2><div class="maker-subtitle" data-v-a852bcb9>Upload your photo, generate a grid, and start sketching square by square.</div><div class="${ssrRenderClass([{ "single-column": step.value < 2 }, "grid-maker-main"])}" data-v-a852bcb9><div class="preview-section" data-v-a852bcb9><div class="${ssrRenderClass([{ "default-height": step.value < 2 }, "preview-container"])}" data-v-a852bcb9><img${ssrRenderAttr("src", currentImage.value)} alt="Grid Maker for people to draw artist" class="preview-image" fetchpriority="high" data-v-a852bcb9><canvas class="grid-canvas" data-v-a852bcb9></canvas></div><div class="upload-section" data-v-a852bcb9><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-a852bcb9><label for="image-upload" class="upload-button" data-v-a852bcb9><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a852bcb9><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-a852bcb9></path><polyline points="17 8 12 3 7 8" data-v-a852bcb9></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-a852bcb9></line></svg> ${ssrInterpolate(step.value === 1 ? "Choose Image" : "Change Image")}</label></div></div>`);
      if (step.value >= 2) {
        _push(`<div class="form-section" data-v-a852bcb9>`);
        if (step.value >= 2) {
          _push(`<!--[--><div class="form-group" data-v-a852bcb9><label for="grid-count" data-v-a852bcb9>Grid Count</label><input type="number" id="grid-count"${ssrRenderAttr("value", gridCount.value)} min="4" max="1000" placeholder="Enter grid count" data-v-a852bcb9></div><div class="form-group" data-v-a852bcb9><label data-v-a852bcb9>Grid Style</label><div class="style-options" data-v-a852bcb9><!--[-->`);
          ssrRenderList(gridStyles, (style) => {
            _push(`<label class="style-radio" data-v-a852bcb9><input type="radio"${ssrRenderAttr("value", style.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedStyle.value, style.value)) ? " checked" : ""} data-v-a852bcb9><span class="style-icon" data-v-a852bcb9>${ssrInterpolate(style.icon)}</span><span data-v-a852bcb9>${ssrInterpolate(style.label)}</span></label>`);
          });
          _push(`<!--]--></div></div>`);
          if (step.value === 2) {
            _push(`<button class="btn-primary add-grid-btn" data-v-a852bcb9><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a852bcb9><line x1="12" y1="5" x2="12" y2="19" data-v-a852bcb9></line><line x1="5" y1="12" x2="19" y2="12" data-v-a852bcb9></line></svg> Add Grid </button>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (step.value >= 3) {
          _push(`<!--[--><h3 data-v-a852bcb9>Grid Settings</h3>`);
          if (gridCombinations.value.length > 0) {
            _push(`<div class="form-group" data-v-a852bcb9><label data-v-a852bcb9>Grid Combination</label><div class="combination-options" data-v-a852bcb9><!--[-->`);
            ssrRenderList(gridCombinations.value, (combo) => {
              _push(`<button class="${ssrRenderClass(["combo-btn", { active: selectedCombo.value.label === combo.label }])}" data-v-a852bcb9>${ssrInterpolate(combo.label)}</button>`);
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<div class="action-buttons" data-v-a852bcb9><button class="btn-primary" data-v-a852bcb9><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a852bcb9><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-a852bcb9></path><path d="m15 5 4 4" data-v-a852bcb9></path></svg> Edit </button></div><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GridMaker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridMaker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a852bcb9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Free Online Photo Grid Maker \u2014 No Design Skills Needed",
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/" }
      ]
    });
    const AppNavbar = defineAsyncComponent(() => import('./AppNavbar-CRd660Id.mjs'));
    const handleFooterNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))} data-v-808e111c>`);
      _push(ssrRenderComponent(unref(AppNavbar), null, null, _parent));
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(`<main class="main-content" data-v-808e111c><section class="grid-maker-section" id="grid-maker" data-v-808e111c><div class="container" data-v-808e111c>`);
      _push(ssrRenderComponent(GridMaker, null, null, _parent));
      _push(`</div></section></main>`);
      _push(ssrRenderComponent(__nuxt_component_0, {
        "steps-title": "How to Use",
        "show-header": false,
        "show-features": false,
        "show-steps": true,
        "show-faq": true
      }, null, _parent));
      _push(`<section class="cta-section" data-v-808e111c><div class="cta-content" data-v-808e111c><p class="cta-text" data-v-808e111c>You don&#39;t need an art degree. You just need a pencil, a piece of paper, and this Grid Maker. Our grid maker tool makes drawing easy for everyone. Start using the best grid maker online today!</p><a href="#grid-maker" class="cta-button" data-v-808e111c><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-808e111c><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-808e111c></path><path d="m15 5 4 4" data-v-808e111c></path></svg> Start Creating with Grid Maker </a></div></section>`);
      _push(ssrRenderComponent(_sfc_main$3, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-808e111c"]]);

export { index as default };
//# sourceMappingURL=index-rv1xVznO.mjs.map
