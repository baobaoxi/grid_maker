<template>
  <div class="page-container">
    <AppNavbar />

    <div class="page-header">
      <h1>Blog</h1>
      <p>Tips, tutorials, and updates</p>
    </div>

    <main class="page-content">
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading blogs...</p>
      </div>

      <div v-else-if="error" class="error-state">
        <p>{{ error }}</p>
        <button @click="fetchBlogs" class="retry-btn">Retry</button>
      </div>

      <div v-else class="blog-list">
        <article
          v-for="post in blogPosts"
          :key="post._id || post.slug"
          class="blog-card"
          @click="navigateToPost(post.slug)"
        >
          <div class="blog-image">
            <img :src="post.image" :alt="post.title" />
          </div>
          <div class="blog-content">
            <span class="blog-date">{{ post.date }}</span>
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <span class="read-more">Read More →</span>
          </div>
        </article>

        <div v-if="blogPosts.length === 0" class="empty-state">
          <p>No blog posts yet. Check back soon!</p>
        </div>
      </div>
    </main>

    <AppFooter
      company="Photo Grid App"
      @navigate="handleNavigate"
    />
  </div>
</template>

<script setup>
import AppNavbar from '~/components/AppNavbar.vue'
import AppFooter from '~/components/AppFooter.vue'

useHead({
  link: [
    { rel: 'canonical', href: 'https://grid-maker.pro/blog/' }
  ]
})

const blogPosts = ref([])
const loading = ref(true)
const error = ref('')

const { data, pending, error: fetchError } = await useFetch('/api/blogs', {
  lazy: true
})

watch([data, fetchError], ([newData, newError]) => {
  if (newData && newData.success) {
    blogPosts.value = newData.data.filter(blog => blog.published)
  } else if (newError) {
    error.value = 'Failed to load blogs'
  }
  loading.value = false
}, { immediate: true })

function navigateToPost(slug) {
  window.location.href = `/blog/${slug}`
}

const handleNavigate = (link) => {
  window.location.href = link.url
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  background: #f5f7fa;
}

.page-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 700;
}

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.page-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-list {
  display: grid;
  gap: 30px;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.15);
}

.blog-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.05);
}

.blog-content {
  padding: 25px;
}

.blog-date {
  color: #888;
  font-size: 0.85rem;
  margin-bottom: 10px;
  display: block;
}

.blog-content h2 {
  color: #333;
  margin-bottom: 12px;
  font-size: 1.4rem;
}

.blog-content p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 15px;
}

.read-more {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

.loading-state,
.empty-state,
.error-state {
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

.retry-btn {
  margin-top: 16px;
  padding: 10px 20px;
  background: #667eea;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

@media (min-width: 768px) {
  .blog-card {
    display: grid;
    grid-template-columns: 350px 1fr;
  }

  .blog-image {
    height: auto;
    min-height: 250px;
  }

  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
