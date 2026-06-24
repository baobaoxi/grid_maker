import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FeatureSection",
  __ssrInlineRender: true,
  props: {
    feature: {
      type: Object,
      required: true
    },
    reverse: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "feature-section",
        id: __props.feature.id
      }, _attrs))} data-v-313b7d51><div class="${ssrRenderClass([{ reverse: __props.reverse }, "feature-content"])}" data-v-313b7d51><div class="feature-text" data-v-313b7d51><h3 data-v-313b7d51>${ssrInterpolate(__props.feature.title)}</h3><p class="feature-description" data-v-313b7d51>${ssrInterpolate(__props.feature.description)}</p><ul class="feature-list" data-v-313b7d51><!--[-->`);
      ssrRenderList(__props.feature.items, (item, index) => {
        _push(`<li data-v-313b7d51><span class="list-icon" data-v-313b7d51>${ssrInterpolate(index + 1)}</span><span data-v-313b7d51>${ssrInterpolate(item.label)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="feature-image-wrapper" data-v-313b7d51>`);
      if (__props.feature.imageUrl) {
        _push(`<div class="feature-image" data-v-313b7d51><img${ssrRenderAttr("src", __props.feature.imageUrl)}${ssrRenderAttr("alt", __props.feature.imageAlt)} data-v-313b7d51></div>`);
      } else {
        _push(`<div class="feature-image-placeholder" data-v-313b7d51><svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-313b7d51><rect x="3" y="3" width="18" height="18" rx="2" data-v-313b7d51></rect><circle cx="8.5" cy="8.5" r="1.5" data-v-313b7d51></circle><path d="M21 15l-5-5L5 21" data-v-313b7d51></path></svg><span data-v-313b7d51>Image Placeholder</span></div>`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FeatureSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-313b7d51"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HowToGuide",
  __ssrInlineRender: true,
  props: {
    guide: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "how-to-guide",
        id: __props.guide.id
      }, _attrs))} data-v-d390cfb2><h2 data-v-d390cfb2>${ssrInterpolate(__props.guide.title)}</h2><div class="steps-container" data-v-d390cfb2><!--[-->`);
      ssrRenderList(__props.guide.steps, (step, index) => {
        _push(`<div class="step-item" data-v-d390cfb2><div class="step-number" data-v-d390cfb2><span data-v-d390cfb2>${ssrInterpolate(index + 1)}</span></div><div class="step-content" data-v-d390cfb2><h3 data-v-d390cfb2>${ssrInterpolate(step.title)}</h3><p data-v-d390cfb2>${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowToGuide.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HowToGuide = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d390cfb2"]]);
const pixelArtGuide = {
  title: "How to generate pixel art images",
  steps: [
    {
      title: "Upload Your Image",
      description: "Upload any photo, avatar, or picture to our Pixel Art Generator and instantly turn an image into pixel art."
    },
    {
      title: "Customize Pixel Style",
      description: "Choose pixel size, color palette, and retro styles like 8-bit or 16-bit pixel art."
    },
    {
      title: "Generate & Download",
      description: "Click generate to create stunning pixel art online and download your image in seconds — free and no signup required."
    }
  ]
};
const pixelArtFaq = [
  {
    question: "What is a Pixel Art Generator?",
    answer: "A pixel art generator is an online tool that converts images or text prompts into retro-style pixel art. You can create 8-bit, 16-bit, sprite-based, or game-style pixel graphics instantly without design skills."
  },
  {
    question: "How do I turn an image into pixel art?",
    answer: "Simply upload a photo, avatar, or picture, choose the pixel size, color palette, and style, then instantly convert your image into pixel art online."
  },
  {
    question: "Is this Pixel Art Generator free?",
    answer: "Yes. Our free pixel art generator lets you create pixel art online with no signup, no watermark, and instant download."
  },
  {
    question: "Can I generate pixel art from text prompts?",
    answer: "Yes. Our AI pixel art generator can turn text prompts into unique pixel characters, retro scenes, game sprites, and pixel avatars."
  },
  {
    question: "What image formats are supported?",
    answer: "You can upload PNG, JPG, JPEG, and WebP files and instantly transform them into pixel art."
  },
  {
    question: "Can I create pixel art for games?",
    answer: "Absolutely. Many indie game developers use our tool to generate pixel sprites, tilesets, character assets, and retro game graphics."
  },
  {
    question: "Can I customize pixel size and color palette?",
    answer: "Yes. You can adjust pixel resolution, block size, color count, and retro palettes to create authentic 8-bit or 16-bit pixel art."
  },
  {
    question: "Does the tool work on mobile?",
    answer: "Yes. Our browser-based pixel art maker works on desktop, tablet, and mobile devices without downloading software."
  },
  {
    question: "Is my image private?",
    answer: "Yes. Your images are processed locally in your browser whenever possible and are never permanently stored."
  },
  {
    question: "Can I use generated pixel art commercially?",
    answer: "Yes, you can use generated pixel art for games, social media, NFTs, websites, and commercial projects, depending on your licensing terms."
  }
];
const pixelArtFeatures = [
  {
    id: "image-converter",
    title: "Image to Pixel Art Converter",
    description: "Turn any image, selfie, or photo into stunning pixel art in seconds.",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p.PNG",
    imageAlt: "Image to Pixel Art Converter",
    items: [
      { label: "Upload PNG/JPG/WebP" },
      { label: "Adjustable pixel size" },
      { label: "One-click download" }
    ]
  },
  {
    id: "retro-presets",
    title: "Retro Style Presets",
    description: "Choose between classic styles:",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p2.PNG",
    imageAlt: "Retro Style Presets",
    items: [
      { label: "8-bit" },
      { label: "16-bit" },
      { label: "Game Boy" },
      { label: "Retro arcade" },
      { label: "Anime pixel style" }
    ]
  },
  {
    id: "custom-settings",
    title: "Custom Pixel Resolution & Palette",
    description: "Fine-tune every detail.",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p3.PNG",
    imageAlt: "Custom Pixel Resolution & Palette",
    items: [
      { label: "Pixel density" },
      { label: "Color count" },
      { label: "Retro palettes" },
      { label: "Dithering effects" }
    ]
  }
];
const perlerBeadFeatures = [
  {
    id: "bead-converter",
    title: "Image to Bead Pattern",
    description: "Convert any image into printable Perler bead patterns.",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p2.PNG",
    imageAlt: "Image to Bead Pattern",
    items: [
      { label: "Upload any image" },
      { label: "Adjust bead size" },
      { label: "Instant download" }
    ]
  },
  {
    id: "bead-colors",
    title: "Perler Bead Colors",
    description: "Choose from popular Perler bead color palettes:",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p3.PNG",
    imageAlt: "Perler Bead Colors",
    items: [
      { label: "Classic Perler" },
      { label: "Pastel colors" },
      { label: "Neon bright" },
      { label: "Earth tones" },
      { label: "Rainbow mix" }
    ]
  },
  {
    id: "bead-settings",
    title: "Custom Bead Settings",
    description: "Fine-tune your bead pattern.",
    imageUrl: "https://6a1925960bc623d413aeb142.imgix.net/p.PNG",
    imageAlt: "Custom Bead Settings",
    items: [
      { label: "Bead size" },
      { label: "Color count" },
      { label: "Grid lines" },
      { label: "Bead outlines" }
    ]
  }
];
const perlerBeadGuide = {
  title: "How to create Perler bead patterns",
  steps: [
    {
      title: "Upload Your Image",
      description: "Upload any photo, drawing, or picture to convert into a bead pattern."
    },
    {
      title: "Customize Bead Size",
      description: "Adjust the bead size and pattern dimensions to match your Perler bead project."
    },
    {
      title: "Download & Create",
      description: "Download your pattern guide and start creating with your Perler beads!"
    }
  ]
};
const perlerBeadFaq = [
  {
    question: "What is a Perler Bead Pattern Generator?",
    answer: "A Perler bead pattern generator converts images into pixel-perfect patterns for Perler bead crafting. It helps you create custom designs for your bead art projects."
  },
  {
    question: "How do I make a Perler bead pattern from a photo?",
    answer: "Simply upload your photo, adjust the bead size and colors, and download your printable pattern guide."
  },
  {
    question: "Is this Perler bead tool free?",
    answer: "Yes. Our Perler bead pattern generator is completely free to use with no signup required."
  },
  {
    question: "What image formats are supported?",
    answer: "You can upload PNG, JPG, JPEG, and WebP files to create your bead patterns."
  },
  {
    question: "Can I customize the bead size?",
    answer: "Yes. You can adjust the bead size from 5px to 50px to match different Perler bead sizes."
  },
  {
    question: "How many colors can I use?",
    answer: "You can choose between 2-24 colors for your bead pattern. Fewer colors are recommended for beginners."
  },
  {
    question: "Can I print the pattern?",
    answer: "Yes. Download your pattern as a PNG image and print it out for your bead project."
  },
  {
    question: "Does this work for other bead types?",
    answer: "Yes. This tool works for Perler beads, Hama beads, Artkal beads, and other fuse bead types."
  }
];
export {
  FeatureSection as F,
  HowToGuide as H,
  perlerBeadFeatures as a,
  perlerBeadGuide as b,
  pixelArtFaq as c,
  pixelArtFeatures as d,
  pixelArtGuide as e,
  perlerBeadFaq as p
};
//# sourceMappingURL=pixelArtFeatures-De7lwLTn.js.map
