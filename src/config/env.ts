import {z} from 'zod'
import 'dotenv/config';

const envSchema = z.object({
    PORT: z.string().default('3000'),
    NODE_ENV: z.enum(['development', 'production', 'test']),
})

const env = envSchema.parse(process.env)

export default env