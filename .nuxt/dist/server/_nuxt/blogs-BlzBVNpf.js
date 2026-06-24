import { ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrLooseContain } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "blogs",
  __ssrInlineRender: true,
  setup(__props) {
    const isAuthenticated = ref(false);
    const loading = ref(false);
    const saving = ref(false);
    const error = ref("");
    const successMessage = ref("");
    const isRegistering = ref(false);
    const blogs2 = ref([]);
    const showCreateModal = ref(false);
    const showEditModal = ref(false);
    const editingBlog = ref(null);
    const loginForm = ref({
      username: "",
      password: ""
    });
    const formData = ref({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      date: "",
      image: "",
      published: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "admin-container" }, _attrs))} data-v-a1c0beba><link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet" data-v-a1c0beba>`);
      if (!isAuthenticated.value) {
        _push(`<div class="login-page" data-v-a1c0beba><div class="login-card" data-v-a1c0beba><h1 data-v-a1c0beba>${ssrInterpolate(isRegistering.value ? "Create Admin Account" : "Admin Login")}</h1>`);
        if (!isRegistering.value) {
          _push(`<div class="setup-notice" data-v-a1c0beba><p data-v-a1c0beba>First time? <button class="link-btn" data-v-a1c0beba>Create an account</button></p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<form data-v-a1c0beba><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Username</label><input${ssrRenderAttr("value", loginForm.value.username)} type="text" placeholder="Enter username" required data-v-a1c0beba></div><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Password</label><input${ssrRenderAttr("value", loginForm.value.password)} type="password" placeholder="Enter password" required data-v-a1c0beba></div><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} data-v-a1c0beba>${ssrInterpolate(loading.value ? "Please wait..." : isRegistering.value ? "Create Account" : "Login")}</button>`);
        if (error.value) {
          _push(`<p class="error-message" data-v-a1c0beba>${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (successMessage.value) {
          _push(`<p class="success-message" data-v-a1c0beba>${ssrInterpolate(successMessage.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form>`);
        if (isRegistering.value) {
          _push(`<div class="back-to-login" data-v-a1c0beba><button class="link-btn" data-v-a1c0beba>Back to login</button></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<div class="dashboard" data-v-a1c0beba><div class="dashboard-header" data-v-a1c0beba><h1 data-v-a1c0beba>Blog Management</h1><div class="header-actions" data-v-a1c0beba><button class="btn-primary" data-v-a1c0beba> + New Blog Post </button><button class="btn-secondary" data-v-a1c0beba> Logout </button></div></div>`);
        if (loading.value) {
          _push(`<div class="loading-state" data-v-a1c0beba><div class="spinner" data-v-a1c0beba></div><p data-v-a1c0beba>Loading blogs...</p></div>`);
        } else {
          _push(`<div class="blogs-list" data-v-a1c0beba><!--[-->`);
          ssrRenderList(blogs2.value, (blog) => {
            _push(`<div class="blog-card" data-v-a1c0beba><div class="blog-info" data-v-a1c0beba><h3 data-v-a1c0beba>${ssrInterpolate(blog.title)}</h3><p class="blog-slug" data-v-a1c0beba>/${ssrInterpolate(blog.slug)}</p><p class="blog-date" data-v-a1c0beba>${ssrInterpolate(blog.date)}</p><span class="${ssrRenderClass(["status-badge", blog.published ? "published" : "draft"])}" data-v-a1c0beba>${ssrInterpolate(blog.published ? "Published" : "Draft")}</span></div><div class="blog-actions" data-v-a1c0beba><button class="btn-edit" data-v-a1c0beba>Edit</button><button class="btn-delete" data-v-a1c0beba>Delete</button></div></div>`);
          });
          _push(`<!--]-->`);
          if (blogs2.value.length === 0) {
            _push(`<div class="empty-state" data-v-a1c0beba><p data-v-a1c0beba>No blog posts yet. Create your first one!</p></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      }
      if (showCreateModal.value || showEditModal.value) {
        _push(`<div class="modal-overlay" data-v-a1c0beba><div class="modal" data-v-a1c0beba><div class="modal-header" data-v-a1c0beba><h2 data-v-a1c0beba>${ssrInterpolate(editingBlog.value ? "Edit Blog Post" : "Create Blog Post")}</h2><button class="close-btn" data-v-a1c0beba>×</button></div><form class="modal-content" data-v-a1c0beba><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Title *</label><input${ssrRenderAttr("value", formData.value.title)} type="text" placeholder="Enter blog title" required data-v-a1c0beba></div><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Slug *</label><input${ssrRenderAttr("value", formData.value.slug)} type="text" placeholder="e.g., my-blog-post" required data-v-a1c0beba><small data-v-a1c0beba>URL-friendly name (lowercase, hyphens only)</small></div><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Excerpt *</label><textarea rows="3" placeholder="Short description for blog list" required data-v-a1c0beba>${ssrInterpolate(formData.value.excerpt)}</textarea></div><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Content *</label><textarea rows="15" placeholder="Write your blog content here... (HTML supported)" required class="content-textarea" data-v-a1c0beba>${ssrInterpolate(formData.value.content)}</textarea></div><div class="form-row" data-v-a1c0beba><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Date *</label><input${ssrRenderAttr("value", formData.value.date)} type="text" placeholder="e.g., May 31, 2026" required data-v-a1c0beba></div><div class="form-group" data-v-a1c0beba><label data-v-a1c0beba>Image URL *</label><input${ssrRenderAttr("value", formData.value.image)} type="url" placeholder="https://..." required data-v-a1c0beba></div></div><div class="form-group" data-v-a1c0beba><label class="checkbox-label" data-v-a1c0beba><input${ssrIncludeBooleanAttr(Array.isArray(formData.value.published) ? ssrLooseContain(formData.value.published, null) : formData.value.published) ? " checked" : ""} type="checkbox" data-v-a1c0beba><span data-v-a1c0beba>Published</span></label></div><div class="modal-actions" data-v-a1c0beba><button type="button" class="btn-secondary" data-v-a1c0beba> Cancel </button><button type="submit" class="btn-primary"${ssrIncludeBooleanAttr(saving.value) ? " disabled" : ""} data-v-a1c0beba>${ssrInterpolate(saving.value ? "Saving..." : editingBlog.value ? "Update" : "Create")}</button></div>`);
        if (error.value) {
          _push(`<p class="error-message" data-v-a1c0beba>${ssrInterpolate(error.value)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</form></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blogs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blogs = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a1c0beba"]]);
export {
  blogs as default
};
//# sourceMappingURL=blogs-BlzBVNpf.js.map
