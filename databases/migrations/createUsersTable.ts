import { pool } from '../postgresDB'
import 'colors'

const createUsersTable = async () => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(100) NOT NULL,
                role_id int REFERENCES roles(id) DEFAULT 4,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                deleted_at TIMESTAMP DEFAULT NULL
            )
        `
        await dropUsersTable()
            .then(() => {
                console.log('Table users dropped'.yellow)
            })
            .catch((error) => {
                console.log(error)
            })
        await pool.query(query).then(() => {
            console.log('Table users created'.yellow)
        })
    } catch (error) {
        console.log(error)
    }
}

async function dropUsersTable() {
    try {
        const query = `
            DROP TABLE IF EXISTS users
        `
        await pool.query(query).then(() => {
            console.log('Table users dropped'.yellow)
        })
    } catch (error) {
        console.log(error)
    }
}

export { createUsersTable }
