module.exports = {
  apps: [
    {
      name: "hono-app",
      script: "dist/server.js",

      // Cluster mode (IMPORTANT)
      exec_mode: "cluster",
      instances: "max",

      // Production settings
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",

      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};