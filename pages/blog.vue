<template>
  <div class="blog-page">
    <AppNavbar></AppNavbar>

    <div class="page-header">
      <div class="header-content">
        <h1>Grid Maker Blog</h1>
        <p>Tips, tutorials, and inspiration for your grid art</p>
      </div>
      <div class="header-image">
        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" alt="Grid Maker Blog"></img>
        <div class="header-overlay"></div>
      </div>
    </div>
    
    <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>

    <div class="page-content">
      <div class="blog-content">
        <div class="blog-post">
          <h2>Getting Started with Grid Maker</h2>
          <p class="post-meta">May 27, 2026</p>
          <p>Learn how to create stunning grid art with our easy-to-use Grid Maker tool. Whether you're a beginner or an experienced artist, our guide will help you master the basics and create beautiful pixel-perfect designs.</p>
          <a href="#" class="read-more">Read More →</a>
        </div>

        <div class="blog-post">
          <h2>Advanced Grid Techniques</h2>
          <p class="post-meta">May 20, 2026</p>
          <p>Discover advanced techniques for creating complex grid patterns. From custom line widths to opacity adjustments, unlock the full potential of your grid designs.</p>
          <a href="#" class="read-more">Read More →</a>
        </div>

        <div class="blog-post">
          <h2>Creating Cross-Stitch Patterns</h2>
          <p class="post-meta">May 15, 2026</p>
          <p>Turn your favorite photos into cross-stitch patterns using our Pixel Art tool. Learn how to convert images into beautiful embroidery designs.</p>
          <a href="#" class="read-more">Read More →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppNavbar from '~/components/AppNavbar.vue'
</script>

<style scoped>
.blog-page {
  min-height: 100vh;
  background: #f5f5f5;
}

.page-header {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.header-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(139, 92, 246, 0.8), rgba(124, 58, 237, 0.6));
}

.header-content {
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
}

.header-content h1 {
  margin: 0 0 8px 0;
  font-size: 2rem;
  font-weight: 700;
}

.header-content p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.page-nav {
  padding: 16px 24px;
  background: #f8f9fa;
}

.back-home {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.back-home:hover {
  color: #764ba2;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.blog-post {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.blog-post h2 {
  margin: 0 0 12px 0;
  font-size: 1.5rem;
  color: #1a1a2e;
}

.post-meta {
  margin: 0 0 16px 0;
  font-size: 0.875rem;
  color: #6b7280;
}

.blog-post p {
  margin: 0 0 20px 0;
  color: #4b5563;
  line-height: 1.6;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.read-more:hover {
  color: #764ba2;
}
</style>
