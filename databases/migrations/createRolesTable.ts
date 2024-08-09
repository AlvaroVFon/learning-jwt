import { pool } from '../postgresDB'
import 'colors'
async function createRolesTable() {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS roles (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `

        await pool.query(query).then(() => {
            console.log('Table roles successfully'.cyan)
        })
    } catch (error) {
        console.log(error)
    }
}

export { createRolesTable }
