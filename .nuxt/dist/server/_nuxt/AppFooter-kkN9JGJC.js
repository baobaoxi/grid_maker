import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ExternalLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const textLinks = ref([
      {
        label: "BestAITool AI Tools Directory",
        url: "https://bestaitool.app/",
        title: "BestAITool AI Tools Directory"
      },
      {
        label: "Z-Image",
        url: "https://z-image.net/",
        title: "Z-Image"
      },
      {
        label: "Lemon Directory .com",
        url: "http://www.lemon-directory.com/",
        title: "Lemon Directory"
      },
      {
        label: "MossAI Tools",
        url: "https://mossai.org",
        title: "MossAI Tools"
      },
      {
        label: "See What New AI",
        url: "https://www.seewhatnewai.com",
        title: "See What New AI"
      }
    ]);
    const imageLinks = ref([
      {
        url: "https://dang.ai",
        target: "_blank",
        rel: "dofollow noopener",
        imageSrc: "https://assets.dang.ai/badges/dang-verified-dark.png",
        alt: "Verified on DANG!",
        width: 260,
        height: 94
      },
      {
        url: "https://aidirs.org/item/grid-maker-pro",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://aidirs.org/badges/badge-listed-dark.svg",
        alt: "Listed on AIDirs"
      },
      {
        url: "https://shinylaunch.com",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://shinylaunch.com/static/images/badge-dark.png",
        alt: "ShinyLaunch",
        height: 54
      },
      {
        url: "https://showmebest.ai",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://showmebest.ai/badge/feature-badge-white.webp",
        alt: "Featured on ShowMeBestAI",
        width: 220,
        height: 60
      },
      {
        url: "https://findly.tools/grid-maker-pro?utm_source=grid-maker-pro",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://findly.tools/badges/findly-tools-badge-light.svg",
        alt: "Featured on Findly.tools",
        width: 150
      },
      {
        url: "https://theonestartup.com",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://theonestartup.com/badages-awards.svg",
        alt: "Featured on The One Startup",
        height: 54
      },
      {
        url: "https://submito.net",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://submito.net/badge/listed-light.svg",
        alt: "Listed on Submito",
        title: "Listed on Submito"
      },
      {
        url: "",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://acidtools.com/assets/images/badge.png",
        alt: "Acid Tools",
        height: 54
      },
      {
        url: "https://launchigniter.com/product/grid-maker-pro?ref=badge-grid-maker-pro",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://launchigniter.com/api/badge/grid-maker-pro?theme=light",
        alt: "Featured on LaunchIgniter",
        width: 212,
        height: 55
      },
      {
        url: "https://aifinder.site",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://aifinder.site/light-badge.png",
        alt: "Discover more AI tools at aifinder.site",
        width: 200
      },
      {
        url: "https://navfolders.com",
        target: "_blank",
        rel: "noopener noreferrer",
        imageSrc: "https://navfolders.com/badge/nav_dark.svg",
        alt: "NavFolders",
        width: 200,
        height: 54
      },
      {
        url: "https://aidirs.best/item/grid-maker",
        target: "_blank",
        rel: "noopener",
        imageSrc: "https://aidirs.best/light.svg",
        alt: "Grid Maker - Photo Grid Design Tool | Aidirs",
        width: 200,
        height: 56
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "external-links" }, _attrs))} data-v-46758977><div class="external-links-title" data-v-46758977>Featured Resources</div><div class="links-container" data-v-46758977><div class="external-links-list" data-v-46758977><!--[-->`);
      ssrRenderList(textLinks.value, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)}${ssrRenderAttr("title", link.title)} target="_blank" rel="noopener noreferrer" class="external-link" data-v-46758977>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div><div class="external-image-links" data-v-46758977><!--[-->`);
      ssrRenderList(imageLinks.value, (link) => {
        _push(`<a${ssrRenderAttr("href", link.url)}${ssrRenderAttr("target", link.target)}${ssrRenderAttr("rel", link.rel)} class="external-image-link" data-v-46758977><img${ssrRenderAttr("src", link.imageSrc)}${ssrRenderAttr("alt", link.alt)}${ssrRenderAttr("width", link.width)}${ssrRenderAttr("height", link.height)} class="external-image" data-v-46758977></a>`);
      });
      _push(`<!--]--><a href="https://agentwise.org/agent/grid-maker" target="_blank" rel="noopener" class="external-image-link" data-v-46758977><svg width="200" height="48" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-46758977><rect width="200" height="48" rx="6" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1" data-v-46758977></rect><circle cx="28" cy="24" r="14" fill="#2563eb" data-v-46758977></circle><text x="28" y="29" font-family="Arial, sans-serif" font-size="14" font-weight="700" text-anchor="middle" fill="white" data-v-46758977>A</text><text x="54" y="22" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#6B7280" data-v-46758977>Featured on</text><text x="54" y="37" font-family="system-ui, sans-serif" font-size="14" font-weight="700" fill="#2563eb" data-v-46758977>AgentWise</text></svg></a></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ExternalLinks.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ExternalLinks = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-46758977"]]);
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
      _push(`<!--]--></div><div class="footer-copyright"><p>© ${ssrInterpolate(year.value)} ${ssrInterpolate(__props.company)}. All rights reserved.</p></div>`);
      _push(ssrRenderComponent(ExternalLinks, null, null, _parent));
      _push(`</div></footer>`);
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
//# sourceMappingURL=AppFooter-kkN9JGJC.js.map
