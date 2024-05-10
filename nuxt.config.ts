/*
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-10 10:21:53
 * @FilePath: \blog\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@unocss/nuxt', '@nuxt/content'],

  css: [
    '@unocss/reset/tailwind.css',
    './assets/common.css',
    'aos/dist/aos.css',
    './assets/markdown.scss',
  ],

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'current-nav',
      },
    },
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-light',
    },
  },

  devServer: {
    host: '0.0.0.0',
  },
})
