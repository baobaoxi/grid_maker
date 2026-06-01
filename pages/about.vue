<template>
  <div class="page-container">
    <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>
    
    <AppHeader
      title="About Us"
      subtitle="Learn more about Photo Grid Overlay"
    />
    
    <main class="page-content">
      <div class="content-section">
        <h2>About Photo Grid Overlay</h2>
        
        <section>
          <h3>Our Mission</h3>
          <p>Photo Grid Overlay is a free online tool designed to help artists, designers, and photography enthusiasts add customizable grid lines to their images. Whether you're sketching from a reference photo, creating Instagram grid layouts, or planning compositions, our tool provides the precision you need.</p>
        </section>
        
        <section>
          <h3>Why Choose Us?</h3>
          <div class="features-list">
            <div class="feature-item">
              <div class="feature-icon">🔒</div>
              <div class="feature-content">
                <h4>Privacy First</h4>
                <p>All processing happens locally in your browser. Your images never leave your device.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">🎨</div>
              <div class="feature-content">
                <h4>Customizable</h4>
                <p>Adjust columns, rows, colors, line width, and opacity to suit your needs.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">⚡</div>
              <div class="feature-content">
                <h4>Fast & Free</h4>
                <p>No registration required. Start using immediately, completely free.</p>
              </div>
            </div>
            <div class="feature-item">
              <div class="feature-icon">📱</div>
              <div class="feature-content">
                <h4>Mobile Friendly</h4>
                <p>Works seamlessly on desktop, tablet, and mobile devices.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h3>Our Story</h3>
          <p>Photo Grid Overlay was created out of a need for a simple, privacy-focused tool for artists. As artists ourselves, we struggled to find a grid tool that didn't require uploading images to servers or paying for subscriptions. So we built one.</p>
          <p>What started as a personal project has grown into a tool used by thousands of creatives worldwide. We're committed to keeping it free, private, and continuously improving based on user feedback.</p>
        </section>
        
        <section>
          <h3>Contact Us</h3>
          <p>We'd love to hear from you! Whether you have feedback, suggestions, or just want to say hello, you can reach us at hello@photogridoverlay.com.</p>
        </section>
      </div>
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

useHead({
  link: [
    { rel: 'canonical', href: 'https://grid-maker.pro/about/' }
  ]
})

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

.content-section {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  color: #333;
  margin-bottom: 20px;
}

.content-section h3 {
  color: #667eea;
  margin-top: 30px;
  margin-bottom: 15px;
}

.content-section p {
  color: #555;
  line-height: 1.8;
  margin-bottom: 15px;
}

.features-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
}

.feature-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  color: white;
}

.feature-content h4 {
  color: #333;
  margin-bottom: 5px;
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
</style>