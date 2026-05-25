import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-B8Ve-32g.js";
import { _ as _sfc_main$2 } from "./AppFooter-Zj2vq6Gi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-1e6f1008>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Privacy Policy",
        subtitle: "Your privacy is our priority"
      }, null, _parent));
      _push(`<main class="page-content" data-v-1e6f1008><div class="content-section" data-v-1e6f1008><h2 data-v-1e6f1008>Privacy Policy</h2><p class="last-updated" data-v-1e6f1008>Last updated: May 25, 2026</p><section data-v-1e6f1008><h3 data-v-1e6f1008>Introduction</h3><p data-v-1e6f1008>At Photo Grid Overlay, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our online grid maker tool.</p></section><section data-v-1e6f1008><h3 data-v-1e6f1008>Information We Collect</h3><p data-v-1e6f1008>We want to be clear: <strong data-v-1e6f1008>we do not collect any personal information</strong> from our users. All operations are performed locally on your device.</p><ul data-v-1e6f1008><li data-v-1e6f1008>Images you upload are processed locally only</li><li data-v-1e6f1008>No data is sent to our servers</li><li data-v-1e6f1008>No cookies are used to track your activity</li><li data-v-1e6f1008>No user accounts or registration required</li></ul></section><section data-v-1e6f1008><h3 data-v-1e6f1008>How Your Data is Used</h3><p data-v-1e6f1008>When you use our grid maker tool:</p><ol data-v-1e6f1008><li data-v-1e6f1008>Your image is loaded into your browser</li><li data-v-1e6f1008>Grid lines are drawn on top of your image using HTML5 Canvas</li><li data-v-1e6f1008>You can customize grid settings (columns, rows, color, etc.)</li><li data-v-1e6f1008>When you download, the image with grid is generated locally</li><li data-v-1e6f1008>All processing happens in your browser - nothing is uploaded</li></ol></section><section data-v-1e6f1008><h3 data-v-1e6f1008>Third-Party Services</h3><p data-v-1e6f1008>We do not use any third-party analytics, tracking services, or advertising networks on our site.</p></section><section data-v-1e6f1008><h3 data-v-1e6f1008>Changes to This Policy</h3><p data-v-1e6f1008>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p></section><section data-v-1e6f1008><h3 data-v-1e6f1008>Contact Us</h3><p data-v-1e6f1008>If you have any questions about this privacy policy, please contact us at privacy@photogridoverlay.com.</p></section></div></main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        company: "Photo Grid App",
        onNavigate: handleNavigate
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e6f1008"]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-CrSEAFoJ.js.map
