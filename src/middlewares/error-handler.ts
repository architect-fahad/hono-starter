import type { Context } from 'hono'
export default function errorHandler(err: any, c: Context) {
  return c.json(
    {
      success: false,
      error: {
        code: 'INTERNAL_SERVER_ERROR',
        message: err.message || 'An unexpected error occurred',
      },
    },
    500,
  )
}
