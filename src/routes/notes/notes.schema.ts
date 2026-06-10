import {createRoute, z} from '@hono/zod-openapi'

export const NoteSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  content: z.string().min(1),
}).openapi('Note')

export const CreateNoteSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export const listNotesRoute = createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      description: 'List notes',
      content: {
        'application/json': {
          schema: z.array(NoteSchema),
        },
      },
    },
  },
})