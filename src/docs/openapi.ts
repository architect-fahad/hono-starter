import type {OpenAPIHono} from '@hono/zod-openapi'

export default function registerOpenAPIDocs(app: OpenAPIHono) {
    app.doc('/openapi.json', {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
    },
    })
}
