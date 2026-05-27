// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Photo Grid Maker for People Who Can’t Draw.',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The ultimate Grid Maker for beginners. Create professional artwork with zero drawing skills. Completely free, no sign-up needed. Upload your photo now!' },
        { name: 'author', content: 'Photo Grid Overlay' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#667eea' },
        { name: 'referrer', content: 'no-referrer-when-downgrade' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
        { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: '' },
        { rel: 'preconnect', href: 'https://images.unsplash.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://picsum.photos', crossorigin: '' }
      ]
    }
  },
  css: ['~/assets/css/global.css'],
  experimental: {
    payloadExtraction: false
  },
  routeRules: {
    '/': { prerender: true },
    '/about': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true }
  },
  performance: {
    prefetchPayloads: true,
    prefetchLinks: true
  }
})
