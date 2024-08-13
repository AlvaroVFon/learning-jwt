import { Router, Request, Response } from 'express'
import { info, login } from '../controllers/auth.controller'
import { loginValidation } from '../middlewares/loginValidation'
import { userValidator } from '../middlewares/userValidator'
import {
    deleteUser,
    getUserById,
    getUsers,
    restoreUser,
    softDeleteUser,
    storeUser,
    updateUser,
} from '../controllers/user.controller'
import { checkAuthHeader } from '../middlewares/checkAuthHeader'
import { updateUserValidator } from '../middlewares/updateUserValidator'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    res.json({
        statusMessage: 'success',
        msg: 'Welcome to Express API',
    })
})

router
    .get('/users', getUsers)
    .get('/users/:id', getUserById)
    .post('/users', userValidator, storeUser)
    .put('/users/:id', updateUserValidator, updateUser) //TODO: create new validator for update
    .put('/users/delete/:id', softDeleteUser)
    .put('/users/restore/:id', restoreUser) //TODO: create isAdmin middleware for restore
    .delete('/users/:id', deleteUser)

router.post('/login', loginValidation, login)

router.post('/auth/info', checkAuthHeader, info)

export { router }
