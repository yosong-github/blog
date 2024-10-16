module.exports = {
  apps: [
    {
      name: 'yosong_blog', // 应用程序名称
      port: '80http://139.9.32.77:7111/', // 监听端口
      args: '', // 传递给脚本的参数
      instances: 'max', // 应用实例数
      autorestart: true, // 自动重启
      watch: false, // 监控文件变动
      exec_mode: 'cluster',
      script: './.output/server/index.mjs', // 主脚本
    },
  ],
};

