import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { structuredLogger } from '@hono/structured-logger';
import pino from 'pino';
import env from '../config/env.js'; 

const isDevelopment = env.NODE_ENV === 'development';

const rootLogger = pino({
    level: isDevelopment ? 'debug' : 'info',
    transport: isDevelopment ? {
        target: 'pino-pretty',
        options: {
            colorize: true,
            translateTime: 'dd-mm-yyyy HH:MM:ss.l o',
        },
    }: undefined,
});

const loggerMiddleware = structuredLogger({
    createLogger: (c) => rootLogger.child({ requestId: c.var.requestId }),
})

export default loggerMiddleware