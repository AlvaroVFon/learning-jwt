import pg from 'pg'
import { postgresConfig } from '../config/postgresConfig'

const { Pool } = pg

const pool = new Pool(postgresConfig)

export { pool }
