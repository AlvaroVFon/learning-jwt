import 'colors'

import { seedUsers } from './user.seed'
import { seedRoles } from './role.seed'
import { roles } from '../factories/role.factories'
import { users } from '../factories/user.factorie'

async function seed() {
    await Promise.all([seedRoles(roles), seedUsers(users)])
        .then(() => {
            console.log('Seeds successfully executed'.green)
        })
        .catch((error) => {
            console.log(`${error}`.red)
        })
}

seed()
