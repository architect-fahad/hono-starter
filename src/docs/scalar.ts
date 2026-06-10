import {OpenAPIHono} from '@hono/zod-openapi'
import {Scalar} from '@scalar/hono-api-reference'
import app from '../app.js'

export default function registerScalarDocs(app: OpenAPIHono) {
    app.get("/docs", Scalar({
        url: "/openapi.json",
        pageTitle: "Scalar API Reference",
        theme: "purple"
    }))
}