import type { Context } from 'hono';

const notFoundHandler = (c: Context) => {
  return c.json(
    {
      success: false,
      error: {
        code: 'NOT_FOUND',
        message: `Route ${c.req.path} not found`,
      },
    },
    404,
  )
}

export default notFoundHandler
