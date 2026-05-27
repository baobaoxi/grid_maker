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
      steps-title="How It Works"
      :show-header="false"
      :show-features="false"
      :show-steps="true"
      :show-faq="false"
    />

    <FeaturesSection
      title="Why Choose Us"
      subtitle="Simple, Fast, Professional Photo Grid Tool"
      :show-header="true"
      :show-features="true"
      :show-steps="false"
      :showWhyToUse="false"
    />

    <ActionSection />

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
</style>