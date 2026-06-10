import { OpenAPIHono } from '@hono/zod-openapi'

import { listNotesRoute } from './notes.schema.js';
import { listNotes } from './notes.controller.js';

const notes = new OpenAPIHono()

notes.openapi(listNotesRoute, listNotes)

export default notes