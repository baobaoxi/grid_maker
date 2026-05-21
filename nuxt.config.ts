// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Photo Grid Overlay - Add Custom Grid Lines to Images Online',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Free online photo grid overlay tool - Add custom grid lines to your images. Customizable columns, rows, colors, line width and opacity. No registration required.' },
        { name: 'keywords', content: 'photo grid, image grid overlay, grid generator, photo overlay, grid lines, picture grid, online grid tool, free grid overlay, photo grid maker' },
        { name: 'author', content: 'Photo Grid Overlay' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#667eea' }
      ]
    }
  },
  css: ['~/assets/css/global.css']
})
