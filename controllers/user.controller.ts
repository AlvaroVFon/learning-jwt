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

    const user: User | any = await User.findOne(Number(id))

    if (user.length === 0) {
        res.status(404).json({
            statusMessage: 'Not Found',
            msg: 'User not found',
        })
        return
    }

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

    const response = await User.create(user)
        .then((res: any) => {
            if (res.name === 'error') {
                return {
                    statusMessage: 'error',
                    msg: res.detail,
                }
            }
            return {
                statusMessage: 'success',
                msg: 'Create user successful',
                data: res,
            }
        })
        .catch((err: any) => err)

    if (response.statusMessage === 'error') {
        res.status(400).json(response)
        return
    }

    res.json(response)
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
