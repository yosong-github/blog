/*
 * @Author: yosong
 * @Date: 2024-05-09 11:28:00
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-11 14:58:47
 * @FilePath: \blog\uno.config.ts
 */
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    'flex-center': 'flex items-center justify-center',
    'current-nav': 'bg-Accent c-white',
    'color-type-active': '--bg-color',
    'color-type': 'color-#aaa',
  },
  theme: {
    colors: {
      // ...
      Accent: 'var(--color-accent)',
      AccentLight: '#FBFBff',
    },
  },
  presets: [
    presetUno({
      dark: 'class',
    }),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: ['Inter', 'Noto Sans Simplified Chinese'],
        mono: ['Fira Mono:400,700'],
        hand: ['Dancing Script'],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
