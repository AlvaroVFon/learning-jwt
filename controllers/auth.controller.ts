import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import { generateToken } from '../helpers/generateToken'

async function login(req: Request, res: Response) {
    const { email, password } = req.body

    const user = await User.findByEmail(email)

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
        return res.status(400).json({ message: 'Invalid email or password' })
    }

    const token = await generateToken({ email, password })

    res.json({ user, token })
}

export { login }
