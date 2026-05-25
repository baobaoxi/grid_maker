import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  props: {
    company: { default: "Photo Grid App" },
    links: { default: () => [
      { label: "Privacy Policy", url: "/privacy" },
      { label: "Terms of Service", url: "/terms" },
      { label: "About Us", url: "/about" },
      { label: "Blog", url: "/blog" }
    ] }
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=AppFooter-Zj2vq6Gi.js.map
