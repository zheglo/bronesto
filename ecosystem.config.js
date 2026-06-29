module.exports = {
  apps : [{
    name: 'bronesto',
    cwd: '/home/zheglo/bronesto',
    script: '/home/zheglo/bronesto/build/index.js',
    exec_mode: 'cluster',
    watch: false,
  }],
    env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

    autorestart: true,
    max_restarts: 10,
    min_uptime: "10s",
    max_memory_restart: "500M",
    restart_delay: 5000,

    kill_timeout: 5000,
    wait_ready: true,
    listen_timeout: 10000,

  deploy: {
    production: {
      user: "zheglor",
      host: "bronesto.fun",
      ref: "origin/master",
      repo: "https://github.com/zheglo/bronesto.git",
      path: "/home/zheglo/bronesto",
      "post-deploy":
        "pnpm install && pnpm run build && pm2 reload ecosystem.config.cjs",
    },
  }
}