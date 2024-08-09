import { Response, Request } from 'express'
import { securePassword } from '../helpers/securePassword'
import User from '../models/User'

async function getUsers(req: Request, res: Response) {
    const { page = 1, perPage = 5 } = req.query

    const users = await User.getAll(Number(page), Number(perPage))

    res.json({
        statusMessage: 'success',
        msg: 'Get users successful',
        data: users,
    })
}

async function getUserById(req: Request, res: Response) {
    const { id } = req.params

    const user = await User.findOne(Number(id))

    res.json({
        statusMessage: 'success',
        msg: 'Get user successful',
        data: user,
    })
}

async function storeUser(req: Request, res: Response) {
    const { name, email, password, role_id }: User = req.body

    const user: User = {
        name,
        email,
        password: await securePassword(password),
        role_id,
    }

    const result = await User.create(user)

    res.json({
        statusMessage: 'success',
        msg: 'Create user successful',
        data: result,
    })
}

async function updateUser(req: Request, res: Response) {
    const { id } = req.params
    const { name, email, password, role_id }: User = req.body

    const user: User = {
        name,
        email,
        password: await securePassword(password),
        role_id,
    }

    const result = await User.update(Number(id), user)

    res.json({
        statusMessage: 'success',
        msg: 'Update user successful',
        data: result,
    })
}

async function deleteUser(req: Request, res: Response) {
    const { id } = req.params

    const result = await User.delete(Number(id))

    res.json({
        statusMessage: 'success',
        msg: 'Delete user successful',
        data: result,
    })
}

async function softDeleteUser(req: Request, res: Response) {
    const { id } = req.params

    const result = await User.softDelete(Number(id))

    res.json({
        statusMessage: 'success',
        msg: 'Soft delete user successful',
        data: result,
    })
}

async function restoreUser(req: Request, res: Response) {
    const { id } = req.params

    const result = await User.restore(Number(id))

    res.json({
        statusMessage: 'success',
        msg: 'Restore user successful',
        data: result,
    })
}

export {
    getUsers,
    getUserById,
    storeUser,
    updateUser,
    deleteUser,
    softDeleteUser,
    restoreUser,
}
