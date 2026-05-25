import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-B8Ve-32g.js";
import { _ as _sfc_main$2 } from "./AppFooter-Zj2vq6Gi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-05281ba3>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Terms of Service",
        subtitle: "Terms and conditions for using our service"
      }, null, _parent));
      _push(`<main class="page-content" data-v-05281ba3><div class="content-section" data-v-05281ba3><h2 data-v-05281ba3>Terms of Service</h2><p class="last-updated" data-v-05281ba3>Last updated: May 25, 2026</p><section data-v-05281ba3><h3 data-v-05281ba3>Introduction</h3><p data-v-05281ba3>These Terms of Service (&quot;Terms&quot;) govern your use of the Photo Grid Overlay website and service (&quot;Service&quot;). By using our Service, you agree to be bound by these Terms.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Use of Service</h3><p data-v-05281ba3>You may use our Service for personal and non-commercial purposes. You agree not to:</p><ul data-v-05281ba3><li data-v-05281ba3>Use the Service for any illegal or unauthorized purpose</li><li data-v-05281ba3>Violate any applicable laws or regulations</li><li data-v-05281ba3>Infringe upon the intellectual property rights of others</li><li data-v-05281ba3>Upload or process images that you do not have the right to use</li><li data-v-05281ba3>Attempt to interfere with or disrupt the Service</li><li data-v-05281ba3>Use the Service in a way that could damage, disable, or impair our systems</li></ul></section><section data-v-05281ba3><h3 data-v-05281ba3>Intellectual Property</h3><p data-v-05281ba3>The Service and its original content, features, and functionality are owned by Photo Grid Overlay and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p><p data-v-05281ba3>You retain all rights to the images you upload and process using our Service. We do not claim ownership of your content.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Disclaimer of Warranties</h3><p data-v-05281ba3>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We make no warranties regarding the accuracy, reliability, or availability of the Service.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Limitation of Liability</h3><p data-v-05281ba3>Photo Grid Overlay shall not be liable for any damages arising from your use of the Service, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Indemnification</h3><p data-v-05281ba3>You agree to indemnify and hold harmless Photo Grid Overlay from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Changes to Terms</h3><p data-v-05281ba3>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with an updated revision date. Your continued use of the Service constitutes acceptance of the updated Terms.</p></section><section data-v-05281ba3><h3 data-v-05281ba3>Contact Us</h3><p data-v-05281ba3>If you have any questions about these Terms, please contact us at terms@photogridoverlay.com.</p></section></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/terms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05281ba3"]]);
export {
  terms as default
};
//# sourceMappingURL=terms-DYi2_wao.js.map
