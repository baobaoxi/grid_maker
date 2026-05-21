import { defineComponent, mergeProps, useSSRContext, ref, watch } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderStyle, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "AppHeader",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><h1>${ssrInterpolate(__props.title)}</h1><p>${ssrInterpolate(__props.subtitle)}</p></header>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "UploadArea",
  __ssrInlineRender: true,
  props: {
    label: {},
    hint: {}
  },
  emits: ["file-selected"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const fileInput = ref(null);
    const isDragging = ref(false);
    __expose({ reset: () => {
      if (fileInput.value) fileInput.value.value = "";
    } });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "upload-section" }, _attrs))}><div class="${ssrRenderClass([{ dragover: isDragging.value }, "upload-area"])}"><input type="file" accept="image/*" class="file-input"><div class="upload-placeholder"><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg><p>${ssrInterpolate(__props.label)}</p><span>${ssrInterpolate(__props.hint)}</span></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UploadArea.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "GridControls",
  __ssrInlineRender: true,
  props: {
    title: {},
    columnsLabel: {},
    rowsLabel: {},
    colorLabel: {},
    lineWidthLabel: {},
    opacityLabel: {},
    showLabelsLabel: {},
    downloadLabel: {},
    clearLabel: {},
    cols: {},
    rows: {},
    color: {},
    lineWidth: {},
    opacity: {},
    showLabels: { type: Boolean },
    canDownload: { type: Boolean }
  },
  emits: ["update", "download", "clear"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const localCols = ref(props.cols ?? 3);
    const localRows = ref(props.rows ?? 3);
    const localColor = ref(props.color ?? "#ff0000");
    const localLineWidth = ref(props.lineWidth ?? 2);
    const localOpacity = ref(props.opacity ?? 50);
    const localShowLabels = ref(props.showLabels ?? true);
    watch(() => props.cols, (newVal) => {
      if (newVal !== void 0) localCols.value = newVal;
    });
    watch(() => props.rows, (newVal) => {
      if (newVal !== void 0) localRows.value = newVal;
    });
    watch(() => props.color, (newVal) => {
      if (newVal !== void 0) localColor.value = newVal;
    });
    watch(() => props.lineWidth, (newVal) => {
      if (newVal !== void 0) localLineWidth.value = newVal;
    });
    watch(() => props.opacity, (newVal) => {
      if (newVal !== void 0) localOpacity.value = newVal;
    });
    watch(() => props.showLabels, (newVal) => {
      if (newVal !== void 0) localShowLabels.value = newVal;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "controls-panel" }, _attrs))}><h3>${ssrInterpolate(__props.title)}</h3><div class="control-group"><label>${ssrInterpolate(__props.columnsLabel)}</label><input type="number"${ssrRenderAttr("value", localCols.value)} min="1" max="50" class="number-input"></div><div class="control-group"><label>${ssrInterpolate(__props.rowsLabel)}</label><input type="number"${ssrRenderAttr("value", localRows.value)} min="1" max="50" class="number-input"></div><div class="control-group"><label>${ssrInterpolate(__props.colorLabel)}</label><div class="color-picker-wrapper"><input type="color"${ssrRenderAttr("value", localColor.value)} class="color-input"><span class="color-value">${ssrInterpolate(localColor.value)}</span></div></div><div class="control-group"><label>${ssrInterpolate(__props.lineWidthLabel)}</label><input type="range"${ssrRenderAttr("value", localLineWidth.value)} min="1" max="10" class="range-input"><span>${ssrInterpolate(localLineWidth.value)}px</span></div><div class="control-group"><label>${ssrInterpolate(__props.opacityLabel)}</label><input type="range"${ssrRenderAttr("value", localOpacity.value)} min="10" max="100" class="range-input"><span>${ssrInterpolate(localOpacity.value)}%</span></div><div class="control-group checkbox-group"><label class="checkbox-label"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(localShowLabels.value) ? ssrLooseContain(localShowLabels.value, null) : localShowLabels.value) ? " checked" : ""}><span>${ssrInterpolate(__props.showLabelsLabel)}</span></label></div><div class="button-group"><button class="btn btn-primary"${ssrIncludeBooleanAttr(!__props.canDownload) ? " disabled" : ""}>${ssrInterpolate(__props.downloadLabel)}</button><button class="btn btn-secondary">${ssrInterpolate(__props.clearLabel)}</button></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GridControls.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ImageCanvas",
  __ssrInlineRender: true,
  props: {
    imageSrc: {},
    gridCols: {},
    gridRows: {},
    gridColor: {},
    lineWidth: {},
    opacity: {},
    showInfo: { type: Boolean },
    infoLabel: {},
    gridLabel: {},
    showLabels: { type: Boolean }
  },
  emits: ["loaded", "dimensions"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const imageRef = ref(null);
    const canvasRef = ref(null);
    const imageWidth = ref(0);
    const imageHeight = ref(0);
    const imageLoaded = ref(false);
    const drawGrid = () => {
      if (!imageRef.value || !canvasRef.value || !imageLoaded.value) return;
      const img = imageRef.value;
      const canvas = canvasRef.value;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const displayWidth = img.offsetWidth;
      const displayHeight = img.offsetHeight;
      if (displayWidth === 0 || displayHeight === 0) return;
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = props.gridColor ?? "#ff0000";
      ctx.lineWidth = props.lineWidth ?? 2;
      const colWidth = canvas.width / (props.gridCols ?? 3);
      const rowHeight = canvas.height / (props.gridRows ?? 3);
      for (let i = 1; i < (props.gridCols ?? 3); i++) {
        ctx.beginPath();
        ctx.moveTo(colWidth * i, 0);
        ctx.lineTo(colWidth * i, canvas.height);
        ctx.stroke();
      }
      for (let i = 1; i < (props.gridRows ?? 3); i++) {
        ctx.beginPath();
        ctx.moveTo(0, rowHeight * i);
        ctx.lineTo(canvas.width, rowHeight * i);
        ctx.stroke();
      }
      if (props.showLabels) {
        ctx.fillStyle = props.gridColor ?? "#ff0000";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        for (let row = 0; row < (props.gridRows ?? 3); row++) {
          for (let col = 0; col < (props.gridCols ?? 3); col++) {
            const letter = String.fromCharCode(65 + col);
            const label = `${letter}${row + 1}`;
            const x = colWidth * (col + 1) - 4;
            const y = rowHeight * (row + 1) - 4;
            ctx.fillText(label, x, y);
          }
        }
      }
    };
    const getCanvasWithGrid = () => {
      if (!imageRef.value) return null;
      const img = imageRef.value;
      const canvas = (void 0).createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      const displayWidth = img.offsetWidth || img.naturalWidth;
      const displayHeight = img.offsetHeight || img.naturalHeight;
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      ctx.drawImage(img, 0, 0, displayWidth, displayHeight);
      ctx.strokeStyle = props.gridColor ?? "#ff0000";
      ctx.lineWidth = props.lineWidth ?? 2;
      const colWidth = canvas.width / (props.gridCols ?? 3);
      const rowHeight = canvas.height / (props.gridRows ?? 3);
      for (let i = 1; i < (props.gridCols ?? 3); i++) {
        ctx.beginPath();
        ctx.moveTo(colWidth * i, 0);
        ctx.lineTo(colWidth * i, canvas.height);
        ctx.stroke();
      }
      for (let i = 1; i < (props.gridRows ?? 3); i++) {
        ctx.beginPath();
        ctx.moveTo(0, rowHeight * i);
        ctx.lineTo(canvas.width, rowHeight * i);
        ctx.stroke();
      }
      if (props.showLabels) {
        ctx.fillStyle = props.gridColor ?? "#ff0000";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "right";
        ctx.textBaseline = "bottom";
        for (let row = 0; row < (props.gridRows ?? 3); row++) {
          for (let col = 0; col < (props.gridCols ?? 3); col++) {
            const letter = String.fromCharCode(65 + col);
            const label = `${letter}${row + 1}`;
            const x = colWidth * (col + 1) - 4;
            const y = rowHeight * (row + 1) - 4;
            ctx.fillText(label, x, y);
          }
        }
      }
      return canvas;
    };
    __expose({ getCanvasWithGrid });
    watch([() => props.gridCols, () => props.gridRows, () => props.gridColor, () => props.lineWidth, () => props.opacity, () => props.showLabels], () => {
      drawGrid();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "canvas-container" }, _attrs))}><div class="image-wrapper"><img${ssrRenderAttr("src", __props.imageSrc)} class="original-image"><canvas class="grid-overlay" style="${ssrRenderStyle({ opacity: __props.opacity / 100, width: imageWidth.value + "px", height: imageHeight.value + "px" })}"></canvas></div>`);
      if (__props.showInfo) {
        _push(`<div class="preview-info">${ssrInterpolate(__props.infoLabel)}: ${ssrInterpolate(imageWidth.value)} × ${ssrInterpolate(imageHeight.value)} | ${ssrInterpolate(__props.gridLabel)}: ${ssrInterpolate(__props.gridCols)} × ${ssrInterpolate(__props.gridRows)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ImageCanvas.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  props: {
    title: {},
    subtitle: {},
    stepsTitle: {},
    features: {},
    steps: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section" }, _attrs))}><div class="features-container"><div class="features-header"><h2>${ssrInterpolate(__props.title)}</h2><p>${ssrInterpolate(__props.subtitle)}</p></div><div class="features-grid"><!--[-->`);
      ssrRenderList(__props.features, (feature, index) => {
        _push(`<div class="feature-card"><div class="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path${ssrRenderAttr("d", feature.iconPath)}></path></svg></div><h3>${ssrInterpolate(feature.title)}</h3><p>${ssrInterpolate(feature.description)}</p></div>`);
      });
      _push(`<!--]--></div><div class="how-it-works"><h3>${ssrInterpolate(__props.stepsTitle)}</h3><div class="steps-grid"><!--[-->`);
      ssrRenderList(__props.steps, (step, index) => {
        _push(`<div class="step-card"><div class="step-number">${ssrInterpolate(index + 1)}</div><h4>${ssrInterpolate(step.title)}</h4><p>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  props: {
    company: {},
    links: {}
  },
  emits: ["navigate"],
  setup(__props) {
    const year = ref((/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))}><div class="footer-content"><div class="footer-links"><!--[-->`);
      ssrRenderList(__props.links, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)} class="footer-link">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div><div class="footer-copyright"><p>© ${ssrInterpolate(year.value)} ${ssrInterpolate(__props.company)}. All rights reserved.</p></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const uploadAreaRef = ref(null);
    const imageCanvasRef = ref(null);
    const hiddenFileInput = ref(null);
    const imageSrc = ref("");
    const hasUserUploadedImage = ref(false);
    const gridCols = ref(4);
    const gridRows = ref(3);
    const gridColor = ref("#00ff00");
    const lineWidth = ref(2);
    const opacity = ref(50);
    const showLabels = ref(true);
    const handleFileSelected = (file) => {
      hasUserUploadedImage.value = true;
      const reader = new FileReader();
      reader.onload = (e) => {
        imageSrc.value = e.target?.result;
      };
      reader.readAsDataURL(file);
    };
    const triggerFileInput = () => {
      hiddenFileInput.value?.click();
    };
    const handleGridUpdate = (settings) => {
      gridCols.value = settings.cols;
      gridRows.value = settings.rows;
      gridColor.value = settings.color;
      lineWidth.value = settings.lineWidth;
      opacity.value = settings.opacity;
      if (settings.showLabels !== void 0) {
        showLabels.value = settings.showLabels;
      }
    };
    const downloadImage = () => {
      if (!imageCanvasRef.value || !hasUserUploadedImage.value) return;
      const canvas = imageCanvasRef.value.getCanvasWithGrid();
      if (canvas) {
        const link = (void 0).createElement("a");
        link.download = "grid-image.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
    const handleFooterNavigate = (link) => {
      if (link.label === "Privacy Policy") {
        alert("Privacy Policy\n\nWe respect your privacy.\n\n1. We do not collect any personal information.\n2. Images you upload are processed locally only and never sent to any server.\n3. All operations are performed on your device.");
      } else if (link.label === "Terms of Service") {
        alert("Terms of Service\n\nBy using this tool, you agree to:\n\n1. Only process images that you have the right to use.\n2. Not use this tool for any illegal purposes.\n3. Take full responsibility for any consequences arising from using this tool.");
      } else if (link.label === "About Us") {
        alert("About Us\n\nPhoto Grid Overlay is a free online photo grid tool.\n\nFeatures:\n• Customizable grid columns and rows\n• Adjustable grid color and opacity\n• Image download support\n• Local processing for privacy protection");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "app-container" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$6, {
        title: "Photo Grid Overlay",
        subtitle: "Upload image and add customizable grid lines"
      }, null, _parent));
      _push(`<main class="main-content">`);
      if (!imageSrc.value) {
        _push(ssrRenderComponent(_sfc_main$5, {
          ref_key: "uploadAreaRef",
          ref: uploadAreaRef,
          label: "Click or drag to upload image",
          hint: "Supported formats: JPG, PNG, GIF",
          onFileSelected: handleFileSelected
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (imageSrc.value) {
        _push(`<div class="workspace">`);
        _push(ssrRenderComponent(_sfc_main$4, {
          title: "Grid Settings",
          cols: gridCols.value,
          rows: gridRows.value,
          color: gridColor.value,
          "line-width": lineWidth.value,
          opacity: opacity.value,
          "show-labels": showLabels.value,
          "can-download": hasUserUploadedImage.value,
          onUpdate: handleGridUpdate,
          onDownload: downloadImage,
          onClear: triggerFileInput
        }, null, _parent));
        _push(`<div class="canvas-wrapper"><div class="upload-btn-wrapper"><input type="file" accept="image/*" class="file-input"><button class="btn btn-upload"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg> Change Image </button></div>`);
        _push(ssrRenderComponent(_sfc_main$3, {
          ref_key: "imageCanvasRef",
          ref: imageCanvasRef,
          "image-src": imageSrc.value,
          "grid-cols": gridCols.value,
          "grid-rows": gridRows.value,
          "grid-color": gridColor.value,
          "line-width": lineWidth.value,
          opacity: opacity.value,
          "show-info": true,
          "info-label": "Preview Size",
          "grid-label": "Grid",
          "show-labels": showLabels.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        title: "Why Choose Us",
        subtitle: "Simple, Fast, Professional Photo Grid Tool",
        "steps-title": "How It Works"
      }, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DCKOML9_.js.map
