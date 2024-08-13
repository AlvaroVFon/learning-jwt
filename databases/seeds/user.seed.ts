import User from '../../models/User'
import { pool } from '../postgresDB'

async function seedUsers(users: User[]) {
    await cleanUsers().then(() => {
        users.forEach((user) => {
            User.create(user)
                .then(() => {
                    console.log(`User ${user.name} seeded`.green)
                })
                .catch((error) => {
                    console.log(`${error}`.red)
                })
        })
    })
}

async function cleanUsers() {
    try {
        await pool.query('TRUNCATE TABLE users RESTART IDENTITY')
        console.log('Users collection cleaned'.yellow)
    } catch (error) {
        console.log(`${error}`.red)
    }
}

export { seedUsers }
