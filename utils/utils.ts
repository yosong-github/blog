// 防抖函数
const debounce = function (fn: Function, timeout: number = 600) {
  let timer: NodeJS.Timeout | undefined = undefined;
  return function (...args: any) {
    clearTimeout(timer);
    // @ts-ignore
    const _this = this;
    timer = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
    }, timeout);
  };
};

// 列队
/*
  实现一个自定义异步任务的队列，同一时间只能运行指定个数的任务
 */
function queue(
  tasks: ((...args: any) => Promise<any>)[],
  maxNumber: number = 3
) {
  if (tasks.length == 0) return;

  let currentIndex = 0;

  function run() {
    if (currentIndex >= tasks.length) return;
    new Promise((resolve, reject) => {
      tasks[currentIndex]()
        .finally(() => {
          run();
        })
        .then((res) => {
          resolve(res);
        });

      currentIndex++;
    });
  }

  for (let index = 0; index < maxNumber; index++) {
    run();
  }
}

function getRandomNumber(min: number = 1000, max: number = 3000): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { queue, getRandomNumber };
