export default function yoMitt() {
  // 所有事件
  let all = new Map()

  return {
    /**
     * 订阅方法
     * @param {*} key  传递的事件key
     * @param {*} handler  事件处理函数
     */
    on(key: string, handler: Function) {
      const handlers = all.get(key) || []
      handlers.push(handler)
      // 添加对应的事件
      all.set(key, handlers)
    },
    /**
     * 发布方法
     * @param {*} key 发布给订阅者的key
     * @param {*} params  发布者的参数，告诉订阅者我发布了什么内容。
     */
    emit(key: string, params?: any) {
      const handlers = all.get(key)
      // 执行订阅者的事件
      if (handlers) {
        handlers.map((handler: Function) => {
          handler(params)
        })
      }
    },
    // ...
  }
}
