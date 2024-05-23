/*
 * @Author: yosong
 * @Date: 2024-05-23 12:01:54
 * @LastEditors: Do not edit
 * @LastEditTime: 2024-05-23 12:29:54
 * @FilePath: \blog\components\yo\yoPop\index.ts
 */
import { createApp, type App, type Component } from 'vue'
import YoPop from './YoPop.vue'

let pop: App
let div: HTMLElement

export default function (cpn?: Component, props?: any) {
  // 创建dom并插入到body中
  div = document.createElement('div')
  div.setAttribute('id', 'yo-pop--')
  document.body.appendChild(div)

  // 创建组件
  pop = createApp(cpn || YoPop, props)
  pop.mount(div)

  return {
    onHandleClose() {
      pop.unmount()
      div.remove()
    },
  }
}
