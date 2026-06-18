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

  // Deployment configuration (опционально, используем GitLab CI)
  deploy: {
    production: {
      user: "deployer",
      host: "potapov.me",
      ref: "origin/main",
      repo: "git@gitlab.com:username/potapov.me.git",
      path: "/var/www/bronesto.fun",
      "post-deploy":
        "npm ci && npm run build && pm2 reload ecosystem.config.cjs --env production",
    },
  },
};