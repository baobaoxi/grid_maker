import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-B8Ve-32g.js";
import { _ as _sfc_main$2 } from "./AppFooter-Zj2vq6Gi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-dab9bb72>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "About Us",
        subtitle: "Learn more about Photo Grid Overlay"
      }, null, _parent));
      _push(`<main class="page-content" data-v-dab9bb72><div class="content-section" data-v-dab9bb72><h2 data-v-dab9bb72>About Photo Grid Overlay</h2><section data-v-dab9bb72><h3 data-v-dab9bb72>Our Mission</h3><p data-v-dab9bb72>Photo Grid Overlay is a free online tool designed to help artists, designers, and photography enthusiasts add customizable grid lines to their images. Whether you&#39;re sketching from a reference photo, creating Instagram grid layouts, or planning compositions, our tool provides the precision you need.</p></section><section data-v-dab9bb72><h3 data-v-dab9bb72>Why Choose Us?</h3><div class="features-list" data-v-dab9bb72><div class="feature-item" data-v-dab9bb72><div class="feature-icon" data-v-dab9bb72>🔒</div><div class="feature-content" data-v-dab9bb72><h4 data-v-dab9bb72>Privacy First</h4><p data-v-dab9bb72>All processing happens locally in your browser. Your images never leave your device.</p></div></div><div class="feature-item" data-v-dab9bb72><div class="feature-icon" data-v-dab9bb72>🎨</div><div class="feature-content" data-v-dab9bb72><h4 data-v-dab9bb72>Customizable</h4><p data-v-dab9bb72>Adjust columns, rows, colors, line width, and opacity to suit your needs.</p></div></div><div class="feature-item" data-v-dab9bb72><div class="feature-icon" data-v-dab9bb72>⚡</div><div class="feature-content" data-v-dab9bb72><h4 data-v-dab9bb72>Fast &amp; Free</h4><p data-v-dab9bb72>No registration required. Start using immediately, completely free.</p></div></div><div class="feature-item" data-v-dab9bb72><div class="feature-icon" data-v-dab9bb72>📱</div><div class="feature-content" data-v-dab9bb72><h4 data-v-dab9bb72>Mobile Friendly</h4><p data-v-dab9bb72>Works seamlessly on desktop, tablet, and mobile devices.</p></div></div></div></section><section data-v-dab9bb72><h3 data-v-dab9bb72>Our Story</h3><p data-v-dab9bb72>Photo Grid Overlay was created out of a need for a simple, privacy-focused tool for artists. As artists ourselves, we struggled to find a grid tool that didn&#39;t require uploading images to servers or paying for subscriptions. So we built one.</p><p data-v-dab9bb72>What started as a personal project has grown into a tool used by thousands of creatives worldwide. We&#39;re committed to keeping it free, private, and continuously improving based on user feedback.</p></section><section data-v-dab9bb72><h3 data-v-dab9bb72>Contact Us</h3><p data-v-dab9bb72>We&#39;d love to hear from you! Whether you have feedback, suggestions, or just want to say hello, you can reach us at hello@photogridoverlay.com.</p></section></div></main>`);
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
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dab9bb72"]]);
export {
  about as default
};
//# sourceMappingURL=about-Bb_fyL9W.js.map
