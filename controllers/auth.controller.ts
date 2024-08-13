import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { generateToken } from '../helpers/generateToken'
import { decode, verify } from 'jsonwebtoken'

async function login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await User.findByEmail(email)

    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const token = await generateToken(user)

    res.json({
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role_id: user.role_id,
        },
        token,
    })
}

async function info(req: Request, res: Response) {
    const token = req.headers.authorization?.split(' ')[1]

    const isValidToken = verify(
        token as string,
        process.env.JWT_SECRET as string,
        (error, decoded) => {
            if (error) {
                return error
            }

            return decoded
        }
    )

    res.json({
        info: isValidToken,
    })
}

export { login, info }
