import dotenv from 'dotenv'
import { ClientConfig } from 'pg'
dotenv.config()

const postgresConfig: ClientConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
}

export { postgresConfig }
