import { Request, Response, NextFunction } from 'express'
import { updateUserSchema } from '../schemas/updateUser.schema'

export const updateUserValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = updateUserSchema.validate(req.body)
    if (error) {
        return res.status(400).json({
            statusMessage: 'error',
            msg: error.message,
        })
    }

    next()
}
