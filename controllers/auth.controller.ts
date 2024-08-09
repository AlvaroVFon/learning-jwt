import { Request, Response } from 'express'
import jsonwebtoken from 'jsonwebtoken'

function login(req: Request, res: Response) {
    const { email, password } = req.body

    const token = jsonwebtoken.sign({ email, password }, 'secret')

    res.json({
        statusMessage: 'success',
        msg: 'Login successful',
    })
}

export { login }
