import { defineComponent, mergeProps, useSSRContext, ref, computed, watch } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import { _ as _sfc_main$5 } from "./AppFooter-Zj2vq6Gi.js";
import { A as AppNavbar } from "./AppNavbar-B9xYuVAx.js";
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  props: {
    title: { default: "Why Choose Us" },
    subtitle: { default: "Simple, Fast, Professional Photo Grid Tool" },
    stepsTitle: { default: "How to Use Our Free Online Grid Maker to Proportion Your Images Perfect" },
    features: { default: () => [
      { iconPath: "M12 20h9", title: "Custom Grid", description: "Customizable grid columns and rows for precise control" },
      { iconPath: "M20 7h-9", title: "Rich Styles", description: "Multiple color options with adjustable line width and opacity" },
      { iconPath: "M12 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z", title: "Privacy Protection", description: "All operations are done locally. No data is uploaded to servers." },
      { iconPath: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", title: "Quick Export", description: "One-click download of high-quality images with grid overlay" }
    ] },
    steps: { default: () => [
      { title: "Upload Your Reference Image", description: 'Click the "Upload" button or drag and drop your photo into the workspace. Our online grid maker supports high-resolution PNG, JPG, and WebP formats without compressing your original image quality.' },
      { title: "Customize Grid Lines and Dimensions", description: "Adjust the grid density according to your needs. Whether you need a standard 3x3 Instagram grid splitter or a 5x5 drawing grid overlay, you can easily adjust: Columns & Rows: Input precise numbers or pixel sizes. Line Color & Thickness: Choose high-contrast colors (like bright red or white) so the grid remains visible against dark background images." },
      { title: "Download or Print", description: 'Once you are satisfied with the grid overlay, click "Export". You can download the image with the grid printed on it, or save individual sliced images for social media carousels.' }
    ] },
    showHeader: { type: Boolean, default: true },
    showFeatures: { type: Boolean, default: true },
    showSteps: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section" }, _attrs))} data-v-2326d13c><div class="features-container" data-v-2326d13c>`);
      if (__props.showHeader) {
        _push(`<div class="features-header" data-v-2326d13c><h2 data-v-2326d13c>${ssrInterpolate(__props.title)}</h2><p data-v-2326d13c>${ssrInterpolate(__props.subtitle)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showFeatures) {
        _push(`<div class="features-grid" data-v-2326d13c><!--[-->`);
        ssrRenderList(__props.features, (feature, index2) => {
          _push(`<div class="feature-card" data-v-2326d13c><div class="feature-icon" data-v-2326d13c><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-2326d13c><path${ssrRenderAttr("d", feature.iconPath)} data-v-2326d13c></path></svg></div><h3 data-v-2326d13c>${ssrInterpolate(feature.title)}</h3><p data-v-2326d13c>${ssrInterpolate(feature.description)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showSteps) {
        _push(`<div class="how-it-works" data-v-2326d13c><h3 data-v-2326d13c>${ssrInterpolate(__props.stepsTitle)}</h3><div class="steps-grid" data-v-2326d13c><!--[-->`);
        ssrRenderList(__props.steps, (step, index2) => {
          _push(`<div class="step-card" data-v-2326d13c><div class="step-number" data-v-2326d13c>${ssrInterpolate(index2 + 1)}</div><h4 data-v-2326d13c>${ssrInterpolate(step.title)}</h4><p data-v-2326d13c>${ssrInterpolate(step.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const FeaturesSection = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-2326d13c"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "action-section" }, _attrs))} data-v-917edeb3><div class="container" data-v-917edeb3><div class="section-header" data-v-917edeb3><h2 data-v-917edeb3>Grid Maker in Action</h2><p data-v-917edeb3>From portraits to product shots, explore how this online grid maker helps plan proportions, composition, and clean transfers.</p></div><div class="action-grid" data-v-917edeb3><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400&amp;h=300&amp;fit=crop" alt="Wall mural painting with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Wall Murals</h3><p data-v-917edeb3>Scale up designs from small sketches to massive wall paintings with perfect proportions.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&amp;h=300&amp;fit=crop" alt="Abstract painting with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Abstract Art</h3><p data-v-917edeb3>Plan geometric compositions and balance visual elements in abstract paintings.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&amp;h=300&amp;fit=crop" alt="Sketch drawing with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Sketching &amp; Drawing</h3><p data-v-917edeb3>Master accurate proportions and perspective in pencil sketches and charcoal drawings.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&amp;h=300&amp;fit=crop" alt="Portrait drawing with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Portrait Drawing</h3><p data-v-917edeb3>Perfectly map facial features and proportions using grid lines for accurate sketching.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&amp;h=300&amp;fit=crop" alt="Product photography with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Product Photography</h3><p data-v-917edeb3>Align products perfectly in frame for professional e-commerce shots.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&amp;h=300&amp;fit=crop" alt="Cross stitch pattern with grid" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Cross Stitch Patterns</h3><p data-v-917edeb3>Convert photos to pixel-perfect patterns for crafting and embroidery.</p></div></div><div class="action-card" data-v-917edeb3><div class="action-image" data-v-917edeb3><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&amp;h=300&amp;fit=crop" alt="Instagram grid layout" data-v-917edeb3><div class="grid-overlay" data-v-917edeb3></div></div><div class="action-content" data-v-917edeb3><h3 data-v-917edeb3>Social Media Grids</h3><p data-v-917edeb3>Plan and split images for cohesive Instagram feed layouts.</p></div></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ActionSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ActionSection = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-917edeb3"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "HeroSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "hero-section" }, _attrs))} data-v-cd2e2dd5><div class="hero-background" data-v-cd2e2dd5><div class="demo-image" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=1920&amp;h=1080&amp;fit=crop" alt="Portrait with grid overlay demo" data-v-cd2e2dd5><div class="grid-overlay" data-v-cd2e2dd5></div></div><div class="overlay-gradient" data-v-cd2e2dd5></div></div><div class="hero-content" data-v-cd2e2dd5><h1 class="hero-title" data-v-cd2e2dd5> Grid Maker - Create Grids for Your Artwork </h1><p class="hero-subtitle" data-v-cd2e2dd5> Grid Maker is a powerful tool that helps you create precise grids for your artistic works. Upload any image and overlay customizable grid lines to perfect your proportions and composition. </p><div class="hero-cta" data-v-cd2e2dd5><button class="btn btn-primary" data-v-cd2e2dd5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cd2e2dd5><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" data-v-cd2e2dd5></polygon></svg> Get Started </button><button class="btn btn-secondary" data-v-cd2e2dd5><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-cd2e2dd5><circle cx="12" cy="12" r="10" data-v-cd2e2dd5></circle><line x1="12" y1="16" x2="12" y2="12" data-v-cd2e2dd5></line><line x1="12" y1="8" x2="12.01" y2="8" data-v-cd2e2dd5></line></svg> Learn More </button></div><div class="hero-social-proof" data-v-cd2e2dd5><div class="user-avatars" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop" alt="User" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop" alt="User" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop" alt="User" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop" alt="User" data-v-cd2e2dd5><img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop" alt="User" data-v-cd2e2dd5></div><div class="rating" data-v-cd2e2dd5><div class="stars" data-v-cd2e2dd5><span data-v-cd2e2dd5>★</span><span data-v-cd2e2dd5>★</span><span data-v-cd2e2dd5>★</span><span data-v-cd2e2dd5>★</span><span data-v-cd2e2dd5>★</span></div><p data-v-cd2e2dd5>Trusted by 999+ artists worldwide</p></div></div><div class="hero-feature" data-v-cd2e2dd5><h2 data-v-cd2e2dd5>Drawing Grid Generator</h2><p data-v-cd2e2dd5>Upload your image, overlay precise grids, and download printable reference materials in seconds.</p></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-cd2e2dd5"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GridMaker",
  __ssrInlineRender: true,
  setup(__props) {
    const currentImage = ref("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop");
    const imageRef = ref(null);
    const canvasRef = ref(null);
    const gridCount = ref(12);
    const selectedCombo = ref({ rows: 3, cols: 4, label: "3×4" });
    const selectedStyle = ref("square");
    const gridStyles = [
      { value: "square", label: "Square", icon: "◻️" },
      { value: "diamond", label: "Diamond", icon: "◇" },
      { value: "triangle", label: "Triangle", icon: "△" },
      { value: "hexagon", label: "Hexagon", icon: "⬡" }
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
      ctx.lineWidth = 2;
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid-maker-container" }, _attrs))} data-v-e96931e4><div class="grid-maker-main" data-v-e96931e4><div class="preview-section" data-v-e96931e4><div class="preview-container" data-v-e96931e4><img${ssrRenderAttr("src", currentImage.value)} alt="Grid preview" class="preview-image" data-v-e96931e4><canvas class="grid-canvas" data-v-e96931e4></canvas><div class="click-indicator" data-v-e96931e4><span data-v-e96931e4>Click to edit</span></div></div><div class="upload-section" data-v-e96931e4><input type="file" id="image-upload" class="upload-input" accept="image/*" data-v-e96931e4><label for="image-upload" class="upload-button" data-v-e96931e4><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e96931e4><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" data-v-e96931e4></path><polyline points="17 8 12 3 7 8" data-v-e96931e4></polyline><line x1="12" y1="3" x2="12" y2="15" data-v-e96931e4></line></svg> Upload Image </label></div></div><div class="form-section" data-v-e96931e4><h3 data-v-e96931e4>Grid Settings</h3><div class="form-group" data-v-e96931e4><label for="grid-count" data-v-e96931e4>Grid Count</label><input type="number" id="grid-count"${ssrRenderAttr("value", gridCount.value)} min="4" max="1000" placeholder="Enter grid count" data-v-e96931e4></div>`);
      if (gridCombinations.value.length > 0) {
        _push(`<div class="form-group" data-v-e96931e4><label data-v-e96931e4>Grid Combination</label><div class="combination-options" data-v-e96931e4><!--[-->`);
        ssrRenderList(gridCombinations.value, (combo) => {
          _push(`<button class="${ssrRenderClass(["combo-btn", { active: selectedCombo.value.label === combo.label }])}" data-v-e96931e4>${ssrInterpolate(combo.label)}</button>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="form-group" data-v-e96931e4><label data-v-e96931e4>Grid Style</label><div class="style-options" data-v-e96931e4><!--[-->`);
      ssrRenderList(gridStyles, (style) => {
        _push(`<label class="style-radio" data-v-e96931e4><input type="radio"${ssrRenderAttr("value", style.value)}${ssrIncludeBooleanAttr(ssrLooseEqual(selectedStyle.value, style.value)) ? " checked" : ""} data-v-e96931e4><span class="style-icon" data-v-e96931e4>${ssrInterpolate(style.icon)}</span><span data-v-e96931e4>${ssrInterpolate(style.label)}</span></label>`);
      });
      _push(`<!--]--></div></div><div class="action-buttons" data-v-e96931e4><button class="btn-primary" data-v-e96931e4><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e96931e4><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-e96931e4></path><path d="m15 5 4 4" data-v-e96931e4></path></svg> Edit </button></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GridMaker.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GridMaker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e96931e4"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const handleFooterNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))} data-v-37002646>`);
      _push(ssrRenderComponent(AppNavbar, null, null, _parent));
      _push(ssrRenderComponent(HeroSection, null, null, _parent));
      _push(`<main class="main-content" data-v-37002646><section class="grid-maker-section" data-v-37002646><div class="container" data-v-37002646>`);
      _push(ssrRenderComponent(GridMaker, null, null, _parent));
      _push(`</div></section></main>`);
      _push(ssrRenderComponent(FeaturesSection, {
        "steps-title": "How It Works",
        "show-header": false,
        "show-features": false,
        "show-steps": true
      }, null, _parent));
      _push(ssrRenderComponent(FeaturesSection, {
        title: "Why Choose Us",
        subtitle: "Simple, Fast, Professional Photo Grid Tool",
        "show-header": true,
        "show-features": true,
        "show-steps": false
      }, null, _parent));
      _push(ssrRenderComponent(ActionSection, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$5, {
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
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37002646"]]);
export {
  index as default
};
//# sourceMappingURL=index-B9YF0S2-.js.map
