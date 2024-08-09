import User from '../../models/User'
import { pool } from '../postgresDB'

async function seedUsers(users: User[]) {
    await cleanUsers()

    console.log('Seeding users...'.yellow)

    users.forEach(async (user) => {
        await User.create(user).catch((error) => {
            console.log(`${error}`.red)
        })
    })
}

async function cleanUsers() {
    try {
        await pool.query('DELETE FROM users')
        console.log('Users collection cleaned'.yellow)
    } catch (error) {
        console.log(`${error}`.red)
    }
}

export { seedUsers }
