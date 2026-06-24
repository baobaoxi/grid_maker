import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-Ci3kBR24.js";
import { _ as _sfc_main$2 } from "./AppFooter-kkN9JGJC.js";
import { u as useHead } from "../server.mjs";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/hookable/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/unctx/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/defu/dist/defu.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/ufo/dist/index.mjs";
import "/Users/manlongfeng/Documents/trae_projects/grid_maker/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/privacy" }
      ]
    });
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-ed93f244><nav class="page-nav" data-v-ed93f244><a href="/" class="back-home" data-v-ed93f244>← Back to Home</a></nav>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Privacy Policy",
        subtitle: "Your privacy is our priority"
      }, null, _parent));
      _push(`<main class="page-content" data-v-ed93f244><div class="content-section" data-v-ed93f244><h2 data-v-ed93f244>Privacy Policy</h2><p class="last-updated" data-v-ed93f244>Last updated: May 25, 2026</p><section data-v-ed93f244><h3 data-v-ed93f244>Introduction</h3><p data-v-ed93f244>At grid maker pro, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our online grid maker tool.</p></section><section data-v-ed93f244><h3 data-v-ed93f244>Information We Collect</h3><p data-v-ed93f244>We want to be clear: <strong data-v-ed93f244>we do not collect any personal information</strong> from our users. All operations are performed locally on your device.</p><ul data-v-ed93f244><li data-v-ed93f244>Images you upload are processed locally only</li><li data-v-ed93f244>No data is sent to our servers</li><li data-v-ed93f244>No cookies are used to track your activity</li><li data-v-ed93f244>No user accounts or registration required</li></ul></section><section data-v-ed93f244><h3 data-v-ed93f244>How Your Data is Used</h3><p data-v-ed93f244>When you use our grid maker tool:</p><ol data-v-ed93f244><li data-v-ed93f244>Your image is loaded into your browser</li><li data-v-ed93f244>Grid lines are drawn on top of your image using HTML5 Canvas</li><li data-v-ed93f244>You can customize grid settings (columns, rows, color, etc.)</li><li data-v-ed93f244>When you download, the image with grid is generated locally</li><li data-v-ed93f244>All processing happens in your browser - nothing is uploaded</li></ol></section><section data-v-ed93f244><h3 data-v-ed93f244>Third-Party Services</h3><p data-v-ed93f244>We do not use any third-party analytics, tracking services, or advertising networks on our site.</p></section><section data-v-ed93f244><h3 data-v-ed93f244>Changes to This Policy</h3><p data-v-ed93f244>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p></section><section data-v-ed93f244><h3 data-v-ed93f244>Contact Us</h3><p data-v-ed93f244>If you have any questions about this privacy policy, please contact us at <a href="mailto:support@grid-maker.pro" data-v-ed93f244>support@grid-maker.pro</a>.</p></section></div></main>`);
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
const privacy = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ed93f244"]]);
export {
  privacy as default
};
//# sourceMappingURL=privacy-pe-HpCgR.js.map
