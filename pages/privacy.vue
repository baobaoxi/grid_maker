<template>
  <div class="page-container">
    <AppHeader 
      title="Privacy Policy"
      subtitle="Your privacy is our priority"
    />
    
    <main class="page-content">
      <div class="content-section">
        <h2>Privacy Policy</h2>
        <p class="last-updated">Last updated: May 25, 2026</p>
        
        <section>
          <h3>Introduction</h3>
          <p>At Photo Grid Overlay, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our online grid maker tool.</p>
        </section>
        
        <section>
          <h3>Information We Collect</h3>
          <p>We want to be clear: <strong>we do not collect any personal information</strong> from our users. All operations are performed locally on your device.</p>
          <ul>
            <li>Images you upload are processed locally only</li>
            <li>No data is sent to our servers</li>
            <li>No cookies are used to track your activity</li>
            <li>No user accounts or registration required</li>
          </ul>
        </section>
        
        <section>
          <h3>How Your Data is Used</h3>
          <p>When you use our grid maker tool:</p>
          <ol>
            <li>Your image is loaded into your browser</li>
            <li>Grid lines are drawn on top of your image using HTML5 Canvas</li>
            <li>You can customize grid settings (columns, rows, color, etc.)</li>
            <li>When you download, the image with grid is generated locally</li>
            <li>All processing happens in your browser - nothing is uploaded</li>
          </ol>
        </section>
        
        <section>
          <h3>Third-Party Services</h3>
          <p>We do not use any third-party analytics, tracking services, or advertising networks on our site.</p>
        </section>
        
        <section>
          <h3>Changes to This Policy</h3>
          <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.</p>
        </section>
        
        <section>
          <h3>Contact Us</h3>
          <p>If you have any questions about this privacy policy, please contact us at privacy@photogridoverlay.com.</p>
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
</style>