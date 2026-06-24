import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-Ci3kBR24.js";
import { _ as _sfc_main$2 } from "./AppFooter-kkN9JGJC.js";
import { g as useRoute, u as useHead } from "../server.mjs";
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
const _sfc_main = {
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    useHead({
      link: [
        { rel: "canonical", href: `https://grid-maker.pro/blog/${route.params.slug}` }
      ]
    });
    const loading = ref(true);
    const error = ref(false);
    const post = ref(null);
    async function fetchBlog() {
      loading.value = true;
      error.value = false;
      try {
        const res = await $fetch("/api/blogs");
        if (res.success && res.data) {
          const slug = route.params.slug;
          post.value = res.data.find((b) => b.slug === slug);
          if (!post.value) {
            error.value = true;
          }
        } else {
          error.value = true;
        }
      } catch (e) {
        error.value = true;
      } finally {
        loading.value = false;
      }
    }
    function handleNavigate(link) {
      (void 0).location.href = link.url;
    }
    watch(() => route.params.slug, () => {
      fetchBlog();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-093d06fa>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Blog",
        subtitle: ""
      }, null, _parent));
      _push(`<nav class="blog-nav" data-v-093d06fa><a href="/blog" class="nav-link" data-v-093d06fa>← Back to Blog</a></nav><main class="page-content" data-v-093d06fa>`);
      if (unref(loading)) {
        _push(`<div class="loading-state" data-v-093d06fa><div class="spinner" data-v-093d06fa></div><p data-v-093d06fa>Loading...</p></div>`);
      } else if (unref(error) || !unref(post)) {
        _push(`<div class="error-state" data-v-093d06fa><h2 data-v-093d06fa>Article Not Found</h2><p data-v-093d06fa>The article you&#39;re looking for doesn&#39;t exist or has been removed.</p><a href="/blog" class="back-link" data-v-093d06fa>← Back to Blog</a></div>`);
      } else {
        _push(`<article class="blog-article" data-v-093d06fa><header class="article-header" data-v-093d06fa><span class="article-date" data-v-093d06fa>${ssrInterpolate(unref(post).date)}</span><h2 data-v-093d06fa>${ssrInterpolate(unref(post).title)}</h2><div class="article-image" data-v-093d06fa><img${ssrRenderAttr("src", unref(post).image)}${ssrRenderAttr("alt", unref(post).title)} data-v-093d06fa></div></header><div class="article-content" data-v-093d06fa>${unref(post).content ?? ""}</div></article>`);
      }
      _push(`</main>`);
      _push(ssrRenderComponent(_sfc_main$2, {
        company: "Photo Grid App",
        onNavigate: handleNavigate
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _slug_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-093d06fa"]]);
export {
  _slug_ as default
};
//# sourceMappingURL=_slug_-CII19okm.js.map
