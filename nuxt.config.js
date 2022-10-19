import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'scripts/segment.js' },
        { src: 'scripts/liveChat.js' }
      ],
    },
  },
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: '6OdNIFbi2BZEvRwmjRdHfQtt',
        apiOptions: {
          region: 'us'
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
});
