<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-brand" @click="goHome">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
        <span>GridMaker</span>
      </div>
      
      <div class="navbar-links">
        <a href="/" :class="['nav-link', { active: currentPath === '/' }]">Home</a>
        <a href="/advanced" :class="['nav-link', { active: currentPath === '/advanced' }]">Advanced</a>
        <a href="/pixel-art" :class="['nav-link', { active: currentPath === '/pixel-art' }]">Pixel Art</a>
        <a href="/blog" :class="['nav-link', { active: currentPath === '/blog' }]">Blog</a>
      </div>
      
      <div class="navbar-actions">
        <a href="#grid-maker" class="nav-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
            <path d="m15 5 4 4"></path>
          </svg>
          Start Editing
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const currentPath = ref('/')

const updatePath = () => {
  currentPath.value = window.location.pathname
}

const goHome = () => {
  window.location.href = '/'
}

onMounted(() => {
  updatePath()
  window.addEventListener('popstate', updatePath)
})

onUnmounted(() => {
  window.removeEventListener('popstate', updatePath)
})
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
  max-width: 1600px;
  margin: 0 auto;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: #8b5cf6;
  font-weight: 700;
  font-size: 1.2rem;
}

.navbar-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #8b5cf6;
}

.nav-link.active {
  color: #8b5cf6;
  position: relative;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: #8b5cf6;
  border-radius: 2px;
}

.navbar-actions {
  display: flex;
  gap: 16px;
}

.nav-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.nav-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 12px 20px;
  }
  
  .navbar-links {
    display: none;
  }
  
  .navbar-brand span {
    font-size: 1rem;
  }
}
</style>