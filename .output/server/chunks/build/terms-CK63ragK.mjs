import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _sfc_main$1 } from './AppHeader-Ci3kBR24.mjs';
import { _ as _sfc_main$2 } from './AppFooter-kkN9JGJC.mjs';
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
  __name: "terms",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/terms" }
      ]
    });
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-234263d2><nav class="page-nav" data-v-234263d2><a href="/" class="back-home" data-v-234263d2>\u2190 Back to Home</a></nav>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Terms of Service",
        subtitle: "Terms and conditions for using our service"
      }, null, _parent));
      _push(`<main class="page-content" data-v-234263d2><div class="content-section" data-v-234263d2><h2 data-v-234263d2>Terms of Service</h2><p class="last-updated" data-v-234263d2>Last updated: May 25, 2026</p><section data-v-234263d2><h3 data-v-234263d2>Introduction</h3><p data-v-234263d2>These Terms of Service (&quot;Terms&quot;) govern your use of the grid maker pro website and service (&quot;Service&quot;). By using our Service, you agree to be bound by these Terms.</p></section><section data-v-234263d2><h3 data-v-234263d2>Use of Service</h3><p data-v-234263d2>You may use our Service for personal and non-commercial purposes. You agree not to:</p><ul data-v-234263d2><li data-v-234263d2>Use the Service for any illegal or unauthorized purpose</li><li data-v-234263d2>Violate any applicable laws or regulations</li><li data-v-234263d2>Infringe upon the intellectual property rights of others</li><li data-v-234263d2>Upload or process images that you do not have the right to use</li><li data-v-234263d2>Attempt to interfere with or disrupt the Service</li><li data-v-234263d2>Use the Service in a way that could damage, disable, or impair our systems</li></ul></section><section data-v-234263d2><h3 data-v-234263d2>Intellectual Property</h3><p data-v-234263d2>The Service and its original content, features, and functionality are owned by grid maker pro and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p><p data-v-234263d2>You retain all rights to the images you upload and process using our Service. We do not claim ownership of your content.</p></section><section data-v-234263d2><h3 data-v-234263d2>Disclaimer of Warranties</h3><p data-v-234263d2>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, express or implied. We make no warranties regarding the accuracy, reliability, or availability of the Service.</p></section><section data-v-234263d2><h3 data-v-234263d2>Limitation of Liability</h3><p data-v-234263d2>grid maker pro shall not be liable for any damages arising from your use of the Service, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p></section><section data-v-234263d2><h3 data-v-234263d2>Indemnification</h3><p data-v-234263d2>You agree to indemnify and hold harmless grid maker pro from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p></section><section data-v-234263d2><h3 data-v-234263d2>Changes to Terms</h3><p data-v-234263d2>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with an updated revision date. Your continued use of the Service constitutes acceptance of the updated Terms.</p></section><section data-v-234263d2><h3 data-v-234263d2>Contact Us</h3><p data-v-234263d2>If you have any questions about these Terms, please contact us at <a href="mailto:support@grid-maker.pro" data-v-234263d2>support@grid-maker.pro</a>.</p></section></div></main>`);
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
const terms = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-234263d2"]]);

export { terms as default };
//# sourceMappingURL=terms-CK63ragK.mjs.map
