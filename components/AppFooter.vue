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

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
  company?: string
  links?: Array<{ label: string; url: string }>
}>(), {
  company: 'Photo Grid App',
  links: () => [
    { label: 'Privacy Policy', url: '/privacy' },
    { label: 'Terms of Service', url: '/terms' },
    { label: 'About Us', url: '/about' },
    { label: 'Blog', url: '/blog' }
  ]
})

defineEmits<{
  navigate: [link: { label: string; url: string }]
}>()

const year = ref(new Date().getFullYear())
</script>
