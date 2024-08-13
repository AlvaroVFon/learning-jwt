import 'colors'

import { seedUsers } from './user.seed'
import { seedRoles } from './role.seed'
import { roles } from '../factories/role.factories'
import { users } from '../factories/user.factorie'

async function seed() {
    console.log(roles, users)
    await Promise.all([seedRoles(roles), seedUsers(users)])
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(`${error}`.red)
        })
}

seed()
