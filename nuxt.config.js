import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
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
