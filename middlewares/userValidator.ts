import { userSchema } from '../schemas/user.schema'
import { Request, Response, NextFunction } from 'express'

export const userValidator = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { error } = userSchema.validate(req.body)
    if (error) {
        return res.status(400).json({
            statusMessage: 'error',
            msg: error.message,
        })
    }

    next()
}
