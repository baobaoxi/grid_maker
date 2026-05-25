<template>
  <div class="page-container">
    <AppHeader 
      title="Blog"
      subtitle="Tips, tutorials, and updates"
    />
    
    <nav class="blog-nav">
      <a href="/" class="nav-link white">← Back to Home</a>
      <span class="nav-divider">|</span>
      <a href="/blog" class="nav-link white">Blog Home</a>
    </nav>
    
    <main class="page-content">
      <article class="blog-post">
        <header class="post-header">
          <span class="post-date">May 20, 2026</span>
          <h1>How to Use Grid Overlays for Drawing</h1>
          <p class="post-author">By Photo Grid Overlay Team</p>
        </header>
        
        <div class="post-image">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" alt="Grid overlay for drawing" />
        </div>
        
        <div class="post-content">
          <section>
            <h2>Introduction</h2>
            <p>Grid overlays are a powerful tool for artists looking to improve their drawing accuracy and proportions. Whether you're a beginner or an experienced artist, using a grid can help you break down complex images into manageable sections.</p>
          </section>
          
          <section>
            <h2>Why Use Grid Overlays?</h2>
            <p>Grid overlays work by dividing your reference image and drawing surface into equal sections. This allows you to focus on one small area at a time, making it easier to capture accurate shapes and proportions.</p>
            <ul>
              <li>Improves accuracy</li>
              <li>Helps with perspective</li>
              <li>Makes complex drawings manageable</li>
              <li>Builds confidence for beginners</li>
            </ul>
          </section>
          
          <section>
            <h2>Step-by-Step Guide</h2>
            
            <h3>Step 1: Upload Your Reference Image</h3>
            <p>Start by uploading your reference photo to Photo Grid Overlay. Supported formats include JPG, PNG, and WebP.</p>
            
            <h3>Step 2: Configure Grid Settings</h3>
            <p>Adjust the number of columns and rows based on your needs. For detailed drawings, use more grid lines. For simpler subjects, fewer lines work best.</p>
            
            <h3>Step 3: Adjust Grid Appearance</h3>
            <p>Choose a high-contrast color for your grid lines so they're visible against your reference image. Red and white are popular choices.</p>
            
            <h3>Step 4: Draw on Your Paper</h3>
            <p>Lightly draw the same grid pattern on your drawing paper. Then, work on one grid cell at a time, copying what you see in the corresponding cell of your reference image.</p>
          </section>
          
          <section>
            <h2>Pro Tips</h2>
            <ol>
              <li>Use a light touch when drawing grid lines on your paper - you'll want to erase them later.</li>
              <li>Start with larger grid sections, then add more detail as you progress.</li>
              <li>Practice with simple images first before tackling complex portraits or landscapes.</li>
              <li>Experiment with different grid colors to find what works best for your reference photos.</li>
            </ol>
          </section>
          
          <section>
            <h2>Conclusion</h2>
            <p>Grid overlays are a fantastic tool for artists of all skill levels. With practice, you'll find that your drawing accuracy improves significantly. Remember, the goal isn't to create a perfect copy, but to develop your observational skills.</p>
          </section>
        </div>
      </article>
    </main>
    
    <AppFooter 
      company="Photo Grid App"
      @navigate="handleNavigate"
    />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

const handleNavigate = (link: { label: string; url: string }) => {
  window.location.href = link.url
}
</script>

<style scoped>
.page-container {
  min-height: 100vh;
}

.blog-nav {
  max-width: 800px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.nav-link {
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #764ba2;
  text-decoration: underline;
}

.nav-divider {
  color: #ddd;
}

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.blog-post {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.post-header {
  padding: 40px;
  text-align: center;
}

.post-date {
  color: #667eea;
  font-weight: 600;
  font-size: 0.9rem;
}

.post-header h1 {
  color: #333;
  margin: 20px 0 10px;
  font-size: 2rem;
}

.post-author {
  color: #888;
  font-size: 0.95rem;
}

.post-image {
  width: 100%;
  max-height: 400px;
  overflow: hidden;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-content {
  padding: 40px;
}

.post-content section {
  margin-bottom: 35px;
}

.post-content h2 {
  color: #333;
  margin-bottom: 15px;
}

.post-content h3 {
  color: #667eea;
  margin-top: 25px;
  margin-bottom: 12px;
}

.post-content p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
}

.post-content ul,
.post-content ol {
  color: #555;
  line-height: 1.8;
  padding-left: 25px;
  margin-bottom: 15px;
}

.post-content li {
  margin-bottom: 8px;
}

.white {
  color: #fff;
}
</style>