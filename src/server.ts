import { serve } from '@hono/node-server'
import app from './app.js'

serve({
  fetch: app.fetch,
  port: 3000
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