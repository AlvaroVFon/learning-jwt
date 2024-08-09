import 'colors'

import { createUsersTable } from './createUsersTable'
import { createRolesTable } from './createRolesTable'

async function migrations() {
    Promise.all([createRolesTable(), createUsersTable()])
        .then(() => {
            console.log('Migrations successfully executed'.green)
        })
        .catch((error) => {
            console.log(`${error}`.red)
        })
}

migrations()
