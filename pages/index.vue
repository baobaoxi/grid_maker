<template>
  <div class="app-container">
    <AppNavbar />
    <HeroSection />

    <main class="main-content">

    <section class="grid-maker-section" id="grid-maker">
      <div class="container">
        <GridMaker />
      </div>
    </section>
    </main>

    <FeaturesSection
      steps-title="How to Use"
      :show-header="false"
      :show-features="false"
      :show-steps="true"
      :show-faq="true"
    />

    <!-- <FeaturesSection
      title="Why Choose Us"
      subtitle="Simple, Fast, Professional Photo Grid Tool"
      :show-header="true"
      :show-features="true"
      :show-steps="false"
      :showWhyToUse="false"
    /> -->

    <!-- <ActionSection /> -->

    <section class="cta-section">
      <div class="cta-content">
        <p class="cta-text">You don't need an art degree. You just need a pencil, a piece of paper, and this Grid Maker. Our grid maker tool makes drawing easy for everyone. Start using the best grid maker online today!</p>
        <a href="#grid-maker" class="cta-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
          Start Creating with Grid Maker
        </a>
      </div>
    </section>

    <AppFooter
      company="Photo Grid App"
      @navigate="handleFooterNavigate"
    />
  </div>
</template>

<script setup lang="ts">
import FeaturesSection from '~/components/FeaturesSection.vue'
import ActionSection from '~/components/ActionSection.vue'
import HeroSection from '~/components/HeroSection.vue'
import AppFooter from '~/components/AppFooter.vue'
import GridMaker from '~/components/GridMaker.vue'
import AppNavbar from '~/components/AppNavbar.vue'

const handleFooterNavigate = (link: { label: string; url: string }) => {
  window.location.href = link.url
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: white;
}

.main-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
}

.grid-maker-section {
  padding: 20px 0;
}

.grid-maker-section .container {
  max-width: 1200px;
  margin: 0 auto;
}

.cta-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  padding: 80px 20px;
  margin: 60px 0;
  border-radius: 16px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 200%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(50%);
  }
}

.cta-content {
  position: relative;
  z-index: 1;
}

.cta-text {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  max-width: 800px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: white;
  color: #8b5cf6;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .cta-text {
    font-size: 1.3rem;
  }
  
  .cta-button {
    padding: 12px 24px;
    font-size: 1rem;
  }
}
</style>