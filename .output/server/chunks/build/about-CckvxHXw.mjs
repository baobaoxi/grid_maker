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
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      link: [
        { rel: "canonical", href: "https://grid-maker.pro/about" }
      ]
    });
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-aa4b032b><nav class="page-nav" data-v-aa4b032b><a href="/" class="back-home" data-v-aa4b032b>\u2190 Back to Home</a></nav>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "About Us",
        subtitle: "Learn more about Photo Grid Overlay"
      }, null, _parent));
      _push(`<main class="page-content" data-v-aa4b032b><div class="content-section" data-v-aa4b032b><h2 data-v-aa4b032b>About grid maker pro</h2><section data-v-aa4b032b><h3 data-v-aa4b032b>Our Mission</h3><p data-v-aa4b032b>grid maker pro is a free online tool designed to help artists, designers, and photography enthusiasts add customizable grid lines to their images. Whether you&#39;re sketching from a reference photo, creating Instagram grid layouts, or planning compositions, our tool provides the precision you need.</p></section><section data-v-aa4b032b><h3 data-v-aa4b032b>Why Choose Us?</h3><div class="features-list" data-v-aa4b032b><div class="feature-item" data-v-aa4b032b><div class="feature-icon" data-v-aa4b032b>\u{1F512}</div><div class="feature-content" data-v-aa4b032b><h4 data-v-aa4b032b>Privacy First</h4><p data-v-aa4b032b>All processing happens locally in your browser. Your images never leave your device.</p></div></div><div class="feature-item" data-v-aa4b032b><div class="feature-icon" data-v-aa4b032b>\u{1F3A8}</div><div class="feature-content" data-v-aa4b032b><h4 data-v-aa4b032b>Customizable</h4><p data-v-aa4b032b>Adjust columns, rows, colors, line width, and opacity to suit your needs.</p></div></div><div class="feature-item" data-v-aa4b032b><div class="feature-icon" data-v-aa4b032b>\u26A1</div><div class="feature-content" data-v-aa4b032b><h4 data-v-aa4b032b>Fast &amp; Free</h4><p data-v-aa4b032b>No registration required. Start using immediately, completely free.</p></div></div><div class="feature-item" data-v-aa4b032b><div class="feature-icon" data-v-aa4b032b>\u{1F4F1}</div><div class="feature-content" data-v-aa4b032b><h4 data-v-aa4b032b>Mobile Friendly</h4><p data-v-aa4b032b>Works seamlessly on desktop, tablet, and mobile devices.</p></div></div></div></section><section data-v-aa4b032b><h3 data-v-aa4b032b>Our Story</h3><p data-v-aa4b032b>grid maker pro was created out of a need for a simple, privacy-focused tool for artists. As artists ourselves, we struggled to find a grid tool that didn&#39;t require uploading images to servers or paying for subscriptions. So we built one.</p><p data-v-aa4b032b>What started as a personal project has grown into a tool used by thousands of creatives worldwide. We&#39;re committed to keeping it free, private, and continuously improving based on user feedback.</p></section><section data-v-aa4b032b><h3 data-v-aa4b032b>Contact Us</h3><p data-v-aa4b032b>We&#39;d love to hear from you! Whether you have feedback, suggestions, or just want to say hello, you can reach us at <a href="mailto:support@grid-maker.pro" data-v-aa4b032b>support@grid-maker.pro</a>.</p></section></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-aa4b032b"]]);

export { about as default };
//# sourceMappingURL=about-CckvxHXw.mjs.map
