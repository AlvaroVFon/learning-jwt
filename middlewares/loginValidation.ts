import { loginSchema } from '../schemas/login.schema'
import { Request, Response, NextFunction } from 'express'

function loginValidation(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body

    const loginValidation = loginSchema.validate({ email, password })

    if (loginValidation.error) {
        return res.status(400).json({
            msg: loginValidation.error.details[0].message,
        })
    }

    next()
}

export { loginValidation }
