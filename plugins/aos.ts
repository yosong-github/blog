/*
 * @Author: yosong
 * @Date: 2024-05-09 21:32:32
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-09 21:32:38
 * @FilePath: \blog\plugins\aos.ts
 */
import AOS from 'aos'
export default defineNuxtPlugin(() => {
  return {
    provide: {
      aos: () => AOS,
    },
  }
})
