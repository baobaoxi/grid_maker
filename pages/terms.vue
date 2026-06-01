<template>
  <div class="page-container">
    <nav class="page-nav">
      <a href="/" class="back-home">← Back to Home</a>
    </nav>
    
    <AppHeader
      title="Terms of Service"
      subtitle="Terms and conditions for using our service"
    />
    
    <main class="page-content">
      <div class="content-section">
        <h2>Terms of Service</h2>
        <p class="last-updated">Last updated: May 25, 2026</p>
        
        <section>
          <h3>Introduction</h3>
          <p>These Terms of Service ("Terms") govern your use of the Photo Grid Overlay website and service ("Service"). By using our Service, you agree to be bound by these Terms.</p>
        </section>
        
        <section>
          <h3>Use of Service</h3>
          <p>You may use our Service for personal and non-commercial purposes. You agree not to:</p>
          <ul>
            <li>Use the Service for any illegal or unauthorized purpose</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the intellectual property rights of others</li>
            <li>Upload or process images that you do not have the right to use</li>
            <li>Attempt to interfere with or disrupt the Service</li>
            <li>Use the Service in a way that could damage, disable, or impair our systems</li>
          </ul>
        </section>
        
        <section>
          <h3>Intellectual Property</h3>
          <p>The Service and its original content, features, and functionality are owned by Photo Grid Overlay and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
          <p>You retain all rights to the images you upload and process using our Service. We do not claim ownership of your content.</p>
        </section>
        
        <section>
          <h3>Disclaimer of Warranties</h3>
          <p>The Service is provided "as is" and "as available" without warranties of any kind, express or implied. We make no warranties regarding the accuracy, reliability, or availability of the Service.</p>
        </section>
        
        <section>
          <h3>Limitation of Liability</h3>
          <p>Photo Grid Overlay shall not be liable for any damages arising from your use of the Service, including but not limited to direct, indirect, incidental, consequential, or punitive damages.</p>
        </section>
        
        <section>
          <h3>Indemnification</h3>
          <p>You agree to indemnify and hold harmless Photo Grid Overlay from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>
        </section>
        
        <section>
          <h3>Changes to Terms</h3>
          <p>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with an updated revision date. Your continued use of the Service constitutes acceptance of the updated Terms.</p>
        </section>
        
        <section>
          <h3>Contact Us</h3>
          <p>If you have any questions about these Terms, please contact us at support@grid-maker.pro.</p>
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
    { rel: 'canonical', href: 'https://grid-maker.pro/terms/' }
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
  margin-bottom: 8px;
}

.last-updated {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 30px;
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

.content-section ul,
.content-section ol {
  color: #555;
  line-height: 1.8;
  padding-left: 25px;
  margin-bottom: 15px;
}

.content-section li {
  margin-bottom: 8px;
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