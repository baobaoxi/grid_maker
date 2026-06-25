<template>
  <div class="page-container">
    <AppHeader title="Blog" subtitle="" />

    <nav class="blog-nav">
      <a href="/blog" class="nav-link">← Back to Blog</a>
    </nav>

    <main class="page-content">
      <div v-if="loading" class="loading-state">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>

      <div v-else-if="error || !post" class="error-state">
        <h2>Article Not Found</h2>
        <p>The article you're looking for doesn't exist or has been removed.</p>
        <a href="/blog" class="back-link">← Back to Blog</a>
      </div>

      <article v-else class="blog-article">
        <header class="article-header">
          <span class="article-date">{{ post.date }}</span>
          <h2>{{ post.title }}</h2>
          <!-- <p class="article-excerpt">{{ post.excerpt }}</p> -->
          <div class="article-image">
            <img :src="post.image" :alt="post.title" />
          </div>
        </header>

        <div class="article-content" v-html="post.content"></div>
      </article>

      <!-- 推荐文章 -->
      <section v-if="recommendedPosts.length > 0" class="recommended-posts">
        <h3>Recommended Articles</h3>
        <div class="recommended-grid">
          <a
            v-for="recommendedPost in recommendedPosts"
            :key="recommendedPost._id || recommendedPost.id"
            :href="`/blog/${recommendedPost.slug}`"
            class="recommended-card"
          >
            <div class="recommended-image">
              <img :src="recommendedPost.image" :alt="recommendedPost.title" />
            </div>
            <div class="recommended-content">
              <h4>{{ recommendedPost.title }}</h4>
              <p class="recommended-excerpt">{{ recommendedPost.excerpt }}</p>
            </div>
          </a>
        </div>
      </section>
    </main>

    <AppFooter company="Photo Grid App" @navigate="handleNavigate" />
  </div>
</template>

<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const route = useRoute()

useHead({
  link: [
    { rel: 'canonical', href: `https://grid-maker.pro/blog/${route.params.slug}` }
  ]
})
const loading = ref(true)
const error = ref(false)
const post = ref(null)
const recommendedPosts = ref([])
const allPosts = ref([])

async function fetchBlog() {
  loading.value = true
  error.value = false

  try {
    const res = await $fetch('/api/blogs')
    if (res.success && res.data) {
      const allPosts = res.data
      const slug = route.params.slug
      post.value = res.data.find(b => b.slug === slug)
      if (!post.value) {
        error.value = true
      } else {
        const otherPosts = allPosts.filter(p => p.slug !== post.value.slug)
        const shuffled = otherPosts.sort(() => 0.5 - Math.random())
        const count = Math.min(Math.max(3, shuffled.length), 5)
        recommendedPosts.value = shuffled.slice(0, count)
      }
    } else {
      error.value = true
    }
  } catch (e) {
    error.value = true
  } finally {
    loading.value = false
  }
}

function handleNavigate(link) {
  window.location.href = link.url
}

onMounted(() => {
  fetchBlog()
})

watch(() => route.params.slug, () => {
  fetchBlog()
})
</script>

<style scoped>
.page-container {
  min-height: 100vh;
}

.blog-nav {
  max-width: 800px;
  margin: 0 auto;
  padding: 15px 20px;
}

.nav-link,
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover,
.back-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.loading-state,
.error-state {
  text-align: center;
  padding: 60px 20px;
  color: #888;
}

.error-state h1 {
  color: #333;
  margin-bottom: 16px;
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

.blog-article {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.article-header {
  padding: 40px 40px 0 40px;
}

.article-date {
  color: #888;
  font-size: 0.9rem;
  display: block;
  margin-bottom: 16px;
}

.article-header h2 {
  color: #333;
  font-size: 2.2rem;
  line-height: 1.3;
  margin-bottom: 20px;
}

.article-excerpt {
  color: #555;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 30px;
}

.article-image {
  width: calc(100% + 80px);
  margin-left: -40px;
  margin-right: -40px;
}

.article-image img {
  width: 100%;
  height: auto;
  display: block;
}

.article-content {
  padding: 40px;
  color: #333;
  line-height: 1.8;
  font-size: 1.05rem;
}

.article-content :deep(h2) {
  color: #1a1a2e;
  font-size: 1.6rem;
  margin: 32px 0 16px 0;
  line-height: 1.4;
}

.article-content :deep(h3) {
  color: #1a1a2e;
  font-size: 1.3rem;
  margin: 24px 0 12px 0;
}

.article-content :deep(p) {
  margin-bottom: 20px;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 20px;
  padding-left: 24px;
}

.article-content :deep(li) {
  margin-bottom: 8px;
}

.article-content :deep(blockquote) {
  border-left: 4px solid #667eea;
  padding-left: 20px;
  margin: 24px 0;
  font-style: italic;
  color: #555;
}

.article-content :deep(a) {
  color: #667eea;
  text-decoration: underline;
}

.article-content :deep(a:hover) {
  color: #764ba2;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 20px 0;
}

.article-content :deep(strong) {
  color: #1a1a2e;
}

.article-content :deep(a) {
  color: #4c99e6 !important;
}

/* 推荐文章样式 */
.recommended-posts {
  max-width: 800px;
  margin: 60px auto 0;
  padding: 0 20px;
}

.recommended-posts h3 {
  font-size: 1.5rem;
  color: #1a1a2e;
  margin-bottom: 24px;
  text-align: center;
}

.recommended-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.recommended-card {
  display: flex;
  flex-direction: row;
  width: calc(50% - 8px);
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.recommended-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.recommended-image {
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  text-align: center;
  font-size: 0;
}

.recommended-image img {
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: 100%;
  vertical-align: middle;
  transition: transform 0.2s ease;
}

.recommended-card:hover .recommended-image img {
  transform: scale(1.03);
}

.recommended-content {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.recommended-content h4 {
  font-size: 0.85rem;
  color: #1a1a2e;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.recommended-excerpt {
  font-size: 0.75rem;
  color: #666;
  margin: 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 600px) {
  .recommended-card {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .article-header {
    padding: 30px 20px 0 20px;
  }

  .article-image {
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
  }

  .article-content {
    padding: 30px 20px;
  }

  .article-header h1 {
    font-size: 1.8rem;
  }
}
</style>
