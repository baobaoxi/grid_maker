<template>
  <div class="page-container">
    <AppHeader 
      title="Blog"
      subtitle="Tips, tutorials, and updates"
    />
    
    <nav class="blog-nav">
      <a href="/" class="nav-link">← Back to Home</a>
      <span class="nav-divider">|</span>
      <a href="/blog" class="nav-link">Blog Home</a>
    </nav>
    
    <main class="page-content">
      <article class="blog-post">
        <header class="post-header">
          <span class="post-date">May 25, 2026</span>
          <h1>How to Master Proportions: A Beginner's Guide to Using a Grid Maker for Drawing</h1>
          <p class="post-author">By Photo Grid Overlay Team</p>
        </header>
        
        <div class="post-image">
          <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop" alt="Grid drawing proportions" />
        </div>
        
        <div class="post-content">
          <section>
            <p>Every artist has faced the same frustrating moment: you spend hours working on a beautiful portrait drawing, only to step back and realize the eyes are slightly misaligned, or the nose is completely out of proportion. Getting proportions right is one of the hardest parts of learning how to sketch, but you don't have to guess.</p>
            <p>By using a digital grid maker for drawing, you can leverage a time-tested technique used by classical masters like Leonardo da Vinci to achieve perfect spatial accuracy every single time.</p>
          </section>
          
          <section>
            <h2>What is the Grid Method in Drawing?</h2>
            <p>The grid method involves drawing a series of equally spaced horizontal and vertical lines over your reference photo, and then drawing a matching grid onto your blank drawing paper.</p>
            <p>Instead of trying to sketch an entire complex subject all at once, you focus on one small square at a time. It breaks down the overwhelming task of "drawing a face" into small, manageable shapes, lines, and values.</p>
            <p>Historically, artists had to physically draw lines on their printout photos, often ruining the original image. Today, a drawing grid online tool lets you do this digitally in seconds.</p>
          </section>
          
          <section>
            <h2>Why Use a Digital Drawing Grid Online Tool?</h2>
            <p>While you can manually draw grids, using an online app offers massive advantages for your art workflow:</p>
            <ul>
              <li><strong>Zero Damage to Originals:</strong> You never have to scratch or marker over your digital photographs.</li>
              <li><strong>Instant Ratio Adjustments:</strong> Whether you are working with a square canvas or a panoramic landscape, you can adjust columns and rows on the fly.</li>
              <li><strong>Custom Line Colors:</strong> If your reference photo is very dark, a traditional pencil grid won't show up. Our online tool lets you switch grid lines to bright red, neon yellow, or pure white for maximum visibility.</li>
            </ul>
          </section>
          
          <section>
            <h2>Step-by-Step: How to Use Our Grid Tool for Your Next Sketch</h2>
            
            <h3>Step 1: Upload Your Reference Image</h3>
            <p>Go to our free web app, drag and drop the image you want to sketch into the workspace. Our tool supports high-resolution photos without compressing the original details.</p>
            
            <h3>Step 2: Set Up Your Grid Lines</h3>
            <p>Choose the number of rows and columns. For beginners, a simple 4×4 or 6×6 grid is perfect. If your artwork requires intricate details (like drawing eyes or complex lace), increase the grid density to get smaller squares.</p>
            
            <h3>Step 3: Adjust Grid Aesthetics</h3>
            <p>Pick a contrasting color so you can clearly see the lines against the image background. You can also toggle line thickness to make sure it doesn't block critical visual elements.</p>
            
            <h3>Step 4: Export and Replicate on Paper</h3>
            <p>Download your newly gridded image. On your actual sketching paper, use a light pencil (like a 2H pencil) to softly draw the identical grid layout. Now, you're ready to start sketching square by square!</p>
          </section>
          
          <section class="cta-section">
            <p>👉 Ready to elevate your art? Use our free Grid Maker for Drawing to overlay perfect guidelines on your reference photo right now!</p>
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

.page-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
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
  color: #444;
  line-height: 1.8;
  margin-bottom: 15px;
  font-weight: 500;
}

.post-content ul {
  color: #444;
  line-height: 1.8;
  padding-left: 25px;
  margin-bottom: 15px;
}

.post-content li {
  margin-bottom: 12px;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
}

.cta-section p {
  color: white !important;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}
</style>