// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  srcDir: '.',
  app: {
    head: {
      title: "Free Online Photo Grid Maker — No Design Skills Needed",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'The ultimate Grid Maker for beginners. Create professional artwork with zero drawing skills. Completely free, no sign-up needed. Upload your photo now!' },
        { name: '_foundr', content: 'b48d6118930e9d6b333e00122fd53cf3' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ],
      script: [
        {
          async: true,
          src: 'https://www.googletagmanager.com/gtag/js?id=G-G9S51Q6KQZ'
        },
        {
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G9S51Q6KQZ');
          `
        }
      ]
    }
  },
  css: ['~/assets/css/global.css']
})
