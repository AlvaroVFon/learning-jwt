import { IRole } from '../interfaces/IRole'
import { pool } from '../databases/postgresDB'
import { RoleType } from '../enums/RoleType.enum'

class Role implements IRole {
    id?: RoleType
    name: string
    created_at?: string
    updated_at?: string
    deleted_at?: string

    constructor(role: IRole) {
        this.name = role.name
    }

    static async create(role: IRole) {
        try {
            await pool.query('INSERT INTO roles (name) VALUES ($1)', [
                role.name,
            ])
        } catch (error) {}
    }
}

export default Role
