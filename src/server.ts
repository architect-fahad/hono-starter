import { serve } from '@hono/node-server'
import app from './app.js'
import env from './config/env.js'

serve({
  fetch: app.fetch,
  port: Number(env.PORT || 3000),
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})

process.on("SIGINT", () => {
  console.log("SIGINT received, shutting down gracefully...")
  process.exit(0)
})

process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...")
  process.exit(0)
})