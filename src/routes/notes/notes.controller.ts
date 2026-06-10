import type { Context } from 'hono'
import { listNotesRoute } from './notes.schema.js';
import type { RouteHandler } from '@hono/zod-openapi';

export const listNotes: RouteHandler<typeof listNotesRoute> = async (c: Context) => {

  c.var.logger.info('Listing notes')

  return c.json([
    {
      id: '1',
      title: 'First Note',
      content: 'Hello',
    },
  ])
}