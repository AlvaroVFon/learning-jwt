import Role from '../../models/Role'
import { pool } from '../postgresDB'

const seedRoles = async (roles: Role[]) => {
    try {
        await cleanRoles()

        console.log('Seeding roles...'.yellow)

        roles.forEach(async (role) => {
            await Role.create(role).catch((error) => {
                console.log(error)
            })
        })
    } catch (error) {
        console.log(`${error}`.red)
    }
}

async function cleanRoles() {
    try {
        await pool.query('TRUNCATE TABLE roles RESTART IDENTITY CASCADE')
        console.log('Roles table cleaned'.yellow)
    } catch (error) {
        console.log(`${error}`.red)
    }
}

export { seedRoles }
