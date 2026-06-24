import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FeaturesSection",
  __ssrInlineRender: true,
  props: {
    title: { default: "Why Choose Us" },
    subtitle: { default: "Simple, Fast, Professional Photo Grid Tool" },
    stepsTitle: { default: "How to Use" },
    features: { default: () => [
      { iconPath: "M12 20h9", title: "Custom Grid", description: "Our grid maker offers customizable grid columns and rows for precise control over your grid overlay" },
      { iconPath: "M20 7h-9", title: "Rich Styles", description: "The grid maker provides multiple color options with adjustable line width and opacity for your perfect grid" },
      { iconPath: "M12 17c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7zm0-12c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z", title: "Privacy Protection", description: "This grid maker tool performs all operations locally. No data is uploaded to servers - your images stay private" },
      { iconPath: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", title: "Quick Export", description: "One-click download of high-quality images with grid overlay from our grid maker tool" }
    ] },
    steps: { default: () => [
      { title: "Upload your reference image", description: "to the grid maker by dragging it or clicking to browse" },
      { title: "Adjust the grid size", description: "in the grid maker - 6 columns works well for most drawings" },
      { title: "Enable grid labels", description: "in your grid maker to easily track your position while drawing" },
      { title: "Use the gridded reference", description: "from the grid maker to draw each section accurately onto your paper" }
    ] },
    whyItems: { default: () => [
      { iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", title: 'Say Goodbye to "Ugly Sketches."', description: "Drawing portraits or complex shapes is hard because proportions collapse easily. Our grid maker uses the grid method to break big images into tiny, manageable squares. Your eyes won't get tricked, and your drawing will look 1:1 perfectly accurate on your first try with our grid maker!", imageUrl: "https://6a1650b35d38b1b9b092a71f.imgix.net/171f5c20-6274-4b24-97f7-d5ba9fbb2c3a.jpeg" },
      { iconPath: "M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z", title: "No Art Skills? Just Copy and Paste.", description: "Looking at a whole blank canvas can be terrifying. With our grid maker, you don't need to worry about the big picture. Just look at one single square\u2014like top-left box #3\u2014and copy the simple lines inside it. Our grid maker turns drawing into a fun connect-the-dots game!", imageUrl: "https://6a1650b35d38b1b9b092a71f.imgix.net/2adfde43-9af7-4c74-a5bf-123144e08cb4.jpeg" },
      { iconPath: "M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21", title: "Blow It Up to Any Size.", description: "Want to transfer a small photo from your phone onto a giant canvas or sketchpad? It's impossible by hand\u2014but effortless with our grid maker. As long as the grid count matches, our grid maker lets you easily scale up your artwork 10x or 20x bigger without losing any detail.", imageUrl: "https://6a1650b35d38b1b9b092a71f.imgix.net/aaa939b7-4f33-4244-8cfa-e21eec703a3c.jpeg" },
      { iconPath: "M12 12s8-5.86 8-8H4s8 5.86 8 8Z", title: "Learn to Draw Without Knowing It.", description: "This isn't a cheap tracing tool\u2014you are still the one holding the pencil! Our grid maker helps you learn by copying square by square. Your brain naturally learns how lines, angles, and spacing work. Before you know it, our grid maker is training your hands and building real drawing confidence.", imageUrl: "https://6a1650b35d38b1b9b092a71f.imgix.net/3a7b002b-c88b-432e-9cea-7ff9df14baca.jpeg" }
    ] },
    faqItems: { default: () => [
      { question: "What is the grid method for drawing?", answer: "The grid method is a technique where you overlay a grid on your reference image using a grid maker tool and draw a corresponding grid on your paper. By focusing on one square at a time with the help of a grid maker, you can accurately transfer the image while maintaining correct proportions. This grid maker technique is used by both beginners learning to draw and professional artists for precise work." },
      { question: "What image formats and sizes can I upload to the grid maker?", answer: "Our grid maker accepts common image formats such as JPG and PNG. For best results with our grid maker, use clear, reasonably high-resolution photos so the grid lines stay crisp and easy to see when you zoom in or print your reference. Extremely small or blurry images may be harder to work from, even with our grid maker tool." },
      { question: "How many grid squares should I use in the grid maker?", answer: "For most drawings in our grid maker, 6 columns work well as a starting point. Use fewer squares (3-4) in the grid maker for simpler subjects or when you're more confident. Use more squares (8-10) in the grid maker for complex details or when you need extra precision. The goal is to have each square small enough to manage but not so small that it becomes tedious." },
      { question: "Why are grid labels helpful when using a grid maker?", answer: "Grid labels (like A1, B2, C3) in our grid maker help you quickly find the same position on both your reference image and your drawing paper. Without labels in the grid maker, it's easy to lose track of which square you're working on, especially with larger grids or complex images." },
      { question: "Can I customize the grid in the grid maker (color, thickness, diagonals, etc.)?", answer: "Yes. Our grid maker tool lets you control key grid settings such as the number of rows and columns, line thickness, and grid color. The grid maker also allows you to enable diagonal guides or experiment with different visual styles that match how you like to draw." },
      { question: "Is the drawing grid maker free to use?", answer: "Yes, the online drawing grid maker on this page is free to use for personal and educational projects. You can experiment with different grid settings in the grid maker, download your results, and come back as often as you like to prepare new references for your artwork." },
      { question: "Can I print the grid maker output?", answer: "Yes. The grid maker output is designed to be printable, so you can tape it next to your canvas, sketchbook, or drawing surface. Make sure to choose the right paper size and print settings so the grid squares from the grid maker stay evenly spaced and easy to read." }
    ] },
    showHeader: { type: Boolean, default: true },
    showFeatures: { type: Boolean, default: true },
    showSteps: { type: Boolean, default: true },
    showWhyToUse: { type: Boolean, default: true },
    showFaq: { type: Boolean, default: true }
  },
  setup(__props) {
    const expandedFaq = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "features-section" }, _attrs))} data-v-5c9bc419><div class="features-container" data-v-5c9bc419>`);
      if (__props.showHeader) {
        _push(`<div class="features-header" data-v-5c9bc419><h2 data-v-5c9bc419>${ssrInterpolate(__props.title)}</h2><p data-v-5c9bc419>${ssrInterpolate(__props.subtitle)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showFeatures) {
        _push(`<div class="features-grid" data-v-5c9bc419><!--[-->`);
        ssrRenderList(__props.features, (feature, index) => {
          _push(`<div class="feature-card" data-v-5c9bc419><div class="feature-icon" data-v-5c9bc419><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-5c9bc419><path${ssrRenderAttr("d", feature.iconPath)} data-v-5c9bc419></path></svg></div><h3 data-v-5c9bc419>${ssrInterpolate(feature.title)}</h3><p data-v-5c9bc419>${ssrInterpolate(feature.description)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showSteps) {
        _push(`<div class="how-it-works" data-v-5c9bc419><h2 data-v-5c9bc419>${ssrInterpolate(__props.stepsTitle)}</h2><div class="steps-grid" data-v-5c9bc419><!--[-->`);
        ssrRenderList(__props.steps, (step, index) => {
          _push(`<div class="step-card" data-v-5c9bc419><div class="step-number" data-v-5c9bc419>${ssrInterpolate(index + 1)}</div><h3 data-v-5c9bc419>${ssrInterpolate(step.title)}</h3><p data-v-5c9bc419>${ssrInterpolate(step.description)}</p></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showWhyToUse) {
        _push(`<div class="why-to-use" data-v-5c9bc419><h2 data-v-5c9bc419>Why to Use</h2><div class="why-grid" data-v-5c9bc419><!--[-->`);
        ssrRenderList(__props.whyItems, (item, index) => {
          _push(`<div class="${ssrRenderClass([{ "reverse": index % 2 === 1 }, "why-card"])}" data-v-5c9bc419><div class="why-image" data-v-5c9bc419><img${ssrRenderAttr("src", item.imageUrl)} alt="Grid Maker for people to draw artist" data-v-5c9bc419></div><div class="why-content" data-v-5c9bc419><h3 data-v-5c9bc419>${ssrInterpolate(item.title)}</h3><p data-v-5c9bc419>${ssrInterpolate(item.description)}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.showFaq) {
        _push(`<div class="faq-section" data-v-5c9bc419><h2 data-v-5c9bc419>FAQ</h2><div class="faq-list" data-v-5c9bc419><!--[-->`);
        ssrRenderList(__props.faqItems, (faq, index) => {
          _push(`<div class="faq-item" data-v-5c9bc419><button class="faq-question" data-v-5c9bc419><span data-v-5c9bc419>${ssrInterpolate(faq.question)}</span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${ssrRenderClass({ rotated: expandedFaq.value === index })}" data-v-5c9bc419><polyline points="6 9 12 15 18 9" data-v-5c9bc419></polyline></svg></button><div class="faq-answer" style="${ssrRenderStyle(expandedFaq.value === index ? null : { display: "none" })}" data-v-5c9bc419><p data-v-5c9bc419>${ssrInterpolate(faq.answer)}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeaturesSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c9bc419"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=FeaturesSection-Cfcf03WL.mjs.map
