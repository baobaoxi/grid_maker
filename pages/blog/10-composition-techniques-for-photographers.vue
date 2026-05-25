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
          <span class="post-date">May 15, 2026</span>
          <h1>10 Composition Techniques Every Photographer Should Know</h1>
          <p class="post-author">By Photo Grid Overlay Team</p>
        </header>
        
        <div class="post-image">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" alt="Photography composition" />
        </div>
        
        <div class="post-content">
          <section>
            <h2>Introduction</h2>
            <p>Great photography isn't just about having the best camera - it's about understanding composition. These 10 techniques will help you create more compelling and visually striking images.</p>
          </section>
          
          <section>
            <h2>1. Rule of Thirds</h2>
            <p>Divide your frame into a 3x3 grid. Place your subject at the intersections of these lines for a more balanced composition.</p>
          </section>
          
          <section>
            <h2>2. Leading Lines</h2>
            <p>Use natural lines in your scene (roads, rivers, fences) to guide the viewer's eye toward your main subject.</p>
          </section>
          
          <section>
            <h2>3. Symmetry and Patterns</h2>
            <p>Look for symmetrical scenes or repeating patterns. They create a sense of harmony and visual interest.</p>
          </section>
          
          <section>
            <h2>4. Framing</h2>
            <p>Use elements in your environment (doorways, windows, branches) to frame your subject and add depth.</p>
          </section>
          
          <section>
            <h2>5. Depth Layers</h2>
            <p>Create layers in your image - foreground, midground, and background. This adds dimensionality to your photos.</p>
          </section>
          
          <section>
            <h2>6. Negative Space</h2>
            <p>Don't be afraid of empty space. It can emphasize your subject and create a sense of calm.</p>
          </section>
          
          <section>
            <h2>7. Golden Ratio</h2>
            <p>Similar to the rule of thirds but based on the golden ratio (1.618). Many find this creates more natural-looking compositions.</p>
          </section>
          
          <section>
            <h2>8. Diagonals</h2>
            <p>Diagonal lines add dynamism and movement to your photos. They can create a sense of action or tension.</p>
          </section>
          
          <section>
            <h2>9. Triangles</h2>
            <p>Look for triangular shapes in your scene. Triangles are inherently stable and draw the eye.</p>
          </section>
          
          <section>
            <h2>10. Rule of Odds</h2>
            <p>An odd number of subjects (3, 5, 7) creates more visual interest than an even number.</p>
          </section>
          
          <section>
            <h2>Conclusion</h2>
            <p>Mastering composition takes practice, but these techniques provide a solid foundation. Experiment with different approaches and develop your own style. Remember, rules are meant to be broken - once you understand them, feel free to experiment!</p>
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