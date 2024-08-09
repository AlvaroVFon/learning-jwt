import { IUser } from '../interfaces/IUser'
import { pool } from '../databases/postgresDB'

class User implements IUser {
    id?: number
    name: string
    email: string
    password: string
    role_id?: number
    created_at?: string
    updated_at?: string
    deleted_at?: string

    constructor(user: IUser) {
        this.id = user.id
        this.name = user.name
        this.email = user.email
        this.password = user.password
        this.role_id = user.role_id
        this.created_at = user.created_at
        this.updated_at = user.updated_at
        this.deleted_at = user.deleted_at
    }

    static async getAll(page: number, perPage: number) {
        const LIMIT = perPage
        const offset = (page - 1) * LIMIT

        const totalUsers = await pool
            .query('SELECT COUNT(*) FROM users')
            .then((res) => res.rows[0].count)

        const totalPages = Math.ceil(totalUsers / LIMIT)

        try {
            const result = await pool
                .query(
                    'SELECT id, name, email, role_id, created_at FROM users WHERE deleted_at IS NULL ORDER BY id LIMIT $1 OFFSET $2 ',
                    [LIMIT, offset]
                )
                .then((res) => res.rows)

            return { result, page, perpage: LIMIT, totalPages }
        } catch (error) {
            return error
        }
    }

    static async findOne(id: number) {
        try {
            const result = await pool
                .query(
                    'SELECT id, name, email, role_id, created_at FROM users WHERE id = $1',
                    [id]
                )
                .then((res) => res.rows)

            return result
        } catch (error) {
            return error
        }
    }

    static async findByEmail(email: string) {
        try {
            const result = await pool
                .query('SELECT email, password FROM users WHERE email = $1', [
                    email,
                ])
                .then((res) => res.rows[0])

            return result
        } catch (error) {
            return error
        }
    }

    static async create(user: IUser) {
        const { name, email, password, role_id } = user

        try {
            await pool.query(
                'INSERT INTO users (name, email, password, role_id) VALUES ($1, $2, $3, $4)',
                [name, email, password, role_id]
            )

            return user
        } catch (error) {
            return error
        }
    }

    static async update(id: number, user: IUser) {
        const { name, email, password, role_id } = user

        try {
            await pool.query(
                'UPDATE users SET name = $1, email = $2, password = $3, role_id = $4 WHERE id = $5',
                [name, email, password, role_id, id]
            )

            return user
        } catch (error) {
            return error
        }
    }
    static async delete(id: number) {
        try {
            await pool.query('DELETE FROM users WHERE id = $1', [id])

            return { message: 'User deleted' }
        } catch (error) {
            return error
        }
    }

    static async softDelete(id: number) {
        try {
            await pool.query(
                'UPDATE users SET deleted_at = NOW() WHERE id = $1',
                [id]
            )

            return { message: 'User deleted' }
        } catch (error) {
            return error
        }
    }

    static async restore(id: number) {
        try {
            await pool.query(
                'UPDATE users SET deleted_at = NULL WHERE id = $1',
                [id]
            )

            return { message: 'User restored' }
        } catch (error) {
            return error
        }
    }
}

export default User
