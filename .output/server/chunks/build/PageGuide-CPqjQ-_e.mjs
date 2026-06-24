import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageGuide",
  __ssrInlineRender: true,
  props: {
    description: {
      type: String,
      required: true
    },
    linkUrl: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      default: "Try it now"
    },
    linkTarget: {
      type: String,
      default: "_self"
    },
    imageUrl: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-guide" }, _attrs))} data-v-1e7fb620><a${ssrRenderAttr("href", __props.linkUrl)}${ssrRenderAttr("target", __props.linkTarget)} class="guide-link" data-v-1e7fb620><div class="guide-content" data-v-1e7fb620><div class="guide-image-wrapper" data-v-1e7fb620>`);
      if (__props.imageUrl) {
        _push(`<img${ssrRenderAttr("src", __props.imageUrl)}${ssrRenderAttr("alt", __props.description)} class="guide-image" data-v-1e7fb620>`);
      } else {
        _push(`<div class="guide-icon" data-v-1e7fb620><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-1e7fb620><path d="M9 18l6-6-6-6" data-v-1e7fb620></path></svg></div>`);
      }
      _push(`</div><div class="guide-text" data-v-1e7fb620><p data-v-1e7fb620>${ssrInterpolate(__props.description)}</p></div></div></a></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageGuide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PageGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e7fb620"]]);

export { PageGuide as P };
//# sourceMappingURL=PageGuide-CPqjQ-_e.mjs.map
