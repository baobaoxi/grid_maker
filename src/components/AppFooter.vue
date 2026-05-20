<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-links">
        <a 
          v-for="link in links" 
          :key="link.label"
          :href="link.url"
          class="footer-link"
          @click.prevent="$emit('navigate', link)"
        >
          {{ link.label }}
        </a>
      </div>
      <div class="footer-copyright">
        <p>&copy; {{ year }} {{ company }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  company: {
    type: String,
    default: 'Photo Grid App'
  },
  links: {
    type: Array,
    default: () => [
      { label: 'Privacy Policy', url: '#privacy' },
      { label: 'Terms of Service', url: '#terms' },
      { label: 'About Us', url: '#about' }
    ]
  }
})

defineEmits(['navigate'])

const year = ref(new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 40px;
  padding: 24px 20px;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.9;
  transition: all 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
}

.footer-copyright {
  color: white;
  opacity: 0.7;
  font-size: 0.85rem;
}

.footer-copyright p {
  margin: 0;
}

@media (max-width: 600px) {
  .footer-links {
    flex-direction: column;
    gap: 12px;
  }
}
</style>