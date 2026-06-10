import {OpenAPIHono} from '@hono/zod-openapi'
import { HTTPException } from 'hono/http-exception'
import routes from './routes/index.js'
import registerOpenAPISpec from './docs/openapi.js'
import registerScalarDocs from './docs/scalar.js'
import notFoundHandler from "./middlewares/not-found.js"
import errorHandler from "./middlewares/error-handler.js"
import loggerMiddleware from "./middlewares/logger.js"
import env from './config/env.js'

const app = new OpenAPIHono()

app.use(loggerMiddleware)

app.route('/', routes)

registerOpenAPISpec(app)
registerScalarDocs(app)

app.notFound(notFoundHandler)
app.onError(errorHandler)

console.log(env.NODE_ENV)

export default app