import { OpenAPIHono } from '@hono/zod-openapi'

import health from './health.route.js'
import notes from './notes/notes.routes.js'

const routes = new OpenAPIHono()

routes.route('/health', health)
routes.route('/notes', notes)


export default routes