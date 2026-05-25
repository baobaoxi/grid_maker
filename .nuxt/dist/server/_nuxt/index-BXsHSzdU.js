import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppHeader-B8Ve-32g.js";
import { _ as _sfc_main$2 } from "./AppFooter-Zj2vq6Gi.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const blogPosts = [
      {
        slug: "grid-maker-cross-stitch-pixel-art",
        title: "DIY Crafting Guide: How to Use a Grid Maker for Cross Stitch & Pixel Art",
        excerpt: "Turn any custom image into an easy-to-follow crafting pattern. Discover how our digital grid maker for cross stitch helps crafters map out pixels and threads perfectly.",
        date: "May 30, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "photo-grid-overlay-improve-composition",
        title: "How to Use a Photo Grid Overlay Tool to Improve Image Composition",
        excerpt: "Need to analyze photography composition or add aesthetic alignment lines to your designs? Learn how to use our free online photo grid overlay tool seamlessly.",
        date: "May 29, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "split-images-instagram-without-losing-quality",
        title: "How to Split Images for Instagram Without Losing Quality (No Crop)",
        excerpt: "Don't let Instagram compress or awkwardly crop your panorama photos. Use our free online image splitter for Instagram to slice photos perfectly into a crisp 3x3 grid.",
        date: "May 28, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "instagram-grid-maker-for-stunning-feeds",
        title: "Boost Your Engagement: How to Use an Instagram Grid Maker for Stunning Feeds",
        excerpt: "Want your profile to stand out? Discover creative Instagram grid layout ideas and learn how to use a 3x3 grid splitter to create cohesive viral banners effortlessly.",
        date: "May 27, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "grid-method-template-create-customize-online",
        title: "Looking for a Grid Method Template? Create and Customize Your Own Online",
        excerpt: "Stop downloading static grid method templates that don't fit your canvas ratio. Use our free drawing grid online tool to generate a custom printable drawing grid for any photo size.",
        date: "May 26, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "how-to-master-proportions-beginners-guide",
        title: "How to Master Proportions: A Beginner's Guide to Using a Grid Maker for Drawing",
        excerpt: "Struggle with drawing accurate proportions? Learn how to use a digital grid maker for drawing to master the traditional grid method in 5 minutes.",
        date: "May 25, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "how-to-use-grid-overlays-for-drawing",
        title: "How to Use Grid Overlays for Drawing",
        excerpt: "Learn how to use grid overlays to improve your drawing accuracy and proportions. Step-by-step guide for artists of all skill levels.",
        date: "May 20, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      },
      {
        slug: "10-composition-techniques-for-photographers",
        title: "10 Composition Techniques Every Photographer Should Know",
        excerpt: "Master the art of photo composition with these essential techniques. From rule of thirds to leading lines, elevate your photography skills.",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
      }
    ];
    const handleNavigate = (link) => {
      (void 0).location.href = link.url;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "page-container" }, _attrs))} data-v-36174f5b>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        title: "Blog",
        subtitle: "Tips, tutorials, and updates"
      }, null, _parent));
      _push(`<nav class="blog-nav" data-v-36174f5b><a href="/" class="nav-link" data-v-36174f5b>← Back to Home</a></nav><main class="page-content" data-v-36174f5b><div class="blog-list" data-v-36174f5b><!--[-->`);
      ssrRenderList(blogPosts, (post) => {
        _push(`<article class="blog-card" data-v-36174f5b><div class="blog-image" data-v-36174f5b><img${ssrRenderAttr("src", post.image)}${ssrRenderAttr("alt", post.title)} data-v-36174f5b></div><div class="blog-content" data-v-36174f5b><span class="blog-date" data-v-36174f5b>${ssrInterpolate(post.date)}</span><h3 data-v-36174f5b>${ssrInterpolate(post.title)}</h3><p data-v-36174f5b>${ssrInterpolate(post.excerpt)}</p><span class="read-more" data-v-36174f5b>Read More →</span></div></article>`);
      });
      _push(`<!--]--></div></main>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-36174f5b"]]);
export {
  index as default
};
//# sourceMappingURL=index-BXsHSzdU.js.map
