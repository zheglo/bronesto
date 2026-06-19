module.exports = {
  apps: [
    {
      name: "bronesto",
      cwd: "/var/www/bronesto.fun",
      script: "build/index.js",
      args: "start -p 3000",

      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      exec_mode: "cluster",
      instances: 2,

      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "500M",

      // Logging
      out_file: "./logs/pm2-out.log",
      error_file: "./logs/pm2-error.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,

      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],


  deploy: {
    production: {
      user: "zheglo,
      host: "bronesto",
      ref: "origin/maister",
      repo: "https://github.com/zheglo/bronesto.git",
      path: "/var/www/bronesto.fun",
      "post-deploy":
        "pnpm ci && pnpm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};