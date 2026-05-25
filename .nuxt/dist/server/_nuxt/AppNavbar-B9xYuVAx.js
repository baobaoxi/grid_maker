import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPath = ref("/");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-da987291><div class="navbar-container" data-v-da987291><div class="navbar-brand" data-v-da987291><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-da987291><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-da987291></rect><line x1="9" y1="3" x2="9" y2="21" data-v-da987291></line><line x1="15" y1="3" x2="15" y2="21" data-v-da987291></line><line x1="3" y1="9" x2="21" y2="9" data-v-da987291></line><line x1="3" y1="15" x2="21" y2="15" data-v-da987291></line></svg><span data-v-da987291>GridMaker</span></div><div class="navbar-links" data-v-da987291><a href="/" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/" }])}" data-v-da987291>Home</a><a href="/advanced" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/advanced" }])}" data-v-da987291>Advanced</a><a href="/blog" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/blog" }])}" data-v-da987291>Blog</a></div><div class="navbar-actions" data-v-da987291><a href="/advanced" class="nav-button" data-v-da987291><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-da987291><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-da987291></path><path d="m15 5 4 4" data-v-da987291></path></svg> Start Editing </a></div></div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppNavbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da987291"]]);
export {
  AppNavbar as A
};
//# sourceMappingURL=AppNavbar-B9xYuVAx.js.map
