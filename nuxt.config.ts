/*
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 17:25:35
 * @FilePath: \blog\nuxt.config.ts
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@unocss/nuxt', '@nuxt/content'],

  css: ['@unocss/reset/tailwind.css', './assets/common.css'],

  experimental: {
    defaults: {
      nuxtLink: {
        activeClass: 'current-nav',
      },
    },
  },

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'vitesse-light',
        // Theme used if `html.dark`
        dark: 'vitesse-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },

  devServer: {
    host: '0.0.0.0',
  },
})
