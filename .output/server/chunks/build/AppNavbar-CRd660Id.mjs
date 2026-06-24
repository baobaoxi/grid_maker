import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppNavbar",
  __ssrInlineRender: true,
  setup(__props) {
    const currentPath = ref("/");
    const mobileMenuOpen = ref(false);
    const isMobile = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-714ef2a1><div class="navbar-container" data-v-714ef2a1><div class="navbar-brand" data-v-714ef2a1><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-714ef2a1><rect x="3" y="3" width="18" height="18" rx="2" ry="2" data-v-714ef2a1></rect><line x1="9" y1="3" x2="9" y2="21" data-v-714ef2a1></line><line x1="15" y1="3" x2="15" y2="21" data-v-714ef2a1></line><line x1="3" y1="9" x2="21" y2="9" data-v-714ef2a1></line><line x1="3" y1="15" x2="21" y2="15" data-v-714ef2a1></line></svg><span data-v-714ef2a1>GridMaker</span></div><div class="navbar-links" data-v-714ef2a1><a href="/" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/" }])}" data-v-714ef2a1>Home</a><a href="/advanced" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/advanced" }])}" data-v-714ef2a1>Advanced</a><a href="/pixel-art" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/pixel-art" }])}" data-v-714ef2a1>Pixel Art</a><a href="/blog" class="${ssrRenderClass(["nav-link", { active: currentPath.value === "/blog" }])}" data-v-714ef2a1>Blog</a></div><div class="navbar-actions" data-v-714ef2a1><a href="/edit-grid" class="nav-button desktop-only" data-v-714ef2a1><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-714ef2a1><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" data-v-714ef2a1></path><path d="m15 5 4 4" data-v-714ef2a1></path></svg> Start Editing </a><button class="${ssrRenderClass([{ active: mobileMenuOpen.value }, "mobile-menu-btn mobile-only"])}" data-v-714ef2a1><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-714ef2a1><polyline points="6 9 12 15 18 9" data-v-714ef2a1></polyline></svg> open menu </button></div>`);
      if (isMobile.value) {
        _push(`<div class="mobile-dropdown" style="${ssrRenderStyle(mobileMenuOpen.value ? null : { display: "none" })}" data-v-714ef2a1><a href="/" class="${ssrRenderClass([{ active: currentPath.value === "/" }, "dropdown-link"])}" data-v-714ef2a1>Home</a><a href="/advanced" class="${ssrRenderClass([{ active: currentPath.value === "/advanced" }, "dropdown-link"])}" data-v-714ef2a1>Advanced</a><a href="/pixel-art" class="${ssrRenderClass([{ active: currentPath.value === "/pixel-art" }, "dropdown-link"])}" data-v-714ef2a1>Pixel Art</a><a href="/blog" class="${ssrRenderClass([{ active: currentPath.value === "/blog" }, "dropdown-link"])}" data-v-714ef2a1>Blog</a><a href="/edit-grid" class="dropdown-link start-editing" data-v-714ef2a1>Start Editing</a></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppNavbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AppNavbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-714ef2a1"]]);

export { AppNavbar as default };
//# sourceMappingURL=AppNavbar-CRd660Id.mjs.map
