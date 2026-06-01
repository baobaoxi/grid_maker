<template>
  <div class="admin-container">
    <link href="https://cdn.jsdelivr.net/npm/quill@2.0.3/dist/quill.snow.css" rel="stylesheet">

    <div v-if="!isAuthenticated" class="login-page">
      <div class="login-card">
        <h1>{{ isRegistering ? 'Create Admin Account' : 'Admin Login' }}</h1>

        <div v-if="!isRegistering" class="setup-notice">
          <p>First time? <button @click="isRegistering = true" class="link-btn">Create an account</button></p>
        </div>

        <form @submit.prevent="isRegistering ? handleRegister() : handleLogin()">
          <div class="form-group">
            <label>Username</label>
            <input
              v-model="loginForm.username"
              type="text"
              placeholder="Enter username"
              required
            />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              v-model="loginForm.password"
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" class="btn-primary" :disabled="loading">
            {{ loading ? 'Please wait...' : (isRegistering ? 'Create Account' : 'Login') }}
          </button>
          <p v-if="error" class="error-message">{{ error }}</p>
          <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        </form>

        <div v-if="isRegistering" class="back-to-login">
          <button @click="isRegistering = false; error = ''" class="link-btn">Back to login</button>
        </div>
      </div>
    </div>

    <div v-else class="dashboard">
      <div class="dashboard-header">
        <h1>Blog Management</h1>
        <div class="header-actions">
          <button @click="openCreateModal" class="btn-primary">
            + New Blog Post
          </button>
          <button @click="logout" class="btn-secondary">
            Logout
          </button>
        </div>
      </div>

      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading blogs...</p>
      </div>

      <div v-else class="blogs-list">
        <div
          v-for="blog in blogs"
          :key="blog._id"
          class="blog-card"
        >
          <div class="blog-info">
            <h3>{{ blog.title }}</h3>
            <p class="blog-slug">/{{ blog.slug }}</p>
            <p class="blog-date">{{ blog.date }}</p>
            <span :class="['status-badge', blog.published ? 'published' : 'draft']">
              {{ blog.published ? 'Published' : 'Draft' }}
            </span>
          </div>
          <div class="blog-actions">
            <button @click="editBlog(blog)" class="btn-edit">Edit</button>
            <button @click="deleteBlog(blog._id)" class="btn-delete">Delete</button>
          </div>
        </div>

        <div v-if="blogs.length === 0" class="empty-state">
          <p>No blog posts yet. Create your first one!</p>
        </div>
      </div>
    </div>

    <div v-if="showCreateModal || showEditModal" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <div class="modal-header">
          <h2>{{ editingBlog ? 'Edit Blog Post' : 'Create Blog Post' }}</h2>
          <button @click="closeModal" class="close-btn">×</button>
        </div>

        <form @submit.prevent="saveBlog" class="modal-content">
          <div class="form-group">
            <label>Title *</label>
            <input
              v-model="formData.title"
              type="text"
              placeholder="Enter blog title"
              required
            />
          </div>

          <div class="form-group">
            <label>Slug *</label>
            <input
              v-model="formData.slug"
              type="text"
              placeholder="e.g., my-blog-post"
              required
            />
            <small>URL-friendly name (lowercase, hyphens only)</small>
          </div>

          <div class="form-group">
            <label>Excerpt *</label>
            <textarea
              v-model="formData.excerpt"
              rows="3"
              placeholder="Short description for blog list"
              required
            ></textarea>
          </div>

          <div class="form-group">
            <label>Content *</label>
            <textarea
              v-model="formData.content"
              rows="15"
              placeholder="Write your blog content here... (HTML supported)"
              required
              class="content-textarea"
            ></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Date *</label>
              <input
                v-model="formData.date"
                type="text"
                placeholder="e.g., May 31, 2026"
                required
              />
            </div>

            <div class="form-group">
              <label>Image URL *</label>
              <input
                v-model="formData.image"
                type="url"
                placeholder="https://..."
                required
              />
            </div>
          </div>

          <div class="form-group">
            <label class="checkbox-label">
              <input
                v-model="formData.published"
                type="checkbox"
              />
              <span>Published</span>
            </label>
          </div>

          <div class="modal-actions">
            <button type="button" @click="closeModal" class="btn-secondary">
              Cancel
            </button>
            <button type="submit" class="btn-primary" :disabled="saving">
              {{ saving ? 'Saving...' : (editingBlog ? 'Update' : 'Create') }}
            </button>
          </div>

          <p v-if="error" class="error-message">{{ error }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAuthenticated = ref(false)
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const isRegistering = ref(false)
const blogs = ref([])
const showCreateModal = ref(false)
const showEditModal = ref(false)
const editingBlog = ref(null)

const loginForm = ref({
  username: '',
  password: ''
})

const formData = ref({
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  date: '',
  image: '',
  published: true
})

onMounted(() => {
  const token = localStorage.getItem('admin_token')
  if (token) {
    isAuthenticated.value = true
    fetchBlogs()
  }
})

async function handleLogin() {
  loading.value = true
  error.value = ''

  try {
    const res = await $fetch('/api/auth/login', {
      method: 'POST',
      body: loginForm.value
    })

    if (res.success) {
      localStorage.setItem('admin_token', res.token)
      isAuthenticated.value = true
      fetchBlogs()
    } else {
      error.value = res.error || 'Login failed'
    }
  } catch (e) {
    error.value = e.message || 'Login failed'
  } finally {
    loading.value = false
  }
}

async function handleRegister() {
  loading.value = true
  error.value = ''
  successMessage.value = ''

  try {
    const res = await $fetch('/api/auth/register', {
      method: 'POST',
      body: loginForm.value
    })

    if (res.success) {
      successMessage.value = 'Account created! You can now login.'
      loginForm.value = { username: '', password: '' }
      isRegistering.value = false
    } else {
      error.value = res.error || 'Registration failed'
    }
  } catch (e) {
    error.value = e.message || 'Registration failed'
  } finally {
    loading.value = false
  }
}

function logout() {
  localStorage.removeItem('admin_token')
  isAuthenticated.value = false
  blogs.value = []
}

async function fetchBlogs() {
  loading.value = true

  try {
    const res = await $fetch('/api/blogs')
    if (res.success) {
      blogs.value = res.data
    }
  } catch (e) {
    error.value = 'Failed to fetch blogs'
  } finally {
    loading.value = false
  }
}

function openCreateModal() {
  editingBlog.value = null
  resetForm()
  showCreateModal.value = true
}

function editBlog(blog) {
  editingBlog.value = blog
  formData.value = {
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    content: blog.content || '',
    date: blog.date,
    image: blog.image,
    published: blog.published
  }
  showEditModal.value = true
}

function closeModal() {
  showCreateModal.value = false
  showEditModal.value = false
  editingBlog.value = null
  error.value = ''
  resetForm()
}

function resetForm() {
  formData.value = {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    date: '',
    image: '',
    published: true
  }
}

async function saveBlog() {
  saving.value = true
  error.value = ''

  const content = formData.value.content

  if (!content || content === '<p><br></p>') {
    error.value = 'Content is required'
    saving.value = false
    return
  }

  try {
    if (editingBlog.value) {
      const res = await $fetch(`/api/blogs/${editingBlog.value._id}`, {
        method: 'PUT',
        body: formData.value
      })

      if (res.success) {
        await fetchBlogs()
        closeModal()
      } else {
        error.value = res.error || 'Failed to update blog'
      }
    } else {
      const res = await $fetch('/api/blogs', {
        method: 'POST',
        body: formData.value
      })

      if (res.success) {
        await fetchBlogs()
        closeModal()
      } else {
        error.value = res.error || 'Failed to create blog'
      }
    }
  } catch (e) {
    error.value = e.message || 'Operation failed'
  } finally {
    saving.value = false
  }
}

async function deleteBlog(id) {
  if (!confirm('Are you sure you want to delete this blog post?')) {
    return
  }

  try {
    const res = await $fetch(`/api/blogs/${id}`, {
      method: 'DELETE'
    })

    if (res.success) {
      await fetchBlogs()
    } else {
      error.value = res.error || 'Failed to delete blog'
    }
  } catch (e) {
    error.value = 'Failed to delete blog'
  }
}
</script>

<style scoped>
.admin-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-card h1 {
  margin: 0 0 30px 0;
  color: #1a1a2e;
  text-align: center;
}

.dashboard {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.dashboard-header h1 {
  margin: 0;
  color: #1a1a2e;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.blogs-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.blog-card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.blog-info h3 {
  margin: 0 0 8px 0;
  color: #1a1a2e;
}

.blog-slug {
  color: #667eea;
  font-size: 0.9rem;
  margin: 0 0 8px 0;
}

.blog-date {
  color: #888;
  font-size: 0.85rem;
  margin: 0 0 12px 0;
}

.status-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.published {
  background: #d4edda;
  color: #155724;
}

.status-badge.draft {
  background: #fff3cd;
  color: #856404;
}

.blog-actions {
  display: flex;
  gap: 8px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal {
  background: white;
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid #e9ecef;
}

.modal-header h2 {
  margin: 0;
  color: #1a1a2e;
}

.close-btn {
  background: none;
  border: none;
  font-size: 28px;
  cursor: pointer;
  color: #888;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  color: #1a1a2e;
}

.modal-content {
  padding: 24px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #374151;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #667eea;
}

.form-group small {
  display: block;
  margin-top: 4px;
  color: #888;
  font-size: 0.85rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.checkbox-label input[type="checkbox"] {
  width: auto;
}

.content-textarea {
  font-family: monospace;
  min-height: 300px;
  resize: vertical;
}

.btn-primary,
.btn-secondary {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #f3f4f6;
  color: #374151;
}

.btn-secondary:hover {
  background: #e5e7eb;
}

.btn-edit {
  padding: 6px 14px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-edit:hover {
  background: #5568d3;
}

.btn-delete {
  padding: 6px 14px;
  background: #ef4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
}

.btn-delete:hover {
  background: #dc2626;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.loading-state,
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #888;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f4f6;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-message {
  color: #dc2626;
  font-size: 0.875rem;
  margin-top: 12px;
}

.success-message {
  color: #16a34a;
  font-size: 0.875rem;
  margin-top: 12px;
}

.link-btn {
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  text-decoration: underline;
}

.link-btn:hover {
  color: #5568d3;
}

.setup-notice {
  text-align: center;
  margin-bottom: 20px;
  color: #666;
  font-size: 0.9rem;
}

.setup-notice p {
  margin: 0;
}

.back-to-login {
  text-align: center;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    align-items: stretch;
  }

  .header-actions {
    justify-content: stretch;
  }

  .header-actions button {
    flex: 1;
  }

  .blog-card {
    flex-direction: column;
    align-items: stretch;
  }

  .blog-actions {
    justify-content: stretch;
  }

  .blog-actions button {
    flex: 1;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .modal {
    max-width: 100%;
  }
}
</style>
