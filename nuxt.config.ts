/*
 * @Author: yosong
 * @Date: 2024-05-09 11:21:46
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-11 16:06:04
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
      // theme: 'github-light',
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
  },

  devServer: {
    host: '0.0.0.0',
  },

  app: {
    rootId: 'yosong-blog',
    head: {
      meta: [
        { name: 'description', content: 'yosong blog site.' },
        { name: 'author', content: 'yosong' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'msapplication-TileColor', content: '#ffffff' },
        { charset: 'UTF-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      ],
      noscript: [{ children: 'JavaScript is required' }],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/about/yosong.png' }],
      title: 'yosong',
    },
  },
})
